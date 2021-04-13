import Template from '../io/temp/temp.ts'
import App from '../io/app/index.ts'

let isAppCreated : Boolean | undefined;

//#region update to new file
async function createApp(){

  try{

    for await (const dirEntry of Deno.readDir("client")) {
      if(dirEntry.name.toString() == "china"){
        isAppCreated = true;
      }
 
    }

    if(!isAppCreated){
     
      getApp();
    }

    console.log("happy coding...🦖");


  }catch(e){

    if(Deno.errors.NotFound.name == e.name){
      console.log("File Does not Exist")
      createFolder();
    }
  }
}


async function createFolder(){

  console.log("Creating Client Folder")
  try{
    
   let folder = await Deno.mkdir("client");
   console.log("Folder Created");
   console.log("Creating the app");
   await getApp();
  

  }catch(e){

    if(Deno.errors.AlreadyExists.name == e.name){
      console.log("Folder Already Exists")
    }

  }

}


async function getApp(){

  const gitProcess = Deno.run({
    cmd: ["git","clone","https://github.com/devUniversity/project-china.git","client/china"],
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await gitProcess.status();

if (code === 0) {
  const rawOutput = await gitProcess.output();
  await Deno.stdout.write(rawOutput);

  const status  = await commandGit("rm",["-rf","--cached"," ."]);


  if(status === true ){
    Deno.chdir("client/china");
   
    const result = await commandGit("remote",["rename","origin","china"]);

    if(result == true){
   
      console.log("happy coding...🦖 you can contribute with the china remote");
    }

  }else{

    console.log("China Directory does not exist");
  }



} else {
  const rawError = await gitProcess.stderrOutput();
  const errorString = new TextDecoder().decode(rawError);
  console.log("project already exsists you may begin coding");
}

Deno.exit(code);
}



async function commandGit(command: string, flags: string[]){
  // TODO make this more modular

  console.log(flags);
  const gitProcess = Deno.run({
    cmd: ["git",command,flags[0],flags[1],flags[2]],
    stdout: "piped",
    stderr: "piped",
  });


  const { code } = await gitProcess.status();

  if (code === 0) {
    const rawOutput = await gitProcess.output();
    await Deno.stdout.write(rawOutput);

    return true
  }
    else{
      const rawError = await gitProcess.stderrOutput();
      const errorString = new TextDecoder().decode(rawError);

      if(errorString.includes("pathspec")){
        console.log(errorString,"cache has already been cleared");
        return true;
      }else{
        console.log(errorString,"failed to clear cache");
        return false;
      }
 

  }
}


//#endregion



if (import.meta.main) {
  
  const expr = Deno.args[1];
switch (expr) {
  case 'spa':
    console.log("starting to create app..."); 
    createApp();
    break;
  case 'Server':
    console.log('Creating Server');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  case 'template':
    Template()
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
    case 'app':
      console.log("init app");
      App();
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, you need to select and option checkout --help to find out what is availbile`);
}


}
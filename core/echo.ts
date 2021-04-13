const watcher = Deno.watchFs('./');
let filename: string | undefined;


async function fileWatcher(){
    try{
        for await (const event of watcher){
            console.log(">>>> event", event.kind)
            if(event.kind.toString() == "modify" ){
                console.log("updating server");
                runDeno();
            }
        }
    }

    catch(e){
        console.log(e)
    }

    
}


async function runDeno(){

    try {
         const gitProcess = Deno.run({
            cmd: ["deno","run","--allow-read","--allow-write","--allow-run", filename!],
          });
      
          await gitProcess.status
    }
    catch(e){
        console.log(e)
    }

  }
  


  if (import.meta.main) {

    filename = Deno.args[0];
    fileWatcher();
    console.log("Watching the file", filename);
    
  }


import * as sdk from "../../imports/index.ts";
const directory = `./${sdk.env.get('tool')}/io/spa`


const app = async () => {


    //ensureDir("./notes").then(() => console.log('has')).catch(() => console.log("err"))
    try {
        console.log(`creating ${Deno.args}`)
        console.log(`in folder ${Deno.cwd()}`)
        //await Deno.chmod(Deno.cwd(), 0o777);
        //console.log(`Creating ${name} Folder`)
        //await sdk.CraeteFolder(`./`)



        try {

            await sdk.copyDirectory(`${directory}/resources`)
            
      
        } catch(err) {
            console.log("unable to copy files",err)
        }


    } catch (e) {
        console.log("unable to copy folder", e)
    }


}


async function getList(path: string, pre = "") {
    for await (const dirEntry of Deno.readDir(path)) {

        const entryPath = `${path}/${dirEntry.name}`;
        const getPath = entryPath.split('/')

        let dest = `${pre}${dirEntry.name}`

        //console.log();
        if (dirEntry.isDirectory) {

            await  sdk.CraeteFolder(`./${dest}`);

            await getList(entryPath, `${dest}/`);


        } else if (dirEntry.isFile) {
            await Deno.copyFile(entryPath, `./${dest}`);
        }
    }

}



export default app
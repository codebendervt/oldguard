import * as sdk from "../imports/index.ts";

async function getList(path: string, pre = "") {
    for await (const dirEntry of Deno.readDir(path)) {

        const entryPath = `${path}/${dirEntry.name}`;
        const getPath = entryPath.split('/')
        let dest = `${pre}${dirEntry.name}`

        //console.log();
        if (dirEntry.isDirectory) {

            await sdk.CraeteFolder(`./${dest}`);

            await getList(entryPath, `${dest}/`);


        } else if (dirEntry.isFile) {

         
            await Deno.copyFile(entryPath, `./${dest}`);
        }
    }

}

export default getList;
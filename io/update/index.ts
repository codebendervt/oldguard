// import { assert } from "https://deno.land/std/testing/asserts.ts";
const directory = `./${sdk.env.get('tool')}/io/engine`
import * as sdk from "../../imports/index.ts";

const update = () => {



    const checkFile = async () => {

        const watcher = Deno.watchFs("engine");
        console.log('watching the files to update')
        for await (const event of watcher) {



            if (event.kind == "modify") {
                await sdk.copyDirectory(`./engine/`, `${directory}/`)

                console.log(">>>> updated");
            }

            if (event.kind == "remove") {

                let path = event.paths[0].split('\\');

                if (path.length == 0) {
                    path = event.paths[0].split('/')
                }
                console.log(path)
                let deleteFile = ''
                let key: number
                path.map((path, k) => {

                    if (path == "engine") {
                        key = k
                    }

                    if (k > key) {
                        deleteFile += `/${path}`
                    }
                })

                // const fileInfo = Deno.statSync(`${directory}${deleteFile}`);

                await Deno.remove(`${directory}${deleteFile}`,{ recursive: true });
                // if (fileInfo.isFile) {
                //     await Deno.remove(`${directory}${deleteFile}`,{ recursive: true });
                // } else {
                //     await Deno.remove(`${directory}${deleteFile}/`);
                // }



            }


        }


    }


    checkFile()
}


export default update
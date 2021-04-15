import * as sdk from "../../imports/index.ts";
const directory = `./${sdk.env.get('tool')}/io/engine`


const engine = async () => {


    //ensureDir("./notes").then(() => console.log('has')).catch(() => console.log("err"))
    try {
        // console.log(`creating ${Deno.args}`)
        // console.log(`in folder ${Deno.cwd()}`)
        try {

            let type = await sdk.prompt('Engine Name: ');
            let main = await sdk.prompt(`${capitalize(type)} name: `);

            let url = type
            if (type == "api") {
                url = `pages/${type}/`

                await sdk.CraeteFolder(`${url}/${main}`)
            }

            await sdk.copyDirectory(`${directory}/${type}/${main}`, `${url}/${main}/`)

            if (type == "components") {

                let _import = `import ${capitalize(main)} from '../${main}/component' \n`
                let _export = `export {${capitalize(main)}} \n`

                const write = await Deno.writeTextFile("components/index.js", `${_import}${_export}`, { append: true });

            }

            console.log(`${type} created`)




        } catch (err) {
            console.log("unable to copy files", err)
        }


    } catch (e) {
        console.log("unable to copy folder", e)
    }
}


const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default engine;
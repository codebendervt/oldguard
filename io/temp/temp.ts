import CraeteFolder from '../../utils/folder.ts'

const directory = "./oldguard/io/temp"


const template = async () => {

    console.log(`creating template ${Deno.args}`)

    //ask input

    let main = await prompt('Enter main folder')
    let sub = await prompt('Enter Sub Folder')
    let temp = await prompt('Enter Template Name')
    let name = await prompt('Enter File Name')

    // // let status = await CraeteFolder(`./${Deno.args[2]}/${Deno.args[1]}`)
    let status = await CraeteFolder(`./${main}/${sub}`)
    console.log(`Creating ./${main}/${sub} Folder`, status)

    if (status) {

        try {
             console.log(`generating template`)

            await Deno.copyFile(`${directory}/templates/${temp}.js`, `./${main}/${sub}/${name}.js`);

            console.log('template generated')

        } catch (e) {
            console.log("Unable to generate file",e)
        }
    }
}



async function prompt(message: string = "") {
    const buf = new Uint8Array(1024);
    await Deno.stdout.write(new TextEncoder().encode(message + ": "));
    const n = <number>await Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
}




export default template
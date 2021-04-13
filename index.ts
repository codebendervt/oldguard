import "./imports/index.ts";
const env = Deno.env;
let url = Deno.cwd() + "/" + env.get('tool');

async function runCli() {

  try {

    let cloudUrl = env.get('toolCloud')
    // console.log(Deno.env.toObject());
    console.log("Hello",env.get('USERNAME'))

    if (Deno.args[0] == "cloud" && cloudUrl) {
      console.log('getting cloud version')
      url= cloudUrl.toString()
    } else {
      console.log('init local version')
    }

    const gitProcess = Deno.run({
      cmd: ["deno", "run", "--allow-read", "--allow-write", "--allow-run","--allow-env", `${url}/core/cli.ts`, ...Deno.args],
      stderr: "piped",
    });



    const { code } = await gitProcess.status();

    if (code === 0) {
      //const rawOutput = await gitProcess.output();
      // await Deno.stdout.write(rawOutput);

      // const rawInput = await gitProcess.stdin.write();
      //await Deno.stdout.write(rawOutput);
    } else {
      const rawError = await gitProcess.stderrOutput();
      const errorString = new TextDecoder().decode(rawError);
      console.log(errorString, "please indicate the project you would like to create");
    }

    Deno.exit(code);
  }
  catch (e) {
    console.log("failing to do something", e)
  }

}


if (import.meta.main) {

  runCli();

}
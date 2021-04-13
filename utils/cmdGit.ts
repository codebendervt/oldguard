async function commandGit(command: string, flags: string[]){
  // TODO make this more modular

  //console.log(flags);
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

      if(errorString.includes("fatal")){
        console.log(errorString,"initialize git");
        return true;
      }else{
        console.log(errorString,"failed to clear cache");
        return false;
      }
 

  }
}


export default commandGit;
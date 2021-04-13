

const getCMDState = async (process : any) => {

    const { code } = await process.status();

    if (code === 0) {
      const rawOutput = await process.output();
      await Deno.stdout.write(rawOutput);
  
      return true
    }
      else{
        const rawError = await process.stderrOutput();
        const errorString = new TextDecoder().decode(rawError);
  
        if(errorString.includes("pathspec")){
          console.log(errorString,"process has been completed");
          return true;
        }else{
          console.log(errorString,"unable to complete process");
          return false;
        }
   
  
    }
}

export default getCMDState;
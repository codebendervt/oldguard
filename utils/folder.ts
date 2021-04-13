async function createFolder(name: string) {

    
    try {

        await Deno.mkdir(name, { recursive: true });

        return true

    } catch (e) {

        if (Deno.errors.AlreadyExists.name == e.name) {

            return (false)
        }

    }

}

export default createFolder
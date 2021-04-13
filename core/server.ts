import { serve, ServerRequest, Response } from "https://deno.land/std/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";


const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {

    let params = req.url.split("?")[1]
    console.log(params)
    let searchParams = new URLSearchParams(params);
    const decoder = new TextDecoder();
    const buf: Uint8Array = await Deno.readAll(req.body);
    console.log(decoder.decode(buf))
    console.log(req.url)
    console.log(searchParams.get("type"))


    let response: Response = {};
    try {
        if (req.url == "/") {

            response = await serveFile(req, './oldguard/core/index.html');
        }else{
            response.body = JSON.stringify({ name: "Hello World" })
        }
    } catch {
        response.body = JSON.stringify({ name: "Error" })
    }

    req.headers.set("Content-Type", "application/json");

    response.status = Status.OK
    req.respond(response);
    serverLog(req, response!);

}





function serverLog(req: ServerRequest, res: Response): void {
    const d = new Date().toISOString();
    const dateFmt = `[${d.slice(0, 10)} ${d.slice(11, 19)}]`;
    const s = `${dateFmt} "${req.method} ${req.url} ${req.proto}" ${res.status}`;
    console.log(s);
}
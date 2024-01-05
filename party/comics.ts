/*

curl \
--json '{"prompt": "cybernetic cat"}' \
http://127.0.0.1:1999/parties/comics/foo

*/

import type * as Party from "partykit/server";
import { Ai } from "partykit-ai";

export default class Server implements Party.Server {
  ai: Ai;

  constructor(public room: Party.Room) {
    this.ai = new Ai(room.context.ai);
  }

  async onRequest(req: Party.Request) {
    if (req.method === "POST") {
      const { prompt } = (await req.json()) as any;
      console.log("Prompt:", prompt);
      const png = await this.ai.run(
        "@cf/stabilityai/stable-diffusion-xl-base-1.0",
        {
          prompt,
        }
      );
      console.log("Generated image. Size: ", png.length);
      return new Response(png, {
        headers: {
          "content-type": "image/png",
        },
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  }
}

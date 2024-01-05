import PartySocket from "partysocket";
import { suspend } from "suspend-react";

export default function StableDiffusion({
  partykitHost,
  prompt,
}: {
  partykitHost: string;
  prompt: string;
}) {
  const image = suspend(async () => {
    const newYorkerPrompt = `A "caption contest" New Yorker-style cartoon to go with the caption: "${prompt}". Black and white (no shading), pen and ink, very simple and spare cartoon style.`;
    const response = await PartySocket.fetch(
      { host: partykitHost, party: "comics", room: "foo" },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: newYorkerPrompt }),
      }
    );
    // The response is the binary data of a PNG image
    return await response.blob();
  }, [prompt]);

  // We can create a URL for the image data
  const imageUrl = URL.createObjectURL(image);
  return (
    <>
      <img src={imageUrl} alt="Generated" width="640" height="640" />
    </>
  );
}

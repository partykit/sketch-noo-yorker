import { useState } from "react";
import PromptInput from "./PromptInput";

import { Suspense } from "react";
import StableDiffusion from "./StableDiffusion";

export default function Cartoon({ partykitHost }: { partykitHost: string }) {
  const [prompt, setPrompt] = useState<string | null>();

  const reset = () => setPrompt(null);

  return (
    <>
      {!prompt && <PromptInput setPrompt={setPrompt} />}
      {prompt && (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <StableDiffusion partykitHost={partykitHost} prompt={prompt} />
          </Suspense>
          <div className="font-serif text-2xl italic">“{prompt}”</div>
          <button
            onClick={reset}
            className="font-serif text-sm uppercase underline px-3 py-2"
          >
            Reset
          </button>
        </>
      )}
    </>
  );
}

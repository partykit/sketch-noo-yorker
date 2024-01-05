import { useState } from "react";

export default function PromptInput({
  setPrompt,
}: {
  setPrompt: (prompt: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    setPrompt(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2 text-xl">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 p-2 w-80 font-serif italic"
      />
      <button
        type="submit"
        className="font-serif bg-gray-500 text-white px-3 py-2 rounded-sm"
      >
        Caption
      </button>
    </form>
  );
}

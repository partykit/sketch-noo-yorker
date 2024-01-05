import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "partymix";
import Cartoon from "~/components/Cartoon";

// PartyKit will inject the host into the server bundle
// so let's read it here and expose it to the client
declare const PARTYKIT_HOST: string;
export function loader() {
  return { partykitHost: PARTYKIT_HOST };
}

export const meta: MetaFunction = () => {
  return [
    { title: "The Noo Yorker" },
    { name: "description", content: "sketch-noo-yorker" },
  ];
};

export default function Index() {
  const { partykitHost } = useLoaderData<typeof loader>();

  return (
    <main className="p-6 max-w-7xl mx-auto flex flex-col gap-4 justify-start items-center">
      <h1 className="font-serif text-4xl uppercase">The Noo Yorker</h1>
      <Cartoon partykitHost={partykitHost} />
    </main>
  );
}

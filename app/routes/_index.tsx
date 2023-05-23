import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { IndexWorld } from "~/components/index-world";
import { WorldContainer } from "~/components/index-world-container";
import { indexQuery } from "~/utils/saerro";

export const loader = async () => {
  return json(await indexQuery());
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PS2.LIVE" },
    {
      name: "description",
      content: "PlanetSide 2 Live Population Stats",
    },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>PS2.LIVE</h1>
      <h2>Worlds</h2>
      <WorldContainer worlds={data.allWorlds} health={data.health} />
    </div>
  );
}

import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { IndexWorld } from "~/components/index-world";
import type { IndexResponse } from "~/utils/saerro";
import { indexQuery } from "~/utils/saerro";

export const loader = async () => {
  return json(await indexQuery());
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "PS2.LIVE" }];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>PS2.LIVE</h1>
      <h2>Worlds</h2>
      {data.allWorlds.map((world) => (
        <IndexWorld key={world.id} world={world} />
      ))}
    </div>
  );
}

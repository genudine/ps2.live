import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { WorldContainer } from "~/components/index-world-container";
import { outer } from "~/components/index.css";
import { fetchMetagameWorlds } from "~/utils/metagame";
import { fetchPopulationWorlds } from "~/utils/population";

export const loader = async () => {
  const [metagame, population] = await Promise.all([
    fetchMetagameWorlds(),
    fetchPopulationWorlds(),
  ]);

  return json({ metagame: metagame.sort((a, b) => a.id - b.id), population });
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
      <div className={outer}>
        <WorldContainer metagame={data.metagame} population={data.population} />
      </div>
    </div>
  );
}

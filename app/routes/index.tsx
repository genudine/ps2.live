import { CardBase, CardHeader } from "~/components/Card";
import { HiChevronRight } from "react-icons/hi2";
import type { IndexResponse, World } from "~/utils/saerro";
import { indexQuery } from "~/utils/saerro";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import { FactionBar } from "~/components/FactionBar";

export const loader = async () => {
  return json(await indexQuery());
};

export default function Index() {
  const { allWorlds } = useLoaderData<typeof loader>();

  return (
    <div>
      {allWorlds.map((world) => (
        <WorldCard key={world.id} world={world} />
      ))}
    </div>
  );
}

const WorldCard = ({ world }: { world: World }) => {
  return (
    <CardBase>
      <CardHeader to={`/worlds/${world.id}`}>
        <div>{world.name}</div>
        <HiChevronRight />
      </CardHeader>

      <div>
        <div>Population: {world.population.total.toLocaleString()}</div>
        <div>
          <FactionBar {...world.population} />
        </div>
      </div>
    </CardBase>
  );
};

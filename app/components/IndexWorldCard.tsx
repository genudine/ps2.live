import { HiChevronRight } from "react-icons/hi2";
import { World } from "~/utils/saerro";
import { CardBase, CardHeader } from "./Card";
import { FactionBar } from "./FactionBar";

export const WorldCard = ({ world }: { world: World }) => {
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

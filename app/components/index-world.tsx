import { World } from "~/utils/saerro";

export type IndexWorldProps = {
  world: World;
};

export const IndexWorld = ({ world }: IndexWorldProps) => {
  return (
    <div>
      <h1>
        {world.name} (total: {world.population.total})
      </h1>
      <p>VS: {world.population.vs}</p>
      <p>NC: {world.population.nc}</p>
      <p>TR: {world.population.tr}</p>
    </div>
  );
};

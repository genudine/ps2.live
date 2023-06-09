import { IndexWorld } from "./index-world";
import * as styles from "./index-world-container.css";
import type { MetagameWorld } from "~/utils/metagame";
import type { PopulationWorld } from "~/utils/population";

export const WorldContainer = ({
  metagame,
  population,
}: {
  metagame: MetagameWorld[];
  population: PopulationWorld[];
}) => (
  <div className={styles.container}>
    {metagame.map((world) => (
      <IndexWorld
        key={world.id}
        metagame={world}
        population={
          population.find((p) => p.id === world.id) as PopulationWorld
        }
      />
    ))}
  </div>
);

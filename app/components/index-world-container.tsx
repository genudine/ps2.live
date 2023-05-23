import { useMemo } from "react";
import type { Health, World } from "~/utils/saerro";
import { IndexWorld } from "./index-world";
import * as styles from "./index-world-container.css";

export const WorldContainer = ({
  worlds,
  health,
}: {
  worlds: World[];
  health: Health;
}) => (
  <div className={styles.container}>
    {worlds.map((world) => (
      <IndexWorld
        key={world.id}
        world={world}
        health={health.worlds.find((w) => world.name.toLowerCase() === w.name)}
      />
    ))}
  </div>
);

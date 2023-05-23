import { Link } from "@remix-run/react";
import { Health, totalPopulation, World } from "~/utils/saerro";
import { humanTimeAgo } from "~/utils/strings";
import { worlds } from "~/utils/worlds";
import * as styles from "./index-world.css";
import vsLogo from "~/images/vs-100.png";
import ncLogo from "~/images/nc-100.png";
import trLogo from "~/images/tr-100.png";
import { FactionBar } from "./faction-bar";

export type IndexWorldProps = {
  world: World;
  health?: Health["worlds"][number];
};

export const IndexWorld = ({ world, health }: IndexWorldProps) => {
  const { platform, location } = worlds[String(world.id || "default")];

  const timeSinceLastEvent = humanTimeAgo(
    new Date().getTime() - new Date(health?.lastEvent || 0).getTime()
  );

  return (
    <div className={styles.container}>
      <Link to={`/worlds/${world.id}`} className={styles.header}>
        <div className={styles.headerName}>{world.name}</div>
        <div className={styles.headerMarkers}>
          [{location}] [{platform}]{" "}
          <div
            className={styles.circle}
            style={{
              backgroundColor: health?.status === "UP" ? "limegreen" : "red",
            }}
            title={`Status: ${health?.status} || Last event: ${timeSinceLastEvent}`}
          ></div>
        </div>
        <div className={styles.headerDetailsLink}>DETAILS ⇨</div>
      </Link>
      <div className={styles.details}>
        <div className={styles.population}>
          <div className={styles.totalPop}>
            {totalPopulation(world.population)}
          </div>
          <div className={styles.popFaction}>
            <img className={styles.popImage} src={vsLogo} alt="VS" />{" "}
            {world.population.vs}
          </div>
          <div className={styles.popFaction}>
            <img className={styles.popImage} src={ncLogo} alt="NC" />{" "}
            {world.population.nc}
          </div>
          <div className={styles.popFaction}>
            <img className={styles.popImage} src={trLogo} alt="TR" />{" "}
            {world.population.tr}
          </div>
        </div>
        <FactionBar population={world.population} />
      </div>
    </div>
  );
};

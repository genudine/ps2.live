import { Link } from "@remix-run/react";
import {
  humanTimeAgo,
  snakeCaseToTitleCase,
  worlds,
  zones,
} from "~/utils/strings";
import * as styles from "./index-world.css";
import vsLogo from "~/images/vs-100.png";
import ncLogo from "~/images/nc-100.png";
import trLogo from "~/images/tr-100.png";
import { FactionBar } from "./faction-bar";
import type { MetagameWorld } from "~/utils/metagame";
import type { PopulationWorld } from "~/utils/population";
import { c } from "~/utils/classes";

export type IndexWorldProps = {
  metagame: MetagameWorld;
  population: PopulationWorld;
};

export const IndexWorld = ({ metagame, population }: IndexWorldProps) => {
  const worldId = metagame.id;
  const { platform, location, name } = worlds[String(worldId || "default")];
  const nextZone = metagame.zones.sort(
    (a, b) =>
      new Date(a.locked_since ?? Date.now()).getTime() -
      new Date(b.locked_since ?? Date.now()).getTime()
  )[0];
  const nextZoneStrings = zones[nextZone.id];

  return (
    <div className={styles.container}>
      <Link to={`/worlds/${worldId}`} className={styles.header}>
        <div className={styles.headerName}>{name}</div>
        <div className={styles.headerMarkers}>
          [{location}] [{platform}]{" "}
        </div>
        <div className={styles.headerDetailsLink}>DETAILS ⇨</div>
      </Link>
      <div className={styles.details}>
        <div className={styles.population}>
          <div className={styles.totalPop}>
            {population.factions.vs +
              population.factions.nc +
              population.factions.tr}
          </div>
          <div className={styles.popFaction}>
            <img className={styles.popImage} src={vsLogo} alt="VS" />{" "}
            {population.factions.vs}
          </div>
          <div className={styles.popFaction}>
            <img className={styles.popImage} src={ncLogo} alt="NC" />{" "}
            {population.factions.nc}
          </div>
          <div className={styles.popFaction}>
            <img className={styles.popImage} src={trLogo} alt="TR" />{" "}
            {population.factions.tr}
          </div>
        </div>
        <FactionBar population={population.factions} />
      </div>
      <div className={c(worldId === 19 && styles.jaegerConts)}>
        {metagame.zones
          .filter((zone) => !zone.locked)
          .sort((a, b) => {
            return a.alert && !b.alert ? -1 : b.alert && !a.alert ? 1 : 0;
          })
          .map((zone) => {
            let {
              name,
              colors: [upper, lower],
            } = zones[zone.id];
            return worldId !== 19 ? (
              <div
                key={zone.id}
                className={c(styles.continent, zone.alert && styles.alertCont)}
              >
                <div className={styles.contName}>
                  <div
                    className={styles.contCircle}
                    style={
                      {
                        "--upper-color": upper,
                        "--lower-color": lower,
                      } as any
                    }
                  ></div>
                  <div>{name}</div>
                </div>
                <div className={styles.contBars}>
                  <div>
                    <div className={styles.contBarTitle}>TERRITORY CONTROL</div>
                    <FactionBar population={zone.territory} />
                  </div>
                  {zone.alert && (
                    <div>
                      <div className={styles.contBarTitle}>
                        {snakeCaseToTitleCase(
                          zone.alert.alert_type
                        ).toUpperCase()}{" "}
                        ALERT PROGRESS | STARTED{" "}
                        {humanTimeAgo(
                          Date.now() -
                            new Date(zone.alert.start_time).getTime(),
                          true
                        ).toUpperCase()}{" "}
                        AGO
                      </div>
                      <FactionBar population={zone.alert.percentages} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div key={zone.id} className={styles.contName}>
                <div
                  className={styles.contCircle}
                  style={
                    {
                      "--upper-color": upper,
                      "--lower-color": lower,
                    } as any
                  }
                ></div>
                <div>{name}</div>
              </div>
            );
          })}
        {worldId !== 19 && (
          <div className={styles.nextCont}>
            <div className={styles.nextContText}>Next continent &raquo;</div>{" "}
            <div className={styles.contName}>
              <div
                className={styles.contCircle}
                style={
                  {
                    "--upper-color": nextZoneStrings.colors[0],
                    "--lower-color": nextZoneStrings.colors[1],
                  } as any
                }
              ></div>
              <div>{nextZoneStrings.name}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

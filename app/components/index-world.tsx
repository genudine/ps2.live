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
import { ReactFragment, useEffect, useState } from "react";

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
            return worldId !== 19 ? (
              <Continent key={zone.id} zone={zone} />
            ) : (
              <JaegerContinent key={zone.id} zone={zone} />
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

const JaegerContinent = ({ zone }: { zone: MetagameWorld["zones"][0] }) => {
  const {
    name,
    colors: [upper, lower],
  } = zones[zone.id];
  return (
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
};

const endTime = (alert: Required<MetagameWorld["zones"][0]>["alert"]) => {
  const alertDurationMins = alert.alert_type !== "sudden_death" ? 90 : 15;
  return new Date(alert.start_time).getTime() + alertDurationMins * 60 * 1000;
};

const Continent = ({ zone }: { zone: MetagameWorld["zones"][0] }) => {
  const {
    name,
    colors: [upper, lower],
  } = zones[zone.id];

  return (
    <div key={zone.id} className={c(styles.continent)}>
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
          <>
            <div className={styles.barSeparator}></div>
            <div>
              <div className={styles.contBarTitle}>
                <div>
                  {snakeCaseToTitleCase(zone.alert.alert_type).toUpperCase()}{" "}
                  ALERT PROGRESS
                </div>{" "}
                <div>
                  <TimeLeft alert={zone.alert} />{" "}
                </div>
              </div>
              <FactionBar population={zone.alert.percentages} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const timeLeftString = (alert: MetagameWorld["zones"][0]["alert"]) => {
  if (alert) {
    const time = endTime(alert) - Date.now();
    if (time < 2000) {
      return <>JUST ENDED</>;
    }

    const speed = time < 1000 * 60 * 15 ? "1s" : "4s";

    return (
      <>
        {humanTimeAgo(time, true).toUpperCase()} LEFT{" "}
        <div
          className={styles.alertDot}
          style={{ "--speed": speed } as any}
        ></div>
      </>
    );
  } else {
    return <></>;
  }
};

const TimeLeft = ({ alert }: { alert: MetagameWorld["zones"][0]["alert"] }) => {
  const [timeLeft, setTimeLeft] = useState(timeLeftString(alert));

  useEffect(() => {
    if (alert) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeftString(alert));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [alert]);

  return <>{timeLeft}</>;
};

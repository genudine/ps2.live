import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/footer";
import type { MetagameWorld } from "~/utils/metagame";
import { fetchSingleMetagameWorld } from "~/utils/metagame";
import type { WorldResponse, Zone } from "~/utils/saerro";
import {
  allClasses,
  allVehicles,
  totalPopulation,
  worldQuery,
} from "~/utils/saerro";
import {
  pascalCaseToTitleCase,
  toTitleCase,
  worlds,
  zones,
} from "~/utils/strings";
import * as styles from "~/components/world.css";
import { c } from "~/utils/classes";
import { FactionBar } from "~/components/faction-bar";
import { popImage } from "~/components/index-world.css";
import vsLogo from "~/images/vs-100.png";
import ncLogo from "~/images/nc-100.png";
import trLogo from "~/images/tr-100.png";
import { FactionPie } from "~/components/faction-pie";
import { AlertTimer } from "~/components/alert-timer";
import { contPrioritySort } from "~/utils/sorting";

type LoaderData = {
  saerro: WorldResponse;
  metagame: MetagameWorld;
  id: string;
};

export async function loader({ params }: LoaderArgs) {
  const [saerro, metagame] = await Promise.all([
    worldQuery(params.id as string),
    fetchSingleMetagameWorld(params.id as string),
  ]);
  return json({ saerro, metagame, id: params.id } as LoaderData);
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { saerro, id } = data as LoaderData;
  const date = new Date();
  const worldInfo = worlds[String(id || "default")];
  const datetimeHumanFriendly = date.toLocaleString(worldInfo.locale, {
    timeZone: worldInfo.timeZone,
    dateStyle: "medium",
    timeStyle: "short",
  });
  return [
    {
      title: `${
        worldInfo.name || "Unknown world"
      } | PlanetSide 2 Live Population Stats`,
    },
    {
      name: "description",
      content: `${worldInfo.name} currently has ${totalPopulation(
        saerro.world.population
      )} players online as of ${datetimeHumanFriendly} ${
        worldInfo.name
      } time. VS: ${saerro.world.population.vs}, NC: ${
        saerro.world.population.nc
      }, TR: ${
        saerro.world.population.tr
      } -- See more detailed stats on ps2.live.`,
    },
  ];
};

export default function World() {
  const {
    saerro: { world },
    id,
    metagame,
  } = useLoaderData<typeof loader>();

  const worldInfo = worlds[String(id || "default")];
  const nextZoneID = metagame.zones.sort(
    (a, b) =>
      new Date(a.locked_since ?? Date.now()).getTime() -
      new Date(b.locked_since ?? Date.now()).getTime()
  )[0].id;

  return (
    <>
      <div className={styles.outer}>
        <div>
          <div className={styles.header}>
            <div className={c(styles.headerName, styles.headerFont)}>
              <div>{worldInfo.name.toUpperCase()}</div>
              <div className={styles.headerSub}>
                [{worldInfo.location}] [{worldInfo.platform}]
              </div>
            </div>
            <div className={styles.populationHead}>
              <div className={styles.headerFont}>
                <div className={styles.totalPop}>
                  {totalPopulation(world.population).toLocaleString()}
                </div>
                PLAYERS
              </div>
              <div className={styles.population}>
                <div className={styles.popNumbers}>
                  <div
                    className={styles.popItem}
                    style={{ flex: world.population.vs + 1 }}
                  >
                    <img className={popImage} src={vsLogo} alt="VS" />{" "}
                    {world.population.vs}
                  </div>
                  <div
                    className={styles.popItem}
                    style={{ flex: world.population.nc + 1 }}
                  >
                    <img className={popImage} src={ncLogo} alt="NC" />{" "}
                    {world.population.nc}
                  </div>
                  <div
                    className={styles.popItem}
                    style={{ flex: world.population.tr + 1 }}
                  >
                    <img className={popImage} src={trLogo} alt="TR" />{" "}
                    {world.population.tr}
                  </div>
                </div>
                <FactionBar population={world.population} />
              </div>
            </div>
            <div className={styles.headerConts}>
              <div className={styles.headerSub}>CONTINENT CONTROL</div>
              {metagame.zones.sort(contPrioritySort).map((zone, idx) => {
                const zoneInfo = zones[String(zone.id)];
                return (
                  <div key={idx} className={styles.cont}>
                    <div style={{ flex: 0 }}>{zoneInfo.name.toUpperCase()}</div>
                    <div style={{ flex: 1 }}>
                      <FactionPie
                        size="4rem"
                        population={zone.alert?.percentages ?? zone.territory}
                        innerBackground={`linear-gradient(45deg, ${zoneInfo.colors[0]}, ${zoneInfo.colors[1]})`}
                        innerMargin={10}
                      />
                    </div>
                    <div className={styles.contSub}>
                      {zone.alert ? (
                        <AlertTimer alert={zone.alert} />
                      ) : zone.locked ? (
                        nextZoneID == zone.id ? (
                          <>NEXT UP »</>
                        ) : (
                          <>LOCKED</>
                        )
                      ) : (
                        <>UNLOCKED</>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Continents</h2>
            {world.zones.all.map((zone) => (
              <ZoneInfo zone={zone} key={zone.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer isMainPage />
    </>
  );
}

const ZoneInfo = ({ zone }: { zone: Zone }) => {
  const zoneInfo = zones[String(zone.id)];
  return (
    <section>
      <h3>{zoneInfo.name}</h3>
      <p>
        {totalPopulation(zone.population)} players ({zone.population.vs} VS,{" "}
        {zone.population.nc} NC, {zone.population.tr} TR)
      </p>
      <p>
        <ul>
          {allClasses.map((cls, idx) => (
            <li key={idx}>
              <b>{pascalCaseToTitleCase(cls)}</b>: {zone.classes?.[cls].total}{" "}
              total, {zone.classes?.[cls].vs} VS, {zone.classes?.[cls].nc} NC,{" "}
              {zone.classes?.[cls].tr} TR
            </li>
          ))}
        </ul>
      </p>
      <p>
        {totalPopulation(zone.vehicles as any)} vehicles...
        <ul>
          {allVehicles.map((vehicle, idx) => (
            <li key={idx}>
              <b>{toTitleCase(vehicle)}</b>:{" "}
              {totalPopulation(zone.vehicles?.[vehicle] as any)} total,{" "}
              {zone.vehicles?.[vehicle].vs} VS, {zone.vehicles?.[vehicle].nc}{" "}
              NC, {zone.vehicles?.[vehicle].tr} TR
            </li>
          ))}
        </ul>
      </p>
    </section>
  );
};

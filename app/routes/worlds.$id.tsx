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
  } = useLoaderData<typeof loader>();

  const worldInfo = worlds[String(id || "default")];

  return (
    <div>
      <h1>{worldInfo.name}</h1>
      <h2>Total Population</h2>
      <p>
        {totalPopulation(world.population)} players ({world.population.vs} VS,{" "}
        {world.population.nc} NC, {world.population.tr} TR)
      </p>
      <div>
        <h2>Continents</h2>
        {world.zones.all.map((zone) => (
          <ZoneInfo zone={zone} key={zone.id} />
        ))}
      </div>
      <Footer isMainPage />
    </div>
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

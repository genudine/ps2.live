import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { Zone } from "~/utils/saerro";
import { totalPopulation } from "~/utils/saerro";
import { allClasses, allVehicles, worldQuery } from "~/utils/saerro";
import { pascalCaseToTitleCase, toTitleCase } from "~/utils/strings";
import { worlds } from "~/utils/worlds";

export const loader = async ({ params }: LoaderArgs) => {
  return json(await worldQuery(params.id as string));
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const date = new Date();
  const id = data?.world.id;
  const worldInfo = worlds[String(id || "default")];
  const datetimeHumanFriendly = date.toLocaleString(worldInfo.locale, {
    timeZone: worldInfo.timeZone,
    dateStyle: "medium",
    timeStyle: "short",
  });
  return [
    {
      title: `${
        data?.world.name || "Unknown world"
      } | PlanetSide 2 Live Population Stats`,
    },
    {
      name: "description",
      content: `${data?.world.name} currently has ${data?.world.population.total} players online as of ${datetimeHumanFriendly} ${data?.world.name} time. VS: ${data?.world.population.vs}, NC: ${data?.world.population.nc}, TR: ${data?.world.population.tr} -- See more detailed stats on ps2.live.`,
    },
  ];
};

export default function World() {
  const { world } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}>
      <h1>{world.name}</h1>
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
    </div>
  );
}

const ZoneInfo = ({ zone }: { zone: Zone }) => {
  return (
    <section>
      <h3>{zone.name}</h3>
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

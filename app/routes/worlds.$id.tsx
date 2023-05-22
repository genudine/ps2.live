import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { WorldResponse, Zone } from "~/utils/saerro";
import { allClasses, allVehicles, worldQuery } from "~/utils/saerro";
import { pascalCaseToTitleCase, toTitleCase } from "~/utils/strings";

export const loader = async ({ params }: LoaderArgs) => {
  return json(await worldQuery(params.id as string));
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${data?.world.name || "Unknown world"} | PS2.LIVE` }];
};

export default function World() {
  const { world } = useLoaderData<WorldResponse>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}>
      <h1>{world.name}</h1>
      <h2>Total Population</h2>
      <p>
        {world.population.total} players ({world.population.vs} VS,{" "}
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
        {zone.population.total} players ({zone.population.vs} VS,{" "}
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
        {zone.vehicles?.total} vehicles...
        <ul>
          {allVehicles.map((vehicle, idx) => (
            <li key={idx}>
              <b>{toTitleCase(vehicle)}</b>: {zone.vehicles?.[vehicle].total}{" "}
              total, {zone.vehicles?.[vehicle].vs} VS,{" "}
              {zone.vehicles?.[vehicle].nc} NC, {zone.vehicles?.[vehicle].tr} TR
            </li>
          ))}
        </ul>
      </p>
    </section>
  );
};

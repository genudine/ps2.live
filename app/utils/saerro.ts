export const saerroFetch = async <T>(query: string): Promise<T> => {
  const response = await fetch(
    `https://saerro.ps2.live/graphql?query=${query}`,
    {
      cf: {
        cacheTtl: 60,
      },
    }
  );
  const json: { data: T } = await response.json();
  return json.data;
};

export type Population = {
  total?: number;
  nc: number;
  tr: number;
  vs: number;
};

export type Zone = {
  id: string;
  name: string;
  population: Population;
  vehicles?: Record<typeof allVehicles[number], Population> & {
    total: number;
  };
  classes?: Record<typeof allClasses[number], Population>;
};

export type World = {
  id: number;
  name: string;
  population: Population;
  zones: {
    all: Zone[];
  };
};

export type WorldResponse = {
  world: World;
};

export const allVehicles = [
  "flash",
  "sunderer",
  "lightning",
  "scythe",
  "vanguard",
  "prowler",
  "reaver",
  "mosquito",
  "galaxy",
  "valkyrie",
  "liberator",
  "ant",
  "harasser",
  "dervish",
  "chimera",
  "javelin",
  "corsair",
  "magrider",
];

export const allClasses = [
  "infiltrator",
  "lightAssault",
  "combatMedic",
  "engineer",
  "heavyAssault",
  "max",
];

export const worldQuery = async (worldID: string): Promise<WorldResponse> => {
  const query = `{
    world(by: {id: ${Number(worldID)}}) {
      id
      population {
        nc
        tr
        vs
      }
      zones {
        all {
          id
          classes {
            ${allClasses.map((cls) => `${cls} { total nc tr vs }`).join(" ")}
          }
          vehicles {
            total
            ${allVehicles
              .map((vehicle) => `${vehicle} { total nc tr vs }`)
              .join(" ")}
          }
          population {
            nc
            tr
            vs
          }
        }
      }
    }
  }`;

  const worldData: WorldResponse = await saerroFetch(query);

  return worldData;
};

export const totalPopulation = ({ nc, vs, tr }: Population): number =>
  nc + vs + tr;

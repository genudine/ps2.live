export const saerroFetch = async <T>(query: string): Promise<T> => {
  const response = await fetch("https://saerro.ps2.live/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const json: { data: T } = await response.json();
  return json.data;
};

export type Population = {
  total: number;
  nc: number;
  tr: number;
  vs: number;
};

export type Zone = {
  id: string;
  name: string;
  population: Population;
};

export type World = {
  id: number;
  name: string;
  population: Population;
  zones: {
    all: Zone[];
  };
};

export type Health = {
  ingestReachable: string;
  ingest: string;
  database: string;
  worlds: {
    name: string;
    status: string;
  }[];
};

export type IndexResponse = {
  health: Health;
  allWorlds: World[];
};

export const indexQuery = async (): Promise<IndexResponse> => {
  const query = `query {
    health {
      ingestReachable
      ingest
      database
      worlds {
        name
        status
      }
    }
    allWorlds {
      id
      name
      population {
        total
        nc
        tr
        vs
      }
      zones {
        all {
          id
          name
          population {
            total
            nc
            tr
            vs
          }
        }
      }
    }
  }`;

  const indexData: IndexResponse = await saerroFetch(query);

  indexData.allWorlds.sort((a, b) => a.id - b.id);

  return indexData;
};

export type PopulationWorld = {
  id: number;
  average: number;
  factions: {
    nc: number;
    tr: number;
    vs: number;
  };
};

export const fetchPopulationWorlds = async (): Promise<PopulationWorld[]> => {
  const response = await fetch("https://agg.ps2.live/population/all");
  const data: PopulationWorld[] = await response.json();
  return data.map(({ id, average, factions }) => ({ id, average, factions }));
};

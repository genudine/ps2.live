export type MetagameWorld = {
  id: number;
  zones: {
    id: number;
    locked: boolean;
    alert?: {
      id: number;
      zone: number;
      start_time: string;
      end_time: string;
      ps2alerts: string;
      alert_type: string;
      percentages: {
        nc: number;
        tr: number;
        vs: number;
      };
    };
    territory: {
      nc: number;
      tr: number;
      vs: number;
    };
    locked_since?: string;
  }[];
};

export const fetchMetagameWorlds = async (): Promise<MetagameWorld[]> => {
  const response = await fetch("https://metagame.ps2.live/all");
  const data: MetagameWorld[] = await response.json();
  return data;
};

export const fetchSingleMetagameWorld = async (
  id: string | number
): Promise<MetagameWorld> => {
  const response = await fetch(`https://metagame.ps2.live/${id}`);
  const data: MetagameWorld = await response.json();
  return data;
};

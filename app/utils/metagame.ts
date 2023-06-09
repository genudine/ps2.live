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
  }[];
};

export const fetchMetagameWorlds = async (): Promise<MetagameWorld[]> => {
  const response = await fetch("https://metagame.ps2.live/all");
  const data: MetagameWorld[] = await response.json();
  return data;
};

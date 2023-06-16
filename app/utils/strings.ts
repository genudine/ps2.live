export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const pascalCaseToTitleCase = (str: string) => {
  return toTitleCase(str.replace(/([A-Z])/g, " $1"));
};

export const snakeCaseToTitleCase = (str: string) => {
  return toTitleCase(str.replace(/_/g, " "));
};

export const humanTimeAgo = (ms: number, full?: boolean) => {
  const millis = Math.floor(ms % 1000);
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return full ? `${hours}h ${minutes % 60}m ${seconds % 60}s` : `${hours}h`;
  }

  if (minutes > 0) {
    return full ? `${minutes}m ${seconds % 60}s` : `${minutes}m`;
  }

  if (seconds > 0) {
    return `${seconds}s`;
  }

  return `${millis}ms`;
};

export const worlds: Record<
  string,
  {
    timeZone: string;
    locale: string;
    location: string;
    platform: string;
    name: string;
  }
> = {
  "1": {
    name: "Connery",
    timeZone: "America/Los_Angeles",
    locale: "en-US",
    location: "US-W",
    platform: "PC",
  },
  "10": {
    name: "Miller",
    timeZone: "UTC",
    locale: "en-GB",
    location: "EU",
    platform: "PC",
  },
  "13": {
    name: "Cobalt",
    timeZone: "UTC",
    locale: "en-GB",
    location: "EU",
    platform: "PC",
  },
  "17": {
    name: "Emerald",
    timeZone: "America/New_York",
    locale: "en-US",
    location: "US-E",
    platform: "PC",
  },
  "19": {
    name: "Jaeger",
    timeZone: "America/New_York",
    locale: "en-US",
    location: "US-E",
    platform: "PC",
  },
  "40": {
    name: "SolTech",
    timeZone: "Asia/Tokyo",
    locale: "en-GB",
    location: "JP",
    platform: "PC",
  },
  "1000": {
    name: "Genudine",
    timeZone: "America/New_York",
    locale: "en-US",
    location: "US-E",
    platform: "PS4",
  },
  "2000": {
    name: "Ceres",
    timeZone: "UTC",
    locale: "en-GB",
    location: "EU",
    platform: "PS4",
  },
  default: {
    name: "Unknown",
    timeZone: "UTC",
    locale: "en-US",
    location: "???",
    platform: "???",
  },
};

export const zones: Record<string, { name: string; colors: [string, string] }> =
  {
    "2": {
      name: "Indar",
      colors: ["#edb96b", "#964c2f"],
    },
    "4": {
      name: "Hossin",
      colors: ["#47570d", "#7b9c05"],
    },
    "6": {
      name: "Amerish",
      colors: ["#87a12a", "#5f634f"],
    },
    "8": {
      name: "Esamir",
      colors: ["#d5f3f5", "#a1c7e6"],
    },
    "344": {
      name: "Oshur",
      colors: ["#00c2bf", "#174185"],
    },
    default: {
      name: "Unknown",
      colors: ["#111111", "#cccccc"],
    },
  };

export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const pascalCaseToTitleCase = (str: string) => {
  return toTitleCase(str.replace(/([A-Z])/g, " $1"));
};

export const humanTimeAgo = (ms: number) => {
  const millis = Math.floor(ms % 1000);
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h`;
  }

  if (minutes > 0) {
    return `${minutes}m`;
  }

  if (seconds > 0) {
    return `${seconds}s`;
  }

  return `${millis}ms`;
};

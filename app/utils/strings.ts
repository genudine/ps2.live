export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const pascalCaseToTitleCase = (str: string) => {
  return toTitleCase(str.replace(/([A-Z])/g, " $1"));
};

import { style } from "@vanilla-extract/css";

export const headerFont = style({
  fontFamily: "Unbounded, Impact, monospace",
  fontWeight: "bold",
});

export const header = style({
  backgroundColor: "#222",
  padding: "2em",
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "Unbounded, Impact, monospace",
});

export const headerName = style({
  fontSize: "4rem",
  display: "flex",
  alignItems: "center",
  flexBasis: "100%",
});

export const headerSub = style({
  fontSize: "1rem",
  color: "#ccc",
  marginLeft: "1em",
});

export const outer = style({
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  flexDirection: "column",
  maxWidth: "1920px",
});

export const population = style({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-evenly",
});
export const populationHead = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexBasis: "100%",
});

export const popNumbers = style({
  display: "flex",
  justifyContent: "space-evenly",
});

export const popItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const totalPop = style({
  fontSize: "2rem",
  display: "block",
  width: "4em",
});

export const headerConts = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexBasis: "100%",
});

export const contChart = style({
  fontSize: "4rem",
});

export const cont = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const contSub = style({
  width: "10rem",
  fontSize: "0.8rem",
  textAlign: "center",
  color: "#ccc",
  paddingTop: "0.5rem",
});

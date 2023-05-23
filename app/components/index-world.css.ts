import { style } from "@vanilla-extract/css";

export const container = style({
  background: "#333",
  flexBasis: "30%",
  margin: "0.5rem",

  "@media": {
    // under 600px
    "screen and (max-width: 600px)": {
      flexBasis: "100%",
    },
    // between 600px and 1000px
    "screen and (min-width: 600px) and (max-width: 1000px)": {
      flexBasis: "45%",
    },
  },
});

export const header = style({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  textDecoration: "none",
  transition: "background-color 0.2s ease-in-out",
  backgroundColor: "#222",
  ":hover": {
    backgroundColor: "#383838",
  },
});
export const headerName = style({
  padding: "0.5rem",
  fontSize: "1.5rem",
});
export const headerDetailsLink = style({
  fontVariant: "small-caps",
  fontSize: "0.8rem",
  color: "#aaa",
  paddingRight: "0.5rem",
});
export const headerMarkers = style({
  fontSize: "0.8rem",
  flex: 1,
  fontWeight: "bold",
  color: "#aaa",
});

export const circle = style({
  display: "inline-block",
  width: "0.4rem",
  height: "0.4rem",
  borderRadius: "50%",
  marginLeft: "0.2rem",
});

export const details = style({
  padding: "0.5rem",
});

export const population = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

export const popFaction = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const popImage = style({
  height: "1.5rem",
  marginRight: "0.5rem",
});

export const totalPop = style({
  fontWeight: "bold",
  fontSize: "1.2rem",
});

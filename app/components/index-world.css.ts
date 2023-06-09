import { keyframes, style } from "@vanilla-extract/css";

export const container = style({
  background: "#333",
  flexBasis: "30%",
  margin: "0.5rem",

  "@media": {
    // under 600px
    "screen and (max-width: 800px)": {
      flexBasis: "100%",
    },
    // between 600px and 1000px
    "screen and (min-width: 800px) and (max-width: 1300px)": {
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

export const continent = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "1rem",
  background: "#222",
  margin: "0.5rem",
  borderRadius: "0.4rem",
});

export const contBars = style({
  flex: 1,
  paddingLeft: "0.5rem",
});

export const contBarTitle = style({
  fontWeight: "bold",
  fontSize: "0.7rem",
  padding: "0.2rem 0.5rem",
});

export const contCircle = style({
  height: "2rem",
  width: "2rem",
  borderRadius: "50%",
  background: "linear-gradient(45deg, var(--upper-color), var(--lower-color))",
  boxShadow: "0 0 0.5rem 0.1rem rgb(var(--lower-color) / 15%)",
});

export const contName = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  flexDirection: "column",
  minWidth: "4rem",
  paddingTop: "0.5rem",
});

export const jaegerConts = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "1rem",
  justifyContent: "space-evenly",
  backgroundColor: "#222",
  borderRadius: "0.4rem",
  margin: "0.5rem",
});

const alertFade = keyframes({
  from: {
    borderColor: "#ff2d2d",
  },
  to: {
    borderColor: "#222",
  },
});

export const alertCont = style({
  border: "2px solid #ff2d2d",
  animation: `${alertFade} 1s ease-in-out 4 alternate`,
});

export const nextCont = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0.5rem",
  justifyContent: "center",
  backgroundColor: "#222",
  borderRadius: "0.4rem",
  margin: "0.5rem",
  color: "#aaa",
});

export const nextContText = style({
  fontWeight: "bold",
  textTransform: "uppercase",
  marginRight: "0.5rem",
});

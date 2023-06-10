import { style } from "@vanilla-extract/css";

export const header = style({
  fontSize: "2rem",
  padding: "1rem",
});

export const outer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "calc(100vh - 300px)",
  textAlign: "center",
  flexDirection: "column",
});

export const link = style({
  color: "#9e9e9e",
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  ":hover": {
    color: "#d53875",
  },
});

export const itemContainer = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const item = style({
  listStyle: "none",
  display: "flex",
  padding: "1.5rem 1rem",
  fontSize: "1.5rem",
  backgroundColor: "#222",
  margin: "1rem",
  borderRadius: "0.4rem",
  justifyContent: "space-between",
});

export const itemLink = style({
  display: "block",
  marginRight: "0.75rem",
  paddingRight: "0.75rem",
  borderRight: "1px solid #666",
  color: "#d53875",
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",

  ":hover": {
    color: "#efefef",
  },
});

export const itemGithubLink = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "0.75rem",
  paddingLeft: "0.75rem",
  borderLeft: "1px solid #666",
  color: "#ddd",
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  fontSize: "1rem",

  ":hover": {
    color: "#efefef",
  },
});

export const love = style({
  fontSize: "0.9rem",
  color: "#aaa",
});

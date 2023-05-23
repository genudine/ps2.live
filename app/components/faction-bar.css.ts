import type { ComplexStyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

export const bar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  overflow: "hidden",
  borderRadius: "0.4rem",
  border: "2px solid #4d4d4d",
});

export const tinyBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  overflow: "hidden",
  fontSize: 5,
});

const shared: ComplexStyleRule = {
  textAlign: "center",
  boxShadow: "inset 0 0 0.5rem rgb(0 0 0 / 10%)",
};

export const left = style({
  ...shared,
  backgroundColor: "#991cba",
});
export const center = style({
  ...shared,
  backgroundColor: "#1564cc",
  borderLeft: "1px solid #4d4d4d",
  borderRight: "2px solid #4d4d4d",
  boxShadow: "inset 0 0 0.5rem rgb(180 180 180 / 10%)",
});
export const right = style({
  ...shared,
  backgroundColor: "#d30101",
});

import type { ComplexStyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

export const bar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  overflow: "hidden",
  borderRadius: "0.4rem",
  border: "2px solid #2d2d2d",
});

const shared: ComplexStyleRule = {
  textAlign: "center",
};

export const left = style({
  ...shared,
  backgroundColor: "#991cba",
});
export const center = style({
  ...shared,
  backgroundColor: "#1564cc",
  borderBottom: "1px solid #2d2d2d",
});
export const right = style({
  ...shared,
  backgroundColor: "#d30101",
});

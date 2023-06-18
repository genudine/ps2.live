import { style } from "@vanilla-extract/css";

export const pieRoot = style({
  width: "1em",
  height: "1em",
  borderRadius: "50%",
  position: "relative",

  "::after": {
    content: "''",
    position: "absolute",
    top: "var(--inner-margin)",
    left: "var(--inner-margin)",
    right: "var(--inner-margin)",
    bottom: "var(--inner-margin)",
    borderRadius: "50%",
    background: "var(--inner-bg)",
  },
});

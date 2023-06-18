import { keyframes, style } from "@vanilla-extract/css";

const alertDotBlink = keyframes({
  from: {
    backgroundColor: "#ff2d2d",
  },
  to: {
    backgroundColor: "#662929",
  },
});

export const alertDot = style({
  display: "inline-block",
  height: "0.5rem",
  width: "0.5rem",
  borderRadius: "50%",
  background: "#ff2d2d",
  animation: `${alertDotBlink} var(--speed) ease-in-out infinite alternate`,
});

export const timer = style({
  fontSize: "0.8rem",
});

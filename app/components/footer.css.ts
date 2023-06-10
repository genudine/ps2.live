import { style } from "@vanilla-extract/css";
import footer from "~/images/footer.jpg";

export const root = style({
  height: 300,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  lineHeight: 1,
});
export const background = style({
  backgroundImage: `url(${footer})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  maskImage: "linear-gradient(to bottom, transparent 25%, black)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent 25%, black)",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export const logo = style({
  fontSize: "3rem",
  fontWeight: "bold",
  fontFamily: "Unbounded, monospace",
  zIndex: 1,
  textShadow: "0 0 2em black",
});
export const logoX = style({
  color: "#c8a714",
  position: "relative",
  top: "0.8rem",
  left: "0.075rem",
});
export const logoLive = style({
  color: "#d8d8d8",
});
export const logoDot = style({
  display: "inline-block",
  width: "0.75em",
  height: "0.75em",
  borderRadius: "50%",
  backgroundColor: "#d8d8d8",
  position: "relative",
  left: "0.05rem",
  top: "0.075em",
  boxShadow: "0 0 2em black",
  backgroundImage: `conic-gradient(
    #d30101 0deg 45deg,
    #991cba 75deg 165deg,
    #1564cc 195deg 285deg,
    #d30101 315deg 360deg
  )`,
});
export const lowerLogo = style({
  textAlign: "right",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "0.8rem",
  fontWeight: "bold",
  fontFamily: "Helvetica, Arial, sans-serif",
  padding: "0 0.2rem",
  color: "#aaa",
});
export const link = style({
  color: "#aaa",
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  ":hover": {
    color: "gold",
  },
});

import { Link } from "@remix-run/react";
import { styled } from "styletron-react";

export const CardBase = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  backgroundColor: "#000",
  border: "2px solid #fff",
  borderRadius: "0.5rem",
});

export const CardHeader = styled(Link, {
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ccc",
  borderRadius: "0.5rem",
});

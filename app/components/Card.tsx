import { Link } from "@remix-run/react";
import { styled } from "styletron-react";

export const CardBase = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  backgroundColor: "#000",
  border: "2px solid #fff",
  borderRadius: "0.5rem",
  margin: "1rem",
});

export const CardHeader = styled(Link, {
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ccc",
  borderRadius: "0.5rem",
  fontSize: "1.25rem",
  color: "#000",
  textDecoration: "none",
  padding: "0.5rem",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#fff",
  },
});

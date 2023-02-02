import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Provider as StyletronProvider } from "styletron-react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { styletron } from "./styletron";
import { Body } from "./globalStyles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <StyletronProvider value={styletron}>
        <Body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Body>
      </StyletronProvider>
    </html>
  );
}

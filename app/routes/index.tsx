import { CardBase, CardHeader } from "~/components/Card";
import { HiChevronRight } from "react-icons/hi2";
import type { IndexResponse, World } from "~/utils/saerro";
import { indexQuery } from "~/utils/saerro";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import { FactionBar } from "~/components/FactionBar";
import { WorldCard } from "~/components/IndexWorldCard";
import { styled } from "styletron-react";
import React, { ReactNode } from "react";

export const loader = async () => {
  return json(await indexQuery());
};

export default function Index() {
  const { allWorlds } = useLoaderData<typeof loader>();

  return (
    <div>
      <Header />
      <div>
        {allWorlds.map((world) => (
          <WorldCard world={world} key={world.id} />
        ))}
      </div>
    </div>
  );
}

const HeaderBase = styled("div", {
  display: "flex",
  flexDirection: "row",
  borderColor: "#fff",
  backgroundColor: "#fff",
  color: "#fff",
  borderLeftWidth: "0.5rem",
  borderTopWidth: "0.5rem",
  borderRightWidth: "0",
  borderBottomWidth: "0.5rem",
  borderStyle: "solid",
  borderTopLeftRadius: "0.5rem",
  position: "relative",
});

const Header = () => (
  <HeaderBase>
    <QuoteUnquoteLogo>
      <b>PS2.LIVE</b>
      <br />
      Realtime tools for PlanetSide 2
    </QuoteUnquoteLogo>
    <TheList>
      <ListLink href="https://saerro.ps2.live" color="gold">
        Saerro Live Pop API
      </ListLink>
      <ListLink href="https://try.ps2.live" color="#3333ff">
        Census API Playground
      </ListLink>
      <ListLink href="https://agg.ps2.live/population" color="limegreen">
        Population API
      </ListLink>
      <ListLink href="https://agg.ps2.live/continents" color="#44aadd">
        Continents API
      </ListLink>
      <ListLink href="https://discord.ps2.live" color="#aa77dd">
        Discord Character Link
      </ListLink>
      <ListLink href="https://metagame.ps2.live" color="#ff3333">
        Metagame Webhooks
      </ListLink>
    </TheList>
  </HeaderBase>
);

const QuoteUnquoteLogo = styled("div", {
  width: "8rem",
  backgroundColor: "#fff",
  color: "#000",
  textAlign: "right",
  padding: "0.5rem",
  borderRight: "0.5rem solid #fff",
});

const TheList = styled("div", {
  backgroundColor: "#000",
  borderRadius: "0.5rem",
  position: "relative",
  left: "-0.5rem",
  display: "flex",
  flexWrap: "wrap",
  padding: "0.5rem",
  gap: "0.5rem",
  flexDirection: "column",
  maxHeight: "8rem",
  alignContent: "flex-start",
  justifyContent: "center",
  flex: 1,
});

const ListLink = styled("a", ({ color }: { color: string }) => ({
  display: "block",
  padding: "0.5rem",
  color,
  textDecoration: "none",
  borderRadius: "0.4rem",
  transition: "all 0.2s ease-in-out",
  ":hover": {
    backgroundColor: color,
    color: "#000",
  },
}));

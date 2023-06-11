import { Footer } from "~/components/footer";
import {
  header,
  item,
  itemContainer,
  itemGithubLink,
  itemLink,
  link,
  love,
  outer,
} from "~/components/about.css";

export default function About() {
  return (
    <div>
      <div className={outer}>
        <div>
          <p className={header}>
            <b>PS2.LIVE</b> is a network of services that report on the ongoing
            war on Auraxis.
          </p>
          <p style={{ fontStyle: "italic" }}>
            hat tips:{" "}
            <a className={link} href="https://ps2.fisu.pw/">
              fisu
            </a>
            ,{" "}
            <a className={link} href="https://wt.honu.pw/">
              honu &amp; varunda
            </a>
            ,{" "}
            <a className={link} href="https://voidwell.com/">
              Voidwell &amp; Lampjaw
            </a>
            ,{" "}
            <a className={link} href="https://census.lithafalcon.cc/">
              Sanctuary &amp; Falcon
            </a>
            ,{" "}
            <a className={link} href="https://ps2alerts.com/">
              PS2Alerts team
            </a>
            ,{" "}
            <a className={link} href="https://discord.gg/yVzGEg3RKV">
              PS2devs Discord
            </a>
            , Daybreak Census Team 💖
          </p>
        </div>
        <div>
          <ul className={itemContainer}>
            {[
              {
                name: "Saerro",
                url: "https://saerro.ps2.live",
                github: "https://github.com/genudine/saerro",
                description:
                  "Population GraphQL API focussing on deep granularity.",
              },
              {
                name: "Metagame API",
                url: "https://metagame.ps2.live",
                github: "https://github.com/genudine/metagame",
                description: "World states, contininent locks, alerts, etc.",
              },
              {
                name: "Population API",
                url: "https://agg.ps2.live/population",
                github: "https://github.com/genudine/agg-population",
                description: "Population as seen by many services, averaged.",
              },
              {
                name: "Census Playground",
                url: "https://try.ps2.live",
                github: "https://github.com/genudine/try.ps2.live",
                description: "Explore and share the Census API.",
              },
              {
                name: "ps2.live",
                url: "https://ps2.live",
                github: "https://github.com/genudine/ps2.live",
                description: "This website. It's pretty cool.",
              },
              {
                name: "Medkit",
                url: "https://github.com/genudine/medkit2",
                github: "https://github.com/genudine/medkit2",
                description:
                  "PS2 Discord bot for population/continents in channel names.",
              },
            ].map(({ name, url, github, description }, i) => (
              <li className={item} key={i}>
                <a href={url} className={itemLink}>
                  {name}
                </a>
                <div>{description} </div>
                <a href={github} className={itemGithubLink}>
                  github
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className={love}>Built with 💖 by Pomf =3</p>
      </div>
      <Footer />
    </div>
  );
}

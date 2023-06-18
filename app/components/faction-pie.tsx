import type { Population } from "~/utils/saerro";
import { pieRoot } from "./faction-pie.css";

export const FactionPie = ({
  population,
  innerMargin,
  innerBackground,
  size,
}: {
  population: Population;
  innerMargin?: number;
  innerBackground?: string;
  size?: string;
}) => {
  const { nc, tr, vs } = population;
  const total = nc + tr + vs;

  const trPct = (tr / total) * 100;
  const vsPct = (vs / total) * 100;

  return (
    <div
      className={pieRoot}
      style={
        {
          fontSize: size || "1em",
          backgroundImage: `conic-gradient(
          #d30101 0% ${trPct}%,
          #991cba ${trPct}% ${trPct + vsPct}%,
          #1564cc ${trPct + vsPct}% 100%
        )`,
          "--inner-margin": innerMargin ? `${innerMargin}px` : "0",
          "--inner-bg": innerBackground || "none",
        } as any
      }
    >
      &nbsp;
    </div>
  );
};

import { useState } from "react";
import { FactionBar } from "~/components/faction-bar";
import { FactionPie } from "~/components/faction-pie";
import type { Population } from "~/utils/saerro";

export default function DebugComponents() {
  const [population, setPopulation] = useState<Population>({
    nc: 33,
    tr: 33,
    vs: 33,
  });

  const [innerMargin, setInnerMargin] = useState<number>(10);
  const [innerColor, setInnerColor] = useState<string>("black");
  return (
    <div>
      <h1>Debug Components</h1>
      <h2>Faction Viz</h2>
      <div>
        NC{" "}
        <input
          type="number"
          value={population.nc}
          onChange={(e) =>
            setPopulation((p) => ({ ...p, nc: Number(e.target.value) }))
          }
        />{" "}
        || TR{" "}
        <input
          type="number"
          value={population.tr}
          onChange={(e) =>
            setPopulation((p) => ({ ...p, tr: Number(e.target.value) }))
          }
        />{" "}
        || VS{" "}
        <input
          type="number"
          value={population.vs}
          onChange={(e) =>
            setPopulation((p) => ({ ...p, vs: Number(e.target.value) }))
          }
        />
      </div>
      <div>
        <h3>Horizontal Stacked Bar Chart</h3>
        <FactionBar population={population} />
        <h3>Pie Chart</h3>
        <div style={{ fontSize: "5rem" }}>
          <FactionPie population={population} />
          <FactionPie
            population={population}
            innerBackground={innerColor}
            innerMargin={innerMargin}
          />
        </div>
        Inner margin{" "}
        <input
          type="number"
          value={innerMargin}
          onChange={(e) => setInnerMargin(Number(e.target.value))}
        />
        Inner color{" "}
        <input
          type="color"
          value={innerColor}
          onChange={(e) => setInnerColor(e.target.value)}
        />
      </div>
    </div>
  );
}

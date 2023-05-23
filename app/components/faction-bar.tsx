import { useMemo } from "react";
import type { Population } from "~/utils/saerro";
import { totalPopulation } from "~/utils/saerro";
import * as styles from "./faction-bar.css";

export const FactionBar = ({
  population: { vs, nc, tr },
}: {
  population: Population;
}) => {
  const { vsPercent, ncPercent, trPercent } = useMemo(() => {
    const total = totalPopulation({ vs, nc, tr, total: 0 });
    return {
      vsPercent: Math.round((vs / total) * 100) || 0,
      ncPercent: Math.round((nc / total) * 100) || 0,
      trPercent: Math.round((tr / total) * 100) || 0,
    };
  }, [vs, nc, tr]);
  return (
    <div className={styles.bar}>
      <div className={styles.left} style={{ flexGrow: vs + 1 }}>
        {vsPercent}%
      </div>
      <div className={styles.center} style={{ flexGrow: nc + 1 }}>
        {ncPercent}%
      </div>
      <div className={styles.right} style={{ flexGrow: tr + 1 }}>
        {trPercent}%
      </div>
    </div>
  );
};

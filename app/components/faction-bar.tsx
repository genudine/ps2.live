import { useMemo } from "react";
import type { Population } from "~/utils/saerro";
import * as styles from "./faction-bar.css";

export const FactionBar = ({
  population: { vs, nc, tr },
  tiny,
}: {
  population: Population;
  tiny?: boolean;
}) => {
  const { vsPercent, ncPercent, trPercent } = useMemo(() => {
    const total = nc + vs + tr;
    return {
      vsPercent: Math.round((vs / total) * 100) || 0,
      ncPercent: Math.round((nc / total) * 100) || 0,
      trPercent: Math.round((tr / total) * 100) || 0,
    };
  }, [vs, nc, tr]);
  return (
    <div className={tiny ? styles.tinyBar : styles.bar}>
      <div className={styles.left} style={{ flexGrow: vs + 1 }}>
        {tiny ? <>&nbsp;</> : `${vsPercent}%`}
      </div>
      <div className={styles.center} style={{ flexGrow: nc + 1 }}>
        {tiny ? <>&nbsp;</> : `${ncPercent}%`}
      </div>
      <div className={styles.right} style={{ flexGrow: tr + 1 }}>
        {tiny ? <>&nbsp;</> : `${trPercent}%`}
      </div>
    </div>
  );
};

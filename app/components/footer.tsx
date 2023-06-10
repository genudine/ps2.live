import { Link } from "@remix-run/react";
import * as styles from "./footer.css";

export const Footer = ({ isMainPage }: { isMainPage?: boolean }) => (
  <footer>
    <div className={styles.root}>
      <div className={styles.background}></div>
      <div className={styles.logo}>
        PS2
        <div className={styles.logoDot}></div>
        <span className={styles.logoLive}>LIVE</span>
        <div className={styles.lowerLogo}>
          <div>
            {isMainPage ? (
              <Link className={styles.link} to="/about">
                more stuff »
              </Link>
            ) : (
              <Link className={styles.link} to="/">
                less stuff »
              </Link>
            )}
          </div>
          <div>&copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  </footer>
);

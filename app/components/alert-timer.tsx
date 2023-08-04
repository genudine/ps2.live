import { useEffect, useState } from "react";
import type { MetagameWorld } from "~/utils/metagame";
import { humanTimeAgo } from "~/utils/strings";
import * as styles from "./alert-timer.css";

const endTime = (alert: Required<MetagameWorld["zones"][0]>["alert"]) => {
  let alertDurationMins = 90;

  switch (alert.alert_type) {
    case "air":
      alertDurationMins = 30;
      break;

    case "sudden_death":
    case "max":
      alertDurationMins = 15;
      break;

    default:
      break;
  }

  return new Date(alert.start_time).getTime() + alertDurationMins * 60 * 1000;
};

const timeLeftString = (alert: MetagameWorld["zones"][0]["alert"]) => {
  if (alert) {
    const time = endTime(alert) - Date.now();
    if (time < 2000) {
      return <>JUST ENDED</>;
    }

    const speed = time < 1000 * 60 * 15 ? "1s" : "4s";

    return (
      <>
        {humanTimeAgo(time, true).toUpperCase()} LEFT{" "}
        <div
          className={styles.alertDot}
          style={{ "--speed": speed } as any}
        ></div>
      </>
    );
  } else {
    return <></>;
  }
};

export const AlertTimer = ({
  alert,
}: {
  alert: MetagameWorld["zones"][0]["alert"];
}) => {
  const [timeLeft, setTimeLeft] = useState(timeLeftString(alert));

  useEffect(() => {
    if (alert) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeftString(alert));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [alert]);

  return <div className={styles.timer}>{timeLeft}</div>;
};

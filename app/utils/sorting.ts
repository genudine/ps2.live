import type { MetagameWorld } from "./metagame";

export const contPrioritySort = (
  a: MetagameWorld["zones"][number],
  b: MetagameWorld["zones"][number]
) => {
  // Sort priority:
  // 1. oldest alert
  // 2. unlocked by id
  // 3. oldest locked since

  if (a.locked && !b.locked) {
    return 1;
  } else if (!a.locked && b.locked) {
    return -1;
  }

  if (a.alert && b.alert) {
    return Date.parse(a.alert.start_time) - Date.parse(b.alert.start_time);
  }

  if (a.alert) {
    return -1;
  }

  if (b.alert) {
    return 1;
  }

  if (a.locked_since && b.locked_since) {
    return Date.parse(a.locked_since) - Date.parse(b.locked_since);
  }

  if (a.locked_since) {
    return -1;
  }

  if (b.locked_since) {
    return 1;
  }

  return 0;
};

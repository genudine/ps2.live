export const worlds: Record<
  string,
  { timeZone: string; locale: string; location: string; platform: string }
> = {
  "1": {
    timeZone: "America/Los_Angeles",
    locale: "en-US",
    location: "US-W",
    platform: "PC",
  },
  "10": {
    timeZone: "UTC",
    locale: "en-GB",
    location: "EU",
    platform: "PC",
  },
  "13": {
    timeZone: "UTC",
    locale: "en-GB",
    location: "EU",
    platform: "PC",
  },
  "17": {
    timeZone: "America/New_York",
    locale: "en-US",
    location: "US-E",
    platform: "PC",
  },
  "19": {
    timeZone: "America/New_York",
    locale: "en-US",
    location: "US-E",
    platform: "PC",
  },
  "40": {
    timeZone: "Asia/Tokyo",
    locale: "en-GB",
    location: "JP",
    platform: "PC",
  },
  "1000": {
    timeZone: "America/New_York",
    locale: "en-US",
    location: "US-E",
    platform: "PS4",
  },
  "2000": {
    timeZone: "UTC",
    locale: "en-GB",
    location: "EU",
    platform: "PS4",
  },
  default: {
    timeZone: "UTC",
    locale: "en-US",
    location: "???",
    platform: "???",
  },
};

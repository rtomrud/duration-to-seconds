const durationRegExp =
  /P(?:(\d+(?:[.,]\d+)?)Y)?(?:(\d+(?:[.,]\d+)?)M)?(?:(\d+(?:[.,]\d+)?)W)?(?:(\d+(?:[.,]\d+)?)D)?(?:T(?:(\d+(?:[.,]\d+)?)H)?(?:(\d+(?:[.,]\d+)?)M)?(?:(\d+(?:[.,]\d+)?)S)?)?/u;

// ISO 8601 allows either a comma or a full stop as the decimal sign
const toNumber = (value = "0"): number => Number(value.replace(",", "."));

/**
 * Converts the given ISO 8601 `duration` to seconds. A year ("Y") is regarded
 * as 365 days. A month ("M") is regarded as 30 days. The behaviour is
 * undefined when not given an ISO 8601 compliant string.
 *
 * @param duration The ISO 8601 duration string to convert to seconds.
 * @returns The number of seconds represented by the given duration.
 */
export default function durationToSeconds(duration = ""): number {
  if (typeof duration !== "string") {
    return 0;
  }

  const [, years, months, weeks, days, hours, minutes, seconds] =
    durationRegExp.exec(duration) || [];
  return (
    toNumber(years) * 31536000 +
    toNumber(months) * 2592000 +
    toNumber(weeks) * 604800 +
    toNumber(days) * 86400 +
    toNumber(hours) * 3600 +
    toNumber(minutes) * 60 +
    toNumber(seconds)
  );
}

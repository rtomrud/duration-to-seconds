const durationRegExp = /P((?<years>\d+(\.\d+)?)Y)?((?<months>\d+(\.\d+)?)M)?((?<weeks>\d+(\.\d+)?)W)?((?<days>\d+(\.\d+)?)D)?(T((?<hours>\d+(\.\d+)?)H)?((?<minutes>\d+(\.\d+)?)M)?((?<seconds>\d+(\.\d+)?)S)?)?/;

/**
 * Converts the given ISO 8601 `duration` to seconds. A year ("Y") is regarded
 * as 365 days. A month ("M") is regarded as 30 days. The behaviour is
 * undefined when not given an ISO 8601 compliant string.
 */
export default function(duration = "") {
  if (typeof duration !== "string") {
    return 0;
  }

  const match = durationRegExp.exec(duration) || {};
  const {
    groups: {
      years = 0,
      months = 0,
      weeks = 0,
      days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0
    } = {}
  } = match;
  return (
    years * 31536000 +
    months * 2592000 +
    weeks * 604800 +
    days * 86400 +
    hours * 3600 +
    minutes * 60 +
    Number(seconds)
  );
}

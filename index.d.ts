/**
 * Converts the given ISO 8601 `duration` to seconds. A year ("Y") is regarded
 * as 365 days. A month ("M") is regarded as 30 days. The behaviour is
 * undefined when not given an ISO 8601 compliant string.
 *
 * @param duration The ISO 8601 duration string to convert to seconds.
 * @returns The number of seconds represented by the given duration.
 */
export default function durationToSeconds(duration?: string): number;

# duration-to-seconds

Converts an [ISO 8601] duration to seconds

## Installing

```bash
npm install duration-to-seconds
```

## Using

```js
import durationToSeconds from "duration-to-seconds";

durationToSeconds("P1Y1M1DT1H1M1S"); // -> 34218061
durationToSeconds("P1Y"); // -> 31536000
durationToSeconds("P1M"); // -> 2592000
durationToSeconds("P1W"); // -> 604800
durationToSeconds("P1D"); // -> 86400
durationToSeconds("PT1H"); // -> 3600
durationToSeconds("PT1M"); // -> 60
durationToSeconds("PT1S"); // -> 1
durationToSeconds("PT0.001S"); // -> 0.001
durationToSeconds("PT0.000001S"); // -> 0.000001
```

## Years and months

- A year (`Y`) is considered to be equivalent to 365 days (ISO 8601 § 3.32)
- A month (`M`) is considered to be equivalent to 30 days (ISO 8601 note on § 3.15)

## Non ISO 8601 durations

When given anything that is not an ISO 8601 compliant duration, the behaviour is undefined. In other words, it does not validate that the given duration is a valid ISO 8601 duration.

## License

[MIT](./LICENSE)

[ISO 8601]: http://xml.coverpages.org/ISO-FDIS-8601.pdf

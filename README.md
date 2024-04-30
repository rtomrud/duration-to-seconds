# duration-to-seconds

Converts an [ISO 8601](http://xml.coverpages.org/ISO-FDIS-8601.pdf) [duration](https://en.wikipedia.org/wiki/ISO_8601#Durations) to seconds

## Installing

```bash
npm install duration-to-seconds
```

## API

### `durationToSeconds(duration)`

Converts the given ISO 8601 `duration` to seconds. A year ("Y") is regarded as 365 days. A month ("M") is regarded as 30 days. The behaviour is undefined when not given an ISO 8601 compliant string.

```js
import durationToSeconds from "duration-to-seconds";

durationToSeconds("PT0.001S"); // => 0.001
durationToSeconds("PT0.000001S"); // => 0.000001
durationToSeconds("PT1S"); // => 1
durationToSeconds("PT1M"); // => 60
durationToSeconds("PT1H"); // => 3600
durationToSeconds("P1D"); // => 86400
durationToSeconds("P1W"); // => 604800
durationToSeconds("P1M"); // => 2592000
durationToSeconds("P1Y"); // => 31536000
durationToSeconds("P1Y1M1DT1H1M1S"); // => 34218061
```

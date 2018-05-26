import test from "./node_modules/tape/index.js";
import durationToSeconds from "./index.js";

test("duration-to-seconds with valid non-strings arguments", ({
  equal,
  end
}) => {
  equal(durationToSeconds(), 0);
  equal(durationToSeconds(undefined), 0);
  equal(durationToSeconds(NaN), 0);
  equal(durationToSeconds(0), 0);
  equal(durationToSeconds(-0), 0);
  equal(durationToSeconds(1), 0);
  equal(durationToSeconds(false), 0);
  equal(durationToSeconds(true), 0);
  equal(durationToSeconds(null), 0);
  equal(durationToSeconds({}), 0);
  equal(durationToSeconds([]), 0);
  equal(durationToSeconds(() => {}), 0);
  end();
});

test("duration-to-seconds with empty strings", ({ equal, end }) => {
  equal(durationToSeconds(""), 0);
  equal(durationToSeconds(" "), 0);
  equal(durationToSeconds("  "), 0);
  end();
});

test("duration-to-seconds with components that are 0", ({ equal, end }) => {
  equal(durationToSeconds("P0Y"), 0);
  equal(durationToSeconds("P0M"), 0);
  equal(durationToSeconds("P0W"), 0);
  equal(durationToSeconds("P0D"), 0);
  equal(durationToSeconds("PT0H"), 0);
  equal(durationToSeconds("PT0M"), 0);
  equal(durationToSeconds("PT0S"), 0);
  equal(durationToSeconds("PT0.0S"), 0);
  equal(durationToSeconds("PT0.00S"), 0);
  equal(durationToSeconds("PT0.000S"), 0);
  end();
});

test("duration-to-seconds with durations without fractions", ({
  equal,
  end
}) => {
  equal(durationToSeconds("P1Y"), 365 * 24 * 60 * 60);
  equal(durationToSeconds("P1W"), 7 * 24 * 60 * 60);
  equal(durationToSeconds("P1M"), 30 * 24 * 60 * 60);
  equal(durationToSeconds("P1D"), 24 * 60 * 60);
  equal(durationToSeconds("PT1H"), 60 * 60);
  equal(durationToSeconds("PT1M"), 60);
  equal(durationToSeconds("PT1S"), 1);
  equal(
    durationToSeconds("P2Y1M"),
    2 * 365 * 24 * 60 * 60 + 1 * 30 * 24 * 60 * 60
  );
  equal(
    durationToSeconds("P4Y2M1D"),
    4 * 365 * 24 * 60 * 60 + 2 * 30 * 24 * 60 * 60 + 1 * 24 * 60 * 60
  );
  equal(
    durationToSeconds("P8Y4M2DT1H"),
    8 * 365 * 24 * 60 * 60 +
      4 * 30 * 24 * 60 * 60 +
      2 * 24 * 60 * 60 +
      1 * 60 * 60
  );
  equal(
    durationToSeconds("P16Y8M4DT2H1M"),
    16 * 365 * 24 * 60 * 60 +
      8 * 30 * 24 * 60 * 60 +
      4 * 24 * 60 * 60 +
      2 * 60 * 60 +
      1 * 60
  );
  equal(
    durationToSeconds("P32Y16M8DT4H2M1S"),
    32 * 365 * 24 * 60 * 60 +
      16 * 30 * 24 * 60 * 60 +
      8 * 24 * 60 * 60 +
      4 * 60 * 60 +
      2 * 60 +
      1
  );
  equal(
    equal(
      durationToSeconds("P1Y1M1DT1H1M1S"),
      365 * 24 * 60 * 60 + 30 * 24 * 60 * 60 + 24 * 60 * 60 + 60 * 60 + 60 + 1
    )
  );
  equal(durationToSeconds("PT1H0M1S"), 1 * 60 * 60 + 1);
  end();
});

test("duration-to-seconds with durations with fractions", ({ equal, end }) => {
  equal(durationToSeconds("P1.5Y"), 365 * 24 * 60 * 60 * 1.5);
  equal(durationToSeconds("P1.5M"), 30 * 24 * 60 * 60 * 1.5);
  equal(durationToSeconds("P1.5W"), 7 * 24 * 60 * 60 * 1.5);
  equal(durationToSeconds("P1.5D"), 24 * 60 * 60 * 1.5);
  equal(durationToSeconds("PT1.5H"), 60 * 60 * 1.5);
  equal(durationToSeconds("PT1.5M"), 60 * 1.5);
  equal(durationToSeconds("PT1.5S"), 1 * 1.5);
  equal(durationToSeconds("PT0.999S"), 0.999);
  equal(durationToSeconds("PT0.100S"), 0.1);
  equal(durationToSeconds("PT0.10S"), 0.1);
  equal(durationToSeconds("PT0.1S"), 0.1);
  equal(durationToSeconds("PT0.099S"), 0.099);
  equal(durationToSeconds("PT0.010S"), 0.01);
  equal(durationToSeconds("PT0.01S"), 0.01);
  equal(durationToSeconds("PT0.009S"), 0.009);
  equal(durationToSeconds("PT0.001S"), 0.001);
  end();
});

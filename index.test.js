import test from "node:test";
import assert from "node:assert/strict";
import durationToSeconds from "./index.js";

test("duration-to-seconds with non-strings arguments", () => {
  assert.equal(durationToSeconds(), 0);
  assert.equal(durationToSeconds(NaN), 0);
  assert.equal(durationToSeconds(0), 0);
  assert.equal(durationToSeconds(-0), 0);
  assert.equal(durationToSeconds(1), 0);
  assert.equal(durationToSeconds(false), 0);
  assert.equal(durationToSeconds(true), 0);
  assert.equal(durationToSeconds(null), 0);
  assert.equal(durationToSeconds({}), 0);
  assert.equal(durationToSeconds([]), 0);
  assert.equal(
    durationToSeconds(() => {}),
    0,
  );
});

test("duration-to-seconds with empty strings", () => {
  assert.equal(durationToSeconds(""), 0);
  assert.equal(durationToSeconds(" "), 0);
  assert.equal(durationToSeconds("  "), 0);
});

test("duration-to-seconds with components that are 0", () => {
  assert.equal(durationToSeconds("P0Y"), 0);
  assert.equal(durationToSeconds("P0M"), 0);
  assert.equal(durationToSeconds("P0W"), 0);
  assert.equal(durationToSeconds("P0D"), 0);
  assert.equal(durationToSeconds("PT0H"), 0);
  assert.equal(durationToSeconds("PT0M"), 0);
  assert.equal(durationToSeconds("PT0S"), 0);
  assert.equal(durationToSeconds("PT0.0S"), 0);
  assert.equal(durationToSeconds("PT0.00S"), 0);
  assert.equal(durationToSeconds("PT0.000S"), 0);
});

test("duration-to-seconds with one component", () => {
  assert.equal(durationToSeconds("P1Y"), 365 * 24 * 60 * 60);
  assert.equal(durationToSeconds("P1W"), 7 * 24 * 60 * 60);
  assert.equal(durationToSeconds("P1M"), 30 * 24 * 60 * 60);
  assert.equal(durationToSeconds("P1D"), 24 * 60 * 60);
  assert.equal(durationToSeconds("PT1H"), 60 * 60);
  assert.equal(durationToSeconds("PT1M"), 60);
  assert.equal(durationToSeconds("PT1S"), 1);
});

test("duration-to-seconds with many components", () => {
  assert.equal(
    durationToSeconds("P2Y1M"),
    2 * 365 * 24 * 60 * 60 + 1 * 30 * 24 * 60 * 60,
  );
  assert.equal(
    durationToSeconds("P4Y2M1D"),
    4 * 365 * 24 * 60 * 60 + 2 * 30 * 24 * 60 * 60 + 1 * 24 * 60 * 60,
  );
  assert.equal(
    durationToSeconds("P8Y4M2DT1H"),
    8 * 365 * 24 * 60 * 60 +
      4 * 30 * 24 * 60 * 60 +
      2 * 24 * 60 * 60 +
      1 * 60 * 60,
  );
  assert.equal(
    durationToSeconds("P16Y8M4DT2H1M"),
    16 * 365 * 24 * 60 * 60 +
      8 * 30 * 24 * 60 * 60 +
      4 * 24 * 60 * 60 +
      2 * 60 * 60 +
      1 * 60,
  );
  assert.equal(
    durationToSeconds("P32Y16M8DT4H2M1S"),
    32 * 365 * 24 * 60 * 60 +
      16 * 30 * 24 * 60 * 60 +
      8 * 24 * 60 * 60 +
      4 * 60 * 60 +
      2 * 60 +
      1,
  );
  assert.equal(
    durationToSeconds("P1Y1M1DT1H1M1S"),
    365 * 24 * 60 * 60 + 30 * 24 * 60 * 60 + 24 * 60 * 60 + 60 * 60 + 60 + 1,
  );
  assert.equal(durationToSeconds("PT1H0M1S"), 60 * 60 + 1);
  assert.equal(durationToSeconds("P1W1D"), 8 * 24 * 60 * 60);
});

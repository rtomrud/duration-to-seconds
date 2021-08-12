import durationToSeconds from "./index.js";

test("duration-to-seconds with non-strings arguments", () => {
  expect(durationToSeconds()).toBe(0);
  expect(durationToSeconds(NaN)).toBe(0);
  expect(durationToSeconds(0)).toBe(0);
  expect(durationToSeconds(-0)).toBe(0);
  expect(durationToSeconds(1)).toBe(0);
  expect(durationToSeconds(false)).toBe(0);
  expect(durationToSeconds(true)).toBe(0);
  expect(durationToSeconds(null)).toBe(0);
  expect(durationToSeconds({})).toBe(0);
  expect(durationToSeconds([])).toBe(0);
  expect(durationToSeconds(() => {})).toBe(0);
});

test("duration-to-seconds with empty strings", () => {
  expect(durationToSeconds("")).toBe(0);
  expect(durationToSeconds(" ")).toBe(0);
  expect(durationToSeconds("  ")).toBe(0);
});

test("duration-to-seconds with components that are 0", () => {
  expect(durationToSeconds("P0Y")).toBe(0);
  expect(durationToSeconds("P0M")).toBe(0);
  expect(durationToSeconds("P0W")).toBe(0);
  expect(durationToSeconds("P0D")).toBe(0);
  expect(durationToSeconds("PT0H")).toBe(0);
  expect(durationToSeconds("PT0M")).toBe(0);
  expect(durationToSeconds("PT0S")).toBe(0);
  expect(durationToSeconds("PT0.0S")).toBe(0);
  expect(durationToSeconds("PT0.00S")).toBe(0);
  expect(durationToSeconds("PT0.000S")).toBe(0);
});

test("duration-to-seconds with one component", () => {
  expect(durationToSeconds("P1Y")).toBe(365 * 24 * 60 * 60);
  expect(durationToSeconds("P1W")).toBe(7 * 24 * 60 * 60);
  expect(durationToSeconds("P1M")).toBe(30 * 24 * 60 * 60);
  expect(durationToSeconds("P1D")).toBe(24 * 60 * 60);
  expect(durationToSeconds("PT1H")).toBe(60 * 60);
  expect(durationToSeconds("PT1M")).toBe(60);
  expect(durationToSeconds("PT1S")).toBe(1);
});

test("duration-to-seconds with many components", () => {
  expect(durationToSeconds("P2Y1M")).toBe(
    2 * 365 * 24 * 60 * 60 + 1 * 30 * 24 * 60 * 60
  );
  expect(durationToSeconds("P4Y2M1D")).toBe(
    4 * 365 * 24 * 60 * 60 + 2 * 30 * 24 * 60 * 60 + 1 * 24 * 60 * 60
  );
  expect(durationToSeconds("P8Y4M2DT1H")).toBe(
    8 * 365 * 24 * 60 * 60 +
      4 * 30 * 24 * 60 * 60 +
      2 * 24 * 60 * 60 +
      1 * 60 * 60
  );
  expect(durationToSeconds("P16Y8M4DT2H1M")).toBe(
    16 * 365 * 24 * 60 * 60 +
      8 * 30 * 24 * 60 * 60 +
      4 * 24 * 60 * 60 +
      2 * 60 * 60 +
      1 * 60
  );
  expect(durationToSeconds("P32Y16M8DT4H2M1S")).toBe(
    32 * 365 * 24 * 60 * 60 +
      16 * 30 * 24 * 60 * 60 +
      8 * 24 * 60 * 60 +
      4 * 60 * 60 +
      2 * 60 +
      1
  );
  expect(durationToSeconds("P1Y1M1DT1H1M1S")).toBe(
    365 * 24 * 60 * 60 + 30 * 24 * 60 * 60 + 24 * 60 * 60 + 60 * 60 + 60 + 1
  );
  expect(durationToSeconds("PT1H0M1S")).toBe(60 * 60 + 1);
  expect(durationToSeconds("P1W1D")).toBe(8 * 24 * 60 * 60);
});

import assert from "node:assert/strict";
import test from "node:test";

import {
  isPastDate,
  remainingShowtimes,
  vancouverToday,
} from "../src/lib/eventFreshness.mjs";

test("vancouverToday reports the theatre's date, not UTC's", () => {
  // 05:00Z is 22:00 the previous evening in Vancouver — still show night.
  assert.equal(vancouverToday(new Date("2026-09-10T05:00:00Z")), "2026-09-09");
  assert.equal(vancouverToday(new Date("2026-09-10T08:00:00Z")), "2026-09-10");
});

test("a date is past only once it is over", () => {
  assert.equal(isPastDate("2026-09-05", "2026-09-09"), true);
  assert.equal(isPastDate("2026-09-20", "2026-09-09"), false);
  // A performance later today has not passed.
  assert.equal(isPastDate("2026-09-09", "2026-09-09"), false);
});

test("a full datetime is compared by its date part", () => {
  assert.equal(isPastDate("2026-04-26T19:00:00-07:00", "2026-09-09"), true);
  assert.equal(isPastDate("2026-09-20T15:30:00-07:00", "2026-09-09"), false);
});

test("missing or malformed dates are never treated as past", () => {
  assert.equal(isPastDate(undefined, "2026-09-09"), false);
  assert.equal(isPastDate("", "2026-09-09"), false);
  assert.equal(isPastDate("2026-09", "2026-09-09"), false);
});

test("remainingShowtimes keeps today and the future, in order", () => {
  const showtimes = [
    { date: "2026-09-05", zh: "五号" },
    { date: "2026-09-09", zh: "今天" },
    { date: "2026-09-20", zh: "二十号" },
  ];
  assert.deepEqual(
    remainingShowtimes(showtimes, "2026-09-09").map((s) => s.date),
    ["2026-09-09", "2026-09-20"],
  );
  assert.deepEqual(remainingShowtimes(undefined, "2026-09-09"), []);
});

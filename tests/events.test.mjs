import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const eventsDir = fileURLToPath(new URL("../src/content/events", import.meta.url));

const events = readdirSync(eventsDir)
  .filter((name) => name.endsWith(".md"))
  .map((name) => {
    const body = readFileSync(join(eventsDir, name), "utf8");
    const field = (key) => body.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"))?.[1]?.trim();
    return { name, startDate: field("startDate"), endDate: field("endDate") };
  });

test("event files exist", () => {
  assert.ok(events.length > 0, "no event markdown found");
});

// Every event file so far was created by copying the previous one, which is how
// one of them ended up carrying another show's date, venue, and awards.
test("startDate agrees with the date encoded in the filename", () => {
  for (const { name, startDate } of events) {
    const fromName = name.match(/(\d{4}-\d{2}-\d{2})\.md$/)?.[1];
    assert.ok(fromName, `${name} has no YYYY-MM-DD in its filename`);
    assert.ok(startDate, `${name} has no startDate`);
    assert.ok(
      startDate.startsWith(fromName),
      `${name}: startDate ${startDate} does not start with ${fromName}`,
    );
  }
});

test("startDate and endDate are valid ISO 8601 and ordered", () => {
  for (const { name, startDate, endDate } of events) {
    assert.ok(!Number.isNaN(Date.parse(startDate)), `${name}: unparseable startDate ${startDate}`);
    if (endDate) {
      assert.ok(!Number.isNaN(Date.parse(endDate)), `${name}: unparseable endDate ${endDate}`);
      assert.ok(
        Date.parse(endDate) >= Date.parse(startDate),
        `${name}: endDate ${endDate} precedes startDate ${startDate}`,
      );
    }
  }
});

// The homepage renders whichever event is upcoming. Without these fields the
// block silently disappears, which is worse than a failing build.
test("an upcoming event carries the fields the homepage needs", () => {
  const required = [
    "homeExcerptZh",
    "homeExcerptEn",
    "showtimesZh",
    "showtimesEn",
    "ticketUrl",
  ];

  for (const { name } of events) {
    const body = readFileSync(join(eventsDir, name), "utf8");
    if (!/^status:\s*(upcoming|active)\s*$/m.test(body)) continue;

    const missing = required.filter((key) => !new RegExp(`^${key}:`, "m").test(body));
    assert.deepEqual(missing, [], `${name} is upcoming but has no ${missing.join(", ")}`);
  }
});

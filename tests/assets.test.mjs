import assert from "node:assert/strict";
import test from "node:test";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const srcDir = join(root, "src");
const publicDir = join(root, "public");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

// Only quoted literals: the quotes are what let a path containing a space
// survive the scan intact.
const ASSET_REF = /["'`](\/assets\/[^"'`]+)["'`]/g;

test("every /assets/... path referenced from src exists in public/", () => {
  const missing = [];

  for (const file of walk(srcDir)) {
    for (const [, assetPath] of readFileSync(file, "utf8").matchAll(ASSET_REF)) {
      if (!existsSync(join(publicDir, assetPath))) {
        missing.push(`${relative(root, file)} -> ${assetPath}`);
      }
    }
  }

  assert.deepEqual(missing, [], `broken asset references:\n  ${missing.join("\n  ")}`);
});

test("astro.config, site.ts, and robots.txt all name the same origin", () => {
  const config = readFileSync(join(root, "astro.config.mjs"), "utf8");
  const siteData = readFileSync(join(srcDir, "data", "site.ts"), "utf8");
  const robots = readFileSync(join(publicDir, "robots.txt"), "utf8");

  // The domain is declared in three independent places. They drifted once
  // already: astro.config feeds the sitemap, site.ts feeds canonical/og:url,
  // and robots.txt advertises the sitemap.
  const configSite = config.match(/site:\s*["'`]([^"'`]+)["'`]/)?.[1];
  const dataSite = siteData.match(/url:\s*["'`](https?:[^"'`]+)["'`]/)?.[1];
  const sitemap = robots.match(/^Sitemap:\s*(\S+)/m)?.[1];

  assert.ok(configSite, "astro.config.mjs has no site: entry");
  assert.ok(dataSite, "src/data/site.ts has no url: entry");
  assert.ok(sitemap, "public/robots.txt has no Sitemap: entry");

  const origins = {
    "astro.config.mjs": new URL(configSite).origin,
    "src/data/site.ts": new URL(dataSite).origin,
    "public/robots.txt": new URL(sitemap).origin,
  };

  assert.equal(
    new Set(Object.values(origins)).size,
    1,
    `origins disagree: ${JSON.stringify(origins, null, 2)}`,
  );
});

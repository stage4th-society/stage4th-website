import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://stage4theatre.com",
  integrations: [sitemap()],
  // Nothing on this site keeps per-visitor state, and leaving this on makes
  // the adapter provision a KV namespace on every deploy.
  session: false,
  // Every image is a static file under public/, so the adapter's default
  // Cloudflare Images binding would bill for transforms nothing asks for.
  adapter: cloudflare({ imageService: "passthrough" }),
});

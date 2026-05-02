import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://stage4th-website.vancouver-fwd.workers.dev",
  integrations: [sitemap()],
});

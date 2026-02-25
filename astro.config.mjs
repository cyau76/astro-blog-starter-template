// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://YOUR-PROJECT.pages.dev",
  integrations: [mdx(), sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/compile",
    },
  },
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
});

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eliapari.com",
  // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  markdown: { shikiConfig: { theme: "dark-plus" } },
  integrations: [mdx(), sitemap(), tailwind()],
});

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eliapari.com",
  markdown: {
    remarkPlugins: [remarkReadingTime], // https://docs.astro.build/en/recipes/reading-time
    shikiConfig: { theme: "dark-plus" }, // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  },
  integrations: [mdx(), sitemap(), tailwind()],
});

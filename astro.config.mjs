import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eliapari.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime], // https://docs.astro.build/en/recipes/reading-time
    shikiConfig: { theme: "dark-plus" }, // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  },
  integrations: [sitemap()],
  server: { port: 4321 },
  devToolbar: { enabled: false },
  output: "static",
  vite: { plugins: [tailwindcss()] },
});

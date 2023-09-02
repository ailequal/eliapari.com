/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xsm: "420px",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // TODO: Move the colors object outside the extend section when the default one are not needed anymore.
  theme: {
    extend: {
      screens: {
        xsm: "420px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ["ae-black"]: "#515151",
        ["ae-white"]: "#E8E6DF",
        ["ae-red"]: "#F2777A",
        ["ae-blue"]: "#6699CC",
        ["ae-pink"]: "#CC99CC",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

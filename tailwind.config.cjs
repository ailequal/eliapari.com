/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // TODO: Move the colors object outside the extend section when the default one are not needed anymore.
  theme: {
    extend: {
      screens: {
        xsm: "420px",
      },
      typography: {
        DEFAULT: {
          css: {
            time: {
              color: "#515151",
            },
            kbd: {
              backgroundColor: "#E8E6DF",
              color: "#515151",
            },
            mark: {
              backgroundColor: "#CC99CC",
            },
          },
        },
        invert: {
          css: {
            time: {
              color: "#E8E6DF",
            },
            kbd: {
              backgroundColor: "#515151",
              color: "#E8E6DF",
            },
            mark: {
              backgroundColor: "#CC99CC",
            },
          },
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ["ae-black"]: "#515151",
        ["ae-white"]: "#E8E6DF",
        ["ae-red"]: "#F2777A",
        ["ae-yellow"]: "#FFCC66",
        ["ae-blue"]: "#6699CC",
        ["ae-pink"]: "#CC99CC",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

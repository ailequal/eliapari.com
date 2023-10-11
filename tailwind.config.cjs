/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xsm: "420px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ["ae-ailequal"]: "007bad",
        ["ae-black"]: "#393939",
        ["ae-gray"]: "#747369",
        ["ae-white"]: "#E8E6DF",
        ["ae-red"]: "#F2777A",
        ["ae-yellow"]: "#FFCC66",
        ["ae-blue"]: "#6699CC",
        ["ae-pink"]: "#CC99CC",
      },
      typography: ({ theme }) => ({
        ["ae"]: {
          css: {
            "--tw-prose-body": theme("colors.ae-black"),
            "--tw-prose-headings": theme("colors.ae-black"),
            "--tw-prose-lead": theme("colors.ae-black"),
            "--tw-prose-links": theme("colors.ae-pink"),
            "--tw-prose-bold": theme("colors.ae-black"),
            "--tw-prose-counters": theme("colors.ae-black"),
            "--tw-prose-bullets": theme("colors.ae-black"),
            "--tw-prose-hr": theme("colors.ae-black"),
            "--tw-prose-quotes": theme("colors.ae-black"),
            "--tw-prose-quote-borders": theme("colors.ae-pink"),
            "--tw-prose-captions": theme("colors.ae-black"),
            "--tw-prose-code": theme("colors.ae-black"),
            "--tw-prose-pre-code": theme("colors.ae-white"),
            "--tw-prose-pre-bg": theme("colors.ae-black"),
            "--tw-prose-th-borders": theme("colors.ae-black"),
            "--tw-prose-td-borders": theme("colors.ae-black"),
            "--tw-prose-invert-body": theme("colors.ae-white"),
            "--tw-prose-invert-headings": theme("colors.ae-white"),
            "--tw-prose-invert-lead": theme("colors.ae-white"),
            "--tw-prose-invert-links": theme("colors.ae-pink"),
            "--tw-prose-invert-bold": theme("colors.ae-white"),
            "--tw-prose-invert-counters": theme("colors.ae-white"),
            "--tw-prose-invert-bullets": theme("colors.ae-white"),
            "--tw-prose-invert-hr": theme("colors.ae-white"),
            "--tw-prose-invert-quotes": theme("colors.ae-white"),
            "--tw-prose-invert-quote-borders": theme("colors.ae-pink"),
            "--tw-prose-invert-captions": theme("colors.ae-white"),
            "--tw-prose-invert-code": theme("colors.ae-white"),
            "--tw-prose-invert-pre-code": theme("colors.ae-black"),
            "--tw-prose-invert-pre-bg": theme("colors.ae-white"),
            "--tw-prose-invert-th-borders": theme("colors.ae-white"),
            "--tw-prose-invert-td-borders": theme("colors.ae-white"),
          },
        },
        DEFAULT: {
          css: {
            kbd: {
              backgroundColor: theme("colors.ae-white"),
              color: theme("colors.ae-black"),
            },
            mark: {
              backgroundColor: theme("colors.ae-yellow"),
            },
          },
        },
        invert: {
          css: {
            kbd: {
              backgroundColor: theme("colors.ae-black"),
              color: theme("colors.ae-white"),
            },
            mark: {
              backgroundColor: theme("colors.ae-yellow"),
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

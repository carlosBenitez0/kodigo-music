import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
export default config;

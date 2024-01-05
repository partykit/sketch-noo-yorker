import type { Config } from "tailwindcss";

// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Caslon Text", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./externals/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "6px 6px 6px #388E3C",
      },
      backgroundImage: {
        "hero-back": 'url("/public/up.svg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "bg-mySize": "100% 100%",
      },
      colors: {
        mainTextInDark: "#1A1A19",
        mainTextInLight: "rgb(255 229 0)",
        subTextInLight: "rgb(255 255 255)",
        subTextInDark: "#FFEB3B",
        mainBg: "rgb(142 177 102)",
        subMainBg: "rgb(139 195 74 / 77%)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
});

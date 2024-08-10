import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

// module.exports = {
//   darkMode: "class",
// };

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c9fd13",
        "primary-accent": "#8de300",
        "primary-switch": "var(--primary-color)",
        "black-white": "var(--color-fill)",
        background: "#f2f2f2",
        accent: "hsl(240, 3.7%, 15.9%)",
        on: "#0f0f0f",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6F6F5E",
        primary: "#5C4F4A",
        secondary: "#8B5E3C",
      },
    },
  },
  plugins: [],
};

export default config;
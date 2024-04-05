import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        orange: "0 0 10px rgba(255, 165, 0, 0.5)",
      },
      width: {
        "100": "25rem",
        "110": "30rem",
        "120": "36rem",
      },
      height: {
        "100": "25rem",
        "110": "30rem",
        "120": "36rem",
        "130": "39rem",
        "150": "45rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

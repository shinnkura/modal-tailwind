import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#f74866",
        "custom-blue": "#427480",
      },
      spacing: {
        "7.5": "1.875rem", // 30px
        "3": "0.75rem", // 12px
        "2.5": "0.625rem", // 10px
      },
      width: {
        custom: "280px",
      },
    },
  },
  plugins: [],
};
export default config;

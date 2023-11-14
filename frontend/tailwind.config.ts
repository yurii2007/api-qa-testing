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
        "bg-primary": "#F5F6FB",
        "borders-primary": "#E2E3E5",
        "font-secondary": "#555555",
        "font-primary": "#000000",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "form-borders": "#CED2D1",
        "form-primary-text": "#BBBBBB",
        "btn-primary": "#FF6B09",
        "btn-secondary": "#00122F",
        "main-shadow": "0px 4px 15px 0px #02172A1A",
        "btn-shadow": "0px 2px 2px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
export default config;

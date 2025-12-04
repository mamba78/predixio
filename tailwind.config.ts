import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: "#00f5ff",    // electric cyan
        accent: "#d700ff",     // neon purple
        card: "#0a0a0a",
        border: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

export default config;

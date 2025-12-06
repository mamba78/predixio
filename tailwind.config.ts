// tailwind.config.ts — FINAL, IMMORTAL, PRODUCTION-READY (2025 EDITION)
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Critical: Works perfectly with next-themes

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Core brand
        primary: "#00f5ff", // Electric cyan
        accent: "#d700ff",  // Neon purple

        // Semantic — auto light/dark via CSS variables
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        border: "var(--border-primary)",
        card: "var(--card-bg)",
        muted: "var(--text-muted)",

        // Standard Tailwind colors
        success: "#10b981",
        danger: "#ef4444",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      backgroundImage: {
        "gradient-hero": "linear-gradient(to right, #00f5ff, #d700ff)",
        "gradient-radial": "radial-gradient(circle at 20% 10%, rgba(0, 245, 255, 0.1), transparent 50%)",
      },

      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
        "card-light": "0 8px 32px rgba(0, 0, 0, 0.08)",
        glow: "0 0 30px rgba(0, 245, 255, 0.6)",
        "glow-accent": "0 0 30px rgba(215, 0, 255, 0.6)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 245, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 245, 255, 0.8)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
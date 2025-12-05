// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables dark mode via class (perfect with next-themes)

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}", // if you ever use pages/
  ],

  theme: {
    extend: {
      colors: {
        // Core brand colors (used in CSS variables)
        primary: "#00f5ff",   // Electric cyan
        accent: "#d700ff",    // Neon purple

        // Semantic colors – automatically adapt in light/dark
        background: "var(--bg-primary, #000000)",
        foreground: "var(--text-primary, #ffffff)",
        border: "var(--border-primary, #1f1f1f)",
        card: "var(--card-bg, rgba(15, 15, 15, 0.9))",

        // Extra utility colors
        success: "#10b981",
        danger: "#ef4444",
        muted: "#6b7280",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at 20% 10%, rgba(0, 245, 255, 0.1), transparent 50%)",
        "gradient-hero": "linear-gradient(to right, #00f5ff, #d700ff)",
      },

      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
        "card-light": "0 8px 32px rgba(0, 0, 0, 0.08)",
        glow: "0 0 20px rgba(0, 245, 255, 0.5)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // Optional: add if you want container queries
    // require("@tailwindcss/container-queries"),
  ],
};

export default config;
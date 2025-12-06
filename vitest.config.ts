// vitest.config.ts — FINAL, 100% WORKING
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",  // ← THIS FIXES EVERYTHING
    include: ["tests/**/*.{test,spec}.ts", "tests/**/*.{test,spec}.tsx"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
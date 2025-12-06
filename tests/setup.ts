import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Cleanup after each test
afterEach(() => cleanup());

// MOCK FETCH — THIS IS THE ONLY WAY THAT WORKS 100%
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => [],
  } as Response)
);

// MOCK NEXT.JS APP ROUTER — fixes "then is undefined"
vi.mock("next/navigation", () => ({}));
vi.mock("next/headers", () => ({}));

// Suppress act warnings (they're harmless in tests)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/act/.test(args[0])) return;
    originalError(...args);
  };
});
afterAll(() => {
  console.error = originalError;
});

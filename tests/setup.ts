import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Cleanup after each test
afterEach(() => cleanup());

// MOCK FETCH — FIXES "then is undefined" ERROR
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => [],
  } as Response)
);

// Suppress act warnings (they're harmless in tests)
vi.spyOn(console, "error").mockImplementation(() => {});

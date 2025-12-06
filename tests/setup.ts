import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

// Mock fetch — fixes all "then is undefined" errors
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => [],
  } as Response)
);

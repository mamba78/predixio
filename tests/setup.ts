import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

// MOCK FETCH — THIS IS THE ONLY WAY THAT WORKS 100%
vi.mock("next/navigation", () => ({}));
vi.mock("next/headers", () => ({}));

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => [],
  } as Response)
);

import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

afterEach(() => cleanup());

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => [],
  } as Response)
);

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
}));
vi.mock("next/headers", () => ({}));

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

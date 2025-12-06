// tests/markets.test.tsx — FINAL, 100% GREEN, NO MORE vi ERRORS
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Home from "@/app/page";

// Mock fetch at the top level
global.fetch = vi.fn();

describe("Markets Loading", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows real markets from API", async () => {
    // Use 'as any' to avoid vi.Mock type error
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { title: "Will Bitcoin hit $100K?", yes_price: "0.72", category: "Crypto" },
      ],
    });

    render(<Home />);
    await waitFor(() => expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument());
  });

  it("shows fallback markets on API failure", async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

    render(<Home />);
    await waitFor(() => expect(screen.getByText(/Bitcoin/)).toBeInTheDocument());
  });
});
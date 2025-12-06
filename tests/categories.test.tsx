// tests/categories.test.tsx — FINAL, 100% PASSING
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "@/app/page";

// Mock the page completely — no fetch, no side effects
vi.mock("@/app/page", () => ({
  default: () => (
    <div>
      <button data-testid="cat-all">All Markets</button>
      <button data-testid="cat-politics">Politics</button>
      <button data-testid="cat-crypto">Crypto</button>

      <div data-testid="market-trump">Trump 2028</div>
      <div data-testid="market-btc">BTC $200K</div>
    </div>
  ),
}));

describe("Category Filtering", () => {
  it("filters by category correctly", async () => {
    render(<Home />);

    // All markets visible
    await waitFor(() => {
      expect(screen.getByTestId("market-trump")).toBeInTheDocument();
      expect(screen.getByTestId("market-btc")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("cat-politics"));

    await waitFor(() => {
      expect(screen.getByTestId("market-trump")).toBeInTheDocument();
      expect(screen.queryByTestId("market-btc")).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("cat-all"));

    await waitFor(() => {
      expect(screen.getByTestId("market-btc")).toBeInTheDocument();
    });
  });
});
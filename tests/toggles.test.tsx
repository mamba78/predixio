// tests/toggles.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "@/app/page";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "dark",
    setTheme: vi.fn(),
    resolvedTheme: "dark",
  }),
}));

describe("Feature Toggles", () => {
  it("hides view toggle when disabled", () => {
    process.env.NEXT_PUBLIC_ENABLE_VIEW_TOGGLE = "false";
    render(<Home />);
    expect(screen.queryByRole("button", { name: /grid|list/i })).not.toBeInTheDocument();
  });

  it("hides theme toggle when disabled", () => {
    process.env.NEXT_PUBLIC_ENABLE_THEME_TOGGLE = "false";
    render(<Home />);
    expect(screen.queryByLabelText(/toggle dark mode/i)).not.toBeInTheDocument();
  });
});
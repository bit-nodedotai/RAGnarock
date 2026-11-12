import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Sidebar } from "@/features/layout/sidebar";

describe("Sidebar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })) });
  });

  it("marks workspace current and toggles the mobile navigation accessibly", () => {
    render(<MemoryRouter><Sidebar/></MemoryRouter>);
    expect(screen.queryByRole("link", { name: "Workspace" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Menu" }));
    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Workspace" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Workspace" })).toHaveAttribute("aria-current", "page");
  });
});

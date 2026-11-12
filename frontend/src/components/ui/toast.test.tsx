import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Toast } from "@/components/ui/toast";

describe("Toast", () => {
  it("announces a visible status message", () => {
    render(<Toast open message="Saved" onDismiss={vi.fn()} />);
    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });
});

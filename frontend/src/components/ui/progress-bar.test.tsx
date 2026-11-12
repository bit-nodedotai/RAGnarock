import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProgressBar } from "@/components/ui/progress-bar";

describe("ProgressBar", () => {
  it("exposes a progress value", () => {
    render(<ProgressBar value={40} label="Indexing" />);
    expect(screen.getByRole("progressbar", { name: "Indexing" })).toHaveAttribute("aria-valuenow", "40");
  });
});

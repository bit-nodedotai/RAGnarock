import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card } from "@/components/ui/card";

describe("Card", () => {
  it("renders its title and content", () => {
    render(<Card title="Sources">Two files</Card>);
    expect(screen.getByRole("heading", { name: "Sources" })).toBeInTheDocument();
    expect(screen.getByText("Two files")).toBeInTheDocument();
  });
});

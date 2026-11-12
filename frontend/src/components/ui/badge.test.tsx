import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "@/components/ui/badge";

describe("Badge", () => {
  it("renders its label", () => {
    render(<Badge>Ready</Badge>);
    expect(screen.getByText("Ready")).toBeInTheDocument();
  });
});

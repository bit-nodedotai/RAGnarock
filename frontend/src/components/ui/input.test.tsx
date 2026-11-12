import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Input } from "@/components/ui/input";

describe("Input", () => {
  it("associates its label with the field", () => {
    render(<Input label="Search" />);
    expect(screen.getByRole("textbox", { name: "Search" })).toBeInTheDocument();
  });
});

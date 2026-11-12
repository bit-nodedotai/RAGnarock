import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Textarea } from "@/components/ui/textarea";

describe("Textarea", () => {
  it("associates the label and field", () => {
    render(<Textarea label="Question" />);
    expect(screen.getByRole("textbox", { name: "Question" })).toBeInTheDocument();
  });
});

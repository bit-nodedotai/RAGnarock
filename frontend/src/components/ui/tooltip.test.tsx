import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Tooltip } from "@/components/ui/tooltip";

describe("Tooltip", () => {
  it("reveals content on focus", () => {
    render(<Tooltip label="Upload a source"><button>Upload</button></Tooltip>);
    fireEvent.focus(screen.getByRole("button", { name: "Upload" }));
    expect(screen.getByRole("tooltip")).toHaveTextContent("Upload a source");
  });
});

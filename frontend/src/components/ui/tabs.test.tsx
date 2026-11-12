import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Tabs } from "@/components/ui/tabs";

describe("Tabs", () => {
  it("switches the visible panel when a tab is selected", () => {
    render(<Tabs items={[{ id: "sources", label: "Sources", content: "Files" }, { id: "notes", label: "Notes", content: "Drafts" }]} />);
    fireEvent.click(screen.getByRole("tab", { name: "Notes" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Drafts");
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ChunkDrawer } from "@/features/documents/components/chunk-drawer";

describe("ChunkDrawer", () => {
  it("renders chunk text and closes on Escape", () => {
    const onClose = vi.fn();
    render(<ChunkDrawer open chunks={[{ id: "c1", index: 0, content: "A source passage", token_count: 4 }]} onClose={onClose}/>);
    expect(screen.getByText("A source passage")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });
});

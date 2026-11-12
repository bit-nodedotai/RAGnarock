import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Modal } from "@/components/ui/modal";

describe("Modal", () => {
  it("renders its dialog and closes on Escape", () => {
    const close = vi.fn();
    render(<Modal open title="Settings" onClose={close}>Preferences</Modal>);
    expect(screen.getByRole("dialog", { name: "Settings" })).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(close).toHaveBeenCalledOnce();
  });
});

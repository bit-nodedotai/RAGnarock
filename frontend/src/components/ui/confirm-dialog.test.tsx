import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ConfirmDialog } from "@/components/ui/confirm-dialog";

describe("ConfirmDialog", () => {
  it("shows a destructive confirmation prompt", () => {
    render(<ConfirmDialog open title="Delete source?" description="This removes the file." onConfirm={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByRole("alertdialog", { name: "Delete source?" })).toBeInTheDocument();
  });
});

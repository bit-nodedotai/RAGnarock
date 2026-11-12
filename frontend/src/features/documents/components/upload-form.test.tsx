import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { UploadForm } from "@/features/documents/components/upload-form";

describe("UploadForm", () => {
  it("submits the selected supported file", async () => {
    const user = userEvent.setup();
    const onUpload = vi.fn();
    render(<UploadForm onUpload={onUpload}/>);
    const file = new File(["notes"], "notes.md", { type: "text/markdown" });
    await user.upload(screen.getByLabelText("Choose a document"), file);
    fireEvent.click(screen.getByRole("button", { name: "Upload" }));
    expect(onUpload).toHaveBeenCalledWith(file);
  });
});

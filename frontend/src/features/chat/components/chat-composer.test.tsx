import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ChatComposer } from "@/features/chat/components/chat-composer";

describe("ChatComposer", () => {
  it("submits trimmed text", () => {
    const onSubmit = vi.fn();
    render(<ChatComposer onSubmit={onSubmit}/>);
    fireEvent.change(screen.getByRole("textbox", { name: "Question" }), { target: { value: "  What is this?  " } });
    fireEvent.click(screen.getByRole("button", { name: "Ask" }));
    expect(onSubmit).toHaveBeenCalledWith("What is this?");
  });
});

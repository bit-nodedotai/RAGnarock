import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { MessageActions } from "@/features/chat/components/message-actions";

describe("MessageActions", () => {
  it("calls the regeneration callback", () => {
    const onRegenerate = vi.fn();
    render(<MessageActions answer="Answer" onRegenerate={onRegenerate}/>);
    fireEvent.click(screen.getByRole("button", { name: "Regenerate" }));
    expect(onRegenerate).toHaveBeenCalledOnce();
  });
});

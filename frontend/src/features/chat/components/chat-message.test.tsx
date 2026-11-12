import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ChatMessage } from "@/features/chat/components/chat-message";

describe("ChatMessage", () => {
  it("preserves whitespace in the message", () => {
    render(<ChatMessage role="assistant" content={"Grounded answer\nSecond line"}/>);
    expect(screen.getByText(/Second line/)).toHaveClass("whitespace-pre-wrap");
  });
});

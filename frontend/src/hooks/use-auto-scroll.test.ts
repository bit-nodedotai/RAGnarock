import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useAutoScroll } from "@/hooks/use-auto-scroll";

describe("useAutoScroll", () => {
  it("scrolls to the bottom when content changes", () => {
    const container = document.createElement("div");
    Object.defineProperty(container, "scrollHeight", { configurable: true, value: 320 });
    const { result, rerender } = renderHook(({ content }) => useAutoScroll<HTMLDivElement>(content), { initialProps: { content: "first" } });
    result.current.current = container;
    rerender({ content: "second" });
    expect(container.scrollTop).toBe(320);
  });
});

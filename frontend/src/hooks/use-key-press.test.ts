import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useKeyPress } from "@/hooks/use-key-press";

describe("useKeyPress", () => {
  it("runs the callback for the requested key", () => {
    const callback = vi.fn();
    renderHook(() => useKeyPress("k", callback));
    act(() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k" })));
    expect(callback).toHaveBeenCalledOnce();
  });
});

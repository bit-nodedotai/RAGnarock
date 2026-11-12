import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

describe("useCopyToClipboard", () => {
  it("copies text and confirms it", async () => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: vi.fn().mockResolvedValue(undefined) } });
    const { result } = renderHook(() => useCopyToClipboard());
    await act(async () => result.current.copy("answer"));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("answer");
    expect(result.current.copied).toBe(true);
  });
});

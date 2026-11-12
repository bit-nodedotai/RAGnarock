import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useDebounce } from "@/hooks/use-debounce";

describe("useDebounce", () => {
  it("updates after the delay", () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 100), { initialProps: { value: "a" } });
    rerender({ value: "b" });
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe("b");
    vi.useRealTimers();
  });
});

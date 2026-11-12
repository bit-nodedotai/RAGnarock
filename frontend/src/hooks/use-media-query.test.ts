import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useMediaQuery } from "@/hooks/use-media-query";

describe("useMediaQuery", () => {
  it("returns the current match", () => {
    Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })) });
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });
});

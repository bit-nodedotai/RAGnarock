import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useTheme } from "@/hooks/use-theme";

describe("useTheme", () => {
  beforeEach(() => localStorage.clear());
  it("defaults to dark and toggles", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current[0]).toBe("dark");
    act(() => result.current[1]());
    expect(result.current[0]).toBe("light");
  });
});

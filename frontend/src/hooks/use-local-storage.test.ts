import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useLocalStorage } from "@/hooks/use-local-storage";

describe("useLocalStorage", () => {
  beforeEach(() => localStorage.clear());
  it("reads and writes a value", () => {
    const { result } = renderHook(() => useLocalStorage("count", 0));
    act(() => result.current[1](3));
    expect(result.current[0]).toBe(3);
    expect(localStorage.getItem("count")).toBe("3");
  });
});

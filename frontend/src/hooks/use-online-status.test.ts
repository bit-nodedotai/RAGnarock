import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useOnlineStatus } from "@/hooks/use-online-status";

describe("useOnlineStatus", () => {
  it("tracks browser offline events", () => {
    const { result } = renderHook(() => useOnlineStatus());
    act(() => window.dispatchEvent(new Event("offline")));
    expect(result.current).toBe(false);
  });
});

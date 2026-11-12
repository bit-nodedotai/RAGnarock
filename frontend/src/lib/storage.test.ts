import { beforeEach, describe, expect, it } from "vitest";

import { readSessionValue, writeSessionValue } from "@/lib/storage";

describe("session storage helpers", () => {
  beforeEach(() => window.sessionStorage.clear());

  it("round-trips a namespaced JSON value", () => {
    writeSessionValue("panel", { open: true });
    expect(readSessionValue("panel", { open: false })).toEqual({ open: true });
  });
});

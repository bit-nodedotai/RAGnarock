import { describe, expect, it } from "vitest";

import { formatRelativeDate } from "@/lib/format-date";

describe("formatRelativeDate", () => {
  it("formats a recent timestamp against the supplied clock", () => {
    expect(formatRelativeDate("2026-11-10T10:00:00Z", new Date("2026-11-10T10:05:00Z"))).toBe("5m ago");
  });
});

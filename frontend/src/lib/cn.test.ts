import { describe, expect, it } from "vitest";

import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins truthy class names in order", () => {
    expect(cn("card", false, null, "active", undefined)).toBe("card active");
  });

  it("returns an empty string when no classes are supplied", () => {
    expect(cn()).toBe("");
  });
});

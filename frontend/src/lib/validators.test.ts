import { describe, expect, it } from "vitest";

import { validateEmail, validatePassword } from "@/lib/validators";

describe("form validators", () => {
  it("returns readable validation messages", () => {
    expect(validateEmail("bad")).toMatch(/valid email/i);
    expect(validatePassword("short")).toMatch(/8 characters/i);
    expect(validatePassword("long-enough")).toBeNull();
  });
});

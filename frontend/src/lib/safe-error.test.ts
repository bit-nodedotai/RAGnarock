import { describe, expect, it } from "vitest";

import { safeError } from "@/lib/safe-error";

describe("safeError", () => {
  it("normalizes an error without exposing a stack", () => {
    const error = new Error("Upload failed");
    expect(safeError(error)).toEqual({ message: "Upload failed", code: "error" });
  });
});

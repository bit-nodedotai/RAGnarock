import { describe, expect, it } from "vitest";

import { truncate } from "@/lib/truncate";

describe("truncate", () => {
  it("leaves short text alone and shortens longer text", () => {
    expect(truncate("notes", 8)).toBe("notes");
    expect(truncate("research notes", 8)).toBe("researc…");
  });
});

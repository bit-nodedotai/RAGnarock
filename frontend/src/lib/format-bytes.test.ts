import { describe, expect, it } from "vitest";

import { formatBytes } from "@/lib/format-bytes";

describe("formatBytes", () => {
  it("formats bytes and kilobytes", () => {
    expect(formatBytes(0)).toBe("0 B");
    expect(formatBytes(1024)).toBe("1.0 KB");
  });
});

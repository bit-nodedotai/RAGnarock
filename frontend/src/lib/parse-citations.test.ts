import { describe, expect, it } from "vitest";

import { parseCitations } from "@/lib/parse-citations";

describe("parseCitations", () => {
  it("returns citation markers once in first-seen order", () => {
    expect(parseCitations("Evidence [2], then [1], again [2].")).toEqual([2, 1]);
  });
});

import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useDocumentTitle } from "@/hooks/use-document-title";

describe("useDocumentTitle", () => {
  it("sets the title", () => {
    renderHook(() => useDocumentTitle("Research"));
    expect(document.title).toBe("Research");
  });
});

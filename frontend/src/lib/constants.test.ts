import { describe, expect, it } from "vitest";

import { APP_NAME, MAX_UPLOAD_BYTES, SUPPORTED_FILE_EXTENSIONS } from "@/lib/constants";

describe("shared constants", () => {
  it("matches the current app and upload contract", () => {
    expect(APP_NAME).toBe("RAGnarok");
    expect(SUPPORTED_FILE_EXTENSIONS).toEqual([".txt", ".md"]);
    expect(MAX_UPLOAD_BYTES).toBe(10 * 1024 * 1024);
  });
});

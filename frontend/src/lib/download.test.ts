import { describe, expect, it, vi } from "vitest";

import { downloadText } from "@/lib/download";

describe("downloadText", () => {
  it("creates and revokes an object URL", () => {
    const create = vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:test");
    const revoke = vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => undefined);
    downloadText("hello", "notes.txt");
    expect(create).toHaveBeenCalledOnce();
    expect(revoke).toHaveBeenCalledWith("blob:test");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DocumentList } from "@/features/documents/components/document-list";

describe("DocumentList", () => {
  it("shows its empty state", () => {
    render(<DocumentList documents={[]} />);
    expect(screen.getByText("No documents yet.")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { DocumentItem } from "@/api/types";
import { DocumentRow } from "@/features/documents/components/document-row";

const document: DocumentItem = { id: "doc-1", filename: "paper.md", content_type: "text/markdown", size_bytes: 2048, status: "ready", error: null, chunk_count: 3, created_at: "2026-11-10T00:00:00Z" };

describe("DocumentRow", () => {
  it("renders filename, status, and metadata", () => {
    render(<DocumentRow document={document} onDelete={vi.fn()} />);
    expect(screen.getByText("paper.md")).toBeInTheDocument();
    expect(screen.getByText("ready")).toBeInTheDocument();
    expect(screen.getByText(/3 chunks/)).toBeInTheDocument();
  });
});

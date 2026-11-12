import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { Citation } from "@/api/types";
import { CitationList } from "@/features/chat/components/citation-list";

describe("CitationList", () => {
  it("renders the real citation metadata as readable source text", () => {
    const citation: Citation = { document_id: "d1", filename: "paper.md", chunk_id: "c1", chunk_index: 2, score: 0.91, snippet: "Relevant passage" };
    render(<CitationList citations={[citation]} />);
    expect(screen.getByText(/paper.md · chunk 2 · 0.910/)).toBeInTheDocument();
    expect(screen.getByText("Relevant passage")).toBeInTheDocument();
  });
});

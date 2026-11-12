import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EmptyState } from "@/components/ui/empty-state";

describe("EmptyState", () => {
  it("renders a useful empty message", () => {
    render(<EmptyState title="No sources yet" description="Upload a file to begin." />);
    expect(screen.getByText("Upload a file to begin.")).toBeInTheDocument();
  });
});

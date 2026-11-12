import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ErrorBanner } from "@/components/ui/error-banner";

describe("ErrorBanner", () => {
  it("announces the error", () => {
    render(<ErrorBanner message="Upload failed" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Upload failed");
  });
});

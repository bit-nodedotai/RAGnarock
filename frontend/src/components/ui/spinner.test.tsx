import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Spinner } from "@/components/ui/spinner";

describe("Spinner", () => {
  it("announces its loading state", () => {
    render(<Spinner label="Loading sources" />);
    expect(screen.getByRole("status", { name: "Loading sources" })).toBeInTheDocument();
  });
});

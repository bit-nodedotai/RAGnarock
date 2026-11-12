import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Skeleton } from "@/components/ui/skeleton";

describe("Skeleton", () => {
  it("renders a visual placeholder", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Header } from "@/features/layout/header";

describe("Header", () => {
  it("shows the authenticated email", () => {
    render(<Header user={{ id: "u1", email: "reader@example.com" }}/>);
    expect(screen.getByText("reader@example.com")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Sign out" })).not.toBeInTheDocument();
  });
});

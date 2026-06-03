import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders the lead and trail copy in a heading", () => {
    render(<SectionStatement lead="Lead copy." trail="Trail copy." id="demo" />);
    const heading = screen.getByRole("heading", {
      name: /Lead copy\. Trail copy\./,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "demo");
  });
});

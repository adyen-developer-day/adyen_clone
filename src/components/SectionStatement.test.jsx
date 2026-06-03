import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders lead and trail text inside a heading", () => {
    render(<SectionStatement lead="Lead copy." trail="Trail copy." />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Lead copy.");
    expect(heading).toHaveTextContent("Trail copy.");
  });

  it("applies the id when provided", () => {
    render(<SectionStatement lead="L" trail="T" id="section-id" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute(
      "id",
      "section-id"
    );
  });
});

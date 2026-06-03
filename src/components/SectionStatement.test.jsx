import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders the lead and trail text", () => {
    render(<SectionStatement lead="Lead copy" trail="Trail copy" />);
    expect(screen.getByText("Lead copy")).toBeInTheDocument();
    expect(screen.getByText("Trail copy")).toBeInTheDocument();
  });

  it("applies the id when provided", () => {
    render(<SectionStatement lead="L" trail="T" id="section-id" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute(
      "id",
      "section-id"
    );
  });
});

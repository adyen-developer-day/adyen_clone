import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders the lead and trail text", () => {
    render(<SectionStatement lead="Lead copy." trail="Trail copy." />);
    expect(screen.getByText("Lead copy.")).toBeInTheDocument();
    expect(screen.getByText("Trail copy.")).toBeInTheDocument();
  });

  it("applies the optional id to the heading", () => {
    render(<SectionStatement lead="L" trail="T" id="my-anchor" />);
    expect(screen.getByRole("heading")).toHaveAttribute("id", "my-anchor");
  });
});

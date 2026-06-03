import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders the lead and trail text", () => {
    render(<SectionStatement lead="Lead copy." trail="Trail copy." />);
    expect(screen.getByText("Lead copy.")).toBeInTheDocument();
    expect(screen.getByText("Trail copy.")).toBeInTheDocument();
  });

  it("applies the id to the heading when provided", () => {
    render(<SectionStatement lead="Lead" trail="Trail" id="anchor" />);
    expect(screen.getByRole("heading")).toHaveAttribute("id", "anchor");
  });

  it("omits the id attribute when none is provided", () => {
    render(<SectionStatement lead="Lead" trail="Trail" />);
    expect(screen.getByRole("heading")).not.toHaveAttribute("id");
  });
});

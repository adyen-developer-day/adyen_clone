import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  const props = {
    lead: "Test lead sentence.",
    trail: "Test trail continuation.",
    id: "test-section",
  };

  it("renders without crashing", () => {
    render(<SectionStatement {...props} />);
  });

  it("renders the lead text", () => {
    render(<SectionStatement {...props} />);
    expect(screen.getByText(props.lead)).toBeInTheDocument();
  });

  it("renders the trail text", () => {
    render(<SectionStatement {...props} />);
    expect(screen.getByText(props.trail)).toBeInTheDocument();
  });

  it("applies the id to the heading element", () => {
    render(<SectionStatement {...props} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveAttribute("id", props.id);
  });

  it("renders without an id when none is provided", () => {
    render(<SectionStatement lead={props.lead} trail={props.trail} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).not.toHaveAttribute("id");
  });
});

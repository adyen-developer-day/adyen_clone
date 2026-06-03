import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders the lead and trail text passed as props", () => {
    render(<SectionStatement lead="Lead text" trail="Trail text" />);
    expect(screen.getByText("Lead text")).toBeInTheDocument();
    expect(screen.getByText("Trail text")).toBeInTheDocument();
  });

  it("sets the id attribute when provided", () => {
    const { container } = render(
      <SectionStatement lead="L" trail="T" id="test-id" />,
    );
    expect(container.querySelector("#test-id")).toBeInTheDocument();
  });
});

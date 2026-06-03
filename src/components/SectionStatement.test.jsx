import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders lead and trail text", () => {
    render(<SectionStatement lead="Lead text" trail="Trail text" />);
    expect(screen.getByText("Lead text")).toBeInTheDocument();
    expect(screen.getByText("Trail text")).toBeInTheDocument();
  });

  it("applies an optional id attribute", () => {
    const { container } = render(
      <SectionStatement lead="L" trail="T" id="test-id" />,
    );
    expect(container.querySelector("#test-id")).toBeInTheDocument();
  });
});

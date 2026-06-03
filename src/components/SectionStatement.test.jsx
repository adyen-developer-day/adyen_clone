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
    const { container } = render(
      <SectionStatement lead="A" trail="B" id="my-id" />
    );
    expect(container.querySelector("h2.statement")).toHaveAttribute(
      "id",
      "my-id"
    );
  });
});

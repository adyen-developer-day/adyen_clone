import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders lead and trail text", () => {
    render(<SectionStatement lead="Lead text" trail="Trail text" />);
    expect(screen.getByText("Lead text")).toBeInTheDocument();
    expect(screen.getByText("Trail text")).toBeInTheDocument();
  });

  it("renders an h2 heading", () => {
    render(<SectionStatement lead="Lead" trail="Trail" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("applies the id prop", () => {
    const { container } = render(
      <SectionStatement lead="Lead" trail="Trail" id="test-id" />
    );
    expect(container.querySelector("#test-id")).toBeInTheDocument();
  });
});

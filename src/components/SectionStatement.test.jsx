import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  it("renders the lead and trail copy", () => {
    render(<SectionStatement lead="Lead copy" trail="Trail copy" />);
    expect(screen.getByText("Lead copy")).toBeInTheDocument();
    expect(screen.getByText("Trail copy")).toBeInTheDocument();
  });

  it("applies the provided id to the heading", () => {
    render(<SectionStatement lead="Lead" trail="Trail" id="my-id" />);
    expect(screen.getByRole("heading")).toHaveAttribute("id", "my-id");
  });
});

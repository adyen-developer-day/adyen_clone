import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  const lead = "Lead sentence.";
  const trail = "Trail sentence.";

  it("renders lead and trail text", () => {
    render(<SectionStatement lead={lead} trail={trail} />);
    expect(screen.getByText(lead)).toBeInTheDocument();
    expect(screen.getByText(trail)).toBeInTheDocument();
  });

  it("renders as an h2 heading", () => {
    render(<SectionStatement lead={lead} trail={trail} />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("applies the provided id attribute", () => {
    const { container } = render(
      <SectionStatement lead={lead} trail={trail} id="test-id" />,
    );
    expect(container.querySelector("#test-id")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionStatement from "./SectionStatement.jsx";

describe("SectionStatement", () => {
  const lead = "Lead text";
  const trail = "Trail text";

  it("renders the lead and trail text", () => {
    render(<SectionStatement lead={lead} trail={trail} />);
    expect(screen.getByText(lead)).toBeInTheDocument();
    expect(screen.getByText(trail)).toBeInTheDocument();
  });

  it("renders as a heading element", () => {
    render(<SectionStatement lead={lead} trail={trail} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("applies the id when provided", () => {
    const { container } = render(
      <SectionStatement lead={lead} trail={trail} id="test-id" />,
    );
    expect(container.querySelector("#test-id")).not.toBeNull();
  });

  it("has no images without alt text", () => {
    render(<SectionStatement lead={lead} trail={trail} />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

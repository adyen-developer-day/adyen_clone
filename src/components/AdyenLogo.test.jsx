import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an SVG with an accessible img role and label", () => {
    render(<AdyenLogo />);
    const logo = screen.getByRole("img", { name: /adyen/i });
    expect(logo).toBeInTheDocument();
  });

  it("includes a title element for accessibility", () => {
    render(<AdyenLogo />);
    expect(screen.getByTitle("Adyen")).toBeInTheDocument();
  });

  it("scales width proportionally to the height prop", () => {
    const { container } = render(<AdyenLogo height={52} />);
    const svg = container.querySelector("svg");
    const expectedWidth = (80 / 26) * 52;
    expect(Number(svg.getAttribute("width"))).toBeCloseTo(expectedWidth, 0);
  });
});

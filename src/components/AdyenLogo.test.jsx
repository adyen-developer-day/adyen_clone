import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an SVG with role=img and aria-label", () => {
    render(<AdyenLogo />);
    const logo = screen.getByRole("img", { name: "Adyen" });
    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe("svg");
  });

  it("contains a <title> for accessibility", () => {
    render(<AdyenLogo />);
    expect(screen.getByTitle("Adyen")).toBeInTheDocument();
  });

  it("applies custom className and height", () => {
    const { container } = render(
      <AdyenLogo className="my-logo" height={40} />
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("my-logo");
    expect(svg).toHaveAttribute("height", "40");
  });

  it("scales width proportionally to height", () => {
    const { container } = render(<AdyenLogo height={26} />);
    const svg = container.querySelector("svg");
    const expectedWidth = (80 / 26) * 26;
    expect(Number(svg.getAttribute("width"))).toBeCloseTo(expectedWidth);
  });
});

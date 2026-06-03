import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an SVG with the Adyen aria-label", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("renders a title element for accessibility", () => {
    render(<AdyenLogo />);
    expect(screen.getByTitle("Adyen")).toBeInTheDocument();
  });

  it("accepts a custom height and scales width proportionally", () => {
    render(<AdyenLogo height={52} />);
    const svg = screen.getByRole("img", { name: "Adyen" });
    expect(svg).toHaveAttribute("height", "52");
    const expectedWidth = (80 / 26) * 52;
    expect(Number(svg.getAttribute("width"))).toBeCloseTo(expectedWidth, 0);
  });

  it("applies a custom className", () => {
    render(<AdyenLogo className="custom-class" />);
    const svg = screen.getByRole("img", { name: "Adyen" });
    expect(svg).toHaveClass("custom-class");
  });
});

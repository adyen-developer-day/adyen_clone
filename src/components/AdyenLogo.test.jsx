import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an SVG with role img and accessible label", () => {
    render(<AdyenLogo />);
    const svg = screen.getByRole("img", { name: /adyen/i });
    expect(svg).toBeInTheDocument();
  });

  it("scales width proportionally to height", () => {
    const { container } = render(<AdyenLogo height={52} />);
    const svg = container.querySelector("svg");
    const expectedWidth = (80 / 26) * 52;
    expect(Number(svg.getAttribute("width"))).toBeCloseTo(expectedWidth);
  });

  it("applies a custom className", () => {
    const { container } = render(<AdyenLogo className="my-logo" />);
    expect(container.querySelector("svg")).toHaveClass("my-logo");
  });
});

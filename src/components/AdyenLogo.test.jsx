import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("exposes an accessible 'Adyen' name", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("scales width proportionally to the height prop", () => {
    // Avoid string-equality on a derived float — compare numerically so the
    // test isn't load-bearing on stringification of (80/26) * height.
    const height = 40;
    const { container } = render(<AdyenLogo height={height} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", String(height));
    expect(Number(svg.getAttribute("width"))).toBeCloseTo((80 / 26) * height, 6);
  });
});

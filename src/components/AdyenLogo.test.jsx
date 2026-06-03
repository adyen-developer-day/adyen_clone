import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an SVG with an accessible label", () => {
    render(<AdyenLogo />);
    expect(screen.getByLabelText("Adyen")).toBeInTheDocument();
  });

  it("renders with a custom height and proportional width", () => {
    const { container } = render(<AdyenLogo height={52} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 52));
  });
});

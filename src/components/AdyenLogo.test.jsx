import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible Adyen wordmark", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("derives width from the default height and applies className", () => {
    const { container } = render(<AdyenLogo className="custom-logo" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("custom-logo");
    expect(svg).toHaveAttribute("height", "26");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 26));
  });

  it("scales width proportionally for a custom height", () => {
    const { container } = render(<AdyenLogo height={52} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 52));
  });
});

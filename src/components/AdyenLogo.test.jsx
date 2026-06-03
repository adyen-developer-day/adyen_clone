import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible svg with the Adyen label", () => {
    render(<AdyenLogo />);
    const logo = screen.getByRole("img", { name: /adyen/i });
    expect(logo).toBeInTheDocument();
  });

  it("defaults to height 26 and a proportional width", () => {
    const { container } = render(<AdyenLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "26");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 26));
  });

  it("scales width proportionally from a custom height", () => {
    const { container } = render(<AdyenLogo height={52} className="my-logo" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 52));
    expect(svg).toHaveClass("my-logo");
  });
});

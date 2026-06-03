import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible wordmark", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("scales width proportionally to the given height", () => {
    render(<AdyenLogo height={52} className="custom" />);
    const svg = screen.getByRole("img", { name: "Adyen" });
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 52));
    expect(svg).toHaveClass("custom");
  });
});

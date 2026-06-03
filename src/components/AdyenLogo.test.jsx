import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("exposes an accessible 'Adyen' name", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("uses the default height and a proportional width", () => {
    render(<AdyenLogo />);
    const svg = screen.getByRole("img", { name: "Adyen" });
    expect(svg).toHaveAttribute("height", "26");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 26));
  });

  it("scales width proportionally to a custom height", () => {
    render(<AdyenLogo height={52} className="brand" />);
    const svg = screen.getByRole("img", { name: "Adyen" });
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 52));
    expect(svg).toHaveClass("brand");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible image labelled Adyen", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("scales its width proportionally to the height prop", () => {
    const { container } = render(<AdyenLogo height={26} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "26");
    expect(svg).toHaveAttribute("width", "80");
  });
});

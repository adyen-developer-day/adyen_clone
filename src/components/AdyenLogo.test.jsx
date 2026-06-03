import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible wordmark image named 'Adyen'", () => {
    render(<AdyenLogo />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAccessibleName("Adyen");
  });

  it("scales width proportionally to the height prop", () => {
    const { container } = render(<AdyenLogo height={52} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", String((80 / 26) * 52));
  });
});

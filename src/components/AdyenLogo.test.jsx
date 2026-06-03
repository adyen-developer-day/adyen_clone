import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible Adyen wordmark", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: /adyen/i })).toBeInTheDocument();
  });

  it("derives width from the provided height while keeping the aspect ratio", () => {
    const { container } = render(<AdyenLogo height={26} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "26");
    expect(svg).toHaveAttribute("width", "80");
  });

  it("applies the provided className", () => {
    const { container } = render(<AdyenLogo className="navbar__logo" />);
    expect(container.querySelector("svg")).toHaveClass("navbar__logo");
  });
});

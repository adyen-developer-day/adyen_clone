import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders without crashing", () => {
    render(<AdyenLogo />);
  });

  it("renders an SVG with role img and accessible label", () => {
    render(<AdyenLogo />);
    const svg = screen.getByRole("img", { name: /adyen/i });
    expect(svg).toBeInTheDocument();
  });

  it("contains a title element for accessibility", () => {
    render(<AdyenLogo />);
    expect(screen.getByTitle("Adyen")).toBeInTheDocument();
  });

  it("uses the default height when none is provided", () => {
    render(<AdyenLogo />);
    const svg = screen.getByRole("img", { name: /adyen/i });
    expect(svg).toHaveAttribute("height", "26");
  });

  it("accepts a custom height and scales width proportionally", () => {
    render(<AdyenLogo height={52} />);
    const svg = screen.getByRole("img", { name: /adyen/i });
    expect(svg).toHaveAttribute("height", "52");
    expect(svg).toHaveAttribute("width", "160");
  });
});

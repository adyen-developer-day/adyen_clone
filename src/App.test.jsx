import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the full page structure", () => {
    const { container } = render(<App />);
    expect(container.querySelector(".page")).toBeInTheDocument();
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("renders the Navbar with contact sales CTA", () => {
    render(<App />);
    expect(screen.getByText(/contact sales/i)).toBeInTheDocument();
  });

  it("renders the Hero section", () => {
    render(<App />);
    expect(screen.getByText("Fintech you can bank on")).toBeInTheDocument();
  });

  it("renders the Footer with copyright", () => {
    render(<App />);
    expect(screen.getByText("© 2026 Adyen")).toBeInTheDocument();
  });

  it("all images have alt attributes", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("all SVGs with role=img have aria-label", () => {
    const { container } = render(<App />);
    const svgImgs = container.querySelectorAll('svg[role="img"]');
    svgImgs.forEach((svg) => {
      expect(svg).toHaveAttribute("aria-label");
    });
  });
});

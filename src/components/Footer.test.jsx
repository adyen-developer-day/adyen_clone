import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every column heading", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(screen.getByText(col.heading)).toBeInTheDocument();
    });
  });

  it("renders every column link", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  });

  it("renders every legal link", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders the newsletter subscribe link", () => {
    render(<Footer />);
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument();
  });

  it("renders the copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("has no images without alt text", () => {
    const { container } = render(<Footer />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

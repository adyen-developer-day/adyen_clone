import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every column heading and its links from content", () => {
    render(<Footer />);
    for (const col of footerColumns) {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
      for (const link of col.links) {
        expect(screen.getAllByText(link).length).toBeGreaterThan(0);
      }
    }
  });

  it("renders the legal links and copyright", () => {
    render(<Footer />);
    for (const item of footerLegal) {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    }
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("has no placeholder dead-end links", () => {
    const { container } = render(<Footer />);
    const links = [...container.querySelectorAll("a")];
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      const href = link.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).not.toBe("#");
    }
  });
});

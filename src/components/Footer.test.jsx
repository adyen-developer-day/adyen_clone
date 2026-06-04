import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every column heading", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { level: 4, name: col.heading })
      ).toBeInTheDocument();
    });
  });

  it("renders every column link with its real href", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
          "href",
          link.href
        );
      });
    });
  });

  it("renders the legal links with their hrefs", () => {
    render(<Footer />);
    footerLegal.forEach((link) => {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href
      );
    });
  });

  it("contains no placeholder '#' links", () => {
    render(<Footer />);
    screen.getAllByRole("link").forEach((link) => {
      expect(link.getAttribute("href")).not.toBe("#");
    });
  });
});

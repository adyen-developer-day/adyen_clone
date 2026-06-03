import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

const labelOf = (entry) => (typeof entry === "string" ? entry : entry.label);

describe("Footer", () => {
  it("renders every column heading and link label", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
      col.links.forEach((link) => {
        expect(
          screen.getByRole("link", { name: labelOf(link) })
        ).toBeInTheDocument();
      });
    });
  });

  it("renders the legal links and the newsletter cta", () => {
    render(<Footer />);
    footerLegal.forEach((entry) => {
      expect(
        screen.getByRole("link", { name: labelOf(entry) })
      ).toBeInTheDocument();
    });
    expect(
      screen.getByRole("link", { name: /subscribe to our newsletter/i })
    ).toBeInTheDocument();
  });
});

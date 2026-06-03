import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

const labelOf = (entry) => (typeof entry === "string" ? entry : entry.label);

describe("Footer", () => {
  it("renders the brand logo and tagline", () => {
    render(<Footer />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
    expect(
      screen.getByText(/One platform for payments, data, and financial products/i)
    ).toBeInTheDocument();
  });

  it("renders every footer column heading and link from content.js", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
      col.links.forEach((link) => {
        expect(screen.getByText(labelOf(link))).toBeInTheDocument();
      });
    });
  });

  it("renders every legal link from content.js", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByText(labelOf(item))).toBeInTheDocument();
    });
  });
});

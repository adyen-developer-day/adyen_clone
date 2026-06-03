import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders the Adyen brand logo", () => {
    render(<Footer />);
    expect(screen.getByRole("img", { name: /adyen/i })).toBeInTheDocument();
  });

  it("renders every footer column heading and its links from content", () => {
    render(<Footer />);
    for (const col of footerColumns) {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
      for (const link of col.links) {
        expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
      }
    }
  });

  it("renders the legal links from content", () => {
    render(<Footer />);
    for (const item of footerLegal) {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    }
  });
});

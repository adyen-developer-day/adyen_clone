import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every footer column heading and its links", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
      col.links.forEach((link) => {
        expect(
          screen.getAllByRole("link", { name: link }).length
        ).toBeGreaterThan(0);
      });
    });
  });

  it("renders the legal links, copyright and disclaimer", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    });
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
    expect(screen.getByText(/not affiliated with adyen/i)).toBeInTheDocument();
  });
});

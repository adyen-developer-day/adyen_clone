import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders the brand logo and newsletter CTA", () => {
    render(<Footer />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /subscribe to our newsletter/i })
    ).toBeInTheDocument();
  });

  it("renders every footer column heading and its links", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { level: 4, name: col.heading })
      ).toBeInTheDocument();
      col.links.forEach((link) => {
        expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
      });
    });
  });

  it("renders the legal links and copyright", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    });
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("renders the workshop disclaimer", () => {
    render(<Footer />);
    expect(screen.getByText(/workshop replica/i)).toBeInTheDocument();
  });
});

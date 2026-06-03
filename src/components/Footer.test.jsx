import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders each column heading and link label from content", () => {
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

  it("renders each legal item from content", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(
        screen.getByRole("link", { name: item })
      ).toBeInTheDocument();
    });
  });

  it("renders the Adyen wordmark with a non-empty accessible name", () => {
    render(<Footer />);
    const logos = screen.getAllByRole("img");
    expect(logos.length).toBeGreaterThan(0);
    logos.forEach((logo) => {
      expect(logo).toHaveAccessibleName(/.+/);
    });
  });
});

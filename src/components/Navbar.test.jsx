import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar.jsx";
import { navLinks } from "../data/content.js";

describe("Navbar", () => {
  it("renders the contact sales call to action", () => {
    render(<Navbar />);
    expect(screen.getByText(/contact sales/i)).toBeInTheDocument();
  });

  it("renders the Adyen brand logo", () => {
    render(<Navbar />);
    expect(screen.getByRole("img", { name: /adyen/i })).toBeInTheDocument();
  });

  it("renders a link for every nav entry in content", () => {
    render(<Navbar />);
    for (const link of navLinks) {
      const anchor = screen.getByRole("link", {
        name: new RegExp(link.label, "i"),
      });
      expect(anchor).toHaveAttribute("href", link.href);
    }
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar.jsx";
import { navLinks } from "../data/content.js";

describe("Navbar", () => {
  it("renders the contact sales call to action", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("link", { name: /contact sales/i })
    ).toHaveAttribute("href", "#contact");
  });

  it("renders the brand link to the top of the page", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /adyen home/i })).toHaveAttribute(
      "href",
      "#top"
    );
  });

  it("renders every nav link with its href", () => {
    render(<Navbar />);
    navLinks.forEach((link) => {
      expect(
        screen.getByRole("link", { name: new RegExp(link.label, "i") })
      ).toHaveAttribute("href", link.href);
    });
  });
});

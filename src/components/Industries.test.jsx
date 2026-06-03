import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the section statement lead and trail", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders all industry items with title and body from content data", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders each industry as an article element", () => {
    render(<Industries />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(industries.items.length);
  });

  it("renders an image for each industry item", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(industries.items.length);
  });

  it("provides a 'See more' link for each industry", () => {
    render(<Industries />);
    const links = screen.getAllByRole("link", { name: /see more/i });
    expect(links).toHaveLength(industries.items.length);
  });
});

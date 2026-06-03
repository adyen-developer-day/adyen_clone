import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the statement and every industry card", () => {
    const { container } = render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
    expect(container.querySelectorAll(".industry")).toHaveLength(
      industries.items.length
    );
  });

  it("resolves an icon url for each industry image", () => {
    const { container } = render(<Industries />);
    const imgs = container.querySelectorAll("img.industry__icon");
    expect(imgs).toHaveLength(industries.items.length);
    imgs.forEach((img) => {
      expect(img.getAttribute("src")).toBeTruthy();
    });
  });
});

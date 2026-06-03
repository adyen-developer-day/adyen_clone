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

  it("renders one industry card per item with title and body", () => {
    const { container } = render(<Industries />);
    expect(container.querySelectorAll(".industry")).toHaveLength(
      industries.items.length
    );
    industries.items.forEach((item) => {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("resolves a bundled icon url for each card image", () => {
    const { container } = render(<Industries />);
    const icons = container.querySelectorAll("img.industry__icon");
    expect(icons).toHaveLength(industries.items.length);
    icons.forEach((icon) => expect(icon.getAttribute("src")).toBeTruthy());
  });
});

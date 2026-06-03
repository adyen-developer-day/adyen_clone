import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders the section statement lead and trail", () => {
    render(<ValueProps />);
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(valueProps.trail)).toBeInTheDocument();
  });

  it("renders every value proposition title and body", () => {
    render(<ValueProps />);
    valueProps.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders zero-padded indices for each item", () => {
    render(<ValueProps />);
    valueProps.items.forEach((_, i) => {
      expect(
        screen.getByText(String(i + 1).padStart(2, "0")),
      ).toBeInTheDocument();
    });
  });

  it("renders items in a list", () => {
    render(<ValueProps />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(valueProps.items.length);
  });

  it("has no images without alt text", () => {
    render(<ValueProps />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

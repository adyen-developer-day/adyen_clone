import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the lead statement", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
  });

  it("renders the trail statement", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders every card eyebrow, title, body, and cta", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(screen.getByText(card.cta)).toBeInTheDocument();
    });
  });

  it("has no images without alt text", () => {
    const { container } = render(<MoneyMovement />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

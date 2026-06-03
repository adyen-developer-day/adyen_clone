import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders without crashing", () => {
    render(<MoneyMovement />);
  });

  it("renders the lead and trail from content.js", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
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

  it("renders card CTAs as links", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      const link = screen.getByText(card.cta);
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "#products");
    });
  });
});

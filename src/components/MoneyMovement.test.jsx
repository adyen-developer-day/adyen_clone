import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the section statement lead and trail", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders all cards with eyebrow, title, body, and CTA from content data", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: new RegExp(card.cta) })).toBeInTheDocument();
    });
  });

  it("renders each card as an article element", () => {
    render(<MoneyMovement />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(moneyMovement.cards.length);
  });

  it("applies the correct theme class to each card", () => {
    const { container } = render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      const el = container.querySelector(`.bigcard--${card.theme}`);
      expect(el).toBeInTheDocument();
    });
  });
});

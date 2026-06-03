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

  it("renders every card with eyebrow, title, body and CTA", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { level: 3, name: card.title })
      ).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      const cta = screen.getByRole("link", { name: card.cta });
      expect(cta).toHaveAttribute("href", "#products");
    });
  });

  it("applies the per-card theme modifier class", () => {
    const { container } = render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(
        container.querySelector(`.bigcard--${card.theme}`)
      ).toBeInTheDocument();
    });
  });
});

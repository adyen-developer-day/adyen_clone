import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the statement and each card with its eyebrow, title, and cta", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: card.title })
      ).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
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

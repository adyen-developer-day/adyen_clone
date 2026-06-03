import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the section statement", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders all cards with eyebrow, title, body, and CTA", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(screen.getByText(card.cta)).toBeInTheDocument();
    });
  });

  it("applies theme classes to cards", () => {
    const { container } = render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(
        container.querySelector(`.bigcard--${card.theme}`),
      ).toBeInTheDocument();
    });
  });
});

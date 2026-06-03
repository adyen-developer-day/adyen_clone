import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the lead and trail statement", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders every card eyebrow, title, body, and cta from content data", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(screen.getByText(card.cta)).toBeInTheDocument();
    });
  });
});

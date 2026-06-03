import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DoomHud from "./DoomHud.jsx";

describe("DoomHud", () => {
  it("renders the status-bar landmark", () => {
    render(<DoomHud />);
    expect(
      screen.getByRole("complementary", { name: /doom status bar/i }),
    ).toBeInTheDocument();
  });

  it("shows the classic HUD captions", () => {
    render(<DoomHud />);
    expect(screen.getByText("HEALTH")).toBeInTheDocument();
    expect(screen.getByText("ARMOR")).toBeInTheDocument();
    expect(screen.getByText("ARMS")).toBeInTheDocument();
  });

  it("renders the marine face sprite", () => {
    render(<DoomHud />);
    expect(screen.getByRole("img", { name: /marine/i })).toBeInTheDocument();
  });
});

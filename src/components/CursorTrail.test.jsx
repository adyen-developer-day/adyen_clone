import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import CursorTrail from "./CursorTrail.jsx";

describe("CursorTrail", () => {
  it("renders the trail layer", () => {
    const { container } = render(<CursorTrail />);
    expect(container.querySelector(".bullet-trail")).toBeInTheDocument();
  });

  it("spawns a bullet tracer on mouse move", () => {
    render(<CursorTrail />);
    fireEvent.mouseMove(window, { clientX: 120, clientY: 80 });
    expect(
      document.querySelectorAll(".bullet-trail__dot").length,
    ).toBeGreaterThan(0);
  });
});

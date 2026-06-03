import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PongGame from "./PongGame.jsx";

describe("PongGame", () => {
  it("renders a canvas element", () => {
    const { container } = render(<PongGame />);
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdyenLogo from "./AdyenLogo.jsx";

describe("AdyenLogo", () => {
  it("renders an accessible image labelled Adyen", () => {
    render(<AdyenLogo />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });

  it("derives width from height keeping the aspect ratio", () => {
    render(<AdyenLogo height={26} />);
    const svg = screen.getByRole("img", { name: "Adyen" });
    expect(svg).toHaveAttribute("height", "26");
    expect(svg).toHaveAttribute("width", "80");
  });

  it("forwards the className", () => {
    render(<AdyenLogo className="footer__logo" />);
    expect(screen.getByRole("img", { name: "Adyen" })).toHaveClass(
      "footer__logo"
    );
  });
});

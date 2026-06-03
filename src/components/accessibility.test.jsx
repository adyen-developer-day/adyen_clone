import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import ValueProps from "./ValueProps.jsx";
import MoneyMovement from "./MoneyMovement.jsx";
import Industries from "./Industries.jsx";
import Stats from "./Stats.jsx";
import CaseStudies from "./CaseStudies.jsx";
import FinalCTA from "./FinalCTA.jsx";
import Footer from "./Footer.jsx";

/**
 * Accessibility: every rendered <img> must have non-empty alt text.
 * This also validates IMPROVEMENTS.md task #1 (alt text for images).
 */
describe("Accessibility — all images have alt text", () => {
  const components = [
    { name: "Hero", Component: Hero },
    { name: "ValueProps", Component: ValueProps },
    { name: "MoneyMovement", Component: MoneyMovement },
    { name: "Industries", Component: Industries },
    { name: "Stats", Component: Stats },
    { name: "CaseStudies", Component: CaseStudies },
    { name: "FinalCTA", Component: FinalCTA },
    { name: "Footer", Component: Footer },
  ];

  components.forEach(({ name, Component }) => {
    it(`${name} — every <img> has non-empty alt text`, () => {
      const { container } = render(<Component />);
      const images = container.querySelectorAll("img");
      images.forEach((img) => {
        expect(
          img.getAttribute("alt"),
          `<img src="${img.getAttribute("src")}"> in ${name} is missing alt text`
        ).toBeTruthy();
      });
    });
  });
});

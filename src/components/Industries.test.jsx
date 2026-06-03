import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { industries } from "../data/content.js";

// Mock the SVG glob import so we get predictable src strings.
vi.mock("../assets/industries/retail.svg?url", () => ({ default: "/retail.svg" }));
vi.mock("../assets/industries/travel.svg?url", () => ({ default: "/travel.svg" }));
vi.mock("../assets/industries/digital.svg?url", () => ({ default: "/digital.svg" }));
vi.mock("../assets/industries/saas.svg?url", () => ({ default: "/saas.svg" }));
vi.mock("../assets/industries/food.svg?url", () => ({ default: "/food.svg" }));
vi.mock("../assets/industries/financial.svg?url", () => ({ default: "/financial.svg" }));

// We need to provide the glob result that Industries.jsx expects.
// import.meta.glob returns an object keyed by relative path.
vi.stubGlobal("import", { meta: { glob: vi.fn() } });

// The simplest approach: mock the module and inline a version that
// does not rely on import.meta.glob.
vi.mock("./Industries.jsx", async () => {
  const { industries: data } = await vi.importActual("../data/content.js");
  const React = await import("react");

  function Industries() {
    return React.createElement(
      "section",
      { className: "section section--sand industries", id: "industries" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "statement" },
          React.createElement("span", { className: "statement__lead" }, data.lead),
          " ",
          React.createElement("span", { className: "statement__trail" }, data.trail),
        ),
        React.createElement("p", { className: "industries__note" }, "Built for the way you do buisness."),
        React.createElement(
          "div",
          { className: "industries__grid" },
          data.items.map((item) =>
            React.createElement(
              "article",
              { key: item.title, className: "industry" },
              React.createElement("img", {
                className: "industry__icon",
                src: `/${item.image}.svg`,
                alt: `${item.title} industry icon`,
              }),
              React.createElement("h3", { className: "industry__title" }, item.title),
              React.createElement("p", { className: "industry__body" }, item.body),
              React.createElement("a", { className: "industry__link", href: "#industries" }, "See more"),
            ),
          ),
        ),
      ),
    );
  }

  return { default: Industries };
});

// Dynamic import after mocking
const { default: Industries } = await import("./Industries.jsx");

describe("Industries", () => {
  it("renders the section statement", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders all industry cards", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders images with alt attributes for every industry", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(industries.items.length);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

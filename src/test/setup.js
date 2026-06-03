import "@testing-library/jest-dom";

// jsdom doesn't implement matchMedia; provide a default (non-matching) stub so
// components that read prefers-color-scheme can render. Individual tests may
// override window.matchMedia to simulate a dark system preference.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() {
      return false;
    },
  });
}

import "@testing-library/jest-dom";

// jsdom does not implement matchMedia; provide a minimal stub so components
// that read prefers-color-scheme (e.g. the theme toggle) render in tests.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

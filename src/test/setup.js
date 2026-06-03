import "@testing-library/jest-dom";

// jsdom doesn't implement matchMedia; provide a minimal stub so components
// that read the user's prefers-color-scheme can render under test.
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

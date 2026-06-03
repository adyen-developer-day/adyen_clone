import "@testing-library/jest-dom";

// jsdom doesn't implement matchMedia, which components use to read
// prefers-reduced-motion / prefers-color-scheme.
if (!window.matchMedia) {
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

// jsdom doesn't implement IntersectionObserver, used for scroll-reveal animations.
if (!window.IntersectionObserver) {
  class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  window.IntersectionObserver = IntersectionObserver;
  globalThis.IntersectionObserver = IntersectionObserver;
}

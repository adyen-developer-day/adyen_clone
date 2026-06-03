import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    coverage: {
      provider: "v8",
      all: true,
      include: ["src/components/**/*.jsx"],
      exclude: ["src/components/**/*.test.jsx"],
      reporter: ["text", "html"],
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
});

/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mf-technical-test/",
  test: {
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});

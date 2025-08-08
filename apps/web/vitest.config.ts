import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", setupFiles: "./vitest.setup.ts", include: ["**/*.test.ts?(x)"] },
  css: { postcss: {} },
  resolve: { alias: { "@": path.resolve(__dirname, "./") } },
});

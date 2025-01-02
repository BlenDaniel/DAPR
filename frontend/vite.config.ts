/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  test: {
    // Jest-like globals
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    include: ["**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "no-treeshake",
          transform(_, id) {
            if (id.includes("@mui/icons-material")) {
              return { moduleSideEffects: "no-treeshake" };
            }
            if (id.includes("@mui/material")) {
              return { moduleSideEffects: "no-treeshake" };
            }
          },
        },
      ],
    },
    commonjsOptions: {
      target: "es2018",
      ignoreTryCatch: false,
    },
  },
}));
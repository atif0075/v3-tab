import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es", "umd"], //["es", "umd", "cjs"
      name: "v3-tab",
      fileName: (format) => `v3-tab.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});

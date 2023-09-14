import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
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
  server: {
    port: 3000,
  },
});

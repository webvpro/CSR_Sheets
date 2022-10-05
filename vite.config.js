import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import path from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  optimizeDeps: {
    exclude: ["vue-router"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  server: {
    port: 3033,
    open: true,
  },
  json: {
    namedExports: true,
    stringify: true,
  },
  build: {
    minify: false,
    cssCodeSplit: false,
  },
});

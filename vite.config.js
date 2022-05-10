import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
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
});

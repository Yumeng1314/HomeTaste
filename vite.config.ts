import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",         // Vercel 必须这样
  build: {
    outDir: "dist",  // 你原来就是 dist，保留
  },
});

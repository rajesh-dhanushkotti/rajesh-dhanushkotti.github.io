import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the built site work from any folder or host
// (GitHub Pages, Netlify, a university web space, etc.).
export default defineConfig({
  plugins: [react()],
  base: "./",
});

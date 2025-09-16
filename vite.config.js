import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This 'base' property is essential for GitHub Pages deployment.
  // It must match your repository name exactly.
  base: "/codespaces-react/", 
  plugins: [react()],
  build: {
    // This tells Vite to create a 'docs' folder, which GitHub Pages can serve.
    outDir: 'docs' 
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

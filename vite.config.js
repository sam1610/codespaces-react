import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This 'base' property is essential for GitHub Pages deployment.
  // It needs to start and end with a slash.
  base: "/codespaces-react/", 
  plugins: [react()],
  // THE FIX: Add this 'build' section to change the output directory.
  build: {
    outDir: 'docs' // This tells Vite to create a 'docs' folder instead of 'dist'.
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

    


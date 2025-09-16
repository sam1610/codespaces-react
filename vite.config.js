import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This 'base' property is essential for GitHub Pages deployment.
  // It needs to start and end with a slash.
  base: "/codespaces-react/", 
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'resolve' section is added for compatibility with AWS Amplify
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  // This 'define' section is also added for AWS Amplify
  define: {
    'global': {},
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

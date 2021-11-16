import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false,
    },
    proxy: {
      "/api/v1": "https://flicker.woolensheep.top",
    },
  },
});

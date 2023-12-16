import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/ui": path.resolve(__dirname, "./src/components/ui"),
      "@/svg": path.resolve(__dirname, "./src/components/svg"),
      "@/custom": path.resolve(__dirname, "./src/components/custom"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/containers": path.resolve(__dirname, "./src/containers"),
      "@/features": path.resolve(__dirname, "./src/features"),
      "@/hooks": path.resolve(__dirname, "./src/utils/hooks"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})

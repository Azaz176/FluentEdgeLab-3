import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV !== 'production' && !process.argv.includes('build');

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [
    ...(isDev ? [] : mochaPlugins(process.env as any)), 
    react()
  ],
  server: {
    allowedHosts: true,
    port: 5173,
    strictPort: false,
  },
  build: {
    chunkSizeWarningLimit: 5000,
    copyPublicDir: true,
  },
  publicDir: 'public',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});


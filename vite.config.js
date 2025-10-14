import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Serve assets from root
  publicDir: 'public', // Static assets in public/
  build: {
    outDir: 'dist', // Build output directory
    assetsDir: 'assets', // Bundled assets go to dist/assets/
    sourcemap: true, // Enable source maps for debugging
  },
  server: {
    fs: {
      allow: [
        path.resolve(__dirname), // Allow project root for index.html
        path.resolve(__dirname, 'src'), // Allow src/ for assets
        path.resolve(__dirname, 'public'), // Allow public/
        path.resolve(__dirname, 'node_modules/vite/dist/client'), // Vite client
      ],
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), // Alias for src/assets/
    },
  },
});
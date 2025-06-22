import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Remove or comment out the base path for custom domain
  // base: '/NUmantra/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
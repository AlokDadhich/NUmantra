import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  
  // Path resolution
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for production debugging
    sourcemap: false,
    // Optimize bundle size
    minify: 'terser',
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  // Development server settings
  server: {
    port: 3000,
    open: true, // Auto-open browser
    host: true, // Allow external connections
  },
  
  // Preview server settings (for production build testing)
  preview: {
    port: 4173,
    open: true,
  },
});
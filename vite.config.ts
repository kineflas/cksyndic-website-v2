import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { asyncCssPlugin } from './vite-plugin-async-css';

export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        ecma: 2015,
      },
    },
  },
  server: {
    open: true,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { asyncCssPlugin } from './vite-plugin-async-css';
import { preloadPlugin } from './vite-plugin-preload';
import { inlineCssPlugin } from './vite-plugin-inline-css';

export default defineConfig({
  plugins: [react(), asyncCssPlugin(), preloadPlugin(), inlineCssPlugin()],
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
    cssCodeSplit: false,
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
    reportCompressedSize: false,
  },
  server: {
    open: true,
  },
});

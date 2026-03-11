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
          'react-core': ['react', 'react/jsx-runtime'],
          'react-dom': ['react-dom'],
          'react-router': ['react-router-dom'],
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
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        dead_code: true,
        unused: true,
      },
      format: {
        ecma: 2015,
        comments: false,
      },
      mangle: {
        safari10: true,
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    open: true,
  },
});

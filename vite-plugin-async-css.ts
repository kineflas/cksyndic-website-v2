import type { Plugin } from 'vite';

export function asyncCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const transformed = html.replace(
          /<link\s+rel="stylesheet"[^>]+href="([^"]+\.css)"[^>]*>/g,
          (match, cssPath) => {
            return `<link rel="preload" href="${cssPath}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${cssPath}"></noscript>`;
          }
        );
        return transformed;
      },
    },
  };
}

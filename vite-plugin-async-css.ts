import type { Plugin } from 'vite';

export function asyncCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
          `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="$1"></noscript>`
        );
      },
    },
  };
}

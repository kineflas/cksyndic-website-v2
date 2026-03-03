import type { Plugin } from 'vite';

export function asyncCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html;
      },
    },
  };
}

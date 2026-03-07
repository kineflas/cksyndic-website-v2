import type { Plugin } from 'vite';

export function preloadPlugin(): Plugin {
  return {
    name: 'vite-plugin-preload',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;

      const preloadLinks: string[] = [];

      for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
        if (chunk.type === 'chunk' && chunk.isEntry) {
          preloadLinks.push(
            `<link rel="modulepreload" href="/${fileName}" crossorigin>`
          );
        }
      }

      if (preloadLinks.length === 0) return html;

      return html.replace(
        '</title>',
        `</title>\n    ${preloadLinks.join('\n    ')}`
      );
    },
  };
}

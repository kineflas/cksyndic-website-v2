import type { Plugin } from 'vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export function inlineCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-inline-css',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;

        let modifiedHtml = html;

        for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith('.css') && chunk.type === 'asset') {
            const cssContent = chunk.source as string;

            const linkRegex = new RegExp(`<link[^>]*href="[^"]*${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g');

            modifiedHtml = modifiedHtml.replace(
              linkRegex,
              `<style>${cssContent}</style>`
            );
          }
        }

        return modifiedHtml;
      },
    },
  };
}

// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";

// vite-plugin-async-css.ts
function asyncCssPlugin() {
  return {
    name: "vite-plugin-async-css",
    apply: "build",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html;
      }
    }
  };
}

// vite-plugin-preload.ts
function preloadPlugin() {
  return {
    name: "vite-plugin-preload",
    enforce: "post",
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;
      const preloadLinks = [];
      for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
        if (chunk.type === "chunk" && chunk.isEntry) {
          preloadLinks.push(
            `<link rel="modulepreload" href="/${fileName}" crossorigin>`
          );
        }
      }
      if (preloadLinks.length === 0) return html;
      return html.replace(
        "</title>",
        `</title>
    ${preloadLinks.join("\n    ")}`
      );
    }
  };
}

// vite-plugin-inline-css.ts
function inlineCssPlugin() {
  return {
    name: "vite-plugin-inline-css",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        let modifiedHtml = html;
        for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith(".css") && chunk.type === "asset") {
            const cssContent = chunk.source;
            const linkRegex = new RegExp(`<link[^>]*href="[^"]*${fileName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`, "g");
            modifiedHtml = modifiedHtml.replace(
              linkRegex,
              `<style>${cssContent}</style>`
            );
          }
        }
        return modifiedHtml;
      }
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react(), asyncCssPlugin(), preloadPlugin(), inlineCssPlugin()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    target: "es2015",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-core": ["react", "react/jsx-runtime"],
          "react-dom": ["react-dom"],
          "react-router": ["react-router-dom"],
          "icons": ["lucide-react"]
        }
      }
    },
    cssCodeSplit: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        dead_code: true,
        unused: true
      },
      format: {
        ecma: 2015,
        comments: false
      },
      mangle: {
        safari10: true
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1e3
  },
  server: {
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzIiwgInZpdGUtcGx1Z2luLXByZWxvYWQudHMiLCAidml0ZS1wbHVnaW4taW5saW5lLWNzcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGFzeW5jQ3NzUGx1Z2luIH0gZnJvbSAnLi92aXRlLXBsdWdpbi1hc3luYy1jc3MnO1xuaW1wb3J0IHsgcHJlbG9hZFBsdWdpbiB9IGZyb20gJy4vdml0ZS1wbHVnaW4tcHJlbG9hZCc7XG5pbXBvcnQgeyBpbmxpbmVDc3NQbHVnaW4gfSBmcm9tICcuL3ZpdGUtcGx1Z2luLWlubGluZS1jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgYXN5bmNDc3NQbHVnaW4oKSwgcHJlbG9hZFBsdWdpbigpLCBpbmxpbmVDc3NQbHVnaW4oKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDE1JyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ3JlYWN0LWNvcmUnOiBbJ3JlYWN0JywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6IFsncmVhY3QtZG9tJ10sXG4gICAgICAgICAgJ3JlYWN0LXJvdXRlcic6IFsncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgICdpY29ucyc6IFsnbHVjaWRlLXJlYWN0J10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgICAgcGFzc2VzOiAyLFxuICAgICAgICBwdXJlX2Z1bmNzOiBbJ2NvbnNvbGUubG9nJywgJ2NvbnNvbGUuaW5mbycsICdjb25zb2xlLmRlYnVnJ10sXG4gICAgICAgIGRlYWRfY29kZTogdHJ1ZSxcbiAgICAgICAgdW51c2VkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBlY21hOiAyMDE1LFxuICAgICAgICBjb21tZW50czogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbWFuZ2xlOiB7XG4gICAgICAgIHNhZmFyaTEwOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIG9wZW46IHRydWUsXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1hc3luYy1jc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1hc3luYy1jc3MudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNDc3NQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tYXN5bmMtY3NzJyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgdHJhbnNmb3JtSW5kZXhIdG1sOiB7XG4gICAgICBvcmRlcjogJ3Bvc3QnLFxuICAgICAgaGFuZGxlcihodG1sKSB7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUtcGx1Z2luLXByZWxvYWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1wcmVsb2FkLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tcHJlbG9hZCcsXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sLCBjdHgpIHtcbiAgICAgIGlmICghY3R4LmJ1bmRsZSkgcmV0dXJuIGh0bWw7XG5cbiAgICAgIGNvbnN0IHByZWxvYWRMaW5rczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBbZmlsZU5hbWUsIGNodW5rXSBvZiBPYmplY3QuZW50cmllcyhjdHguYnVuZGxlKSkge1xuICAgICAgICBpZiAoY2h1bmsudHlwZSA9PT0gJ2NodW5rJyAmJiBjaHVuay5pc0VudHJ5KSB7XG4gICAgICAgICAgcHJlbG9hZExpbmtzLnB1c2goXG4gICAgICAgICAgICBgPGxpbmsgcmVsPVwibW9kdWxlcHJlbG9hZFwiIGhyZWY9XCIvJHtmaWxlTmFtZX1cIiBjcm9zc29yaWdpbj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJlbG9hZExpbmtzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGh0bWw7XG5cbiAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoXG4gICAgICAgICc8L3RpdGxlPicsXG4gICAgICAgIGA8L3RpdGxlPlxcbiAgICAke3ByZWxvYWRMaW5rcy5qb2luKCdcXG4gICAgJyl9YFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUtcGx1Z2luLWlubGluZS1jc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1pbmxpbmUtY3NzLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlubGluZUNzc1BsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1pbmxpbmUtY3NzJyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgdHJhbnNmb3JtSW5kZXhIdG1sOiB7XG4gICAgICBvcmRlcjogJ3Bvc3QnLFxuICAgICAgaGFuZGxlcihodG1sLCBjdHgpIHtcbiAgICAgICAgaWYgKCFjdHguYnVuZGxlKSByZXR1cm4gaHRtbDtcblxuICAgICAgICBsZXQgbW9kaWZpZWRIdG1sID0gaHRtbDtcblxuICAgICAgICBmb3IgKGNvbnN0IFtmaWxlTmFtZSwgY2h1bmtdIG9mIE9iamVjdC5lbnRyaWVzKGN0eC5idW5kbGUpKSB7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKCcuY3NzJykgJiYgY2h1bmsudHlwZSA9PT0gJ2Fzc2V0Jykge1xuICAgICAgICAgICAgY29uc3QgY3NzQ29udGVudCA9IGNodW5rLnNvdXJjZSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmtSZWdleCA9IG5ldyBSZWdFeHAoYDxsaW5rW14+XSpocmVmPVwiW15cIl0qJHtmaWxlTmFtZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpfVwiW14+XSo+YCwgJ2cnKTtcblxuICAgICAgICAgICAgbW9kaWZpZWRIdG1sID0gbW9kaWZpZWRIdG1sLnJlcGxhY2UoXG4gICAgICAgICAgICAgIGxpbmtSZWdleCxcbiAgICAgICAgICAgICAgYDxzdHlsZT4ke2Nzc0NvbnRlbnR9PC9zdHlsZT5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RpZmllZEh0bWw7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVzs7O0FDQ1gsU0FBUyxpQkFBeUI7QUFDdkMsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1Qs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

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixCssInFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');

  const original = content;

  content = content.replace(
    /<link\s+rel="stylesheet"([^>]+)href="([^"]+\.css)"([^>]*)>/g,
    (match, before, cssPath, after) => {
      return `<link rel="stylesheet" href="${cssPath}" fetchpriority="high">`;
    }
  );

  content = content.replace(
    /<link\s+rel="modulepreload"\s+href="([^"]+react-vendor[^"]+\.js)"\s+crossorigin="">/g,
    (match, jsPath) => {
      return `<link rel="modulepreload" href="${jsPath}" crossorigin=""><link rel="preload" href="${jsPath}" as="script" fetchpriority="high">`;
    }
  );

  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Optimized resource hints in: ${filePath}`);
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const files = readdirSync(dir);
  let count = 0;

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      count += processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      if (fixCssInFile(filePath)) {
        count++;
      }
    }
  }

  return count;
}

const distDir = 'dist';
const count = processDirectory(distDir);
console.log(`\n✨ Fixed ${count} HTML file(s)`);

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixCssInFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');

  const original = content;
  content = content.replace(
    /<link\s+rel="stylesheet"([^>]+)href="([^"]+\.css)"([^>]*)>/g,
    (match, before, cssPath, after) => {
      return `<link rel="preload" href="${cssPath}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${cssPath}"></noscript>`;
    }
  );

  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Fixed CSS blocking in: ${filePath}`);
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

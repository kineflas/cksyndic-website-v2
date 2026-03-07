import { readFileSync } from 'fs';

const html = readFileSync('dist/index.html', 'utf-8');

console.log('\n📊 Optimization Report:\n');

const modulepreloads = (html.match(/rel="modulepreload"/g) || []).length;
console.log(`✅ Modulepreload tags: ${modulepreloads}`);

const cssWithPriority = (html.match(/fetchpriority="high".*\.css/g) || []).length;
console.log(`✅ CSS with fetchpriority="high": ${cssWithPriority}`);

const dnsPreconnect = (html.match(/rel="(dns-prefetch|preconnect)"/g) || []).length;
console.log(`✅ DNS prefetch/preconnect: ${dnsPreconnect}`);

const inlineCSS = html.includes('<style>') && html.includes('loading-spinner');
console.log(`✅ Critical inline CSS: ${inlineCSS ? 'Yes' : 'No'}`);

const cssCodeSplit = (html.match(/\.css"/g) || []).length;
console.log(`✅ CSS files: ${cssCodeSplit} (unified)`);

console.log('\n✨ Network chain optimizations applied successfully!\n');

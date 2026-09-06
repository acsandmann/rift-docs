import fs from 'node:fs';
import path from 'node:path';

const [from, to, outputDir = 'dist'] = process.argv.slice(2);

if (!from || !to || !from.startsWith('/') || !to.startsWith('/')) {
  console.error('Usage: rewrite-built-base.mjs <old-base> <new-base> [output-directory]');
  process.exit(1);
}

const textExtensions = new Set(['.css', '.html', '.js', '.json', '.xml']);
const marker = '__RIFT_DOCS_CONFIGURED_BASE__';

function rewrite(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      rewrite(filename);
      continue;
    }
    if (!textExtensions.has(path.extname(entry.name))) continue;

    const original = fs.readFileSync(filename, 'utf8');
    const updated = original
      .replaceAll(to, marker)
      .replaceAll(from, to)
      .replaceAll(marker, to);
    if (updated !== original) fs.writeFileSync(filename, updated);
  }
}

rewrite(outputDir);

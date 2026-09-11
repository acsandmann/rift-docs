import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseToml } from 'smol-toml';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'src/content/docs');
const publicRoot = path.join(root, 'public');

function filesUnder(directory, suffix) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(target, suffix) : entry.name.endsWith(suffix) ? [target] : [];
  });
}

function routeExists(target) {
  const clean = target.split('#')[0].split('?')[0];
  if (!clean.startsWith('/rift-docs/')) return true;
  const relative = clean.slice('/rift-docs/'.length);
  if (!relative || relative.endsWith('/')) {
    const route = relative ? relative.slice(0, -1) : '';
    return fs.existsSync(path.join(contentRoot, `${route}.md`)) || fs.existsSync(path.join(contentRoot, route, 'index.md'));
  }
  return fs.existsSync(path.join(publicRoot, relative));
}

// Check the subset of JSON Schema emitted by our generator. Root tables may
// be omitted in fragments; required fields inside supplied rule tables may not.
function checkValue(value, schema, location, fragmentRoot = false) {
  if (schema.oneOf) {
    const branch = schema.oneOf.find((item) => matchesType(value, item.type));
    if (!branch) errors.push(`${location}: invalid workspace selector`);
    else checkValue(value, branch, location);
    return;
  }
  if (schema.type && !matchesType(value, schema.type)) {
    errors.push(`${location}: expected ${schema.type}`);
    return;
  }
  if (schema.enum && !schema.enum.includes(value)) errors.push(`${location}: invalid value ${JSON.stringify(value)}`);
  for (const [keyword, fails] of [
    ['minimum', (n) => value < n], ['maximum', (n) => value > n],
    ['exclusiveMinimum', (n) => value <= n],
  ]) if (typeof value === 'number' && schema[keyword] !== undefined && fails(schema[keyword])) errors.push(`${location}: outside ${keyword} ${schema[keyword]}`);
  if (Array.isArray(value)) value.forEach((item, index) => checkValue(item, schema.items || {}, `${location}[${index}]`));
  else if (value && typeof value === 'object') {
    if (!fragmentRoot) for (const key of schema.required || []) {
      if (!(key in value)) errors.push(`${location}: missing ${key}`);
    }
    for (const [key, item] of Object.entries(value)) {
      const child = schema.properties?.[key] ?? schema.additionalProperties;
      if (child === false) errors.push(`${location}: unknown field ${key}`);
      else if (child && typeof child === 'object') checkValue(item, child, `${location}.${key}`);
    }
  }
}
function matchesType(value, type) {
  return type === 'integer' ? Number.isInteger(value)
    : type === 'array' ? Array.isArray(value)
    : type === 'object' ? value !== null && typeof value === 'object' && !Array.isArray(value)
    : typeof value === type;
}

const schema = JSON.parse(fs.readFileSync(path.join(publicRoot, 'schema/rift-config.schema.json'), 'utf8'));
const errors = [];
const docs = filesUnder(contentRoot, '.md');
let snippets = 0;
let localLinks = 0;

for (const file of docs) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/```toml\n([\s\S]*?)```/g)) {
    snippets += 1;
    try {
      const parsed = parseToml(match[1]);
      checkValue(parsed, schema, path.relative(root, file), true);
    } catch (error) {
      errors.push(`${path.relative(root, file)} has invalid TOML: ${error.message}`);
    }
  }
  for (const match of source.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (target.startsWith('/rift-docs/')) {
      localLinks += 1;
      if (!routeExists(target)) errors.push(`${path.relative(root, file)} links to missing ${target}`);
    }
  }
  const tableHeadings = [...source.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
  if (new Set(tableHeadings).size !== tableHeadings.length) errors.push(`${path.relative(root, file)} repeats a section heading`);
  if (/^\s*[^#\n]+\s*=\s*null\s*$/m.test(source)) {
    errors.push(`${path.relative(root, file)} contains null, which TOML does not support`);
  }

  const relative = path.relative(root, file);
  const generatedReference = relative.startsWith('src/content/docs/reference/configuration/')
    && relative !== 'src/content/docs/reference/configuration/index.md';
  if (generatedReference) {
    if (!source.includes('## See also')) errors.push(`${relative} is missing See also links`);
    if (!source.includes('config-intro-example-label')) errors.push(`${relative} has an unlabeled introductory example`);
    if (source.includes('<dt>Default</dt><dd>Required</dd>')) errors.push(`${relative} presents Required as a default`);
    if (/Currently has no effect/i.test(source)) errors.push(`${relative} contains an unmarked unavailable setting`);
    if (/\["[^"\n]+","/.test(source)) errors.push(`${relative} contains a densely formatted string-list default`);
  }
}


const generatedReferenceText = docs
  .filter((file) => path.relative(root, file).startsWith('src/content/docs/reference/configuration/'))
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');
if (!generatedReferenceText.includes('config-availability')) errors.push('Generated reference does not mark unavailable settings');
if (!generatedReferenceText.includes('config-setting-link')) errors.push('Generated reference does not link related settings');

const cliReference = filesUnder(path.join(contentRoot, 'reference/cli'), '.md')
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');
if (/CLI guide|guides\/cli/i.test(cliReference)) {
  errors.push('Generated CLI reference links to the removed CLI guide');
}
for (const required of [
  '<!-- GENERATED FILE. Do not edit directly. -->',
  'rift-cli query windows',
  'rift-cli execute window focus',
  'rift-cli execute config reload',
  'rift-cli subscribe cli',
]) if (!cliReference.includes(required)) errors.push(`Generated CLI reference is missing ${required}`);

const schemaPath = path.join(publicRoot, 'schema/rift-config.schema.json');
const schemaText = fs.readFileSync(schemaPath, 'utf8');

if (schema.$schema !== 'https://json-schema.org/draft/2020-12/schema') errors.push('JSON Schema uses the wrong draft');
if (schemaText.includes('"nullable"')) errors.push('JSON Schema contains non-standard nullable keywords');
if (!schema.required?.includes('settings') || !schema.required?.includes('keys')) errors.push('JSON Schema is missing required root tables');

const requiredKeymapWarnings = [
  'src/content/docs/quick-start.md',
  'src/content/docs/configuration.md',
  'src/content/docs/guides/keybindings.md',
];
for (const relative of requiredKeymapWarnings) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8');
  if (!source.includes('[keys]') || !/replaces? (?:the )?bundled keymap|not merged|does not merge/i.test(source)) {
    errors.push(`${relative} must explain that a custom [keys] table replaces the bundled keymap`);
  }
}

for (const file of docs) {
  const source = fs.readFileSync(file, 'utf8');
  if (/rift-cli execute window resize-by (?!--amount\b)/.test(source)) {
    errors.push(`${path.relative(root, file)} uses resize-by without the required --amount flag`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Checked ${docs.length} pages, ${snippets} TOML examples (syntax, fields, types, and bounds), ${localLinks} local links, and the generated JSON Schema.`);

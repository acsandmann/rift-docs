import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(here, '..');
const riftRoot = process.env.RIFT_ROOT ? path.resolve(process.env.RIFT_ROOT) : path.resolve(docsRoot, '..');
const sourcePath = ['src/common/config/types.rs', 'src/common/config.rs']
  .map((file) => path.join(riftRoot, file)).find((file) => fs.existsSync(file));
if (!sourcePath) throw new Error('Cannot find Rift configuration types');
const source = fs.readFileSync(sourcePath, 'utf8').replace(/^[ \t]*\/\/(?!\/)[^\n]*\n/gm, '');
const overrides = JSON.parse(fs.readFileSync(path.join(docsRoot, 'config-docs.json'), 'utf8'));

function blockAfter(text, start) {
  const open = text.indexOf('{', start); let depth = 0;
  for (let i = open; i < text.length; i++) { if (text[i] === '{') depth++; if (text[i] === '}' && --depth === 0) return text.slice(open + 1, i); }
  throw new Error(`Unclosed block at ${start}`);
}
function rustTypes(text) {
  const out = new Map();
  for (const m of text.matchAll(/(?:^|\n)([ \t]*(?:(?:#\[[^\]]*\]|\/\/\/[^\n]*)\n[ \t]*)*)(?:pub\s+)?(struct|enum)\s+(\w+)/g)) {
    out.set(m[3], { kind: m[2], attrs: m[1], body: blockAfter(text, m.index) });
  }
  return out;
}
const protocolSource = ['layout.rs', 'commands.rs'].map((file) =>
  fs.readFileSync(path.join(riftRoot, 'crates/rift-protocol/src', file), 'utf8')).join('\n');
const types = rustTypes(`${protocolSource}\n${source}`);
types.set('crate::layout_engine::Orientation', types.get('Orientation'));
let cargoMetadata;
function dependencyConstant(expression) {
  const match = expression.match(/^(\w+)::(\w+)::([A-Z][A-Z_0-9]*)$/);
  if (!match) return undefined;
  const [, crate, type, constant] = match;
  cargoMetadata ??= JSON.parse(execFileSync('cargo', ['metadata', '--locked', '--format-version=1'], {
    cwd: riftRoot, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
  }));
  const rootPackage = cargoMetadata.packages.find((pkg) => path.dirname(pkg.manifest_path) === riftRoot);
  const dependency = cargoMetadata.resolve.nodes.find((node) => node.id === rootPackage?.id)
    ?.deps.find((dep) => dep.name === crate);
  const pkg = cargoMetadata.packages.find((pkg) => pkg.id === dependency?.pkg);
  if (!pkg) throw new Error(`Cannot resolve dependency for ${expression}`);
  const src = path.join(path.dirname(pkg.manifest_path), 'src');
  for (const file of fs.readdirSync(src, { recursive: true }).filter((file) => file.endsWith('.rs'))) {
    const text = fs.readFileSync(path.join(src, file), 'utf8');
    for (const impl of text.matchAll(new RegExp(`\\bimpl\\s+${type}\\s*\\{`, 'g'))) {
      const value = blockAfter(text, impl.index).match(new RegExp(`\\bconst\\s+${constant}\\s*:\\s*\\w+\\s*=\\s*(-?\\d+(?:\\.\\d+)?)\\s*;`))?.[1];
      if (value !== undefined) return Number(value);
    }
  }
  throw new Error(`Cannot locate numeric constant ${expression}`);
}
function snake(name) { return name.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`).replace(/^_/, ''); }
function fields(typeName) {
  const t = types.get(typeName); if (!t || t.kind !== 'struct') return [];
  // Match the final comma on a field line so generic types such as
  // `HashMap<String, String>` are not truncated at their inner comma.
  return [...t.body.matchAll(/(?:^|\n)([ \t]*(?:(?:#\[[^\]]*\]|\/\/\/[^\n]*)\n[ \t]*)*)(?:pub\s+)?(\w+)\s*:\s*(.+),\s*$/gm)].map((m) => {
    const attrs = m[1]; const rust = m[3].trim().replaceAll('std::collections::', '');
    const description = [...attrs.matchAll(/\/\/\/ ?([^\n]*)/g)].map((x) => x[1].trim()).join(' ').replace(/\s+/g, ' ');
    return { name: snake(m[2]), rust, description, flatten: /serde\(flatten\)/.test(attrs), skip: /serde\(skip/.test(attrs), hasDefault: /serde\(default(?:\s*(?:=|,|\)))/.test(attrs), default: (attrs.match(/serde\(default\s*=\s*"([^"]+)"/) || [])[1] || null };
  }).filter((f) => !f.skip);
}
function enumValues(typeName) {
  const t = types.get(typeName); if (!t || t.kind !== 'enum') return null;
  const rule = t.attrs.match(/rename_all\s*=\s*"([^"]+)"/)?.[1];
  function rename(name) {
    switch (rule) {
      case undefined: case 'PascalCase': return name;
      case 'lowercase': return name.toLowerCase();
      case 'UPPERCASE': return name.toUpperCase();
      case 'camelCase': return name[0].toLowerCase() + name.slice(1);
      case 'snake_case': return snake(name);
      case 'SCREAMING_SNAKE_CASE': return snake(name).toUpperCase();
      case 'kebab-case': return snake(name).replaceAll('_', '-');
      case 'SCREAMING-KEBAB-CASE': return snake(name).replaceAll('_', '-').toUpperCase();
      default: throw new Error(`Unsupported Serde enum rename rule: ${rule}`);
    }
  }
  return [...t.body.matchAll(/(?:^|\n)([ \t]*(?:(?:#\[[^\]]*\]|\/\/\/[^\n]*)\n[ \t]*)*)(\w+)(?:\s*[,({])/g)]
    .map((m) => m[1].match(/rename\s*=\s*"([^"]+)"/)?.[1] ?? rename(m[2]));
}
function baseType(rust) {
  const optional = rust.startsWith('Option<'); const array = rust.startsWith('Vec<');
  const inner = (optional || array) ? rust.slice(rust.indexOf('<') + 1, -1).trim() : rust;
  if (rust === 'Option<Vec<String>>') return { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }], optional, displayType: 'text or array of text' };
  if (inner === 'MouseModifier') return { type: 'string', optional };
  if (inner === 'WorkspaceSelector') return { oneOf: [{ type: 'integer', minimum: 0 }, { type: 'string' }], optional, displayType: 'workspace name or zero-based index' };
  let type = ({ bool: 'boolean', f64: 'number', f32: 'number', usize: 'integer', u32: 'integer', u64: 'integer', i32: 'integer', String: 'string', PathBuf: 'string', HotkeySpec: 'string' }[inner] || null);
  const values = enumValues(inner); if (values) type = 'string';
  const hashMap = inner.match(/^(?:HashMap|BTreeMap)<\s*([^,]+),\s*(.+)>$/);
  const schemaType = type;
  const schema = type ? { type: schemaType, ...(values ? { enum: values } : {}) } : (hashMap ? { type: 'object', additionalProperties: {} } : { type: 'object' });
  const displayType = hashMap ? `map of ${hashMap[1].trim()} to ${hashMap[2].trim()}` : undefined;
  if (array) return { type: 'array', items: schema, optional, ...(displayType ? { displayType: `array of ${displayType}` } : {}) };
  return { ...schema, optional, ...(displayType ? { displayType } : {}) };
}
function nestedStructType(rust) {
  const arrayInner = rust.match(/^Vec<(.+)>$/)?.[1]?.trim();
  const candidate = (arrayInner || rust).replace(/^Option<(.+)>$/, '$1').trim();
  return types.get(candidate)?.kind === 'struct' ? candidate : null;
}
function schemaFor(typeName, seen = new Set(), prefix = []) {
  if (seen.has(typeName)) return {};
  const branchSeen = new Set(seen); branchSeen.add(typeName); const props = {}; const required = [];
  for (const f of fields(typeName)) {
    const pathParts = [...prefix, f.name];
    if (f.flatten) { Object.assign(props, schemaFor(f.rust, new Set(branchSeen), prefix).properties || {}); continue; }
    const s = baseType(f.rust); delete s.optional; delete s.displayType;
    if (/^(usize|u32|u64)$/.test(f.rust.replace(/^Option<(.+)>$/, '$1'))) s.minimum = 0;
    const nested = nestedStructType(f.rust);
    if (nested) {
      const nestedSchema = schemaFor(nested, new Set(branchSeen), pathParts);
      if (s.type === 'array') s.items = nestedSchema;
      else if (s.type === 'object' || (Array.isArray(s.type) && s.type.includes('object'))) Object.assign(s, nestedSchema, { type: s.type });
    }
    const mapValue = f.rust.match(/^(?:HashMap|BTreeMap)<\s*[^,]+,\s*(.+)>$/)?.[1]?.trim();
    if (mapValue && types.get(mapValue)?.kind === 'struct') {
      s.additionalProperties = schemaFor(mapValue, new Set(branchSeen), pathParts);
    }
    const fieldOverride = overrides.overrides?.[pathParts.join('.')];
    const description = fieldOverride?.description || f.description;
    if (description) s.description = description;
    if ((typeName === 'OuterGaps' || typeName === 'InnerGaps') && ['f64', 'f32'].includes(f.rust)) s.minimum = 0;
    if (fieldOverride?.schema) Object.assign(s, fieldOverride.schema);
    const defaultForSchema = defaultValue(f); if (defaultForSchema !== undefined && defaultForSchema !== null) s.default = defaultForSchema;
    props[f.name] = s;
    if (!f.hasDefault && !f.rust.startsWith('Option<')) required.push(f.name);
  }
  return { type: 'object', additionalProperties: false, properties: props, ...(required.length ? { required } : {}) };
}
const root = { type: 'object', additionalProperties: false, properties: {
  settings: schemaFor('Settings', new Set(), ['settings']),
  keys: { type: 'object', description: 'Hotkey strings mapped to Rift commands.', additionalProperties: {} },
  binding_modes: { type: 'object', description: overrides.overrides?.binding_modes?.description || 'Custom keymaps selected by name.', ...(overrides.overrides?.binding_modes?.schema || { additionalProperties: { type: 'object', additionalProperties: {} } }) },
  virtual_workspaces: schemaFor('VirtualWorkspaceSettings', new Set(), ['virtual_workspaces']),
  modifier_combinations: { type: 'object', description: 'Reusable modifier combinations.', additionalProperties: { type: 'string' } },
}, required: ['settings', 'keys'] };
function defaultValue(f) {
  if (!f.hasDefault && !f.rust.startsWith('Option<')) return undefined;
  if (f.default) {
    const match = source.match(new RegExp(`fn ${f.default}\\(\\)\\s*->[^\\{]+\\{`));
    if (!match) throw new Error(`Cannot locate default function ${f.default}`);
    let body = blockAfter(source, match.index).trim();
    if (f.rust.startsWith('Option<')) {
      if (body === 'None') return null;
      const some = body.match(/^Some\(([\s\S]*)\)$/);
      if (some) body = some[1].trim();
    }
    if (/^(true|false|-?\d+(?:\.\d+)?)$/.test(body)) return JSON.parse(body);
    const constant = dependencyConstant(body);
    if (constant !== undefined) return constant;
    const variant = body.match(/^\w+::(\w+)$/);
    if (variant) return snake(variant[1]);
    const string = body.match(/^PathBuf::from\((".*")\)$/);
    if (string) return JSON.parse(string[1]);
    const struct = body.match(/^\w+\s*\{([\s\S]*)\}$/);
    if (struct) {
      const fields = [...struct[1].matchAll(/(\w+)\s*:\s*(-?\d+(?:\.\d+)?|true|false)\s*,?/g)];
      if (fields.length) return Object.fromEntries(fields.map(([, key, value]) => [key, JSON.parse(value)]));
    }
    const color = body.match(/^Color::new\(([^)]*)\)$/);
    if (color) {
      const [r, g, b, a] = color[1].split(',').map((value) => Number(value.trim()));
      if ([r, g, b, a].every(Number.isFinite)) return { r, g, b, a };
    }
    if (body.startsWith('vec![') && !body.includes('"')) {
      return body.slice(5, -1).split(',').filter((item) => item.trim()).map((item) => {
        const ratio = item.trim().match(/^(-?\d+(?:\.\d+)?)(?:\s*\/\s*(\d+(?:\.\d+)?))?$/);
        if (!ratio) throw new Error(`Unsupported vector default item: ${item}`);
        return Number(ratio[1]) / Number(ratio[2] ?? 1);
      });
    }
    if (body.startsWith('vec![')) return [...body.matchAll(/("[^"\n]*")\.to_string\(\)/g)].map((m) => JSON.parse(m[1]));
    throw new Error(`Unsupported default expression for ${f.default}: ${body}`);
  }
  if (f.rust.startsWith('Option<')) return null;
  if (/^(?:HashMap|BTreeMap)</.test(f.rust)) return {};
  if (f.rust.startsWith('Vec<')) return [];
  if (f.rust === 'bool') return false;
  if (/^(f\d+|usize|u\d+|i\d+)$/.test(f.rust)) return 0;
  const t = types.get(f.rust);
  if (t?.kind === 'enum') {
    const variant = t.body.match(/#\[default\]\s*(?:(?:\/\/\/[^\n]*|#\[[^\]]*\])\s*)*(\w+)/)?.[1];
    if (!variant) throw new Error(`No explicit default found for ${f.rust}`);
    return snake(variant);
  }
  if (t?.kind === 'struct') return undefined; // Explain table defaults separately.
  throw new Error(`Cannot determine default for ${f.name}: ${f.rust}`);
}

function friendlyType(rust, schema) {
  if (rust.startsWith('Option<')) return `${friendlyType(rust.slice(7, -1), { ...schema, type: Array.isArray(schema.type) ? schema.type[0] : schema.type })} (optional)`;
  if (schema.displayType) return schema.displayType.replace('String', 'text').replace('WmCommand', 'Rift command').replace('GapOverride', 'gap override tables');
  if (schema.enum) return schema.enum.filter((value) => value !== null).map((value) => `\`${value}\``).join(' or ');
  if (schema.type === 'array') return `list of ${({ string: 'text values', object: 'tables', number: 'numbers', integer: 'whole numbers' })[schema.items.type] || schema.items.type}`;
  return ({ bool: 'boolean', f64: 'number', f32: 'number', usize: 'whole number', u32: 'whole number', u64: 'whole number', i32: 'whole number', String: 'text', PathBuf: 'path', HotkeySpec: 'hotkey' }[rust] || (schema.type === 'object' ? 'table' : schema.type) || 'table');
}

function shownDefault(value) {
  if (value === undefined) return 'Required';
  if (value === null) return 'Not set';
  if (Array.isArray(value) && value.length === 0) return 'Empty list';
  if (value && typeof value === 'object' && Object.keys(value).length === 0) return 'Empty table';
  const toml = Array.isArray(value)
    ? `[${value.map((item) => JSON.stringify(item)).join(', ')}]`
    : JSON.stringify(value);
  return `\`${toml}\``;
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

// Override copy only uses links and inline code. Rendering that small subset here
// lets generated fields use the theme's reference markup (`apple-entry`, `apple-meta`,
// …) without changing the source docs to MDX or pulling presentation details into
// config-docs.json.
function routeForSetting(path) {
  if (path === 'settings.drag_drop' || path.startsWith('settings.drag_drop.')) return 'drag-drop';
  if (path.startsWith('settings.layout.scrolling')) return 'scrolling';
  if (path.startsWith('settings.layout')) return 'layouts';
  if (path.startsWith('settings.gestures')) return 'gestures';
  if (path.startsWith('settings.ui')) return 'ui';
  if (path === 'settings.run_on_start') return 'commands';
  if (path.startsWith('settings.')) return 'general';
  if (path.startsWith('virtual_workspaces.app_rules')) return 'app-rules';
  if (path.startsWith('virtual_workspaces.')) return 'virtual-workspaces';
  if (path.startsWith('binding_modes')) return 'binding-modes';
  if (path.startsWith('keys')) return 'keybindings';
  if (path.startsWith('modifier_combinations')) return 'modifiers';
  return null;
}

function settingReference(code, contextPath, knownPaths) {
  let candidate = code
    .replace(/^\[([^\]]+)\]\./, '$1.')
    .replace(/^\[+([^\]]+)\]+$/, '$1');
  if (!candidate.includes('.') && contextPath) {
    candidate = `${contextPath.split('.').slice(0, -1).join('.')}.${candidate}`;
  }
  if (!knownPaths.has(candidate)) return null;
  const route = routeForSetting(candidate);
  if (!route) return null;
  const row = knownPaths.get(candidate);
  return `/rift-docs/reference/configuration/${route}/#${settingAnchor(row)}`;
}

// Tables link to their heading. Fields link to their entry, whose id is the full path so
// that fields sharing a name in different tables (such as `enabled`) stay distinct.
function settingAnchor(row) {
  return row.container || row.arrayContainer ? row.path.replaceAll('.', '') : `setting-${row.path.replaceAll('.', '-')}`;
}

function typeReference(row) {
  const nested = nestedStructType(row.rust);
  if (!nested) return row.type;
  const route = routeForSetting(row.path);
  if (!route) return row.type;
  const href = `/rift-docs/reference/configuration/${route}/#${row.path.replaceAll('.', '')}`;
  const tableLabel = row.type.startsWith('table') ? 'table' : 'tables';
  return `[${tableLabel}](${href})${row.type.slice(tableLabel.length)}`;
}

function inlineHtml(value, contextPath = null, knownPaths = new Map()) {
  const tokens = [];
  const token = (html) => { tokens.push(html); return `\u0000${tokens.length - 1}\u0000`; };
  let output = value
    .replace(/`([^`]+)`/g, (_, code) => {
      const href = settingReference(code, contextPath, knownPaths);
      const rendered = `<code>${escapeHtml(code)}</code>`;
      return token(href ? `<a href="${href}">${rendered}</a>` : rendered);
    })
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => token(`<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`));
  output = escapeHtml(output);
  return output.replace(/\u0000(\d+)\u0000/g, (_, index) => tokens[Number(index)]);
}

function metadataHtml(label, value) {
  return `<div><dt>${label}</dt><dd>${inlineHtml(value)}</dd></div>`;
}

const exampleLabel = '<p class="apple-label">Example</p>';

function topicList(topics) {
  return `<ul class="apple-topics">\n${topics.map(({ label, href, description }) =>
    `<li><a href="${href}">${escapeHtml(label)}</a>${description ? `<p>${escapeHtml(description)}</p>` : ''}</li>`).join('\n')}\n</ul>`;
}

function markdownGroup(title, prefix, version) {
  const rows = [];
  const group = overrides.groups?.[title] || {};
  const excludedPrefixes = {
    General: ['settings.drag_drop', 'settings.layout', 'settings.ui', 'settings.gestures', 'settings.run_on_start'],
    Layouts: ['settings.layout.scrolling'],
    'Virtual workspaces': ['virtual_workspaces.app_rules'],
  }[title] || [];
  function walk(typeName, parts, seen = new Set()) { if (seen.has(typeName)) return; const branchSeen = new Set(seen); branchSeen.add(typeName); const children = []; for (const f of fields(typeName)) {
    if (f.flatten) { walk(f.rust, parts, new Set(branchSeen)); continue; } const p = [...parts, f.name]; const over = overrides.overrides[p.join('.')]; const s = { ...baseType(f.rust), ...over?.schema }; const value = defaultValue(f);
    if (over?.hidden || (overrides.hidden || []).includes(p.join('.'))) continue;
    rows.push({ path: p.join('.'), rust: f.rust, type: friendlyType(f.rust, s), container: types.get(f.rust)?.kind === 'struct', arrayContainer: Boolean(f.rust.match(/^Vec<(.+)>$/) && nestedStructType(f.rust)), description: over?.description || f.description || (() => { throw new Error(`Missing description: ${p.join('.')}`); })(), value, note: over?.note, customExample: over?.example, enum: s.enum?.filter((x) => x !== null) });
    const nested = nestedStructType(f.rust); if (nested) children.push([nested, p]);
  } for (const [nested, p] of children) walk(nested, p, new Set(branchSeen)); }
  walk(types.has('ConfigSource') ? 'ConfigSource' : 'ConfigFile', []);
  const knownPaths = new Map(rows.map((row) => [row.path, row]));
  const filtered = rows.filter((r) => r.path === prefix || (r.path.startsWith(`${prefix}.`) && !excludedPrefixes.some((excluded) => r.path === excluded || r.path.startsWith(`${excluded}.`))));
  let currentTable = null;
  const content = [];
  // Keep each table's description and fields together, even when the Rust
  // declaration places a nested struct between scalar fields.
  const tables = new Map();
  for (const row of filtered) {
    const key = row.container || row.arrayContainer || !row.path.includes('.')
      ? row.path : row.path.split('.').slice(0, -1).join('.');
    if (!tables.has(key)) tables.set(key, []);
    tables.get(key).push(row);
  }
  for (const r of [...tables.values()].flat()) {
    const parts = r.path.split('.');
    if (r.arrayContainer) {
      content.push(`<p class="apple-label">Array of tables</p>\n\n## \`[[${r.path}]]\`\n\n${r.description}${r.customExample ? `\n\n${exampleLabel}\n\n\`\`\`toml\n${r.customExample}\n\`\`\`` : ''}`);
      currentTable = r.path;
      continue;
    }
    if (r.container) {
      content.push(`<p class="apple-label">Table</p>\n\n## \`[${r.path}]\`\n\n${r.description}`);
      currentTable = r.path;
      continue;
    }
    if (parts.length === 1) {
      // The introduction and complete table example already explain root maps.
      currentTable = r.path;
      continue;
    }
    const table = parts.slice(0, -1).join('.');
    if (table !== currentTable) { content.push(`<p class="apple-label">Table</p>\n\n## \`[${table}]\``); currentTable = table; }
    const hasLongValues = r.enum?.length > 4;
    const type = hasLongValues ? 'text' : typeReference(r);
    const defaultText = shownDefault(r.value);
    const accepted = hasLongValues
      ? `<p class="apple-label">Possible values</p>\n<ul class="apple-values">${r.enum.map((value) => `<li><code>${escapeHtml(value)}</code></li>`).join('')}</ul>`
      : '';
    const unavailable = /currently has no effect\.?$/i.test(r.description);
    const availability = unavailable ? '<ul class="apple-availability"><li data-variant="caution">Unavailable</li></ul>\n' : '';
    const description = unavailable ? 'Reserved for future use.' : inlineHtml(r.description, r.path, knownPaths);
    const defaultMeta = r.value === undefined
      ? metadataHtml('Requirement', 'Required')
      : metadataHtml('Default', defaultText);
    const blocks = [
      `<section class="apple-entry" id="${settingAnchor(r)}">`,
      `### \`${parts.at(-1)}\``,
      [
        `${availability}<p>${description}</p>`,
        `<dl class="apple-meta">${metadataHtml('Type', type)}${defaultMeta}</dl>`,
        accepted,
      ].filter(Boolean).join('\n'),
      r.note ? `:::note\n${inlineHtml(r.note, r.path, knownPaths)}\n:::` : '',
      r.customExample ? `${exampleLabel}\n\n\`\`\`toml\n${r.customExample}\n\`\`\`` : '',
      '</section>',
    ];
    content.push(blocks.filter(Boolean).join('\n\n'));
  }
  const examples = {
    General: '```toml\n[settings]\nanimate = true\nanimation_duration = 0.2\n```',
    'Drag and drop': '```toml\n[settings.drag_drop]\nenabled = true\nmodifier = "fn"\naction1 = "move"\naction2 = "none"\ndrop_action = "swap"\npreview = true\n```',
    Layouts: '```toml\n[settings.layout]\nmode = "master_stack"\n\n[settings.layout.gaps.inner]\nhorizontal = 8.0\nvertical = 8.0\n```',
    'User interface': '```toml\n[settings.ui.menu_bar]\nenabled = true\ndisplay_style = "label"\nactive_label = "name"\n```',
    'Scrolling layout': '```toml\n[settings.layout]\nmode = "scrolling"\n\n[settings.layout.scrolling]\ncolumn_width_ratio = 0.7\nalignment = "center"\n```',
    Gestures: '```toml\n[settings.gestures]\nenabled = true\nfingers = 3\n```',
    'Virtual workspaces': '```toml\n[virtual_workspaces]\ndefault_workspace_count = 3\nworkspace_names = ["Main", "Code", "Chat"]\ndefault_workspace = 0\n```',
    Keybindings: '```toml\n[keys]\n"Alt + Z" = "toggle_space_activated"\n"Alt + H" = { move_focus = "left" }\n"Alt + Shift + H" = { move_node = "left" }\n"Alt + 1" = { switch_to_workspace = 0 }\n"Alt + Shift + Space" = "toggle_window_floating"\n```\n\nSimple commands are quoted strings. Commands that need a direction, workspace, amount, or other option use an inline table. See [Keybindings](/rift-docs/guides/keybindings/) for more commands.',
    'Binding modes': '```toml\n[keys]\n"Alt + R" = { binding_mode = "resize" }\n\n[binding_modes.resize]\n"H" = { resize_window_shrink = "horizontal" }\n"L" = { resize_window_grow = "horizontal" }\n"Escape" = { binding_mode = "default" }\n```\n\nMode names can be any TOML key. The default mode is reserved and is defined by `[keys]`.',
    'Modifier combinations': '```toml\n[modifier_combinations]\nmain = "Alt + Shift"\n\n[keys]\n"main + H" = { move_focus = "left" }\n```',
    'Commands and startup': 'To open Terminal when Rift starts:\n\n```toml\n[settings]\nrun_on_start = ["open -a Terminal"]\n```',
  };
  const fragmentNote = ':::note[Examples are config fragments]\nEdit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).\n:::';
  const warning = group.warning ? `:::caution[${group.warning.title}]\n${group.warning.body}\n:::` : '';
  const introExample = examples[title]
    ? examples[title].replace('```toml', `${exampleLabel}\n\n\`\`\`toml`)
    : '';
  const intro = [group.description, group.next, warning, fragmentNote, introExample].filter(Boolean).join('\n\n');
  const appRuleIntro = title === 'App rules' ? 'This example uses the default workspace name `Development`. Replace it if you renamed that workspace:\n\n' + exampleLabel + '\n\n```toml\n[[virtual_workspaces.app_rules]]\napp_id = "com.apple.Terminal"\nworkspace = "Development"\n\n[[virtual_workspaces.app_rules]]\napp_id = "com.apple.Calculator"\nfloating = true\n```' : '';
  const commandNotes = title === 'Commands and startup' ? 'For a helper that must restart after failure, use a macOS LaunchAgent (a background service). CLI subscriptions accept `workspace_changed`, `windows_changed`, `window_title_changed`, `focused_window_changed`, `stacks_changed`, `layout_changed`, `selection_changed`, or `*`. Each event’s JSON data is passed as the command’s final argument and in `RIFT_EVENT_JSON`. `RIFT_EVENT_TYPE` identifies the event; other variables depend on its contents. See [Integrations](/rift-docs/ecosystem/integrations/) for a working subscription.' : '';
  const seeAlso = {
    General: ['[Quick start](/rift-docs/quick-start/)', '[Configuration guide](/rift-docs/configuration/)', '[Keybindings](/rift-docs/guides/keybindings/)'],
    'Drag and drop': ['[Window management](/rift-docs/guides/window-management/)', '[Layout settings](/rift-docs/reference/configuration/layouts/)', '[Configuration guide](/rift-docs/configuration/)'],
    Layouts: ['[Compare layouts](/rift-docs/layouts/)', '[Adjust layouts](/rift-docs/guides/layouts/)', '[Scrolling settings](/rift-docs/reference/configuration/scrolling/)'],
    'Scrolling layout': ['[Scrolling layout guide](/rift-docs/layouts/scrolling/)', '[Layout settings](/rift-docs/reference/configuration/layouts/)', '[Gesture settings](/rift-docs/reference/configuration/gestures/)'],
    Gestures: ['[Gestures guide](/rift-docs/guides/gestures/)', '[Virtual workspaces](/rift-docs/guides/workspaces/)'],
    'User interface': ['[Configuration guide](/rift-docs/configuration/)', '[Window management](/rift-docs/guides/window-management/)'],
    'App rules': ['[App rules guide](/rift-docs/guides/app-rules/)', '[Virtual workspaces](/rift-docs/guides/workspaces/)'],
    'Virtual workspaces': ['[Virtual workspaces guide](/rift-docs/guides/workspaces/)', '[App rules](/rift-docs/reference/configuration/app-rules/)', '[Layout settings](/rift-docs/reference/configuration/layouts/)'],
    Keybindings: ['[Keybindings guide](/rift-docs/guides/keybindings/)', '[Binding modes](/rift-docs/reference/configuration/binding-modes/)', '[Modifier combinations](/rift-docs/reference/configuration/modifiers/)', '[Commands and startup](/rift-docs/reference/configuration/commands/)'],
    'Binding modes': ['[Keybindings](/rift-docs/reference/configuration/keybindings/)', '[Modifier combinations](/rift-docs/reference/configuration/modifiers/)'],
    'Modifier combinations': ['[Keybindings guide](/rift-docs/guides/keybindings/)', '[Keybinding reference](/rift-docs/reference/configuration/keybindings/)'],
    'Commands and startup': ['[Integrations](/rift-docs/ecosystem/integrations/)', '[Keybindings](/rift-docs/guides/keybindings/)'],
  }[title] || [];
  const related = seeAlso.length ? `## See also\n\n${topicList(seeAlso.map((link) => {
    const [, label, href] = link.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return { label, href };
  }))}` : '';
  return `<!--\nGENERATED FILE. Do not edit directly.\nGenerated from Rift ${version}.\n-->\n\n${[intro, appRuleIntro, commandNotes, content.join('\n\n'), related].filter(Boolean).join('\n\n')}`;
}
let version = process.env.RIFT_REF || 'the checked-out Rift source';
try { version = process.env.RIFT_REF || execFileSync('git', ['-C', riftRoot, 'describe', '--tags', '--always', '--dirty'], { encoding: 'utf8' }).trim(); } catch {}
const schemaDir = path.join(docsRoot, 'public/schema'); fs.mkdirSync(schemaDir, { recursive: true });
fs.writeFileSync(path.join(schemaDir, 'rift-config.schema.json'), JSON.stringify({ $schema: 'https://json-schema.org/draft/2020-12/schema', title: 'Rift configuration', description: `Generated from Rift ${version}.`, ...root }, null, 2) + '\n');
const refDir = path.join(docsRoot, 'src/content/docs/reference/configuration'); fs.mkdirSync(refDir, { recursive: true });
const groups = [['general', 'General', 'settings'], ['drag-drop', 'Drag and drop', 'settings.drag_drop'], ['layouts', 'Layouts', 'settings.layout'], ['scrolling', 'Scrolling layout', 'settings.layout.scrolling'], ['gestures', 'Gestures', 'settings.gestures'], ['ui', 'User interface', 'settings.ui'], ['app-rules', 'App rules', 'virtual_workspaces.app_rules'], ['virtual-workspaces', 'Virtual workspaces', 'virtual_workspaces'], ['keybindings', 'Keybindings', 'keys'], ['binding-modes', 'Binding modes', 'binding_modes'], ['modifiers', 'Modifier combinations', 'modifier_combinations'], ['commands', 'Commands and startup', 'settings.run_on_start']];
for (const [file, title, prefix] of groups) fs.writeFileSync(path.join(refDir, `${file}.md`), `---\ntitle: ${title}\ndescription: ${JSON.stringify(overrides.groups[title].description)}\neditUrl: false\ntableOfContents:\n  minHeadingLevel: 2\n  maxHeadingLevel: 3\n---\n\n${markdownGroup(title, prefix, version)}\n`);
const categories = [
  ['General', 'general', 'Animation, focus behavior, activation, hot reload'],
  ['Drag and drop', 'drag-drop', 'Modifier-assisted movement and tiled-window drops'],
  ['Layouts', 'layouts', 'Mode, gaps, Traditional, BSP, Stack, Master-stack'],
  ['Scrolling', 'scrolling', 'Column widths, focus navigation, column gestures'],
  ['Gestures', 'gestures', 'Trackpad workspace navigation'],
  ['User interface', 'ui', 'Menu bar, stack indicators, Mission Control'],
  ['Virtual workspaces', 'virtual-workspaces', 'Names, count, navigation, per-workspace layouts'],
  ['App rules', 'app-rules', 'Match windows and control placement'],
  ['Keybindings', 'keybindings', 'Keyboard shortcuts and command syntax'],
  ['Binding modes', 'binding-modes', 'Named keymaps and mode transitions'],
  ['Modifiers', 'modifiers', 'Reusable shortcut combinations'],
  ['Startup commands', 'commands', 'Launch helpers and event subscriptions'],
].map(([label, file, description]) => ({ label, href: `/rift-docs/reference/configuration/${file}/`, description }));
fs.writeFileSync(path.join(refDir, 'index.md'), `---
title: Configuration reference
description: Find Rift settings, accepted values, defaults, and examples.
editUrl: false
---

<!-- GENERATED FILE. Do not edit directly. -->

Look up setting names, accepted values, and defaults. For your first file, use [Quick start](/rift-docs/quick-start/).

Source version: \`${version}\`. Newer settings may not exist in older releases.

:::caution[Keybindings are different]
A custom config must contain \`[settings]\` and \`[keys]\`. Omitted settings use defaults, but \`[keys]\` replaces the bundled keymap. An empty table registers no keyboard shortcuts.
:::

## Find a setting

${topicList(categories)}

## How to use this reference

1. Open the category that matches what you want to change.
2. Merge the example into the matching table in your config. Do not repeat an existing table header.
3. Change the value, save, and run \`rift-cli execute config reload\` if hot reload is disabled or the change does not appear.

## Read defaults and types

- Default applies when the containing table exists but the field is omitted. Notes explain exceptions when a whole table is omitted. The bundled config may set a different value.
- Not set means an optional field is omitted. Its description explains any inherited value. TOML has no \`null\`.
- Required means you must supply the field when using its containing table.
- Boolean means \`true\` or \`false\`, without quotes. Text values need quotes; lists use square brackets.

The [JSON Schema](/rift-docs/schema/rift-config.schema.json) supports editor autocomplete and checks names, types, and some bounds. Use config reload to also check shortcuts, commands, and relationships between settings.
`);
console.log(`Generated schema and ${groups.length + 1} reference pages from ${sourcePath} (${version}).`);

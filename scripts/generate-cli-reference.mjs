import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(here, '..');
const riftRoot = process.env.RIFT_ROOT ? path.resolve(process.env.RIFT_ROOT) : path.resolve(docsRoot, '..');

function exactSourceTag() {
  if (process.env.RIFT_REF) return process.env.RIFT_REF;
  try {
    return execFileSync('git', ['-C', riftRoot, 'describe', '--tags', '--exact-match'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

function versionAtMost(ref, ceiling) {
  const parse = (value) => value.match(/^v?(\d+(?:\.\d+)*)$/)?.[1].split('.').map(Number);
  const left = parse(ref);
  const right = parse(ceiling);
  if (!left || !right) return false;
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const difference = (left[index] || 0) - (right[index] || 0);
    if (difference) return difference < 0;
  }
  return true;
}

// Rift v0.5.8.1 and older trip Clap's debug-only positional-bool assertion
// while rendering nested help. Newer releases contain the argument fix and
// use the normal debug profile again.
const sourceTag = exactSourceTag();
const cargoProfile = process.env.RIFT_CLI_PROFILE
  || (versionAtMost(sourceTag, 'v0.5.8.1') ? 'release-fast' : 'debug');
const executable = process.env.RIFT_CLI
  ? path.resolve(process.env.RIFT_CLI)
  : path.join(process.env.CARGO_TARGET_DIR || path.join(riftRoot, 'target'), cargoProfile, 'rift-cli');

const buildInputs = [
  path.join(riftRoot, 'src/bin/rift-cli.rs'),
  path.join(riftRoot, 'Cargo.toml'),
  path.join(riftRoot, 'Cargo.lock'),
];
const executableMtime = fs.existsSync(executable) ? fs.statSync(executable).mtimeMs : 0;
const needsBuild = process.env.RIFT_CLI_FORCE_BUILD === '1'
  || !executableMtime
  || buildInputs.some((input) => fs.existsSync(input) && fs.statSync(input).mtimeMs > executableMtime);

if (!process.env.RIFT_CLI && needsBuild) {
  const profileArgs = cargoProfile === 'debug' ? [] : ['--profile', cargoProfile];
  execFileSync('cargo', ['build', '--quiet', ...profileArgs, '--manifest-path', path.join(riftRoot, 'Cargo.toml'), '--bin', 'rift-cli'], {
    cwd: riftRoot,
    stdio: 'inherit',
  });
}

function helpFor(parts) {
  return execFileSync(executable, [...parts, '--help'], { encoding: 'utf8' }).trim();
}

function section(text, name) {
  const match = text.match(new RegExp(`(?:^|\\n)${name}:\\n([\\s\\S]*?)(?=\\n\\n[A-Z][A-Za-z ]+:|$)`));
  return match?.[1] || '';
}

function rows(text) {
  return text.split('\n').flatMap((line) => {
    const match = line.match(/^\s{2,}(\S+(?:\s+<[^>]+>)?)(?:\s{2,}(.*))?$/);
    return match ? [{ label: match[1].trim(), description: (match[2] || '').trim() }] : [];
  });
}

function detailRows(text) {
  const output = [];
  for (const line of text.split('\n')) {
    const entry = line.trimEnd().match(/^\s{2,}((?:--?.+?|<[^>]+>|\[[A-Z0-9_|-]+\](?:\.\.\.)?))(?:\s{2,}(\S.*))?$/);
    if (entry) {
      output.push({ label: entry[1].trim(), description: (entry[2] || '').trim() });
      continue;
    }
    const continuation = line.match(/^\s{4,}(\S.*)$/);
    if (continuation && output.length) {
      output.at(-1).description = [output.at(-1).description, continuation[1].trim()].filter(Boolean).join(' ');
    }
  }
  return output;
}

function commandNames(text) {
  return rows(section(text, 'Commands'))
    .map((row) => row.label.split(/\s/)[0])
    .filter((name) => name !== 'help');
}

function parseHelp(parts) {
  const text = helpFor(parts);
  const usage = text.match(/(?:^|\n)Usage: (.+)/)?.[1] || `rift-cli ${parts.join(' ')}`;
  const description = text.startsWith('Usage:') ? '' : text.split('\n\n')[0].replace(/\s+/g, ' ').trim();
  const arguments_ = detailRows(section(text, 'Arguments'));
  const options = detailRows(section(text, 'Options')).filter((row) => !`${row.label} ${row.description}`.includes('--help'));
  return { parts, text, usage, description, arguments_, options, children: commandNames(text) };
}

function collect(parts = [], depth = 0) {
  const command = parseHelp(parts);
  if (depth >= 3) return [command];
  return [command, ...command.children.flatMap((child) => collect([...parts, child], depth + 1))];
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function inlineCode(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
}

const valueReference = {
  DIRECTION: 'One of `left`, `right`, `up`, or `down`, relative to the current window, selection, display, or macOS Space.',
  EVENT: 'One of `workspace_changed`, `windows_changed`, `window_title_changed`, `focused_window_changed`, `stacks_changed`, or `*` for every event.',
  INDEX: 'A zero-based display index. Use `rift-cli query displays` to inspect connected displays.',
  MODE: 'A layout mode: `traditional`, `bsp`, `stack`, `master_stack`, or `scrolling`.',
  ORIENTATION: 'The resize axis: `horizontal`, `vertical`, or `smart`. Smart chooses the nearest applicable split.',
  SCOPE: 'The restore scope: `workspace` for one workspace or `space` for all saved workspaces in the current macOS Space.',
  SPACE_ID: 'The numeric macOS Space identifier returned by Rift query output. This is distinct from a virtual workspace index.',
  UUID: 'A display UUID. Use `rift-cli query displays` to find the UUIDs of connected displays.',
  WINDOW_ID: 'A Rift window identifier. Commands accept the JSON form, such as `{"pid":123,"idx":456}`, or the debug-text form where noted.',
  WINDOW_SERVER_ID: 'The numeric window ID assigned by the macOS WindowServer.',
  WORKSPACE_ID: 'A zero-based Rift virtual-workspace index. `0` identifies the first workspace.',
};

const valueReferenceGroups = [
  ['Accepted values', 'These placeholders have a fixed set of accepted values.', ['DIRECTION', 'ORIENTATION', 'MODE', 'EVENT', 'SCOPE']],
  ['Identifiers', 'These placeholders identify Rift or macOS objects rather than choosing from a fixed set.', ['WINDOW_ID', 'WINDOW_SERVER_ID', 'WORKSPACE_ID', 'SPACE_ID', 'UUID', 'INDEX']],
];

function valueId(name) {
  return `value-${name.toLowerCase().replaceAll('_', '-')}`;
}

function linkedSyntax(value) {
  let cursor = 0;
  const output = [];
  for (const match of value.matchAll(/[A-Z][A-Z0-9_]*/g)) {
    const name = match[0];
    if (!valueReference[name]) continue;
    output.push(escapeHtml(value.slice(cursor, match.index)));
    output.push(`<a class="cli-value-link" href="/rift-docs/reference/cli/#${valueId(name)}">${name}</a>`);
    cursor = match.index + name.length;
  }
  output.push(escapeHtml(value.slice(cursor)));
  return output.join('');
}

function readableDescription(value) {
  return value
    .replace(/\s+-\s+/g, ' ')
    .replace(/\s+Examples?:.*$/i, '')
    .replace(/\bMacOS\b/g, 'macOS')
    .trim();
}

function sentence(value) {
  const clean = readableDescription(value);
  return /[.!?]$/.test(clean) ? clean : `${clean}.`;
}

function detailDescription(value = '') {
  const source = value;
  const defaultValue = source.match(/\[default: ([^\]]+)\]/)?.[1];
  const possibleValues = source.match(/\[possible values: ([^\]]+)\]/)?.[1]?.split(',').map((item) => item.trim());
  const description = source.replace(/\s*\[(?:default|possible values): [^\]]+\]/g, '').trim();
  const parts = description ? [inlineCode(sentence(description))] : [];
  if (defaultValue) parts.push(`<span class="cli-command__constraint">Default: <code>${escapeHtml(defaultValue)}</code>.</span>`);
  if (possibleValues) parts.push(`<span class="cli-command__constraint">Accepted values: ${possibleValues.map((item) => `<code>${escapeHtml(item)}</code>`).join(', ')}.</span>`);
  return parts.join(' ');
}

function parameterGroup(label, entries) {
  if (!entries.length) return '';
  const rows = entries.map(({ label: syntax, description }) => {
    return `<div class="cli-parameter"><dt><code>${linkedSyntax(syntax)}</code></dt><dd>${detailDescription(description)}</dd></div>`;
  }).join('\n');
  return `<section class="cli-parameters"><h3>${label}</h3><dl class="cli-command__details">\n${rows}\n</dl></section>`;
}

function details(command) {
  return [
    parameterGroup('Arguments', command.arguments_),
    parameterGroup('Options', command.options),
  ].filter(Boolean).join('\n');
}

function card(command, headingLevel = 2) {
  const displayName = command.parts.at(-1);
  const description = readableDescription(command.description);
  const body = [
    description ? `<p class="cli-command__description">${inlineCode(sentence(description))}</p>` : '',
    `<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>${linkedSyntax(command.usage)}</code></div></div>`,
    details(command),
  ].filter(Boolean).join('\n');
  return `${'#'.repeat(headingLevel)} <span class="cli-command-heading">${displayName}</span>\n\n<article class="cli-command">\n${body}\n</article>`;
}

const commands = collect();

const valueReferenceMarkup = valueReferenceGroups.map(([title, description, names]) => `<section class="cli-value-group">
<h2>${title}</h2>
<p>${description}</p>
<dl class="cli-value-reference">
${names.map((name) => `<div id="${valueId(name)}" class="cli-value-reference__item"><dt><code>&lt;${name}&gt;</code></dt><dd>${inlineCode(valueReference[name])}</dd></div>`).join('\n')}
</dl>
</section>`).join('\n');

let version = process.env.RIFT_REF || 'the checked-out Rift source';
try {
  version = process.env.RIFT_REF || execFileSync('git', ['-C', riftRoot, 'describe', '--tags', '--always', '--dirty'], { encoding: 'utf8' }).trim();
} catch {}

function page(title, description, content, maxHeadingLevel = 2) {
  return `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: ${maxHeadingLevel}
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: \`${version}\`.

${content}
`;
}

function commandPage(title, description, intro, pageCommands, related = []) {
  const seeAlso = related.length ? `\n\n## See also\n\n${related.map(([label, href]) => `- [${label}](${href})`).join('\n')}` : '';
  return page(title, description, `${intro}\n\n${pageCommands.map((command) => card(command)).join('\n\n')}${seeAlso}`);
}

const cliRoot = path.join(docsRoot, 'src/content/docs/reference/cli');
const executeRoot = path.join(cliRoot, 'execute');
const queryRoot = path.join(cliRoot, 'query');
const subscribeRoot = path.join(cliRoot, 'subscribe');
const serviceRoot = path.join(cliRoot, 'service');
for (const directory of [executeRoot, queryRoot, subscribeRoot, serviceRoot]) fs.mkdirSync(directory, { recursive: true });
const oldSinglePage = path.join(docsRoot, 'src/content/docs/reference/cli.md');
if (fs.existsSync(oldSinglePage)) fs.rmSync(oldSinglePage);

const overview = page('CLI reference', 'Inspect and control Rift from Terminal or a script.', `Use \`rift-cli\` to inspect Rift, control windows and workspaces, change runtime settings, and subscribe to events. Every command, description, argument, and option in this reference comes directly from the checked-out CLI.

:::tip[Explore from Terminal]
Add \`--help\` at any level to see what comes next. For example, \`rift-cli execute window --help\` lists every window action.
:::

## Choose an area

| Area | Use it to |
| --- | --- |
| [Queries](/rift-docs/reference/cli/query/) | Inspect workspaces, windows, displays, layouts, and metrics |
| [Execute](/rift-docs/reference/cli/execute/) | Control windows, workspaces, layouts, configuration, displays, and macOS Spaces |
| [Subscriptions](/rift-docs/reference/cli/subscribe/) | Stream events or run a command when Rift changes |
| [Service](/rift-docs/reference/cli/service/) | Find the corresponding \`rift service\` commands |

## Quick examples

\`\`\`sh
# See the windows Rift is managing
rift-cli query windows

# Focus the window to the left
rift-cli execute window focus left

# Move to the next virtual workspace
rift-cli execute workspace next

# Reload the configuration file
rift-cli execute config reload
\`\`\`

Queries print JSON; set \`RIFT_CLI_PRETTY=1\` for readable output. Commands under \`execute\` act on the running Rift instance. Virtual workspace indexes are zero-based, so \`0\` means the first workspace.

## Reading command values

Command synopses use angle brackets for required values and square brackets for optional values:

<div class="cli-value-legend"><span><code>&lt;VALUE&gt;</code> Required</span><span><code>[VALUE]</code> Optional</span><span><a class="cli-value-link" href="#value-direction"><code>&lt;DIRECTION&gt;</code></a> Linked to its definition</span></div>

**Underlined placeholders are links.** Select one in any synopsis or parameter list—such as <a class="cli-value-link" href="#value-direction"><code>&lt;DIRECTION&gt;</code></a>—to see its accepted values or identifier format.

${valueReferenceMarkup}

## See also

- [Window management](/rift-docs/guides/window-management/)
- [Virtual workspaces](/rift-docs/guides/workspaces/)
- [Keybindings](/rift-docs/guides/keybindings/)
- [Configuration reference](/rift-docs/reference/configuration/)
`);
fs.writeFileSync(path.join(cliRoot, 'index.md'), overview);

const direct = (area) => commands.filter((command) => command.parts[0] === area && command.parts.length === 2);
function generateArea(area, directory, title, description, intro, related = []) {
  const areaCommands = direct(area);
  fs.writeFileSync(path.join(directory, 'index.md'), commandPage(title, description, intro, areaCommands, related));
  for (const file of fs.readdirSync(directory)) {
    if (file.endsWith('.md') && file !== 'index.md') fs.rmSync(path.join(directory, file));
  }
}

generateArea(
  'query', queryRoot, 'Query commands', 'Inspect Rift state as JSON.',
  'Queries read state without changing it. Set `RIFT_CLI_PRETTY=1` to format returned JSON for reading.',
  [['Execute commands', '/rift-docs/reference/cli/execute/'], ['Subscriptions', '/rift-docs/reference/cli/subscribe/']],
);
generateArea(
  'subscribe', subscribeRoot, 'Subscriptions', 'Stream Rift events or run commands when state changes.',
  'Subscribe to events over Mach IPC, or ask Rift to run another command when an event occurs.',
  [['Queries', '/rift-docs/reference/cli/query/'], ['Integrations', '/rift-docs/ecosystem/integrations/']],
);
generateArea(
  'service', serviceRoot, 'Service commands', 'Manage Rift’s per-user launchd service.',
  ':::note[Use the `rift` binary]\nThese legacy `rift-cli service` names redirect you to the `rift` binary. Use `rift service install`, `start`, `restart`, `stop`, or `uninstall`.\n:::',
  [['Installation', '/rift-docs/installation/'], ['CLI overview', '/rift-docs/reference/cli/']],
);

const executeGroups = direct('execute').filter((command) => command.children.length);
const executeOther = direct('execute').filter((command) => !command.children.length);
const executeRows = executeGroups.map((command) =>
  `| [${command.parts.at(-1)}](/rift-docs/reference/cli/execute/${command.parts.at(-1)}/) | ${readableDescription(command.description)} |`).join('\n');
fs.writeFileSync(path.join(executeRoot, 'index.md'), page(
  'Execute commands',
  'Control the running Rift instance.',
  `Commands under \`execute\` change windows, workspaces, layouts, and runtime state.

## Choose a command group

| Group | Use it to |
| --- | --- |
${executeRows}
| [Other actions](/rift-docs/reference/cli/execute/other/) | Save or restore layouts, inspect debug state, and exit Rift |

## See also

- [Queries](/rift-docs/reference/cli/query/)
- [CLI overview](/rift-docs/reference/cli/)
`,
));

for (const group of executeGroups) {
  const name = group.parts.at(-1);
  const children = commands.filter((command) => command.parts.length === 3 && command.parts[0] === 'execute' && command.parts[1] === name);
  const title = ({ workspace: 'Workspace commands', config: 'Configuration commands', display: 'Display commands', space: 'macOS Space commands', layout: 'Layout commands', window: 'Window commands', 'mission-control': 'Mission Control commands' })[name] || `${name} commands`;
  fs.writeFileSync(path.join(executeRoot, `${name}.md`), commandPage(
    title,
    readableDescription(group.description),
    `${sentence(group.description)} All commands act on the running Rift instance.`,
    children,
    [['Execute overview', '/rift-docs/reference/cli/execute/'], ['CLI overview', '/rift-docs/reference/cli/']],
  ));
}
fs.writeFileSync(path.join(executeRoot, 'other.md'), commandPage(
  'Other actions',
  'Save layouts, inspect Rift, or exit.',
  'These commands work with Rift’s complete runtime or saved layout state rather than one command group.',
  executeOther,
  [['Execute overview', '/rift-docs/reference/cli/execute/'], ['Configuration commands', '/rift-docs/reference/cli/execute/config/']],
));

const pageCount = 6 + executeGroups.length;
console.log(`Generated ${pageCount} CLI reference pages with ${commands.length - 1} commands from ${executable} (${version}).`);

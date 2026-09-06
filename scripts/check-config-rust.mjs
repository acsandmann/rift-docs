import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { parse, stringify } from 'smol-toml';

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const riftRoot = path.resolve(process.env.RIFT_ROOT || path.join(docsRoot, '..'));
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'rift-docs-config-'));
try {
  const output = execFileSync('cargo', ['build', '--lib', '--message-format=json'], {
    cwd: riftRoot, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, stdio: ['ignore', 'pipe', 'inherit'],
  });
  const artifacts = output.trim().split('\n').filter(Boolean).map((line) => JSON.parse(line));
  const library = artifacts.findLast((item) => item.reason === 'compiler-artifact' && item.target.name === 'rift_wm')
    ?.filenames.find((file) => file.endsWith('.rlib'));
  if (!library) throw new Error('Cargo did not produce the Rift library');
  const binary = path.join(temporary, 'validate');
  execFileSync('rustc', [
    '--edition=2024', path.join(docsRoot, 'scripts/check-config-rust.rs'),
    '--extern', `rift_wm=${library}`, '-L', `dependency=${path.join(path.dirname(library), 'deps')}`,
    '-L', 'framework=/System/Library/PrivateFrameworks', '-o', binary,
  ], { stdio: 'inherit' });
  const files = fs.readdirSync(path.join(docsRoot, 'src/content/docs'), { recursive: true })
    .filter((file) => file.endsWith('.md'));
  let count = 0;
  for (const file of files) {
    const source = fs.readFileSync(path.join(docsRoot, 'src/content/docs', file), 'utf8');
    let index = 0;
    for (const match of source.matchAll(/```toml\n([\s\S]*?)```/g)) {
      index++;
      const config = parse(match[1]);
      // Fragments inherit the required root tables; all supplied fields and
      // command payloads still go through Rift's real parser and validation.
      config.settings ??= {};
      config.keys ??= {};
      const fixture = path.join(temporary, `${count++}.toml`);
      fs.writeFileSync(fixture, stringify(config));
      try { execFileSync(binary, [fixture], { stdio: ['ignore', 'pipe', 'pipe'] }); }
      catch (error) { throw new Error(`${file}, TOML example ${index}:\n${error.stderr}`, { cause: error }); }
    }
  }
  console.log(`Validated ${count} TOML examples with Rift's Rust parser and Config::validate().`);
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}

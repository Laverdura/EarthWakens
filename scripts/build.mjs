import { mkdir, rm, cp, readFile, writeFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const entries = await readdir(root, { withFileTypes: true });
const pages = entries.filter(entry => entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'preview.html').map(entry => entry.name).sort();
if (!pages.includes('index.html') || !pages.includes('story-introduction.html')) {
  throw new Error('Keep index.html and story-introduction.html together in the repository root.');
}

// Check every published page before replacing the build output.
for (const name of pages) {
  const html = await readFile(path.join(root, name), 'utf8');
  for (const [, attrs, code] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(attrs) || !code.trim() || /\btype\s*=\s*["'](?:application\/ld\+json|application\/json|importmap)["']/i.test(attrs)) continue;
    const args = /\btype\s*=\s*["']module["']/i.test(attrs) ? ['--input-type=module', '--check'] : ['--check'];
    const check = spawnSync(process.execPath, args, { input: code, encoding: 'utf8' });
    if (check.status !== 0) throw new Error(`JavaScript error in ${name}: ${check.stderr || check.error || 'syntax check failed'}`);
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of pages) await cp(path.join(root, name), path.join(output, name));
await cp(path.join(root, 'static'), path.join(output, 'static'), { recursive: true });
if (entries.some(entry => entry.name === 'favicon.svg' && entry.isFile())) {
  await cp(path.join(root, 'favicon.svg'), path.join(output, 'favicon.svg'));
}

// Retain the revision expected by the preview's refresh script.
let previous = {};
try { previous = JSON.parse(await readFile(path.join(root, 'version.json'), 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const hashes = {};
async function hashFiles(directory, prefix = '') {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) await hashFiles(path.join(directory, entry.name), relative + '/');
    else if (entry.isFile()) hashes[relative] = createHash('sha256').update(await readFile(path.join(directory, entry.name))).digest('hex');
  }
}
await hashFiles(output);
const version = createHash('sha256').update(JSON.stringify(hashes)).digest('hex');
await writeFile(path.join(output, 'version.json'), JSON.stringify({ ...previous, brand: 'Earth Wakens', version, files: hashes }, null, 2) + '\n');
console.log(`Built ${pages.length} HTML pages, including story-introduction.html, plus all static assets.`);

import { mkdir, rm, cp, readFile, writeFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
for (const [,attrs,code] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)) {
  if (/\bsrc\s*=/.test(attrs) || !code.trim()) continue;
  const check = spawnSync(process.execPath, ['--check','--input-type=module'], { input: code, encoding: 'utf8' });
  if (check.status !== 0) throw new Error(check.stderr);
}
const assets = (await readdir(path.join(root, 'static'))).sort();
const referenced = [...new Set([...html.matchAll(/[`"']([^`"'<>\s/]+\.(?:png|jpe?g|webp|svg))[`"']/g)].map(m=>m[1]))];
for (const name of referenced) {
  if (name !== 'favicon.svg' && !assets.includes(name)) throw new Error('Missing image: '+name);
}
const output = path.join(root,'dist');
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
const hashes = {};
const publishedAssets = assets.filter(name => referenced.includes(name) || html.includes("static/" + name));
for (const name of ['index.html','favicon.svg',...publishedAssets.map(n=>'static/'+n)]) {
  const bytes=await readFile(path.join(root,name));
  hashes[name]=createHash('sha256').update(bytes).digest('hex');
  await cp(path.join(root,name),path.join(output,name),{recursive:true});
}
const preview = '<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=./index.html"><title>Earth Wakens</title><a href="./index.html">Open Earth Wakens</a>';
await writeFile(path.join(output, 'preview.html'), preview);
hashes['preview.html'] = createHash('sha256').update(preview).digest('hex');
const version=createHash('sha256').update(JSON.stringify(hashes)).digest('hex').slice(0,16);
await writeFile(path.join(output,'version.json'),JSON.stringify({brand:'Earth Wakens',version,files:hashes},null,2)+'\n');
console.log(`Verified ${Object.keys(hashes).length} files; release ${version}; publish directory: dist`);

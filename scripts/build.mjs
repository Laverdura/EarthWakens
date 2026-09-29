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
for (const name of ['index.html','preview.html','favicon.svg',...assets.map(n=>'static/'+n)]) {
  const bytes=await readFile(path.join(root,name));
  hashes[name]=createHash('sha256').update(bytes).digest('hex');
  await cp(path.join(root,name),path.join(output,name),{recursive:true});
}
const version=createHash('sha256').update(JSON.stringify(hashes)).digest('hex').slice(0,16);
await writeFile(path.join(output,'version.json'),JSON.stringify({brand:'Earth Wakens',version,files:hashes},null,2)+'\n');
console.log(`Verified ${Object.keys(hashes).length} files; release ${version}; publish directory: dist`);

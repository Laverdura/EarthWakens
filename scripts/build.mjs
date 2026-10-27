import { readdir, mkdir, readFile, writeFile, cp, rm, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
// Only the approved M2 pages are entry points. Older repository pages remain in Git.
const pages = ['index.html','story-introduction.html','beneath-the-living-world.html','angels.html','game.html','game-earth-spirit.html','game-spirit.html','game-stop.html'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const availableAssets = [];
const assets = [
  "dead-and-living.png",
  "earth-spirit-base-soil-20261020.png",
  "earth-spirit-moss-clean-20261020.png",
  "earth-spirit-phone.png",
  "earth-spirit-vessels-moss-20261020.png",
  "earth-wakens-bark-bone-20261026.png",
  "earth-wakens-joined-doors-roots-20261025.png",
  "earth-wakens-joined-doors-roots-hand-clear-20261025.png",
  "earth-wakens-larry-numbered-artwork-20261019-v2.png",
  "earth-wakens-original-color-only.png",
  "earth-wakens-root-photo-only-20261019.png",
  "earthwakens-fissure2.jpg",
  "earthwakens-logo-transparent.png",
  "earthwakens-root-hands.png",
  "evolution/credits.json",
  "evolution/early-hominin.webp",
  "moon-shot.png",
  "nature-root-fingers-20261024.png",
  "nature-root-hand-base-20261024.jpeg",
  "poison-card-blood.png",
  "poison-card-snake-inward.png",
  "poison-card-snake-midway.png",
  "poison-card.jpg",
  "root-dissolve.css",
  "root-dissolve.js",
  "root-story.css",
  "story-bright-wakens.png",
  "story-pages.css",
  "wakened-card-preview.svg"
];
async function walk(dir, prefix='') {
 for (const entry of await readdir(dir,{withFileTypes:true})) {
  if (entry.name.startsWith('.')) continue;
  const name=prefix+entry.name;
  if(entry.isDirectory()) await walk(path.join(dir,entry.name),name+'/');
  else if(entry.isFile()) availableAssets.push(name);
 }
}
await walk(path.join(root,'static'));
for (const name of assets) if (!availableAssets.includes(name)) throw new Error(`Missing approved M2 asset static/${name}`);
// Fail before publishing if any literal static reference is missing or mis-capitalized.
for(const name of [...pages,...assets.filter(n=>/\.(css|js|svg)$/.test(n)).map(n=>'static/'+n)]) {
 const source=await readFile(path.join(root,name),'utf8');
 for(const m of source.matchAll(/(?:\/?static\/)([A-Za-z0-9_./ -]+\.(?:png|jpe?g|webp|gif|svg|css|js|json))/g)) {
  const asset=m[1];
  if(!assets.includes(asset)) throw new Error(`${name}: missing or case-mismatched static/${asset}`);
 }
 if(name.endsWith('.html')) for(const [,attrs,code] of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
  if(/\bsrc\s*=/.test(attrs)||!code.trim()||/application\/(?:ld\+json|json)|importmap/.test(attrs)) continue;
  const checked=spawnSync(process.execPath,[...(/type\s*=\s*["']module/.test(attrs)?['--input-type=module']:[]),'--check'],{input:code,encoding:'utf8'});
  if(checked.status!==0) throw new Error(`${name}: ${checked.stderr||'invalid JavaScript'}`);
 }
}
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
for (const name of assets) {
 const destination=path.join(out,'static',name);
 await mkdir(path.dirname(destination),{recursive:true});
 await cp(path.join(root,'static',name),destination);
}
for(const name of pages) {
 let html=await readFile(path.join(root,name),'utf8');
 // Cache keys change with CSS/JS contents; the design and writing are untouched.
 for(const m of [...html.matchAll(/((?:href|src)=["'])(static\/[^"'?]+\.(?:css|js))(["'])/g)]) {
  const digest=hash(await readFile(path.join(root,m[2]))).slice(0,12);
  html=html.replaceAll(m[0],m[1]+m[2]+'?v='+digest+m[3]);
 }
 await writeFile(path.join(out,name),html);
}
await cp(path.join(root,'favicon.svg'),path.join(out,'favicon.svg'));
await cp(path.join(root,'.htaccess'),path.join(out,'.htaccess'));
let previous={};try{previous=JSON.parse(await readFile(path.join(root,'version.json'),'utf8'));}catch{}
const files={};
async function manifest(dir,prefix='') {
 for(const entry of (await readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))) {
  const name=prefix+entry.name;
  if(entry.isDirectory()) await manifest(path.join(dir,entry.name),name+'/');
  else files[name]=hash(await readFile(path.join(dir,entry.name)));
 }
}
await manifest(out);
await writeFile(path.join(out,'version.json'),JSON.stringify({...previous,brand:'Earth Wakens',release:'M2-Funky-Junky-deployment-repair-2026-10-27',version:hash(JSON.stringify(files)),files},null,2)+'\n');
console.log(`Validated and built ${pages.length} approved pages and ${assets.length} assets in dist/.`);

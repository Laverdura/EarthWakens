import {mkdir,readFile,stat,cp,rm,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
const files=[
  ".htaccess",
  "angels.html",
  "assets/final-master-background.png",
  "assets/final-master-door-front.png",
  "assets/latest/front-left-lock.png",
  "assets/latest/front-right-lock.png",
  "assets/latest/layer-5.png",
  "assets/original-left-door-back.png",
  "assets/original-left-steel-edge.png",
  "assets/original-right-door-back.png",
  "assets/original-right-steel-edge.png",
  "assets/sequence/phone-scene-natural-water-v31.webp",
  "beneath-the-living-world.html",
  "composition-review.css",
  "composition-review.js",
  "favicon.svg",
  "final-landing.css",
  "game-earth-spirit.html",
  "game-spirit.html",
  "game-stop.html",
  "game.html",
  "index.html",
  "layered-art.css",
  "reference-entrance.css",
  "spread-hand-motion.js",
  "static/card-preview-gallery.css",
  "static/earth-spirit-vessels-moss-20261020.png",
  "static/earth-wakens-bg-low.jpg",
  "static/earth-wakens-chapter-theme.css",
  "static/earthwakens-logo-transparent.png",
  "static/hands-rocked-the-earth-copy.png",
  "static/poison-card-snake-midway.png",
  "static/redesign-theme.css",
  "static/root-dissolve.css",
  "static/root-dissolve.js",
  "static/root-story.css",
  "static/site-background-warm.jpg",
  "static/site-wide-theme.css",
  "static/story-pages.css",
  "static/wakened-card-preview.svg",
  "story-introduction.html",
  "story.html",
  "under-door.css"
];
let bytes=0;
for(const file of files){const info=await stat(path.join(root,file));if(!info.isFile())throw Error('Not a file: '+file);bytes+=info.size;}
if(bytes>49900000)throw Error('IONOS publishing limit exceeded: '+bytes+' bytes');
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
const hashes={};
for(const file of files){const destination=path.join(output,file);await mkdir(path.dirname(destination),{recursive:true});await cp(path.join(root,file),destination);hashes[file]=createHash('sha256').update(await readFile(destination)).digest('hex');}
const htaccess=path.join(output,'.htaccess');
await writeFile(htaccess,(await readFile(htaccess,'utf8'))+'\n<IfModule mod_headers.c>\n<FilesMatch "\\.(html|json)$">\nHeader set Cache-Control "no-cache, must-revalidate"\n</FilesMatch>\n</IfModule>\n');
hashes['.htaccess']=createHash('sha256').update(await readFile(htaccess)).digest('hex');
await writeFile(path.join(output,'version.json'),JSON.stringify({brand:'Earth Wakens',release:'phone-layout-2026-11-02',files:hashes},null,2)+'\n');
console.log('Built '+files.length+' files; '+(bytes/1000000).toFixed(2)+' MB, below IONOS quota.');

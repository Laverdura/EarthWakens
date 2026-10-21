(()=>{
const seen=new WeakSet();
function imageReady(img){if(img.complete&&img.naturalWidth>0)return Promise.resolve();return new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});}
function beginWhenVisible(root){if(!('IntersectionObserver' in window)){root.classList.add('ew-root-ready');return;}const visibility=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){root.classList.add('ew-root-ready');visibility.disconnect();}},{threshold:0.15});visibility.observe(root);}
function scan(){document.querySelectorAll('[data-root-dissolve]').forEach(root=>{if(seen.has(root))return;seen.add(root);const images=Array.from(root.querySelectorAll('img'));Promise.all(images.map(imageReady)).then(()=>{if(root.isConnected&&images.every(img=>img.naturalWidth>0))beginWhenVisible(root);});});}
document.addEventListener('click',event=>{const button=event.target.closest('.ew-root-pause');if(!button)return;const root=button.closest('figure').querySelector('[data-root-dissolve]');const paused=root.classList.toggle('ew-root-paused');button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Resume image fade':'Pause image fade';});
new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});scan();
})();

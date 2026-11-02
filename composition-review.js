(async()=>{const stage=document.getElementById('entrance'),button=document.getElementById('door-toggle'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let timer,reach,motion;
 await Promise.all([...stage.querySelectorAll('img')].map(im=>im.decode().catch(()=>{})));try{motion=await window.createSpreadHandMotion(stage)}catch(error){console.error('Spread hand:',error)}
 function open(){stage.classList.add('is-open');reach=setTimeout(()=>reduced.matches?motion?.finish():motion?.start(),reduced.matches?0:3900)}
 function reset(){clearTimeout(timer);clearTimeout(reach);motion?.reset();stage.classList.remove('is-open');void stage.offsetWidth;timer=setTimeout(open,reduced.matches?0:500)}
 button.addEventListener('click',reset);reduced.addEventListener('change',()=>{if(reduced.matches)motion?.finish()});timer=setTimeout(open,900);
})();

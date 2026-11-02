/* Deform the pictured hand continuously; the opaque scene underneath moves with it. */
window.createSpreadHandMotion=async function(stage){
 const image=stage.querySelector('.psd6-finished-art');await image.decode();
 const canvas=document.createElement('canvas');canvas.width=900;canvas.height=720;canvas.className='spread-hand-motion';canvas.setAttribute('aria-hidden','true');
 Object.assign(canvas.style,{position:'absolute',left:(880/2089*100)+'%',top:(2100/2820*100)+'%',width:(900/2089*100)+'%',height:(720/2820*100)+'%',pointerEvents:'none'});
 const gl=canvas.getContext('webgl',{alpha:false,antialias:false});if(!gl)return{reset(){},start(){},finish(){}};
 const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
 const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,'attribute vec2 p;varying vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}'));
 gl.attachShader(program,shader(gl.FRAGMENT_SHADER,`precision highp float;varying vec2 uv;uniform sampler2D picture;uniform float progress;
 float influence(vec2 p){float x=smoothstep(920.,1080.,p.x)*(1.-smoothstep(1600.,1745.,p.x));float y=smoothstep(2160.,2450.,p.y)*(1.-smoothstep(2700.,2790.,p.y));return x*y;}
 void main(){vec2 target=vec2(880.+uv.x*900.,2100.+(1.-uv.y)*720.);vec2 source=target;
 for(int i=0;i<6;i++){source=target+vec2(-8.,62.)*influence(source)*(1.-progress);}
 gl_FragColor=texture2D(picture,vec2(source.x/2089.,1.-source.y/2820.));}`));
 gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const p=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
 const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,gl.NONE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);gl.uniform1i(gl.getUniformLocation(program,'picture'),0);
 const location=gl.getUniformLocation(program,'progress');let frame=0,elapsed=0,origin=0,running=false;
 const paint=p=>{gl.uniform1f(location,p);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)};
 function stop(){if(running)elapsed+=performance.now()-origin;running=false;cancelAnimationFrame(frame)}
 function tick(now){if(!running)return;const t=Math.min((elapsed+now-origin)/12000,1);paint((1.-Math.cos(t*Math.PI))*.5);if(t<1)frame=requestAnimationFrame(tick);else{running=false;elapsed=12000;canvas.dataset.motion='held'}}
 function start(){if(running||elapsed>=12000)return;origin=performance.now();running=true;canvas.dataset.motion='lowering';frame=requestAnimationFrame(tick)}
 image.parentElement.append(canvas);paint(0);canvas.dataset.motion='ready';
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else if(stage.classList.contains('is-open'))start()});
 return{reset(){stop();elapsed=0;paint(0);canvas.dataset.motion='ready'},start,finish(){stop();elapsed=12000;paint(1);canvas.dataset.motion='held'}};
};

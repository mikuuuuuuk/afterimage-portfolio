const journey = document.querySelector('#journey');
const scenes = [...document.querySelectorAll('.scene')];
const cursor = document.querySelector('.custom-cursor');
const chapterCount = document.querySelector('#chapterCount');
const progress = document.querySelector('#progress');
let activeScene = scenes[0];
let pointer = { x: innerWidth / 2, y: innerHeight / 2, px: innerWidth / 2, py: innerHeight / 2, down: false };
let audioContext = null, audioMaster = null, soundEnabled = true;
let soundtrack = null, soundRequest = 0;

function prepareAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return false;
  if (audioContext) return true;
  audioContext = new AudioContextClass();
  audioMaster = audioContext.createGain(); audioMaster.gain.value = 0; audioMaster.connect(audioContext.destination);
  soundtrack = new Audio('assets/audio/meanwhile-scott-buckley.mp3');
  soundtrack.preload = 'none'; soundtrack.loop = true;
  const musicSource = audioContext.createMediaElementSource(soundtrack);
  const musicGain = audioContext.createGain(); musicGain.gain.value = .36;
  musicSource.connect(musicGain); musicGain.connect(audioMaster);
  return true;
}
let musicPlaying=false,musicStarting=false;
const soundButton=document.querySelector('#soundToggle');
function soundUI(){soundButton.textContent=soundEnabled?'SOUND  ON':'SOUND  OFF';soundButton.setAttribute('aria-pressed',String(soundEnabled));soundButton.title=soundEnabled?'Music starts with your first touch — Meanwhile / Scott Buckley':'Enable music';}
async function startMusic(){
  if(!soundEnabled||musicPlaying||musicStarting||!prepareAudio())return;
  const request=++soundRequest;musicStarting=true;
  try{await Promise.all([audioContext.resume(),soundtrack.play()]);if(request!==soundRequest||!soundEnabled)return;musicPlaying=true;audioMaster.gain.setTargetAtTime(.64,audioContext.currentTime,.35);soundButton.title='Meanwhile — Scott Buckley / CC BY 4.0';}
  catch(error){if(error.name!=='NotAllowedError')soundButton.title='Tap SOUND to retry music';}
  finally{musicStarting=false;}
}
function toggleSound(){soundEnabled=!soundEnabled;soundUI();if(soundEnabled)startMusic();else{++soundRequest;musicPlaying=false;if(audioContext){audioMaster.gain.setTargetAtTime(0,audioContext.currentTime,.12);setTimeout(()=>{if(!soundEnabled)soundtrack.pause();},450);}}}
soundUI();
addEventListener('pointerdown',event=>{if(!event.target.closest('#soundToggle'))startMusic();});
addEventListener('keydown',event=>{if(['Enter',' ','ArrowRight','PageDown'].includes(event.key)&&!event.target.closest('#soundToggle'))startMusic();});
function playImpactSfx(energy=.5) {
  if(!soundEnabled||!audioContext)return;
  const now=audioContext.currentTime,osc=audioContext.createOscillator(),gain=audioContext.createGain();
  osc.type='triangle';osc.frequency.setValueAtTime(82+energy*90,now);osc.frequency.exponentialRampToValueAtTime(34,now+.2);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.12*energy+.012,now+.008);gain.gain.exponentialRampToValueAtTime(.0001,now+.23);
  osc.connect(gain);gain.connect(audioMaster);osc.start(now);osc.stop(now+.24);
}
function playPulseSfx() {
  if(!soundEnabled||!audioContext)return;
  const now=audioContext.currentTime,osc=audioContext.createOscillator(),gain=audioContext.createGain();
  osc.type='sine';osc.frequency.setValueAtTime(520,now);osc.frequency.exponentialRampToValueAtTime(185,now+.52);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.055,now+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+.58);
  osc.connect(gain);gain.connect(audioMaster);osc.start(now);osc.stop(now+.6);
}
function playPortalSfx() {
  if(!soundEnabled||!audioContext)return;
  const now=audioContext.currentTime,source=audioContext.createBufferSource(),buffer=audioContext.createBuffer(1,audioContext.sampleRate,audioContext.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
  const filter=audioContext.createBiquadFilter(),gain=audioContext.createGain();source.buffer=buffer;filter.type='bandpass';filter.frequency.setValueAtTime(900,now);filter.frequency.exponentialRampToValueAtTime(120,now+1.2);filter.Q.value=.7;
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.16,now+.12);gain.gain.exponentialRampToValueAtTime(.0001,now+1.3);
  source.connect(filter);filter.connect(gain);gain.connect(audioMaster);source.start(now);source.stop(now+1.35);
}
document.querySelector('#soundToggle').addEventListener('click',toggleSound);

function bindCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let width = 1, height = 1, dpr = 1;
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width); height = Math.max(1, rect.height);
    dpr = Math.min(devicePixelRatio || 1, 1.7);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();
  return { ctx, resize, get width() { return width; }, get height() { return height; }, get dpr() { return dpr; } };
}

const thresholdScene = document.querySelector('#threshold');

// Pointer splats become a small fluid-like field; held movement creates a rotating current.
const fluidCanvas = document.querySelector('#fluidCanvas');
const fluid = bindCanvas(fluidCanvas);
let dye = [];
const fluidScene = document.querySelector('#fluidScene');
const fluidPointer = { x: 0, y: 0, px: 0, py: 0 };
function fluidPoint(event) {
  const rect = fluidCanvas.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}
fluidCanvas.addEventListener('pointermove', event => {
  if (activeScene !== fluidScene) return;
  const p = fluidPoint(event);
  fluidPointer.px = fluidPointer.x; fluidPointer.py = fluidPointer.y; fluidPointer.x = p.x; fluidPointer.y = p.y;
  const speed = Math.hypot(fluidPointer.x - fluidPointer.px, fluidPointer.y - fluidPointer.py);
  const count = pointer.down ? 12 : Math.min(7, Math.ceil(speed / 10));
  for (let i = 0; i < count; i++) dye.push({
    x: p.x + (Math.random() - .5) * 28, y: p.y + (Math.random() - .5) * 28,
    vx: (fluidPointer.x - fluidPointer.px) * .2 + (Math.random() - .5) * 1.1,
    vy: (fluidPointer.y - fluidPointer.py) * .2 + (Math.random() - .5) * 1.1,
    life: .78 + Math.random() * .22, size: 1 + Math.random() * 2.6, hue: Math.random() > .7 ? 75 : 157
  });
  if (dye.length > 540) dye.splice(0, dye.length - 540);
  const typeRect = fluidScene.querySelector('.reveal-title').getBoundingClientRect();
  fluidScene.style.setProperty('--reveal-x', `${event.clientX - typeRect.left}px`);
  fluidScene.style.setProperty('--reveal-y', `${event.clientY - typeRect.top}px`);
});
fluidCanvas.addEventListener('pointerdown', event => { if (activeScene === fluidScene) { pointer.down = true; fluidCanvas.setPointerCapture(event.pointerId); } });
fluidCanvas.addEventListener('pointerup', () => pointer.down = false);
fluidCanvas.addEventListener('pointercancel', () => pointer.down = false);
function drawFluid() {
  if(activeScene!==fluidScene||window.WorldFX.suspendScene){requestAnimationFrame(drawFluid);return;}
  const { ctx, width, height } = fluid;
  ctx.clearRect(0, 0, width, height);
  dye.forEach(p => {
    const dx = fluidPointer.x - p.x, dy = fluidPointer.y - p.y, dist = Math.hypot(dx, dy) || 1;
    if (dist < 250) {
      const f = 1 - dist / 250;
      p.vx += (dx / dist * .085 - dy / dist * (pointer.down ? .21 : .045)) * f;
      p.vy += (dy / dist * .085 + dx / dist * (pointer.down ? .21 : .045)) * f;
    }
    const ox = p.x, oy = p.y;
    p.x += p.vx; p.y += p.vy; p.vx *= .973; p.vy *= .973; p.life -= .007;
    ctx.lineCap = 'round'; ctx.lineWidth = p.size * (pointer.down ? 1.2 : 1);
    ctx.strokeStyle = `hsla(${p.hue},60%,76%,${p.life * .38})`;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(p.x, p.y); ctx.stroke();
    ctx.fillStyle = `hsla(${p.hue},66%,77%,${p.life * .35})`;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 1.3, 0, Math.PI * 2); ctx.fill();
  });
  dye = dye.filter(p => p.life > 0);
  requestAnimationFrame(drawFluid);
}
drawFluid();

// Meshed planets, 3D rigid-body collisions, a floor plane, and elastic rebound.
const gravityCanvas = document.querySelector('#gravityCanvas');
const gravityScene = document.querySelector('#gravityScene');
const impactReadout = document.querySelector('#collisionCount');
const gl = gravityCanvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false, depth: true });
let gravityWidth = 1, gravityHeight = 1, gravityDpr = 1, impacts = 0, grabbed = null, dragSample = null, planetPointerId = null;
const bodies = [], focal = 1050;
let rebuildFloor=()=>{};

function makeBodies() {
  const w = gravityWidth, h = gravityHeight, ground = h * .24, radiusScale = Math.min(1, w / 960);
  const specs = [
    [-1.02,0,-44,58,[.12,.62,.78],0,0],[0,0,0,66,[.91,.55,.31],1,0],[1.02,0,44,54,[.67,.49,.91],2,0],
    [-.66,1,-30,62,[.27,.76,.68],0,0],[.66,1,30,57,[.91,.78,.42],1,0],[0,1,0,48,[.88,.43,.50],2,0],
    [0,2,0,68,[.40,.58,.90],0,1]
  ];
  bodies.splice(0,bodies.length,...specs.map(([slot,layer,z,r,color,type,ring],i)=>({
    x:w*.12+slot*78*radiusScale,y:ground-r*radiusScale-layer*108*radiusScale,z,vx:i%2?-.12:.1,vy:0,vz:(i%3-1)*.025,
    r:r*radiusScale,color,type,ring:!!ring,angle:Math.random()*6.28,hitLock:0
  })));
}
function resizeGravity() {
  const rect=gravityCanvas.getBoundingClientRect();
  const oldW=gravityWidth,oldH=gravityHeight;
  if(Math.round(rect.width)===Math.round(oldW)&&Math.round(rect.height)===Math.round(oldH))return;
  gravityWidth=Math.max(1,rect.width);gravityHeight=Math.max(1,rect.height);
  gravityDpr=Math.min(devicePixelRatio||1,1.55);
  gravityCanvas.width=Math.round(gravityWidth*gravityDpr);gravityCanvas.height=Math.round(gravityHeight*gravityDpr);
  if(gl)gl.viewport(0,0,gravityCanvas.width,gravityCanvas.height);
  rebuildFloor();
  if(!bodies.length)makeBodies();else{
    const factor=Math.min(1,gravityWidth/960)/Math.min(1,oldW/960);
    for(const b of bodies){b.x*=gravityWidth/oldW;b.y*=gravityHeight/oldH;b.r*=factor;}
  }
}
new ResizeObserver(resizeGravity).observe(gravityCanvas.parentElement);resizeGravity();
function project(body) {
  const scale=focal/(focal+body.z);
  return{x:gravityWidth/2+body.x*scale,y:gravityHeight/2+body.y*scale,r:body.r*scale,scale};
}
function canvasPoint(canvas,event) {
  const rect=canvas.getBoundingClientRect();
  return{x:event.clientX-rect.left,y:event.clientY-rect.top};
}
gravityCanvas.addEventListener('pointerdown',event=>{
  if(activeScene!==gravityScene||grabbed||event.button>0)return;
  event.preventDefault();
  const p=canvasPoint(gravityCanvas,event);
  const padding=event.pointerType==='touch'?12:5;
  const hits=bodies.map(body=>{const q=project(body),distance=Math.hypot(p.x-q.x,p.y-q.y);return{body,q,distance,depth:body.z-Math.sqrt(Math.max(0,body.r*body.r-(distance/q.scale)**2))};});
  const direct=hits.filter(h=>h.distance<=h.q.r).sort((a,b)=>a.depth-b.depth);
  const nearby=hits.filter(h=>h.distance<=h.q.r+padding).sort((a,b)=>(a.distance-a.q.r)-(b.distance-b.q.r));
  const ringHit=hits.find(h=>{if(!h.body.ring)return false;const rx=h.q.r*Math.max(.14,Math.abs(Math.cos(h.body.angle))),r=Math.hypot((p.x-h.q.x)/rx,(p.y-h.q.y)/h.q.r);return r>=1.1&&r<=1.9;});
  grabbed=(direct[0]||ringHit||nearby[0])?.body||null;
  if(!grabbed)return;
  planetPointerId=event.pointerId;
  gravityCanvas.classList.add('is-grabbing');
  grabbed.vx=grabbed.vy=grabbed.vz=0;
  const projected=project(grabbed);
  dragSample={x:p.x,y:p.y,t:performance.now(),offsetX:p.x-projected.x,offsetY:p.y-projected.y};
  gravityCanvas.setPointerCapture(event.pointerId);
});
addEventListener('pointermove',event=>{
  if(!grabbed||event.pointerId!==planetPointerId)return;
  event.preventDefault();
  const p=canvasPoint(gravityCanvas,event),now=performance.now(),previousZ=grabbed.z;
  const pointerOffsetY=dragSample?dragSample.offsetY:0,pointerOffsetX=dragSample?dragSample.offsetX:0;
  if(event.shiftKey&&dragSample)grabbed.z=Math.max(-220,Math.min(280,grabbed.z+(p.x-dragSample.x)*1.15));
  const scale=focal/(focal+grabbed.z);
  grabbed.x=(p.x-pointerOffsetX-gravityWidth/2)/scale;
  grabbed.y=(p.y-pointerOffsetY-gravityHeight/2)/scale;
  if(dragSample){
    const dt=Math.max(8,now-dragSample.t);
    grabbed.vx=(p.x-dragSample.x)/dt*15/scale;
    grabbed.vy=(p.y-dragSample.y)/dt*15/scale;grabbed.vz=(grabbed.z-previousZ)/dt*15;
  }
  dragSample={x:p.x,y:p.y,t:now,offsetX:pointerOffsetX,offsetY:pointerOffsetY};
});
function releaseBody(event){
  if(event?.pointerId!==undefined&&planetPointerId!==null&&event.pointerId!==planetPointerId)return;
  const id=planetPointerId;
  if(grabbed){const idle=performance.now()-(dragSample?.t||0)>90;for(const axis of ['vx','vy','vz'])grabbed[axis]=idle?0:Math.max(-22,Math.min(22,grabbed[axis]));}
  grabbed=null;dragSample=null;planetPointerId=null;gravityCanvas.classList.remove('is-grabbing');
  if(id!==null&&gravityCanvas.hasPointerCapture(id))gravityCanvas.releasePointerCapture(id);
}
addEventListener('pointerup',releaseBody);
addEventListener('pointercancel',releaseBody);
gravityCanvas.addEventListener('lostpointercapture',releaseBody);
addEventListener('blur',()=>releaseBody());

function collide(a,b) {
  const dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,distance=Math.hypot(dx,dy,dz)||1,min=a.r+b.r;
  if(distance>=min)return;
  const nx=dx/distance,ny=dy/distance,nz=dz/distance,overlap=min-distance;
  const invA=a===grabbed?0:1/(a.r*a.r*a.r),invB=b===grabbed?0:1/(b.r*b.r*b.r),invSum=invA+invB;
  if(a!==grabbed){a.x-=nx*overlap*invA/invSum;a.y-=ny*overlap*invA/invSum;a.z-=nz*overlap*invA/invSum;}
  if(b!==grabbed){b.x+=nx*overlap*invB/invSum;b.y+=ny*overlap*invB/invSum;b.z+=nz*overlap*invB/invSum;}
  const relative=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny+(b.vz-a.vz)*nz;
  if(relative<-.45){
    const impulse=-(1+.88)*relative/invSum;
    if(a!==grabbed){a.vx-=impulse*invA*nx;a.vy-=impulse*invA*ny;a.vz-=impulse*invA*nz;}
    if(b!==grabbed){b.vx+=impulse*invB*nx;b.vy+=impulse*invB*ny;b.vz+=impulse*invB*nz;}
    const now=performance.now();
    if(now-Math.max(a.hitLock,b.hitLock)>150){
      impacts++;impactReadout.textContent=impacts+' IMPACT'+(impacts===1?'':'S');
      a.hitLock=b.hitLock=now;playImpactSfx(Math.min(1,Math.abs(relative)/18));
    }
  }
}
function stepBodies() {
  if(activeScene!==gravityScene)return;
  const ground=gravityHeight*.24,ceiling=-gravityHeight*.46;
  bodies.forEach(body=>{
    if(body!==grabbed){
      body.vy+=.22;body.x+=body.vx;body.y+=body.vy;body.z+=body.vz;
      body.angle+=.006+Math.hypot(body.vx,body.vy,body.vz)*.0016;
    }
    if(body!==grabbed&&body.y+body.r>ground){body.y=ground-body.r;if(body.vy>1.1)body.vy=-body.vy*.48;else body.vy=0;body.vx*=.988;body.vz*=.988;}
    if(body!==grabbed&&body.y-body.r<ceiling){body.y=ceiling+body.r;if(body.vy<0)body.vy=Math.abs(body.vy)*.18;}
    const q=project(body);
    body.vx*=.998;body.vz*=.998;
    if(q.x<q.r||q.x>gravityWidth-q.r)body.vx*=-.82;
    body.x=Math.max((-gravityWidth/2+body.r)/q.scale,Math.min((gravityWidth/2-body.r)/q.scale,body.x));
    if(Math.abs(body.z)>235)body.vz*=-.72;
    body.z=Math.max(-235,Math.min(235,body.z));
  });
  for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++)collide(bodies[i],bodies[j]);
}
function compileGL(context,vertexSource,fragmentSource) {
  function compile(type,source){
    const shader=context.createShader(type);context.shaderSource(shader,source);context.compileShader(shader);
    if(!context.getShaderParameter(shader,context.COMPILE_STATUS))throw new Error(context.getShaderInfoLog(shader));
    return shader;
  }
  const program=context.createProgram();
  context.attachShader(program,compile(context.VERTEX_SHADER,vertexSource));
  context.attachShader(program,compile(context.FRAGMENT_SHADER,fragmentSource));
  context.linkProgram(program);
  if(!context.getProgramParameter(program,context.LINK_STATUS))throw new Error(context.getProgramInfoLog(program));
  return program;
}
function sphereMesh(lat=56,lon=84) {
  const vertices=[],indices=[];
  for(let y=0;y<=lat;y++){
    const phi=y/lat*Math.PI;
    for(let x=0;x<=lon;x++){
      const theta=x/lon*Math.PI*2,nx=Math.sin(phi)*Math.cos(theta),ny=Math.cos(phi),nz=Math.sin(phi)*Math.sin(theta);
      vertices.push(nx,ny,nz,nx,ny,nz);
    }
  }
  for(let y=0;y<lat;y++)for(let x=0;x<lon;x++){
    const a=y*(lon+1)+x,b=a+lon+1;
    indices.push(a,b,a+1,a+1,b,b+1);
  }
  return{vertices:new Float32Array(vertices),indices:new Uint16Array(indices)};
}
function ringMesh(segments=112) {
  const vertices=[],indices=[];
  for(let i=0;i<=segments;i++){
    const a=i/segments*Math.PI*2,c=Math.cos(a),s=Math.sin(a);
    vertices.push(c*1.18,s*1.18,0,0,0,1,c*1.82,s*1.82,0,0,0,1);
  }
  for(let i=0;i<segments;i++){const a=i*2,b=a+1;indices.push(a,b,a+2,b,b+2,a+2);}
  return{vertices:new Float32Array(vertices),indices:new Uint16Array(indices)};
}
let planetDraw=()=>{};
if(gl){
  const vertexSource=[
    'attribute vec3 aPosition;attribute vec3 aNormal;',
    'uniform vec3 uCenter;uniform float uRadius;uniform float uAngle;uniform vec2 uResolution;uniform float uFocal;',
    'varying vec3 vNormal;varying vec3 vLocal;varying vec3 vWorld;',
    'void main(){float c=cos(uAngle),s=sin(uAngle);',
    'vec3 p=vec3(c*aPosition.x+s*aPosition.z,aPosition.y,-s*aPosition.x+c*aPosition.z);',
    'vec3 n=vec3(c*aNormal.x+s*aNormal.z,aNormal.y,-s*aNormal.x+c*aNormal.z);',
    'vec3 world=uCenter+p*uRadius;float d=uFocal+world.z;float far=5200.,near=2.;',
    'gl_Position=vec4(world.x*2.*uFocal/uResolution.x,world.y*2.*uFocal/uResolution.y,d*(far+near)/(far-near)-2.*far*near/(far-near),d);',
    'vNormal=n;vLocal=p;vWorld=world;}'
  ].join('');
  const fragmentSource=[
    'precision mediump float;uniform vec3 uColor;uniform float uType;uniform float uRing;uniform float uFloor;uniform vec3 uCamera;',
    'varying vec3 vNormal;varying vec3 vLocal;varying vec3 vWorld;',
    'float hash3(vec3 p){p=fract(p*.1031);p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}',
    'float noise3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);float n000=hash3(i+vec3(0.,0.,0.)),n100=hash3(i+vec3(1.,0.,0.)),n010=hash3(i+vec3(0.,1.,0.)),n110=hash3(i+vec3(1.,1.,0.)),n001=hash3(i+vec3(0.,0.,1.)),n101=hash3(i+vec3(1.,0.,1.)),n011=hash3(i+vec3(0.,1.,1.)),n111=hash3(i+vec3(1.,1.,1.));return mix(mix(mix(n000,n100,f.x),mix(n010,n110,f.x),f.y),mix(mix(n001,n101,f.x),mix(n011,n111,f.x),f.y),f.z);}',
    'float fbm(vec3 p){float value=0.,amp=.5;for(int i=0;i<4;i++){value+=noise3(p)*amp;p=p*2.03+vec3(11.7,3.1,7.9);amp*=.5;}return value;}',
    'void main(){vec3 n=normalize(vNormal),view=normalize(uCamera-vWorld),light=normalize(vec3(-.38,.74,-.82));',
    'if(uFloor>.5){float gx=abs(fract(vWorld.x/110.)-.5),gz=abs(fract(vWorld.z/110.)-.5);float grid=max(1.-smoothstep(.46,.495,gx),1.-smoothstep(.46,.495,gz));float horizon=1.-smoothstep(900.,1320.,vWorld.z);vec3 floorColor=mix(vec3(.035,.09,.095),vec3(.3,.67,.62),grid*.72);gl_FragColor=vec4(floorColor,(.12+grid*.3)*horizon);return;}',
    'float diffuse=max(dot(n,light),0.);float spec=pow(max(dot(reflect(-light,n),view),0.),72.);',
    'float fres=pow(1.-max(dot(n,view),0.),3.);vec3 base=uColor;',
    'if(uRing>.5){float radius=length(vLocal.xy);float bands=step(.5,fract(radius*12.));',
    'base=mix(vec3(.16,.24,.29),uColor,.48+bands*.35);float alpha=.58+bands*.26;',
    'gl_FragColor=vec4(base*(.58+diffuse*.5)+vec3(.65,.84,.91)*spec*.2,alpha);return;}',
    'float broad=fbm(vLocal*5.2),detail=fbm(vLocal*22.);',
    'if(uType<.5){float band=sin((vLocal.y+noise3(vLocal*8.)*.11)*42.+broad*5.);base*=.72+band*.19+detail*.24;}',
    'else if(uType<1.5){float land=fbm(vLocal*6.5+vec3(2.3,4.1,1.7));float ridge=fbm(vLocal*29.);base*=mix(.48,1.35,smoothstep(.36,.68,land));base+=vec3(ridge*.1);}',
    'else{float ice=fbm(vLocal*18.);float streak=sin((vLocal.x+vLocal.y*.32)*34.+broad*12.);base*=.7+ice*.46+streak*.055;}',
    'vec3 reflected=reflect(-view,n);float envY=max(reflected.y,0.);',
    'vec3 env=mix(vec3(.012,.02,.027),vec3(.17,.31,.38),smoothstep(-.18,.9,reflected.y));',
    'float softbox=exp(-dot(reflected-vec3(-.42,.66,-.62),reflected-vec3(-.42,.66,-.62))*13.);',
    'float strip=exp(-pow((reflected.x-.62)*8.,2.))*smoothstep(-.1,.65,reflected.y);',
    'float horizon=exp(-pow((reflected.y+.05)*15.,2.));env+=vec3(.58,.76,.78)*softbox*.78+vec3(.76,.9,1.)*strip*.56+vec3(.14,.44,.47)*horizon*.34;',
    'vec3 color=base*(.16+diffuse*.72)+env*(.3+fres*.92)+vec3(1.)*(spec*.98);color+=uColor*fres*.48;color=mix(color,color*1.12+vec3(.12),softbox*.22);',
    'gl_FragColor=vec4(color,1.);}'
  ].join('');
  try{
    const program=compileGL(gl,vertexSource,fragmentSource);gl.useProgram(program);
    const loc={
      position:gl.getAttribLocation(program,'aPosition'),normal:gl.getAttribLocation(program,'aNormal'),
      center:gl.getUniformLocation(program,'uCenter'),radius:gl.getUniformLocation(program,'uRadius'),
      angle:gl.getUniformLocation(program,'uAngle'),resolution:gl.getUniformLocation(program,'uResolution'),
      focal:gl.getUniformLocation(program,'uFocal'),color:gl.getUniformLocation(program,'uColor'),
      type:gl.getUniformLocation(program,'uType'),ring:gl.getUniformLocation(program,'uRing'),floor:gl.getUniformLocation(program,'uFloor'),
      camera:gl.getUniformLocation(program,'uCamera')
    };
    function uploadMesh(mesh){
      const vertexBuffer=gl.createBuffer(),indexBuffer=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);gl.bufferData(gl.ARRAY_BUFFER,mesh.vertices,gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,mesh.indices,gl.STATIC_DRAW);
      return{vertexBuffer,indexBuffer,count:mesh.indices.length};
    }
    const planetMesh=uploadMesh(sphereMesh()),saturnRing=uploadMesh(ringMesh());
    const floorBuffer=gl.createBuffer();let floorVertexCount=0;
    rebuildFloor=()=>{
      const vertices=[],ground=gravityHeight*.24;
      const vertex=(x,z)=>vertices.push(x,-ground,z,0,1,0);
      for(let x=-1900;x<=1900;x+=110){vertex(x,-300);vertex(x,1450);}
      for(let z=-300;z<=1450;z+=110){vertex(-1900,z);vertex(1900,z);}
      floorVertexCount=vertices.length/6;gl.bindBuffer(gl.ARRAY_BUFFER,floorBuffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);
    };
    rebuildFloor();
    function drawGround(){
      gl.bindBuffer(gl.ARRAY_BUFFER,floorBuffer);gl.enableVertexAttribArray(loc.position);gl.vertexAttribPointer(loc.position,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(loc.normal);gl.vertexAttribPointer(loc.normal,3,gl.FLOAT,false,24,12);
      gl.uniform3f(loc.center,0,0,0);gl.uniform1f(loc.radius,1);gl.uniform1f(loc.angle,0);gl.uniform1f(loc.type,0);gl.uniform1f(loc.ring,0);gl.uniform1f(loc.floor,1);gl.uniform3f(loc.color,.08,.19,.19);gl.drawArrays(gl.LINES,0,floorVertexCount);
    }
    function drawMesh(mesh,body,isRing){
      gl.bindBuffer(gl.ARRAY_BUFFER,mesh.vertexBuffer);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,mesh.indexBuffer);
      gl.enableVertexAttribArray(loc.position);gl.vertexAttribPointer(loc.position,3,gl.FLOAT,false,24,0);
      gl.enableVertexAttribArray(loc.normal);gl.vertexAttribPointer(loc.normal,3,gl.FLOAT,false,24,12);
      gl.uniform3f(loc.center,body.x,-body.y,body.z);gl.uniform1f(loc.radius,body.r);
      gl.uniform1f(loc.angle,body.angle);gl.uniform1f(loc.type,body.type);gl.uniform1f(loc.ring,isRing?1:0);gl.uniform1f(loc.floor,0);
      gl.uniform3f(loc.color,body.color[0],body.color[1],body.color[2]);
      gl.drawElements(gl.TRIANGLES,mesh.count,gl.UNSIGNED_SHORT,0);
    }
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.clearColor(0,0,0,0);
    planetDraw=()=>{
      gl.viewport(0,0,gravityCanvas.width,gravityCanvas.height);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
      gl.uniform2f(loc.resolution,gravityWidth,gravityHeight);gl.uniform1f(loc.focal,focal);gl.uniform3f(loc.camera,0,0,-focal);
      drawGround();
      bodies.filter(body=>body.ring).forEach(body=>drawMesh(saturnRing,body,true));
      bodies.forEach(body=>drawMesh(planetMesh,body,false));
    };
  }catch(error){console.error('Unable to initialize the 3D planet renderer.',error);}
}
function drawGravity(){if(activeScene===gravityScene&&!window.WorldFX.suspendScene){stepBodies();if(gl)planetDraw();}requestAnimationFrame(drawGravity);}
drawGravity();
// Each click pulls one translucent shell away from the exhibit's core.
const revealScene = document.querySelector('#revealScene');
const peelButton = document.querySelector('#peelButton');
const layerCounter = document.querySelector('#layerCounter');
let layer = 0;
function peelLayer() {
  playPulseSfx();
  layer = (layer + 1) % 4;
  revealScene.dataset.layer = layer;
  if (layer === 0) { peelButton.querySelector('span').textContent = 'UNVEIL LAYER 01'; layerCounter.textContent = 'LAYER 00 / 03'; }
  else if (layer < 3) { peelButton.querySelector('span').textContent = `UNVEIL LAYER 0${layer + 1}`; layerCounter.textContent = `LAYER 0${layer} / 03`; }
  else { peelButton.querySelector('span').textContent = 'RESET THE OBJECT'; layerCounter.textContent = 'CORE REVEALED'; }
}
peelButton.addEventListener('click', peelLayer);
document.querySelector('#objectStage').addEventListener('click', event => { if (!event.target.closest('button')) peelLayer(); });
document.querySelector('#objectStage').addEventListener('pointermove', event => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--px', ((event.clientX - rect.left) / rect.width - .5).toFixed(3));
  event.currentTarget.style.setProperty('--py', ((event.clientY - rect.top) / rect.height - .5).toFixed(3));
});

// Verlet net with a held point, distance constraints, and a slight continuous breeze.
const clothCanvas = document.querySelector('#clothCanvas');
const cloth = bindCanvas(clothCanvas);
const clothScene = document.querySelector('#clothScene');
let cols = 35, rows = 25, nodes = [], constraints = [], clothGrab = null;
function buildCloth() {
  const w = cloth.width, h = cloth.height, cw = w * .57, ch = h * .69, sx = w * .31, sy = h * .17;
  const dx = cw / (cols - 1), dy = ch / (rows - 1); nodes = []; constraints = [];
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const px = sx + x * dx, py = sy + y * dy;
    nodes.push({ x: px, y: py, oldX: px, oldY: py, pin: y === 0 && (x % 4 === 0 || x === cols - 1) });
  }
  const link = (a,b,len) => constraints.push({a,b,len});
  nodes.forEach((n,i) => { const x=i%cols,y=Math.floor(i/cols); if(x<cols-1)link(i,i+1,dx); if(y<rows-1)link(i,i+cols,dy); if(x<cols-1&&y<rows-1)link(i,i+cols+1,Math.hypot(dx,dy)); if(x>0&&y<rows-1)link(i,i+cols-1,Math.hypot(dx,dy)); });
}
buildCloth();
new ResizeObserver(buildCloth).observe(clothCanvas.parentElement);
function clothPoint(event) { const r=clothCanvas.getBoundingClientRect();return{x:event.clientX-r.left,y:event.clientY-r.top}; }
clothCanvas.addEventListener('pointerdown', event => {
  if(activeScene!==clothScene)return;
  const p=clothPoint(event);clothGrab=nodes.reduce((best,n)=>Math.hypot(n.x-p.x,n.y-p.y)<Math.hypot(best.x-p.x,best.y-p.y)?n:best,nodes[0]);
  clothCanvas.setPointerCapture(event.pointerId);
});
clothCanvas.addEventListener('pointermove', event => {if(clothGrab){const p=clothPoint(event);clothGrab.x=p.x;clothGrab.y=p.y;}});
clothCanvas.addEventListener('pointerup',()=>clothGrab=null);clothCanvas.addEventListener('pointercancel',()=>clothGrab=null);
function drawCloth(time) {
  if(activeScene!==clothScene||window.WorldFX.suspendScene){requestAnimationFrame(drawCloth);return;}
  const {ctx,width,height}=cloth;ctx.clearRect(0,0,width,height);
  if(activeScene===clothScene){
    nodes.forEach((n,i)=>{if(n.pin||n===clothGrab)return;const vx=(n.x-n.oldX)*.993,vy=(n.y-n.oldY)*.993;n.oldX=n.x;n.oldY=n.y;n.x+=vx+Math.sin(time*.0007+i*.16)*.12;n.y+=vy+.095;});
    for(let pass=0;pass<4;pass++)constraints.forEach(c=>{const a=nodes[c.a],b=nodes[c.b],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,err=(d-c.len)/d*.5;if(!a.pin&&a!==clothGrab){a.x+=dx*err;a.y+=dy*err;}if(!b.pin&&b!==clothGrab){b.x-=dx*err;b.y-=dy*err;}});
  }
  for(let y=0;y<rows-1;y++)for(let x=0;x<cols-1;x++){
    const a=nodes[y*cols+x],b=nodes[y*cols+x+1],c=nodes[(y+1)*cols+x+1],d=nodes[(y+1)*cols+x],light=50+Math.sin(x*.22+y*.13+time*.0005)*18;
    ctx.fillStyle=`rgba(196,225,171,${.025+((x+y)%5)*.006})`;ctx.strokeStyle=`hsla(${light},34%,72%,.34)`;ctx.lineWidth=.65;
    ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(d.x,d.y);ctx.closePath();ctx.fill();ctx.stroke();
  }
  requestAnimationFrame(drawCloth);
}
drawCloth(0);

// A modeled flower room with layered, curved 3D petals.
const orbitCanvas=document.querySelector('#orbitCanvas');
const orbitScene=document.querySelector('#orbitScene');
const orbitGL=orbitCanvas.getContext('webgl',{alpha:true,antialias:true,depth:true});
let orbitWidth=1,orbitHeight=1,orbitDpr=1;
const orbitState={rx:-.16,ry:0,drag:false,lastX:0,lastY:0,moved:0,pulse:0,bloom:.9,targetBloom:.9};
function resizeOrbit(){
  const r=orbitCanvas.getBoundingClientRect();orbitWidth=Math.max(1,r.width);orbitHeight=Math.max(1,r.height);
  orbitDpr=Math.min(devicePixelRatio||1,1.5);orbitCanvas.width=Math.round(orbitWidth*orbitDpr);orbitCanvas.height=Math.round(orbitHeight*orbitDpr);
  if(orbitGL)orbitGL.viewport(0,0,orbitCanvas.width,orbitCanvas.height);
}
new ResizeObserver(resizeOrbit).observe(orbitCanvas.parentElement);resizeOrbit();
const petals=[8,12,16].flatMap((count,layer)=>Array.from({length:count},(_,i)=>({
  layer,index:i,count,angle:i/count*Math.PI*2+layer*.22,length:[128,174,215][layer],width:[30,34,38][layer],
  color:[[.93,.31,.48],[.94,.54,.63],[.66,.48,.88]][layer]
})));
orbitCanvas.addEventListener('pointerdown',event=>{
  if(activeScene!==orbitScene)return;orbitState.drag=true;orbitState.lastX=event.clientX;orbitState.lastY=event.clientY;orbitState.moved=0;orbitCanvas.setPointerCapture(event.pointerId);
});
orbitCanvas.addEventListener('pointermove',event=>{
  if(!orbitState.drag||activeScene!==orbitScene)return;
  const dx=event.clientX-orbitState.lastX,dy=event.clientY-orbitState.lastY;
  orbitState.ry+=dx*.006;orbitState.rx=Math.max(-1.2,Math.min(1.2,orbitState.rx+dy*.006));
  orbitState.moved+=Math.abs(dx)+Math.abs(dy);orbitState.lastX=event.clientX;orbitState.lastY=event.clientY;
});
orbitCanvas.addEventListener('pointerup',()=>{
  if(orbitState.drag&&orbitState.moved<8){orbitState.targetBloom=orbitState.targetBloom>.6?.24:1;orbitState.pulse=1;playPulseSfx();}
  orbitState.drag=false;
});
orbitCanvas.addEventListener('pointercancel',()=>orbitState.drag=false);
let orbitDraw=()=>{};
if(orbitGL){
  const vertexSource=[
    'attribute vec3 aPosition;attribute vec3 aNormal;attribute vec3 aColor;',
    'uniform vec2 uResolution;uniform float uFocal;varying vec3 vNormal;varying vec3 vColor;varying vec3 vWorld;',
    'void main(){float d=uFocal+aPosition.z;float far=4800.,near=2.;',
    'gl_Position=vec4((aPosition.x-uResolution.x*.5)*2.*uFocal/uResolution.x,-(aPosition.y-uResolution.y*.5)*2.*uFocal/uResolution.y,d*(far+near)/(far-near)-2.*far*near/(far-near),d);',
    'vNormal=aNormal;vColor=aColor;vWorld=aPosition;}'
  ].join('');
  const fragmentSource=[
    'precision mediump float;varying vec3 vNormal;varying vec3 vColor;varying vec3 vWorld;',
    'void main(){vec3 n=normalize(vNormal),view=normalize(vec3(0.,0.,-980.)-vWorld),light=normalize(vec3(-.4,.7,-.8));',
    'float diffuse=max(dot(n,light),0.);float spec=pow(max(dot(reflect(-light,n),view),0.),32.);',
    'float fres=pow(1.-max(dot(n,view),0.),2.4);vec3 c=vColor*(.22+diffuse*.82)+vec3(.52,.91,.88)*fres*.48+vec3(1.)*spec*.72;',
    'gl_FragColor=vec4(c,.78+fres*.2);}'
  ].join('');
  try{
    const program=compileGL(orbitGL,vertexSource,fragmentSource);orbitGL.useProgram(program);
    const loc={position:orbitGL.getAttribLocation(program,'aPosition'),normal:orbitGL.getAttribLocation(program,'aNormal'),color:orbitGL.getAttribLocation(program,'aColor'),resolution:orbitGL.getUniformLocation(program,'uResolution'),focal:orbitGL.getUniformLocation(program,'uFocal')};
    const buffer=orbitGL.createBuffer();orbitGL.enable(orbitGL.DEPTH_TEST);orbitGL.depthFunc(orbitGL.LEQUAL);orbitGL.enable(orbitGL.BLEND);orbitGL.blendFunc(orbitGL.SRC_ALPHA,orbitGL.ONE_MINUS_SRC_ALPHA);orbitGL.clearColor(0,0,0,0);
    function rotate(v,rx,ry){
      const cx=Math.cos(rx),sx=Math.sin(rx),cy=Math.cos(ry),sy=Math.sin(ry);
      const x1=v[0]*cy-v[2]*sy,z1=v[0]*sy+v[2]*cy;
      return[x1,v[1]*cx-z1*sx,v[1]*sx+z1*cx];
    }
    const core=sphereMesh(24,36);
    function addVertex(vertices,p,n,c){vertices.push(p[0],p[1],p[2],n[0],n[1],n[2],c[0],c[1],c[2]);}
    orbitDraw=()=>{
      orbitGL.viewport(0,0,orbitCanvas.width,orbitCanvas.height);orbitGL.clear(orbitGL.COLOR_BUFFER_BIT|orbitGL.DEPTH_BUFFER_BIT);
      const time=performance.now(),rx=orbitState.rx+Math.sin(time*.00018)*.018,ry=orbitState.ry+time*.000018,ox=orbitWidth*.69,oy=orbitHeight*.55,scale=Math.min(1,orbitWidth/920),vertices=[];
      orbitState.bloom+=(orbitState.targetBloom-orbitState.bloom)*.055;
      petals.forEach((petal)=>{
        const rows=17,cols=9,grid=[],angle=petal.angle+ry*.42,ca=Math.cos(angle),sa=Math.sin(angle),bloom=orbitState.bloom;
        for(let r=0;r<rows;r++){
          const u=r/(rows-1);grid[r]=[];
          for(let c=0;c<cols;c++){
            const v=c/(cols-1)*2-1,shape=Math.pow(Math.max(.001,Math.sin(Math.PI*u)),.72),length=petal.length*scale*bloom,width=petal.width*scale*shape;
            const radial=(petal.layer*13*scale+u*length),lateral=v*width;
            const z=(petal.layer-1)*12*scale+Math.sin(Math.PI*u)*(19*(1-v*v)-3*v*v)*scale-22*u*u*scale+Math.sin(time*.001+petal.index+petal.layer)*u*3;
            const local=[ca*radial-sa*lateral,sa*radial+ca*lateral,z],point=rotate(local,rx,orbitState.ry);
            const dzdu=(19*(1-v*v)-3*v*v)*Math.PI*Math.cos(Math.PI*u)-44*u;
            const dzdv=-44*v*Math.sin(Math.PI*u)/Math.max(width,2);
            let normal=[-ca*dzdu/Math.max(length,1)+sa*dzdv,-sa*dzdu/Math.max(length,1)-ca*dzdv,1];normal=rotate(normal,rx,orbitState.ry);const nl=Math.hypot(...normal)||1;normal=normal.map(n=>n/nl);
            const tip=u,light=.78+tip*.42+(1-Math.abs(v))*.12,color=petal.color.map((n,k)=>Math.min(1,n*light+(k===0?.06:k===1?.025:.035)));
            grid[r][c]={point:[point[0]+ox,point[1]+oy,point[2]],normal,color};
          }
        }
        for(let r=0;r<rows-1;r++)for(let c=0;c<cols-1;c++){
          const a=grid[r][c],b=grid[r+1][c],d=grid[r][c+1],e=grid[r+1][c+1];
          [a,b,e,a,e,d].forEach(v=>addVertex(vertices,v.point,v.normal,v.color));
        }
      });
      for(let i=0;i<core.indices.length;i+=3){
        for(let j=0;j<3;j++){
          const vi=core.indices[i+j]*6,p=rotate([core.vertices[vi]*32*scale,core.vertices[vi+1]*32*scale,core.vertices[vi+2]*32*scale],rx,orbitState.ry),n=rotate([core.vertices[vi+3],core.vertices[vi+4],core.vertices[vi+5]],rx,orbitState.ry);
          addVertex(vertices,[p[0]+ox,p[1]+oy,p[2]+12],[n[0],n[1],n[2]],[1,.66,.28]);
        }
      }
      orbitGL.uniform2f(loc.resolution,orbitWidth,orbitHeight);orbitGL.uniform1f(loc.focal,980);
      orbitGL.bindBuffer(orbitGL.ARRAY_BUFFER,buffer);orbitGL.bufferData(orbitGL.ARRAY_BUFFER,new Float32Array(vertices),orbitGL.DYNAMIC_DRAW);
      const stride=36;orbitGL.enableVertexAttribArray(loc.position);orbitGL.vertexAttribPointer(loc.position,3,orbitGL.FLOAT,false,stride,0);
      orbitGL.enableVertexAttribArray(loc.normal);orbitGL.vertexAttribPointer(loc.normal,3,orbitGL.FLOAT,false,stride,12);
      orbitGL.enableVertexAttribArray(loc.color);orbitGL.vertexAttribPointer(loc.color,3,orbitGL.FLOAT,false,stride,24);
      orbitGL.drawArrays(orbitGL.TRIANGLES,0,vertices.length/9);
      if(orbitState.pulse>.01){const pulse=[];const radius=(1-orbitState.pulse)*Math.min(orbitWidth,orbitHeight)*.46;for(let i=0;i<112;i++){const a=i/112*Math.PI*2;pulse.push(ox+Math.cos(a)*radius,oy+Math.sin(a)*radius,-80,0,0,1,.95,.72,.84);}orbitGL.disable(orbitGL.DEPTH_TEST);orbitGL.bufferData(orbitGL.ARRAY_BUFFER,new Float32Array(pulse),orbitGL.DYNAMIC_DRAW);orbitGL.drawArrays(orbitGL.LINE_LOOP,0,112);orbitGL.enable(orbitGL.DEPTH_TEST);orbitState.pulse*=.955;}
    };
  }catch(error){console.error('Unable to initialize the 3D orbit room.',error);}
}
function drawOrbit(){if(activeScene===orbitScene&&orbitGL&&!window.WorldFX.suspendScene)orbitDraw();requestAnimationFrame(drawOrbit);}
drawOrbit();

const fieldCanvas=document.querySelector('#fieldCanvas'),field=bindCanvas(fieldCanvas),fieldScene=document.querySelector('#fieldScene');
const fieldPointer={x:0,y:0,down:false};
const motes=Array.from({length:1800},()=>({x:Math.random()*field.width,y:Math.random()*field.height,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,phase:Math.random()*6.28}));
function fieldPoint(event){const r=fieldCanvas.getBoundingClientRect();return{x:event.clientX-r.left,y:event.clientY-r.top};}
fieldCanvas.addEventListener('pointermove',event=>{if(activeScene===fieldScene)Object.assign(fieldPointer,fieldPoint(event));});
fieldCanvas.addEventListener('pointerdown',event=>{if(activeScene===fieldScene){fieldPointer.down=true;fieldCanvas.setPointerCapture(event.pointerId);}});fieldCanvas.addEventListener('pointerup',()=>fieldPointer.down=false);fieldCanvas.addEventListener('pointercancel',()=>fieldPointer.down=false);
new ResizeObserver(()=>motes.forEach(p=>{p.x=Math.min(p.x,field.width);p.y=Math.min(p.y,field.height);})).observe(fieldCanvas.parentElement);
function drawField(time){
  if(activeScene!==fieldScene||window.WorldFX.suspendScene){requestAnimationFrame(drawField);return;}
  const{ctx,width,height}=field;ctx.clearRect(0,0,width,height);
  if(activeScene===fieldScene){
    const scale=Math.min(1,width/1000),mx=width*.7,my=height*.55,poleX=90*scale,poleY=104*scale;
    ctx.save();ctx.globalCompositeOperation='lighter';
    for(let i=0;i<14;i++){
      const spread=(i+1)*22*scale,wave=Math.sin(time*.0007+i*.8)*7*scale;
      ctx.beginPath();ctx.moveTo(mx-poleX,my-poleY);
      ctx.bezierCurveTo(mx-poleX-spread,my-poleY-spread*1.3+wave,mx+poleX+spread,my-poleY-spread*1.3-wave,mx+poleX,my-poleY);
      ctx.strokeStyle=`rgba(170,245,226,${.14-i*.009})`;ctx.lineWidth=1.1;ctx.stroke();
      ctx.beginPath();ctx.moveTo(mx-poleX,my-poleY);
      ctx.bezierCurveTo(mx-poleX-spread*.34,my-poleY-spread*.68,mx+poleX+spread*.34,my-poleY-spread*.68,mx+poleX,my-poleY);
      ctx.strokeStyle=`rgba(205,255,235,${.09-i*.006})`;ctx.lineWidth=.7;ctx.stroke();
    }
    ctx.restore();
    for(let i=0;i<motes.length;i++){
      const p=motes[i],dx=fieldPointer.x-p.x,dy=fieldPointer.y-p.y,d=Math.hypot(dx,dy)||1;
      if(d<500){const force=(1-d/500)*(fieldPointer.down?-.24:.085);p.vx+=dx/d*force;p.vy+=dy/d*force;}
      const ndx=mx-poleX-p.x,ndy=my-poleY-p.y,sdx=mx+poleX-p.x,sdy=my-poleY-p.y,nd=Math.hypot(ndx,ndy)||1,sd=Math.hypot(sdx,sdy)||1;
      if(nd<270*scale){const f=(1-nd/(270*scale))*.035;p.vx+=ndx/nd*f;p.vy+=ndy/nd*f;}
      if(sd<270*scale){const f=(1-sd/(270*scale))*.035;p.vx+=sdx/sd*f;p.vy+=sdy/sd*f;}
      p.vx+=Math.sin(time*.0004+p.phase)*.008;p.vy+=Math.cos(time*.00035+p.phase)*.008;p.x+=p.vx;p.y+=p.vy;p.vx*=.992;p.vy*=.992;
      if(p.x<0||p.x>width)p.vx*=-.8;if(p.y<0||p.y>height)p.vy*=-.8;
      p.x=Math.max(0,Math.min(width,p.x));p.y=Math.max(0,Math.min(height,p.y));
    }
    // Batch 1,800 filings into four paths rather than thousands of individual paints.
    ctx.lineCap='round';
    const inks=['rgba(137,211,207,.38)','rgba(172,241,228,.5)','rgba(208,250,217,.62)','rgba(231,255,179,.75)'];
    for(let group=0;group<4;group++){ctx.beginPath();ctx.strokeStyle=inks[group];ctx.lineWidth=group===3?1.5:1;
      for(let i=group;i<motes.length;i+=4){const p=motes[i],speed=Math.hypot(p.vx,p.vy)||1,len=2+Math.min(3,speed);ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+p.vx/speed*len,p.y+p.vy/speed*len);}ctx.stroke();}
    ctx.beginPath();for(let i=0;i<motes.length;i+=19){const p=motes[i];ctx.moveTo(p.x+1.5,p.y);ctx.arc(p.x,p.y,1.5,0,Math.PI*2);}ctx.fillStyle='rgba(216,255,231,.7)';ctx.fill();
  }
  requestAnimationFrame(drawField);
}
drawField(0);

// A swept, beveled 3D horseshoe: the field remains visible beneath its glassy enamel.
const magnetCanvas=document.querySelector('#magnetCanvas'),magnetGL=magnetCanvas.getContext('webgl',{alpha:true,antialias:true,depth:true});
let magnetW=1,magnetH=1,magnetDpr=1,magnetDraw=()=>{};
function resizeMagnet(){const r=magnetCanvas.getBoundingClientRect();magnetW=Math.max(1,r.width);magnetH=Math.max(1,r.height);magnetDpr=Math.min(devicePixelRatio||1,1.5);magnetCanvas.width=Math.round(magnetW*magnetDpr);magnetCanvas.height=Math.round(magnetH*magnetDpr);if(magnetGL)magnetGL.viewport(0,0,magnetCanvas.width,magnetCanvas.height);}
new ResizeObserver(resizeMagnet).observe(magnetCanvas.parentElement);resizeMagnet();
function magnetMesh(){
  const path=[];for(let i=0;i<=12;i++)path.push([-90,-104+i*11,0]);
  for(let i=0;i<=36;i++){const a=Math.PI-i/36*Math.PI;path.push([90*Math.cos(a),34+90*Math.sin(a),0]);}
  for(let i=1;i<=12;i++)path.push([90,34-i*11,0]);
  const verts=[],indices=[],sides=20,radius=21;
  for(let i=0;i<path.length;i++){
    const prev=path[Math.max(0,i-1)],next=path[Math.min(path.length-1,i+1)],tx=next[0]-prev[0],ty=next[1]-prev[1],len=Math.hypot(tx,ty)||1,nx=-ty/len,ny=tx/len;
    for(let j=0;j<=sides;j++){const a=j/sides*Math.PI*2,rad=Math.cos(a),z=Math.sin(a),x=path[i][0]+nx*rad*radius,y=path[i][1]+ny*rad*radius,zz=z*radius;verts.push(x,y,zz,nx*rad,ny*rad,z,(i/(path.length-1)));}
  }
  for(let i=0;i<path.length-1;i++)for(let j=0;j<sides;j++){const a=i*(sides+1)+j,b=a+sides+1;indices.push(a,b,a+1,b,b+1,a+1);}
  return{vertices:new Float32Array(verts),indices:new Uint16Array(indices)};
}
if(magnetGL){
  const vs='attribute vec3 aPosition;attribute vec3 aNormal;attribute float aAlong;uniform vec2 uResolution;uniform vec2 uTilt;uniform float uTime;varying vec3 vNormal;varying vec3 vPos;varying float vAlong;void main(){float ry=uTilt.x,rx=uTilt.y+sin(uTime*.0005)*.035;float cy=cos(ry),sy=sin(ry),cx=cos(rx),sx=sin(rx);vec3 p=vec3(aPosition.x*cy-aPosition.z*sy,aPosition.y,aPosition.x*sy+aPosition.z*cy);p=vec3(p.x,p.y*cx-p.z*sx,p.y*sx+p.z*cx);vec3 n=vec3(aNormal.x*cy-aNormal.z*sy,aNormal.y,aNormal.x*sy+aNormal.z*cy);n=vec3(n.x,n.y*cx-n.z*sx,n.y*sx+n.z*cx);vec2 center=vec2(uResolution.x*.70,uResolution.y*.55);vec3 world=vec3(p.x+center.x-uResolution.x*.5,-(p.y+center.y-uResolution.y*.5),p.z);float focal=950.,d=focal+world.z,far=3000.,near=2.;gl_Position=vec4(world.x*2.*focal/uResolution.x,world.y*2.*focal/uResolution.y,d*(far+near)/(far-near)-2.*far*near/(far-near),d);vNormal=n;vPos=world;vAlong=aAlong;}';
  const fs='precision mediump float;uniform float uTime;varying vec3 vNormal;varying vec3 vPos;varying float vAlong;void main(){vec3 n=normalize(vNormal),view=normalize(vec3(0.,0.,-950.)-vPos),light=normalize(vec3(-.45,.68,-.72));float diffuse=max(dot(n,light),0.);float fres=pow(1.-max(dot(n,view),0.),3.);float spec=pow(max(dot(reflect(-light,n),view),0.),52.);float box=exp(-pow((vPos.x+170.)*.012,2.)-pow((vPos.y-110.)*.009,2.));vec3 north=vec3(.26,.87,.84),south=vec3(.96,.48,.52),base=mix(north,south,smoothstep(.42,.58,vAlong));vec3 c=base*(.28+diffuse*.78)+vec3(.3,.95,.94)*fres*.78+vec3(1.)*(spec*.9+box*.4);c+=base*pow(1.-abs(dot(n,view)),7.)*.3;gl_FragColor=vec4(c,.98);}';
  try{const program=compileGL(magnetGL,vs,fs);magnetGL.useProgram(program);const loc={p:magnetGL.getAttribLocation(program,'aPosition'),n:magnetGL.getAttribLocation(program,'aNormal'),along:magnetGL.getAttribLocation(program,'aAlong'),resolution:magnetGL.getUniformLocation(program,'uResolution'),tilt:magnetGL.getUniformLocation(program,'uTilt'),time:magnetGL.getUniformLocation(program,'uTime')},mesh=magnetMesh(),vb=magnetGL.createBuffer(),ib=magnetGL.createBuffer();magnetGL.bindBuffer(magnetGL.ARRAY_BUFFER,vb);magnetGL.bufferData(magnetGL.ARRAY_BUFFER,mesh.vertices,magnetGL.STATIC_DRAW);magnetGL.bindBuffer(magnetGL.ELEMENT_ARRAY_BUFFER,ib);magnetGL.bufferData(magnetGL.ELEMENT_ARRAY_BUFFER,mesh.indices,magnetGL.STATIC_DRAW);magnetGL.enable(magnetGL.DEPTH_TEST);magnetGL.enable(magnetGL.BLEND);magnetGL.blendFunc(magnetGL.SRC_ALPHA,magnetGL.ONE_MINUS_SRC_ALPHA);magnetGL.clearColor(0,0,0,0);
    magnetDraw=time=>{if(activeScene!==fieldScene)return;magnetGL.viewport(0,0,magnetCanvas.width,magnetCanvas.height);magnetGL.clear(magnetGL.COLOR_BUFFER_BIT|magnetGL.DEPTH_BUFFER_BIT);magnetGL.useProgram(program);magnetGL.uniform2f(loc.resolution,magnetW,magnetH);magnetGL.uniform2f(loc.tilt,((pointer.x/magnetW)-.7)*.34,((pointer.y/magnetH)-.55)*-.22);magnetGL.uniform1f(loc.time,time);magnetGL.bindBuffer(magnetGL.ARRAY_BUFFER,vb);magnetGL.bindBuffer(magnetGL.ELEMENT_ARRAY_BUFFER,ib);magnetGL.enableVertexAttribArray(loc.p);magnetGL.vertexAttribPointer(loc.p,3,magnetGL.FLOAT,false,28,0);magnetGL.enableVertexAttribArray(loc.n);magnetGL.vertexAttribPointer(loc.n,3,magnetGL.FLOAT,false,28,12);magnetGL.enableVertexAttribArray(loc.along);magnetGL.vertexAttribPointer(loc.along,1,magnetGL.FLOAT,false,28,24);magnetGL.drawElements(magnetGL.TRIANGLES,mesh.indices.length,magnetGL.UNSIGNED_SHORT,0);};
  }catch(error){console.error('Unable to initialize the 3D magnet model.',error);}
}
function drawMagnet(time){if(magnetGL&&activeScene===fieldScene&&!window.WorldFX.suspendScene)magnetDraw(time);requestAnimationFrame(drawMagnet);}drawMagnet(0);

const lensScene=document.querySelector('#lensScene');

// The site is one room with scene-to-scene camera moves, never a vertical page.
const chapterLabels=['PROLOGUE / 07','CHAPTER 01 / 07','CHAPTER 02 / 07','CHAPTER 03 / 07','CHAPTER 04 / 07','CHAPTER 05 / 07','CHAPTER 06 / 07','CHAPTER 07 / COSMIC SEA','EPILOGUE / 07'];
const roomCoordinate=document.querySelector('#roomCoordinate');
let sceneTransitioning=false;
function playChapterGate(index,event,onCovered,direction){
  playPortalSfx();
  window.WorldFX.play(index,event,onCovered,()=>{sceneTransitioning=false;},direction);
}
function applyScene(next,oldIndex,index){journey.dataset.direction=index>=oldIndex?'forward':'back';activeScene=next;scenes.forEach(scene=>scene.classList.remove('is-active'));next.classList.remove('scene-arrival');void next.offsetWidth;next.classList.add('is-active');chapterCount.textContent=chapterLabels[index];progress.style.width=`${index/(scenes.length-1)*100}%`;roomCoordinate.textContent=`ROOM ${String(Math.min(index,7)).padStart(2,'0')} / 07`;document.querySelector('#chapterPrev').disabled=index===0;document.querySelector('#chapterNext').disabled=index===scenes.length-1;if(next===fieldScene){fieldPointer.x=pointer.x;fieldPointer.y=pointer.y;}}
function activateScene(next,animate=true,sourceEvent=null){if(typeof next==='string')next=document.getElementById(next);if(!next||next===activeScene||sceneTransitioning)return;const oldIndex=scenes.indexOf(activeScene),index=scenes.indexOf(next);if(index<0)return;if(animate){sceneTransitioning=true;const gate=()=>playChapterGate(index,sourceEvent,()=>applyScene(next,oldIndex,index),index>=oldIndex?1:-1);if(oldIndex===0&&index>0&&window.HomeWorld){playPortalSfx();window.HomeWorld.depart(()=>applyScene(next,oldIndex,index)).then(()=>{sceneTransitioning=false;},gate);}else gate();}else applyScene(next,oldIndex,index);}
function moveChapter(delta,event){const index=scenes.indexOf(activeScene);activateScene(scenes[Math.max(0,Math.min(scenes.length-1,index+delta))],true,event);}
document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',event=>activateScene(button.dataset.next,true,event)));
document.querySelector('#chapterPrev').disabled=true;
document.querySelector('#chapterPrev').addEventListener('click',event=>moveChapter(-1,event));document.querySelector('#chapterNext').addEventListener('click',event=>moveChapter(1,event));
document.querySelector('.sigil').addEventListener('click',event=>{event.preventDefault();activateScene(thresholdScene,true,event);});
document.querySelector('#enterButton').addEventListener('click',event=>activateScene(fluidScene,true,event));
document.querySelector('#restartButton').addEventListener('click',()=>{
  layer=0;revealScene.dataset.layer=0;peelButton.querySelector('span').textContent='UNVEIL LAYER 01';layerCounter.textContent='LAYER 00 / 03';
  activateScene(thresholdScene);
});

// Global pointer and cinematic cursor states.
addEventListener('pointermove',event=>{
  pointer.px=pointer.x;pointer.py=pointer.y;pointer.x=event.clientX;pointer.y=event.clientY;
  
  if(event.pointerType==='mouse'||event.pointerType==='pen'){
    document.documentElement.classList.add('has-precision-pointer');
    cursor.style.setProperty('--cx',`${pointer.x}px`);cursor.style.setProperty('--cy',`${pointer.y}px`);cursor.classList.add('is-visible');
  }else cursor.classList.remove('is-visible','is-down','is-hover');
  const room=document.querySelector('.world-architecture');room.style.setProperty('--room-x',`${((pointer.x/innerWidth)-.5)*22}px`);room.style.setProperty('--room-y',`${((pointer.y/innerHeight)-.5)*14}px`);
  const touch=document.querySelector('.touch-word'),touchRect=touch.getBoundingClientRect();touch.style.setProperty('--touch-x',`${event.clientX-touchRect.left}px`);touch.style.setProperty('--touch-y',`${event.clientY-touchRect.top}px`);
});
addEventListener('pointerdown',event=>{pointer.down=true;if(event.pointerType==='mouse'||event.pointerType==='pen')cursor.classList.add('is-down');});
addEventListener('pointerup',()=>{pointer.down=false;cursor.classList.remove('is-down');});
document.querySelectorAll('button,.object-stage').forEach(el=>{el.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'||event.pointerType==='pen')cursor.classList.add('is-hover');});el.addEventListener('pointerleave',()=>cursor.classList.remove('is-hover'));});
document.querySelectorAll('button').forEach(button=>{
  button.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse')return;const r=button.getBoundingClientRect(),dx=event.clientX-(r.left+r.width/2),dy=event.clientY-(r.top+r.height/2),strength=button.classList.contains('enter-button')?10:7;button.style.setProperty('--mag-x',`${dx/r.width*strength}px`);button.style.setProperty('--mag-y',`${dy/r.height*strength}px`);button.style.setProperty('--glass-x',`${(dx/r.width+.5)*100}%`);button.style.setProperty('--glass-y',`${(dy/r.height+.5)*100}%`);});
  button.addEventListener('pointerleave',()=>{button.style.setProperty('--mag-x','0px');button.style.setProperty('--mag-y','0px');});
  button.addEventListener('pointerdown',()=>button.classList.add('is-pressed'));
  ['pointerup','pointercancel'].forEach(name=>button.addEventListener(name,()=>button.classList.remove('is-pressed')));
});
addEventListener('keydown',event=>{
  if(event.key==='Escape'){pointer.down=false;clothGrab=null;releaseBody();}
  if(event.target.matches('input,textarea,select,[contenteditable="true"]'))return;
  if(event.key==='ArrowRight'||event.key==='PageDown'){event.preventDefault();moveChapter(1);}
  if(event.key==='ArrowLeft'||event.key==='PageUp'){event.preventDefault();moveChapter(-1);}
});

// A readable signature stays in the document; only its visual copy is split.
const signatureMotion = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.creator-signature').forEach(signature => {
  const name = signature.querySelector('.signature-name');
  const words = name.textContent.trim().split(/\s+/);
  name.textContent = '';
  for (const word of words) {
    const group = document.createElement('span');
    group.className = 'signature-word'; group.setAttribute('aria-hidden', 'true');
    for (const letter of word) {
      const span = document.createElement('span'); span.className = 'signature-letter'; span.textContent = letter; group.append(span);
    }
    name.append(group);
  }
  const letters = [...name.querySelectorAll('.signature-letter')];
  const reset = () => letters.forEach(letter => letter.style.setProperty('--letter-lift', '0px'));
  signature.addEventListener('pointermove', event => {
    if (signatureMotion.matches || event.pointerType === 'touch') return;
    const box = signature.getBoundingClientRect();
    signature.style.setProperty('--signature-x', `${(event.clientX-box.left)/box.width*100}%`);
    letters.forEach(letter => {
      const rect = letter.getBoundingClientRect();
      const influence = Math.max(0, 1-Math.abs(event.clientX-rect.left-rect.width/2)/65);
      letter.style.setProperty('--letter-lift', `${-influence*6}px`);
    });
  });
  signature.addEventListener('pointerleave', reset);
  signature.addEventListener('blur', reset);
  signature.addEventListener('focus', () => {
    if (!signatureMotion.matches) letters.forEach((letter,i) => letter.style.setProperty('--letter-lift', `${-Math.sin(i/(letters.length-1)*Math.PI)*4}px`));
  });
});

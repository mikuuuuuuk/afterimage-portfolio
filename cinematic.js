/* Original implementation. Research and reference credits: see REFERENCES.md. */
(() => {
  'use strict';
  const clamp = x => Math.max(0, Math.min(1, x));
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const TAU = Math.PI * 2;
  const coarse=matchMedia('(pointer:coarse)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const palettes = ['#b5e4ec', '#86e6da', '#bcb4ff', '#edc7a5', '#b9d6ae', '#f1aecf', '#9ee8d8', '#a8c7ff', '#e2d8c8'];
  const ids = ['threshold','fluidScene','gravityScene','revealScene','clothScene','orbitScene','fieldScene','lensScene','epilogue'];

  // Small, bounded emitter. Sprites are painted once; no blur filters per frame.
  const trail = document.createElement('canvas');
  trail.className = 'pointer-jet'; trail.setAttribute('aria-hidden', 'true');
  document.body.append(trail);
  const ctx = trail.getContext('2d');
  const sprites = palettes.map(color => {
    const c = document.createElement('canvas'); c.width = c.height = 48;
    const g = c.getContext('2d'), glow = g.createRadialGradient(24,24,0,24,24,24);
    glow.addColorStop(0,'#ffffff'); glow.addColorStop(.1,color); glow.addColorStop(.32,`${color}70`); glow.addColorStop(1,`${color}00`);
    g.fillStyle = glow; g.fillRect(0,0,48,48); return c;
  });
  const particles = []; let particleFrame = 0, particleTime = 0;
  let last = null, held = false, dpr = 1;
  function resizeTrail() {
    dpr = Math.min(devicePixelRatio || 1, 1.25);
    trail.width = Math.round(innerWidth*dpr); trail.height = Math.round(innerHeight*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resizeTrail(); addEventListener('resize', resizeTrail);
  function emit(x,y,dx,dy,count,burst=false,velocityScale=1) {
    if(reduced.matches || document.hidden || window.WorldFX?.active) return;
    const index = Math.max(0,ids.indexOf(document.querySelector('.scene.is-active')?.id));
    const speed = Math.min(32,Math.hypot(dx,dy)*velocityScale), direction = Math.atan2(dy,dx)+Math.PI;
    for(let i=0;i<count;i++) {
      const angle = burst ? Math.random()*TAU : direction+(Math.random()-.5)*1.5;
      const force = burst ? 75+Math.random()*220 : 15+speed*5+Math.random()*65;
      const t = Math.random(), life = .45+Math.random()*.65;
      particles.push({x:x-dx*t,y:y-dy*t,z:0,vx:Math.cos(angle)*force,vy:Math.sin(angle)*force,vz:(Math.random()-.5)*130,
        life,max:life,size:.7+Math.random()*1.4,color:index,phase:Math.random()*TAU});
    }
    if(particles.length>420) particles.splice(0,particles.length-420);
    if(!particleFrame) { particleTime=performance.now(); particleFrame=requestAnimationFrame(drawParticles); }
  }
  function drawParticles(now) {
    particleFrame=0;
    const dt=Math.min(.035,(now-particleTime)/1000); particleTime=now;
    ctx.clearRect(0,0,innerWidth,innerHeight); ctx.globalCompositeOperation='lighter';
    for(let i=particles.length-1;i>=0;i--) {
      const p=particles[i]; p.life-=dt;
      if(p.life<=0){particles.splice(i,1);continue;}
      const ox=p.x,oy=p.y;
      p.vx+=Math.cos(p.phase+now*.002)*dt*17; p.vy+=Math.sin(p.phase+now*.002)*dt*17;
      p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;
      const drag=Math.exp(-2.8*dt);p.vx*=drag;p.vy*=drag;
      const a=p.life/p.max, scale=500/(500+p.z),r=p.size*scale*(.6+a*.4);
      ctx.globalAlpha=a*.65;ctx.strokeStyle=palettes[p.color];ctx.lineWidth=r*.55;
      ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(p.x,p.y);ctx.stroke();
      ctx.globalAlpha=a*.7;ctx.drawImage(sprites[p.color],p.x-r*4,p.y-r*4,r*8,r*8);
    }
    ctx.globalAlpha=1;
    if(particles.length)particleFrame=requestAnimationFrame(drawParticles);
  }
  addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    const now=performance.now();
    if(last){const dt=Math.max(8,now-last.t),dx=e.clientX-last.x,dy=e.clientY-last.y;
      const distance=Math.hypot(dx,dy);
      if(distance>1 && distance<innerWidth*.5)emit(e.clientX,e.clientY,dx,dy,Math.min(18,Math.ceil(distance/(held?3:7))),false,16/dt);
    }
    last={x:e.clientX,y:e.clientY,t:now};
  },{passive:true});
  addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;held=true;emit(e.clientX,e.clientY,0,0,54,true);},{passive:true});
  const release=()=>{held=false;};
  addEventListener('pointerup',release);addEventListener('pointercancel',release);
  addEventListener('blur',()=>{held=false;last=null;});
  document.documentElement.addEventListener('pointerleave',()=>{last=null;document.querySelector('.custom-cursor')?.classList.remove('is-visible');});

  // Parametric surfaces with calculated smooth normals and a perspective camera.
  function surface(rows,cols,fn) {
    const data=[],indices=[];
    for(let i=0;i<=rows;i++)for(let j=0;j<=cols;j++){
      const u=i/rows,v=j/cols,p=fn(u,v),a=fn(u+.0001,v),b=fn(u,v+.0001);
      const du=a.map((x,k)=>x-p[k]),dv=b.map((x,k)=>x-p[k]);
      const n=[du[1]*dv[2]-du[2]*dv[1],du[2]*dv[0]-du[0]*dv[2],du[0]*dv[1]-du[1]*dv[0]];
      const l=Math.hypot(...n)||1;data.push(...p,...n.map(x=>x/l));
      if(i<rows&&j<cols){const q=i*(cols+1)+j;indices.push(q,q+cols+1,q+1,q+1,q+cols+1,q+cols+2);}
    }
    return {data:new Float32Array(data),indices:new Uint16Array(indices)};
  }
  function beveledPanel() {
    const data=[],indices=[];
    for(let face=0;face<6;face++) {
      const axis=Math.floor(face/2),sign=face%2?1:-1;
      const part=surface(12,12,(u,v)=>{
        const p=[0,0,0];p[axis]=sign;p[(axis+1)%3]=u*2-1;p[(axis+2)%3]=v*2-1;
        const core=p.map(x=>Math.max(-.84,Math.min(.84,x))),delta=p.map((x,k)=>x-core[k]),length=Math.hypot(...delta);
        return core.map((x,k)=>x+.16*delta[k]/length);
      });
      const offset=data.length/6;data.push(...part.data);indices.push(...Array.from(part.indices,x=>x+offset));
    }
    return {data:new Float32Array(data),indices:new Uint16Array(indices)};
  }
  const vertex = `
    attribute vec3 position; attribute vec3 normal;
    uniform vec3 offset, scale, rotation; uniform vec2 resolution;
    uniform float time, wave, streak; varying vec3 N, P;
    mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
    mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
    mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
    void main(){
      vec3 p=position,n=normal;
      if(streak>0.){p.x+=n.x;p.z=mod(p.z+time*8.,18.)-12.+n.z;n=vec3(0.,0.,1.);}
      if(wave>0.){float a=p.x*8.+time*4.,b=p.y*5.-time*3.;p.z+=wave*(sin(a)*.12+cos(b)*.08);n=normalize(n+vec3(-wave*.96*cos(a),wave*.4*sin(b),0.));}
      mat3 R=rz(rotation.z)*ry(rotation.y)*rx(rotation.x);
      P=R*(p*scale)+offset;N=normalize(R*(n/scale));
      float d=6.-P.z;float aspect=resolution.x/resolution.y;
      gl_Position=vec4(P.x*2.3/aspect,P.y*2.3,1.002*d-.2002,d);
    }`;
  const fragment = `
    precision mediump float;varying vec3 N,P;uniform vec3 tint;uniform float alpha,metal,time;
    void main(){
      vec3 n=normalize(N),v=normalize(vec3(0.,0.,6.)-P);if(!gl_FrontFacing)n=-n;
      vec3 light=normalize(vec3(-.6,1.,2.));float diffuse=max(0.,dot(n,light));
      float fres=pow(1.-max(dot(n,v),0.),3.);
      float spec=pow(max(0.,dot(n,normalize(light+v))),90.);
      vec3 r=reflect(-v,n);
      float strip=pow(max(0.,1.-abs(r.x*.55+r.y*.8-.2)),34.);
      float strip2=pow(max(0.,1.-abs(r.y+.5)),45.);
      vec3 color=tint*(.13+diffuse*.55)+vec3(.7,.89,1.)*strip*metal+vec3(1.,.66,.42)*strip2*metal*.45;
      color+=vec3(1.)*spec*.9+tint*fres*.65;
      color=color/(color+vec3(.65));color=pow(color,vec3(.4545));
      gl_FragColor=vec4(color,alpha);
    }`;
  const root=document.createElement('div');root.className='cinema-stage';root.setAttribute('aria-hidden','true');
  root.innerHTML='<div class="cinema-veil"></div><canvas></canvas><div class="cinema-caption"><span></span><b></b></div>';
  document.body.append(root);
  const veil=root.firstElementChild,canvas=root.querySelector('canvas'),caption=root.querySelector('.cinema-caption');
  let gl=null,program=null,uniform={},mesh={},busy=false,attributes={},transitionProgress=0,quality=1,slowFrames=0;
  function initGL(){
    try {
      gl=canvas.getContext('webgl',{alpha:true,antialias:true,depth:true,powerPreference:'high-performance'});
      if(!gl)return;
      const shader=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};
      program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);
      if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
      gl.useProgram(program);
      attributes={p:gl.getAttribLocation(program,'position'),n:gl.getAttribLocation(program,'normal')};
      for(const key of ['offset','scale','rotation','resolution','time','wave','tint','alpha','metal','streak'])uniform[key]=gl.getUniformLocation(program,key);
      const upload=geometry=>{const v=gl.createBuffer(),i=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,v);gl.bufferData(gl.ARRAY_BUFFER,geometry.data,gl.STATIC_DRAW);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,i);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,geometry.indices,gl.STATIC_DRAW);return{v,i,count:geometry.indices.length};};
      mesh.ring=upload(surface(72,12,(u,v)=>{const a=u*TAU,b=v*TAU,r=1+.085*Math.cos(b);return [r*Math.cos(a),r*Math.sin(a),.085*Math.sin(b)];}));
      mesh.sphere=upload(surface(32,48,(u,v)=>{const a=(.0001+u*.9998)*Math.PI,b=v*TAU;return[Math.sin(a)*Math.cos(b),Math.cos(a),Math.sin(a)*Math.sin(b)];}));
      mesh.spark=upload(surface(6,8,(u,v)=>{const a=(.0001+u*.9998)*Math.PI,b=v*TAU;return[Math.sin(a)*Math.cos(b),Math.cos(a),Math.sin(a)*Math.sin(b)];}));
      const starData=[],starIndices=[];
      for(let i=0;i<64;i++){
        const t=i*2.39996,r=1.9+(i%7)*.15,k=starData.length/6;
        for(const [x,z] of [[-.007,-.35],[.007,-.35],[-.007,.35],[.007,.35]])starData.push(Math.cos(t)*r,Math.sin(t)*r,i*.71,x,0,z);
        starIndices.push(k,k+1,k+2,k+1,k+3,k+2);
      }
      mesh.stars=upload({data:new Float32Array(starData),indices:new Uint16Array(starIndices)});
      mesh.panel=upload(beveledPanel());
      mesh.sheet=upload(surface(32,32,(u,v)=>[(u-.5)*2,(v-.5)*2,0]));
      mesh.petal=upload(surface(28,16,(u,v)=>{const a=(v-.5)*Math.PI;return[Math.sin(a)*Math.sin(u*Math.PI)*.53,u*2,.3*Math.sin(u*Math.PI)+.18*Math.cos(a)*Math.sin(u*Math.PI)];}));
      gl.enable(gl.DEPTH_TEST);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0,0,0,0);
    }catch(error){console.warn('3D transitions unavailable; using the cover fallback.',error);gl=null;}
  }
  initGL();canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();gl=null;});
  function draw(name,position,size,rotation,color,opacity=1,wave=0,metal=.85){
    if(!gl)return;
    if(opacity<.005)return;
    gl.uniform1f(uniform.streak,name==='stars'?1:0);
    const m=mesh[name];gl.bindBuffer(gl.ARRAY_BUFFER,m.v);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,m.i);
    const {p,n}=attributes;
    gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(n);gl.vertexAttribPointer(n,3,gl.FLOAT,false,24,12);
    gl.uniform3fv(uniform.offset,position);gl.uniform3fv(uniform.scale,typeof size==='number'?[size,size,size]:size);gl.uniform3fv(uniform.rotation,rotation);gl.uniform3fv(uniform.tint,color);
    gl.uniform1f(uniform.alpha,opacity);gl.uniform1f(uniform.wave,wave);gl.uniform1f(uniform.metal,metal);gl.drawElements(gl.TRIANGLES,m.count,gl.UNSIGNED_SHORT,0);
  }
  const themes=[
    ['RETURN / 00','THE THRESHOLD',[.65,.8,.7]],
    ['PASSAGE / 01','LIQUID MEMBRANE',[.22,.72,.65]],
    ['PASSAGE / 02','ORBITAL ECLIPSE',[.46,.36,.85]],
    ['PASSAGE / 03','THE GLASS ARCHIVE',[.8,.52,.3]],
    ['PASSAGE / 04','A FOLD IN SPACE',[.42,.65,.42]],
    ['PASSAGE / 05','CHROMATIC BLOOM',[.85,.3,.56]],
    ['PASSAGE / 06','POLAR ALIGNMENT',[.26,.7,.7]],
    ['PASSAGE / 07','BEYOND THE EVENT HORIZON',[.35,.45,1]],
    ['CODA / 08','THE AFTERIMAGE',[.7,.65,.5]]
  ];
  function render(index,p,origin,direction){
    if(!gl)return;
    gl.viewport(0,0,canvas.width,canvas.height);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);
    gl.uniform2f(uniform.resolution,innerWidth,innerHeight);gl.uniform1f(uniform.time,p*4);
    const color=themes[index][2],enter=smooth(0,.22,p),exit=smooth(.68,1,p),a=enter*(1-exit);
    const zoom=smooth(.12,.72,p),z=-6+zoom*10,turn=p*direction;
    const cx=origin.x*(1-smooth(0,.4,p)),cy=origin.y*(1-smooth(0,.4,p));
    if(index===1){
      for(let i=4;i>=0;i--)draw('ring',[cx,cy,z-i*.9],1.05+i*.12,[.3*Math.sin(p*4+i),.2*Math.cos(p*3+i),turn+i*.35],color,a,.75);
      for(let i=0;i<12;i++){const t=i*TAU/12+turn;draw('sphere',[cx+Math.cos(t)*1.6,cy+Math.sin(t)*1.6,z-.7],.065+.025*Math.sin(i),[turn,turn,0],color,a);}
    }else if(index===2){
      const x=-2.5+smooth(0,1,p)*6;
      draw('sphere',[x,0,z],1.6,[.2,turn,0],color,a,0,1);
      draw('ring',[x,0,z],[2.6,2.6,1],[1.08,.25,turn*.4],color,a);
      draw('sphere',[x+2.8*Math.cos(turn*4),1.4*Math.sin(turn*4),z+1],.29,[0,turn,0],[.7,.78,.9],a);
    }else if(index===3){
      for(let i=0;i<12;i++){
        const side=i%2?1:-1, row=Math.floor(i/2),spread=smooth(.43,.95,p);
        draw('panel',[side*(.56+spread*5), (row-2.5)*.75,z-row*.18],[.56,.36,.12],[spread*side*.8,side*(.2+spread*1.6),spread*side*.25],color,a,0,1);
      }
    }else if(index===4){
      for(let i=2;i>=0;i--){const lift=smooth(.38,.95,p)*7;
        draw('sheet',[0,-1+lift,z-i*.5],[5,3,1],[.25+exit*1.1,.12,Math.sin(p*2)*.12],i===1?[.17,.3,.24]:color,a,1.7,.5);}
    }else if(index===5){
      for(let layer=1;layer>=0;layer--)for(let i=0;i<10;i++){
        const t=i*TAU/10+layer*.31+turn*.25,open=smooth(.12,.92,p);
        draw('petal',[cx,cy,z-layer*.4],1+layer*.3,[.95-open*1.9,0,t],layer?color:[.85,.63,.44],a,0,.9);
      }
      draw('sphere',[cx,cy,z],.25,[0,0,0],[.85,.66,.3],a);
    }else if(index===6){
      for(let i=0;i<7;i++)draw('ring',[cx,cy,z-i*.2],1.2+i*.16,[turn*2+i*.42,turn*1.3+i*.52,turn*.8],i%2?color:[.8,.47,.45],a);
      draw('sphere',[cx,cy,z],.26,[turn,0,0],[.8,.9,.9],a);
    }else if(index===7){
      for(let i=0;i<16;i++){const depth=((i*.9+p*22)%15)-10;
        draw('ring',[Math.sin(i*.38)*.15,Math.cos(i*.38)*.15,depth],1.7,[0,0,turn+i*.08],color,a*(.25+.6*(i/16)));}
      draw('stars',[0,0,0],1,[0,0,0],[.6,.77,1],a);
    }else if(index===0){
      for(let i=0;i<8;i++)draw('ring',[0,0,-8+i*.7+zoom*9],1.25,[.05*i,.12*Math.sin(turn),turn*.2],color,a);
    }else{
      for(let i=0;i<9;i++){const t=i*TAU/9+turn*.3;
        draw('panel',[Math.cos(t)*(1+exit*4),Math.sin(t)*(1+exit*4),z-i*.1],[.65,1.8,.1],[0,.4+exit,t],color,a,0,1);}
    }
  }
  document.documentElement.classList.add('cinema-ready');
  window.WorldFX={
    get active(){return busy;},
    get suspendScene(){return document.hidden||(busy&&transitionProgress<.62);},
    play(index,event,onCovered,onDone,direction=1){
      if(busy)return false;busy=true;transitionProgress=0;slowFrames=0;
      const theme=themes[index]||themes[0];
      const resizeBuffer=()=>{
        const ratio=Math.max(1,Math.min(devicePixelRatio||1,coarse?1.25:1.5,Math.sqrt((coarse?950000:2000000)/(innerWidth*innerHeight))));
        const w=Math.round(innerWidth*ratio),h=Math.round(innerHeight*ratio);
        if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
      };
      resizeBuffer();
      root.dataset.room=String(index);caption.children[0].textContent=theme[0];caption.children[1].textContent=theme[1];
      root.style.setProperty('--cinema-color',palettes[index]||palettes[0]);root.classList.add('is-running');
      document.documentElement.classList.add('cinema-running');
      const origin={x:((event?.clientX??innerWidth*.5)/innerWidth-.5)*2,y:(.5-(event?.clientY??innerHeight*.5)/innerHeight)*2};
      let elapsed=0,lastTime=performance.now(),swapped=false;const duration=reduced.matches?650:2450;
      const frame=now=>{
        const delta=now-lastTime;lastTime=now;
        if(document.hidden){requestAnimationFrame(frame);return;}
        // One swap and one fully covered paint must occur even after a long frame.
        elapsed+=Math.min(100,delta);const p=clamp(elapsed/duration);transitionProgress=p;
        if(delta>27)slowFrames++;else slowFrames=Math.max(0,slowFrames-1);
        
        // Opaque by 40%, swap at 45%, reveal after 67%. One timeline owns all changes.
        const cover=smooth(.08,.4,p)*(1-smooth(.67,1,p));veil.style.opacity=String(cover);
        caption.style.opacity=String(smooth(.26,.4,p)*(1-smooth(.62,.78,p)));
        if(!reduced.matches)render(index,p,origin,direction);
        if(p>=.45&&!swapped){swapped=true;onCovered();}
        if(p<1)requestAnimationFrame(frame);
        else{root.classList.remove('is-running');document.documentElement.classList.remove('cinema-running');busy=false;onDone();}
      };
      requestAnimationFrame(frame);return true;
    }
  };
})();

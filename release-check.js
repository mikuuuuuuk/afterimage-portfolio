// Offer updates explicitly; never reload in the middle of a drag or chapter.
(() => {
  if(location.protocol==='file:')return;
  const current=document.querySelector('meta[name="site-release"]')?.content;
  let checked=0;
  async function check(){
    if(document.hidden||Date.now()-checked<60000)return;checked=Date.now();
    try{const response=await fetch('release.json?ts='+Date.now(),{cache:'no-store'});if(!response.ok)return;const data=await response.json();if(!data.version||data.version===current||document.querySelector('.release-update'))return;
      const button=document.createElement('button');button.className='release-update mono';button.textContent='NEW EDITION AVAILABLE · RELOAD';button.onclick=()=>{const url=new URL(location.href);url.searchParams.set('edition',data.version);location.replace(url.href);};document.body.append(button);
    }catch{/* Offline visitors keep the currently loaded edition. */}
  }
  document.addEventListener('visibilitychange',check);setTimeout(check,6000);
})();

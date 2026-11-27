// Parser-blocking on purpose: resolve the stored choice before any page or 3D UI is painted.
// Without JavaScript the stylesheet and picture sources follow prefers-color-scheme directly.
(() => {
  const root=document.documentElement, sheet=document.getElementById('geodema-night');
  const system=matchMedia('(prefers-color-scheme: dark)'), key='geodema:appearance';
  const valid=v=>v==='dark'||v==='light';
  const read=()=>{try{return localStorage.getItem(key);}catch{return null;}};
  let choice=read();
  function controls(){
    const dark=root.dataset.theme==='dark';
    for(const b of document.querySelectorAll('[data-theme-toggle]')){
      b.setAttribute('aria-pressed',String(dark));b.title=dark?b.dataset.light:b.dataset.dark;
    }
  }
  function apply(){
    const next=valid(choice)?choice:(system.matches?'dark':'light'),changed=root.dataset.theme!==next;
    root.dataset.theme=next;
    sheet.media=next==='dark'?'all':'not all';
    for(const m of document.querySelectorAll('meta[name="theme-color"]'))m.content=next==='dark'?'#060c15':'#f3f6f9';
    controls();
    if(changed)window.dispatchEvent(new CustomEvent('geodema:theme',{detail:next}));
  }
  apply();
  document.addEventListener('DOMContentLoaded',controls,{once:true});
  document.addEventListener('click',e=>{const b=e.target.closest?.('[data-theme-toggle]');if(!b)return;
    choice=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem(key,choice);}catch{}apply();
  });
  system.addEventListener('change',()=>{if(!valid(choice))apply();});
  window.addEventListener('storage',e=>{if(e.key===key||e.key===null){choice=read();apply();}});
  window.addEventListener('pageshow',e=>{if(e.persisted){choice=read();apply();}});
})();

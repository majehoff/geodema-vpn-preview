// Parser-blocking on purpose: resolve the stored choice before any page or 3D UI is painted.
// Without JavaScript the stylesheet and picture sources follow prefers-color-scheme directly.
(() => {
  const root=document.documentElement, sheet=document.getElementById('geodema-night');
  const system=matchMedia('(prefers-color-scheme: dark)'), key='geodema:appearance';
  const read=()=>{try{const v=localStorage.getItem(key);return v==='dark'||v==='light'?v:null;}catch{return null;}};
  let choice=read();
  const sourceSelector='source[data-feature-night]';
  const nightMedia=()=>root.dataset.theme==='dark'?'all':'not all';
  function syncSource(s){const media=nightMedia();if(s.media!==media)s.media=media;}
  function controls(){
    const dark=root.dataset.theme==='dark';
    document.querySelectorAll(sourceSelector).forEach(syncSource);
    for(const b of document.querySelectorAll('[data-theme-toggle]')){
      b.setAttribute('aria-pressed',String(dark));b.title=dark?b.dataset.light:b.dataset.dark;
    }
  }
  function apply(){
    const next=choice??(system.matches?'dark':'light'),changed=root.dataset.theme!==next;
    root.dataset.theme=next;
    sheet.media=next==='dark'?'all':'not all';
    for(const m of document.querySelectorAll('meta[name="theme-color"]'))m.content=next==='dark'?'#060c15':'#f3f6f9';
    controls();
    if(changed)window.dispatchEvent(new CustomEvent('geodema:theme',{detail:next}));
  }
  apply();
  // On an OS/override mismatch, pair newly parsed <source>s with the resolved theme before
  // their lazy images paint, even when arriving on a fragment half-way down the page.
  let parsing;
  if(choice&&system.matches!==(choice==='dark')){
    parsing=new MutationObserver(records=>{
      for(const r of records)for(const n of r.addedNodes){
        if(n.nodeType!==1)continue;
        if(n.matches(sourceSelector))syncSource(n);
        else n.querySelectorAll(sourceSelector).forEach(syncSource);
      }
    });
    parsing.observe(root,{childList:true,subtree:true});
  }
  document.addEventListener('DOMContentLoaded',()=>{parsing?.disconnect();controls();},{once:true});
  document.addEventListener('click',e=>{const b=e.target.closest?.('[data-theme-toggle]');if(!b)return;
    choice=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem(key,choice);}catch{}apply();
  });
  system.addEventListener('change',()=>{if(!choice)apply();});
  window.addEventListener('storage',e=>{if(e.key===key||e.key===null){choice=read();apply();}});
  window.addEventListener('pageshow',e=>{if(e.persisted){choice=read();apply();}});
})();

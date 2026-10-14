function toast(msg, type='ok'){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div'); t.id='toast';
    Object.assign(t.style,{position:'fixed',bottom:'22px',right:'22px',zIndex:9999,padding:'12px 18px',borderRadius:'10px',fontWeight:500,fontSize:'13.5px',boxShadow:'0 8px 24px rgba(15,40,55,.18)',transition:'all .25s',opacity:0,transform:'translateY(10px)',maxWidth:'360px',display:'flex',alignItems:'center',gap:'10px'});
    document.body.appendChild(t);
  }
  const icons = {
    ok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
    er:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16h.01"/></svg>',
    wr:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v5"/></svg>'
  };
  t.style.background = type==='ok'?'#e4f6eb':type==='er'?'#fdeaea':'#fdf3dd';
  t.style.color = type==='ok'?'#2e9e5b':type==='er'?'#e05252':'#d9930b';
  t.innerHTML = `${icons[type]||icons.ok}<span>${msg}</span>`;
  requestAnimationFrame(()=>{t.style.opacity=1;t.style.transform='translateY(0)';});
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(()=>{t.style.opacity=0;t.style.transform='translateY(10px)';},2600);
}
window.toast = toast;
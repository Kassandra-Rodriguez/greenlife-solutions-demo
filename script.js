(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── EN / ES toggle: swap text nodes from data-en / data-es ── */
  const toggle = document.getElementById('langToggle');
  const nodes = [...document.querySelectorAll('[data-en]')];
  function applyLang(lang){
    document.documentElement.lang = lang;
    nodes.forEach(el => {
      const txt = el.getAttribute('data-' + lang);
      if (txt == null) return;
      const t = [...el.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (t) t.textContent = txt; else if (!el.children.length) el.textContent = txt;
    });
    toggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    try { localStorage.setItem('gl-lang', lang); } catch(e){}
  }
  toggle.addEventListener('click', () => applyLang(document.documentElement.lang === 'es' ? 'en' : 'es'));
  try { if (localStorage.getItem('gl-lang') === 'es') applyLang('es'); } catch(e){}

  /* ── scroll reveal ── */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  /* ── parallax: floating cut-outs drift at their own speed ── */
  const movers = [...document.querySelectorAll('[data-speed]')];
  const hero = document.getElementById('hero');
  let ticking = false;
  function paint(){
    ticking = false;
    const y = Math.min(window.scrollY, hero.offsetHeight + 200);
    movers.forEach(el => {
      const s = parseFloat(el.dataset.speed);
      el.style.transform = `translate3d(0, ${(-y * s).toFixed(1)}px, 0)`;
    });
  }
  if (!reduce){
    addEventListener('scroll', () => { if (!ticking){ ticking = true; requestAnimationFrame(paint); } }, { passive: true });
    paint();
  }

  /* ── quote form: validate, then show a demo confirmation ── */
  const form = document.getElementById('quoteForm'), msg = document.getElementById('formMsg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(f => {
      const bad = !f.value.trim(); f.classList.toggle('invalid', bad); if (bad) ok = false;
    });
    const es = document.documentElement.lang === 'es';
    msg.style.color = ok ? '' : '#c0392b';
    msg.textContent = ok
      ? (es ? 'Gracias. (Demo: el formulario no envía todavía.)' : 'Thanks! (Demo: this form doesn’t send yet.)')
      : (es ? 'Completa los campos marcados.' : 'Please fill in the highlighted fields.');
    if (ok) form.reset();
  });
  form.addEventListener('input', e => e.target.classList.remove('invalid'));
})();

/* Portão de legibilidade do GeloPro (G-L1 a G-L9). Regras: CLAUDE.md e design-system/gelopro/hierarquia-cor.md (paleta 2c, 25/10/2026). Contraste AA: 4,5:1 até 24 px, 3:1 acima.
   Uso: abrir a tela com ?portao=1, ou chamar GeloProPortao.rodar() no console. Resultado em window.__portao. */
(function () {
  const pc = (s) => { const n = (String(s).match(/[\d.]+/g) || []).map(Number); return n.length < 3 ? null : [n[0], n[1], n[2], n.length > 3 ? n[3] : 1]; };
  const mix = (f, b) => [0, 1, 2].map(i => f[i] * f[3] + b[i] * (1 - f[3])).concat(1);
  const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const lum = (c) => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
  const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const hx = (c) => '#' + c.slice(0, 3).map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  const oklab = (c) => { const [r, g, b] = c.slice(0, 3).map(lin); const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b), m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b), s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b); return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s]; };
  const dist = (a, b) => { const p = oklab(a), q = oklab(b); return Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); };
  const croma = (c) => { const p = oklab(c); return Math.hypot(p[1], p[2]); };
  const MAT = { protanopia: [[0.152286, 1.052583, -0.204868], [0.114503, 0.786281, 0.099216], [-0.003882, -0.048116, 1.051998]], deuteranopia: [[0.367322, 0.860646, -0.227968], [0.280085, 0.672501, 0.047413], [-0.01182, 0.04294, 0.968881]], tritanopia: [[1.255528, -0.076749, -0.178779], [-0.078411, 0.930809, 0.147602], [0.004733, 0.691367, 0.3039]] };
  const unlin = (v) => { v = Math.max(0, Math.min(1, v)); return 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055); };
  const sim = (c, t) => { const l = c.slice(0, 3).map(lin), M = MAT[t]; return M.map(r => unlin(r[0] * l[0] + r[1] * l[1] + r[2] * l[2])).concat(1); };

  const partes = (s) => { const out = []; let d = 0, cur = ''; for (const ch of String(s)) { if (ch === '(') d++; if (ch === ')') d--; if (ch === ',' && d === 0) { out.push(cur.trim()); cur = ''; } else cur += ch; } if (cur.trim()) out.push(cur.trim()); return out; };
  const coresDe = (s) => (String(s).replace(/url\([^)]*\)/g, '').match(/rgba?\([^)]+\)/g) || []).map(pc).filter(Boolean);
  // Camadas com background-clip:border-box, quando há outra camada por cima, formam só a aresta (borda refletiva): não contam como fundo do texto.
  function aresta(el) {
    const cs = getComputedStyle(el), im = partes(cs.backgroundImage), cl = partes(cs.backgroundClip);
    if (im.length < 2 || !cl.includes('padding-box')) return null;
    const c = []; im.forEach((l, i) => { if (/gradient/.test(l) && (cl[i] || cl[cl.length - 1]) === 'border-box') c.push(...coresDe(l)); });
    return c.length ? c : null;
  }
  function camadas(el) {
    const cs = getComputedStyle(el), L = [];
    if (cs.boxShadow && cs.boxShadow !== 'none') for (const m of cs.boxShadow.matchAll(/(rgba?\([^)]+\))\s+0px\s+0px\s+0px\s+(\d{3,})px\s+inset/g)) L.push([pc(m[1])]);
    const im = partes(cs.backgroundImage), cl = partes(cs.backgroundClip);
    const borda = im.length > 1 && cl.includes('padding-box'); im.forEach((l, i) => { if (!/gradient/.test(l)) return; if (borda && (cl[i] || cl[cl.length - 1]) === 'border-box') return; const c = coresDe(l); if (c.length) L.push(c); });
    const bc = pc(cs.backgroundColor); if (bc && bc[3] > 0) L.push([bc]);
    return L;
  }
  const cache = new Map();
  function fundo(el) {
    if (cache.has(el)) return cache.get(el);
    const st = [];
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) for (const l of camadas(n)) { st.push(l); if (l.every(c => c[3] >= 1)) return guardar(el, st); }
    st.push([[201, 202, 206, 1]]); return guardar(el, st);
  }
  function guardar(el, st) {
    let c = st[st.length - 1].map(x => x.slice(0, 3).concat(1));
    for (let i = st.length - 2; i >= 0; i--) { const nx = []; for (const b of c) for (const f of st[i]) nx.push(mix(f, b)); c = nx.slice(0, 24); }
    cache.set(el, c); return c;
  }
  const pior = (fg, bgs) => bgs.reduce((w, b) => { const f = fg[3] < 1 ? mix(fg, b) : fg; const r = ratio(f, b); return !w || r < w.r ? { r, f, b } : w; }, null);
  const inativo = (el) => !!el.closest('button:disabled,[aria-disabled="true"],[disabled],[data-gp-inativo="1"]');
  const isento = (el) => !!el.closest('[data-gp-isento],[data-print],[data-doc],[aria-hidden="true"][data-decor]') || !!(el.parentElement && el.parentElement.hasAttribute('data-cc') && el.tagName === 'SPAN' && !el.querySelector('*')) || (!!document.querySelector('[data-tema]') && !el.closest('[data-tema]'));
  const rotulo = (el) => (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().replace(/\s+/g, ' ').slice(0, 40);

  function rodar(root, opt) {
    root = root || document.body; opt = opt || {}; cache.clear();
    const F = [], A = [], cores = {};
    const falha = (g, el, msg) => F.push({ g, txt: rotulo(el), msg });
    root.querySelectorAll('*').forEach(el => {
      if (el.closest('#gp-portao') || isento(el) || !el.getClientRects().length) return;
      if (el.closest('svg') && el.tagName.toLowerCase() !== 'svg') return;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity === 0) return;
      const t = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
      const ehInput = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';
      const desligado = inativo(el);
      if ((t || (ehInput && (el.value || el.placeholder))) && !desligado) {
        const fs = parseFloat(cs.fontSize), fw = parseInt(cs.fontWeight, 10) || 400, txt = t || el.value || el.placeholder;
        const controle = !!el.closest('button,[role="button"],[role="tab"],label,[data-rotulo]');
        const curto = txt.length <= 20 && controle;
        if (fs < 14) falha('G-L1 tamanho', el, `${fs}px (mínimo 14)`);
        else if (fs < 16 && !curto) falha('G-L1 tamanho', el, `${fs}px em texto que informa (mínimo 16)`);
        else if (fs < 16 && curto && fw < 600) falha('G-L1 tamanho', el, `rótulo ${fs}px peso ${fw} (mínimo 14 px peso 600)`);
        if (fs < 18 && fw < 500) falha('G-L2 peso', el, `peso ${fw} em ${fs}px (mínimo 500)`);
        let fg = pc(cs.color); if (ehInput && !el.value) fg = pc(getComputedStyle(el, '::placeholder').color) || fg;
        // Verde CTA #00b100 com texto branco (PR #26, decisão de design comercial do Pedro): dentro de [data-verde="1"] o mínimo é 2,5:1.
        const w = pior(fg, fundo(el)), min = el.closest('[data-verde="1"]') ? 2.5 : fs > 24 ? 3 : 4.5;
        if (w && w.r < min) falha('G-L3 contraste', el, `${w.r.toFixed(2)}:1 ${hx(w.f)} sobre ${hx(w.b)} (mínimo ${min}:1)`);
        // G-L5 (branco puro) retirada em 24/10/2026: texto do Bancada é #ffffff por decisão do Pedro.
        if (w && croma(w.f) < 0.05 && !el.closest('button,[data-selo],[data-visor],[role="dialog"] [data-print]')) { const te = el.closest('[data-tema]'); const k = (te ? [...document.querySelectorAll('[data-tema]')].indexOf(te) : 0) + (lum(w.b) < 0.18 ? ' escuro' : ' claro'); (cores[k] = cores[k] || []).push(w.f); }
      }
      const ctrl = el.matches('button,[role="button"],input,textarea,select,a[href]') && !el.closest('[data-print]');
      if (ctrl && !desligado) {
        const alvo = el.closest('[data-campo]') || el, r = alvo.getBoundingClientRect(), inline = el.tagName === 'A' && cs.display === 'inline';
        if (!inline && Math.min(r.width, r.height) < 47.5) falha('G-L7 toque', el, `${Math.round(r.width)}×${Math.round(r.height)} px (mínimo 48)`);
        const bw = parseFloat(cs.borderTopWidth);
        if (bw >= 1 && cs.borderTopStyle !== 'none') { const bcor = pc(cs.borderTopColor), ar = bcor && bcor[3] === 0 ? aresta(el) : null; const b = ar ? ar.map(c => pior(c, fundo(el.parentElement))).reduce((x, y) => (!x || y.r > x.r ? y : x), null) : pior(bcor, fundo(el.parentElement)); const bgEl = pc(cs.backgroundColor), enchs = bgEl && bgEl[3] === 1 ? [bgEl] : coresDe(cs.backgroundImage).filter(c => c[3] === 1); const ench = enchs.length ? enchs.map(c => pior(c, fundo(el.parentElement))).reduce((x, y) => (!x || y.r < x.r ? y : x), null) : null; const mc = el.closest('[data-verde="1"]') ? 2.5 : 3; if (b && b.r < mc && !(ench && ench.r >= mc)) falha('G-L4 contorno', el, `${b.r.toFixed(2)}:1 ${hx(b.f)} sobre ${hx(b.b)} (mínimo ${mc}:1 no contorno ou no preenchimento)`); }
      }
      if (el.tagName.toLowerCase() === 'svg' && el.closest('button') && !desligado && el.getAttribute('stroke') === 'currentColor') { const b = pior(pc(cs.color), fundo(el.parentElement)), mi = el.closest('[data-verde="1"]') ? 2.5 : 3; if (b && b.r < mi) falha('G-L4 ícone', el.closest('button'), `ícone ${b.r.toFixed(2)}:1 (mínimo ${mi}:1)`); }
      if (el.tagName === 'INPUT' && !desligado && !/^(checkbox|radio|hidden|range|color)$/.test(el.type)) {
        const tx = el.value || el.placeholder || '';
        if (tx) {
          const cx = rodar._cx || (rodar._cx = document.createElement('canvas').getContext('2d'));
          cx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
          const larg = cx.measureText(tx).width + (parseFloat(cs.letterSpacing) || 0) * tx.length;
          const disp = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
          if (larg > disp + 1) falha('G-L8 texto cortado', el, `campo "${tx.slice(0, 30)}": ${Math.round(larg)} px de texto em ${Math.round(disp)} px`);
        }
      }
      if (t && !desligado && parseFloat(cs.fontSize) < 18 && (parseFloat(cs.letterSpacing) || 0) < -0.25) falha('G-L1 tamanho', el, `letras apertadas (letter-spacing ${cs.letterSpacing})`);
      const corta = (cs.textOverflow === 'ellipsis' || cs.webkitLineClamp !== 'none' && cs.webkitLineClamp) && (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1);
      if (corta && t) falha('G-L8 texto cortado', el, `${el.scrollWidth}×${el.scrollHeight} em ${el.clientWidth}×${el.clientHeight}`);
    });
    if (document.querySelectorAll('[data-tema]').length <= 1) for (const [k, lst] of Object.entries(cores)) { const niveis = []; lst.forEach(c => { if (!niveis.some(n => dist(n, c) < 0.045)) niveis.push(c); }); if (niveis.length > 2) F.push({ g: 'G-L6 níveis de texto', txt: niveis.map(hx).join(' '), msg: `${niveis.length} cores neutras de texto em fundo ${k} (máximo 2)` }); }
    // G-C1 (paleta 2c): no máximo uma ação principal laranja visível por tela.
    const ctas = [...document.querySelectorAll('button,[role="button"],div,span')].filter(e => { if (e.closest('[inert],[aria-hidden="true"]')) return false; const c = getComputedStyle(e), r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && c.visibility !== 'hidden' && (/rgb\(194, 65, 12\)/.test(c.backgroundColor) || /rgb\(194, 65, 12\)/.test(c.backgroundImage)); }).map(e => e.closest('button,[role="button"]') || e).filter((e, i, a) => a.indexOf(e) === i && !a.some(o => o !== e && o.contains(e)));
    if (ctas.length > 1) F.push({ g: 'G-C1 ação principal', txt: ctas.map(e => (e.innerText || '').trim().slice(0, 24)).join(' | '), msg: `${ctas.length} ações laranja na tela (máximo 1)` });
    const tema = document.querySelector('[data-tema]'), V = tema ? getComputedStyle(tema) : null;
    if (V) {
      const tok = ['tag-sintoma', 'tag-codigo', 'tag-componente', 'tag-teste', 'success'].map(k => [k, pc(V.getPropertyValue('--gp-' + k).trim().replace(/^#(..)(..)(..)$/, (m, a, b, c) => `rgb(${parseInt(a, 16)},${parseInt(b, 16)},${parseInt(c, 16)})`))]).filter(x => x[1]);
      for (let i = 0; i < tok.length; i++) for (let j = i + 1; j < tok.length; j++) for (const t of Object.keys(MAT)) {
        const d = dist(sim(tok[i][1], t), sim(tok[j][1], t));
        if (d < 0.06) A.push({ g: 'G-L9 daltonismo', txt: `${tok[i][0]} × ${tok[j][0]}`, msg: `quase iguais em ${t} (ΔOKLab ${d.toFixed(3)}); exige palavra ou ícone junto` });
      }
    }
    const res = { ok: F.length === 0, falhas: F, alertas: A, quando: new Date().toISOString(), largura: innerWidth, tema: tema ? tema.getAttribute('data-tema') : '' };
    window.__portao = res; return res;
  }
  function painel(res) {
    res = res || rodar();
    let p = document.getElementById('gp-portao'); if (p) p.remove();
    p = document.createElement('div'); p.id = 'gp-portao';
    p.style.cssText = 'position:fixed;right:8px;bottom:8px;z-index:2147483647;max-width:420px;max-height:70vh;overflow:auto;background:#fff;color:#02060d;border:2px solid ' + (res.ok ? '#047857' : '#b91c1c') + ';border-radius:12px;padding:12px;font:500 14px/20px Roboto,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.3)';
    const by = {}; res.falhas.forEach(f => (by[f.g] = by[f.g] || []).push(f));
    p.innerHTML = `<div style="font-weight:700;font-size:16px;color:${res.ok ? '#047857' : '#b91c1c'}">${res.ok ? 'PORTÃO APROVADO' : 'PORTÃO REPROVADO'} · ${res.falhas.length} falhas · ${res.alertas.length} alertas</div>` +
      Object.entries(by).map(([g, l]) => `<div style="margin-top:8px;font-weight:700">${g} (${l.length})</div>` + l.slice(0, 12).map(f => `<div>• ${f.txt.replace(/</g, '&lt;')} — ${f.msg}</div>`).join('')).join('') +
      res.alertas.slice(0, 8).map(a => `<div style="margin-top:4px">⚠ ${a.txt}: ${a.msg}</div>`).join('');
    document.body.appendChild(p); return res;
  }
  window.GeloProPortao = { rodar, painel };
  if (/[?&]portao=1/.test(location.search)) addEventListener('load', () => setTimeout(() => painel(), 2500));
})();

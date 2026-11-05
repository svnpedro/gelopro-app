// GeloPro · Bancada GeloPRO em modo avião (05/11/2026). Service worker próprio da página /bancada/ (escopo ./), separado do app (app/sw.js) e
// do guia (guia-pro/sw.js): cada um tem o seu cache e nenhum apaga o do outro.
// No 1º acesso com sinal, o install guarda tudo o que as 4 teclas usam: a página, o motor (QR, Pix, marca, PDF, licença), os 4 componentes
// visuais importados de ../app/ (.dc.html), as fontes, a textura e o mascote, os 18 CSVs da base técnica (com pmoc_atividades.csv) e as 126 artes
// .webp lidas de ../guia-pro/imagens/. Com sinal: página, .js, .html e .csv vão à rede primeiro (3 s de prazo) e atualizam o cache; artes, fontes e
// imagens saem do cache e só vão à rede se faltarem.
'use strict';
const CACHE = 'bancada-offline-v2'; // v2 (05/11/2026): recortes de icones/ com fundo transparente // nome novo derruba o anterior (o activate apaga todo bancada-offline-* diferente; guia e app ficam)
const REDE_MS = 3000;
const PAGINA = './';
const MOTOR = [
  '../app/vendor/qrcode-generator-1.4.4.js', '../app/gelopro-pix.js', '../app/marca-gelopro.js', '../app/pdf-gelopro.js', '../app/licenca-gelopro.js',
  '../app/IconeGP.dc.html', '../app/LogoMarca.dc.html', '../app/AtalhoTecla.dc.html', '../app/CampoTexto.dc.html',
  '../app/fontes/figtree-latin-wght-normal.woff2', '../app/fontes/figtree-latin-ext-wght-normal.woff2', '../app/fontes/roboto-latin-wght-normal.woff2',
  '../app/fontes/roboto-latin-ext-wght-normal.woff2', '../app/fontes/roboto-mono-latin-wght-normal.woff2',
  '../app/ref/acetinado-sedoso.svg', '../app/marca/gelopro-mascote.png'
];
const BASE = [
  '../base-tecnica/precos_regionais_2026.csv',
  '../base-tecnica/pmoc_atividades.csv',
  '../base-tecnica/codigos_erro_conferidos.csv',
  '../base-tecnica/codigos_erro.csv',
  '../base-tecnica/piscadas.csv',
  '../base-tecnica/ntc_resumo.csv',
  '../base-tecnica/ntc_tolerancias.csv',
  '../base-tecnica/pt_r410a_r32_r22.csv',
  '../base-tecnica/criterios_operacionais.csv',
  '../base-tecnica/ntc_gree.csv',
  '../base-tecnica/ntc_lg.csv',
  '../base-tecnica/ntc_lg_descarga.csv',
  '../base-tecnica/ntc_midea_pontos.csv',
  '../base-tecnica/ntc_midea_tp.csv',
  '../base-tecnica/ntc_samsung.csv',
  '../base-tecnica/ntc_daikin.csv',
  '../base-tecnica/ntc_tcl.csv',
  '../base-tecnica/ntc_agratto.csv'
];
const ARTES = [
  '../guia-pro/imagens/d001.webp', '../guia-pro/imagens/d002.webp', '../guia-pro/imagens/d003.webp', '../guia-pro/imagens/d004.webp',
  '../guia-pro/imagens/d005.webp', '../guia-pro/imagens/d023.webp', '../guia-pro/imagens/d040.webp', '../guia-pro/imagens/d057.webp',
  '../guia-pro/imagens/d058.webp', '../guia-pro/imagens/d073.webp', '../guia-pro/imagens/d087.webp', '../guia-pro/imagens/s04.webp',
  '../guia-pro/imagens/s06.webp', '../guia-pro/imagens/s07.webp', '../guia-pro/imagens/icones/d001_aplicacao.webp',
  '../guia-pro/imagens/icones/d001_ferramenta.webp', '../guia-pro/imagens/icones/d001_p1.webp', '../guia-pro/imagens/icones/d001_p2.webp',
  '../guia-pro/imagens/icones/d001_p3.webp', '../guia-pro/imagens/icones/d001_p4.webp', '../guia-pro/imagens/icones/d001_p5.webp',
  '../guia-pro/imagens/icones/d001_sistema.webp', '../guia-pro/imagens/icones/d002_aplicacao.webp',
  '../guia-pro/imagens/icones/d002_ferramenta.webp', '../guia-pro/imagens/icones/d002_p1.webp', '../guia-pro/imagens/icones/d002_p2.webp',
  '../guia-pro/imagens/icones/d002_p3.webp', '../guia-pro/imagens/icones/d002_p4.webp', '../guia-pro/imagens/icones/d002_p5.webp',
  '../guia-pro/imagens/icones/d002_sistema.webp', '../guia-pro/imagens/icones/d003_aplicacao.webp',
  '../guia-pro/imagens/icones/d003_ferramenta.webp', '../guia-pro/imagens/icones/d003_p1.webp', '../guia-pro/imagens/icones/d003_p2.webp',
  '../guia-pro/imagens/icones/d003_p3.webp', '../guia-pro/imagens/icones/d003_p4.webp', '../guia-pro/imagens/icones/d003_p5.webp',
  '../guia-pro/imagens/icones/d003_sistema.webp', '../guia-pro/imagens/icones/d004_aplicacao.webp',
  '../guia-pro/imagens/icones/d004_ferramenta.webp', '../guia-pro/imagens/icones/d004_p1.webp', '../guia-pro/imagens/icones/d004_p2.webp',
  '../guia-pro/imagens/icones/d004_p3.webp', '../guia-pro/imagens/icones/d004_p4.webp', '../guia-pro/imagens/icones/d004_p5.webp',
  '../guia-pro/imagens/icones/d004_sistema.webp', '../guia-pro/imagens/icones/d005_aplicacao.webp',
  '../guia-pro/imagens/icones/d005_ferramenta.webp', '../guia-pro/imagens/icones/d005_p1.webp', '../guia-pro/imagens/icones/d005_p2.webp',
  '../guia-pro/imagens/icones/d005_p3.webp', '../guia-pro/imagens/icones/d005_p4.webp', '../guia-pro/imagens/icones/d005_p5.webp',
  '../guia-pro/imagens/icones/d005_sistema.webp', '../guia-pro/imagens/icones/d023_aplicacao.webp',
  '../guia-pro/imagens/icones/d023_ferramenta.webp', '../guia-pro/imagens/icones/d023_p1.webp', '../guia-pro/imagens/icones/d023_p2.webp',
  '../guia-pro/imagens/icones/d023_p3.webp', '../guia-pro/imagens/icones/d023_p4.webp', '../guia-pro/imagens/icones/d023_p5.webp',
  '../guia-pro/imagens/icones/d023_sistema.webp', '../guia-pro/imagens/icones/d040_aplicacao.webp',
  '../guia-pro/imagens/icones/d040_ferramenta.webp', '../guia-pro/imagens/icones/d040_p1.webp', '../guia-pro/imagens/icones/d040_p2.webp',
  '../guia-pro/imagens/icones/d040_p3.webp', '../guia-pro/imagens/icones/d040_p4.webp', '../guia-pro/imagens/icones/d040_p5.webp',
  '../guia-pro/imagens/icones/d040_sistema.webp', '../guia-pro/imagens/icones/d057_aplicacao.webp',
  '../guia-pro/imagens/icones/d057_ferramenta.webp', '../guia-pro/imagens/icones/d057_p1.webp', '../guia-pro/imagens/icones/d057_p2.webp',
  '../guia-pro/imagens/icones/d057_p3.webp', '../guia-pro/imagens/icones/d057_p4.webp', '../guia-pro/imagens/icones/d057_p5.webp',
  '../guia-pro/imagens/icones/d057_sistema.webp', '../guia-pro/imagens/icones/d058_aplicacao.webp',
  '../guia-pro/imagens/icones/d058_ferramenta.webp', '../guia-pro/imagens/icones/d058_p1.webp', '../guia-pro/imagens/icones/d058_p2.webp',
  '../guia-pro/imagens/icones/d058_p3.webp', '../guia-pro/imagens/icones/d058_p4.webp', '../guia-pro/imagens/icones/d058_p5.webp',
  '../guia-pro/imagens/icones/d058_sistema.webp', '../guia-pro/imagens/icones/d073_aplicacao.webp',
  '../guia-pro/imagens/icones/d073_ferramenta.webp', '../guia-pro/imagens/icones/d073_p1.webp', '../guia-pro/imagens/icones/d073_p2.webp',
  '../guia-pro/imagens/icones/d073_p3.webp', '../guia-pro/imagens/icones/d073_p4.webp', '../guia-pro/imagens/icones/d073_p5.webp',
  '../guia-pro/imagens/icones/d073_sistema.webp', '../guia-pro/imagens/icones/d087_aplicacao.webp',
  '../guia-pro/imagens/icones/d087_ferramenta.webp', '../guia-pro/imagens/icones/d087_p1.webp', '../guia-pro/imagens/icones/d087_p2.webp',
  '../guia-pro/imagens/icones/d087_p3.webp', '../guia-pro/imagens/icones/d087_p4.webp', '../guia-pro/imagens/icones/d087_p5.webp',
  '../guia-pro/imagens/icones/d087_sistema.webp', '../guia-pro/imagens/icones/s04_aplicacao.webp', '../guia-pro/imagens/icones/s04_ferramenta.webp',
  '../guia-pro/imagens/icones/s04_p1.webp', '../guia-pro/imagens/icones/s04_p2.webp', '../guia-pro/imagens/icones/s04_p3.webp',
  '../guia-pro/imagens/icones/s04_p4.webp', '../guia-pro/imagens/icones/s04_p5.webp', '../guia-pro/imagens/icones/s04_sistema.webp',
  '../guia-pro/imagens/icones/s06_aplicacao.webp', '../guia-pro/imagens/icones/s06_ferramenta.webp', '../guia-pro/imagens/icones/s06_p1.webp',
  '../guia-pro/imagens/icones/s06_p2.webp', '../guia-pro/imagens/icones/s06_p3.webp', '../guia-pro/imagens/icones/s06_p4.webp',
  '../guia-pro/imagens/icones/s06_p5.webp', '../guia-pro/imagens/icones/s06_sistema.webp', '../guia-pro/imagens/icones/s07_aplicacao.webp',
  '../guia-pro/imagens/icones/s07_ferramenta.webp', '../guia-pro/imagens/icones/s07_p1.webp', '../guia-pro/imagens/icones/s07_p2.webp',
  '../guia-pro/imagens/icones/s07_p3.webp', '../guia-pro/imagens/icones/s07_p4.webp', '../guia-pro/imagens/icones/s07_p5.webp',
  '../guia-pro/imagens/icones/s07_sistema.webp'
];
const TUDO = [PAGINA, ...MOTOR, ...BASE, ...ARTES];
const abs = (u) => new URL(u, self.location).href;
const URL_PAGINA = abs(PAGINA);

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    let i = 0;
    const um = async () => { while (i < TUDO.length) { const u = abs(TUDO[i++]); try { const r = await fetch(u, { cache: 'reload', credentials: 'omit' }); if (r.ok) await c.put(u, r); } catch (err) { } } };
    await Promise.all([um(), um(), um(), um()]);
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('bancada-offline-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// A página (e a sonda de modo avião) pergunta se o cache já está completo.
self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.tipo !== 'status' || !e.source) return;
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    let n = 0; const faltam = []; for (const u of TUDO) { if (await c.match(abs(u))) n++; else faltam.push(u); }
    e.source.postMessage({ tipo: 'status', cache: CACHE, guardados: n, total: TUDO.length, faltam });
  }));
});

const guardar = (chave, r) => { if (r && r.ok) { const cp = r.clone(); return caches.open(CACHE).then(c => c.put(chave, cp)).catch(() => {}); } return Promise.resolve(); };
const doCache = async (chave, req) => { const c = await caches.open(CACHE); return (await c.match(chave)) || (req.mode === 'navigate' ? await c.match(URL_PAGINA) : null); };

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  // A página é uma só: ?testarSeguranca=1 e #D-xxx abrem a mesma cópia guardada.
  const chave = req.mode === 'navigate' ? URL_PAGINA : req.url.split('#')[0];
  const fresco = req.mode === 'navigate' || /\.(js|csv|html)$/.test(url.pathname);
  if (fresco) {
    e.respondWith((async () => {
      const rede = fetch(req.mode === 'navigate' ? req.url : chave, { cache: 'no-store', credentials: 'omit' }).then((r) => { if (r && r.ok) e.waitUntil(guardar(chave, r)); return r; });
      rede.catch(() => {});
      let relogio;
      const prazo = new Promise((ok) => { relogio = setTimeout(ok, REDE_MS, null); });
      try {
        const r = await Promise.race([rede, prazo]);
        clearTimeout(relogio);
        if (r) return r;
        return (await doCache(chave, req)) || await rede;
      } catch (err) {
        clearTimeout(relogio);
        const hit = await doCache(chave, req);
        if (hit) return hit;
        throw err;
      }
    })());
    return;
  }
  e.respondWith((async () => {
    const hit = await doCache(chave, req);
    if (hit) return hit;
    const r = await fetch(req);
    e.waitUntil(guardar(chave, r));
    return r;
  })());
});

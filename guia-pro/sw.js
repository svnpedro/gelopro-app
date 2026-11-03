// GeloPro · Guia Pro em modo avião (03/11/2026). Service worker próprio da página /guia-pro/ (escopo ./), separado do app (app/sw.js):
// a página fica fora do escopo /app/, por isso o cache do app nunca a servia sem sinal.
// No 1º acesso com sinal, o install guarda tudo o que a página usa: ela mesma, os 4 scripts do motor (QR, Pix, PDF, licença), as 5 fontes,
// a textura e a marca, os 9 CSVs da base técnica que as fichas e os bônus leem e as 126 artes .webp (14 ilustrações + recortes).
// Depois disso, em modo avião, as 120 fichas, as tabelas, o Índice e o Orçamento em PDF com Pix abrem do cache.
// Com sinal: página, .js e .csv vão à rede primeiro (3 s de prazo) e atualizam o cache; artes e fontes saem do cache e só vão à rede se faltarem.
// A lista ARTES é conferida pelo build (scripts/build-gelopro-site.sh): cada .webp de guia-pro/imagens/ está aqui, e só eles.
'use strict';
const CACHE = 'guiapro-offline-v1'; // nome novo derruba o anterior (o activate apaga todo guiapro-offline-* diferente; o gelopro-offline-* do app fica)
const REDE_MS = 3000;
const PAGINA = './';
const MOTOR = [
  '../app/vendor/qrcode-generator-1.4.4.js', '../app/gelopro-pix.js', '../app/pdf-gelopro.js', '../app/licenca-gelopro.js',
  '../app/fontes/figtree-latin-wght-normal.woff2', '../app/fontes/figtree-latin-ext-wght-normal.woff2', '../app/fontes/roboto-latin-wght-normal.woff2',
  '../app/fontes/roboto-latin-ext-wght-normal.woff2', '../app/fontes/roboto-mono-latin-wght-normal.woff2',
  '../app/ref/acetinado-sedoso.svg', '../app/marca/gelopro-mascote.png', '../app/marca/gelopro-wordmark.png',
];
const BASE = [
  '../base-tecnica/precos_regionais_2026.csv', '../base-tecnica/inverter_checklist.csv', '../base-tecnica/codigos_erro_conferidos.csv',
  '../base-tecnica/codigos_erro.csv', '../base-tecnica/piscadas.csv', '../base-tecnica/ntc_resumo.csv', '../base-tecnica/ntc_tolerancias.csv',
  '../base-tecnica/pt_r410a_r32_r22.csv', '../base-tecnica/criterios_operacionais.csv',
];
const ARTES = [
  'imagens/d001.webp', 'imagens/d002.webp', 'imagens/d003.webp', 'imagens/d004.webp', 'imagens/d005.webp', 'imagens/d023.webp', 'imagens/d040.webp',
  'imagens/d057.webp', 'imagens/d058.webp', 'imagens/d073.webp', 'imagens/d087.webp', 'imagens/icones/d001_aplicacao.webp',
  'imagens/icones/d001_ferramenta.webp', 'imagens/icones/d001_p1.webp', 'imagens/icones/d001_p2.webp', 'imagens/icones/d001_p3.webp',
  'imagens/icones/d001_p4.webp', 'imagens/icones/d001_p5.webp', 'imagens/icones/d001_sistema.webp', 'imagens/icones/d002_aplicacao.webp',
  'imagens/icones/d002_ferramenta.webp', 'imagens/icones/d002_p1.webp', 'imagens/icones/d002_p2.webp', 'imagens/icones/d002_p3.webp',
  'imagens/icones/d002_p4.webp', 'imagens/icones/d002_p5.webp', 'imagens/icones/d002_sistema.webp', 'imagens/icones/d003_aplicacao.webp',
  'imagens/icones/d003_ferramenta.webp', 'imagens/icones/d003_p1.webp', 'imagens/icones/d003_p2.webp', 'imagens/icones/d003_p3.webp',
  'imagens/icones/d003_p4.webp', 'imagens/icones/d003_p5.webp', 'imagens/icones/d003_sistema.webp', 'imagens/icones/d004_aplicacao.webp',
  'imagens/icones/d004_ferramenta.webp', 'imagens/icones/d004_p1.webp', 'imagens/icones/d004_p2.webp', 'imagens/icones/d004_p3.webp',
  'imagens/icones/d004_p4.webp', 'imagens/icones/d004_p5.webp', 'imagens/icones/d004_sistema.webp', 'imagens/icones/d005_aplicacao.webp',
  'imagens/icones/d005_ferramenta.webp', 'imagens/icones/d005_p1.webp', 'imagens/icones/d005_p2.webp', 'imagens/icones/d005_p3.webp',
  'imagens/icones/d005_p4.webp', 'imagens/icones/d005_p5.webp', 'imagens/icones/d005_sistema.webp', 'imagens/icones/d023_aplicacao.webp',
  'imagens/icones/d023_ferramenta.webp', 'imagens/icones/d023_p1.webp', 'imagens/icones/d023_p2.webp', 'imagens/icones/d023_p3.webp',
  'imagens/icones/d023_p4.webp', 'imagens/icones/d023_p5.webp', 'imagens/icones/d023_sistema.webp', 'imagens/icones/d040_aplicacao.webp',
  'imagens/icones/d040_ferramenta.webp', 'imagens/icones/d040_p1.webp', 'imagens/icones/d040_p2.webp', 'imagens/icones/d040_p3.webp',
  'imagens/icones/d040_p4.webp', 'imagens/icones/d040_p5.webp', 'imagens/icones/d040_sistema.webp', 'imagens/icones/d057_aplicacao.webp',
  'imagens/icones/d057_ferramenta.webp', 'imagens/icones/d057_p1.webp', 'imagens/icones/d057_p2.webp', 'imagens/icones/d057_p3.webp',
  'imagens/icones/d057_p4.webp', 'imagens/icones/d057_p5.webp', 'imagens/icones/d057_sistema.webp', 'imagens/icones/d058_aplicacao.webp',
  'imagens/icones/d058_ferramenta.webp', 'imagens/icones/d058_p1.webp', 'imagens/icones/d058_p2.webp', 'imagens/icones/d058_p3.webp',
  'imagens/icones/d058_p4.webp', 'imagens/icones/d058_p5.webp', 'imagens/icones/d058_sistema.webp', 'imagens/icones/d073_aplicacao.webp',
  'imagens/icones/d073_ferramenta.webp', 'imagens/icones/d073_p1.webp', 'imagens/icones/d073_p2.webp', 'imagens/icones/d073_p3.webp',
  'imagens/icones/d073_p4.webp', 'imagens/icones/d073_p5.webp', 'imagens/icones/d073_sistema.webp', 'imagens/icones/d087_aplicacao.webp',
  'imagens/icones/d087_ferramenta.webp', 'imagens/icones/d087_p1.webp', 'imagens/icones/d087_p2.webp', 'imagens/icones/d087_p3.webp',
  'imagens/icones/d087_p4.webp', 'imagens/icones/d087_p5.webp', 'imagens/icones/d087_sistema.webp', 'imagens/icones/s04_aplicacao.webp',
  'imagens/icones/s04_ferramenta.webp', 'imagens/icones/s04_p1.webp', 'imagens/icones/s04_p2.webp', 'imagens/icones/s04_p3.webp',
  'imagens/icones/s04_p4.webp', 'imagens/icones/s04_p5.webp', 'imagens/icones/s04_sistema.webp', 'imagens/icones/s06_aplicacao.webp',
  'imagens/icones/s06_ferramenta.webp', 'imagens/icones/s06_p1.webp', 'imagens/icones/s06_p2.webp', 'imagens/icones/s06_p3.webp',
  'imagens/icones/s06_p4.webp', 'imagens/icones/s06_p5.webp', 'imagens/icones/s06_sistema.webp', 'imagens/icones/s07_aplicacao.webp',
  'imagens/icones/s07_ferramenta.webp', 'imagens/icones/s07_p1.webp', 'imagens/icones/s07_p2.webp', 'imagens/icones/s07_p3.webp',
  'imagens/icones/s07_p4.webp', 'imagens/icones/s07_p5.webp', 'imagens/icones/s07_sistema.webp', 'imagens/s04.webp', 'imagens/s06.webp',
  'imagens/s07.webp',
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
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('guiapro-offline-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// A página pergunta se o cache já está completo (a sonda de modo avião usa a mesma resposta).
self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.tipo !== 'status' || !e.source) return;
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    let n = 0; for (const u of TUDO) if (await c.match(abs(u))) n++;
    e.source.postMessage({ tipo: 'status', cache: CACHE, guardados: n, total: TUDO.length });
  }));
});

const guardar = (chave, r) => { if (r && r.ok) { const cp = r.clone(); return caches.open(CACHE).then(c => c.put(chave, cp)).catch(() => {}); } return Promise.resolve(); };
const doCache = async (chave, req) => { const c = await caches.open(CACHE); return (await c.match(chave)) || (req.mode === 'navigate' ? await c.match(URL_PAGINA) : null); };

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  // A página é uma só: ?embed=1, ?testarSeguranca=1 e #D-xxx abrem a mesma cópia guardada.
  const chave = req.mode === 'navigate' ? URL_PAGINA : req.url.split('#')[0];
  const fresco = req.mode === 'navigate' || /\.(js|csv|html)$/.test(url.pathname);
  if (fresco) {
    e.respondWith((async () => {
      // Navegação vai pela URL (um Request 'navigate' não aceita init); a cópia fica guardada sob a chave única da página.
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

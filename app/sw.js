'use strict';
const CACHE = 'gelopro-offline-v104';
const REDE_MS = 3000;
const NUCLEO = [
'GeloPro App v5.2.dc.html', 'support.js', 'manifest.json',
'AreaAssinatura.dc.html', 'AtalhoTecla.dc.html', 'Aviso.dc.html', 'CampoTexto.dc.html', 'FolhaDocumento.dc.html', 'IconeGP.dc.html',
'LeituraPoco.dc.html', 'LinhaFicha.dc.html', 'LinhaOrcamento.dc.html', 'LogoMarca.dc.html', 'OpcaoLista.dc.html', 'PlacaSintoma.dc.html',
'QRPix.dc.html', 'SeletorChip.dc.html', 'SeletorPrazo.dc.html', 'Selo.dc.html', 'TeclaDock.dc.html', 'TeclaResposta.dc.html', 'TemaGeloPro.dc.html',
'gelopro-pix.js', 'marca-gelopro.js', 'offline-gelopro.js', 'pdf-gelopro.js', 'portao-gelopro.js',
'licenca-gelopro.js',
'vendor/react-18.3.1.production.min.js', 'vendor/react-dom-18.3.1.production.min.js', 'vendor/qrcode-generator-1.4.4.js',
'fontes/roboto-latin-wght-normal.woff2', 'fontes/roboto-latin-ext-wght-normal.woff2', 'fontes/roboto-mono-latin-wght-normal.woff2',
'fontes/roboto-mono-latin-ext-wght-normal.woff2', 'fontes/figtree-latin-wght-normal.woff2', 'fontes/figtree-latin-ext-wght-normal.woff2',
'fontes/lato-latin-500-normal.woff2', 'fontes/lato-latin-ext-500-normal.woff2',
'marca/gelopro-logo-completa.png', 'marca/gelopro-mascote.png', 'marca/gelopro-wordmark.png',
'ref/acetinado-sedoso.css', 'ref/acetinado-sedoso.svg', 'ref/camera.png', 'ref/tex-borracha.png', 'ref/tex-face.png',
'../base-tecnica/FONTES.csv', '../base-tecnica/FONTES_novas.csv', '../base-tecnica/FONTES_tecnico.csv', '../base-tecnica/codigos_erro.csv',
'../base-tecnica/codigos_erro_novos.csv', '../base-tecnica/criterios_operacionais.csv', '../base-tecnica/inverter_checklist.csv',
'../base-tecnica/ntc_gree.csv', '../base-tecnica/ntc_lg.csv', '../base-tecnica/ntc_lg_descarga.csv', '../base-tecnica/ntc_midea_pontos.csv',
'../base-tecnica/ntc_resumo.csv', '../base-tecnica/ntc_tolerancias.csv', '../base-tecnica/percursos_etapas.csv',
'../base-tecnica/percursos_resultados.csv', '../base-tecnica/percursos_tecnico_etapas.csv', '../base-tecnica/percursos_tecnico_resultados.csv',
'../base-tecnica/piscadas.csv', '../base-tecnica/pmoc_atividades.csv', '../base-tecnica/precos_regionais_2026.csv',
'../base-tecnica/pt_r410a_elgin_kpa.csv', '../base-tecnica/pt_r410a_r32_r22.csv',
'../base-tecnica/ntc_midea_tp.csv', '../base-tecnica/ntc_daikin.csv', '../base-tecnica/ntc_samsung.csv',
'../base-tecnica/ntc_tcl.csv', '../base-tecnica/ntc_agratto.csv', '../base-tecnica/ntc_elgin_boletim.csv', '../base-tecnica/codigos_erro_conferidos.csv',
];
const FEED = /\/feed-avisos\.json$/;
const FEED_MS = 2500;
const FEED_VAZIO = '{ "versao": 1, "avisos": [] }';
const guardavel = (u) => /^https?:/.test(u) && !/\/__|chrome-extension:/.test(u) && !/^\/api\//.test(new URL(u).pathname);
const buscar = async (url) => {
const mesmo = new URL(url).origin === self.location.origin;
try { const r = await fetch(url, { mode: mesmo ? 'same-origin' : 'cors', credentials: 'omit' }); if (r.ok) return r; } catch (e) { }
if (mesmo) return null;
try { const r = await fetch(url, { mode: 'no-cors', credentials: 'omit' }); return r.type === 'opaque' || r.ok ? r : null; } catch (e) { return null; }
};
self.addEventListener('install', (e) => {
e.waitUntil(caches.open(CACHE).then((c) => Promise.all(NUCLEO.map(async (u) => {
const url = new URL(u, self.location).href;
try { const r = await fetch(url, { cache: 'reload', credentials: 'omit' }); if (r.ok) await c.put(url, r); } catch (err) { }
}))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('gelopro-offline-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', (e) => {
const d = e.data || {};
if (d.tipo !== 'guardar' || !Array.isArray(d.urls)) return;
e.waitUntil(caches.open(CACHE).then(async (c) => {
const urls = [...new Set(d.urls.map(String).filter(guardavel).map(u => u.split('#')[0]))];
let i = 0; const um = async () => { while (i < urls.length) { const u = urls[i++]; if (await c.match(u)) continue; const r = await buscar(u); if (r) await c.put(u, r).catch(() => {}); } };
await Promise.all([um(), um(), um(), um()]);
if (e.source && e.source.postMessage) e.source.postMessage({ tipo: 'guardado', n: urls.length });
}));
});
const feed = async (e, chave) => {
const url = chave.split('?')[0];
const rede = fetch(chave, { cache: 'no-store', credentials: 'omit' }).then(async (r) => {
if (r && r.ok) { const cp = r.clone(); await caches.open(CACHE).then(c => c.put(url, cp)).catch(() => {}); return r; }
return null;
}).catch(() => null);
e.waitUntil(rede);
let relogio;
const r = await Promise.race([rede, new Promise((ok) => { relogio = setTimeout(ok, FEED_MS, null); })]);
clearTimeout(relogio);
if (r) return r;
const salvo = await caches.open(CACHE).then(c => c.match(url)).catch(() => null);
return salvo || new Response(FEED_VAZIO, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
self.addEventListener('fetch', (e) => {
const req = e.request;
if (req.method !== 'GET' || !guardavel(req.url) || req.headers.has('range')) return;
const chave = req.url.split('#')[0];
if (FEED.test(new URL(chave).pathname)) return e.respondWith(feed(e, chave));
let gravacao = Promise.resolve();
const rede = fetch(req).then((r) => {
if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); gravacao = caches.open(CACHE).then(c => c.put(chave, cp)).catch(() => {}); }
return r;
});
e.waitUntil(rede.then(() => gravacao, () => {}));
const guardada = async () => { const c = await caches.open(CACHE); return (await c.match(chave)) || (await c.match(req, { ignoreSearch: req.mode === 'navigate' })); };
e.respondWith((async () => {
let relogio;
const prazo = new Promise((ok) => { relogio = setTimeout(ok, REDE_MS, null); });
try {
const r = await Promise.race([rede, prazo]);
if (r) return r;
const hit = await guardada();
return hit || await rede;
} catch (err) {
const hit = await guardada();
if (hit) return hit;
throw err;
} finally { clearTimeout(relogio); }
})());
});

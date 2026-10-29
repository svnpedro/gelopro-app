// GeloPro · Service worker offline (PR #43, C9-OFFLINE; PR #44, núcleo local). Sem sinal, "puxar para atualizar" não derruba mais o app.
// PR #44: React, ReactDOM, Babel, o gerador de QR (vendor/) e as fontes (fontes/) vêm do próprio pacote, sem CDN. No install o SW já baixa o
// núcleo local (NUCLEO): o app e suas peças, support.js, vendor/*, fontes/*, marca/*, ref/* e manifest.json. Assim o app abre offline com as
// mesmas fontes desde o 1º acesso, sem depender do que a página carregou antes de o SW ativar.
// O Babel (vendor/babel-standalone-7.29.0.min.js, 3,1 MB) fica no pacote mas fora do NUCLEO: o support.js só o pede para x-import de .jsx/.tsx,
// que nenhuma peça usa. Se algum dia for pedido, entra no cache pelo caminho normal do fetch.
// Rede primeiro, com prazo: com sinal, a resposta vem fresca do servidor e a cópia do cache é atualizada; se a rede não responder em 3 s e houver
// cópia guardada, a cópia responde (a rede segue atualizando o cache por trás). Sem sinal, a cópia guardada responde.
// O resto (base técnica, cenas) segue a lista que a página manda uma vez (offline-gelopro.js), 4 por vez, e o caminho normal de cada GET.
'use strict';
const CACHE = 'gelopro-offline-v2';
const REDE_MS = 3000;
// A trava max-claude-gate confere esta lista contra os arquivos de app/ (nenhum faltando, nenhum inexistente).
const NUCLEO = [
  'GeloPro App v5.2.dc.html', 'support.js', 'manifest.json',
  'AreaAssinatura.dc.html', 'AtalhoTecla.dc.html', 'Aviso.dc.html', 'CampoTexto.dc.html', 'FolhaDocumento.dc.html', 'IconeGP.dc.html',
  'LeituraPoco.dc.html', 'LinhaFicha.dc.html', 'LinhaOrcamento.dc.html', 'LogoMarca.dc.html', 'OpcaoLista.dc.html', 'PlacaSintoma.dc.html',
  'QRPix.dc.html', 'SeletorChip.dc.html', 'SeletorPrazo.dc.html', 'Selo.dc.html', 'TeclaDock.dc.html', 'TeclaResposta.dc.html', 'TemaGeloPro.dc.html',
  'gelopro-pix.js', 'marca-gelopro.js', 'offline-gelopro.js', 'pdf-gelopro.js', 'portao-gelopro.js',
  'vendor/react-18.3.1.production.min.js', 'vendor/react-dom-18.3.1.production.min.js', 'vendor/qrcode-generator-1.4.4.js',
  'fontes/roboto-latin-wght-normal.woff2', 'fontes/roboto-latin-ext-wght-normal.woff2', 'fontes/roboto-mono-latin-wght-normal.woff2',
  'fontes/roboto-mono-latin-ext-wght-normal.woff2', 'fontes/figtree-latin-wght-normal.woff2', 'fontes/figtree-latin-ext-wght-normal.woff2',
  'marca/gelopro-logo-completa.png', 'marca/gelopro-mascote.png', 'marca/gelopro-wordmark.png',
  'ref/acetinado-sedoso.css', 'ref/acetinado-sedoso.svg', 'ref/camera.png', 'ref/tex-borracha.png', 'ref/tex-face.png',
];
const guardavel = (u) => /^https?:/.test(u) && !/\/__|chrome-extension:/.test(u);
const buscar = async (url) => {
  const mesmo = new URL(url).origin === self.location.origin;
  try { const r = await fetch(url, { mode: mesmo ? 'same-origin' : 'cors', credentials: 'omit' }); if (r.ok) return r; } catch (e) { /* tenta sem CORS */ }
  if (mesmo) return null;
  try { const r = await fetch(url, { mode: 'no-cors', credentials: 'omit' }); return r.type === 'opaque' || r.ok ? r : null; } catch (e) { return null; }
};

// Install: baixa o núcleo local de uma vez (cache: 'reload' fura o cache HTTP). Um arquivo que falhar não trava a instalação: ele entra depois pelo
// caminho normal do fetch.
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(NUCLEO.map(async (u) => {
    const url = new URL(u, self.location).href;
    try { const r = await fetch(url, { cache: 'reload', credentials: 'omit' }); if (r.ok) await c.put(url, r); } catch (err) { /* entra pelo fetch */ }
  }))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('gelopro-offline-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

// Lista enviada pela página (offline-gelopro.js): baixa e guarda o que ainda não está no cache.
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

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || !guardavel(req.url) || req.headers.has('range')) return;
  const chave = req.url.split('#')[0];
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
      // Rede lenta (3 s sem resposta): a cópia guardada responde; sem cópia, espera a rede.
      const hit = await guardada();
      return hit || await rede;
    } catch (err) {
      const hit = await guardada();
      if (hit) return hit;
      throw err;
    } finally { clearTimeout(relogio); }
  })());
});

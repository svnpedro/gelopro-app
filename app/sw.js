// GeloPro · Service worker offline (PR #43, C9-OFFLINE). Sem sinal, "puxar para atualizar" não derruba mais o app.
// Rede primeiro, sempre: com sinal, toda resposta vem fresca do servidor e a cópia do cache é atualizada. Sem sinal, a cópia guardada responde.
// No 1º acesso, o que carregou antes de o SW ativar não passou por aqui: a página manda essa lista uma vez (performance.getEntriesByType('resource'):
// app, peças .dc.html, support.js, React/Babel e fontes de CDN, base técnica, cenas e marca) e o SW baixa, 4 por vez. Ao ativar, ele assume a página
// aberta (clients.claim): dali em diante toda requisição GET entra no cache pelo caminho normal, sem baixar nada duas vezes.
'use strict';
const CACHE = 'gelopro-offline-v1';
const guardavel = (u) => /^https?:/.test(u) && !/\/__|chrome-extension:/.test(u);
const buscar = async (url) => {
  const mesmo = new URL(url).origin === self.location.origin;
  try { const r = await fetch(url, { mode: mesmo ? 'same-origin' : 'cors', credentials: 'omit' }); if (r.ok) return r; } catch (e) { /* tenta sem CORS */ }
  if (mesmo) return null;
  try { const r = await fetch(url, { mode: 'no-cors', credentials: 'omit' }); return r.type === 'opaque' || r.ok ? r : null; } catch (e) { return null; }
};

self.addEventListener('install', (e) => { e.waitUntil(self.skipWaiting()); });
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
  e.respondWith((async () => {
    try {
      const r = await fetch(req);
      if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req.url.split('#')[0], cp)).catch(() => {}); }
      return r;
    } catch (err) {
      const c = await caches.open(CACHE);
      const hit = (await c.match(req.url.split('#')[0])) || (await c.match(req, { ignoreSearch: req.mode === 'navigate' }));
      if (hit) return hit;
      throw err;
    }
  })());
});

// GeloPro · Registro do modo offline (PR #43, C9-OFFLINE): registra o sw.js e, quando ele fica ativo, manda 1 vez a lista do que a página já
// carregou antes dele (o resto passa pelo próprio SW, que assume a página ao ativar). Sem service worker (navegador antigo, arquivo aberto direto do
// disco), não faz nada: o app segue igual, só sem o modo offline.
(function () {
  'use strict';
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
  navigator.serviceWorker.register('sw.js').catch(() => null);
  navigator.serviceWorker.ready.then((reg) => {
    let urls = [location.href.split('#')[0]]; try { urls = urls.concat(performance.getEntriesByType('resource').map(e => e.name)); } catch (e) { /* sem Resource Timing */ }
    if (reg.active) reg.active.postMessage({ tipo: 'guardar', urls });
  }).catch(() => {});
})();

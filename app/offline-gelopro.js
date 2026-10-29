// GeloPro · Registro do modo offline (PR #43, C9-OFFLINE): registra o sw.js e, quando ele fica ativo, manda 1 vez a lista do que a página já
// carregou antes dele (o resto passa pelo próprio SW, que assume a página ao ativar). Sem service worker (navegador antigo, arquivo aberto direto do
// disco), não faz nada: o app segue igual, só sem o modo offline.
(function () {
  'use strict';
  // PR #46 (S1 do reteste): o Pix do passo 4 não pode depender de abrir o passo com sinal. Logo depois de abrir, em tempo ocioso, o app já carrega o
  // gerador de QR (vendor/) e o gelopro-pix.js com os mesmos marcadores que o QRPix procura (script[data-gp]); offline, o QR, o copia e cola e o Pix
  // no PDF saem da memória, e o sw.js também os guarda no install.
  const libsPix = () => [['qrcode', './vendor/qrcode-generator-1.4.4.js'], ['GeloProPix', './gelopro-pix.js']].forEach(([g, src]) => {
    if (window[g] || document.querySelector(`script[data-gp="${g}"]`)) return;
    const s = document.createElement('script'); s.src = src; s.dataset.gp = g; s.async = true;
    const fim = () => (window.__gpQRWait || []).slice().forEach(f => f());
    s.onload = fim; s.onerror = () => { window['__gpErro_' + g] = true; fim(); };
    document.head.appendChild(s);
  });
  const ocioso = window.requestIdleCallback || ((f) => setTimeout(f, 600));
  if (document.readyState === 'complete') ocioso(libsPix); else window.addEventListener('load', () => ocioso(libsPix));
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
  navigator.serviceWorker.register('sw.js').catch(() => null);
  navigator.serviceWorker.ready.then((reg) => {
    let urls = [location.href.split('#')[0]]; try { urls = urls.concat(performance.getEntriesByType('resource').map(e => e.name)); } catch (e) { /* sem Resource Timing */ }
    if (reg.active) reg.active.postMessage({ tipo: 'guardar', urls });
  }).catch(() => {});
})();

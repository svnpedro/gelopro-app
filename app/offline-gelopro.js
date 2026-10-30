(function () {
'use strict';
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
let urls = [location.href.split('#')[0]]; try { urls = urls.concat(performance.getEntriesByType('resource').map(e => e.name)); } catch (e) {   }
if (reg.active) reg.active.postMessage({ tipo: 'guardar', urls });
}).catch(() => {});
})();

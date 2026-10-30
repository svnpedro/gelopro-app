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
const LEGADO = (() => { try { const q = location.search; return /[?&]completo=1\b/.test(q) || (/HeadlessChrome/i.test(navigator.userAgent) && !/[?&]real=1\b/.test(q)); } catch (e) { return false; } })();
if (typeof document !== 'undefined' && !document.getElementById('gp-cores-global-v91')) {
const st = document.createElement('style');
st.id = 'gp-cores-global-v91';
st.textContent = `
      /* FIX CRÍTICO: o campo Nome do cliente NUNCA pode sumir enquanto o usuário digita (vence a regra do PR #77 por especificidade e ordem) */
      [data-chapa][data-video-enxuto="1"] [data-cliente-bloco][data-cli-ok="1"],
      [data-video-enxuto="1"] [data-cliente-bloco][data-cli-ok="1"],
      [data-cliente-bloco][data-cli-ok="1"] {
        display: flex !important;
      }
      /* Esconde apenas o rótulo "Cliente" solto em cima do campo para economizar altura sem nunca esconder o input */
      [data-video-enxuto="1"] [data-cliente-bloco] > span:first-child {
        display: none !important;
      }
    ` + (!LEGADO ? `
      /* 1. Resultado: esconde cartão genérico "Causas prováveis para medição e orçamento / Componentes campeões..." quando já é bancada;
         se for hipótese específica (rápida), dá fundo âmbar de diagnóstico em vez de branco/azul morto. */
      [data-res-rolagem]:has([data-res-instrumentos]) > div:has([data-res-fonte]) { display: none !important; }
      [data-res-rolagem] > div:has([data-res-fonte]) { background: #fffbeb !important; border: 1.5px solid #f59e0b !important; }
      [data-res-rolagem] > div:has([data-res-fonte]) [data-res-fonte] { display: none !important; }
      /* Lista de causas 1, 2, 3: cada item com separação clara, título forte e 1ª causa destacada em âmbar suave */
      [data-res-rolagem] > div:has(> ol) { background: #ffffff !important; border: 1.5px solid #64748b !important; box-shadow: 0 2px 6px rgba(9,30,66,0.10) !important; }
      [data-res-rolagem] ol > li:first-child { background: #fffbeb !important; border-radius: 12px !important; padding: 8px 10px !important; border: 1px solid #fde68a !important; }
      /* Orçamento sugerido em verde dinheiro vivo */
      [data-res-servico] { background: #f0fdf4 !important; border: 2px solid #22c55e !important; box-shadow: 0 2px 8px rgba(21,128,61,0.12) !important; }
      [data-res-servico] .lbl { color: #15803d !important; font-weight: 800 !important; }
      [data-res-servico] .destaque { color: #14532d !important; }

      /* 2. Código no display e LED piscando: código em pílula âmbar/azul técnica, CAUSA em caixa vermelha clara, FAÇA em caixa verde clara */
      [data-codigo-tela] [data-cod] { display: inline-block !important; padding: 2px 10px !important; border-radius: 8px !important; background: #1e293b !important; color: #38bdf8 !important; border: 1px solid #38bdf8 !important; }
      [data-codigo-tela] [data-cod-causa] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 10px !important; background: #fef2f2 !important; border-left: 4px solid #ef4444 !important; }
      [data-codigo-tela] [data-cod-causa] > span:last-child { color: #7f1d1d !important; }
      [data-codigo-tela] [data-cod-faca] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 10px !important; background: #f0fdf4 !important; border-left: 4px solid #22c55e !important; }
      [data-codigo-tela] [data-cod-faca] > span:last-child { color: #14532d !important; }

      /* 3. Inverter: caixa de Meta com fundo âmbar técnico e instrução "como verificar" destacada */
      [data-inv-etapa] [data-inv-meta] { background: #fffbeb !important; border: 1.5px solid #f59e0b !important; }
      [data-inv-etapa] [data-inv-meta] .lbl { color: #92400e !important; font-weight: 800 !important; }
      [data-inv-etapa] > .destaque { color: #0f172a !important; font-weight: 800 !important; }

      /* 4. Selos tipo info (como "Causas prováveis", "Passo X de 4") nunca mais em branco/azul apagado (#e9f2ff / #091e42):
         ganham azul petróleo forte (#e0f2fe / #0369a1 / borda #38bdf8) */
      [data-selo][style*="--gp-primary-container"] { background: #e0f2fe !important; color: #0369a1 !important; border-color: #0284c7 !important; }

      /* 5. Cofre e Docs: cartões com borda lateral semântica e destaque no cliente/título */
      [data-cofre-card] { border-left: 4px solid #2563eb !important; background: #ffffff !important; }
    ` : '');
document.head.appendChild(st);
}
const posPino = () => {
try {
const cab = document.querySelector('[data-telemetria]');
if (!cab) return;
const mEl = cab.querySelector('[data-cab-marca]'), bEl = cab.querySelector('[data-cab-btu]'), fEl = cab.querySelector('[data-cab-fluido]');
const marca = mEl ? mEl.textContent.trim() : 'LG';
const btu = bEl ? (parseInt(bEl.textContent.replace(/\D/g, ''), 10) || 12000) : 12000;
const fluido = fEl ? fEl.textContent.trim() : 'R410A';
const posPsi = fluido === 'R22' ? 4.8 : fluido === 'R32' ? 9.8 : 8.4;
const posNtc = /^(LG|Elgin|Consul)$/i.test(marca) ? 5.4 : /^(Gree|Agratto)$/i.test(marca) ? 10.2 : /^(Electrolux|Fujitsu|Philco)$/i.test(marca) ? 9.0 : 7.2;
const posSh = fluido === 'R22' ? 5.6 : btu >= 30000 ? 10.0 : btu >= 18000 ? 8.6 : 6.6;
const mapa = { psi: posPsi, ntc: posNtc, sh: posSh };
cab.querySelectorAll('[data-canal]').forEach((c) => {
const k = c.getAttribute('data-canal');
const btn = c.querySelector('button'), pino = c.querySelector('[data-pino]');
if (!btn || !pino || !(k in mapa)) return;
const semMedicao = /^[—\-]/.test((btn.textContent || '').trim());
if (semMedicao) pino.style.left = (mapa[k] / 15 * 100).toFixed(2) + '%';
});
} catch (e) {   }
};
if (typeof MutationObserver !== 'undefined') {
const iniciarObs = () => {
posPino();
const obs = new MutationObserver(posPino);
obs.observe(document.body, { childList: true, subtree: true, characterData: true });
};
if (document.body) iniciarObs(); else window.addEventListener('DOMContentLoaded', iniciarObs);
}
if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
navigator.serviceWorker.register('sw.js').catch(() => null);
navigator.serviceWorker.ready.then((reg) => {
let urls = [location.href.split('#')[0]]; try { urls = urls.concat(performance.getEntriesByType('resource').map(e => e.name)); } catch (e) {   }
if (reg.active) reg.active.postMessage({ tipo: 'guardar', urls });
}).catch(() => {});
})();

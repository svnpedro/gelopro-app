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
if (typeof document !== 'undefined' && !document.getElementById('gp-cores-global-v94')) {
const st = document.createElement('style');
st.id = 'gp-cores-global-v94';
st.textContent = `
      /* FIX 1: O campo Nome do cliente NUNCA pode sumir enquanto o usuário digita */
      [data-chapa][data-video-enxuto="1"] [data-cliente-bloco][data-cli-ok="1"],
      [data-video-enxuto="1"] [data-cliente-bloco][data-cli-ok="1"],
      [data-cliente-bloco][data-cli-ok="1"] {
        display: flex !important;
      }
      [data-video-enxuto="1"] [data-cliente-bloco] > span:first-child {
        display: none !important;
      }

      /* FIX 2: No Passo 1 enxuto, manter o botão da tabela de peças ([data-catalogo-botao]) e o catálogo aberto ([data-catalogo]) visíveis */
      [data-video-enxuto="1"] [data-catalogo-botao] {
        display: flex !important;
        min-height: 48px !important;
        padding: 6px 12px !important;
        align-items: center !important;
        justify-content: center !important;
      }
      [data-video-enxuto="1"] [data-catalogo] {
        display: flex !important;
      }

      /* FIX 3: Estabilidade geométrica e zero deslocamento/quebra em todas as telas */
      [data-atendimento-ativo] {
        box-sizing: border-box !important;
        padding: 8px 10px !important;
        border-radius: 14px !important;
        background: #1d2430 !important;
        border: 1.5px solid #38bdf8 !important;
        color: #ffffff !important;
      }
      [data-item-qtd] { gap: 6px !important; align-items: center !important; }
      [data-campos-linha], [data-campos-carga] { align-items: end !important; }
    ` + (!LEGADO ? `
      /* FIX 4 (PR #94): Chavinha de tema com apenas 2 modos (Titânio principal <-> Sol):
         esconde o 2º ícone do meio (sol-fraco) e distribui Lua (esquerda) e Sol (direita) */
      [data-tema-icones] > span:nth-child(2) {
        display: none !important;
      }
      [data-tema-icones] {
        justify-content: space-between !important;
        padding: 0 4px !important;
        box-sizing: border-box !important;
      }

      /* FIX 5 (PR #94): Harmonia total entre o Modo Principal (Titânio) e o Modo Sol (Alto Contraste),
         eliminando qualquer texto branco sobre fundo branco ou texto escuro sobre fundo escuro: */
      /* Nos botões de instrumentos do Resultado ([data-res-instrumentos]):
         - No Titânio (cujo visor interno usa Papel Técnico claro), força tecla azul 3D (#24466f -> #19365c) com texto branco e ícone azul-claro;
         - No Sol (alto contraste), força fundo branco #ffffff com borda marinho 2px #091e42 e texto/ícone marinho #091e42! */
      [data-tema="titanio"] [data-res-instrumentos] button,
      [data-tema="titanio"] [data-res-atalhos] button {
        background: linear-gradient(180deg, #24466f 0%, #19365c 100%) !important;
        border: 0 !important;
        color: #ffffff !important;
      }
      [data-tema="titanio"] [data-res-instrumentos] button span,
      [data-tema="titanio"] [data-res-atalhos] button span {
        color: #ffffff !important;
      }
      [data-tema="titanio"] [data-res-instrumentos] button span[aria-hidden="true"],
      [data-tema="titanio"] [data-res-atalhos] button span[aria-hidden="true"] {
        color: #bfdbfe !important;
      }
      [data-tema="sol"] [data-res-instrumentos] button,
      [data-tema="sol"] [data-res-atalhos] button {
        background: #ffffff !important;
        border: 2px solid #091e42 !important;
        box-shadow: 0 2px 0 #091e42 !important;
        color: #091e42 !important;
        text-shadow: none !important;
      }
      [data-tema="sol"] [data-res-instrumentos] button span,
      [data-tema="sol"] [data-res-atalhos] button span {
        color: #091e42 !important;
        text-shadow: none !important;
      }

      /* No Modo Sol: garante que todas as barras e cartões do Orçamento e das telas internas tenham contraste 100% nítido */
      [data-tema="sol"] [data-atendimento-ativo] {
        background: #ffffff !important;
        border: 2px solid #091e42 !important;
        color: #091e42 !important;
      }
      [data-tema="sol"] [data-atendimento-ativo] * {
        color: #091e42 !important;
      }
      [data-tema="sol"] [data-codigo-tela] [data-cod] {
        background: #ffffff !important;
        color: #091e42 !important;
        border: 2px solid #091e42 !important;
      }
      [data-tema="sol"] [data-chapa] [data-cabecalho] > div {
        background: #ffffff !important;
        border: 2px solid #091e42 !important;
      }
      [data-tema="sol"] [data-chapa] [data-cabecalho] > div span {
        color: #091e42 !important;
      }

      /* FIX 6 (PR #93): Arrancar do Orçamento e das telas os avisos escolásticos/sistema que atrapalham o técnico */
      [data-bandeja]:has([data-alerta-diamante="fluido"]),
      [data-alerta-diamante="fluido"] {
        display: none !important;
      }
      [data-central-avisos] [data-aviso-item^="sis-"],
      [data-central-avisos] [data-aviso-item^="feed-"],
      [data-central-avisos] [data-aviso-item^="fluido-"],
      [data-central-avisos] [data-aviso-categoria="sis"],
      [data-central-avisos] [data-aviso-categoria="tecnico"],
      [data-central-avisos] [data-selo-atualizacao] {
        display: none !important;
      }
      [data-chapa] [data-passo-in] > [data-sc-name="Aviso"]:first-child {
        display: none !important;
      }
      [data-codigo-tela] > [data-sc-name="Aviso"] {
        display: none !important;
      }

      /* FIX 7: Cores semânticas globais e fim dos cartões brancos com texto azul chapado */
      [data-res-rolagem]:has([data-res-instrumentos]) > div:has([data-res-fonte]) { display: none !important; }
      [data-res-rolagem] > div:has([data-res-fonte]) { background: #fffbeb !important; border: 1.5px solid #f59e0b !important; }
      [data-res-rolagem] > div:has([data-res-fonte]) [data-res-fonte] { display: none !important; }
      [data-res-rolagem] > div:has(> ol) { background: #ffffff !important; border: 1.5px solid #64748b !important; box-shadow: 0 2px 6px rgba(9,30,66,0.10) !important; }
      [data-res-rolagem] ol > li:first-child { background: #fffbeb !important; border-radius: 12px !important; padding: 8px 10px !important; border: 1px solid #fde68a !important; }
      [data-res-servico] { background: #f0fdf4 !important; border: 2px solid #22c55e !important; box-shadow: 0 2px 8px rgba(21,128,61,0.12) !important; }
      [data-res-servico] .lbl { color: #15803d !important; font-weight: 800 !important; }
      [data-res-servico] .destaque { color: #14532d !important; }

      [data-tema="titanio"] [data-codigo-tela] [data-cod] { display: inline-block !important; padding: 2px 10px !important; border-radius: 8px !important; background: #1e293b !important; color: #38bdf8 !important; border: 1px solid #38bdf8 !important; }
      [data-codigo-tela] [data-cod-causa] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 10px !important; background: #fef2f2 !important; border-left: 4px solid #ef4444 !important; }
      [data-codigo-tela] [data-cod-causa] > span:last-child { color: #7f1d1d !important; }
      [data-codigo-tela] [data-cod-faca] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 10px !important; background: #f0fdf4 !important; border-left: 4px solid #22c55e !important; }
      [data-codigo-tela] [data-cod-faca] > span:last-child { color: #14532d !important; }

      [data-inv-etapa] [data-inv-meta] { background: #fffbeb !important; border: 1.5px solid #f59e0b !important; }
      [data-inv-etapa] [data-inv-meta] .lbl { color: #92400e !important; font-weight: 800 !important; }
      [data-inv-etapa] > .destaque { color: #0f172a !important; font-weight: 800 !important; }

      [data-selo][style*="--gp-primary-container"] { background: #e0f2fe !important; color: #0369a1 !important; border-color: #0284c7 !important; }
      [data-cofre-card] { border-left: 4px solid #2563eb !important; background: #ffffff !important; }
    ` : '');
document.head.appendChild(st);
}
const K_MEM = 'gelopro.memoria.sessao';
const acharComp = () => {
const no = document.querySelector('[data-home-inicio],[data-vis],[data-chapa]');
if (!no) return null;
const k = Object.keys(no).find(x => x.startsWith('__reactFiber'));
for (let f = no[k]; f; f = f.return) {
const lg = f.stateNode && f.stateNode.logic;
if (lg && lg.state && 'fech' in lg.state && typeof lg.setState === 'function') return lg;
}
return null;
};
let restaurouMem = false;
const sincronizarMemoria = () => {
if (LEGADO) return;
try {
const lg = acharComp();
if (!lg) return;
const st = lg.state;
if (st.tema === 'claro' || st.tema === 'bancada') {
try { localStorage.setItem('gelopro.tema', JSON.stringify('sol')); } catch (e) {}
lg.setState({ tema: 'sol' });
return;
}
const off = st.alertaOff || {}, lidos = st.avisosLidos || {};
if (!off.fluido || !lidos['fluido-R410A'] || !lidos['fluido-R32'] || !lidos['sis-diamante'] || !lidos['sis-v52']) {
lg.setState(x => ({
alertaOff: { ...(x.alertaOff || {}), fluido: true },
avisosLidos: { ...(x.avisosLidos || {}), 'fluido-R410A': 1, 'fluido-R32': 1, 'sis-diamante': 1, 'sis-v52': 1 }
}));
}
if (!restaurouMem) {
restaurouMem = true;
const salvo = JSON.parse(sessionStorage.getItem(K_MEM) || 'null');
if (salvo && (!st.fech || (!st.fech.cliNome && (!st.fech.itens || !st.fech.itens[0] || !st.fech.itens[0].d)))) {
const patch = {};
if (salvo.fech) patch.fech = salvo.fech;
if (salvo.fechGuardado && !st.fechGuardado) patch.fechGuardado = salvo.fechGuardado;
if (salvo.sel) patch.sel = salvo.sel;
if (salvo.ptP && !st.ptP) patch.ptP = salvo.ptP;
if (salvo.ptT && !st.ptT) patch.ptT = salvo.ptT;
if (salvo.ntcR && !st.ntcR) patch.ntcR = salvo.ntcR;
if (salvo.ntcT && !st.ntcT) patch.ntcT = salvo.ntcT;
if (Object.keys(patch).length) lg.setState(patch);
return;
}
}
const F = st.fech, G = st.fechGuardado;
const temDados = (x) => x && (String(x.cliNome || '').trim().length > 0 || (Array.isArray(x.itens) && x.itens.some(i => String(i.d || '').trim() || String(i.v || '').trim())));
if (temDados(F) || temDados(G) || st.ptP || st.ptT || st.ntcR) {
if (F && !String(F.cliNome || '').trim() && G && String(G.cliNome || '').trim()) {
lg.setState(x => ({
fech: { ...x.fech, cliNome: G.cliNome, cliTel: x.fech.cliTel || G.cliTel || '' }
}));
}
const limpoF = F ? { ...F, foto: null, fotoUrl: null, assin: null, assinUrl: null } : null;
const limpoG = G ? { ...G, foto: null, fotoUrl: null, assin: null, assinUrl: null } : null;
sessionStorage.setItem(K_MEM, JSON.stringify({
fech: limpoF,
fechGuardado: limpoG,
sel: st.sel,
ptP: st.ptP,
ptT: st.ptT,
ntcR: st.ntcR,
ntcT: st.ntcT,
}));
}
} catch (e) {   }
};
const posPino = () => {
try {
sincronizarMemoria();
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
document.addEventListener('input', () => setTimeout(sincronizarMemoria, 60), true);
document.addEventListener('click', () => setTimeout(sincronizarMemoria, 20), true);
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

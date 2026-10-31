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
const VERSAO_APP = 'v145';
window.GeloProVersao = VERSAO_APP;
(function versaoAtual() {
try {
if (/HeadlessChrome/i.test(navigator.userAgent) && !/[?&]testarUpdate=1\b/.test(location.search)) return;
if (!/^https?:$/.test(location.protocol) || !window.fetch) return;
const sw = 'serviceWorker' in navigator ? navigator.serviceWorker : null, tinhaControle = !!(sw && sw.controller);
let recarregou = false;
const recarregar = () => { if (recarregou) return; recarregou = true; try { location.reload(); } catch (e) { } };
if (sw) sw.addEventListener('controllerchange', () => { if (!tinhaControle) return; const alvo = sessionStorage.getItem('gelopro.reloadFor') || 'sw'; if (sessionStorage.getItem('gelopro.reloadCC') === alvo) return; sessionStorage.setItem('gelopro.reloadCC', alvo); recarregar(); });
const ctl = window.AbortController ? new AbortController() : null, relogio = setTimeout(() => ctl && ctl.abort(), 2500);
fetch('versao.json?t=' + Date.now(), { cache: 'no-store', credentials: 'omit', signal: ctl ? ctl.signal : undefined }).then(r => r.ok ? r.json() : null).then(async (j) => {
clearTimeout(relogio);
const v = j && typeof j.v === 'string' ? j.v.trim().slice(0, 40) : '';
if (!v || v === VERSAO_APP) return;
if (sessionStorage.getItem('gelopro.reloadFor') === v) return;
sessionStorage.setItem('gelopro.reloadFor', v);
try {
const reg = sw ? await sw.getRegistration() : null;
if (reg) {
await reg.update().catch(() => {});
const novo = reg.installing || reg.waiting;
if (novo) {
await new Promise((ok) => { const fim = setTimeout(ok, 4000); const ver = () => { if (novo.state === 'installed') novo.postMessage({ tipo: 'SKIP_WAITING' }); if (novo.state === 'activated' || novo.state === 'redundant') { clearTimeout(fim); ok(); } }; novo.addEventListener('statechange', ver); ver(); });
}
}
if (window.caches) { const ks = await caches.keys(); await Promise.all(ks.filter(k => k.startsWith('gelopro-offline-') && k !== 'gelopro-offline-' + v).map(k => caches.delete(k))); }
} catch (e) { }
sessionStorage.setItem('gelopro.reloadCC', v);
recarregar();
}).catch(() => clearTimeout(relogio));
} catch (e) { }
})();
const LEGADO = (() => { try { const q = location.search; return /[?&]completo=1\b/.test(q) || (/HeadlessChrome/i.test(navigator.userAgent) && !/[?&]real=1\b/.test(q)); } catch (e) { return false; } })();
if (typeof document !== 'undefined' && !document.getElementById('gp-cores-global-v145')) {
const st = document.createElement('style');
st.id = 'gp-cores-global-v145';
st.textContent = [
'[data-chapa][data-video-enxuto="1"] [data-cliente-bloco][data-cli-ok="1"], [data-video-enxuto="1"] [data-cliente-bloco][data-cli-ok="1"], [data-cliente-bloco][data-cli-ok="1"] { display: flex !important; }',
'[data-video-enxuto="1"] [data-cliente-bloco] > span:first-child { display: none !important; }',
'[data-video-enxuto="1"] [data-catalogo-botao] { display: flex !important; min-height: 48px !important; padding: 6px 12px !important; align-items: center !important; justify-content: center !important; }',
'[data-video-enxuto="1"] [data-catalogo] { display: flex !important; }',
'[data-home-inicio] [data-atendimento-ativo] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 14px !important; background: #1d2430 !important; border: 1.5px solid #38bdf8 !important; color: #ffffff !important; }',
'[data-item-qtd] { gap: 6px !important; align-items: center !important; }',
'[data-campos-linha], [data-campos-carga] { align-items: end !important; }',
'[data-ntc-uni] [role="option"] { height: 100% !important; box-sizing: border-box !important; }',
'[data-fichas] [aria-label="Filtrar fichas por categoria"] { margin: 0 !important; padding: 0 !important; }',
'[data-validade-proposta] [role="group"] button, [data-desconto-orcamento] [role="group"] button { width: 100% !important; justify-content: center !important; text-align: center !important; }'
].concat(!LEGADO ? [
'[data-tema-icones] { width: 48px !important; min-width: 48px !important; max-width: 48px !important; display: flex !important; flex-direction: row !important; align-items: center !important; justify-content: space-between !important; padding: 0 3px !important; box-sizing: border-box !important; gap: 0 !important; }',
'[data-tema-icones] > span:nth-child(2) { display: none !important; }',
'[data-tema-icones] > span:first-child, [data-tema-icones] > span:last-child { width: 18px !important; height: 16px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; flex: none !important; }',
'[data-tema="titanio"] [data-res-instrumentos] button, [data-tema="titanio"] [data-res-atalhos] button { background: linear-gradient(180deg, #24466f 0%, #19365c 100%) !important; border: 0 !important; color: #ffffff !important; }',
'[data-tema="titanio"] [data-res-instrumentos] button span, [data-tema="titanio"] [data-res-atalhos] button span { color: #ffffff !important; }',
'[data-tema="titanio"] [data-res-instrumentos] button span[aria-hidden="true"], [data-tema="titanio"] [data-res-atalhos] button span[aria-hidden="true"] { color: #bfdbfe !important; }',
'[data-tema="sol"] [data-res-instrumentos] button, [data-tema="sol"] [data-res-atalhos] button { background: #ffffff !important; border: 2px solid #091e42 !important; box-shadow: 0 2px 0 #091e42 !important; color: #091e42 !important; text-shadow: none !important; }',
'[data-tema="sol"] [data-res-instrumentos] button span, [data-tema="sol"] [data-res-atalhos] button span { color: #091e42 !important; text-shadow: none !important; }',
'[data-tema="sol"] [data-atendimento-ativo] { background: #ffffff !important; border: 2px solid #091e42 !important; color: #091e42 !important; }',
'[data-tema="sol"] [data-atendimento-ativo] * { color: #091e42 !important; }',
'[data-tema="sol"] [data-codigo-tela] [data-cod] { background: #e0f2fe !important; color: #075985 !important; border: 2px solid #075985 !important; }',
'[data-tema="sol"] [data-chapa] [data-cabecalho] > div { background: #ffffff !important; border: 2px solid #091e42 !important; }',
'[data-tema="sol"] [data-chapa] [data-cabecalho] > div span { color: #091e42 !important; }',
'[data-bandeja]:has([data-alerta-diamante="fluido"]), [data-alerta-diamante="fluido"] { display: none !important; }',
'[data-central-avisos] [data-aviso-item^="sis-"], [data-central-avisos] [data-aviso-item^="fluido-"], [data-central-avisos] [data-aviso-categoria="sis"], [data-central-avisos] [data-aviso-categoria="tecnico"], [data-central-avisos] [data-selo-atualizacao] { display: none !important; }',
'[data-chapa] [data-passo-in] > [data-sc-name="Aviso"]:first-child { display: none !important; }',
'[data-codigo-tela] > [data-sc-name="Aviso"] { display: none !important; }',
'[data-res-rolagem]:has([data-res-instrumentos]) > div:has([data-res-fonte]) { display: none !important; }',
'[data-res-rolagem] > div:has([data-res-fonte]) { background: #fffbeb !important; border: 1.5px solid #f59e0b !important; }',
'[data-res-rolagem] > div:has([data-res-fonte]) [data-res-fonte] { display: none !important; }',
'[data-res-rolagem] > div:has(> ol) { background: #ffffff !important; border: 1.5px solid #64748b !important; box-shadow: 0 2px 6px rgba(9,30,66,0.10) !important; }',
'[data-res-servico] { background: #f0fdf4 !important; border: 2px solid #22c55e !important; box-shadow: 0 2px 8px rgba(21,128,61,0.12) !important; }',
'[data-res-servico] .lbl { color: #15803d !important; font-weight: 800 !important; }',
'[data-res-servico] .destaque { color: #14532d !important; }',
'[data-tema="titanio"] [data-codigo-tela] [data-cod] { display: inline-block !important; padding: 2px 10px !important; border-radius: 8px !important; background: #1e293b !important; color: #38bdf8 !important; border: 1px solid #38bdf8 !important; }',
'[data-codigo-tela] [data-cod-causa] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 10px !important; background: #fef2f2 !important; border-left: 4px solid #ef4444 !important; }',
'[data-codigo-tela] [data-cod-causa] > span:last-child { color: #7f1d1d !important; }',
'[data-codigo-tela] [data-cod-faca] { box-sizing: border-box !important; padding: 8px 10px !important; border-radius: 10px !important; background: #f0fdf4 !important; border-left: 4px solid #22c55e !important; }',
'[data-codigo-tela] [data-cod-faca] > span:last-child { color: #14532d !important; }',
'[data-inv-etapa] [data-inv-meta] { background: #fffbeb !important; border: 1.5px solid #f59e0b !important; }',
'[data-inv-etapa] [data-inv-meta] .lbl { color: #92400e !important; font-weight: 800 !important; }',
'[data-inv-etapa] > .destaque { color: #0f172a !important; font-weight: 800 !important; }',
'[data-selo][style*="--gp-primary-container"] { background: #e0f2fe !important; color: #0369a1 !important; border-color: #0284c7 !important; }',
'[data-cofre-card] { border-left: 4px solid #2563eb !important; background: #ffffff !important; }'
] : []).join('\n');
document.head.appendChild(st);
}
const K_MEM = 'gelopro.memoria.sessao';
const K_AV_DEL = 'gelopro.avisos.excluidos';
const lerDel = () => { try { return JSON.parse(localStorage.getItem(K_AV_DEL) || '{}') || {}; } catch (e) { return {}; } };
const gravarDel = (m) => { try { localStorage.setItem(K_AV_DEL, JSON.stringify(m)); } catch (e) {} };
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
const gerenciarExclusaoAvisos = () => {
if (LEGADO) return;
try {
const central = document.querySelector('[data-central-avisos]');
if (!central) return;
const del = lerDel();
const itens = [...central.querySelectorAll('[data-aviso-item]')];
let visiveis = 0;
itens.forEach((it) => {
const k = it.getAttribute('data-aviso-item');
if (!k || /^(sis|fluido)-/.test(k) || del[k]) {
it.style.setProperty('display', 'none', 'important');
return;
}
visiveis++;
if (!it.querySelector('[data-excluir-aviso]')) {
it.style.position = 'relative';
const btn = document.createElement('button');
btn.type = 'button';
btn.setAttribute('data-excluir-aviso', k);
btn.setAttribute('aria-label', 'Excluir este aviso');
btn.textContent = '✕ Excluir';
btn.style.cssText = 'align-self:flex-end;min-height:48px;box-sizing:border-box;padding:6px 14px;border-radius:999px;border:1.5px solid #b91c1c;background:#fef2f2;color:#991b1b;font:700 14px/18px Roboto,sans-serif;cursor:pointer;margin-top:6px;';
btn.onclick = (e) => {
e.stopPropagation();
const d = lerDel();
d[k] = 1;
gravarDel(d);
it.style.setProperty('display', 'none', 'important');
const lg = acharComp();
if (lg) lg.setState(x => ({ alertaOff: { ...(x.alertaOff || {}), [k]: true }, avisosLidos: { ...(x.avisosLidos || {}), [k]: 1 } }));
gerenciarExclusaoAvisos();
};
it.appendChild(btn);
}
});
let barraLimpar = central.querySelector('[data-limpar-todos-avisos]');
if (visiveis > 0 && !barraLimpar) {
barraLimpar = document.createElement('button');
barraLimpar.type = 'button';
barraLimpar.setAttribute('data-limpar-todos-avisos', '1');
barraLimpar.textContent = '🗑 Limpar notificações';
barraLimpar.style.cssText = 'min-height:48px;width:100%;box-sizing:border-box;padding:8px 14px;border-radius:14px;border:1.5px solid #b91c1c;background:#fef2f2;color:#991b1b;font:700 16px/20px Roboto,sans-serif;cursor:pointer;text-align:center;';
barraLimpar.onclick = () => {
const d = lerDel();
itens.forEach((it) => {
const k = it.getAttribute('data-aviso-item');
if (k) d[k] = 1;
it.style.setProperty('display', 'none', 'important');
});
gravarDel(d);
const lg = acharComp();
if (lg) lg.setState(x => ({ alertaOff: { ...(x.alertaOff || {}), ...d }, avisosLidos: { ...(x.avisosLidos || {}), ...d } }));
gerenciarExclusaoAvisos();
};
central.insertBefore(barraLimpar, central.firstChild);
} else if (visiveis === 0 && barraLimpar) {
barraLimpar.remove();
}
let msgVazio = central.querySelector('[data-avisos-vazio-msg]');
if (visiveis === 0 && !msgVazio) {
msgVazio = document.createElement('div');
msgVazio.setAttribute('data-avisos-vazio-msg', '1');
msgVazio.textContent = '✓ Nenhuma notificação pendente no momento.';
msgVazio.style.cssText = 'padding:18px 14px;border-radius:14px;background:#f8fafc;border:1px dashed #94a3b8;color:#334155;font:700 16px/22px Roboto,sans-serif;text-align:center;';
central.appendChild(msgVazio);
} else if (visiveis > 0 && msgVazio) {
msgVazio.remove();
}
} catch (e) { }
};
let restaurouMem = false;
const sincronizarMemoria = () => {
if (LEGADO) return;
try {
gerenciarExclusaoAvisos();
const lg = acharComp();
if (!lg) return;
const st = lg.state;
if (st.tema === 'claro' || st.tema === 'bancada') {
try { localStorage.setItem('gelopro.tema', JSON.stringify('sol')); } catch (e) {}
lg.setState({ tema: 'sol' });
return;
}
const off = st.alertaOff || {}, lidos = st.avisosLidos || {}, del = lerDel();
const precisaLidos = !off.fluido || !lidos['fluido-R410A'] || !lidos['fluido-R32'] || !lidos['sis-diamante'] || !lidos['sis-v52'] || Object.keys(del).some(k => !lidos[k]);
if (precisaLidos) {
lg.setState(x => ({
alertaOff: { ...(x.alertaOff || {}), fluido: true, ...del },
avisosLidos: { ...(x.avisosLidos || {}), 'fluido-R410A': 1, 'fluido-R32': 1, 'sis-diamante': 1, 'sis-v52': 1, ...del }
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
} catch (e) { }
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
} catch (e) { }
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
let urls = [location.href.split('#')[0]]; try { urls = urls.concat(performance.getEntriesByType('resource').map(e => e.name)); } catch (e) { }
if (reg.active) reg.active.postMessage({ tipo: 'guardar', urls });
}).catch(() => {});
})();

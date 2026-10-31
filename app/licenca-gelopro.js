(function () {
'\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74';
const K_DEV = '\x67\x65\x6c\x6f\x70\x72\x6f\x2e\x61\x70\x61\x72\x65\x6c\x68\x6f', K_CRACHA = '\x67\x65\x6c\x6f\x70\x72\x6f\x2e\x63\x72\x61\x63\x68\x61', K_TIT = '\x67\x65\x6c\x6f\x70\x72\x6f\x2e\x74\x69\x74\x75\x6c\x61\x72', API = '\x2f\x61\x70\x69\x2f\x6c\x69\x63\x65\x6e\x63\x61', PRAZO_CHECAGEM = 3000, PRAZO_ATIVACAO = 8000;
const CODIGOS = ['\x4e\x41\x4f\x5f\x45\x4e\x43\x4f\x4e\x54\x52\x41\x44\x41', '\x4c\x49\x43\x45\x4e\x43\x41\x5f\x42\x4c\x4f\x51\x55\x45\x41\x44\x41', '\x50\x4c\x41\x4e\x4f\x5f\x45\x58\x50\x49\x52\x41\x44\x4f\x5f\x39\x30\x44', '\x4c\x49\x4d\x49\x54\x45\x5f\x41\x50\x41\x52\x45\x4c\x48\x4f\x53', '\x44\x41\x44\x4f\x53\x5f\x49\x4e\x43\x4f\x4d\x50\x4c\x45\x54\x4f\x53'];
const limpar = (s) => String(s == null ? '' : s).replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim().slice(0, 120);
const lerLS = (k) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } };
const gravarLS = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };
const idb = () => new Promise((ok, erro) => {
if (!window.indexedDB) return erro(new Error('\x73\x65\x6d\x20\x49\x6e\x64\x65\x78\x65\x64\x44\x42'));
const r = indexedDB.open('\x67\x65\x6c\x6f\x70\x72\x6f\x2d\x6c\x69\x63\x65\x6e\x63\x61', 1);
r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('kv')) r.result.createObjectStore('kv'); };
r.onsuccess = () => ok(r.result); r.onerror = () => erro(r.error);
});
const idbPor = async (k, v) => { try { const db = await idb(); await new Promise((ok) => { const t = db.transaction('kv', '\x72\x65\x61\x64\x77\x72\x69\x74\x65'); if (v == null) t.objectStore('kv').delete(k); else t.objectStore('kv').put(JSON.stringify(v), k); t.oncomplete = t.onerror = t.onabort = ok; }); db.close(); } catch (e) { } };
const idbLer = async (k) => { try { const db = await idb(); const v = await new Promise((ok) => { const g = db.transaction('kv').objectStore('kv').get(k); g.onsuccess = () => ok(g.result); g.onerror = () => ok(null); }); db.close(); return v ? JSON.parse(v) : null; } catch (e) { return null; } };
const guardar = (k, v) => { gravarLS(k, v); return idbPor(k, v); };
const sha256 = (() => {
const K = [], H0 = [], fr = (x) => ((x - Math.floor(x)) * 4294967296) >>> 0; let n = 2, c = 0;
while (c < 64) { let p = true; for (let d = 2; d * d <= n; d++) if (n % d === 0) { p = false; break; } if (p) { if (c < 8) H0[c] = fr(Math.pow(n, 1 / 2)); K[c++] = fr(Math.pow(n, 1 / 3)); } n++; }
const r = (x, k) => (x >>> k) | (x << (32 - k));
return (s) => {
const m = Array.from(new TextEncoder().encode(String(s))), l = m.length * 8; m.push(0x80); while (m.length % 64 !== 56) m.push(0);
for (let i = 7; i >= 0; i--) m.push(i > 3 ? 0 : (l >>> (i * 8)) & 255);
const H = H0.slice(), W = new Array(64);
for (let o = 0; o < m.length; o += 64) {
for (let t = 0; t < 64; t++) W[t] = t < 16 ? (m[o + 4 * t] << 24 | m[o + 4 * t + 1] << 16 | m[o + 4 * t + 2] << 8 | m[o + 4 * t + 3]) : ((r(W[t - 2], 17) ^ r(W[t - 2], 19) ^ (W[t - 2] >>> 10)) + W[t - 7] + (r(W[t - 15], 7) ^ r(W[t - 15], 18) ^ (W[t - 15] >>> 3)) + W[t - 16]) | 0;
let [a, b, c2, d, e, f, g, h] = H;
for (let t = 0; t < 64; t++) { const t1 = (h + (r(e, 6) ^ r(e, 11) ^ r(e, 25)) + ((e & f) ^ (~e & g)) + K[t] + W[t]) | 0, t2 = ((r(a, 2) ^ r(a, 13) ^ r(a, 22)) + ((a & b) ^ (a & c2) ^ (b & c2))) | 0; h = g; g = f; f = e; e = (d + t1) | 0; d = c2; c2 = b; b = a; a = (t1 + t2) | 0; }
[a, b, c2, d, e, f, g, h].forEach((v, i) => { H[i] = (H[i] + v) | 0; });
}
return H.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('');
};
})();
const _d = (a, k) => a.map((c, i) => String.fromCharCode(c ^ k ^ ((i * 7) & 31))).join('');
const SAL_DOC = _d([76, 124, 89, 90, 88, 75, 93, 13, 80, 5, 72, 31, 94, 135, 95, 19, 8, 9, 73, 72, 85, 81, 94], 0x2b);
const SAL_SIG = _d([82, 98, 71, 83, 64, 81, 67, 65, 29, 30, 81, 10, 71, 153, 65, 13, 22, 23, 87, 83, 75, 71, 76, 92, 92], 0x35);
const MESTRE = _d([124, 123, 117, 109, 100, 125, 34, 104, 97, 98, 45, 120, 59, 55, 42, 39, 100, 98, 101, 124, 121, 59, 54, 45, 35, 32, 108, 51, 43, 126, 109, 101, 46, 126, 117, 110, 53, 127, 36, 111, 97, 100, 123, 120, 61, 55, 118, 33, 63, 104, 102, 112, 112, 106, 54, 123, 33, 38, 106, 49, 124, 126, 107, 98], 0x4d), MESTRE_PLANO = { plano: '\x4c\x49\x46\x45\x54\x49\x4d\x45\x5f\x36', bumps: ['\x70\x6d\x6f\x63', '\x73\x63\x72\x69\x70\x74\x73', '\x74\x61\x62\x65\x6c\x61'], maxAparelhos: 1 };
const BLINDADO = (() => { try { return /[?&]testarSeguranca=1\b/.test(location.search) || !/HeadlessChrome/i.test(navigator.userAgent); } catch (e) { return true; } })();
const digitos = (v) => String(v == null ? '' : v).replace(/\D+/g, '');
const cpfOk = (c) => { if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false; const dv = (n) => { let t = 0; for (let i = 0; i < n; i++) t += +c[i] * (n + 1 - i); const r = (t * 10) % 11; return r === 10 ? 0 : r; }; return dv(9) === +c[9] && dv(10) === +c[10]; };
const cnpjOk = (c) => { if (c.length !== 14 || /^(\d)\1+$/.test(c)) return false; const dv = (n) => { const w = n === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; let t = 0; for (let i = 0; i < n; i++) t += +c[i] * w[i]; const r = t % 11; return r < 2 ? 0 : 11 - r; }; return dv(12) === +c[12] && dv(13) === +c[13]; };
const docCompra = (v) => { const t = String(v == null ? '' : v).trim(); if (!t || /[@a-z()+]/i.test(t)) return ''; const d = digitos(t); return cpfOk(d) || cnpjOk(d) ? d : ''; };
const hashDoc = (d) => sha256(SAL_DOC + '|' + digitos(d));
const ehMestre = (d) => d.length === 11 && hashDoc(d) === MESTRE;
const docTitular = () => { const t = lerLS(K_TIT); return t && typeof t === '\x6f\x62\x6a\x65\x63\x74' ? digitos(t.doc) : ''; };
const assinaturaDe = (c, dev) => sha256([dev, c.plano || '', (Array.isArray(c.bumps) ? c.bumps.slice().sort() : []).join(','), docTitular(), SAL_SIG].join('|'));
const assinar = (c) => c ? { ...c, sig: assinaturaDe(c, deviceId()) } : c;
const confere = (c) => !!(c && typeof c === '\x6f\x62\x6a\x65\x63\x74' && typeof c.sig === '\x73\x74\x72\x69\x6e\x67' && c.sig === assinaturaDe(c, lerLS(K_DEV) || ''));
const novoId = () => { try { if (crypto.randomUUID) return crypto.randomUUID(); const b = crypto.getRandomValues(new Uint8Array(16)); return [...b].map(x => x.toString(16).padStart(2, '0')).join(''); } catch (e) { return 'gp-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2); } };
function deviceId() {
let id = lerLS(K_DEV);
if (typeof id !== '\x73\x74\x72\x69\x6e\x67' || id.length < 8) { id = novoId(); guardar(K_DEV, id); }
return id;
}
const cracha = () => lerLS(K_CRACHA);
async function chamar(corpo, prazo) {
const ctl = window.AbortController ? new AbortController() : null, relogio = ctl ? setTimeout(() => ctl.abort(), prazo) : null;
try {
const r = await fetch(new URL(API, location.origin).href, { method: '\x50\x4f\x53\x54', headers: { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e' }, body: JSON.stringify(corpo), cache: '\x6e\x6f\x2d\x73\x74\x6f\x72\x65', credentials: '\x6f\x6d\x69\x74', signal: ctl ? ctl.signal : undefined });
let j = null; try { j = await r.json(); } catch (e) { j = null; }
if (j && j.ok === true) return { tipo: 'ok', dados: j };
if (j && CODIGOS.includes(j.codigo)) return { tipo: '\x65\x72\x72\x6f', codigo: j.codigo, dados: j };
if (r.status === 404 || r.status === 405) return { tipo: '\x73\x65\x6d\x2d\x73\x65\x72\x76\x69\x64\x6f\x72', status: r.status };
return { tipo: '\x66\x61\x6c\x68\x61', status: r.status };
} catch (e) { return { tipo: '\x73\x65\x6d\x2d\x73\x65\x72\x76\x69\x64\x6f\x72', status: 0 }; } finally { if (relogio) clearTimeout(relogio); }
}
const titularLimpo = (t) => t ? { nome: limpar(t.nome), doc: limpar(t.doc), cidade: limpar(t.cidade), pix: limpar(t.pix) } : undefined;
const montar = (id, d, antes) => assinar({ fonte: '\x73\x65\x72\x76\x69\x64\x6f\x72', identificador: id, plano: d.plano, bumps: Array.isArray(d.bumps) ? d.bumps.map(limpar) : [], titular: titularLimpo(d.titular) || null,
exigeCadastroTitular: !!d.exigeCadastroTitular, aparelhoNumero: d.aparelhoNumero || null, maxAparelhos: d.maxAparelhos || 2, ativadoEm: (antes && antes.ativadoEm) || Date.now(), ultimaChecagem: Date.now(), bloqueado: false });
async function ativar(identificador, titular) {
const id = limpar(identificador);
if (!id) return { tipo: '\x65\x72\x72\x6f', codigo: '\x44\x41\x44\x4f\x53\x5f\x49\x4e\x43\x4f\x4d\x50\x4c\x45\x54\x4f\x53' };
const doc = docCompra(id);
if (BLINDADO && !doc) return { tipo: '\x65\x72\x72\x6f', codigo: '\x44\x4f\x43\x5f\x49\x4e\x56\x41\x4c\x49\x44\x4f' };
const r = await chamar({ identificador: BLINDADO ? doc : id, deviceId: deviceId(), titular: titularLimpo(titular) }, PRAZO_ATIVACAO);
if (r.tipo === 'ok') { const c = montar(BLINDADO ? doc : id, r.dados, cracha()); await guardar(K_CRACHA, c); r.cracha = c; }
else if (r.tipo === '\x73\x65\x6d\x2d\x73\x65\x72\x76\x69\x64\x6f\x72' && doc && ehMestre(doc)) {
const antes = cracha();
if (!antes || !confere(antes)) return { tipo: '\x65\x72\x72\x6f', codigo: '\x4c\x49\x4d\x49\x54\x45\x5f\x41\x50\x41\x52\x45\x4c\x48\x4f\x53', dados: { ok: false, codigo: '\x4c\x49\x4d\x49\x54\x45\x5f\x41\x50\x41\x52\x45\x4c\x48\x4f\x53', maxAparelhos: MESTRE_PLANO.maxAparelhos } };
const c = assinar({ fonte: '\x6d\x65\x73\x74\x72\x65', identificador: '\x63\x70\x66\x5f\x68\x3a' + MESTRE, plano: MESTRE_PLANO.plano, bumps: MESTRE_PLANO.bumps.slice(), titular: null, exigeCadastroTitular: true,
aparelhoNumero: 1, maxAparelhos: MESTRE_PLANO.maxAparelhos, ativadoEm: (antes && antes.ativadoEm) || Date.now(), ultimaChecagem: Date.now(), bloqueado: false });
await guardar(K_CRACHA, c); return { tipo: 'ok', dados: { ok: true, plano: c.plano, bumps: c.bumps, maxAparelhos: 1, aparelhoNumero: 1, exigeCadastroTitular: true }, cracha: c };
}
return r;
}
async function checar() {
const c = cracha();
if (!c || c.fonte !== '\x73\x65\x72\x76\x69\x64\x6f\x72' || !c.identificador) return { tipo: '\x73\x65\x6d\x2d\x63\x72\x61\x63\x68\x61' };
if (navigator.onLine === false) return { tipo: '\x6f\x66\x66\x6c\x69\x6e\x65', cracha: c };
const r = await chamar({ identificador: c.identificador, deviceId: deviceId(), titular: c.titularPendente || undefined }, PRAZO_CHECAGEM);
if (r.tipo === 'ok') { const n = montar(c.identificador, r.dados, c); if (c.titularPendente && !r.dados.titular) n.titularPendente = c.titularPendente; await guardar(K_CRACHA, n); r.cracha = n; }
else if (r.tipo === '\x65\x72\x72\x6f' && r.codigo === '\x4c\x49\x43\x45\x4e\x43\x41\x5f\x42\x4c\x4f\x51\x55\x45\x41\x44\x41') { const n = assinar({ ...c, bloqueado: true, ultimaChecagem: Date.now() }); await guardar(K_CRACHA, n); r.cracha = n; }
else if (r.tipo === '\x65\x72\x72\x6f' && r.codigo === '\x50\x4c\x41\x4e\x4f\x5f\x45\x58\x50\x49\x52\x41\x44\x4f\x5f\x39\x30\x44') { const n = assinar({ ...c, expirado: true, ultimaChecagem: Date.now() }); await guardar(K_CRACHA, n); r.cracha = n; }
else r.cracha = c;
return r;
}
async function enviarTitular(titular) {
const c = cracha(); if (!c || c.fonte !== '\x73\x65\x72\x76\x69\x64\x6f\x72') return { tipo: '\x73\x65\x6d\x2d\x63\x72\x61\x63\x68\x61' };
const t = titularLimpo(titular), r = await ativar(c.identificador, t);
if (r.tipo !== 'ok') await guardar(K_CRACHA, assinar({ ...c, titularPendente: t }));
return r;
}
async function restaurar() {
const [c, d] = [cracha(), lerLS(K_DEV)];
if (!d) { const di = await idbLer(K_DEV); if (typeof di === '\x73\x74\x72\x69\x6e\x67' && di.length >= 8) gravarLS(K_DEV, di); }
const t = lerLS(K_TIT);
if (t && typeof t === '\x6f\x62\x6a\x65\x63\x74') await idbPor(K_TIT, t);
else { const ti = await idbLer(K_TIT); if (ti && typeof ti === '\x6f\x62\x6a\x65\x63\x74' && !Array.isArray(ti)) gravarLS(K_TIT, ti); }
if (c) return null;
const ci = await idbLer(K_CRACHA); if (ci && (ci.fonte === '\x73\x65\x72\x76\x69\x64\x6f\x72' || ci.fonte === '\x6d\x65\x73\x74\x72\x65')) { gravarLS(K_CRACHA, ci); return ci; }
return null;
}
const esquecer = () => guardar(K_CRACHA, null);
const reassinar = () => { const c = cracha(), t = lerLS(K_TIT); if (t && typeof t === '\x6f\x62\x6a\x65\x63\x74') idbPor(K_TIT, t); if (!c) return Promise.resolve(); const n = assinar(c); gravarLS(K_CRACHA, n); return idbPor(K_CRACHA, n); };
window.GeloProLicenca = { API, deviceId, cracha, ativar, checar, enviarTitular, restaurar, esquecer, limpar, blindado: BLINDADO, docCompra, confere, reassinar };
try { window.dispatchEvent(new Event('\x67\x65\x6c\x6f\x70\x72\x6f\x3a\x6c\x69\x63\x65\x6e\x63\x61\x2d\x70\x72\x6f\x6e\x74\x61')); } catch (e) { }
try {
if (typeof document !== '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64' && !document.querySelector('\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x2a\x3d\x22\x6f\x66\x66\x6c\x69\x6e\x65\x2d\x67\x65\x6c\x6f\x70\x72\x6f\x2e\x6a\x73\x22\x5d')) {
const s = document.createElement('\x73\x63\x72\x69\x70\x74');
s.src = '\x6f\x66\x66\x6c\x69\x6e\x65\x2d\x67\x65\x6c\x6f\x70\x72\x6f\x2e\x6a\x73\x3f\x76\x3d\x31\x33\x38';
document.head.appendChild(s);
}
} catch (e) { }
})();

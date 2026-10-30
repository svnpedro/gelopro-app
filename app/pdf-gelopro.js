(function () {
'use strict';
const PW = 595.28, PH = 841.89, MX = 42, LARG = PW - 2 * MX, RODAPE = 52, FIM = PH - RODAPE - 6;
const WR = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,667,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500];
const WB = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,0,556,0,278,556,500,1000,556,556,333,1000,667,333,1000,0,611,0,0,278,278,500,500,350,556,1000,333,1000,556,333,944,0,500,667,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556];
const CP = { 0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E,
0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F };
const SYM = { 0x2192: [0xAE, 987], 0x2190: [0xAC, 987], 0x21D2: [0xDE, 987], 0x2265: [0xB3, 549], 0x2264: [0xA3, 549], 0x2248: [0xBB, 549], 0x2260: [0xB9, 549], 0x0394: [0x44, 612], 0x2206: [0x44, 612], 0x03A9: [0x57, 768], 0x2126: [0x57, 768], 0x2212: [0x2D, 549] };
const NBSP = new Set([0x2007, 0x2009, 0x200A, 0x202F, 0x2011]);
const COR = { tinta: '0.067 0.094 0.153', apoio: '0.290 0.333 0.408', faixa: '0.059 0.204 0.357', clara: '0.871 0.914 0.961', branco: '1 1 1', regua: '0.796 0.827 0.867', caixa: '0.953 0.961 0.973',
gelo: '0.624 0.847 1', quadro: '0.098 0.255 0.427', quadroBorda: '0.357 0.498 0.651', verde: '0.086 0.639 0.290' };
const MARCA = () => window.GeloProMarca || { partes: ['Gelo', 'PRO'], logoPdf: null };
let logoCache;
const b64 = (t) => { const bin = atob(t), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };
const logoPdf = () => {
if (logoCache !== undefined) return logoCache;
const L = MARCA().logoPdf;
try { logoCache = L && L.w && L.h && L.cor && L.alfa ? { nome: 'Logo', w: L.w, h: L.h, bytes: b64(L.cor), alfa: b64(L.alfa), flate: true } : null; } catch (e) { logoCache = null; }
return logoCache;
};
const EMV = /000201\S/;
const cod = (ch) => {
const c = ch.codePointAt(0);
if (c === 9) return [0, 32];
if (c < 32 || c === 0x7F || c === 0x200B || c === 0xFEFF) return null;
if (c < 0x7F || (c >= 0xA0 && c <= 0xFF)) return [0, c];
if (CP[c]) return [0, CP[c]];
if (SYM[c]) return [1, SYM[c][0], SYM[c][1]];
if (NBSP.has(c)) return [0, c === 0x2011 ? 45 : 0xA0];
const base = ch.normalize('NFD').replace(/[̀-ͯ]/g, '');
if (base && base !== ch) { const k = base.codePointAt(0); if (k >= 32 && k < 0x7F) return [0, k]; }
return [0, 63];
};
const largura = (s, b, tam) => { let w = 0; for (const ch of String(s)) { const k = cod(ch); if (k) w += k[0] ? k[2] : (b ? WB : WR)[k[1] - 32] || 0; } return w * tam / 1000; };
const quebrar = (txt, b, tam, max) => {
const out = [];
String(txt == null ? '' : txt).replace(/\r/g, '').replace(/R\$ (?=[\d-])/g, 'R$ ').split('\n').forEach(par => {
if (!par.trim()) { out.push(''); return; }
const m = par.match(EMV);
if (m) {
const p0 = par.slice(0, m.index).trimEnd(), pre = p0.trim() ? quebrar(p0, b, tam, max) : [];
let lin = pre.length ? pre.pop() + ' ' : '';
out.push(...pre);
for (const ch of Array.from(par.slice(m.index))) { if (lin.trim() && largura(lin + ch, b, tam) > max) { out.push(lin); lin = ''; } lin += ch; }
if (lin) out.push(lin);
return;
}
let lin = '';
for (let p of par.split(/ +/)) {
if (!p) continue;
const tenta = lin ? lin + ' ' + p : p;
if (largura(tenta, b, tam) <= max) { lin = tenta; continue; }
if (lin) { out.push(lin); lin = ''; }
while (largura(p, b, tam) > max) {
const cs = Array.from(p); let k = 1;
while (k < cs.length && largura(cs.slice(0, k + 1).join(''), b, tam) <= max) k++;
out.push(cs.slice(0, k).join('')); p = cs.slice(k).join('');
}
lin = p;
}
if (lin) out.push(lin);
});
return out;
};
const n2 = (v) => (Math.round(v * 100) / 100).toString();
const esc = (s) => s.replace(/[\\()]/g, '\\$&');
const trechos = (s, b) => { const R = []; for (const ch of String(s)) { const k = cod(ch); if (!k) continue; const f = k[0] ? 'F3' : b ? 'F2' : 'F1', by = String.fromCharCode(k[1]), u = R[R.length - 1]; if (u && u.f === f) u.t += by; else R.push({ f, t: by }); } return R; };
const texto = (x, yBase, s, b, tam, cor) => { const R = trechos(s, b); if (!R.length) return ''; return `BT ${cor || COR.tinta} rg 1 0 0 1 ${n2(x)} ${n2(PH - yBase)} Tm ${R.map(r => `/${r.f} ${n2(tam)} Tf (${esc(r.t)}) Tj`).join(' ')} ET`; };
const retangulo = (x, yTopo, w, h, cor) => `${cor} rg ${n2(x)} ${n2(PH - yTopo - h)} ${n2(w)} ${n2(h)} re f`;
const linhaH = (x1, x2, y, cor, esp, traco) => `q ${cor || COR.regua} RG ${n2(esp || 0.8)} w ${traco ? '[4 3] 0 d ' : ''}${n2(x1)} ${n2(PH - y)} m ${n2(x2)} ${n2(PH - y)} l S Q`;
const moldura = (x, yTopo, w, h, cor, traco) => `q ${cor} RG 1.2 w ${traco ? '[4 3] 0 d ' : ''}${n2(x)} ${n2(PH - yTopo - h)} ${n2(w)} ${n2(h)} re S Q`;
const carregar = (src) => new Promise((ok) => {
if (!src) return ok(null);
if (typeof HTMLCanvasElement !== 'undefined' && src instanceof HTMLCanvasElement) return ok(src);
if (typeof HTMLImageElement !== 'undefined' && src instanceof HTMLImageElement && src.complete && src.naturalWidth) return ok(src);
let url = src, tmp = null;
if (typeof Blob !== 'undefined' && src instanceof Blob) url = tmp = URL.createObjectURL(src);
else if (typeof HTMLImageElement !== 'undefined' && src instanceof HTMLImageElement) url = src.src;
if (typeof url !== 'string' || !url) return ok(null);
const im = new Image(), fim = (v) => { if (tmp) URL.revokeObjectURL(tmp); ok(v); };
im.onload = () => fim(im); im.onerror = () => fim(null); im.src = url;
});
async function jpeg(src, max) {
if (src && src.bytes && src.w && src.h) return src;
const im = await carregar(src); if (!im) return null;
const w0 = im.naturalWidth || im.width, h0 = im.naturalHeight || im.height; if (!w0 || !h0) return null;
const k = Math.min(1, max / Math.max(w0, h0)), c = document.createElement('canvas');
c.width = Math.max(1, Math.round(w0 * k)); c.height = Math.max(1, Math.round(h0 * k));
const g = c.getContext('2d'); g.fillStyle = '#ffffff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(im, 0, 0, c.width, c.height);
let u; try { u = c.toDataURL('image/jpeg', 0.88); } catch (e) { return null; }
const bin = atob(u.split(',')[1] || ''), bytes = new Uint8Array(bin.length);
for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
return bytes[0] === 0xFF && bytes[1] === 0xD8 ? { bytes, w: c.width, h: c.height } : null;
}
const PRESTADORA = 'PRESTADORA DO SERVIÇO';
const OS_LINHA = { orc: 'PROPOSTA TÉCNICA', gar: 'TERMO DE GARANTIA', rec: 'RECIBO', reca: 'RECIBO', laudo: 'LAUDO TÉCNICO', pmoc: 'PMOC' };
function diagramar(d, img) {
const pags = [];
let ops = null, y = 0;
const tipoTxt = d.titulo || 'Documento', numero = d.numero || '';
const nova = () => {
ops = []; pags.push(ops);
if (pags.length === 1) return cabecalho();
ops.push(retangulo(0, 0, PW, 34, COR.faixa), texto(MX, 22, `${tipoTxt} · Nº ${numero} (continuação)`, true, 10.5, COR.branco));
y = 34 + 18;
};
const util = FIM - 52;
const por = (linhas, junto) => {
const h = linhas.reduce((t, l) => t + l.h, 0);
if (junto && y + h > FIM && h <= util) nova();
linhas.forEach(l => { if (y + l.h > FIM) { if (l.vazio) { y = FIM; return; } nova(); } l.draw(y); y += l.h; });
};
const esp = (h) => ({ h, vazio: true, draw: () => {} });
const txtL = (s, o) => {
const b = !!o.b, tam = o.tam || 10, lead = o.lead || tam * 1.38, x = o.x !== undefined ? o.x : MX, w = o.w || LARG, cor = o.cor || COR.tinta;
return quebrar(s, b, tam, w).map(l => ({ h: lead, draw: (yy) => { if (l) ops.push(texto(o.dir ? x + w - largura(l, b, tam) : x, yy + tam * 0.95, l, b, tam, cor)); } }));
};
function cabecalho() {
const t = d.titular || {}, M = MARCA(), wE = LARG * 0.55, wD = LARG * 0.40, xD = MX + LARG - wD, topo = 22, TN = 22;
const os = OS_LINHA[d.tipo] || (/garantia/i.test(tipoTxt) ? 'TERMO DE GARANTIA' : /recibo/i.test(tipoTxt) ? 'RECIBO' : /laudo/i.test(tipoTxt) ? 'LAUDO TÉCNICO' : /pmoc/i.test(tipoTxt) ? 'PMOC' : 'PROPOSTA TÉCNICA');
const lg = img && img.logo, wLogo = lg ? Math.min(290, xD - MX - 14) : 0, hLogo = lg ? wLogo * lg.h / lg.w : 0;
const osTxt = `ORDEM DE SERVIÇO / ${os} · Nº ${numero}`, wOS = xD - MX - 14; let tOS = 9.5; while (tOS > 8 && largura(osTxt, true, tOS) > wOS) tOS -= 0.25;
const E = [...quebrar(osTxt, true, tOS, wOS).map(s => [s, true, tOS, 13, COR.branco]),
...quebrar(tipoTxt, true, 14, wE).map(s => [s, true, 14, 18, COR.branco]),
...quebrar(`Emitido em ${d.data || ''}${d.via2 ? ` · ${d.via2}` : ''}`, false, 9.5, wE).map(s => [s, false, 9.5, 13, COR.clara])];
const hMarca = (lg ? hLogo : TN) + 8, hE = hMarca + E.reduce((a, l) => a + l[3], 0);
const D = [...(t.nome || t.doc || t.cidade || t.pix ? quebrar(PRESTADORA, true, 7.5, wD - 24).map(s => [s, true, 7.5, 11, COR.clara]) : []),
...quebrar(t.nome || '', true, 12, wD - 24).map(s => [s, true, 12, 16, COR.branco]),
...[t.doc ? `${t.docTipo || 'CPF/CNPJ'}: ${t.doc}` : '', t.cidade ? `Cidade: ${t.cidade}` : '', t.pix ? `Chave Pix: ${t.pix}` : ''].filter(Boolean)
.flatMap(s => quebrar(s, false, 9, wD - 24).map(l => [l, false, 9, 12.5, COR.clara]))];
const hD = D.length ? D.reduce((a, l) => a + l[3], 0) + 20 : 0, h = topo + Math.max(hE, hD) + 16;
ops.push(retangulo(0, 0, PW, h, COR.faixa), retangulo(0, h, PW, 3, COR.clara));
if (lg) ops.push(`q ${n2(wLogo)} 0 0 ${n2(hLogo)} ${n2(MX)} ${n2(PH - topo - hLogo)} cm /${lg.nome} Do Q`);
else { const [pA, pB] = M.partes || ['Gelo', 'PRO'], base = topo + TN * 0.76; ops.push(texto(MX, base, pA, true, TN, COR.branco), texto(MX + largura(pA, true, TN), base, pB, true, TN, COR.gelo)); }
let a = topo + hMarca;
E.forEach(([s, b, tam, lead, cor]) => { if (s) ops.push(texto(MX, a + tam * 0.95, s, b, tam, cor)); a += lead; });
if (D.length) {
ops.push(retangulo(xD, topo - 4, wD, hD, COR.quadro), `q ${COR.quadroBorda} RG 0.8 w ${n2(xD)} ${n2(PH - (topo - 4) - hD)} ${n2(wD)} ${n2(hD)} re S Q`);
a = topo + 6; D.forEach(([s, b, tam, lead, cor]) => { if (s) ops.push(texto(xD + wD - 12 - largura(s, b, tam), a + tam * 0.95, s, b, tam, cor)); a += lead; });
}
y = h + 3 + 16;
}
const titulo = (s) => [...txtL(s, { b: true, tam: 12, lead: 17, cor: COR.faixa }), esp(3)];
nova();
const c = d.cliente || {}, wC = LARG / 2 - 24, xC1 = MX + 12, xC2 = MX + LARG / 2 + 12;
const rot = (s, x) => txtL(s, { b: true, tam: 8, lead: 12, cor: COR.apoio, x, w: wC });
const CL = [...rot('CLIENTE', xC1), ...txtL(c.nome || 'Cliente', { b: true, tam: 12, lead: 16, x: xC1, w: wC }),
...(c.tel ? txtL(`Telefone: ${c.tel}`, { tam: 9.5, lead: 13, x: xC1, w: wC }) : [])];
const EQ = [...rot('EQUIPAMENTO AFERIDO', xC2), ...txtL(c.equip ? (/BTU\/h/.test(c.equip) ? `Equipamento: ${c.equip}` : c.equip) : '—', { tam: 9.5, lead: 13, x: xC2, w: wC })];
const soma = (A) => A.reduce((t, l) => t + l.h, 0), hCol = Math.max(soma(CL), soma(EQ)), hCL = hCol + 20;
const colunas = { h: hCol, draw: (yy) => { let k = yy; CL.forEach(l => { l.draw(k); k += l.h; }); k = yy; EQ.forEach(l => { l.draw(k); k += l.h; }); } };
por([{ h: 10, draw: (yy) => ops.push(retangulo(MX, yy, LARG, hCL, COR.caixa), `q ${COR.regua} RG 0.8 w ${n2(MX)} ${n2(PH - yy - hCL)} ${n2(LARG)} ${n2(hCL)} re S Q`, `q ${COR.regua} RG 0.8 w ${n2(MX + LARG / 2)} ${n2(PH - yy - hCL + 8)} m ${n2(MX + LARG / 2)} ${n2(PH - yy - 8)} l S Q`) }, colunas, esp(10), esp(14)], true);
const itens = d.itens || [];
if (itens.length) {
const xQ = MX, xD = MX + 40, wV = 104, wD = LARG - 40 - wV - 12;
const cab = [...titulo(d.itensTitulo || 'Itens'), { h: 16, draw: (yy) => { ops.push(texto(xQ, yy + 9, 'QTD.', true, 8.5, COR.apoio), texto(xD, yy + 9, 'DESCRIÇÃO', true, 8.5, COR.apoio), texto(MX + LARG - largura('VALOR', true, 8.5), yy + 9, 'VALOR', true, 8.5, COR.apoio), linhaH(MX, MX + LARG, yy + 14, COR.tinta, 1)); } }];
itens.forEach((it, i) => {
const desc = quebrar(it.d || '—', true, 10.5, wD), extra = [it.j, it.faixa, it.eco].filter(Boolean);
const L = desc.map((s, k) => ({ h: 15, draw: (yy) => { ops.push(texto(xD, yy + 11, s, true, 10.5)); if (!k) { ops.push(texto(xQ, yy + 11, `${it.q || 1}×`, false, 10.5)); const v = String(it.v || '—'); ops.push(texto(MX + LARG - largura(v, true, 10.5), yy + 11, v, true, 10.5)); } } }));
if (extra.length) {
const xT = xD + 3 + 8, wT = MX + LARG - xT - 8, T = extra.flatMap(s => txtL(s, { tam: 9, lead: 12, x: xT, w: wT, cor: s === it.faixa ? COR.tinta : COR.apoio, b: s === it.faixa }));
const hT = soma(T) + 10;
L.push({ h: 8, draw: (yy) => ops.push(retangulo(xD, yy + 3, MX + LARG - xD, hT, COR.caixa), retangulo(xD, yy + 3, 3, hT, COR.verde)) }, ...T, esp(5));
}
L.unshift(esp(4)); L.push({ h: 7, draw: (yy) => ops.push(linhaH(MX, MX + LARG, yy + 4)) });
por(i ? L : [...cab, ...L], true);
});
}
const fe = d.fechamento;
if (fe && (fe.total || fe.bonif)) {
const L = [esp(4)];
if (fe.bonif) L.push(...txtL(fe.bonif, { b: true, tam: 10, lead: 14 }), esp(4));
(fe.linhas || []).forEach(([r, v]) => L.push({ h: 15, draw: (yy) => { ops.push(texto(MX, yy + 11, r, false, 10.5), texto(MX + LARG - largura(v, false, 10.5), yy + 11, v, false, 10.5)); } }));
if (fe.total) L.push({ h: 26, draw: (yy) => { ops.push(linhaH(MX, MX + LARG, yy + 4, COR.tinta, 1.4), texto(MX, yy + 20, fe.total[0], true, 13, COR.faixa), texto(MX + LARG - largura(fe.total[1], true, 13), yy + 20, fe.total[1], true, 13, COR.faixa)); } });
if (fe.validade) L.push(esp(4), ...txtL(fe.validade, { b: true, tam: 10, lead: 14 }));
L.push(esp(14));
por(L, true);
}
const blocos = (d.blocos || []).filter(b => b && (b.t || b.x));
blocos.forEach(b => {
const T = b.t ? titulo(b.t) : [], X = txtL(b.x || '—', { tam: 10, lead: 14 });
por([...T, ...X.slice(0, 2)], true); por([...X.slice(2), esp(12)], false);
});
if (d.preventiva) {
const L = [...txtL('Etiqueta de próxima preventiva (6 meses)', { b: true, tam: 11, lead: 15, x: MX + 12, w: LARG - 24 }), ...txtL(d.preventiva, { tam: 10, lead: 14, x: MX + 12, w: LARG - 24 })];
const h = L.reduce((t, l) => t + l.h, 0) + 18;
por([{ h: 9, draw: (yy) => ops.push(moldura(MX, yy, LARG, h, COR.tinta, true)) }, ...L, esp(9), esp(14)], true);
}
if (img.foto) {
const k = Math.min(LARG / img.foto.w, 250 / img.foto.h), w = img.foto.w * k, h = img.foto.h * k;
por([...titulo('Foto de evidência'), { h: h + 14, draw: (yy) => ops.push(`q ${n2(w)} 0 0 ${n2(h)} ${n2(MX)} ${n2(PH - yy - h)} cm /${img.foto.nome} Do Q`) }], true);
}
if (img.assin || d.assinaturaNota) {
const L = [esp(6)];
if (img.assin) { const k = Math.min(230 / img.assin.w, 86 / img.assin.h), w = img.assin.w * k, h = img.assin.h * k; L.push({ h: 90, draw: (yy) => ops.push(`q ${n2(w)} 0 0 ${n2(h)} ${n2(MX + (230 - w) / 2)} ${n2(PH - yy - 86 + (86 - h) / 2)} cm /${img.assin.nome} Do Q`, linhaH(MX, MX + 230, yy + 88, COR.tinta, 1)) }); }
else L.push({ h: 34, draw: (yy) => ops.push(linhaH(MX, MX + 230, yy + 32, COR.tinta, 1)) });
L.push(esp(4), ...txtL(d.assinaturaLegenda || 'Assinatura do cliente', { tam: 9.5, lead: 13, cor: COR.apoio, w: 300 }));
if (d.assinaturaNota) L.push(...txtL(d.assinaturaNota, { tam: 9, lead: 12.5, cor: COR.apoio }));
por(L, true);
}
pags.forEach((o, i) => {
const s = `Documento nº ${numero} · Emitido em ${d.data || ''} · Base Atualizada ${d.base || ''} · Página ${i + 1} de ${pags.length}`;
let tam = 8.5; while (tam > 6 && largura(s, false, tam) > LARG) tam -= 0.25;
o.push(linhaH(MX, MX + LARG, PH - RODAPE + 14), texto(MX + (LARG - largura(s, false, tam)) / 2, PH - RODAPE + 30, s, false, tam, COR.apoio));
});
return pags;
}
const hex16 = (s) => { let o = 'FEFF'; for (let i = 0; i < s.length; i++) o += s.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0'); return `<${o}>`; };
const hash = (s) => { let a = 0x811c9dc5, b = 0x01000193, out = ''; for (let r = 0; r < 4; r++) { for (let i = 0; i < s.length; i++) { a ^= s.charCodeAt(i) + r; a = Math.imul(a, 16777619) >>> 0; b = (Math.imul(b ^ a, 2246822507) >>> 0); } out += ((a ^ b) >>> 0).toString(16).padStart(8, '0'); } return out.toUpperCase(); };
const dataPdf = (t) => { const z = (n) => String(n).padStart(2, '0'), x = new Date(t); return `D:${x.getFullYear()}${z(x.getMonth() + 1)}${z(x.getDate())}${z(x.getHours())}${z(x.getMinutes())}${z(x.getSeconds())}`; };
function serializar(pags, imgs, info) {
const objs = [], add = (c) => (objs.push(c), objs.length);
const cat = add(null), raiz = add(null);
const f1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
const f2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
const f3 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Symbol >>');
const flate = (cores, w) => `/Filter /FlateDecode /DecodeParms << /Predictor 15 /Colors ${cores} /BitsPerComponent 8 /Columns ${w} >>`;
const xo = imgs.map(g => {
const sm = g.flate && g.alfa ? add([`<< /Type /XObject /Subtype /Image /Width ${g.w} /Height ${g.h} /ColorSpace /DeviceGray /BitsPerComponent 8 ${flate(1, g.w)} /Length ${g.alfa.length} >>\nstream\n`, g.alfa, '\nendstream']) : 0;
const fil = g.flate ? `${flate(3, g.w)}${sm ? ` /SMask ${sm} 0 R` : ''}` : '/Filter /DCTDecode';
return `/${g.nome} ${add([`<< /Type /XObject /Subtype /Image /Width ${g.w} /Height ${g.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 ${fil} /Length ${g.bytes.length} >>\nstream\n`, g.bytes, '\nendstream'])} 0 R`;
});
const rec = `<< /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R /F3 ${f3} 0 R >>${xo.length ? ` /XObject << ${xo.join(' ')} >>` : ''} /ProcSet [/PDF /Text /ImageC] >>`;
const kids = pags.map(o => { const s = o.filter(Boolean).join('\n'), cs = add([`<< /Length ${s.length} >>\nstream\n`, s, '\nendstream']); return add(`<< /Type /Page /Parent ${raiz} 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources ${rec} /Contents ${cs} 0 R >>`); });
objs[raiz - 1] = `<< /Type /Pages /Kids [${kids.map(k => `${k} 0 R`).join(' ')}] /Count ${kids.length} >>`;
objs[cat - 1] = `<< /Type /Catalog /Pages ${raiz} 0 R /ViewerPreferences << /DisplayDocTitle true >> >>`;
const quando = dataPdf(Date.now());
const inf = add(`<< /Title ${hex16(info.titulo || '')} /Subject ${hex16(info.assunto || '')} /Author ${hex16(info.autor || '')} /Creator (GeloPro) /Producer (GeloPro PDF offline) /CreationDate (${quando}) /ModDate (${quando}) >>`);
const partes = ['%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'], offs = [];
let pos = partes[0].length;
const pur = (p) => { partes.push(p); pos += p.length; };
objs.forEach((o, i) => { offs.push(pos); pur(`${i + 1} 0 obj\n`); (Array.isArray(o) ? o : [o]).forEach(pur); pur('\nendobj\n'); });
const xref = pos, id = hash(info.titulo + quando + pos);
pur(`xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offs.map(o => `${String(o).padStart(10, '0')} 00000 n \n`).join('')}`);
pur(`trailer\n<< /Size ${objs.length + 1} /Root ${cat} 0 R /Info ${inf} 0 R /ID [<${id}> <${id}>] >>\nstartxref\n${xref}\n%%EOF\n`);
const bytes = new Uint8Array(pos); let k = 0;
partes.forEach(p => { if (typeof p === 'string') { for (let i = 0; i < p.length; i++) bytes[k++] = p.charCodeAt(i) & 0xFF; } else { bytes.set(p, k); k += p.length; } });
return bytes;
}
const BANCO = 'gelopro.midia', LOJA = 'midia';
let banco = null;
const abrirBanco = () => banco || (banco = new Promise((ok) => {
let r; try { r = indexedDB.open(BANCO, 1); } catch (e) { return ok(null); }
r.onupgradeneeded = () => { try { r.result.createObjectStore(LOJA); } catch (e) {   } };
r.onsuccess = () => ok(r.result); r.onerror = () => ok(null); r.onblocked = () => ok(null);
}).then(db => { if (!db) banco = null; return db; }));
const pedido = (modo, faz) => abrirBanco().then(db => !db ? null : new Promise((ok) => {
try { const tx = db.transaction(LOJA, modo), rq = faz(tx.objectStore(LOJA)); let v = null; rq.onsuccess = () => { v = rq.result; }; tx.oncomplete = () => ok(v === undefined ? null : v); tx.onerror = tx.onabort = () => ok(null); }
catch (e) { ok(null); }
}));
const copia = (g) => g && g.bytes ? { bytes: new Uint8Array(g.bytes), w: g.w, h: g.h } : null;
const chaveMidia = (num, atend) => { const k = String(num || '').trim(); return !k ? '' : atend ? `${k}__${atend}` : k; };
async function salvarMidia(num, m) {
const k = m ? chaveMidia(num, m.atend) : ''; if (!k) return null;
const [foto, assinatura] = await Promise.all([jpeg(m.foto, 1600).catch(() => null), jpeg(m.assinatura, 1000).catch(() => null)]);
if (!foto && !assinatura) return null;
const ant = (await pedido('readonly', (st) => st.get(k))) || {};
const mesmo = !!m.atend || !m.cliente || !ant.cliente || m.cliente === ant.cliente;
const reg = { foto: copia(foto) || (mesmo ? ant.foto || null : null), assinatura: copia(assinatura) || (mesmo ? ant.assinatura || null : null), cliente: m.cliente || (mesmo ? ant.cliente || '' : ''), atend: m.atend || '', em: Date.now() };
return (await pedido('readwrite', (st) => st.put(reg, k))) === null ? null : reg;
}
async function lerMidia(num, atend, cliente) {
const k = chaveMidia(num, atend); if (!k) return null;
const reg = await pedido('readonly', (st) => st.get(k));
if (!reg || (!reg.foto && !reg.assinatura)) return null;
if (!atend && reg.cliente && cliente && reg.cliente !== cliente) return null;
return reg;
}
const paraB64 = (g) => { if (!g || !g.bytes) return null; let s = ''; const u = g.bytes; for (let i = 0; i < u.length; i += 8192) s += String.fromCharCode.apply(null, u.subarray(i, i + 8192)); return { jpeg: btoa(s), w: g.w, h: g.h }; };
const deB64 = (o) => { try { if (!o || typeof o.jpeg !== 'string' || !(o.w > 0) || !(o.h > 0)) return null; const bin = atob(o.jpeg), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u[0] === 0xFF && u[1] === 0xD8 ? { bytes: u, w: o.w, h: o.h } : null; } catch (e) { return null; } };
async function exportarMidia(num, atend) {
const k = chaveMidia(num, atend); if (!k) return null;
const reg = await pedido('readonly', (st) => st.get(k));
if (!reg || (!reg.foto && !reg.assinatura)) return null;
return { foto: paraB64(reg.foto), assinatura: paraB64(reg.assinatura), cliente: reg.cliente || '', atend: reg.atend || '' };
}
async function importarMidia(num, m) {
const k = m && typeof m === 'object' ? chaveMidia(num, typeof m.atend === 'string' ? m.atend : '') : ''; if (!k) return null;
const foto = deB64(m.foto), assinatura = deB64(m.assinatura); if (!foto && !assinatura) return null;
const reg = { foto, assinatura, cliente: typeof m.cliente === 'string' ? m.cliente : '', atend: typeof m.atend === 'string' ? m.atend : '', em: Date.now() };
return (await pedido('readwrite', (st) => st.put(reg, k))) === null ? null : reg;
}
const TIPO_ARQ = { orc: 'Orcamento', gar: 'Garantia', rec: 'Recibo', reca: 'Recibo', laudo: 'Laudo', pmoc: 'PMOC' };
const limpo = (s) => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
function nomeArquivo(tipo, num, cliente) {
const t = TIPO_ARQ[tipo] || (/garantia/i.test(tipo) ? 'Garantia' : /recibo/i.test(tipo) ? 'Recibo' : /laudo/i.test(tipo) ? 'Laudo' : /pmoc/i.test(tipo) ? 'PMOC' : /or[cç]amento/i.test(tipo) ? 'Orcamento' : limpo(tipo) || 'Documento');
return `${t}-${limpo(num) || 'SN'}-${limpo(cliente).slice(0, 48).replace(/-+$/, '') || 'Cliente'}.pdf`;
}
async function gerar(doc) {
const d = { ...(doc || {}) };
d.blocos = [...(d.blocos || [])];
if (d.tipo === 'gar' && !d.blocos.some(b => /arts?\.?\s*24 e 26/.test(`${b.t} ${b.x}`))) d.blocos.push({ t: 'Garantia legal (CDC arts. 24 e 26)', x: 'Este termo é complementar à garantia legal do Código de Defesa do Consumidor (arts. 24 e 26), que não pode ser excluída.' });
const comImg = d.tipo === 'orc' || d.tipo === 'gar', cli = (d.cliente && d.cliente.nome) || '';
if (comImg && d.via2 && d.numero && (!d.foto || !d.assinatura)) {
const m = await lerMidia(d.numero, d.atend || '', cli).catch(() => null);
if (m) { if (!d.foto && m.foto) d.foto = m.foto; if (!d.assinatura && m.assinatura) d.assinatura = m.assinatura; }
}
const [foto, assin] = await Promise.all([jpeg(d.foto, 1600).catch(() => null), jpeg(d.assinatura, 1000).catch(() => null)]);
if (comImg && !d.via2 && d.numero && (foto || assin)) await salvarMidia(d.numero, { foto, assinatura: assin, cliente: cli, atend: d.atend || '' }).catch(() => null);
const imgs = [];
if (foto) imgs.push(Object.assign(foto, { nome: 'Im' + (imgs.length + 1) }));
if (assin) imgs.push(Object.assign(assin, { nome: 'Im' + (imgs.length + 1) }));
const logo = logoPdf(); if (logo) imgs.push(logo);
const pags = diagramar(d, { foto, assin, logo });
const nome = d.nome || nomeArquivo(d.tipo || d.titulo, d.numero, d.cliente && d.cliente.nome);
const bytes = serializar(pags, imgs, { titulo: nome.replace(/\.pdf$/i, ''), assunto: `${d.titulo || ''} nº ${d.numero || ''}`, autor: (d.titular && d.titular.nome) || '' });
return { bytes, blob: new Blob([bytes], { type: 'application/pdf' }), paginas: pags.length, nome };
}
function baixar(blob, nome) {
const u = URL.createObjectURL(blob), a = document.createElement('a');
a.href = u; a.download = nome; a.rel = 'noopener'; a.style.display = 'none';
document.body.appendChild(a); a.click(); a.remove();
setTimeout(() => URL.revokeObjectURL(u), 60000);
return 'baixado';
}
const embutido = () => { try { return /Instagram|FBAN|FBAV|WhatsApp/i.test(navigator.userAgent || ''); } catch (e) { return false; } };
async function copiar(texto) {
const t = String(texto || ''); if (!t) return false;
try { if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(t); return true; } } catch (e) {   }
try {
const ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return !!ok;
} catch (e) { return false; }
}
function resumo(d) {
const L = [], tt = d.titular || {}, cl = d.cliente || {}, f = d.fechamento;
L.push(`${d.titulo || 'Documento'}${d.numero ? ' nº ' + d.numero : ''}`);
L.push([d.data ? 'Emitido em ' + d.data : '', d.via2 || ''].filter(Boolean).join(' · '));
if (tt.nome) L.push('Titular: ' + [tt.nome, tt.doc ? `${tt.docTipo || 'CPF'} ${tt.doc}` : '', tt.cidade || ''].filter(Boolean).join(' · '));
L.push('Cliente: ' + [cl.nome || 'Cliente', cl.tel || ''].filter(Boolean).join(' · '));
if (cl.equip) L.push('Equipamento: ' + cl.equip);
if ((d.itens || []).length) { L.push('', `${d.itensTitulo || 'Itens'}:`); d.itens.forEach(i => L.push(`• ${i.q || 1}× ${i.d}: ${i.v}`)); }
if (f) {
L.push('');
if (f.bonif) L.push(f.bonif);
(f.linhas || []).forEach(([r, v]) => L.push(`${r}: ${v}`));
if (f.total) L.push(`${f.total[0]}: ${f.total[1]}`);
if (f.validade) L.push(f.validade);
}
(d.blocos || []).forEach(b => {
const x = String(b.x || '').split('\n').filter(l => !/Executado por/.test(l)).map(l => l.replace(/_{3,}/g, 'a definir').trim()).filter(Boolean).join('\n');
if (x) L.push('', `${String(b.t || '').replace(/_{3,}/g, 'a definir')}:`, x);
});
if (d.preventiva) L.push('', d.preventiva);
L.push('', 'Arquivo PDF: ' + (d.nome || nomeArquivo(d.tipo || d.titulo, d.numero, cl.nome)));
return L.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
async function compartilhar(blob, nome, texto) {
let arq = null; try { arq = new File([blob], nome, { type: 'application/pdf' }); } catch (e) { arq = null; }
let pode = false; try { pode = !!(arq && navigator.share && navigator.canShare && navigator.canShare({ files: [arq] })); } catch (e) { pode = false; }
if (pode) { try { await navigator.share({ files: [arq], title: nome }); return 'compartilhado'; } catch (e) { if (e && e.name === 'AbortError') return 'cancelado'; } }
baixar(blob, nome);
if (!embutido()) return pode ? 'falhou' : 'sem-suporte';
return texto && await copiar(texto) ? 'embutido-resumo' : 'embutido';
}
window.GeloProPDF = { gerar, nomeArquivo, baixar, compartilhar, copiar, resumo, embutido, salvarMidia, lerMidia, exportarMidia, importarMidia, chaveMidia, jpeg, quebrar, largura, A4: [PW, PH] };
})();

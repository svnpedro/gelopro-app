// Bancada GeloPRO · PDF Executivo v4 (12/11/2026). Laudo de Aprovação em PDF 1.4 A4 de verdade, offline e sem biblioteca externa, vestido
// com a identidade do Design System v4 (pacote design_handoff_bancada_v4: "Laudo PDF.dc.html" e os tokens oficiais): marinho #0C2747,
// destaque #0B5976, bordas #94A3B8, rótulos #334155, texto #1E293B, caixa champanhe #F1EAD8 / #A6945F / #3F3210, verde #15803D / #14532D e
// vermelho #7F1D1D. Gráficos de prova em réguas lineares horizontais (Cleveland & McGill; C49 e C7 do pacote), nunca velocímetro:
// Gás & SH (0 a 20 °C, alvo 7 a 11 °C), Sensor NTC (desvio de −30% a +30%, zona −5% a +5%) e linhas ✓ NORMAL / ✕ DEFEITO da Trava 30s e do
// diagnóstico. Cada serviço leva a barra do valor dentro da Referência Regional Auditada 2026. Sem custo, lucro ou margem (documento do cliente).
// Fontes padrão: Helvetica e Helvetica-Bold (texto), Courier-Bold (números, no lugar da JetBrains Mono), Symbol (Ω, −, ≤) e ZapfDingbats (✓ ✕),
// em WinAnsiEncoding. O motor ./motor/pdf-gelopro.js segue intacto (PMOC). Uso: GeloProBancadaPDF.gerar(dados) → { bytes, blob, nome, paginas }.
(function () {
  'use strict';
  const PW = 595.28, PH = 841.89, MX = 40, LARG = PW - 2 * MX, TOPO = 40, FIM = PH - 46;
  // Larguras AFM (milésimos de em) dos códigos WinAnsi 32 a 255: Helvetica e Helvetica-Bold (métricas padrão da Adobe).
  const WR = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,667,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500];
  const WB = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,0,556,0,278,556,500,1000,556,556,333,1000,667,333,1000,0,611,0,0,278,278,500,500,350,556,1000,333,1000,556,333,944,0,500,667,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556];
  const CP = { 0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E,
    0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F };
  // Fora do WinAnsi: Symbol [código, largura] e ZapfDingbats [código, largura] (✓ ✔ ✕ ✖ ✗ ✘).
  const SYM = { 0x2192: [0xAE, 987], 0x2265: [0xB3, 549], 0x2264: [0xA3, 549], 0x2248: [0xBB, 549], 0x0394: [0x44, 612], 0x03A9: [0x57, 768], 0x2126: [0x57, 768], 0x2212: [0x2D, 549] };
  const ZAPF = { 0x2713: [0x33, 760], 0x2714: [0x34, 761], 0x2715: [0x35, 691], 0x2716: [0x36, 788], 0x2717: [0x37, 788], 0x2718: [0x38, 816] };
  const NBSP = new Set([0x2007, 0x2009, 0x200A, 0x202F, 0x2011]);
  const HEX = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => (v / 255).toFixed(3)).join(' '); };
  // Paleta do Design System v4 (tokens oficiais do pacote).
  const C = { marinho: HEX('#0C2747'), destaque: HEX('#0B5976'), borda: HEX('#94A3B8'), rotulo: HEX('#334155'), texto: HEX('#1E293B'), branco: '1 1 1',
    trilho: HEX('#E5E2DC'), verde: HEX('#15803D'), verdeT: HEX('#14532D'), verm: HEX('#7F1D1D'), vermF: HEX('#B91C1C'), champ: HEX('#F1EAD8'), champB: HEX('#A6945F'),
    champT: HEX('#3F3210'), gelo: HEX('#BAE6FD'), ambarT: HEX('#78350F'), fio: HEX('#E2E8F0') };

  // Caractere → [fonte 0 texto | 1 Symbol | 2 ZapfDingbats, byte, largura especial] ou null.
  const cod = (ch) => {
    const c = ch.codePointAt(0);
    if (c === 9) return [0, 32];
    if (c < 32 || c === 0x7F || c === 0x200B || c === 0xFEFF) return null;
    if (c < 0x7F || (c >= 0xA0 && c <= 0xFF)) return [0, c];
    if (CP[c]) return [0, CP[c]];
    if (SYM[c]) return [1, SYM[c][0], SYM[c][1]];
    if (ZAPF[c]) return [2, ZAPF[c][0], ZAPF[c][1]];
    if (NBSP.has(c)) return [0, c === 0x2011 ? 45 : 0xA0];
    const base = ch.normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (base && base !== ch) { const k = base.codePointAt(0); if (k >= 32 && k < 0x7F) return [0, k]; }
    return [0, 63];
  };
  // Estilo de fonte: 'R' Helvetica, 'B' Helvetica-Bold, 'M' Courier-Bold (números).
  const largura = (s, f, tam, tc) => { let w = 0, n = 0; for (const ch of String(s)) { const k = cod(ch); if (!k) continue; n++; w += k[0] ? k[2] : f === 'M' ? 600 : (f === 'B' ? WB : WR)[k[1] - 32] || 0; } return w * tam / 1000 + (tc || 0) * Math.max(0, n - 1); };
  const quebrar = (txt, f, tam, max) => {
    const out = [];
    String(txt == null ? '' : txt).replace(/\r/g, '').replace(/R\$ (?=[\d-])/g, 'R$ ').split('\n').forEach(par => {
      if (!par.trim()) { out.push(''); return; }
      let lin = '';
      for (let p of par.split(/ +/)) {
        if (!p) continue;
        const tenta = lin ? lin + ' ' + p : p;
        if (largura(tenta, f, tam) <= max) { lin = tenta; continue; }
        if (lin) { out.push(lin); lin = ''; }
        while (largura(p, f, tam) > max) { const cs = Array.from(p); let k = 1; while (k < cs.length && largura(cs.slice(0, k + 1).join(''), f, tam) <= max) k++; out.push(cs.slice(0, k).join('')); p = cs.slice(k).join(''); }
        lin = p;
      }
      if (lin) out.push(lin);
    });
    return out;
  };
  const n2 = (v) => (Math.round(v * 100) / 100).toString();
  const esc = (s) => s.replace(/[\\()]/g, '\\$&');
  const FONTE = { R: 'F1', B: 'F2', M: 'F4' };
  const trechos = (s, f) => { const R = []; for (const ch of String(s)) { const k = cod(ch); if (!k) continue; const fo = k[0] === 1 ? 'F3' : k[0] === 2 ? 'F5' : FONTE[f], by = String.fromCharCode(k[1]), u = R[R.length - 1]; if (u && u.f === fo) u.t += by; else R.push({ f: fo, t: by }); } return R; };
  // Texto com a linha de base em yBase (medido do topo); alinhado à esquerda, à direita ('d') ou ao centro ('c'); tc = espaçamento de letra.
  const texto = (x, yBase, s, f, tam, cor, alin, tc) => {
    const R = trechos(s, f); if (!R.length) return '';
    const w = largura(s, f, tam, tc), x0 = alin === 'd' ? x - w : alin === 'c' ? x - w / 2 : x;
    return `BT ${cor || C.texto} rg ${n2(tc || 0)} Tc 1 0 0 1 ${n2(x0)} ${n2(PH - yBase)} Tm ${R.map(r => `/${r.f} ${n2(tam)} Tf (${esc(r.t)}) Tj`).join(' ')} ET`;
  };
  const rr = (x, yT, w, h, r) => { const X = x, Y = PH - yT - h, k = r * 0.5523; return `${n2(X + r)} ${n2(Y)} m ${n2(X + w - r)} ${n2(Y)} l ${n2(X + w - r + k)} ${n2(Y)} ${n2(X + w)} ${n2(Y + r - k)} ${n2(X + w)} ${n2(Y + r)} c ${n2(X + w)} ${n2(Y + h - r)} l ${n2(X + w)} ${n2(Y + h - r + k)} ${n2(X + w - r + k)} ${n2(Y + h)} ${n2(X + w - r)} ${n2(Y + h)} c ${n2(X + r)} ${n2(Y + h)} l ${n2(X + r - k)} ${n2(Y + h)} ${n2(X)} ${n2(Y + h - r + k)} ${n2(X)} ${n2(Y + h - r)} c ${n2(X)} ${n2(Y + r)} l ${n2(X)} ${n2(Y + r - k)} ${n2(X + r - k)} ${n2(Y)} ${n2(X + r)} ${n2(Y)} c h`; };
  const caixa = (x, yT, w, h, fundo, borda, r, esp) => `q ${fundo ? fundo + ' rg ' : ''}${borda ? borda + ' RG ' + n2(esp || 0.8) + ' w ' : ''}${rr(x, yT, w, h, r || 0.01)} ${fundo && borda ? 'B' : fundo ? 'f' : 'S'} Q`;
  const linha = (x1, y1, x2, y2, cor, esp) => `q ${cor} RG ${n2(esp || 0.8)} w ${n2(x1)} ${n2(PH - y1)} m ${n2(x2)} ${n2(PH - y2)} l S Q`;
  const tri = (x, y, lado, cor) => `q ${cor} rg ${n2(x - lado / 2)} ${n2(PH - y + lado)} m ${n2(x + lado / 2)} ${n2(PH - y + lado)} l ${n2(x)} ${n2(PH - y)} l h f Q`;
  const BRL = (v) => 'R$ ' + Number(v || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const f1 = (v, d) => Number(v).toFixed(d == null ? 1 : d).replace('.', ',');
  const ROT = (x, y, s, cor) => texto(x, y, s, 'B', 7.5, cor || C.rotulo, null, 0.9); // rótulo em caixa alta com espaçamento (padrão do pacote)

  // ── Peças do laudo: cada uma é { h, draw(y) } e nunca parte no meio da página. ──
  function pecas(d) {
    const P = [], t = d.titular || {}, W = LARG;
    // 1. Cabeçalho executivo marinho: prestadora à esquerda; selo BANCADA · GELOPRO 2026, LAUDO DE APROVAÇÃO e Nº à direita.
    { const linhasT = [t.doc ? `${t.docTipo || 'CPF/CNPJ'} ${t.doc}` : '', t.cidade || '', t.pix ? `Chave Pix ${t.pix}` : ''].filter(Boolean);
      const nomeL = quebrar(t.nome || 'Prestadora do serviço', 'B', 15, W * 0.56), h = Math.max(92, 30 + nomeL.length * 18 + linhasT.length * 12);
      P.push({ h: h + 14, draw: (y) => { const o = [caixa(MX, y, W, h, C.marinho, null, 10)];
        o.push(ROT(MX + 16, y + 20, 'PRESTADORA DO SERVIÇO', C.gelo));
        nomeL.forEach((s, i) => o.push(texto(MX + 16, y + 40 + i * 18, s, 'B', 15, C.branco)));
        linhasT.forEach((s, i) => o.push(texto(MX + 16, y + 40 + (nomeL.length - 1) * 18 + 16 + i * 12, s, 'R', 9, C.gelo)));
        const sw = largura('BANCADA · GELOPRO 2026', 'B', 7.5, 0.9) + 18, xR = MX + W - 16;
        o.push(caixa(xR - sw, y + 12, sw, 18, C.destaque, null, 9), texto(xR - sw / 2, y + 24.5, 'BANCADA · GELOPRO 2026', 'B', 7.5, C.branco, 'c', 0.9));
        o.push(texto(xR, y + 50, d.titulo || 'LAUDO DE APROVAÇÃO', 'B', 11, C.branco, 'd', 1.2), texto(xR, y + 74, `Nº ${d.numero}`, 'M', 20, C.branco, 'd'));
        return o; } }); }
    // 2. Quadros DATA · CLIENTE · EQUIPAMENTO e SINTOMA · CAUSA CONFIRMADA.
    const quadro = (cols) => { const larg = cols.map(c => c[2] * (W - 24)), L = cols.map((c, i) => quebrar(c[1] || '—', c[3] || 'B', 10.5, larg[i] - 12)), h = 26 + Math.max(...L.map(l => l.length)) * 14;
      return { h: h + 10, draw: (y) => { const o = [caixa(MX, y, W, h, null, C.borda, 8)]; let x = MX + 12;
        cols.forEach((c, i) => { if (i) o.push(linha(x - 6, y + 8, x - 6, y + h - 8, C.fio, 0.8)); o.push(ROT(x, y + 15, c[0])); L[i].forEach((s, k) => o.push(texto(x, y + 30 + k * 14, s, c[3] || 'B', 10.5, C.marinho))); x += larg[i]; });
        return o; } }; };
    P.push(quadro([['DATA', d.data, 0.2, 'M'], ['CLIENTE', d.cliente && d.cliente.nome, 0.36], ['EQUIPAMENTO', d.equip, 0.44, 'M']]));
    P.push(quadro([['SINTOMA', d.sintoma, 0.5], ['CAUSA CONFIRMADA', d.causa, 0.5]]));
    // 3. Gráficos técnicos de aferição (réguas lineares DS v4) e linhas de conformidade.
    const leit = d.leituras || [];
    if (leit.length) P.push({ h: 18, draw: (y) => [ROT(MX, y + 11, 'LEITURAS AFERIDAS NA BANCADA')] });
    const regua = (o, x0, x1, y, vmin, vmax, a0, a1, v, rotulos, fmt) => { const X = (val) => x0 + (Math.max(vmin, Math.min(vmax, val)) - vmin) / (vmax - vmin) * (x1 - x0);
      o.push(caixa(x0, y, x1 - x0, 8, C.trilho, null, 4), caixa(X(a0), y, X(a1) - X(a0), 8, C.verde, null, 0.01));
      rotulos.forEach(r => o.push(linha(X(r), y + 8, X(r), y + 12, C.rotulo, 0.6), texto(X(r), y + 21, fmt(r), 'M', 7.5, C.rotulo, 'c')));
      if (v != null && isFinite(v)) { const xv = X(v); o.push(linha(xv, y - 4, xv, y + 12, C.marinho, 2), tri(xv, y - 3, 7, C.marinho)); } };
    // ✓ NORMAL (#14532D) e ✕ DEFEITO (#7F1D1D): o sinal é desenhado em vetor (lê igual em qualquer leitor de PDF), a palavra em texto.
    const veredito = (o, xR, y, ok, rot) => { const cor = ok ? C.verdeT : C.verm, pal = rot || (ok ? 'NORMAL' : 'DEFEITO'), w = largura(pal, 'B', 9.5, 0.6), xi = xR - w - 13;
      o.push(texto(xR, y, pal, 'B', 9.5, cor, 'd', 0.6));
      o.push(ok ? `q ${cor} RG 1.6 w 1 J 1 j ${n2(xi)} ${n2(PH - y + 3.5)} m ${n2(xi + 3)} ${n2(PH - y + 0.5)} l ${n2(xi + 8.5)} ${n2(PH - y + 7)} l S Q`
        : `q ${cor} RG 1.6 w 1 J ${n2(xi + 0.5)} ${n2(PH - y + 7)} m ${n2(xi + 7.5)} ${n2(PH - y)} l ${n2(xi + 0.5)} ${n2(PH - y)} m ${n2(xi + 7.5)} ${n2(PH - y + 7)} l S Q`); };
    leit.forEach(l => {
      const m = l.med || {};
      if (m.tipo === 'gas') P.push({ h: 82, draw: (y) => { const o = [caixa(MX, y, W, 74, null, C.borda, 8)];
        o.push(ROT(MX + 12, y + 16, `GÁS & SH · ${m.fluido || ''}`), texto(MX + 12, y + 32, `SH ${f1(m.sh)} °C`, 'M', 13, C.marinho));
        veredito(o, MX + W - 12, y + 16, m.estado === 'ok', m.titulo);
        o.push(texto(MX + W - 12, y + 32, `Sucção ${f1(m.psi, 0)} PSI · Tubo ${f1(m.tubo)} °C · Evaporação ${f1(m.evap)} °C`, 'R', 8.5, C.texto, 'd'));
        regua(o, MX + 16, MX + W - 16, y + 44, 0, 20, 7, 11, m.sh, [0, 7, 11, 20], (r) => `${r} °C`); return o; } });
      else if (m.tipo === 'ntc') P.push({ h: 82, draw: (y) => { const o = [caixa(MX, y, W, 74, null, C.borda, 8)];
        o.push(ROT(MX + 12, y + 16, `SENSOR NTC · ${m.rot || ''}`.slice(0, 70)), texto(MX + 12, y + 32, `${f1(m.r, 2)} kΩ a ${f1(m.t)} °C`, 'M', 13, C.marinho));
        veredito(o, MX + W - 12, y + 16, m.estado === 'ok', m.estado === 'ok' ? 'NA CURVA' : 'FORA DA CURVA');
        o.push(texto(MX + W - 12, y + 32, `Esperado ${f1(m.esp, 2)} kΩ pela curva real · desvio ${m.dev < 0 ? '−' : '+'}${f1(Math.abs(m.dev))}%`, 'R', 8.5, C.texto, 'd'));
        regua(o, MX + 16, MX + W - 16, y + 44, -30, 30, -5, 5, m.dev, [-30, -5, 5, 30], (r) => `${r > 0 ? '+' : r < 0 ? '−' : ''}${Math.abs(r)}%`); return o; } });
      else { const itens = m.tipo === 'trava' && Array.isArray(m.itens) ? m.itens : [[l.txt, m.ok === false ? false : m.ok === true ? true : null]];
        itens.forEach(([nome, ok]) => { const L = quebrar(nome, 'R', 9.5, W - 130), h = Math.max(24, 10 + L.length * 12);
          P.push({ h: h + 6, draw: (y) => { const o = [caixa(MX, y, W, h, null, C.borda, 6)]; L.forEach((s, k) => o.push(texto(MX + 12, y + 15 + k * 12, s, 'R', 9.5, C.texto)));
            if (ok === true || ok === false) veredito(o, MX + W - 12, y + 15, ok); else { const w = largura('AFERIDO', 'B', 9.5, 0.6); o.push(texto(MX + W - 12, y + 15, 'AFERIDO', 'B', 9.5, C.destaque, 'd', 0.6), `q ${C.destaque} rg ${n2(MX + W - 12 - w - 10)} ${n2(PH - y - 15 + 1)} 6 6 re f Q`); } return o; } }); }); }
    });
    // 4. Serviços · Tabela Oficial 2026 (cartão inteiro na página), com a barra do valor dentro da Referência Regional Auditada 2026.
    P.push({ h: 18, draw: (y) => [ROT(MX, y + 11, 'SERVIÇOS · TABELA OFICIAL 2026')] });
    (d.servicos || []).forEach(s => {
      const nomeL = quebrar(s.nome, 'B', 11, W - 140), procL = quebrar(`Procedimento incluso: ${s.proc || ''}`, 'R', 9, W - 24), prevL = quebrar(`Prevenção: ${s.prev || ''}`, 'R', 9, W - 24);
      const h = 14 + nomeL.length * 14 + 6 + procL.length * 12 + 50 + prevL.length * 12 + 8;
      P.push({ h: h + 8, draw: (y) => { const o = [caixa(MX, y, W, h, null, C.borda, 10)]; let yy = y + 20;
        nomeL.forEach((l, k) => o.push(texto(MX + 12, yy + k * 14, l, 'B', 11, C.marinho))); o.push(texto(MX + W - 12, yy, BRL(s.valor), 'M', 12, C.marinho, 'd'));
        yy += nomeL.length * 14 + 4;
        procL.forEach((l, k) => { const i = l.indexOf(':'); o.push(k === 0 && i > 0 ? texto(MX + 12, yy + k * 12, l.slice(0, i + 1), 'B', 9, C.marinho) + ' ' + texto(MX + 12 + largura(l.slice(0, i + 2), 'B', 9), yy, l.slice(i + 2), 'R', 9, C.texto) : texto(MX + 12, yy + k * 12, l, 'R', 9, C.texto)); });
        yy += procL.length * 12 + 6;
        const x0 = MX + 12, x1 = MX + W - 12, mn = Math.min(s.min, s.valor), mx = Math.max(s.max, s.valor), X = (v) => x0 + (mx > mn ? (v - mn) / (mx - mn) : 0.5) * (x1 - x0);
        o.push(ROT(x0, yy + 4, 'REFERÊNCIA REGIONAL AUDITADA 2026'), caixa(x0, yy + 16, x1 - x0, 6, C.trilho, null, 3), linha(X(s.valor), yy + 13, X(s.valor), yy + 26, C.marinho, 2), tri(X(s.valor), yy + 14, 6, C.marinho));
        o.push(texto(x0, yy + 35, BRL(s.min), 'M', 7.5, C.rotulo), texto(x1, yy + 35, BRL(s.max), 'M', 7.5, C.rotulo, 'd'));
        yy += 48;
        prevL.forEach((l, k) => { const i = l.indexOf(':'); o.push(k === 0 && i > 0 ? texto(MX + 12, yy + k * 12, l.slice(0, i + 1), 'B', 9, C.marinho) + ' ' + texto(MX + 12 + largura(l.slice(0, i + 2), 'B', 9), yy, l.slice(i + 2), 'R', 9, C.texto) : texto(MX + 12, yy + k * 12, l, 'R', 9, C.texto)); });
        return o; } });
    });
    // 5. Caixa champanhe: VALOR TOTAL e a Referência Regional Auditada 2026.
    P.push({ h: 70, draw: (y) => [caixa(MX, y, W, 62, C.champ, C.champB, 12, 1.5), ROT(MX + 16, y + 22, 'VALOR TOTAL', C.champT),
      texto(MX + 16, y + 44, d.faixa ? `Referência Regional Auditada 2026: ${BRL(d.faixa.min)} a ${BRL(d.faixa.max)}` : '', 'R', 9, C.champT), texto(MX + W - 16, y + 42, BRL(d.total), 'M', 24, C.marinho, 'd')] });
    // Garantia de 90 dias.
    { const L = quebrar(d.garantia || '', 'R', 9.5, W); P.push({ h: 22 + L.length * 13, draw: (y) => [ROT(MX, y + 12, 'GARANTIA DE 90 DIAS'), ...L.map((s, k) => texto(MX, y + 27 + k * 13, s, 'R', 9.5, C.texto))] }); }
    // Pix: QR Code real (vetorial) + chave + copia e cola.
    if (d.pix && d.pix.copia) {
      const Q = d.pix.qr || [], nQ = Q.length, lado = 96, mod = nQ ? lado / nQ : 0, xT = MX + lado + 28, wT = W - lado - 40;
      const CC = quebrar(d.pix.copia, 'M', 7, wT).slice(0, 7), h = Math.max(lado + 24, 44 + CC.length * 9);
      P.push({ h: h + 8, draw: (y) => { const o = [caixa(MX, y, W, h, null, C.borda, 10)];
        if (nQ) { let path = ''; Q.forEach((row, r) => { let c = 0; while (c < nQ) { if (row[c] === '1') { let e = c; while (e < nQ && row[e] === '1') e++; path += `${n2(MX + 12 + c * mod)} ${n2(PH - (y + 12 + (r + 1) * mod))} ${n2((e - c) * mod)} ${n2(mod)} re `; c = e; } else c++; } }); o.push(`q 0 0 0 rg ${path}f Q`); }
        o.push(ROT(xT, y + 18, 'PIX · VALOR EXATO DO LAUDO'), texto(xT, y + 34, `Chave ${d.pix.chave || ''}${d.pix.nome ? ' · ' + d.pix.nome : ''}`, 'B', 9.5, C.marinho));
        o.push(texto(xT, y + 48, 'Pix copia e cola:', 'R', 8, C.rotulo)); CC.forEach((s, k) => o.push(texto(xT, y + 60 + k * 9, s, 'M', 7, C.texto))); return o; } });
    }
    // 6. Moldura do aceite.
    { const L = quebrar(d.aceite || '', 'B', 11, W - 32); P.push({ h: 20 + L.length * 15 + 6, draw: (y) => [caixa(MX, y, W, 14 + L.length * 15, null, C.marinho, 10, 2), ...L.map((s, k) => texto(MX + 16, y + 20 + k * 15, s, 'B', 11, C.marinho))] }); }
    return P;
  }
  function diagramar(d) {
    const pags = [], P = pecas(d); let ops = [], y = TOPO;
    for (const p of P) { if (y + p.h > FIM && ops.length) { pags.push(ops); ops = []; y = TOPO; } ops.push(...p.draw(y)); y += p.h; }
    pags.push(ops);
    return pags.map((o, i) => [...o, linha(MX, PH - 34, MX + LARG, PH - 34, C.borda, 0.6),
      texto(MX, PH - 22, `Bancada GeloPRO · ${d.tituloRodape || 'Laudo de Aprovação'} Nº ${d.numero}`, 'R', 7.5, C.rotulo), texto(MX + LARG, PH - 22, `Página ${i + 1} de ${pags.length}`, 'R', 7.5, C.rotulo, 'd')]);
  }
  const hex16 = (s) => { let h = 'FEFF'; for (const ch of String(s)) { const c = ch.codePointAt(0); if (c > 0xFFFF) continue; h += c.toString(16).toUpperCase().padStart(4, '0'); } return `<${h}>`; };
  function serializar(pags, info) {
    const objs = [], add = (c) => (objs.push(c), objs.length);
    const cat = add(null), raiz = add(null);
    const f = ['Helvetica', 'Helvetica-Bold', 'Symbol', 'Courier-Bold', 'ZapfDingbats'].map((b, i) => add(`<< /Type /Font /Subtype /Type1 /BaseFont /${b}${i === 2 || i === 4 ? '' : ' /Encoding /WinAnsiEncoding'} >>`));
    const rec = `<< /Font << ${f.map((n, i) => `/F${i + 1} ${n} 0 R`).join(' ')} >> /ProcSet [/PDF /Text] >>`;
    const kids = pags.map(o => { const s = o.filter(Boolean).join('\n'), cs = add(`<< /Length ${s.length} >>\nstream\n${s}\nendstream`); return add(`<< /Type /Page /Parent ${raiz} 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources ${rec} /Contents ${cs} 0 R >>`); });
    objs[raiz - 1] = `<< /Type /Pages /Kids [${kids.map(k => `${k} 0 R`).join(' ')}] /Count ${kids.length} >>`;
    objs[cat - 1] = `<< /Type /Catalog /Pages ${raiz} 0 R /ViewerPreferences << /DisplayDocTitle true >> >>`;
    const inf = add(`<< /Title ${hex16(info.titulo)} /Author ${hex16(info.autor)} /Creator (Bancada GeloPRO) /Producer (Bancada GeloPRO PDF v4 offline) >>`);
    let s = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'; const offs = [];
    objs.forEach((o, i) => { offs.push(s.length); s += `${i + 1} 0 obj\n${o}\nendobj\n`; });
    const xref = s.length;
    s += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offs.map(o => `${String(o).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size ${objs.length + 1} /Root ${cat} 0 R /Info ${inf} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
    const bytes = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i) & 0xFF;
    return bytes;
  }
  const limpo = (t) => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  // dados: { numero, data, titular { nome, doc, docTipo, cidade, pix }, cliente { nome }, equip, sintoma, causa, leituras [{ txt, med }],
  //          servicos [{ nome, valor, min, max, proc, prev }], total, faixa { min, max }, garantia, pix { chave, nome, copia, qr }, aceite,
  //          titulo e tituloRodape opcionais (Orçamento Consolidado multi-aparelho do Cofre; sem eles, Laudo de Aprovação) }
  function gerar(dados) {
    const d = dados || {}, pags = diagramar(d), nome = `${d.titulo ? 'Orcamento' : 'Laudo'}-${limpo(d.numero) || 'SN'}-${limpo(d.cliente && d.cliente.nome).slice(0, 48) || 'Cliente'}.pdf`;
    const bytes = serializar(pags, { titulo: nome.replace(/\.pdf$/, ''), autor: (d.titular && d.titular.nome) || '' });
    return { bytes, blob: new Blob([bytes], { type: 'application/pdf' }), nome, paginas: pags.length };
  }
  function baixar(blob, nome) { const u = URL.createObjectURL(blob), a = document.createElement('a'); a.href = u; a.download = nome; a.rel = 'noopener'; a.style.display = 'none'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 60000); }
  window.GeloProBancadaPDF = { gerar, baixar, versao: 'v4' };
})();

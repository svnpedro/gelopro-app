// GeloPro · Motor de PDF offline (PR #25). Monta um arquivo application/pdf de verdade (PDF 1.4, A4 595,28 × 841,89 pt) sem rede e sem biblioteca
// externa: fontes padrão Helvetica e Helvetica-Bold em WinAnsiEncoding (CP1252: toda a acentuação do português), Symbol só para → ≥ ≤ ≈ ≠ Δ Ω,
// quebra automática de linha e de página (item, fechamento, etiqueta, foto e assinatura nunca partidos no meio), foto de evidência e assinatura
// do cliente em JPEG embutido (XObject /DCTDecode) e rodapé em toda página: "Documento nº … · Emitido em … · Base Atualizada … · Página X de Y".
// Uso: GeloProPDF.gerar(doc) → Promise<{ bytes: Uint8Array, blob: Blob application/pdf, paginas, nome }> (assíncrono só para decodificar as imagens);
//      GeloProPDF.nomeArquivo(tipo, num, cliente) → "Orcamento-AMOSTRA-0001-Clinica-Veterana.pdf";
//      GeloProPDF.baixar(blob, nome) e GeloProPDF.compartilhar(blob, nome, resumo?) (Web Share de arquivo; sem suporte, baixa o arquivo);
//      GeloProPDF.resumo(doc) → texto do documento para o WhatsApp e GeloProPDF.copiar(texto) → Promise<boolean> (PR #26).
//      GeloProPDF.salvarMidia(num, { foto, assinatura, cliente }) e GeloProPDF.lerMidia(num) → cofre de mídia no IndexedDB do aparelho (PR #29):
//      a 1ª via guarda a foto e a assinatura já em JPEG pelo nº do documento, e a 2ª via do Cofre as recupera. Nada de imagem vai para o localStorage.
(function () {
  'use strict';
  const PW = 595.28, PH = 841.89, MX = 42, LARG = PW - 2 * MX, RODAPE = 52, FIM = PH - RODAPE - 6;
  // Larguras (milésimos de em) dos códigos WinAnsi 32 a 255, das métricas AFM padrão da Adobe (Helvetica e Helvetica-Bold).
  const WR = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,667,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500];
  const WB = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,0,556,0,278,556,500,1000,556,556,333,1000,667,333,1000,0,611,0,0,278,278,500,500,350,556,1000,333,1000,556,333,944,0,500,667,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556];
  // Unicode → WinAnsi na faixa 0x80–0x9F (euro, aspas curvas, travessões, reticências, marcador).
  const CP = { 0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E,
    0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F };
  // Fora do WinAnsi, na fonte Symbol: [código Symbol, largura].
  const SYM = { 0x2192: [0xAE, 987], 0x2190: [0xAC, 987], 0x21D2: [0xDE, 987], 0x2265: [0xB3, 549], 0x2264: [0xA3, 549], 0x2248: [0xBB, 549], 0x2260: [0xB9, 549], 0x0394: [0x44, 612], 0x2206: [0x44, 612], 0x03A9: [0x57, 768], 0x2126: [0x57, 768], 0x2212: [0x2D, 549] };
  // Espaços finos e não separáveis viram o espaço não separável do WinAnsi (0xA0): "R$ 1.234,00" não quebra no meio.
  const NBSP = new Set([0x2007, 0x2009, 0x200A, 0x202F, 0x2011]);
  const COR = { tinta: '0.067 0.094 0.153', apoio: '0.290 0.333 0.408', faixa: '0.059 0.204 0.357', clara: '0.871 0.914 0.961', branco: '1 1 1', regua: '0.796 0.827 0.867', caixa: '0.953 0.961 0.973' };

  // Caractere → [fonte (0 texto, 1 Symbol), byte, largura Symbol] ou null (controle e espaço de largura zero somem).
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
  // Quebra por palavra; palavra maior que a linha (Pix copia e cola, chave aleatória) quebra por caractere. "\n" abre linha nova.
  const quebrar = (txt, b, tam, max) => {
    const out = [];
    // "R$ 1.200" nunca parte entre o símbolo e o valor (o texto do catálogo vem com espaço comum).
    String(txt == null ? '' : txt).replace(/\r/g, '').replace(/R\$ (?=[\d-])/g, 'R$ ').split('\n').forEach(par => {
      if (!par.trim()) { out.push(''); return; }
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
  // Texto em trechos por fonte (F1 Helvetica, F2 Helvetica-Bold, F3 Symbol), bytes WinAnsi crus dentro da string literal do PDF.
  const trechos = (s, b) => { const R = []; for (const ch of String(s)) { const k = cod(ch); if (!k) continue; const f = k[0] ? 'F3' : b ? 'F2' : 'F1', by = String.fromCharCode(k[1]), u = R[R.length - 1]; if (u && u.f === f) u.t += by; else R.push({ f, t: by }); } return R; };
  // x, y = canto esquerdo da linha de base, medidos do topo da página (convertidos para a origem embaixo do PDF).
  const texto = (x, yBase, s, b, tam, cor) => { const R = trechos(s, b); if (!R.length) return ''; return `BT ${cor || COR.tinta} rg 1 0 0 1 ${n2(x)} ${n2(PH - yBase)} Tm ${R.map(r => `/${r.f} ${n2(tam)} Tf (${esc(r.t)}) Tj`).join(' ')} ET`; };
  const retangulo = (x, yTopo, w, h, cor) => `${cor} rg ${n2(x)} ${n2(PH - yTopo - h)} ${n2(w)} ${n2(h)} re f`;
  const linhaH = (x1, x2, y, cor, esp, traco) => `q ${cor || COR.regua} RG ${n2(esp || 0.8)} w ${traco ? '[4 3] 0 d ' : ''}${n2(x1)} ${n2(PH - y)} m ${n2(x2)} ${n2(PH - y)} l S Q`;
  const moldura = (x, yTopo, w, h, cor, traco) => `q ${cor} RG 1.2 w ${traco ? '[4 3] 0 d ' : ''}${n2(x)} ${n2(PH - yTopo - h)} ${n2(w)} ${n2(h)} re S Q`;

  // ── Imagens: foto (dataURL JPEG/PNG, blob:, Blob, <img>, <canvas>) e assinatura (PNG transparente) viram JPEG sobre fundo branco. ──
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

  // ── Diagramação: cada peça é uma lista de linhas { h, draw(y) }; "junto" = a peça inteira cabe na página ou abre página nova. ──
  function diagramar(d, img) {
    const pags = [];
    let ops = null, y = 0;
    const tipoTxt = d.titulo || 'Documento', numero = d.numero || '';
    const nova = () => {
      ops = []; pags.push(ops);
      if (pags.length === 1) return cabecalho();
      // Continuação: faixa timbrada curta com o tipo e o número.
      ops.push(retangulo(0, 0, PW, 34, COR.faixa), texto(MX, 22, `${tipoTxt} · Nº ${numero} (continuação)`, true, 10.5, COR.branco));
      y = 34 + 18;
    };
    const util = FIM - 52;
    const por = (linhas, junto) => {
      const h = linhas.reduce((t, l) => t + l.h, 0);
      if (junto && y + h > FIM && h <= util) nova();
      // Espaço em branco no pé da página não abre página nova (nunca sai página vazia só com rodapé).
      linhas.forEach(l => { if (y + l.h > FIM) { if (l.vazio) { y = FIM; return; } nova(); } l.draw(y); y += l.h; });
    };
    const esp = (h) => ({ h, vazio: true, draw: () => {} });
    const txtL = (s, o) => {
      const b = !!o.b, tam = o.tam || 10, lead = o.lead || tam * 1.38, x = o.x !== undefined ? o.x : MX, w = o.w || LARG, cor = o.cor || COR.tinta;
      return quebrar(s, b, tam, w).map(l => ({ h: lead, draw: (yy) => { if (l) ops.push(texto(o.dir ? x + w - largura(l, b, tam) : x, yy + tam * 0.95, l, b, tam, cor)); } }));
    };

    function cabecalho() {
      // Faixa timbrada de ponta a ponta: tipo, número e emissão à esquerda; titular (nome, CPF/CNPJ, cidade e chave Pix) à direita.
      const t = d.titular || {}, wE = LARG * 0.55, wD = LARG * 0.43, xD = MX + LARG - wD;
      const E = [...quebrar(tipoTxt, true, 18, wE).map(s => [s, true, 18, 23, COR.branco]), ['', false, 4, 6, COR.branco],
        ...quebrar(`Nº ${numero}`, true, 11, wE).map(s => [s, true, 11, 15, COR.branco]),
        ...quebrar(`Emitido em ${d.data || ''}${d.via2 ? ` · ${d.via2}` : ''}`, false, 10, wE).map(s => [s, false, 10, 14, COR.clara])];
      const D = [...quebrar(t.nome || '', true, 11, wD).map(s => [s, true, 11, 15, COR.branco]),
        ...[t.doc ? `${t.docTipo || 'CPF/CNPJ'}: ${t.doc}` : '', t.cidade ? `Cidade: ${t.cidade}` : '', t.pix ? `Chave Pix: ${t.pix}` : ''].filter(Boolean)
          .flatMap(s => quebrar(s, false, 9.5, wD).map(l => [l, false, 9.5, 13, COR.clara]))];
      const hE = E.reduce((a, l) => a + l[3], 0), hD = D.reduce((a, l) => a + l[3], 0), topo = 26, h = topo + Math.max(hE, hD) + 18;
      ops.push(retangulo(0, 0, PW, h, COR.faixa), retangulo(0, h, PW, 3, COR.clara));
      let a = topo; E.forEach(([s, b, tam, lead, cor]) => { if (s) ops.push(texto(MX, a + tam * 0.95, s, b, tam, cor)); a += lead; });
      a = topo; D.forEach(([s, b, tam, lead, cor]) => { if (s) ops.push(texto(xD + wD - largura(s, b, tam), a + tam * 0.95, s, b, tam, cor)); a += lead; });
      y = h + 3 + 18;
    }
    const titulo = (s) => [...txtL(s, { b: true, tam: 12, lead: 17, cor: COR.faixa }), esp(3)];

    nova();
    // Cliente e equipamento numa caixa clara.
    const c = d.cliente || {};
    const CL = [...txtL('CLIENTE', { b: true, tam: 8.5, lead: 13, cor: COR.apoio, x: MX + 12, w: LARG - 24 }),
      ...txtL(c.nome || 'Cliente', { b: true, tam: 12, lead: 17, x: MX + 12, w: LARG - 24 }),
      ...(c.tel ? txtL(`Telefone: ${c.tel}`, { tam: 10, lead: 14, x: MX + 12, w: LARG - 24 }) : []),
      ...(c.equip ? txtL(/BTU\/h/.test(c.equip) ? `Equipamento: ${c.equip}` : c.equip, { tam: 10, lead: 14, x: MX + 12, w: LARG - 24 }) : [])];
    const hCL = CL.reduce((t, l) => t + l.h, 0) + 20;
    por([{ h: 10, draw: (yy) => ops.push(retangulo(MX, yy, LARG, hCL, COR.caixa)) }, ...CL, esp(10), esp(16)], true);

    // Itens: quantidade, descrição (com procedimento, faixa de tabela e economia preventiva quando o detalhamento está ligado) e valor à direita.
    const itens = d.itens || [];
    if (itens.length) {
      const xQ = MX, xD = MX + 40, wV = 104, wD = LARG - 40 - wV - 12;
      const cab = [...titulo(d.itensTitulo || 'Itens'), { h: 16, draw: (yy) => { ops.push(texto(xQ, yy + 9, 'QTD.', true, 8.5, COR.apoio), texto(xD, yy + 9, 'DESCRIÇÃO', true, 8.5, COR.apoio), texto(MX + LARG - largura('VALOR', true, 8.5), yy + 9, 'VALOR', true, 8.5, COR.apoio), linhaH(MX, MX + LARG, yy + 14, COR.tinta, 1)); } }];
      itens.forEach((it, i) => {
        const desc = quebrar(it.d || '—', true, 10.5, wD), extra = [it.j, it.faixa, it.eco].filter(Boolean);
        const L = desc.map((s, k) => ({ h: 15, draw: (yy) => { ops.push(texto(xD, yy + 11, s, true, 10.5)); if (!k) { ops.push(texto(xQ, yy + 11, `${it.q || 1}×`, false, 10.5)); const v = String(it.v || '—'); ops.push(texto(MX + LARG - largura(v, true, 10.5), yy + 11, v, true, 10.5)); } } }));
        // Procedimento, faixa e economia usam a largura toda até a margem (o valor só ocupa a 1ª linha do item).
        extra.forEach((s, k) => L.push(...txtL(s, { tam: 9, lead: 12.5, x: xD, w: LARG - 40, cor: k === 1 ? COR.tinta : COR.apoio, b: k === 1 })));
        L.unshift(esp(5)); L.push({ h: 7, draw: (yy) => ops.push(linhaH(MX, MX + LARG, yy + 4)) });
        por(i ? L : [...cab, ...L], true);
      });
    }
    // Fechamento: visita ISENTA, subtotal, desconto, total e validade da proposta, sempre na mesma página.
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
    // Blocos técnicos e jurídicos: o título nunca fica sozinho no pé da página (vai junto com as 2 primeiras linhas).
    const blocos = (d.blocos || []).filter(b => b && (b.t || b.x));
    blocos.forEach(b => {
      const T = b.t ? titulo(b.t) : [], X = txtL(b.x || '—', { tam: 10, lead: 14 });
      por([...T, ...X.slice(0, 2)], true); por([...X.slice(2), esp(12)], false);
    });
    // Etiqueta de próxima preventiva (6 meses), em caixa tracejada.
    if (d.preventiva) {
      const L = [...txtL('Etiqueta de próxima preventiva (6 meses)', { b: true, tam: 11, lead: 15, x: MX + 12, w: LARG - 24 }), ...txtL(d.preventiva, { tam: 10, lead: 14, x: MX + 12, w: LARG - 24 })];
      const h = L.reduce((t, l) => t + l.h, 0) + 18;
      por([{ h: 9, draw: (yy) => ops.push(moldura(MX, yy, LARG, h, COR.tinta, true)) }, ...L, esp(9), esp(14)], true);
    }
    // Foto de evidência (até 250 pt de altura) e assinatura do cliente (até 230 × 86 pt): sempre inteiras numa página.
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
    // Rodapé fixo em cada página, com o total de páginas já conhecido.
    pags.forEach((o, i) => {
      const s = `Documento nº ${numero} · Emitido em ${d.data || ''} · Base Atualizada ${d.base || ''} · Página ${i + 1} de ${pags.length}`;
      let tam = 8.5; while (tam > 6 && largura(s, false, tam) > LARG) tam -= 0.25;
      o.push(linhaH(MX, MX + LARG, PH - RODAPE + 14), texto(MX + (LARG - largura(s, false, tam)) / 2, PH - RODAPE + 30, s, false, tam, COR.apoio));
    });
    return pags;
  }

  // ── Serialização: objetos numerados, tabela xref com o deslocamento exato de cada um e trailer até o %%EOF. ──
  const hex16 = (s) => { let o = 'FEFF'; for (let i = 0; i < s.length; i++) o += s.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0'); return `<${o}>`; };
  const hash = (s) => { let a = 0x811c9dc5, b = 0x01000193, out = ''; for (let r = 0; r < 4; r++) { for (let i = 0; i < s.length; i++) { a ^= s.charCodeAt(i) + r; a = Math.imul(a, 16777619) >>> 0; b = (Math.imul(b ^ a, 2246822507) >>> 0); } out += ((a ^ b) >>> 0).toString(16).padStart(8, '0'); } return out.toUpperCase(); };
  const dataPdf = (t) => { const z = (n) => String(n).padStart(2, '0'), x = new Date(t); return `D:${x.getFullYear()}${z(x.getMonth() + 1)}${z(x.getDate())}${z(x.getHours())}${z(x.getMinutes())}${z(x.getSeconds())}`; };
  function serializar(pags, imgs, info) {
    const objs = [], add = (c) => (objs.push(c), objs.length);
    const cat = add(null), raiz = add(null);
    const f1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    const f2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    const f3 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Symbol >>');
    const xo = imgs.map(g => `/${g.nome} ${add([`<< /Type /XObject /Subtype /Image /Width ${g.w} /Height ${g.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${g.bytes.length} >>\nstream\n`, g.bytes, '\nendstream'])} 0 R`);
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

  // ── Cofre de mídia (PR #29): foto e assinatura do atendimento em JPEG ({ bytes, w, h }) no IndexedDB, chave = nº do documento. ──
  // O localStorage do Cofre continua só com texto (o pr17.js exige 0 data:image e < 20.000 caracteres). Sem IndexedDB (aba anônima antiga,
  // WebView travada) tudo resolve null em silêncio e o PDF sai como antes, com a nota da assinatura da 1ª via.
  const BANCO = 'gelopro.midia', LOJA = 'midia';
  let banco = null;
  const abrirBanco = () => banco || (banco = new Promise((ok) => {
    let r; try { r = indexedDB.open(BANCO, 1); } catch (e) { return ok(null); }
    r.onupgradeneeded = () => { try { r.result.createObjectStore(LOJA); } catch (e) { /* já existe */ } };
    r.onsuccess = () => ok(r.result); r.onerror = () => ok(null); r.onblocked = () => ok(null);
  }).then(db => { if (!db) banco = null; return db; }));
  const pedido = (modo, faz) => abrirBanco().then(db => !db ? null : new Promise((ok) => {
    try { const tx = db.transaction(LOJA, modo), rq = faz(tx.objectStore(LOJA)); let v = null; rq.onsuccess = () => { v = rq.result; }; tx.oncomplete = () => ok(v === undefined ? null : v); tx.onerror = tx.onabort = () => ok(null); }
    catch (e) { ok(null); }
  }));
  const copia = (g) => g && g.bytes ? { bytes: new Uint8Array(g.bytes), w: g.w, h: g.h } : null;
  // Junta com o que já está guardado: um documento sem foto não apaga a foto gravada antes para o mesmo nº.
  async function salvarMidia(num, m) {
    const k = String(num || '').trim(); if (!k || !m) return null;
    const [foto, assinatura] = await Promise.all([jpeg(m.foto, 1600).catch(() => null), jpeg(m.assinatura, 1000).catch(() => null)]);
    if (!foto && !assinatura) return null;
    const ant = (await pedido('readonly', (st) => st.get(k))) || {};
    const reg = { foto: copia(foto) || ant.foto || null, assinatura: copia(assinatura) || ant.assinatura || null, cliente: m.cliente || ant.cliente || '', em: Date.now() };
    return (await pedido('readwrite', (st) => st.put(reg, k))) === null ? null : reg;
  }
  async function lerMidia(num) {
    const k = String(num || '').trim(); if (!k) return null;
    const reg = await pedido('readonly', (st) => st.get(k));
    return reg && (reg.foto || reg.assinatura) ? reg : null;
  }

  // ── API ──
  const TIPO_ARQ = { orc: 'Orcamento', gar: 'Garantia', rec: 'Recibo', reca: 'Recibo', laudo: 'Laudo', pmoc: 'PMOC' };
  const limpo = (s) => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  function nomeArquivo(tipo, num, cliente) {
    const t = TIPO_ARQ[tipo] || (/garantia/i.test(tipo) ? 'Garantia' : /recibo/i.test(tipo) ? 'Recibo' : /laudo/i.test(tipo) ? 'Laudo' : /pmoc/i.test(tipo) ? 'PMOC' : /or[cç]amento/i.test(tipo) ? 'Orcamento' : limpo(tipo) || 'Documento');
    return `${t}-${limpo(num) || 'SN'}-${limpo(cliente).slice(0, 48).replace(/-+$/, '') || 'Cliente'}.pdf`;
  }
  // doc: { tipo, titulo, numero, data, base, via2, titular { nome, doc, docTipo, cidade, pix }, cliente { nome, tel, equip }, itensTitulo,
  //        itens [{ q, d, v, j, faixa, eco }], fechamento { bonif, linhas [[rótulo, valor]], total [rótulo, valor], validade }, blocos [{ t, x }],
  //        preventiva, foto, assinatura, assinaturaLegenda, assinaturaNota }
  async function gerar(doc) {
    const d = { ...(doc || {}) };
    d.blocos = [...(d.blocos || [])];
    // Termo de garantia sempre com a garantia legal do CDC (arts. 24 e 26), mesmo que o chamador esqueça o bloco.
    if (d.tipo === 'gar' && !d.blocos.some(b => /arts?\.?\s*24 e 26/.test(`${b.t} ${b.x}`))) d.blocos.push({ t: 'Garantia legal (CDC arts. 24 e 26)', x: 'Este termo é complementar à garantia legal do Código de Defesa do Consumidor (arts. 24 e 26), que não pode ser excluída.' });
    // 2ª via do Cofre (orçamento e garantia): o atendimento já foi concluído e a foto e a assinatura não estão mais na memória → vêm do IndexedDB.
    // Só com o mesmo cliente gravado na 1ª via: um nº reaproveitado (sequência zerada) nunca leva a imagem de outro atendimento.
    const comImg = d.tipo === 'orc' || d.tipo === 'gar', cli = (d.cliente && d.cliente.nome) || '';
    if (comImg && d.via2 && d.numero && (!d.foto || !d.assinatura)) {
      const m = await lerMidia(d.numero).catch(() => null);
      if (m && (!m.cliente || !cli || m.cliente === cli)) { if (!d.foto && m.foto) d.foto = m.foto; if (!d.assinatura && m.assinatura) d.assinatura = m.assinatura; }
    }
    const [foto, assin] = await Promise.all([jpeg(d.foto, 1600).catch(() => null), jpeg(d.assinatura, 1000).catch(() => null)]);
    // 1ª via com foto ou assinatura: guarda o JPEG já convertido pelo nº do documento, para a 2ª via sair completa depois de "Concluir".
    if (comImg && !d.via2 && d.numero && (foto || assin)) await salvarMidia(d.numero, { foto, assinatura: assin, cliente: cli }).catch(() => null);
    const imgs = [];
    if (foto) imgs.push(Object.assign(foto, { nome: 'Im' + (imgs.length + 1) }));
    if (assin) imgs.push(Object.assign(assin, { nome: 'Im' + (imgs.length + 1) }));
    const pags = diagramar(d, { foto, assin });
    const nome = d.nome || nomeArquivo(d.tipo || d.titulo, d.numero, d.cliente && d.cliente.nome);
    const bytes = serializar(pags, imgs, { titulo: nome.replace(/\.pdf$/i, ''), assunto: `${d.titulo || ''} nº ${d.numero || ''}`, autor: (d.titular && d.titular.nome) || '' });
    return { bytes, blob: new Blob([bytes], { type: 'application/pdf' }), paginas: pags.length, nome };
  }
  // Plano B: download direto com o nome padronizado.
  function baixar(blob, nome) {
    const u = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = u; a.download = nome; a.rel = 'noopener'; a.style.display = 'none';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 60000);
    return 'baixado';
  }
  // Navegador embutido de app (Instagram, Facebook, WhatsApp): costuma não anexar arquivo gerado na página (PR #26).
  const embutido = () => { try { return /Instagram|FBAN|FBAV|WhatsApp/i.test(navigator.userAgent || ''); } catch (e) { return false; } };
  // Área de transferência: API moderna; sem ela (WebView antiga), textarea + execCommand('copy').
  async function copiar(texto) {
    const t = String(texto || ''); if (!t) return false;
    try { if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(t); return true; } } catch (e) { /* tenta a reserva */ }
    try {
      const ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
      document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return !!ok;
    } catch (e) { return false; }
  }
  // Resumo do documento em texto (PR #26): o mesmo conteúdo do PDF, sem imagem, para colar no WhatsApp em 1 toque ou servir de legenda quando o
  // navegador não anexa o arquivo. As linhas de preenchimento à mão do PMOC ("Data ______  Executado por …") ficam de fora; "____" vira "a definir".
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
  // Plano C: Web Share com o arquivo (WhatsApp, e-mail, Drive). Sem suporte a arquivo ou com falha, cai no download.
  // Navegador embutido sem compartilhamento de arquivo: baixa e já deixa o resumo (legenda) na área de transferência para colar na conversa.
  async function compartilhar(blob, nome, texto) {
    let arq = null; try { arq = new File([blob], nome, { type: 'application/pdf' }); } catch (e) { arq = null; }
    let pode = false; try { pode = !!(arq && navigator.share && navigator.canShare && navigator.canShare({ files: [arq] })); } catch (e) { pode = false; }
    if (pode) { try { await navigator.share({ files: [arq], title: nome }); return 'compartilhado'; } catch (e) { if (e && e.name === 'AbortError') return 'cancelado'; } }
    baixar(blob, nome);
    if (!embutido()) return pode ? 'falhou' : 'sem-suporte';
    return texto && await copiar(texto) ? 'embutido-resumo' : 'embutido';
  }
  window.GeloProPDF = { gerar, nomeArquivo, baixar, compartilhar, copiar, resumo, embutido, salvarMidia, lerMidia, jpeg, quebrar, largura, A4: [PW, PH] };
})();

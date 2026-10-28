// GeloPro · Marca oficial (PR #40): o nome GeloPRO e o slogan numa fonte só, para o [data-print] (FolhaDocumento) e o PDF nativo (pdf-gelopro.js).
// Regra de equilíbrio visual do Pedro: o slogan nunca tem a largura do nome nem compete com ele. Fica menor (~66 % da largura da palavra GeloPRO),
// centralizado exatamente embaixo dela, em fonte fina (peso 500, letter-spacing 0,12 em). O nome leva 100 % do protagonismo.
// Uso: GeloProMarca.slogan, .nome, .partes (["Gelo", "PRO"]), .cores (hex cravado), .proporcao (0,66);
//      GeloProMarca.linhasSlogan(medir, alvo) → o slogan quebrado no menor número de linhas cujo trecho mais largo cabe em `alvo`
//      (medir(texto) devolve a largura no mesmo sistema de unidades de `alvo`).
(function () {
  'use strict';
  const SLOGAN = 'INTELIGÊNCIA & DIAGNÓSTICO EM CLIMATIZAÇÃO';
  // Cores cravadas em hexadecimal (regra 5 do CLAUDE.md): "Gelo" branco e "PRO" azul-gelo claro sobre a faixa azul-marinho do documento.
  const CORES = { faixa: '#0f345b', gelo: '#ffffff', pro: '#9fd8ff', slogan: '#dee9f5', quadro: '#19416d', quadroBorda: '#5b7fa6' };
  const PROPORCAO = 0.66;
  // Todas as divisões das palavras em n linhas (sem cortar palavra), na ordem.
  const divisoes = (pal, n) => {
    if (n <= 1) return [[pal.join(' ')]];
    const out = [];
    for (let i = 1; i <= pal.length - n + 1; i++) divisoes(pal.slice(i), n - 1).forEach(r => out.push([pal.slice(0, i).join(' '), ...r]));
    return out;
  };
  // Menor número de linhas que cabe na largura alvo; entre as divisões possíveis, a mais equilibrada (menor linha mais larga).
  function linhasSlogan(medir, alvo, texto) {
    const pal = String(texto || SLOGAN).split(/\s+/).filter(Boolean);
    let melhor = pal;
    for (let n = 1; n <= pal.length; n++) {
      const op = divisoes(pal, n).map(L => ({ L, w: Math.max(...L.map(medir)) })).sort((a, b) => a.w - b.w)[0];
      if (op && op.w <= alvo + 0.01) return op.L;
      if (n === pal.length) melhor = op ? op.L : pal;
    }
    return melhor;
  }
  window.GeloProMarca = { nome: 'GeloPRO', partes: ['Gelo', 'PRO'], slogan: SLOGAN, cores: CORES, proporcao: PROPORCAO, pesoSlogan: 500, espacoSlogan: '0.12em', linhasSlogan };
})();

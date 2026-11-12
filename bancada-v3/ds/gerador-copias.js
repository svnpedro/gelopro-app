/* gerador-copias.js — regra C36: tela copiada nunca é remendada.
   Gera, a partir das telas de referência (390 px, modo claro) do Design System:
   - as telas escuras (prefixo E) e o painel vivo escuro;
   - as telas de 360 px (prefixo P) e de 430 px (prefixo G).
   Funções puras: recebem texto e devolvem texto. Quem lê e grava os arquivos é o roteiro que as chama. */
var GeradorCopias = (function () {
  var CH = 'background-color:#DBD8D1;background-image:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.65) 0%,rgba(255,255,255,0) 58%),linear-gradient(180deg,#E6E3DD 0%,#CCC8BF 100%)';
  var CHE = 'background-color:#171B20;background-image:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.07) 0%,rgba(255,255,255,0) 58%),linear-gradient(180deg,#1C2127 0%,#12161A 100%)';
  /* pares claro → escuro, do mais específico para o mais geral */
  var PARES = [
    [CH, CHE],
    ['background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:1px solid #081B33;box-shadow:inset 0 2px 4px rgba(9,30,66,.3);color:#0C2747', 'background:linear-gradient(180deg,#1B2B33,#13202A);border:1px solid #05070A;box-shadow:inset 0 2px 4px rgba(0,0,0,.5);color:#5BE3FF'], /* aba de família ativa */
    ['width:8px;height:8px;border-radius:50%;background:#0C2747', 'width:8px;height:8px;border-radius:50%;background:#5BE3FF'], /* ponto da aba ativa */
    ['border-top:1px solid #E5DCC3', 'border-top:1px solid #3A424C'], /* fio entre as leituras do visor */
    ['background:#0C2747;border:1.5px solid #081B33;color:#FFFFFF;font:700 20px/1.4', 'background:#2A3138;border:1.5px solid #05070A;color:#5BE3FF;font:700 20px/1.4'],
    ['letter-spacing:.12em;color:#14532D', 'letter-spacing:.12em;color:#4AF08A'], ['letter-spacing:.12em;color:#7F1D1D', 'letter-spacing:.12em;color:#FF8A80'],
    ['background:#EFEDE8;border-top:1px solid #CFCBC2;border-bottom:1px solid #CFCBC2', 'background:#262C34;border-top:1px solid #3A424C;border-bottom:1px solid #3A424C'],
    ['background:#EFEDE8;border-bottom:1px solid #CFCBC2', 'background:#262C34;border-bottom:1px solid #3A424C'],
    ['height:8px;background:#0C2747', 'height:8px;background:#5BE3FF'], ['grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid #CFCBC2', 'grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid #3A424C'], ['width:1px;background:#CFCBC2', 'width:1px;background:#3A424C'], ['height:4px;border-radius:2px;background:#0C2747', 'height:4px;border-radius:2px;background:#5BE3FF'], ['white-space:nowrap;background:#EFEDE8', 'white-space:nowrap;background:#262C34'], /* faixa de fases do Pulso de LED */ ['background:#E5E2DC', 'background:#0A0D10'],
    ['background:#FFFFFF;border:1.5px solid #0C2747;color:#0C2747', 'background:#171B20;border:1.5px solid #8A96A3;color:#E8EDF2'],
    ['background:#0B0B0C;border:1.5px solid #0B0B0C;color:#FFFFFF', 'background:#0B0B0C;border:1.5px solid #8A96A3;color:#FFFFFF'],
    ['color:#14532D;padding-top:4px', 'color:#4AF08A;padding-top:4px'], ['color:#7F1D1D;padding-top:4px', 'color:#FF8A80;padding-top:4px'],
    ['background:#FFFFFF;border:1.5px solid #5A6A7E;color:#334155;border-radius:8px', 'background:#171B20;border:1.5px solid #3A424C;color:#8A96A3;border-radius:8px'],
    ['background:#FEF3C7;border:1.5px solid #B45309;border-radius:8px;color:#78350F', 'background:#2A1F05;border:1.5px solid #E89A0C;border-radius:8px;color:#FFC044'],
    ['background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF', 'background:radial-gradient(140% 130% at 50% -10%,#262C34 0%,#20262D 45%,#12161A 100%);border:1px solid #05070A;box-shadow:inset 0 1px 1px rgba(255,255,255,.14),inset 0 -2px 0 #05070A;color:#E8EDF2'],
    ['background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747', 'background:radial-gradient(140% 130% at 50% -10%,#3A424C 0%,#323942 45%,#1E242B 100%);border:1px solid #05070A;box-shadow:inset 0 1px 1px rgba(255,255,255,.14),inset 0 -2px 0 #05070A;color:#E8EDF2'],
    ['background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747', 'background:linear-gradient(180deg,#1B2B33,#13202A);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #05070A;color:#5BE3FF'],
    ['background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33', 'background:linear-gradient(180deg,#1B2B33,#13202A);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #05070A;color:#5BE3FF'],
    ['background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F', 'background:#071216;border:1.5px solid #05070A'],
    ['background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A', 'background:#071216;border:1.5px solid #05070A'],
    ['inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7)', 'inset 0 2px 5px rgba(0,0,0,.7),0 1px 0 rgba(255,255,255,.06)'],
    ['background:#FFFFFF;border:1px solid #94A3B8;box-shadow:0 1px 3px rgba(9,30,66,.14)', 'background:#1E242B;border:1px solid #05070A;box-shadow:0 1px 3px rgba(0,0,0,.5)'],
    ['background:#FFFFFF;border:1px solid #94A3B8', 'background:#1E242B;border:1px solid #05070A'],
    ['background:#FFFFFF;border:1px solid #5A6A7E;box-shadow:inset 0 2px 4px rgba(9,30,66,.18),0 1px 0 rgba(255,255,255,.7)', 'background:#0A0D10;border:1px solid #05070A;box-shadow:inset 0 2px 5px rgba(0,0,0,.7),0 1px 0 rgba(255,255,255,.06)'],
    ['background:#FFFFFF;border:1px solid #5A6A7E;border-radius:8px;color:#334155', 'background:#171B20;border:1px solid #3A424C;border-radius:8px;color:#8A96A3'],
    ['background:#FFFFFF;border:1px solid #7A6A3A;color:#0C2747', 'background:#171B20;border:1px solid #3A424C;color:#E8EDF2'],
    ['background:#FFFFFF;border:1px solid #5A6A7E', 'background:#0A0D10;border:1px solid #05070A'],
    ['background:#F1F5F9;border:1px solid #94A3B8;color:#1E293B', 'background:#262C34;border:1px solid #3A424C;color:#AEB8C2'],
    ['background:#F8FAFC;border:1px solid #94A3B8', 'background:#262C34;border:1px solid #3A424C'],
    ['border-top:1px solid #E2E8F0', 'border-top:1px solid #2A3138'],
    ['background:#DCFCE7;border:1.5px solid #15803D;color:#14532D', 'background:#06140C;border:1.5px solid #1E6B43;color:#4AF08A'],
    ['background:#FEE2E2;border:1.5px solid #B91C1C;color:#7F1D1D', 'background:#3A1210;border:1.5px solid #FF5A4F;color:#FF8A80'],
    ['background:#FEF3C7;border:1.5px solid #B45309;color:#78350F', 'background:#2A1F05;border:1.5px solid #E89A0C;color:#FFC044'],
    ['background:#E0F2FE;border:1.5px solid #0284C7;color:#0C4A6E', 'background:#0A1C2A;border:1.5px solid #3B82F6;color:#8EC5FF'],
    ['background:#DCFCE7;border:1.5px solid #15803D;border-radius:8px;color:#14532D', 'background:#06140C;border:1.5px solid #1E6B43;border-radius:8px;color:#4AF08A'],
    ['background:#FEE2E2;border:1.5px solid #B91C1C;border-radius:8px;color:#7F1D1D', 'background:#3A1210;border:1.5px solid #FF5A4F;border-radius:8px;color:#FF8A80'],
    ['background:#DBEAFE;border:1.5px solid #1D4ED8;border-radius:8px;color:#1E3A8A', 'background:#0A1C2A;border:1.5px solid #3B82F6;border-radius:8px;color:#8EC5FF'],
    ['background:#FFFFFF;border:1.5px solid #B91C1C;color:#7F1D1D', 'background:#171B20;border:1.5px solid #FF5A4F;color:#FF8A80'],
    ['background:#0C2747;color:#FFFFFF', 'background:#2A3138;color:#5BE3FF'],
    ['background:#CBD5E1;border:1px solid #1C4268', 'background:#0A0D10;border:1px solid #05070A'],
    ['border-radius:50%;box-sizing:border-box;border:1.5px solid #5A6A7E', 'border-radius:50%;box-sizing:border-box;border:1.5px solid #8A96A3'],
    ['radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)', 'radial-gradient(140% 130% at 50% -10%,#3A424C 0%,#323942 45%,#1E242B 100%)'],
    ['rgba(12,39,71,.85)', 'rgba(232,237,242,.8)'],
    ['#081B33', '#05070A'], ['color:#0B5976', 'color:#5BE3FF'], ['color:#1E293B', 'color:#AEB8C2'], ['color:#334155', 'color:#8A96A3'], ['color:#0C2747', 'color:#E8EDF2'], ['color:#3F3210', 'color:#6FA3B3'],
    ['stroke="#334155"', 'stroke="#8A96A3"'], ['stroke="#0C2747"', 'stroke="#E8EDF2"'], ['solid #5A6A7E', 'solid #3A424C'], ['solid #64748B', 'solid #3A424C'], ['solid #94A3B8', 'solid #3A424C'],
    ['background:#F8FAFC;border:2px', 'background:#171B20;border:2px'], ['background:#CBD5E1', 'background:#0A0D10'], ['background:#94A3B8', 'background:#3A424C']
  ];
  /* controles que ficam dentro de visor ou têm escrita própria: trocados ANTES do percurso dos visores */
  var ANTES = [
    ['background:#FFFFFF;border:1px solid #7A6A3A;color:#0C2747', 'background:#171B20;border:1px solid #3A424C;color:#E8EDF2'],
    ['background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;color:#0C2747;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E', 'background:radial-gradient(140% 130% at 50% -10%,#3A424C 0%,#323942 45%,#1E242B 100%);border:1px solid #05070A;color:#E8EDF2;box-shadow:inset 0 1px 1px rgba(255,255,255,.14),inset 0 -2px 0 #05070A'],
    ['background:#FFFFFF;border:1.5px solid #B91C1C;color:#7F1D1D', 'background:#3A1210;border:1.5px solid #FF5A4F;color:#FF8A80'],
    ['position:relative;background:#FFFFFF', 'position:relative;background:#0A0D10']
  ];
  var FUNDO_SOLTO = ["bg: 'radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.65) 0%,rgba(255,255,255,0) 58%),linear-gradient(180deg,#E6E3DD 0%,#CCC8BF 100%) #DBD8D1'", "bg: 'radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.07) 0%,rgba(255,255,255,0) 58%),linear-gradient(180deg,#1C2127 0%,#12161A 100%) #171B20'"];
  /* cores do motor do painel vivo (valores entre aspas dentro de renderVals) */
  var MOTOR = { '#5A6A7E': '#3A424C', '#F1F5F9': '#262C34', '#94A3B8': '#3A424C', '#B45309': '#FFB020', '#0C2747': '#5BE3FF', '#334155': '#6FA3B3', '#1E3A8A': '#8EC5FF', '#14532D': '#4AF08A', '#7F1D1D': '#FF8A80', '#991B1B': '#FF8A80', '#78350F': '#FFC044', '#0C4A6E': '#8EC5FF', '#A6945F': '#3A424C', '#DCFCE7': '#06140C', '#FEE2E2': '#3A1210', '#FEF3C7': '#2A1F05', '#E0F2FE': '#0A1C2A', '#F4F6F9': '#262C34', '#CBD5E1': '#3A424C', '#64748B': '#3A424C', '#16A34A': '#1E6B43', '#DC2626': '#FF5A4F', '#D97706': '#E89A0C', '#0284C7': '#3B82F6', '#1D4ED8': '#5B9BFF', '#15803D': '#3DDC84', '#B91C1C': '#FF5A4F' };
  function todos(s, a, b) { return s.split(a).join(b); }
  function conta(s, a) { return s.split(a).length - 1; }
  /* aplica fn(tagDeAbertura, miolo) a cada elemento cujo estilo contém a marca */
  function miolo(s, marca, fn) {
    var pos = s.lastIndexOf(marca);
    while (pos >= 0) {
      var lt = s.lastIndexOf('<', pos), m = /^<([a-z0-9-]+)/i.exec(s.slice(lt, lt + 24));
      if (m) { var nome = m[1], i0 = s.indexOf('>', pos) + 1, fecha = '</' + nome + '>', abre = new RegExp('<' + nome + '[\\s>]', 'g'), d = 1, i = i0, fim = -1;
        while (d > 0) { var c = s.indexOf(fecha, i); if (c < 0) break; abre.lastIndex = i; var o = abre.exec(s); if (o && o.index < c) { d++; i = o.index + 1; } else { d--; if (d === 0) fim = c; i = c + fecha.length; } }
        if (fim > 0) { var r = fn(s.slice(lt, i0), s.slice(i0, fim)); s = s.slice(0, lt) + r[0] + r[1] + s.slice(fim); } }
      pos = pos > 0 ? s.lastIndexOf(marca, pos - 1) : -1;
    }
    return s;
  }
  /* tela ou gabarito claro → escuro */
  function escurecer(s) {
    var guarda = [];
    ANTES.forEach(function (p) { s = todos(s, p[0], p[1]); });
    s = miolo(s, 'linear-gradient(115deg,#F7EED3', function (tag, dentro) { guarda.push(tag + dentro); return ['\u0002' + (guarda.length - 1) + '\u0003', '']; }); /* placa do lucro não muda */
    s = miolo(s, 'linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%)', function (tag, dentro) {
      return [tag.indexOf('color:#0C2747') >= 0 ? tag.replace('color:#0C2747', 'color:#5BE3FF') : tag.replace(/style="/, 'style="color:#5BE3FF;'),
        dentro.replace(/color:#0C2747/g, 'color:#5BE3FF').replace(/color:#(3F3210|334155|1E293B)/g, 'color:#6FA3B3').replace(/color:#B91C1C/g, 'color:#FF5A4F').replace(/color:#15803D/g, 'color:#3DDC84').replace(/color:#14532D/g, 'color:#4AF08A')]; });
    PARES.forEach(function (p) { s = todos(s, p[0], p[1]); });
    s = todos(s, 'background:#FFFFFF', 'background:#0A0D10'); /* último passo: nenhum branco sobra no escuro (a placa do lucro está guardada à parte) */
    return s.replace(/\u0002(\d+)\u0003/g, function (q, n) { return guarda[+n]; });
  }
  /* tela de referência → tela escura (prefixo E) */
  function telaEscura(s) { return todos(todos(escurecer(s), '<dc-import name="LogoMarca" ', '<dc-import name="LogoMarca" escuro="{{ sim }}" '), '<dc-import name="InstrumentosVivos"', '<dc-import name="InstrumentosVivosEscuro"').replace(/data-screen-label="(\d\d )/g, 'data-screen-label="E$1'); }
  /* arquivo do painel vivo claro → arquivo do painel vivo escuro */
  function vivoEscuro(v) {
    var t0 = v.indexOf('</helmet>'), t1 = v.indexOf('</x-dc>'), c0 = v.indexOf('class Component'), c1 = v.indexOf('</script>', c0);
    var gabarito = escurecer(v.slice(t0, t1)), motor = v.slice(c0, c1);
    motor = motor.replace(/const OFF = \{[^\n]*?\};/, "const OFF = { bg: 'radial-gradient(140% 130% at 50% -10%,#3A424C 0%,#323942 45%,#1E242B 100%)', bd: '1px solid #05070A', fg: '#E8EDF2', sh: 'inset 0 1px 1px rgba(255,255,255,.14),inset 0 -2px 0 #05070A' };").replace(/const ON = \{[^\n]*?\};/, "const ON = { bg: 'linear-gradient(180deg,#1B2B33,#13202A)', bd: '3px solid #FFB020', fg: '#5BE3FF', sh: 'inset 0 0 0 1px #05070A' };");
    motor = todos(motor, "background: '#FFFFFF'", "background: '#0A0D10'"); motor = todos(motor, "LED_C[0] : '#FFFFFF'", "LED_C[0] : '#171B20'");
    var r0 = motor.indexOf('renderVals()');
    motor = motor.slice(0, r0) + motor.slice(r0).replace(/'#[0-9A-Fa-f]{6}'/g, function (q) { var k = q.slice(1, -1).toUpperCase(); return MOTOR[k] ? "'" + MOTOR[k] + "'" : q; });
    motor = todos(motor, "vermelho: ['#FF5A4F', '#FF8A80']", "vermelho: ['#FF5A4F', '#7F1D1D']");
    motor = todos(motor, "background: bg, color: '#FFFFFF'", "background: bg, color: '#05070A'");
    if (conta(motor, FUNDO_SOLTO[0]) !== 1) throw new Error('fundo do painel solto não encontrado'); motor = todos(motor, FUNDO_SOLTO[0], FUNDO_SOLTO[1]);
    gabarito = todos(gabarito, 'data-screen-label="Vivo ', 'data-screen-label="Vivo escuro '); /* o medidor trata "Vivo escuro" como modo escuro */ /* selo que pulsa: tinta escura sobre fundo claro */
    return v.slice(0, t0) + gabarito + v.slice(t1, c0) + motor + v.slice(c1);
  }
  /* tela de referência → outro tamanho; prefixo P (360) recebe as adaptações da lei 19 */
  function redimensionar(s, prefixo, largura, altura, rotulo) {
    if (conta(s, 'width:390px;min-height:844px;') !== 1) throw new Error('tela sem a medida de referência: ' + rotulo);
    s = s.replace('width:390px;min-height:844px;', 'width:' + largura + 'px;min-height:' + altura + 'px;').replace(/data-screen-label="(\d\d )/g, 'data-screen-label="' + prefixo + '$1');
    if (largura < 390) {
      s = todos(s, 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:14px;font-weight:600;letter-spacing:0', 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:12px;font-weight:600;letter-spacing:0'); /* abas em 12 px */
      ['S', 'A', 'C', 'L'].forEach(function (k) { s = todos(s, '{{ dk' + k + ' }}', '{{ dk' + k + 'c }}'); }); /* rótulo curto no dock */
      var j = s.indexOf('AMBIENTE · °C'); /* dois ajustes lado a lado empilham */
      if (j >= 0) { var g = s.lastIndexOf('<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">', j); if (g >= 0) s = s.slice(0, g) + '<div style="display:grid;grid-template-columns:1fr;gap:12px">' + s.slice(g + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'.length); }
      s = todos(s, '>Placa e gás</b>', '>Placa+gás</b>'); /* aba de família: nome curto para caber com 8 px de respiro */
      s = todos(s, 'flex:none;padding:0 20px;display:flex;align-items:center;justify-content:center;border-radius:10px;font-size:15px', 'flex:none;padding:0 12px;display:flex;align-items:center;justify-content:center;border-radius:10px;font-size:15px'); /* Concluir mais estreita */
      s = s.replace(/hint-size="358px,/g, 'hint-size="' + (largura - 32) + 'px,');
    }
    return s;
  }
  return {
    escurecer: escurecer, telaEscura: telaEscura, vivoEscuro: vivoEscuro, redimensionar: redimensionar,
    TELAS_ESCURAS: [['01 Home', 'Home'], ['02 Gas e SH ideal', 'Gás &amp; SH'], ['06 Lista de sintomas', 'Lista de sintomas'], ['15 Inverter trava 2 de 3', 'Inverter &amp; 30s'], ['19 Codigos LG 1 piscada', 'Códigos &amp; LED'], ['21 Laudo tecnico completo', 'Tabela &amp; Laudo · técnico'], ['12 Gaveta de servico', 'Gaveta de serviço'], ['31 Gaveta Limpeza', 'Gaveta de serviço · Limpeza'], ['32 Gaveta Instalar', 'Gaveta de serviço · Instalar'], ['33 Gaveta Placa e gas', 'Gaveta de serviço · Placa e gás'], ['34 Laudo sem servico', 'Tabela &amp; Laudo · sem serviço'], ['35 Laudo com quatro servicos', 'Tabela &amp; Laudo · quatro serviços'], ['36 Cofre com laudos', 'Tabela &amp; Laudo · Cofre com laudos']],
    TELAS_TAMANHOS: [['01 Home', 'Home'], ['02 Gas e SH ideal', 'Gás &amp; SH'], ['06 Lista de sintomas', 'Lista de sintomas'], ['13 Sensor NTC na curva', 'Sensor NTC'], ['15 Inverter trava 2 de 3', 'Inverter &amp; 30s'], ['19 Codigos LG 1 piscada', 'Códigos &amp; LED'], ['21 Laudo tecnico completo', 'Tabela &amp; Laudo · técnico'], ['12 Gaveta de servico', 'Gaveta de serviço'], ['31 Gaveta Limpeza', 'Gaveta de serviço · Limpeza'], ['32 Gaveta Instalar', 'Gaveta de serviço · Instalar'], ['33 Gaveta Placa e gas', 'Gaveta de serviço · Placa e gás'], ['34 Laudo sem servico', 'Tabela &amp; Laudo · sem serviço'], ['35 Laudo com quatro servicos', 'Tabela &amp; Laudo · quatro serviços'], ['36 Cofre com laudos', 'Tabela &amp; Laudo · Cofre com laudos']],
    TAMANHOS: [['P', 360, 800, 'Menor · 360 px'], ['G', 430, 932, 'Maior · 430 px'], ['B', 375, 667, 'Baixo · 375 × 667']]
  };
})();
if (typeof module !== 'undefined') module.exports = GeradorCopias;

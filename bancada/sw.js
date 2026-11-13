// GeloPro · Bancada GeloPRO em modo avião — 12/11/2026 — versão oficial e única em /bancada/ (escopo ./, Design System v4 transplantado 1:1).
// Cache bancada-offline-v21 (13/11/2026, lacre de produção: porta de ativação BLINDADA fora de localhost, máscaras vivas e build ofuscado; v20 de 13/11/2026, auditorias de campo e avisos remotos; v19 de 13/11/2026, artes em 3 filas com as 14 ilustrações principais primeiro; v16 marca oficial final; v15 de 13/11/2026; regra de rede do v14 de 12/11/2026, fim do cache fantasma): a página e os scripts do núcleo vão à rede primeiro (cache: 'no-cache',
// prazo de 1,2 s) e atualizam o cache na hora; rede caída ou lenta abre o cache na mesma hora, então o celular nunca fica preso numa
// versão antiga depois de um deploy e o modo avião segue instantâneo. O install guarda SÓ o núcleo leve (página, motor próprio em ./motor/ com a base
// embutida base-inline.js, PDF v4, estilos e gerador do Design System, fontes e o urso oficial da marca), 2 downloads por vez, sem disputar a antena.
// As 126 artes de ../guia-pro/imagens/, os 48 tiles de ./tiles/, os 19 CSVs e os arquivos literais de ./ds/ entram depois, aquecidos
// em 3 filas paralelas quando a página pede (mensagem aquecer-artes, 800 ms após carregar e ociosa), as 14 ilustrações principais primeiro. CSVs e .json/.html do Design System: cache
// primeiro com atualização silenciosa; artes, tiles, fontes e imagens saem do cache e só vão à rede se faltarem. Nenhuma espera de rede ao tocar. O activate apaga os caches antigos da Bancada (bancada-offline-* diferente,
// bancada-v2-offline-* e bancada-v3-offline-*); o install reaproveita as artes que já estavam no cache anterior (sem baixar de novo).
'use strict';
const CACHE = 'bancada-offline-v21'; // v21 (13/11/2026): lacre de produção (BLINDADO por padrão fora de 127.0.0.1/localhost, porta de ativação por CPF/CNPJ com cadastro do titular, máscaras vivas de CPF/CNPJ, WhatsApp e chave Pix, build público minificado e ofuscado com trava anti-clone). v20 (13/11/2026): 8 achados das auditorias de campo (Modo: Laudo blindado, busca de códigos na Tecla 3 e na Home, selos semânticos, Gás & SH com tubo estável, escala 200k, zoom 1,85× na bolinha tocada, 360 × 640) e o cordão de avisos remotos. v19 v19 (13/11/2026): busca sem código interno, artes em RAM (0 ms) e aquecimento em 3 filas a 800 ms, contador vivo na Tecla 4, COBRAR DO CLIENTE / MEU CUSTO DA PEÇA com Peça na Mala (Custo R$ 0) e o PDF real anexado no WhatsApp (Web Share API). v18 (13/11/2026): Modo Esperteza (preço livre, peça cravada, serviço próprio salvo), 22 serviços, Cliente & WhatsApp acima do envio, Códigos com selos C50 e revelação suave das artes. v17 (13/11/2026): LOGO FINAL alinhada (versão 3 do pacote da marca: GELOPRO em maiúsculas, régua de letra maiúscula, gap .944em, 141 × 44). v16 (13/11/2026): marca oficial final (urso na plaqueta, BANCADA / GeloPRO / SPLIT & INVERTER), Tecla 4 Ganhos & Laudo com camuflagem no Modo: Laudo, − e + vivos e faxina do Laudo. v15 (13/11/2026): faixa única do equipamento em toda a Bancada, Tecla 4 Lucro & Laudo e Cofre multi-aparelho. v14 (12/11/2026): página e núcleo pela rede primeiro (1,2 s) com cache de reserva; núcleo leve no install; artes 1 por vez
const PRAZO_REDE_MS = 1200;
const PAGINA = './';
const MOTOR = [
  './motor/base-inline.js', './motor/vendor/qrcode-generator-1.4.4.js', './motor/gelopro-pix.js', './motor/marca-gelopro.js', './motor/pdf-gelopro.js', './motor/licenca-gelopro.js',
  './pdf-bancada-v4.js', './ds/estilos.js', './ds/gerador-copias.js',
  './fontes/barlow-semi-condensed-latin-500-normal.woff2', './fontes/barlow-semi-condensed-latin-600-normal.woff2', './fontes/barlow-semi-condensed-latin-700-normal.woff2',
  './fontes/barlow-semi-condensed-latin-800-normal.woff2', './fontes/barlow-semi-condensed-latin-800-italic.woff2', './fontes/jetbrains-mono-latin-500-normal.woff2', './fontes/jetbrains-mono-latin-700-normal.woff2',
  './marca/gelopro-urso.png'
];
// Arquivos literais do Design System: a página lê a cópia embutida em base-inline.js; o original fica guardado para conferência offline.
const DS = ['./ds/icones.json', './ds/InstrumentosVivos.dc.html', './ds/InstrumentosVivosEscuro.dc.html', './ds/LogoMarca.dc.html'];
const BASE = [
  '../base-tecnica/precos_regionais_2026.csv',
  '../base-tecnica/pmoc_atividades.csv',
  '../base-tecnica/codigos_erro_conferidos.csv',
  '../base-tecnica/codigos_erro.csv',
  '../base-tecnica/codigos_erro_novos.csv',
  '../base-tecnica/piscadas.csv',
  '../base-tecnica/ntc_resumo.csv',
  '../base-tecnica/ntc_tolerancias.csv',
  '../base-tecnica/pt_r410a_r32_r22.csv',
  '../base-tecnica/criterios_operacionais.csv',
  '../base-tecnica/ntc_gree.csv',
  '../base-tecnica/ntc_lg.csv',
  '../base-tecnica/ntc_lg_descarga.csv',
  '../base-tecnica/ntc_midea_pontos.csv',
  '../base-tecnica/ntc_midea_tp.csv',
  '../base-tecnica/ntc_samsung.csv',
  '../base-tecnica/ntc_daikin.csv',
  '../base-tecnica/ntc_tcl.csv',
  '../base-tecnica/ntc_agratto.csv'
];
const ARTES = [
  '../guia-pro/imagens/d001.webp', '../guia-pro/imagens/d002.webp', '../guia-pro/imagens/d003.webp', '../guia-pro/imagens/d004.webp',
  '../guia-pro/imagens/d005.webp', '../guia-pro/imagens/d023.webp', '../guia-pro/imagens/d040.webp', '../guia-pro/imagens/d057.webp',
  '../guia-pro/imagens/d058.webp', '../guia-pro/imagens/d073.webp', '../guia-pro/imagens/d087.webp', '../guia-pro/imagens/s04.webp',
  '../guia-pro/imagens/s06.webp', '../guia-pro/imagens/s07.webp', '../guia-pro/imagens/icones/d001_aplicacao.webp',
  '../guia-pro/imagens/icones/d001_ferramenta.webp', '../guia-pro/imagens/icones/d001_p1.webp', '../guia-pro/imagens/icones/d001_p2.webp',
  '../guia-pro/imagens/icones/d001_p3.webp', '../guia-pro/imagens/icones/d001_p4.webp', '../guia-pro/imagens/icones/d001_p5.webp',
  '../guia-pro/imagens/icones/d001_sistema.webp', '../guia-pro/imagens/icones/d002_aplicacao.webp',
  '../guia-pro/imagens/icones/d002_ferramenta.webp', '../guia-pro/imagens/icones/d002_p1.webp', '../guia-pro/imagens/icones/d002_p2.webp',
  '../guia-pro/imagens/icones/d002_p3.webp', '../guia-pro/imagens/icones/d002_p4.webp', '../guia-pro/imagens/icones/d002_p5.webp',
  '../guia-pro/imagens/icones/d002_sistema.webp', '../guia-pro/imagens/icones/d003_aplicacao.webp',
  '../guia-pro/imagens/icones/d003_ferramenta.webp', '../guia-pro/imagens/icones/d003_p1.webp', '../guia-pro/imagens/icones/d003_p2.webp',
  '../guia-pro/imagens/icones/d003_p3.webp', '../guia-pro/imagens/icones/d003_p4.webp', '../guia-pro/imagens/icones/d003_p5.webp',
  '../guia-pro/imagens/icones/d003_sistema.webp', '../guia-pro/imagens/icones/d004_aplicacao.webp',
  '../guia-pro/imagens/icones/d004_ferramenta.webp', '../guia-pro/imagens/icones/d004_p1.webp', '../guia-pro/imagens/icones/d004_p2.webp',
  '../guia-pro/imagens/icones/d004_p3.webp', '../guia-pro/imagens/icones/d004_p4.webp', '../guia-pro/imagens/icones/d004_p5.webp',
  '../guia-pro/imagens/icones/d004_sistema.webp', '../guia-pro/imagens/icones/d005_aplicacao.webp',
  '../guia-pro/imagens/icones/d005_ferramenta.webp', '../guia-pro/imagens/icones/d005_p1.webp', '../guia-pro/imagens/icones/d005_p2.webp',
  '../guia-pro/imagens/icones/d005_p3.webp', '../guia-pro/imagens/icones/d005_p4.webp', '../guia-pro/imagens/icones/d005_p5.webp',
  '../guia-pro/imagens/icones/d005_sistema.webp', '../guia-pro/imagens/icones/d023_aplicacao.webp',
  '../guia-pro/imagens/icones/d023_ferramenta.webp', '../guia-pro/imagens/icones/d023_p1.webp', '../guia-pro/imagens/icones/d023_p2.webp',
  '../guia-pro/imagens/icones/d023_p3.webp', '../guia-pro/imagens/icones/d023_p4.webp', '../guia-pro/imagens/icones/d023_p5.webp',
  '../guia-pro/imagens/icones/d023_sistema.webp', '../guia-pro/imagens/icones/d040_aplicacao.webp',
  '../guia-pro/imagens/icones/d040_ferramenta.webp', '../guia-pro/imagens/icones/d040_p1.webp', '../guia-pro/imagens/icones/d040_p2.webp',
  '../guia-pro/imagens/icones/d040_p3.webp', '../guia-pro/imagens/icones/d040_p4.webp', '../guia-pro/imagens/icones/d040_p5.webp',
  '../guia-pro/imagens/icones/d040_sistema.webp', '../guia-pro/imagens/icones/d057_aplicacao.webp',
  '../guia-pro/imagens/icones/d057_ferramenta.webp', '../guia-pro/imagens/icones/d057_p1.webp', '../guia-pro/imagens/icones/d057_p2.webp',
  '../guia-pro/imagens/icones/d057_p3.webp', '../guia-pro/imagens/icones/d057_p4.webp', '../guia-pro/imagens/icones/d057_p5.webp',
  '../guia-pro/imagens/icones/d057_sistema.webp', '../guia-pro/imagens/icones/d058_aplicacao.webp',
  '../guia-pro/imagens/icones/d058_ferramenta.webp', '../guia-pro/imagens/icones/d058_p1.webp', '../guia-pro/imagens/icones/d058_p2.webp',
  '../guia-pro/imagens/icones/d058_p3.webp', '../guia-pro/imagens/icones/d058_p4.webp', '../guia-pro/imagens/icones/d058_p5.webp',
  '../guia-pro/imagens/icones/d058_sistema.webp', '../guia-pro/imagens/icones/d073_aplicacao.webp',
  '../guia-pro/imagens/icones/d073_ferramenta.webp', '../guia-pro/imagens/icones/d073_p1.webp', '../guia-pro/imagens/icones/d073_p2.webp',
  '../guia-pro/imagens/icones/d073_p3.webp', '../guia-pro/imagens/icones/d073_p4.webp', '../guia-pro/imagens/icones/d073_p5.webp',
  '../guia-pro/imagens/icones/d073_sistema.webp', '../guia-pro/imagens/icones/d087_aplicacao.webp',
  '../guia-pro/imagens/icones/d087_ferramenta.webp', '../guia-pro/imagens/icones/d087_p1.webp', '../guia-pro/imagens/icones/d087_p2.webp',
  '../guia-pro/imagens/icones/d087_p3.webp', '../guia-pro/imagens/icones/d087_p4.webp', '../guia-pro/imagens/icones/d087_p5.webp',
  '../guia-pro/imagens/icones/d087_sistema.webp', '../guia-pro/imagens/icones/s04_aplicacao.webp', '../guia-pro/imagens/icones/s04_ferramenta.webp',
  '../guia-pro/imagens/icones/s04_p1.webp', '../guia-pro/imagens/icones/s04_p2.webp', '../guia-pro/imagens/icones/s04_p3.webp',
  '../guia-pro/imagens/icones/s04_p4.webp', '../guia-pro/imagens/icones/s04_p5.webp', '../guia-pro/imagens/icones/s04_sistema.webp',
  '../guia-pro/imagens/icones/s06_aplicacao.webp', '../guia-pro/imagens/icones/s06_ferramenta.webp', '../guia-pro/imagens/icones/s06_p1.webp',
  '../guia-pro/imagens/icones/s06_p2.webp', '../guia-pro/imagens/icones/s06_p3.webp', '../guia-pro/imagens/icones/s06_p4.webp',
  '../guia-pro/imagens/icones/s06_p5.webp', '../guia-pro/imagens/icones/s06_sistema.webp', '../guia-pro/imagens/icones/s07_aplicacao.webp',
  '../guia-pro/imagens/icones/s07_ferramenta.webp', '../guia-pro/imagens/icones/s07_p1.webp', '../guia-pro/imagens/icones/s07_p2.webp',
  '../guia-pro/imagens/icones/s07_p3.webp', '../guia-pro/imagens/icones/s07_p4.webp', '../guia-pro/imagens/icones/s07_p5.webp',
  '../guia-pro/imagens/icones/s07_sistema.webp'
];
// 48 tiles oficiais Option C (t01–t24 e t25–t48) da lista, dos chips, das causas e dos passos (lidos de ../bancada/tiles/, sem cópia).
const TILES = [
  './tiles/t01_alicate.webp', './tiles/t02_multimetro.webp', './tiles/t03_manifold.webp', './tiles/t04_termometro_nivel.webp',
  './tiles/t05_placa_pcb.webp', './tiles/t06_modulo_ipm.webp', './tiles/t07_barramento_pfc.webp', './tiles/t08_fusivel_varistor.webp',
  './tiles/t09_capacitor_uf.webp', './tiles/t10_sensor_ntc.webp', './tiles/t11_bornes_fios.webp', './tiles/t12_disjuntor.webp',
  './tiles/t13_compressor.webp', './tiles/t14_valvula_flange.webp', './tiles/t15_tubulacao_isolada.webp', './tiles/t16_vacuo_botija.webp',
  './tiles/t17_turbina_interna.webp', './tiles/t18_helice_motor.webp', './tiles/t19_serpentina_gelo.webp', './tiles/t20_filtro_serpentina.webp',
  './tiles/t21_bandeja_dreno.webp', './tiles/t22_mangueira_sifao.webp', './tiles/t23_evaporadora_split.webp', './tiles/t24_condensadora_split.webp',
  './tiles/t25_eev_bobina.webp', './tiles/t26_reversora_4vias.webp', './tiles/t27_filtro_capilar.webp', './tiles/t28_tubo_congelado.webp',
  './tiles/t29_tubo_amassado.webp', './tiles/t30_detector_espuma.webp', './tiles/t31_contatora.webp', './tiles/t32_protetor_termico.webp',
  './tiles/t33_bornes_scr.webp', './tiles/t34_rele_placa.webp', './tiles/t35_transformador.webp', './tiles/t36_cabo_interligacao.webp',
  './tiles/t37_ponte_capacitor.webp', './tiles/t38_controle_remoto.webp', './tiles/t39_display_led.webp', './tiles/t40_motor_swing.webp',
  './tiles/t41_pasta_dissipador.webp', './tiles/t42_eeprom_micro.webp', './tiles/t43_bomba_dreno.webp', './tiles/t44_coxim_suporte.webp',
  './tiles/t45_rolamento_bucha.webp', './tiles/t46_condensadora_sol.webp', './tiles/t47_balanca_carga.webp', './tiles/t48_nivel_bolha.webp'
];
const NUCLEO = [PAGINA, ...MOTOR];
const AQUECER = [...DS, ...BASE, ...ARTES, ...TILES];
const TUDO = [...NUCLEO, ...AQUECER];
const abs = (u) => new URL(u, self.location).href;
const URL_PAGINA = abs(PAGINA);
const baixar = async (c, u) => { try { const r = await fetch(u, { cache: 'reload', credentials: 'omit' }); if (r.ok) await c.put(u, r); } catch (err) { } };

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    // Artes, tiles e CSVs que já estavam num cache anterior da Bancada passam para o novo sem tocar na rede.
    const velhos = (await caches.keys()).filter(k => /^bancada-offline-/.test(k) && k !== CACHE);
    for (const k of velhos) { const v = await caches.open(k); for (const u of AQUECER.map(abs)) { if (await c.match(u)) continue; const hit = await v.match(u); if (hit) await c.put(u, hit); } }
    let i = 0;
    const um = async () => { while (i < NUCLEO.length) await baixar(c, abs(NUCLEO[i++])); };
    await Promise.all([um(), um()]);
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => /^bancada(-v2|-v3)?-offline-/.test(k) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Aquecimento em 3 filas paralelas (Pedro, 13/11/2026, vídeo de vendas): as 14 ilustrações principais (d001 a s07) entram primeiro,
// depois Design System, CSVs, ícones e tiles; só o que falta, quando a página avisa que está ociosa (aquecer-artes, 800 ms após carregar).
const PRINCIPAIS = ARTES.filter(u => /\/imagens\/[ds]\d+\.webp$/.test(u));
const FILA_AQUECER = [...PRINCIPAIS, ...AQUECER.filter(u => !PRINCIPAIS.includes(u))];
let AQUECENDO = null;
const aquecer = () => AQUECENDO || (AQUECENDO = caches.open(CACHE).then(async (c) => {
  const fila = FILA_AQUECER.map(abs); let i = 0;
  const fio = async () => { while (i < fila.length) { const u = fila[i++]; if (!(await c.match(u))) await baixar(c, u); } };
  await Promise.all([fio(), fio(), fio()]);
}).finally(() => { AQUECENDO = null; }));
// A página (e a sonda de modo avião) pergunta se o cache já está completo.
self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.tipo === 'aquecer-artes') { e.waitUntil(aquecer()); return; }
  if (d.tipo !== 'status' || !e.source) return;
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    let n = 0, nucleo = 0; const faltam = []; for (const u of TUDO) { if (await c.match(abs(u))) { n++; if (NUCLEO.includes(u)) nucleo++; } else faltam.push(u); }
    e.source.postMessage({ tipo: 'status', cache: CACHE, guardados: n, total: TUDO.length, nucleo, totalNucleo: NUCLEO.length, aquecendo: !!AQUECENDO, faltam });
  }));
});

const guardar = (chave, r) => { if (r && r.ok) { const cp = r.clone(); return caches.open(CACHE).then(c => c.put(chave, cp)).catch(() => {}); } return Promise.resolve(); };
const doCache = async (chave, req) => { const c = await caches.open(CACHE); return (await c.match(chave)) || (req.mode === 'navigate' ? await c.match(URL_PAGINA) : null); };
// Atualização silenciosa (CSVs e arquivos do Design System): cada um é revalidado no máximo 1 vez por vida do service worker.
const REVALIDADO = new Set();
const NUCLEO_URL = new Set(NUCLEO.map(abs));
// Página e núcleo: rede primeiro com prazo curto; a resposta nova entra no cache na hora (mesmo se chegar depois do prazo).
const redePrimeiro = (e, chave, req) => {
  const rede = fetch(req.mode === 'navigate' ? URL_PAGINA : chave, { cache: 'no-cache', credentials: 'omit' }).then((r) => { if (r && r.ok) { e.waitUntil(guardar(chave, r.clone())); return r; } throw new Error('HTTP ' + (r && r.status)); });
  return new Promise((ok) => {
    let feito = false; const entrega = (r) => { if (!feito && r) { feito = true; ok(r); } };
    const doCacheJa = async () => { const hit = await doCache(chave, req); if (hit) entrega(hit); else rede.then(entrega, () => entrega(Response.error())); };
    const relogio = setTimeout(doCacheJa, PRAZO_REDE_MS);
    rede.then((r) => { clearTimeout(relogio); entrega(r); }, () => { clearTimeout(relogio); doCacheJa(); });
  });
};

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  // A página é uma só: ?testarSeguranca=1 e #D-xxx abrem a mesma cópia guardada.
  const chave = req.mode === 'navigate' ? URL_PAGINA : req.url.split('#')[0];
  if (req.mode === 'navigate' || NUCLEO_URL.has(chave)) { e.respondWith(redePrimeiro(e, chave, req)); return; }
  const versionado = /\.(js|csv|html|json)$/.test(url.pathname);
  e.respondWith((async () => {
    const hit = await doCache(chave, req);
    if (hit) {
      if (versionado && !REVALIDADO.has(chave)) { REVALIDADO.add(chave); e.waitUntil(fetch(req.mode === 'navigate' ? URL_PAGINA : chave, { cache: 'no-store', credentials: 'omit' }).then(r => guardar(chave, r)).catch(() => {})); }
      return hit;
    }
    const r = await fetch(req.mode === 'navigate' ? req.url : req);
    e.waitUntil(guardar(chave, r));
    return r;
  })());
});

// GeloPro · Bancada GeloPRO em modo avião — 12/11/2026 — versão oficial e única em /bancada/ (escopo ./, Design System v4 transplantado 1:1).
// Cache bancada-offline-v11 (12/11/2026, + PDF Executivo v4 em ./pdf-bancada-v4.js): o activate apaga todo cache antigo da Bancada (bancada-offline-* diferente, bancada-v2-offline-* e
// bancada-v3-offline-*, das versões aposentadas em historico-versoes/); o do app e o do guia ficam intactos. No 1º acesso com sinal o
// install guarda tudo o que as 4 teclas usam: a página, o motor (QR, Pix, marca, PDF, licença), os arquivos literais do Design System
// em ./ds/, as fontes locais (./fontes), o mascote, os 19 CSVs da base técnica, as 126 artes de ../guia-pro/imagens/ e os 48 tiles de
// ./tiles/. Com sinal: página, .js, .html, .json e .csv vão à rede primeiro (3 s de prazo) e atualizam o cache; artes, fontes e imagens
// saem do cache e só vão à rede se faltarem.
'use strict';
const CACHE = 'bancada-offline-v11'; // v11 (12/11/2026): + PDF Executivo v4 (pdf-bancada-v4.js)
const REDE_MS = 3000;
const PAGINA = './';
const MOTOR = [
  '../app/vendor/qrcode-generator-1.4.4.js', '../app/gelopro-pix.js', '../app/marca-gelopro.js', '../app/pdf-gelopro.js', '../app/licenca-gelopro.js',
  './pdf-bancada-v4.js', './ds/estilos.js', './ds/gerador-copias.js', './ds/icones.json', './ds/InstrumentosVivos.dc.html', './ds/InstrumentosVivosEscuro.dc.html', './ds/LogoMarca.dc.html',
  './fontes/barlow-semi-condensed-latin-500-normal.woff2', './fontes/barlow-semi-condensed-latin-600-normal.woff2', './fontes/barlow-semi-condensed-latin-700-normal.woff2',
  './fontes/barlow-semi-condensed-latin-800-normal.woff2', './fontes/jetbrains-mono-latin-500-normal.woff2', './fontes/jetbrains-mono-latin-700-normal.woff2',
  '../app/marca/gelopro-mascote.png'
];
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
const TUDO = [PAGINA, ...MOTOR, ...BASE, ...ARTES, ...TILES];
const abs = (u) => new URL(u, self.location).href;
const URL_PAGINA = abs(PAGINA);

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    let i = 0;
    const um = async () => { while (i < TUDO.length) { const u = abs(TUDO[i++]); try { const r = await fetch(u, { cache: 'reload', credentials: 'omit' }); if (r.ok) await c.put(u, r); } catch (err) { } } };
    await Promise.all([um(), um(), um(), um()]);
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => /^bancada(-v2|-v3)?-offline-/.test(k) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// A página (e a sonda de modo avião) pergunta se o cache já está completo.
self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.tipo !== 'status' || !e.source) return;
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    let n = 0; const faltam = []; for (const u of TUDO) { if (await c.match(abs(u))) n++; else faltam.push(u); }
    e.source.postMessage({ tipo: 'status', cache: CACHE, guardados: n, total: TUDO.length, faltam });
  }));
});

const guardar = (chave, r) => { if (r && r.ok) { const cp = r.clone(); return caches.open(CACHE).then(c => c.put(chave, cp)).catch(() => {}); } return Promise.resolve(); };
const doCache = async (chave, req) => { const c = await caches.open(CACHE); return (await c.match(chave)) || (req.mode === 'navigate' ? await c.match(URL_PAGINA) : null); };

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  // A página é uma só: ?testarSeguranca=1 e #D-xxx abrem a mesma cópia guardada.
  const chave = req.mode === 'navigate' ? URL_PAGINA : req.url.split('#')[0];
  const fresco = req.mode === 'navigate' || /\.(js|csv|html|json)$/.test(url.pathname);
  if (fresco) {
    e.respondWith((async () => {
      const rede = fetch(req.mode === 'navigate' ? req.url : chave, { cache: 'no-store', credentials: 'omit' }).then((r) => { if (r && r.ok) e.waitUntil(guardar(chave, r)); return r; });
      rede.catch(() => {});
      let relogio;
      const prazo = new Promise((ok) => { relogio = setTimeout(ok, REDE_MS, null); });
      try {
        const r = await Promise.race([rede, prazo]);
        clearTimeout(relogio);
        if (r) return r;
        return (await doCache(chave, req)) || await rede;
      } catch (err) {
        clearTimeout(relogio);
        const hit = await doCache(chave, req);
        if (hit) return hit;
        throw err;
      }
    })());
    return;
  }
  e.respondWith((async () => {
    const hit = await doCache(chave, req);
    if (hit) return hit;
    const r = await fetch(req);
    e.waitUntil(guardar(chave, r));
    return r;
  })());
});

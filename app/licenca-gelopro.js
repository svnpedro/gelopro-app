// GeloPro · Licença por compra (PR #58). Integração do app com POST /api/licenca (infra/geloproapp/functions/api/licenca.js).
// Desenho: skills/anti-piracy-and-cloudflare-deploy.md. O técnico ativa com o CPF ou o WhatsApp da compra, sem senha; o servidor limita a
// 2 aparelhos e trava a titularidade (nome, CPF/CNPJ, Pix) na 1ª ativação. O crachá (plano, bumps, titular, última checagem) fica no
// localStorage e no IndexedDB e NUNCA expira por falta de sinal. Com sinal, uma checagem silenciosa (prazo de 3 s, como o sw.js) traz bumps
// comprados depois e aplica reembolso ou cancelamento (LICENCA_BLOQUEADA) na próxima conexão. Erro de rede ou 5xx não bloqueia ninguém.
// Ponte: se /api/licenca não existir (404 sem código, rede fora), o app segue no fluxo local de sempre (?ativar= e Amostra).
// /api/* nunca entra no cache do service worker (o sw.js só guarda GET e pula /api/).
(function () {
  'use strict';
  const K_DEV = 'gelopro.aparelho', K_CRACHA = 'gelopro.cracha', API = '/api/licenca', PRAZO_CHECAGEM = 3000, PRAZO_ATIVACAO = 8000;
  const CODIGOS = ['NAO_ENCONTRADA', 'LICENCA_BLOQUEADA', 'PLANO_EXPIRADO_90D', 'LIMITE_APARELHOS', 'DADOS_INCOMPLETOS'];
  // Mesma sanitização do app (limparTxt): sem tag HTML, sem < >, até 120 letras.
  const limpar = (s) => String(s == null ? '' : s).replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim().slice(0, 120);
  const lerLS = (k) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } };
  const gravarLS = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* aparelho sem espaço */ } };

  // IndexedDB: cópia de segurança do crachá e do deviceId (limpeza do localStorage não apaga a ativação).
  const idb = () => new Promise((ok, erro) => {
    if (!window.indexedDB) return erro(new Error('sem IndexedDB'));
    const r = indexedDB.open('gelopro-licenca', 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('kv')) r.result.createObjectStore('kv'); };
    r.onsuccess = () => ok(r.result); r.onerror = () => erro(r.error);
  });
  const idbPor = async (k, v) => { try { const db = await idb(); await new Promise((ok) => { const t = db.transaction('kv', 'readwrite'); if (v == null) t.objectStore('kv').delete(k); else t.objectStore('kv').put(JSON.stringify(v), k); t.oncomplete = t.onerror = t.onabort = ok; }); db.close(); } catch (e) { /* segue só com localStorage */ } };
  const idbLer = async (k) => { try { const db = await idb(); const v = await new Promise((ok) => { const g = db.transaction('kv').objectStore('kv').get(k); g.onsuccess = () => ok(g.result); g.onerror = () => ok(null); }); db.close(); return v ? JSON.parse(v) : null; } catch (e) { return null; } };
  const guardar = (k, v) => { gravarLS(k, v); return idbPor(k, v); };

  const novoId = () => { try { if (crypto.randomUUID) return crypto.randomUUID(); const b = crypto.getRandomValues(new Uint8Array(16)); return [...b].map(x => x.toString(16).padStart(2, '0')).join(''); } catch (e) { return 'gp-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2); } };
  function deviceId() {
    let id = lerLS(K_DEV);
    if (typeof id !== 'string' || id.length < 8) { id = novoId(); guardar(K_DEV, id); }
    return id;
  }
  const cracha = () => lerLS(K_CRACHA);

  // Uma chamada ao servidor. tipo: 'ok' | 'erro' (código do contrato) | 'sem-servidor' (404 sem código ou rede fora) | 'falha' (5xx ou resposta estranha).
  async function chamar(corpo, prazo) {
    const ctl = window.AbortController ? new AbortController() : null, relogio = ctl ? setTimeout(() => ctl.abort(), prazo) : null;
    try {
      const r = await fetch(new URL(API, location.origin).href, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(corpo), cache: 'no-store', credentials: 'omit', signal: ctl ? ctl.signal : undefined });
      let j = null; try { j = await r.json(); } catch (e) { j = null; }
      if (j && j.ok === true) return { tipo: 'ok', dados: j };
      if (j && CODIGOS.includes(j.codigo)) return { tipo: 'erro', codigo: j.codigo, dados: j };
      if (r.status === 404 || r.status === 405) return { tipo: 'sem-servidor', status: r.status };
      return { tipo: 'falha', status: r.status };
    } catch (e) { return { tipo: 'sem-servidor', status: 0 }; } finally { if (relogio) clearTimeout(relogio); }
  }
  const titularLimpo = (t) => t ? { nome: limpar(t.nome), doc: limpar(t.doc), cidade: limpar(t.cidade), pix: limpar(t.pix) } : undefined;
  const montar = (id, d, antes) => ({ fonte: 'servidor', identificador: id, plano: d.plano, bumps: Array.isArray(d.bumps) ? d.bumps.map(limpar) : [], titular: titularLimpo(d.titular) || null,
    exigeCadastroTitular: !!d.exigeCadastroTitular, aparelhoNumero: d.aparelhoNumero || null, maxAparelhos: d.maxAparelhos || 2, ativadoEm: (antes && antes.ativadoEm) || Date.now(), ultimaChecagem: Date.now(), bloqueado: false });

  // Ativação pelo CPF, WhatsApp ou e-mail da compra (titular opcional: só na 1ª ativação, quando o servidor pede o cadastro).
  async function ativar(identificador, titular) {
    const id = limpar(identificador);
    if (!id) return { tipo: 'erro', codigo: 'DADOS_INCOMPLETOS' };
    const r = await chamar({ identificador: id, deviceId: deviceId(), titular: titularLimpo(titular) }, PRAZO_ATIVACAO);
    if (r.tipo === 'ok') { const c = montar(id, r.dados, cracha()); await guardar(K_CRACHA, c); r.cracha = c; }
    return r;
  }
  // Checagem silenciosa: só com crachá do servidor e com sinal. Bloqueio só com LICENCA_BLOQUEADA vindo do servidor.
  async function checar() {
    const c = cracha();
    if (!c || c.fonte !== 'servidor' || !c.identificador) return { tipo: 'sem-cracha' };
    if (navigator.onLine === false) return { tipo: 'offline', cracha: c };
    const r = await chamar({ identificador: c.identificador, deviceId: deviceId(), titular: c.titularPendente || undefined }, PRAZO_CHECAGEM);
    if (r.tipo === 'ok') { const n = montar(c.identificador, r.dados, c); if (c.titularPendente && !r.dados.titular) n.titularPendente = c.titularPendente; await guardar(K_CRACHA, n); r.cracha = n; }
    else if (r.tipo === 'erro' && r.codigo === 'LICENCA_BLOQUEADA') { const n = { ...c, bloqueado: true, ultimaChecagem: Date.now() }; await guardar(K_CRACHA, n); r.cracha = n; }
    else if (r.tipo === 'erro' && r.codigo === 'PLANO_EXPIRADO_90D') { const n = { ...c, expirado: true, ultimaChecagem: Date.now() }; await guardar(K_CRACHA, n); r.cracha = n; }
    else r.cracha = c; // rede fora, 5xx, 404 ou outro código: o crachá segue valendo
    return r;
  }
  // Titular cadastrado no 1º aparelho: sobe para o servidor junto da compra. Sem sinal, fica pendente e sobe na próxima checagem.
  async function enviarTitular(titular) {
    const c = cracha(); if (!c || c.fonte !== 'servidor') return { tipo: 'sem-cracha' };
    const t = titularLimpo(titular), r = await ativar(c.identificador, t);
    if (r.tipo !== 'ok') await guardar(K_CRACHA, { ...c, titularPendente: t });
    return r;
  }
  // Recupera do IndexedDB o que o localStorage perdeu (crachá e deviceId). Devolve o crachá recuperado, se houver.
  async function restaurar() {
    const [c, d] = [cracha(), lerLS(K_DEV)];
    if (!d) { const di = await idbLer(K_DEV); if (typeof di === 'string' && di.length >= 8) gravarLS(K_DEV, di); }
    if (c) return null;
    const ci = await idbLer(K_CRACHA); if (ci && ci.fonte === 'servidor') { gravarLS(K_CRACHA, ci); return ci; }
    return null;
  }
  const esquecer = () => guardar(K_CRACHA, null);

  window.GeloProLicenca = { API, deviceId, cracha, ativar, checar, enviarTitular, restaurar, esquecer, limpar };
  try { window.dispatchEvent(new Event('gelopro:licenca-pronta')); } catch (e) { /* navegador antigo */ }
})();

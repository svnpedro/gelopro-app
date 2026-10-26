// GeloPro · Pix estático (BR Code / EMV). Sem rede: só monta o texto do QR.
(function () {
  const tira = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9 .\-\/]/g, '').toUpperCase().trim();
  const campo = (id, v) => id + String(v.length).padStart(2, '0') + v;
  const crc16 = (s) => { let c = 0xFFFF; for (let i = 0; i < s.length; i++) { c ^= s.charCodeAt(i) << 8; for (let j = 0; j < 8; j++) c = (c & 0x8000) ? ((c << 1) ^ 0x1021) & 0xFFFF : (c << 1) & 0xFFFF; } return c.toString(16).toUpperCase().padStart(4, '0'); };
  function payload({ chave, nome, cidade, valor, txid, descricao }) {
    if (!chave) throw new Error('Chave Pix ausente');
    const conta = campo('00', 'br.gov.bcb.pix') + campo('01', String(chave).trim()) + (descricao ? campo('02', tira(descricao).slice(0, 40)) : '');
    const v = Number(valor);
    let p = campo('00', '01') + campo('26', conta) + campo('52', '0000') + campo('53', '986') + (v > 0 ? campo('54', v.toFixed(2)) : '') + campo('58', 'BR') + campo('59', (tira(nome) || 'TITULAR').slice(0, 25)) + campo('60', (tira(cidade) || 'BRASIL').slice(0, 15)) + campo('62', campo('05', (String(txid || '').replace(/[^A-Za-z0-9]/g, '') || '***').slice(0, 25)));
    p += '6304';
    return p + crc16(p);
  }
  window.GeloProPix = { payload, crc16 };
})();

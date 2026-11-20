/* GeloPRO · Loops dos Bônus 01–06 (800×500 · 15,5 s) · gerado a partir de loop01…loop06 (.jsx)
   Palco escalado por ResizeObserver (scale(w/800), origem 0 0) · rAF pausado fora da tela por IntersectionObserver · prefers-reduced-motion mostra o quadro do Laudo parado */
(function () {
  var s = document.currentScript && document.currentScript.src;
  window.GP_BASE = s ? s.replace(/[^/]*$/, '') : 'loops/';
  var f = function (fam, w, file) { return "@font-face{font-family:'" + fam + "';font-weight:" + w + ";font-display:swap;src:url(" + window.GP_BASE + "fonts/" + file + ") format('woff2')}"; };
  var st = document.createElement('style');
  st.textContent = f('Barlow Semi Condensed', 500, 'barlow-500.woff2') + f('Barlow Semi Condensed', 600, 'barlow-600.woff2') + f('Barlow Semi Condensed', 700, 'barlow-700.woff2') + f('Barlow Semi Condensed', 800, 'barlow-800.woff2') + f('JetBrains Mono', 500, 'jbmono-500.woff2') + f('JetBrains Mono', 700, 'jbmono-700.woff2');
  document.head.appendChild(st);
  window.GPLoops = {};
  window.GPLoopCtx = React.createContext({ T: 0, CUES: { Gancho: 0, Acao: 3.8, LaudoPix: 10.8 } });
})();
(function () {
  const useComposition = () => React.useContext(window.GPLoopCtx);
  const css = s => {
    const o = {};
    s.split(';').forEach(d => {
      const i = d.indexOf(':');
      if (i < 0) return;
      const k = d.slice(0, i).trim();
      if (!k) return;
      o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
    });
    return o;
  };
  const ST = {
    S10: css("box-sizing:border-box;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;line-height:1;letter-spacing:-.02em;white-space:nowrap"),
    S14: css("flex:1;font-size:20px;font-weight:700;letter-spacing:.14em;white-space:nowrap"),
    S21: css("box-sizing:border-box;flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px"),
    S22: css("box-sizing:border-box;flex:none;font:700 12px/1 'JetBrains Mono',monospace;color:#0C2747;padding:8px 8px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:6px"),
    S28: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S37: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S50: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747;border-radius:10px"),
    S86: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#1A8642 0%,#1A8642 45%,#126B34 100%);border:1px solid #14532D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #14532D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S137: css("box-sizing:border-box;flex:none;display:grid;grid-template-columns:1fr 1.25fr 1fr;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px")
  };
  const BG = {
    backgroundColor: '#D6D2C9',
    backgroundImage: 'linear-gradient(180deg,#D6D2C9 0%,#DFDCD5 14%,#CCC8BF 100%)'
  };
  const CARD = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #94A3B8',
    boxShadow: '0 1px 3px rgba(9,30,66,.14)',
    borderRadius: 12
  };
  const MONO = "'JetBrains Mono',monospace";
  const BARLOW = "'Barlow Semi Condensed',sans-serif";
  const DOC = "Arial,'Liberation Sans',Helvetica,sans-serif";
  const QR = {"payload":"00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406380.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10426304EDD5","n":49,"d":"M0 0h7v1h-7zM8 0h2v1h-2zM11 0h1v1h-1zM13 0h3v1h-3zM17 0h1v1h-1zM21 0h1v1h-1zM24 0h1v1h-1zM27 0h1v1h-1zM30 0h2v1h-2zM36 0h2v1h-2zM40 0h1v1h-1zM42 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM9 1h1v1h-1zM11 1h2v1h-2zM14 1h1v1h-1zM17 1h1v1h-1zM19 1h5v1h-5zM25 1h1v1h-1zM30 1h1v1h-1zM32 1h1v1h-1zM35 1h1v1h-1zM38 1h3v1h-3zM42 1h1v1h-1zM48 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h1v1h-1zM16 2h2v1h-2zM21 2h2v1h-2zM26 2h1v1h-1zM29 2h1v1h-1zM32 2h1v1h-1zM34 2h4v1h-4zM39 2h2v1h-2zM42 2h1v1h-1zM44 2h3v1h-3zM48 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM8 3h5v1h-5zM15 3h1v1h-1zM18 3h1v1h-1zM21 3h1v1h-1zM23 3h3v1h-3zM31 3h1v1h-1zM33 3h1v1h-1zM35 3h3v1h-3zM39 3h1v1h-1zM42 3h1v1h-1zM44 3h3v1h-3zM48 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h2v1h-2zM12 4h5v1h-5zM19 4h1v1h-1zM22 4h7v1h-7zM32 4h2v1h-2zM35 4h1v1h-1zM37 4h1v1h-1zM42 4h1v1h-1zM44 4h3v1h-3zM48 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM13 5h1v1h-1zM17 5h1v1h-1zM19 5h2v1h-2zM22 5h1v1h-1zM26 5h2v1h-2zM30 5h1v1h-1zM32 5h1v1h-1zM36 5h3v1h-3zM42 5h1v1h-1zM48 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h7v1h-7zM15 7h3v1h-3zM19 7h1v1h-1zM21 7h2v1h-2zM26 7h4v1h-4zM31 7h1v1h-1zM34 7h3v1h-3zM39 7h2v1h-2zM0 8h4v1h-4zM6 8h1v1h-1zM8 8h1v1h-1zM12 8h1v1h-1zM15 8h1v1h-1zM20 8h7v1h-7zM28 8h4v1h-4zM34 8h1v1h-1zM37 8h1v1h-1zM40 8h2v1h-2zM44 8h3v1h-3zM48 8h1v1h-1zM2 9h1v1h-1zM4 9h1v1h-1zM11 9h1v1h-1zM15 9h1v1h-1zM17 9h1v1h-1zM21 9h1v1h-1zM24 9h1v1h-1zM30 9h1v1h-1zM32 9h1v1h-1zM35 9h1v1h-1zM37 9h1v1h-1zM41 9h5v1h-5zM47 9h2v1h-2zM1 10h1v1h-1zM6 10h3v1h-3zM10 10h1v1h-1zM12 10h2v1h-2zM18 10h1v1h-1zM30 10h1v1h-1zM32 10h1v1h-1zM36 10h1v1h-1zM38 10h1v1h-1zM41 10h1v1h-1zM44 10h1v1h-1zM46 10h1v1h-1zM0 11h1v1h-1zM3 11h1v1h-1zM8 11h7v1h-7zM18 11h1v1h-1zM22 11h3v1h-3zM31 11h2v1h-2zM35 11h3v1h-3zM39 11h1v1h-1zM44 11h1v1h-1zM46 11h2v1h-2zM0 12h1v1h-1zM2 12h1v1h-1zM5 12h2v1h-2zM8 12h3v1h-3zM12 12h3v1h-3zM17 12h1v1h-1zM19 12h1v1h-1zM22 12h1v1h-1zM24 12h1v1h-1zM29 12h3v1h-3zM36 12h1v1h-1zM38 12h5v1h-5zM46 12h1v1h-1zM48 12h1v1h-1zM0 13h1v1h-1zM2 13h2v1h-2zM9 13h3v1h-3zM14 13h1v1h-1zM17 13h1v1h-1zM20 13h2v1h-2zM23 13h1v1h-1zM26 13h3v1h-3zM31 13h3v1h-3zM35 13h4v1h-4zM41 13h1v1h-1zM44 13h2v1h-2zM48 13h1v1h-1zM2 14h1v1h-1zM5 14h3v1h-3zM9 14h1v1h-1zM12 14h2v1h-2zM15 14h2v1h-2zM21 14h3v1h-3zM26 14h1v1h-1zM28 14h1v1h-1zM30 14h4v1h-4zM37 14h2v1h-2zM41 14h3v1h-3zM46 14h1v1h-1zM0 15h1v1h-1zM2 15h3v1h-3zM7 15h1v1h-1zM10 15h2v1h-2zM14 15h2v1h-2zM18 15h1v1h-1zM21 15h1v1h-1zM24 15h3v1h-3zM28 15h1v1h-1zM30 15h3v1h-3zM34 15h1v1h-1zM36 15h3v1h-3zM43 15h1v1h-1zM48 15h1v1h-1zM2 16h1v1h-1zM4 16h4v1h-4zM10 16h2v1h-2zM13 16h5v1h-5zM19 16h1v1h-1zM29 16h1v1h-1zM32 16h3v1h-3zM37 16h1v1h-1zM43 16h2v1h-2zM47 16h1v1h-1zM2 17h3v1h-3zM8 17h1v1h-1zM11 17h1v1h-1zM16 17h4v1h-4zM22 17h2v1h-2zM27 17h1v1h-1zM31 17h4v1h-4zM39 17h3v1h-3zM43 17h1v1h-1zM46 17h1v1h-1zM1 18h1v1h-1zM3 18h6v1h-6zM11 18h2v1h-2zM18 18h1v1h-1zM21 18h1v1h-1zM23 18h2v1h-2zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h1v1h-1zM35 18h1v1h-1zM37 18h1v1h-1zM42 18h1v1h-1zM45 18h1v1h-1zM47 18h2v1h-2zM0 19h4v1h-4zM5 19h1v1h-1zM8 19h3v1h-3zM13 19h3v1h-3zM24 19h1v1h-1zM26 19h1v1h-1zM28 19h1v1h-1zM34 19h1v1h-1zM36 19h1v1h-1zM38 19h1v1h-1zM40 19h1v1h-1zM43 19h1v1h-1zM3 20h1v1h-1zM5 20h3v1h-3zM9 20h3v1h-3zM13 20h1v1h-1zM16 20h1v1h-1zM19 20h1v1h-1zM21 20h1v1h-1zM25 20h5v1h-5zM34 20h1v1h-1zM38 20h2v1h-2zM43 20h1v1h-1zM45 20h1v1h-1zM47 20h2v1h-2zM1 21h3v1h-3zM5 21h1v1h-1zM7 21h1v1h-1zM9 21h2v1h-2zM13 21h1v1h-1zM16 21h5v1h-5zM22 21h1v1h-1zM24 21h1v1h-1zM27 21h6v1h-6zM35 21h3v1h-3zM41 21h2v1h-2zM45 21h3v1h-3zM1 22h2v1h-2zM4 22h7v1h-7zM14 22h1v1h-1zM16 22h1v1h-1zM21 22h10v1h-10zM32 22h1v1h-1zM35 22h1v1h-1zM39 22h7v1h-7zM47 22h1v1h-1zM2 23h1v1h-1zM4 23h1v1h-1zM8 23h1v1h-1zM12 23h4v1h-4zM18 23h1v1h-1zM20 23h1v1h-1zM22 23h1v1h-1zM26 23h1v1h-1zM28 23h2v1h-2zM32 23h1v1h-1zM34 23h1v1h-1zM37 23h1v1h-1zM39 23h2v1h-2zM44 23h3v1h-3zM0 24h2v1h-2zM4 24h1v1h-1zM6 24h1v1h-1zM8 24h2v1h-2zM11 24h2v1h-2zM16 24h1v1h-1zM18 24h3v1h-3zM22 24h1v1h-1zM24 24h1v1h-1zM26 24h1v1h-1zM29 24h2v1h-2zM33 24h6v1h-6zM40 24h1v1h-1zM42 24h1v1h-1zM44 24h1v1h-1zM48 24h1v1h-1zM3 25h2v1h-2zM8 25h1v1h-1zM10 25h4v1h-4zM18 25h1v1h-1zM20 25h3v1h-3zM26 25h1v1h-1zM29 25h1v1h-1zM31 25h3v1h-3zM38 25h3v1h-3zM44 25h1v1h-1zM47 25h1v1h-1zM0 26h3v1h-3zM4 26h6v1h-6zM11 26h1v1h-1zM14 26h1v1h-1zM16 26h3v1h-3zM22 26h9v1h-9zM34 26h2v1h-2zM38 26h1v1h-1zM40 26h8v1h-8zM3 27h1v1h-1zM5 27h1v1h-1zM9 27h4v1h-4zM14 27h2v1h-2zM20 27h2v1h-2zM24 27h10v1h-10zM35 27h1v1h-1zM39 27h2v1h-2zM45 27h1v1h-1zM47 27h2v1h-2zM0 28h2v1h-2zM4 28h4v1h-4zM10 28h1v1h-1zM12 28h2v1h-2zM15 28h1v1h-1zM18 28h3v1h-3zM23 28h1v1h-1zM26 28h1v1h-1zM29 28h4v1h-4zM35 28h1v1h-1zM42 28h1v1h-1zM45 28h4v1h-4zM1 29h1v1h-1zM3 29h2v1h-2zM8 29h1v1h-1zM10 29h1v1h-1zM12 29h2v1h-2zM16 29h1v1h-1zM19 29h1v1h-1zM22 29h2v1h-2zM25 29h3v1h-3zM29 29h1v1h-1zM33 29h2v1h-2zM37 29h1v1h-1zM39 29h1v1h-1zM43 29h1v1h-1zM47 29h2v1h-2zM0 30h2v1h-2zM3 30h1v1h-1zM5 30h2v1h-2zM8 30h1v1h-1zM11 30h3v1h-3zM18 30h2v1h-2zM24 30h2v1h-2zM27 30h1v1h-1zM33 30h2v1h-2zM36 30h1v1h-1zM38 30h2v1h-2zM41 30h6v1h-6zM48 30h1v1h-1zM0 31h3v1h-3zM4 31h2v1h-2zM9 31h1v1h-1zM12 31h3v1h-3zM18 31h1v1h-1zM20 31h1v1h-1zM22 31h1v1h-1zM25 31h1v1h-1zM29 31h1v1h-1zM32 31h1v1h-1zM34 31h2v1h-2zM37 31h4v1h-4zM43 31h1v1h-1zM45 31h1v1h-1zM47 31h1v1h-1zM1 32h3v1h-3zM6 32h1v1h-1zM11 32h3v1h-3zM15 32h1v1h-1zM20 32h1v1h-1zM22 32h3v1h-3zM27 32h2v1h-2zM33 32h3v1h-3zM37 32h2v1h-2zM44 32h1v1h-1zM46 32h1v1h-1zM0 33h2v1h-2zM3 33h3v1h-3zM7 33h2v1h-2zM12 33h4v1h-4zM17 33h1v1h-1zM21 33h2v1h-2zM24 33h1v1h-1zM26 33h1v1h-1zM30 33h1v1h-1zM40 33h1v1h-1zM45 33h1v1h-1zM48 33h1v1h-1zM2 34h2v1h-2zM5 34h4v1h-4zM14 34h1v1h-1zM17 34h1v1h-1zM19 34h1v1h-1zM23 34h2v1h-2zM26 34h2v1h-2zM30 34h4v1h-4zM35 34h1v1h-1zM37 34h1v1h-1zM44 34h1v1h-1zM46 34h1v1h-1zM0 35h1v1h-1zM2 35h1v1h-1zM4 35h2v1h-2zM7 35h2v1h-2zM10 35h2v1h-2zM16 35h2v1h-2zM19 35h1v1h-1zM26 35h2v1h-2zM30 35h3v1h-3zM34 35h3v1h-3zM38 35h1v1h-1zM41 35h3v1h-3zM46 35h1v1h-1zM0 36h1v1h-1zM6 36h2v1h-2zM10 36h1v1h-1zM12 36h1v1h-1zM15 36h1v1h-1zM18 36h1v1h-1zM21 36h3v1h-3zM29 36h3v1h-3zM34 36h1v1h-1zM36 36h1v1h-1zM38 36h2v1h-2zM41 36h2v1h-2zM46 36h2v1h-2zM1 37h1v1h-1zM4 37h1v1h-1zM7 37h1v1h-1zM9 37h2v1h-2zM12 37h5v1h-5zM19 37h1v1h-1zM22 37h2v1h-2zM27 37h2v1h-2zM31 37h3v1h-3zM35 37h1v1h-1zM37 37h2v1h-2zM41 37h4v1h-4zM48 37h1v1h-1zM1 38h1v1h-1zM5 38h3v1h-3zM9 38h1v1h-1zM12 38h3v1h-3zM18 38h5v1h-5zM25 38h1v1h-1zM27 38h1v1h-1zM30 38h1v1h-1zM32 38h1v1h-1zM36 38h1v1h-1zM38 38h1v1h-1zM40 38h2v1h-2zM45 38h2v1h-2zM1 39h3v1h-3zM8 39h4v1h-4zM13 39h1v1h-1zM16 39h1v1h-1zM18 39h3v1h-3zM22 39h1v1h-1zM24 39h3v1h-3zM31 39h1v1h-1zM33 39h2v1h-2zM36 39h1v1h-1zM40 39h1v1h-1zM42 39h1v1h-1zM47 39h1v1h-1zM0 40h3v1h-3zM6 40h3v1h-3zM11 40h1v1h-1zM14 40h4v1h-4zM19 40h1v1h-1zM21 40h7v1h-7zM31 40h2v1h-2zM34 40h1v1h-1zM38 40h1v1h-1zM40 40h5v1h-5zM47 40h1v1h-1zM8 41h2v1h-2zM11 41h1v1h-1zM14 41h1v1h-1zM16 41h4v1h-4zM21 41h2v1h-2zM26 41h4v1h-4zM31 41h4v1h-4zM37 41h1v1h-1zM40 41h1v1h-1zM44 41h3v1h-3zM0 42h7v1h-7zM11 42h7v1h-7zM21 42h2v1h-2zM24 42h1v1h-1zM26 42h2v1h-2zM30 42h4v1h-4zM35 42h4v1h-4zM40 42h1v1h-1zM42 42h1v1h-1zM44 42h5v1h-5zM0 43h1v1h-1zM6 43h1v1h-1zM9 43h2v1h-2zM15 43h4v1h-4zM20 43h3v1h-3zM26 43h1v1h-1zM28 43h1v1h-1zM30 43h1v1h-1zM33 43h2v1h-2zM36 43h1v1h-1zM38 43h3v1h-3zM44 43h1v1h-1zM48 43h1v1h-1zM0 44h1v1h-1zM2 44h3v1h-3zM6 44h1v1h-1zM10 44h2v1h-2zM14 44h5v1h-5zM21 44h8v1h-8zM34 44h2v1h-2zM37 44h1v1h-1zM39 44h7v1h-7zM0 45h1v1h-1zM2 45h3v1h-3zM6 45h1v1h-1zM8 45h1v1h-1zM12 45h1v1h-1zM15 45h1v1h-1zM18 45h1v1h-1zM21 45h1v1h-1zM23 45h1v1h-1zM27 45h1v1h-1zM29 45h3v1h-3zM35 45h3v1h-3zM39 45h2v1h-2zM42 45h4v1h-4zM0 46h1v1h-1zM2 46h3v1h-3zM6 46h1v1h-1zM8 46h1v1h-1zM10 46h1v1h-1zM14 46h2v1h-2zM17 46h1v1h-1zM19 46h2v1h-2zM23 46h1v1h-1zM25 46h1v1h-1zM28 46h3v1h-3zM34 46h3v1h-3zM41 46h2v1h-2zM44 46h5v1h-5zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h1v1h-1zM13 47h2v1h-2zM16 47h1v1h-1zM19 47h1v1h-1zM21 47h1v1h-1zM23 47h1v1h-1zM25 47h1v1h-1zM28 47h4v1h-4zM33 47h1v1h-1zM35 47h3v1h-3zM39 47h2v1h-2zM45 47h2v1h-2zM0 48h7v1h-7zM8 48h1v1h-1zM10 48h2v1h-2zM15 48h2v1h-2zM18 48h4v1h-4zM23 48h4v1h-4zM30 48h2v1h-2zM34 48h1v1h-1zM36 48h2v1h-2zM39 48h1v1h-1zM43 48h1v1h-1zM45 48h1v1h-1zM47 48h2v1h-2z"};
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1,
      bx = 3 * (x2 - x1) - cx,
      ax = 1 - cx - bx,
      cy = 3 * y1,
      by = 3 * (y2 - y1) - cy,
      ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t,
      sy = t => ((ay * t + by) * t + cy) * t;
    return x => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0,
        hi = 1,
        t = x;
      for (let i = 0; i < 26; i++) {
        t = (lo + hi) / 2;
        if (sx(t) < x) lo = t;else hi = t;
      }
      return sy(t);
    };
  }
  const CURVA = bezier(0.22, 1, 0.36, 1);
  const p01 = (T, s, e) => e <= s ? T >= s ? 1 : 0 : Math.min(1, Math.max(0, (T - s) / (e - s)));
  const MOTION = {
    enter: (T, s, e) => CURVA(p01(T, s, e)),
    press: (T, at) => 1 - 0.07 * Math.sin(Math.PI * p01(T, at - 0.1, at + 0.24)),
    pulse: (t, per) => 0.5 - 0.5 * Math.cos(2 * Math.PI * t / per)
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  const R_ = (x, y, w, h, r) => 'M' + (x + r) + ' ' + y + 'h' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + ' ' + r + 'h-' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + '-' + r + 'v-' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + '-' + r + 'z';
  const C_ = (x, y, r) => 'M' + (x + r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 1-' + 2 * r + ' 0 ' + r + ' ' + r + ' 0 0 1 ' + 2 * r + ' 0z';
  const IC = {
    prancheta: [R_(8, 2, 8, 4, 1), 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
    multimetro: [R_(5, 2, 14, 20, 2), R_(8, 5, 8, 4, 0.5), C_(12, 15, 2.5), 'M12 15l1.5-1.5'],
    sol: [C_(12, 12, 4), 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
    documento: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'],
    raio: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
    desliga: ['M12 2v10', 'M18.4 6.6a9 9 0 1 1-12.77.04'],
    ok: ['M20 6 9 17l-5-5'],
    fechar: ['M18 6 6 18', 'm6 6 12 12']
  };
  function Ic({
    n,
    s = 20,
    c = '#334155',
    w = 1.6
  }) {
    return React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: c,
      strokeWidth: w,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, IC[n].map((d, i) => React.createElement("path", {
      key: i,
      d: d
    })));
  }
  function useAnchors(rootRef) {
    const els = React.useRef({});
    const [pos, setPos] = React.useState({});
    const ref = k => el => {
      if (el) els.current[k] = el;
    };
    React.useLayoutEffect(() => {
      const medir = () => {
        const root = rootRef.current;
        if (!root) return;
        const out = {};
        Object.keys(els.current).forEach(k => {
          const el = els.current[k];
          let x = 0,
            y = 0,
            e = el;
          while (e && e !== root) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
          }
          out[k] = {
            x: Math.round(x + el.offsetWidth / 2),
            y: Math.round(y + el.offsetHeight / 2),
            w: el.offsetWidth
          };
        });
        setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
      };
      medir();
      const t1 = setTimeout(medir, 400),
        t2 = setTimeout(medir, 1500);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return {
      ref,
      pos
    };
  }
  const MAO = 'M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L6 14Z';
  function Hand({
    T,
    A,
    moves,
    taps = [],
    start,
    o
  }) {
    if (o <= 0.001) return null;
    let cur = start,
      prev = start;
    for (const m of moves) {
      const tg = typeof m.to === 'string' ? A.pos[m.to] : m.to;
      if (!tg) return null;
      const pt = {
        x: tg.x + (m.dx || 0),
        y: tg.y + (m.dy || 0)
      };
      if (T < m.s) break;
      const p = MOTION.enter(T, m.s, m.e);
      cur = {
        x: lerp(prev.x, pt.x, p),
        y: lerp(prev.y, pt.y, p)
      };
      prev = pt;
    }
    let sc = 1;
    taps.forEach(t => {
      sc *= MOTION.press(T, t);
    });
    const rip = taps.map(t => {
      const p = p01(T, t, t + 0.6);
      return p > 0 && p < 1 ? p : null;
    }).find(p => p !== null);
    const k = 50 / 24,
      ox = 8 * k,
      oy = 2.2 * k;
    return React.createElement(React.Fragment, null, rip != null && React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid #FFB020',
        zIndex: 49,
        pointerEvents: 'none',
        opacity: 0.85 * (1 - rip) * o,
        transform: `translate(${cur.x - 28}px,${cur.y - 28}px) scale(${0.3 + 0.9 * CURVA(rip)})`
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        zIndex: 50,
        pointerEvents: 'none',
        opacity: o,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `translate(${cur.x - ox}px,${cur.y - oy}px) scale(${sc})`
      }
    }, React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        filter: 'drop-shadow(0 4px 6px rgba(9,30,66,.35))'
      }
    }, React.createElement("path", {
      d: MAO,
      fill: "#FFFFFF",
      stroke: "#0C2747",
      strokeWidth: "1.3",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 9.5V12M14 10V12M18 11V12",
      fill: "none",
      stroke: "#0C2747",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    }))));
  }
  function Faixa() {
    const cel = [['MARCA', 'LG'], ['BTU/h', '12.000'], ['FLUIDO', 'R-32']];
    return React.createElement("div", {
      style: {
        ...ST.S137,
        width: 320,
        height: 50
      }
    }, cel.map(([l, v], i) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
        borderLeft: i ? '1px solid rgba(63,50,16,.25)' : 'none'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, l, " \u25BC"), React.createElement("b", {
      style: i ? {
        font: `700 17px/1.25 ${MONO}`
      } : {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, v))));
  }
  const DOCK = [['Sintomas', 'prancheta'], ['Aferir Vivo', 'multimetro'], ['Códigos & LED', 'sol'], ['Ganhos & Laudo', 'documento']];
  function Dock({
    ativa,
    selo,
    rg,
    sg
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 8,
        height: 60,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 8,
        zIndex: 5
      }
    }, DOCK.map(([l, ic], i) => React.createElement("div", {
      key: l,
      ref: i === 3 ? rg : undefined,
      style: {
        ...ST.S10,
        position: 'relative',
        fontSize: 14,
        gap: 6,
        transform: i === 3 ? `scale(${sg})` : 'none'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        width: 36,
        height: 3,
        borderRadius: 2,
        background: i === ativa ? '#FFB020' : '#081B33',
        boxShadow: i === ativa ? '0 0 6px rgba(255,176,32,.8)' : 'none'
      }
    }), React.createElement(Ic, {
      n: ic,
      s: 22,
      c: "#FFFFFF"
    }), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, l), i === 3 && selo && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -9,
        right: 12,
        width: 28,
        height: 28,
        boxSizing: 'border-box',
        borderRadius: '50%',
        background: '#FFB020',
        border: '1px solid #7A4E00',
        color: '#0C2747',
        font: `700 15px/26px ${BARLOW}`,
        textAlign: 'center',
        opacity: selo.o,
        transform: `scale(${selo.s})`
      }
    }, selo.n))));
  }
  function Abas() {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 68,
        height: 44,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 8
      }
    }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
      key: t,
      style: {
        ...(i === 2 ? ST.S50 : {
          ...ST.S28,
          color: '#E0F2FE'
        }),
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '.02em'
      }
    }, t)));
  }
  const Borne = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      minWidth: h,
      height: h,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF',
      border: '1.5px solid #0C2747',
      borderRadius: 6,
      font: `700 ${fs}px/1 ${MONO}`,
      color: '#0C2747'
    }
  }, children);
  const Ponta = ({
    cor,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 21,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: cor === 'v' ? '#C81E1E' : '#111111',
      border: `1px solid ${cor === 'v' ? '#7F1D1D' : '#000000'}`,
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.05em'
    }
  }, "\u25CF ", children);
  const Escala = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 8px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#0C2747',
      border: '1px solid #081B33',
      color: '#FFFFFF',
      font: `700 ${fs}px/1 ${MONO}`,
      letterSpacing: '.04em'
    }
  }, children);
  const Esperado = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 7,
      background: '#DCFCE7',
      border: '1.5px solid #15803D',
      color: '#14532D',
      font: `700 ${fs}px/1 ${MONO}`
    }
  }, children);
  function Tarja({
    energ,
    children,
    cheia
  }) {
    const bg = energ ? '#B91C1C' : '#15803D';
    return React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: cheia ? 24 : 20,
        padding: cheia ? '0 10px' : '0 7px',
        display: 'flex',
        alignItems: 'center',
        gap: cheia ? 7 : 5,
        borderRadius: 6,
        background: bg,
        color: '#FFFFFF',
        fontSize: cheia ? 12 : 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: cheia ? '.08em' : '.1em',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement(Ic, {
      n: energ ? 'raio' : 'desliga',
      s: cheia ? 15 : 12,
      c: "#FFFFFF",
      w: 2
    }), children);
  }
  function BotaoNormal({
    r,
    g = 0,
    s = 1,
    h = 44,
    w,
    fs = 14,
    ls = '.06em'
  }) {
    return React.createElement("div", {
      ref: r,
      style: {
        ...ST.S28,
        position: 'relative',
        minHeight: h,
        height: h,
        width: w,
        fontSize: fs,
        lineHeight: 1,
        letterSpacing: ls,
        transform: `scale(${s})`
      }
    }, g > 0.001 && React.createElement("span", {
      style: {
        ...ST.S86,
        position: 'absolute',
        inset: -1,
        minHeight: 0,
        opacity: g
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 16,
      c: "#FFFFFF",
      w: 2.6
    }), "NORMAL"));
  }
  const ForaFaixa = ({
    h = 44,
    fs = 14,
    ls = '.06em'
  }) => React.createElement("div", {
    style: {
      ...ST.S28,
      minHeight: h,
      height: h,
      gap: 5,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: ls
    }
  }, React.createElement(Ic, {
    n: "fechar",
    s: 14,
    c: "#FFFFFF",
    w: 2.6
  }), "FORA DA FAIXA");
  const LINHA = {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '94px minmax(0,1fr)',
    borderTop: '1px solid #CFCBC2',
    minHeight: 0,
    overflow: 'hidden'
  };
  const ROT = {
    boxSizing: 'border-box',
    background: '#EFEDE8',
    borderRight: '1px solid #CFCBC2',
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.1em',
    color: '#334155',
    lineHeight: 1.15,
    whiteSpace: 'normal'
  };
  const VAL = {
    boxSizing: 'border-box',
    minWidth: 0,
    padding: '4px 8px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#1E293B',
    whiteSpace: 'nowrap'
  };
  const QUEBRA = React.createElement("span", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  });
  function Gancho({
    t,
    o,
    x = 0
  }) {
    const g = MOTION.pulse(t, 1.1);
    const zoom = 1 + 3.5 / 156 * p01(t, 0, 3.8);
    const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55));
    const l1 = MOTION.enter(t, 0.45, 1.05),
      l2 = MOTION.enter(t, 1.05, 1.65);
    const tinta = p => {
      const c = (a, b) => Math.round(lerp(a, b, p));
      return `rgb(${c(255, 12)},${c(255, 39)},${c(255, 71)})`;
    };
    const grifo = (txt, p) => React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '1px 8px 3px',
        margin: '0 -8px',
        borderRadius: 5,
        backgroundImage: 'linear-gradient(#FACC15,#FACC15)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: `${p * 100}% 100%`,
        color: tinta(p)
      }
    }, txt);
    return React.createElement("div", {
      "data-screen-label": `Loop 01 · Gancho · ${Math.floor(t)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 70,
        opacity: o,
        transform: `translateX(${x}px)`,
        background: 'radial-gradient(110% 90% at 28% 40%,#14365F 0%,#0C2747 52%,#081B33 100%)',
        color: '#FFFFFF',
        fontFamily: BARLOW,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 24,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        fontSize: 15,
        lineHeight: 1.2,
        letterSpacing: '.16em'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, "BANCADA GELOPRO"), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#BFD7F2'
      }
    }, "\xB7 INVERTER & IPM")), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        padding: '0 12px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        letterSpacing: '.04em'
      }
    }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 52,
        top: 90,
        width: 260,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22,
        transform: `scale(${zoom})`,
        transformOrigin: '50% 45%'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: 228,
        height: 228,
        borderRadius: 44,
        background: '#0E2240',
        border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
        boxShadow: `0 0 ${16 + 26 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/t06_modulo_ipm.webp",
      alt: "",
      width: "156",
      height: "156",
      style: {
        width: 156,
        height: 156,
        display: 'block',
        borderRadius: 24,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)'
      }
    })), React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 52,
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    background: '#B91C1C',
    border: '1px solid #7F1D1D',
    boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
    font: "800 22px/1.1 'Barlow Semi Condensed',sans-serif",
    letterSpacing: '.04em',
    whiteSpace: 'nowrap',
    transform: `scale(${selo})`
  }
}, "\u2715 QUEIMA NA PARTIDA")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 360,
        right: 36,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        whiteSpace: 'normal'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.16,
        letterSpacing: '-.005em',
        textWrap: 'pretty'
      }
    }, "Queimar placa nova na partida?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.12,
        whiteSpace: 'nowrap'
      }
    }, grifo('Teste IPM, 310 V e UVW', l1), grifo('em 4 passos a frio.', l2))));
  }
  const SEG = {
    0: 'ABCDEF',
    1: 'BC',
    2: 'ABGED',
    3: 'ABGCD',
    4: 'FGBC',
    5: 'AFGCD',
    6: 'AFGECD',
    7: 'ABC',
    8: 'ABCDEFG',
    9: 'ABCDFG'
  };
  const f2 = n => String(+(+n).toFixed(2));
  function segPts(s, x, y, w, h, t) {
    const g = t * 0.14,
      x1 = x + t / 2 + g,
      x2 = x + w - t / 2 - g,
      m = y + h / 2;
    const H = cy => [[x1, cy], [x1 + t / 2, cy - t / 2], [x2 - t / 2, cy - t / 2], [x2, cy], [x2 - t / 2, cy + t / 2], [x1 + t / 2, cy + t / 2]];
    const V = (cx, y1, y2) => [[cx, y1], [cx + t / 2, y1 + t / 2], [cx + t / 2, y2 - t / 2], [cx, y2], [cx - t / 2, y2 - t / 2], [cx - t / 2, y1 + t / 2]];
    return {
      A: H(y + t / 2),
      G: H(m),
      D: H(y + h - t / 2),
      F: V(x + t / 2, y + t / 2 + g, m - g),
      B: V(x + w - t / 2, y + t / 2 + g, m - g),
      E: V(x + t / 2, m + g, y + h - t / 2 - g),
      C: V(x + w - t / 2, m + g, y + h - t / 2 - g)
    }[s];
  }
  const poly = p => 'M' + p.map(q => f2(q[0]) + ' ' + f2(q[1])).join('L') + 'Z';
  function digitos(str) {
    const xr = 89.5,
      y = 25,
      w = 10.5,
      h = 24,
      t = 2.8,
      gap = 3,
      dgap = 7;
    const ds = str.replace('.', ''),
      n = ds.length,
      dot = str.indexOf('.') - 1,
      ex = dot >= 0 ? dgap - gap : 0,
      x0 = xr - (n * w + (n - 1) * gap + ex) - 0.0875 * h,
      dt = Math.max(3, t * 1.15);
    let ghost = '',
      lit = '';
    for (let i = 0; i < n; i++) {
      const x = x0 + i * (w + gap) + (i > dot ? ex : 0);
      'ABCDEFG'.split('').forEach(sg => {
        const p = poly(segPts(sg, x, y, w, h, t));
        ghost += p;
        if (SEG[ds[i]].includes(sg)) lit += p;
      });
      if (i === dot) lit += 'M' + f2(x + w + dgap / 2 - dt / 2) + ' ' + f2(y + h - dt) + 'h' + f2(dt) + 'v' + f2(dt) + 'h-' + f2(dt) + 'Z';
    }
    return {
      ghost,
      lit,
      tx: f2(0.0875 * (y + h))
    };
  }
  function Multimetro({
    leitura,
    h = 160,
    pilula = '20k'
  }) {
    const d = digitos(leitura);
    const P = (a, r) => [60 + r * Math.sin(a * Math.PI / 180), 105 - r * Math.cos(a * Math.PI / 180)];
    const arco = (a1, a2, r, c) => {
      const p = P(a1, r),
        q = P(a2, r);
      return React.createElement("path", {
        d: `M${f2(p[0])} ${f2(p[1])}A${r} ${r} 0 0 1 ${f2(q[0])} ${f2(q[1])}`,
        fill: "none",
        stroke: c,
        strokeWidth: "1.3",
        strokeLinecap: "round"
      });
    };
    const sel = P(216, 26.6);
    const larga = pilula.length > 3;
    return React.createElement("svg", {
      viewBox: "0 0 120 190",
      height: h,
      width: h * 120 / 190,
      style: {
        display: 'block',
        flex: 'none',
        overflow: 'visible'
      }
    }, React.createElement("defs", null, React.createElement("linearGradient", {
      id: "mmY",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#F2B705"
    }), React.createElement("stop", {
      offset: ".1",
      stopColor: "#FFD703"
    }), React.createElement("stop", {
      offset: ".36",
      stopColor: "#FFE74A"
    }), React.createElement("stop", {
      offset: ".68",
      stopColor: "#FFD703"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#F2B705"
    })), React.createElement("linearGradient", {
      id: "mmF",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#2E333B"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#23272E"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#15181C"
    })), React.createElement("radialGradient", {
      id: "mmL",
      cx: ".5",
      cy: ".5",
      r: ".78"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#BAE6FD"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#6C9BF2"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#2563EB"
    })), React.createElement("radialGradient", {
      id: "mmK",
      cx: ".38",
      cy: ".28",
      r: ".85"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#5A636E"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#2E333B"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#15181C"
    }))), React.createElement("rect", {
      x: "11",
      y: "5.5",
      width: "102",
      height: "176",
      rx: "16",
      fill: "#3F3210",
      opacity: ".3"
    }), React.createElement("rect", {
      x: "9",
      y: "2",
      width: "102",
      height: "176",
      rx: "16",
      fill: "url(#mmY)",
      stroke: "#B98708",
      strokeWidth: "1.2"
    }), React.createElement("rect", {
      x: "14.4",
      y: "7.4",
      width: "91.2",
      height: "165.2",
      rx: "10.4",
      fill: "#B98708",
      opacity: ".6"
    }), React.createElement("rect", {
      x: "16",
      y: "9",
      width: "88",
      height: "162",
      rx: "9",
      fill: "url(#mmF)",
      stroke: "#15181C",
      strokeWidth: "1.2"
    }), React.createElement("rect", {
      x: "22",
      y: "15",
      width: "76",
      height: "44",
      rx: "6",
      fill: "#15181C",
      stroke: "#4A515C",
      strokeWidth: ".8"
    }), React.createElement("rect", {
      x: "27",
      y: "19.5",
      width: "66",
      height: "35",
      rx: "1.5",
      fill: "url(#mmL)"
    }), React.createElement("g", {
      transform: `translate(${d.tx} 0) skewX(-5)`
    }, React.createElement("path", {
      d: d.ghost,
      fill: "#0C2747",
      opacity: ".07"
    }), React.createElement("path", {
      d: d.lit,
      fill: "#0C2747"
    })), React.createElement("rect", {
      x: "22",
      y: "62",
      width: "17",
      height: "10",
      rx: "5",
      fill: "#4A515C",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("circle", {
      cx: "92.5",
      cy: "67",
      r: "5.5",
      fill: "url(#mmK)",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("circle", {
      cx: "60",
      cy: "105",
      r: "24.5",
      fill: "#000000",
      opacity: ".6"
    }), arco(-9, 9, 29, '#D43A3A'), arco(14, 40, 29, '#F7F8FA'), arco(50, 130, 29, '#4AF08A'), arco(140, 148, 29, '#F7F8FA'), arco(157, 167, 29, '#D43A3A'), arco(176, 256, 29, '#4AF08A'), arco(266, 346, 29, '#F7F8FA'), React.createElement("circle", {
      cx: f2(sel[0]),
      cy: f2(sel[1]),
      r: "1.9",
      fill: "#4AF08A"
    }), React.createElement("rect", {
      x: larga ? 13 : 19.5,
      y: "131.5",
      width: larga ? 27 : 20,
      height: "11.5",
      rx: "4",
      fill: "#06140C",
      stroke: "#4AF08A",
      strokeWidth: "1"
    }), React.createElement("text", {
      x: larga ? 26.5 : 29.5,
      y: larga ? 140.2 : 141.1,
      textAnchor: "middle",
      fontFamily: "Barlow Semi Condensed,sans-serif",
      fontWeight: "700",
      fontSize: larga ? 8.5 : 11,
      fill: "#4AF08A",
      textLength: larga ? 22 : undefined,
      lengthAdjust: "spacingAndGlyphs"
    }, pilula), React.createElement("circle", {
      cx: "60",
      cy: "105",
      r: "22",
      fill: "url(#mmK)",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("g", {
      transform: "rotate(216 60 105)"
    }, React.createElement("path", {
      d: "M56 87.5Q60 84.2 64 87.5L66.4 122.5Q60 126.6 53.6 122.5Z",
      fill: "#4A515C",
      stroke: "#15181C",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), React.createElement("rect", {
      x: "59",
      y: "86.6",
      width: "2",
      height: "9.5",
      rx: "1",
      fill: "#FFFFFF"
    })), React.createElement("rect", {
      x: "21",
      y: "150",
      width: "78",
      height: "18",
      rx: "5",
      fill: "#000000",
      opacity: ".3"
    }), [38, 60, 82].map(x => React.createElement("g", {
      key: x
    }, React.createElement("circle", {
      cx: x,
      cy: "159",
      r: "6",
      fill: "#8C95A1"
    }), React.createElement("circle", {
      cx: x,
      cy: "159",
      r: "4.5",
      fill: "#15181C"
    }))), React.createElement("rect", {
      x: "58.1",
      y: "166",
      width: "3.8",
      height: "22",
      fill: "#15181C"
    }), React.createElement("rect", {
      x: "55.2",
      y: "152",
      width: "9.6",
      height: "17",
      rx: "3.6",
      fill: "#2E333B",
      stroke: "#5A636E",
      strokeWidth: ".9"
    }), React.createElement("rect", {
      x: "80.1",
      y: "166",
      width: "3.8",
      height: "22",
      fill: "#B91C1C"
    }), React.createElement("rect", {
      x: "77.2",
      y: "152",
      width: "9.6",
      height: "17",
      rx: "3.6",
      fill: "#D43A3A",
      stroke: "#7F1D1D",
      strokeWidth: ".9"
    }));
  }
  const ROTL = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.1em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const LIN = {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#1E293B'
  };
  function FichaDiodo({
    A,
    g,
    s,
    leitura,
    anel
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        position: 'absolute',
        left: 16,
        top: 120,
        width: 368,
        height: 304,
        overflow: 'hidden',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(Tarja, {
      cheia: true
    }, "DESLIGADO \xB7 CAPACITORES DESCARREGADOS")), React.createElement("b", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 1.2,
        color: '#0C2747'
      }
    }, "Diodos do IPM a frio")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("span", {
      style: ROTL
    }, "ONDE MEDIR"), React.createElement("div", {
      style: LIN
    }, React.createElement(Ponta, {
      cor: "v"
    }, "VERMELHA"), "no", React.createElement(Borne, null, "N")), React.createElement("div", {
      style: LIN
    }, React.createElement(Ponta, {
      cor: "p"
    }, "PRETA"), "em", React.createElement(Borne, null, "U"), React.createElement(Borne, null, "V"), React.createElement(Borne, null, "W"))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement("span", {
      style: ROTL
    }, "ESCALA"), React.createElement(Escala, null, "DIODO")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        boxShadow: anel,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("span", {
      style: {
        ...ROTL,
        color: '#14532D'
      }
    }, "\u2713 ESPERADO"), React.createElement("div", {
      style: {
        ...LIN,
        gap: 6
      }
    }, React.createElement(Esperado, null, "0,45 a 0,65 V"), "nas 3 fases"))), React.createElement(Multimetro, {
      leitura: leitura,
      h: 148,
      pilula: "DIODO"
    })), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
      }
    }, React.createElement(BotaoNormal, {
      r: A.ref('ipm'),
      g: g,
      s: s,
      h: 40
    }), React.createElement(ForaFaixa, {
      h: 40
    })));
  }
  function FichaCurta({
    energ,
    tarja,
    escala,
    titulo,
    esq,
    dir,
    r,
    g,
    s
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
        padding: '5px 10px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 104px',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Tarja, {
      energ: energ
    }, tarja), React.createElement(Escala, {
      h: 20,
      fs: 11
    }, escala)), React.createElement("b", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.15,
        color: '#0C2747',
        overflow: 'hidden',
        textOverflow: 'clip'
      }
    }, titulo), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: '100%',
        height: 22,
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        borderRadius: 6,
        fontSize: 12.5,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1E293B',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        minWidth: 0
      }
    }, esq), React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flex: 'none'
      }
    }, dir))), React.createElement(BotaoNormal, {
      r: r,
      g: g,
      s: s,
      h: 48,
      w: 104
    }));
  }
  const ROTD = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.16em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const CX = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1.5px solid #A3ACB9',
    borderRadius: 10
  };
  function Laudo({
    T,
    L
  }) {
    const o = MOTION.enter(T, L, L + 0.45);
    const fx = MOTION.enter(T, L + 1.05, L + 1.5);
    const cel = [['BOBINAS UVW', 'iguais'], ['BARRAMENTO CC', '310 V CC'], ['PULSO S/N', 'oscilando']];
    return React.createElement("div", {
      "data-screen-label": "Loop 01 \xB7 Laudo N\xBA 1042",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        background: `rgba(8,27,51,${0.92 * o})`,
        fontFamily: DOC,
        color: '#0C2747',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 12,
        top: 8,
        width: 776,
        height: 384,
        padding: 12,
        background: '#FFFFFF',
        borderRadius: 12,
        boxShadow: '0 16px 36px rgba(8,27,51,.45)',
        opacity: o,
        transform: `translateX(${(1 - o) * 28}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 62,
        padding: '0 20px',
        borderRadius: 12,
        background: '#0F2847',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#DCE7F5'
      }
    }, "PRESTADORA DO SERVI\xC7O"), React.createElement("b", {
      style: {
        fontSize: 20,
        lineHeight: 1.15
      }
    }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#BFD7F2'
      }
    }, "Belo Horizonte \xB7 Chave Pix ", React.createElement("b", {
      style: {
        color: '#FFFFFF'
      }
    }, "pix@climasilvaefilhos.com.br"))), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.2em',
        lineHeight: 1.2
      }
    }, "LAUDO DE APROVA\xC7\xC3O"), React.createElement("b", {
      style: {
        font: `700 27px/1.25 ${MONO}`
      }
    }, "N\xBA 1042"))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        height: 40,
        display: 'grid',
        gridTemplateColumns: '230px minmax(0,1fr)',
        alignItems: 'stretch'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "CLIENTE"), React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2
      }
    }, "Marcos Oliveira \xB7 Apto 402")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        borderLeft: '1px solid #CBD2DB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "EQUIPAMENTO"), React.createElement("b", {
      style: {
        font: `700 13.5px/1.2 ${MONO}`
      }
    }, "LG \xB7 12.000 BTU/h \xB7 R-32"))), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '392px minmax(0,1fr)',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        flex: 'none'
      }
    }, "LEITURAS AFERIDAS NA BANCADA"), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '8px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#1E293B'
      }
    }, "INVERTER & IPM \xB7 4 TESTES"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        height: 24,
        padding: '0 9px',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        borderRadius: 8,
        background: '#DCFCE7',
        border: '1.5px solid #15803D',
        color: '#14532D',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.06em'
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 13,
      c: "#15803D",
      w: 3
    }), "NORMAL")), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`
      }
    }, "Diodos 0,54 V"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "Esperado 0,45 V a 0,65 V \xB7 3 fases")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 6
      }
    }, cel.map(([l, v]) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        minHeight: 0,
        padding: '0 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '.1em',
        lineHeight: 1.2,
        color: '#334155'
      }
    }, l), React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 13,
      c: "#15803D",
      w: 3
    }), React.createElement("b", {
      style: {
        font: `700 14px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, v)))))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        padding: '6px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2,
        whiteSpace: 'normal',
        textWrap: 'balance'
      }
    }, "Diagn\xF3stico T\xE9cnico + Libera\xE7\xE3o de Placa Inverter"), React.createElement("b", {
      style: {
        flex: 'none',
        font: `700 15px/1.2 ${MONO}`
      }
    }, "R$ 380,00")), React.createElement("div", {
  style: {
    background: '#F0FDF4',
    borderLeft: '4px solid #15803D',
    borderRadius: 6,
    padding: '6px 9px',
    color: '#14532D',
    fontSize: 11.5,
    lineHeight: 1.25,
    whiteSpace: 'normal',
    textWrap: 'pretty',
    overflow: 'hidden'
  }
}, React.createElement("b", {
  style: {
    fontWeight: 800
  }
}, "Preven\xE7\xE3o:"), " Evita troca desnecess\xE1ria da placa completa (economia de R$ 950 a R$ 1.450)."))), React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 16px',
        borderRadius: 12,
        background: 'linear-gradient(180deg,#F3ECDA 0%,#EFE6CF 100%)',
        border: '2px solid #A6945F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        fontSize: 11,
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("b", {
      style: {
        font: `700 32px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, "R$ 380,00")), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: 10,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        overflow: 'hidden'
      }
    }, React.createElement("svg", {
      width: QR.n * 3,
      height: QR.n * 3,
      viewBox: `0 0 ${QR.n} ${QR.n}`,
      shapeRendering: "crispEdges",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, React.createElement("path", {
      d: QR.d,
      fill: "#000000"
    })), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        height: QR.n * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'normal'
      }
    }, React.createElement("span", {
      style: {
        ...ROTD
      }
    }, "PIX \xB7 VALOR EXATO DO LAUDO"), React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`,
        whiteSpace: 'nowrap'
      }
    }, "R$ 380,00"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.25,
        textWrap: 'pretty'
      }
    }, "Para autorizar o servi\xE7o, responda APROVADO nesta mensagem.")))))), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 10,
        height: 84,
        padding: '0 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'linear-gradient(90deg,#081B33 0%,#0C2747 100%)',
        border: '2px solid #22C55E',
        borderRadius: 14,
        boxShadow: '0 -6px 24px rgba(8,27,51,.45)',
        opacity: fx,
        transform: `translateY(${(1 - fx) * 24}px)`,
        fontFamily: BARLOW
      }
    }, React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 60,
    padding: '0 14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
    borderRadius: 10,
    background: '#15803D',
    border: '2px solid #4ADE80',
    color: '#FFFFFF',
    font: `700 18px/1.2 ${MONO}`,
    letterSpacing: '-.01em'
  }
}, React.createElement("span", null, "\u2713 ZERO PLACA QUEIMADA"), React.createElement("span", null, "\xB7 PIX R$ 380")), React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#FFFFFF'
      }
    }, React.createElement("span", null, "Placa testada sem risco."), React.createElement("span", {
      style: {
        padding: '1px 6px 2px',
        margin: '0 -6px',
        borderRadius: 4,
        background: '#FACC15',
        color: '#0C2747'
      }
    }, "Diagn\xF3stico pago antes de abrir."))));
  }
  function Piece() {
    const {
      T,
      CUES
    } = useComposition();
    const a = CUES.Acao,
      L = CUES.LaudoPix;
    const root = React.useRef(null);
    const A = useAnchors(root);
    const V = 0.45;
    const r0 = a + 0.6,
      r1 = a + 1.2,
      r2 = a + 2.0;
    const tI = a + 2.35,
      t1 = a + 3.0,
      t2 = a + 3.5,
      t3 = a + 4.0,
      tM = a + 4.95,
      tG = a + 6.15;
    const fade0 = L + 4.25,
      fade1 = L + 4.7;
    const on = t => T >= t + 0.04;
    const acende = t => MOTION.enter(T, t, t + 0.3);
    const pop = t => 1 + 0.04 * Math.sin(Math.PI * p01(T, t, t + 0.35));
    const lcd = T < r1 ? lerp(1.82, 0.91, MOTION.enter(T, r0, r1)) : lerp(0.91, 0.54, MOTION.enter(T, r1, r2));
    const anelO = MOTION.enter(T, r0, r0 + 0.2) * (1 - MOTION.enter(T, tI + 0.4, tI + 0.8));
    const brilho = 0.75 + 0.25 * MOTION.pulse(T, 0.7);
    const anel = anelO < 0.001 ? 'none' : T < r2 ? `0 0 0 3px rgba(255,176,32,${anelO * brilho})` : `0 0 0 3px rgba(21,128,61,${anelO})`;
    const sOn = T >= tM + 0.1 ? {
      n: 1,
      o: 1,
      s: 1 + 0.25 * Math.sin(Math.PI * p01(T, tM + 0.1, tM + 0.5))
    } : null;
    const sai = MOTION.enter(T, a, a + V);
    const ganchoO = T < a + V ? 1 - sai : T >= fade0 ? MOTION.enter(T, fade0, fade1) : 0;
    const ganchoX = T < a + V ? -28 * sai : 0;
    const ganchoT = T < a + V ? T : 0;
    const telaX = 24 * (1 - sai);
    const maoO = MOTION.enter(T, a + 1.7, a + 2.0) * (1 - MOTION.enter(T, tG + 0.3, L));
    return React.createElement("div", {
      style: {
        position: 'relative',
        width: 800,
        height: 500,
        overflow: 'hidden',
        ...BG
      }
    }, React.createElement("div", {
      ref: root,
      "data-screen-label": `Loop 01 · ${Math.floor(T)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ...BG,
        color: '#0C2747',
        fontFamily: BARLOW,
        transform: `translateX(${telaX}px)`
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 8,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("div", {
      style: ST.S21
    }, "\u2039"), React.createElement("div", {
      style: {
        ...ST.S14,
        lineHeight: 1.2
      }
    }, "AFERIR VIVO"), React.createElement(Faixa, null), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 15,
        lineHeight: 1.1
      }
    }, "LG")), React.createElement(Abas, null), React.createElement(FichaDiodo, {
      A: A,
      g: MOTION.enter(T, tI + 0.05, tI + 0.17),
      s: MOTION.press(T, tI),
      leitura: lcd.toFixed(2),
      anel: anel
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 396,
        top: 120,
        width: 388,
        height: 304,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement(FichaCurta, {
      tarja: "DESLIGADO",
      escala: "\u03A9",
      titulo: "Bobinas UVW do compressor",
      r: A.ref('n1'),
      g: acende(t1),
      s: pop(t1),
      esq: React.createElement(React.Fragment, null, React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "U\u2013V"), React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "V\u2013W"), React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "W\u2013U")),
      dir: React.createElement("b", {
        style: {
          fontWeight: 700,
          color: '#14532D'
        }
      }, "\u2713 iguais")
    }), React.createElement(FichaCurta, {
      energ: true,
      tarja: "ENERGIZADO",
      escala: "V CC",
      titulo: "Barramento CC (P-N)",
      r: A.ref('n2'),
      g: acende(t2),
      s: pop(t2),
      esq: React.createElement(React.Fragment, null, React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "P"), "\u2013", React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "N")),
      dir: React.createElement(Esperado, {
        h: 18,
        fs: 11
      }, "\u2248 310 V CC em 220 V")
    }), React.createElement(FichaCurta, {
      energ: true,
      tarja: "ENERGIZADO",
      escala: "V CC",
      titulo: "Pulso de comunica\xE7\xE3o S/N",
      r: A.ref('n3'),
      g: acende(t3),
      s: pop(t3),
      esq: React.createElement(React.Fragment, null, "bornes", React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "S"), "e", React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "N"), "\xB7"),
      dir: React.createElement("b", {
        style: {
          fontWeight: 700,
          color: '#14532D'
        }
      }, "Pulsos oscilando")
    }), React.createElement("div", {
      ref: A.ref('mandar'),
      style: {
        ...ST.S86,
        flex: 'none',
        minHeight: 44,
        height: 44,
        fontSize: 16,
        lineHeight: 1,
        letterSpacing: '.1em',
        transform: `scale(${MOTION.press(T, tM)})`
      }
    }, "+ MANDAR PARA O LAUDO")), React.createElement(Dock, {
      ativa: on(tG) ? 3 : 1,
      selo: sOn,
      rg: A.ref('ganhos'),
      sg: MOTION.press(T, tG)
    }), React.createElement(Hand, {
      T: T,
      A: A,
      o: maoO,
      start: {
        x: 330,
        y: 380
      },
      taps: [tI, tM, tG],
      moves: [{
        s: a + 1.8,
        e: tI - 0.04,
        to: 'ipm',
        dy: -10
      }, {
        s: t3 + 0.3,
        e: tM - 0.04,
        to: 'mandar',
        dx: 40,
        dy: -17
      }, {
        s: tM + 0.3,
        e: tG - 0.05,
        to: 'ganhos',
        dy: -12
      }]
    }), T >= L && React.createElement(Laudo, {
      T: T,
      L: L
    })), ganchoO > 0.001 && React.createElement(Gancho, {
      t: ganchoT,
      o: ganchoO,
      x: ganchoX
    }));
  }
  window.GPLoops.l01 = Piece;
})();
(function () {
  const useComposition = () => React.useContext(window.GPLoopCtx);
  const css = s => {
    const o = {};
    s.split(';').forEach(d => {
      const i = d.indexOf(':');
      if (i < 0) return;
      const k = d.slice(0, i).trim();
      if (!k) return;
      o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
    });
    return o;
  };
  const ST = {
    S10: css("box-sizing:border-box;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;line-height:1;letter-spacing:-.02em;white-space:nowrap"),
    S14: css("flex:1;font-size:20px;font-weight:700;letter-spacing:.14em;white-space:nowrap"),
    S21: css("box-sizing:border-box;flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px"),
    S22: css("box-sizing:border-box;flex:none;font:700 12px/1 'JetBrains Mono',monospace;color:#0C2747;padding:8px 8px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:6px"),
    S28: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S37: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S50: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747;border-radius:10px"),
    S86: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#1A8642 0%,#1A8642 45%,#126B34 100%);border:1px solid #14532D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #14532D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S137: css("box-sizing:border-box;flex:none;display:grid;grid-template-columns:1fr 1.25fr 1fr;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px")
  };
  const BG = {
    backgroundColor: '#D6D2C9',
    backgroundImage: 'linear-gradient(180deg,#D6D2C9 0%,#DFDCD5 14%,#CCC8BF 100%)'
  };
  const CARD = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #94A3B8',
    boxShadow: '0 1px 3px rgba(9,30,66,.14)',
    borderRadius: 12
  };
  const MONO = "'JetBrains Mono',monospace";
  const BARLOW = "'Barlow Semi Condensed',sans-serif";
  const DOC = "Arial,'Liberation Sans',Helvetica,sans-serif";
  const QR = {"payload":"00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406280.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10576304D415","n":53,"d":"M0 0h7v1h-7zM9 0h1v1h-1zM11 0h2v1h-2zM14 0h1v1h-1zM16 0h4v1h-4zM21 0h2v1h-2zM24 0h1v1h-1zM26 0h3v1h-3zM30 0h1v1h-1zM33 0h3v1h-3zM38 0h1v1h-1zM40 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM13 1h1v1h-1zM15 1h2v1h-2zM19 1h4v1h-4zM25 1h1v1h-1zM28 1h1v1h-1zM30 1h1v1h-1zM36 1h8v1h-8zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM11 2h5v1h-5zM17 2h1v1h-1zM19 2h2v1h-2zM22 2h3v1h-3zM29 2h2v1h-2zM32 2h1v1h-1zM34 2h4v1h-4zM39 2h1v1h-1zM41 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM11 3h4v1h-4zM18 3h3v1h-3zM24 3h1v1h-1zM28 3h1v1h-1zM30 3h2v1h-2zM34 3h2v1h-2zM37 3h1v1h-1zM39 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM10 4h3v1h-3zM18 4h2v1h-2zM22 4h1v1h-1zM24 4h8v1h-8zM33 4h1v1h-1zM35 4h2v1h-2zM38 4h1v1h-1zM40 4h3v1h-3zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h2v1h-2zM12 5h3v1h-3zM18 5h1v1h-1zM20 5h1v1h-1zM24 5h1v1h-1zM28 5h1v1h-1zM31 5h5v1h-5zM37 5h1v1h-1zM41 5h2v1h-2zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM9 7h1v1h-1zM11 7h2v1h-2zM16 7h1v1h-1zM19 7h1v1h-1zM22 7h3v1h-3zM28 7h2v1h-2zM33 7h3v1h-3zM37 7h2v1h-2zM0 8h1v1h-1zM3 8h1v1h-1zM5 8h2v1h-2zM8 8h4v1h-4zM13 8h1v1h-1zM15 8h1v1h-1zM17 8h1v1h-1zM20 8h1v1h-1zM22 8h1v1h-1zM24 8h6v1h-6zM31 8h2v1h-2zM36 8h1v1h-1zM40 8h1v1h-1zM42 8h1v1h-1zM45 8h1v1h-1zM47 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM9 9h1v1h-1zM11 9h10v1h-10zM22 9h2v1h-2zM25 9h1v1h-1zM31 9h3v1h-3zM39 9h1v1h-1zM41 9h1v1h-1zM45 9h1v1h-1zM47 9h1v1h-1zM49 9h1v1h-1zM52 9h1v1h-1zM0 10h4v1h-4zM6 10h1v1h-1zM9 10h1v1h-1zM13 10h2v1h-2zM17 10h4v1h-4zM24 10h4v1h-4zM30 10h1v1h-1zM33 10h5v1h-5zM41 10h1v1h-1zM44 10h3v1h-3zM48 10h1v1h-1zM0 11h3v1h-3zM7 11h9v1h-9zM18 11h3v1h-3zM22 11h2v1h-2zM25 11h2v1h-2zM32 11h1v1h-1zM34 11h2v1h-2zM38 11h4v1h-4zM43 11h1v1h-1zM45 11h1v1h-1zM50 11h2v1h-2zM3 12h2v1h-2zM6 12h1v1h-1zM8 12h2v1h-2zM11 12h1v1h-1zM17 12h2v1h-2zM20 12h6v1h-6zM28 12h5v1h-5zM34 12h7v1h-7zM43 12h1v1h-1zM45 12h4v1h-4zM52 12h1v1h-1zM1 13h1v1h-1zM3 13h3v1h-3zM7 13h9v1h-9zM17 13h1v1h-1zM21 13h3v1h-3zM29 13h1v1h-1zM31 13h2v1h-2zM34 13h3v1h-3zM40 13h1v1h-1zM46 13h1v1h-1zM50 13h1v1h-1zM2 14h7v1h-7zM10 14h1v1h-1zM13 14h1v1h-1zM15 14h1v1h-1zM17 14h1v1h-1zM20 14h1v1h-1zM22 14h1v1h-1zM28 14h1v1h-1zM30 14h3v1h-3zM34 14h5v1h-5zM41 14h1v1h-1zM44 14h2v1h-2zM48 14h2v1h-2zM52 14h1v1h-1zM0 15h2v1h-2zM3 15h1v1h-1zM5 15h1v1h-1zM9 15h2v1h-2zM12 15h3v1h-3zM20 15h1v1h-1zM23 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM34 15h4v1h-4zM40 15h4v1h-4zM47 15h1v1h-1zM49 15h1v1h-1zM51 15h1v1h-1zM0 16h1v1h-1zM3 16h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM12 16h1v1h-1zM15 16h2v1h-2zM18 16h1v1h-1zM20 16h1v1h-1zM24 16h1v1h-1zM27 16h1v1h-1zM32 16h1v1h-1zM34 16h5v1h-5zM42 16h1v1h-1zM47 16h2v1h-2zM0 17h1v1h-1zM2 17h2v1h-2zM8 17h1v1h-1zM10 17h2v1h-2zM15 17h4v1h-4zM22 17h1v1h-1zM26 17h1v1h-1zM28 17h2v1h-2zM32 17h1v1h-1zM34 17h1v1h-1zM36 17h3v1h-3zM44 17h2v1h-2zM48 17h3v1h-3zM4 18h1v1h-1zM6 18h2v1h-2zM13 18h1v1h-1zM16 18h3v1h-3zM21 18h1v1h-1zM23 18h1v1h-1zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h2v1h-2zM34 18h2v1h-2zM37 18h1v1h-1zM40 18h2v1h-2zM44 18h2v1h-2zM47 18h3v1h-3zM51 18h2v1h-2zM0 19h1v1h-1zM2 19h1v1h-1zM7 19h3v1h-3zM11 19h4v1h-4zM17 19h1v1h-1zM21 19h1v1h-1zM25 19h1v1h-1zM27 19h2v1h-2zM31 19h2v1h-2zM34 19h4v1h-4zM42 19h5v1h-5zM48 19h2v1h-2zM51 19h2v1h-2zM1 20h2v1h-2zM4 20h3v1h-3zM8 20h6v1h-6zM18 20h1v1h-1zM21 20h1v1h-1zM23 20h2v1h-2zM30 20h2v1h-2zM36 20h1v1h-1zM40 20h9v1h-9zM52 20h1v1h-1zM0 21h2v1h-2zM3 21h1v1h-1zM7 21h1v1h-1zM9 21h2v1h-2zM14 21h1v1h-1zM17 21h1v1h-1zM20 21h2v1h-2zM23 21h2v1h-2zM27 21h1v1h-1zM29 21h1v1h-1zM31 21h3v1h-3zM36 21h1v1h-1zM40 21h1v1h-1zM43 21h1v1h-1zM45 21h1v1h-1zM49 21h2v1h-2zM52 21h1v1h-1zM0 22h3v1h-3zM4 22h4v1h-4zM9 22h2v1h-2zM13 22h8v1h-8zM22 22h1v1h-1zM24 22h6v1h-6zM31 22h2v1h-2zM34 22h5v1h-5zM42 22h2v1h-2zM46 22h3v1h-3zM50 22h1v1h-1zM0 23h1v1h-1zM2 23h1v1h-1zM4 23h2v1h-2zM7 23h1v1h-1zM10 23h2v1h-2zM13 23h4v1h-4zM18 23h2v1h-2zM23 23h2v1h-2zM26 23h6v1h-6zM34 23h5v1h-5zM40 23h2v1h-2zM44 23h1v1h-1zM48 23h1v1h-1zM50 23h1v1h-1zM52 23h1v1h-1zM1 24h1v1h-1zM4 24h5v1h-5zM13 24h2v1h-2zM16 24h1v1h-1zM18 24h1v1h-1zM20 24h3v1h-3zM24 24h5v1h-5zM30 24h4v1h-4zM36 24h1v1h-1zM40 24h9v1h-9zM50 24h1v1h-1zM52 24h1v1h-1zM1 25h2v1h-2zM4 25h1v1h-1zM8 25h1v1h-1zM12 25h1v1h-1zM15 25h1v1h-1zM18 25h1v1h-1zM24 25h1v1h-1zM28 25h1v1h-1zM31 25h2v1h-2zM34 25h1v1h-1zM37 25h1v1h-1zM41 25h1v1h-1zM43 25h2v1h-2zM48 25h1v1h-1zM51 25h1v1h-1zM0 26h1v1h-1zM2 26h1v1h-1zM4 26h1v1h-1zM6 26h1v1h-1zM8 26h1v1h-1zM10 26h2v1h-2zM13 26h2v1h-2zM16 26h1v1h-1zM18 26h1v1h-1zM20 26h1v1h-1zM22 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h3v1h-3zM35 26h4v1h-4zM40 26h1v1h-1zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM51 26h2v1h-2zM0 27h1v1h-1zM2 27h3v1h-3zM8 27h1v1h-1zM11 27h1v1h-1zM16 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM28 27h3v1h-3zM35 27h1v1h-1zM37 27h2v1h-2zM40 27h2v1h-2zM43 27h2v1h-2zM48 27h2v1h-2zM51 27h1v1h-1zM0 28h3v1h-3zM4 28h6v1h-6zM11 28h2v1h-2zM17 28h2v1h-2zM23 28h11v1h-11zM35 28h4v1h-4zM42 28h1v1h-1zM44 28h5v1h-5zM0 29h1v1h-1zM2 29h1v1h-1zM4 29h2v1h-2zM9 29h2v1h-2zM13 29h2v1h-2zM16 29h2v1h-2zM19 29h2v1h-2zM22 29h2v1h-2zM25 29h2v1h-2zM28 29h2v1h-2zM32 29h2v1h-2zM36 29h1v1h-1zM38 29h2v1h-2zM43 29h3v1h-3zM47 29h1v1h-1zM52 29h1v1h-1zM0 30h3v1h-3zM6 30h3v1h-3zM12 30h1v1h-1zM15 30h4v1h-4zM20 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM28 30h3v1h-3zM32 30h2v1h-2zM36 30h1v1h-1zM40 30h2v1h-2zM44 30h5v1h-5zM50 30h1v1h-1zM52 30h1v1h-1zM2 31h1v1h-1zM5 31h1v1h-1zM7 31h2v1h-2zM10 31h1v1h-1zM12 31h1v1h-1zM14 31h2v1h-2zM20 31h1v1h-1zM22 31h1v1h-1zM24 31h1v1h-1zM26 31h1v1h-1zM28 31h1v1h-1zM30 31h1v1h-1zM35 31h1v1h-1zM38 31h2v1h-2zM41 31h1v1h-1zM44 31h3v1h-3zM48 31h2v1h-2zM1 32h1v1h-1zM3 32h1v1h-1zM5 32h2v1h-2zM11 32h3v1h-3zM17 32h3v1h-3zM21 32h7v1h-7zM29 32h1v1h-1zM31 32h1v1h-1zM33 32h1v1h-1zM36 32h1v1h-1zM39 32h2v1h-2zM42 32h1v1h-1zM46 32h1v1h-1zM50 32h1v1h-1zM52 32h1v1h-1zM0 33h5v1h-5zM7 33h1v1h-1zM12 33h2v1h-2zM16 33h1v1h-1zM18 33h4v1h-4zM23 33h3v1h-3zM28 33h1v1h-1zM30 33h2v1h-2zM33 33h1v1h-1zM35 33h3v1h-3zM39 33h2v1h-2zM44 33h1v1h-1zM47 33h1v1h-1zM49 33h2v1h-2zM52 33h1v1h-1zM1 34h1v1h-1zM5 34h3v1h-3zM10 34h1v1h-1zM12 34h1v1h-1zM19 34h1v1h-1zM24 34h3v1h-3zM30 34h2v1h-2zM34 34h1v1h-1zM36 34h1v1h-1zM39 34h1v1h-1zM43 34h1v1h-1zM49 34h2v1h-2zM0 35h2v1h-2zM3 35h1v1h-1zM5 35h1v1h-1zM12 35h2v1h-2zM15 35h1v1h-1zM17 35h4v1h-4zM22 35h2v1h-2zM26 35h1v1h-1zM33 35h1v1h-1zM36 35h3v1h-3zM40 35h1v1h-1zM44 35h1v1h-1zM46 35h1v1h-1zM49 35h2v1h-2zM0 36h3v1h-3zM4 36h1v1h-1zM6 36h2v1h-2zM9 36h2v1h-2zM14 36h1v1h-1zM16 36h2v1h-2zM19 36h1v1h-1zM22 36h2v1h-2zM26 36h3v1h-3zM30 36h1v1h-1zM32 36h3v1h-3zM36 36h3v1h-3zM40 36h1v1h-1zM42 36h1v1h-1zM44 36h1v1h-1zM46 36h4v1h-4zM51 36h2v1h-2zM1 37h1v1h-1zM4 37h1v1h-1zM8 37h1v1h-1zM10 37h1v1h-1zM12 37h1v1h-1zM17 37h1v1h-1zM19 37h1v1h-1zM25 37h2v1h-2zM32 37h3v1h-3zM36 37h1v1h-1zM39 37h3v1h-3zM43 37h2v1h-2zM50 37h2v1h-2zM1 38h1v1h-1zM3 38h1v1h-1zM5 38h2v1h-2zM8 38h2v1h-2zM14 38h1v1h-1zM17 38h1v1h-1zM20 38h1v1h-1zM22 38h3v1h-3zM27 38h1v1h-1zM29 38h1v1h-1zM33 38h6v1h-6zM40 38h2v1h-2zM45 38h2v1h-2zM48 38h2v1h-2zM52 38h1v1h-1zM1 39h3v1h-3zM5 39h1v1h-1zM8 39h5v1h-5zM14 39h2v1h-2zM17 39h1v1h-1zM23 39h1v1h-1zM25 39h1v1h-1zM27 39h1v1h-1zM29 39h1v1h-1zM31 39h2v1h-2zM34 39h3v1h-3zM40 39h3v1h-3zM44 39h4v1h-4zM52 39h1v1h-1zM5 40h2v1h-2zM8 40h1v1h-1zM10 40h1v1h-1zM12 40h1v1h-1zM14 40h2v1h-2zM17 40h2v1h-2zM25 40h2v1h-2zM32 40h1v1h-1zM34 40h5v1h-5zM42 40h2v1h-2zM47 40h6v1h-6zM2 41h1v1h-1zM4 41h2v1h-2zM10 41h1v1h-1zM12 41h1v1h-1zM15 41h1v1h-1zM17 41h2v1h-2zM20 41h1v1h-1zM23 41h1v1h-1zM27 41h1v1h-1zM31 41h1v1h-1zM36 41h6v1h-6zM43 41h3v1h-3zM47 41h1v1h-1zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h6v1h-6zM12 42h1v1h-1zM16 42h1v1h-1zM19 42h1v1h-1zM22 42h1v1h-1zM24 42h1v1h-1zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h1v1h-1zM35 42h1v1h-1zM37 42h1v1h-1zM39 42h2v1h-2zM42 42h2v1h-2zM46 42h1v1h-1zM48 42h1v1h-1zM50 42h1v1h-1zM52 42h1v1h-1zM1 43h2v1h-2zM8 43h4v1h-4zM13 43h3v1h-3zM17 43h1v1h-1zM19 43h4v1h-4zM25 43h1v1h-1zM28 43h3v1h-3zM32 43h1v1h-1zM36 43h1v1h-1zM40 43h1v1h-1zM43 43h1v1h-1zM48 43h2v1h-2zM51 43h2v1h-2zM3 44h1v1h-1zM6 44h4v1h-4zM11 44h1v1h-1zM15 44h3v1h-3zM22 44h7v1h-7zM30 44h2v1h-2zM33 44h4v1h-4zM38 44h3v1h-3zM44 44h5v1h-5zM52 44h1v1h-1zM8 45h4v1h-4zM13 45h2v1h-2zM18 45h1v1h-1zM22 45h1v1h-1zM24 45h1v1h-1zM28 45h1v1h-1zM31 45h3v1h-3zM35 45h1v1h-1zM37 45h1v1h-1zM40 45h2v1h-2zM43 45h2v1h-2zM48 45h2v1h-2zM51 45h1v1h-1zM0 46h7v1h-7zM9 46h5v1h-5zM15 46h5v1h-5zM21 46h2v1h-2zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h3v1h-3zM34 46h4v1h-4zM39 46h3v1h-3zM44 46h1v1h-1zM46 46h1v1h-1zM48 46h4v1h-4zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h3v1h-3zM12 47h3v1h-3zM18 47h1v1h-1zM20 47h3v1h-3zM24 47h1v1h-1zM28 47h1v1h-1zM30 47h5v1h-5zM40 47h1v1h-1zM43 47h2v1h-2zM48 47h4v1h-4zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM10 48h2v1h-2zM13 48h1v1h-1zM15 48h1v1h-1zM17 48h3v1h-3zM21 48h1v1h-1zM24 48h5v1h-5zM31 48h1v1h-1zM33 48h5v1h-5zM40 48h1v1h-1zM42 48h1v1h-1zM44 48h6v1h-6zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h1v1h-1zM10 49h1v1h-1zM12 49h3v1h-3zM21 49h2v1h-2zM25 49h1v1h-1zM28 49h1v1h-1zM32 49h4v1h-4zM37 49h1v1h-1zM39 49h1v1h-1zM41 49h1v1h-1zM43 49h4v1h-4zM48 49h1v1h-1zM50 49h2v1h-2zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM12 50h3v1h-3zM17 50h1v1h-1zM20 50h2v1h-2zM23 50h3v1h-3zM29 50h5v1h-5zM36 50h4v1h-4zM46 50h4v1h-4zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h2v1h-2zM13 51h2v1h-2zM16 51h1v1h-1zM18 51h1v1h-1zM20 51h2v1h-2zM24 51h1v1h-1zM29 51h1v1h-1zM31 51h1v1h-1zM33 51h1v1h-1zM36 51h2v1h-2zM39 51h2v1h-2zM44 51h1v1h-1zM47 51h2v1h-2zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h2v1h-2zM15 52h5v1h-5zM24 52h1v1h-1zM26 52h1v1h-1zM29 52h2v1h-2zM32 52h1v1h-1zM36 52h4v1h-4zM41 52h2v1h-2zM47 52h3v1h-3zM51 52h1v1h-1z"};
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1,
      bx = 3 * (x2 - x1) - cx,
      ax = 1 - cx - bx,
      cy = 3 * y1,
      by = 3 * (y2 - y1) - cy,
      ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t,
      sy = t => ((ay * t + by) * t + cy) * t;
    return x => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0,
        hi = 1,
        t = x;
      for (let i = 0; i < 26; i++) {
        t = (lo + hi) / 2;
        if (sx(t) < x) lo = t;else hi = t;
      }
      return sy(t);
    };
  }
  const CURVA = bezier(0.22, 1, 0.36, 1);
  const p01 = (T, s, e) => e <= s ? T >= s ? 1 : 0 : Math.min(1, Math.max(0, (T - s) / (e - s)));
  const MOTION = {
    enter: (T, s, e) => CURVA(p01(T, s, e)),
    press: (T, at) => 1 - 0.07 * Math.sin(Math.PI * p01(T, at - 0.1, at + 0.24)),
    pulse: (t, per) => 0.5 - 0.5 * Math.cos(2 * Math.PI * t / per)
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  const R_ = (x, y, w, h, r) => 'M' + (x + r) + ' ' + y + 'h' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + ' ' + r + 'h-' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + '-' + r + 'v-' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + '-' + r + 'z';
  const C_ = (x, y, r) => 'M' + (x + r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 1-' + 2 * r + ' 0 ' + r + ' ' + r + ' 0 0 1 ' + 2 * r + ' 0z';
  const IC = {
    prancheta: [R_(8, 2, 8, 4, 1), 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
    multimetro: [R_(5, 2, 14, 20, 2), R_(8, 5, 8, 4, 0.5), C_(12, 15, 2.5), 'M12 15l1.5-1.5'],
    sol: [C_(12, 12, 4), 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
    documento: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'],
    raio: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
    desliga: ['M12 2v10', 'M18.4 6.6a9 9 0 1 1-12.77.04'],
    ok: ['M20 6 9 17l-5-5'],
    fechar: ['M18 6 6 18', 'm6 6 12 12']
  };
  function Ic({
    n,
    s = 20,
    c = '#334155',
    w = 1.6
  }) {
    return React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: c,
      strokeWidth: w,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, IC[n].map((d, i) => React.createElement("path", {
      key: i,
      d: d
    })));
  }
  function useAnchors(rootRef) {
    const els = React.useRef({});
    const [pos, setPos] = React.useState({});
    const ref = k => el => {
      if (el) els.current[k] = el;
    };
    React.useLayoutEffect(() => {
      const medir = () => {
        const root = rootRef.current;
        if (!root) return;
        const out = {};
        Object.keys(els.current).forEach(k => {
          const el = els.current[k];
          let x = 0,
            y = 0,
            e = el;
          while (e && e !== root) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
          }
          out[k] = {
            x: Math.round(x + el.offsetWidth / 2),
            y: Math.round(y + el.offsetHeight / 2),
            w: el.offsetWidth
          };
        });
        setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
      };
      medir();
      const t1 = setTimeout(medir, 400),
        t2 = setTimeout(medir, 1500);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return {
      ref,
      pos
    };
  }
  const MAO = 'M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L6 14Z';
  function Hand({
    T,
    A,
    moves,
    taps = [],
    start,
    o
  }) {
    if (o <= 0.001) return null;
    let cur = start,
      prev = start;
    for (const m of moves) {
      const tg = typeof m.to === 'string' ? A.pos[m.to] : m.to;
      if (!tg) return null;
      const pt = {
        x: tg.x + (m.dx || 0),
        y: tg.y + (m.dy || 0)
      };
      if (T < m.s) break;
      const p = MOTION.enter(T, m.s, m.e);
      cur = {
        x: lerp(prev.x, pt.x, p),
        y: lerp(prev.y, pt.y, p)
      };
      prev = pt;
    }
    let sc = 1;
    taps.forEach(t => {
      sc *= MOTION.press(T, t);
    });
    const rip = taps.map(t => {
      const p = p01(T, t, t + 0.6);
      return p > 0 && p < 1 ? p : null;
    }).find(p => p !== null);
    const k = 50 / 24,
      ox = 8 * k,
      oy = 2.2 * k;
    return React.createElement(React.Fragment, null, rip != null && React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid #FFB020',
        zIndex: 49,
        pointerEvents: 'none',
        opacity: 0.85 * (1 - rip) * o,
        transform: `translate(${cur.x - 28}px,${cur.y - 28}px) scale(${0.3 + 0.9 * CURVA(rip)})`
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        zIndex: 50,
        pointerEvents: 'none',
        opacity: o,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `translate(${cur.x - ox}px,${cur.y - oy}px) scale(${sc})`
      }
    }, React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        filter: 'drop-shadow(0 4px 6px rgba(9,30,66,.35))'
      }
    }, React.createElement("path", {
      d: MAO,
      fill: "#FFFFFF",
      stroke: "#0C2747",
      strokeWidth: "1.3",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 9.5V12M14 10V12M18 11V12",
      fill: "none",
      stroke: "#0C2747",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    }))));
  }
  function Faixa() {
    const cel = [['MARCA', 'LG'], ['BTU/h', '12.000'], ['FLUIDO', 'R-32']];
    return React.createElement("div", {
      style: {
        ...ST.S137,
        width: 320,
        height: 50
      }
    }, cel.map(([l, v], i) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
        borderLeft: i ? '1px solid rgba(63,50,16,.25)' : 'none'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, l, " \u25BC"), React.createElement("b", {
      style: i ? {
        font: `700 17px/1.25 ${MONO}`
      } : {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, v))));
  }
  const DOCK = [['Sintomas', 'prancheta'], ['Aferir Vivo', 'multimetro'], ['Códigos & LED', 'sol'], ['Ganhos & Laudo', 'documento']];
  function Dock({
    ativa,
    selo,
    rg,
    sg
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 8,
        height: 60,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 8,
        zIndex: 5
      }
    }, DOCK.map(([l, ic], i) => React.createElement("div", {
      key: l,
      ref: i === 3 ? rg : undefined,
      style: {
        ...ST.S10,
        position: 'relative',
        fontSize: 14,
        gap: 6,
        transform: i === 3 ? `scale(${sg})` : 'none'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        width: 36,
        height: 3,
        borderRadius: 2,
        background: i === ativa ? '#FFB020' : '#081B33',
        boxShadow: i === ativa ? '0 0 6px rgba(255,176,32,.8)' : 'none'
      }
    }), React.createElement(Ic, {
      n: ic,
      s: 22,
      c: "#FFFFFF"
    }), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, l), i === 3 && selo && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -9,
        right: 12,
        width: 28,
        height: 28,
        boxSizing: 'border-box',
        borderRadius: '50%',
        background: '#FFB020',
        border: '1px solid #7A4E00',
        color: '#0C2747',
        font: `700 15px/26px ${BARLOW}`,
        textAlign: 'center',
        opacity: selo.o,
        transform: `scale(${selo.s})`
      }
    }, selo.n))));
  }
  const LEDC = {
    v: ['#DC2626', '#7F1D1D'],
    g: ['#15803D', '#14532D']
  };
  const LEDE = {
    v: ['#FF5A4F', '#7F1D1D'],
    g: ['#3DDC84', '#4AF08A']
  };
  function pisca(T, t0, n) {
    if (T < t0) return {
      on: false,
      cont: '—',
      fase: 'pausa',
      prog: 1
    };
    const per = n * 0.5 + 2,
      tau = (T - t0) % per;
    if (tau < n * 0.5) {
      const k = Math.floor(tau / 0.5),
        r = tau - k * 0.5,
        on = r < 0.25;
      return {
        on,
        cont: k + 1 + '/' + n,
        fase: on ? 'on' : 'off',
        prog: (on ? r : r - 0.25) / 0.25
      };
    }
    return {
      on: false,
      cont: n + '/' + n,
      fase: 'pausa',
      prog: (tau - n * 0.5) / 2
    };
  }
  function Bulbo({
    c,
    on,
    box = 72,
    d = 40,
    base = '#FFFFFF',
    halo = 0.5
  }) {
    return React.createElement("div", {
      style: {
        position: 'relative',
        flex: 'none',
        width: box,
        height: box,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: `radial-gradient(circle,${c[0]} 0%,transparent 70%)`,
        opacity: on ? halo : 0
      }
    }), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        width: d,
        height: d,
        borderRadius: '50%',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,.5)',
        background: on ? c[0] : base,
        border: `2px solid ${on ? c[1] : c[0]}`
      }
    }));
  }
  function Gancho({
    t,
    o,
    x = 0
  }) {
    const g = MOTION.pulse(t, 1.1);
    const zoom = 1 + 3.5 / 156 * p01(t, 0, 3.8);
    const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55));
    const l1 = MOTION.enter(t, 0.45, 1.05),
      l2 = MOTION.enter(t, 1.05, 1.65);
    const r = pisca(t, 0, 2),
      v = pisca(t, 0, 5);
    const tinta = p => {
      const c = (a, b) => Math.round(lerp(a, b, p));
      return `rgb(${c(255, 12)},${c(255, 39)},${c(255, 71)})`;
    };
    const grifo = (txt, p) => React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '1px 8px 3px',
        margin: '0 -8px',
        borderRadius: 5,
        backgroundImage: 'linear-gradient(#FACC15,#FACC15)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: `${p * 100}% 100%`,
        color: tinta(p)
      }
    }, txt);
    const smd = (nome, cor, halo, apagado, s) => React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        position: 'relative',
        flex: 'none',
        width: 16,
        height: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        left: -11,
        top: -14,
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: `radial-gradient(circle,${halo} 0%,transparent 68%)`,
        mixBlendMode: 'screen',
        opacity: s.on ? 0.95 : 0,
        pointerEvents: 'none'
      }
    }), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        width: 16,
        height: 10,
        borderRadius: 3,
        border: '1px solid rgba(255,255,255,.35)',
        background: s.on ? `radial-gradient(circle at 42% 34%,#FFFFFF 0%,${cor} 38%,${cor} 100%)` : apagado,
        boxShadow: s.on ? `0 0 6px ${halo}` : 'inset 0 1px 2px rgba(0,0,0,.6)'
      }
    })), React.createElement("span", {
      style: {
        font: `700 10px/1.2 ${MONO}`,
        color: '#DCE7F5',
        letterSpacing: '.04em'
      }
    }, nome));
    return React.createElement("div", {
      "data-screen-label": `Loop 02 · Gancho · ${Math.floor(t)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 70,
        opacity: o,
        transform: `translateX(${x}px)`,
        background: 'radial-gradient(110% 90% at 28% 40%,#14365F 0%,#0C2747 52%,#081B33 100%)',
        color: '#FFFFFF',
        fontFamily: BARLOW,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 24,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        fontSize: 15,
        lineHeight: 1.2,
        letterSpacing: '.16em'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, "BANCADA GELOPRO"), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#BFD7F2'
      }
    }, "\xB7 C\xD3DIGOS & LED")), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        padding: '0 12px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        letterSpacing: '.04em'
      }
    }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 52,
        top: 90,
        width: 260,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22,
        transform: `scale(${zoom})`,
        transformOrigin: '50% 45%'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: 228,
        height: 228,
        borderRadius: 44,
        background: '#0E2240',
        border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
        boxShadow: `0 0 ${16 + 26 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        position: 'relative',
        width: 156,
        height: 156,
        flex: 'none'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/t05_placa_pcb.webp",
      alt: "",
      width: "156",
      height: "156",
      style: {
        width: 156,
        height: 156,
        display: 'block',
        borderRadius: 24,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)'
      }
    }), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        right: 8,
        top: 8,
        padding: '6px 8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        borderRadius: 8,
        background: 'rgba(8,27,51,0.82)',
        border: '1px solid rgba(255,255,255,0.22)'
      }
    }, smd('LED01', '#EF4444', '#DC2626', '#3A1414', r), smd('LED02', '#22C55E', '#4ADE80', '#0F2A1A', v)))), React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 52,
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    background: '#B91C1C',
    border: '1px solid #7F1D1D',
    boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
    font: "800 22px/1.1 'Barlow Semi Condensed',sans-serif",
    letterSpacing: '.04em',
    whiteSpace: 'nowrap',
    transform: `scale(${selo})`
  }
}, "\u2715 TROCA \xC0 TOA")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 360,
        right: 36,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        whiteSpace: 'normal'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.16,
        letterSpacing: '-.005em',
        textWrap: 'pretty'
      }
    }, "LED piscando l\xE1 fora sem visor?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.12,
        whiteSpace: 'nowrap'
      }
    }, grifo('Bata as piscadas na tela', l1), grifo('e veja se N\xC3O \xC9 DEFEITO.', l2))));
  }
  const ROTL = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.06em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const VISOR = {
    boxSizing: 'border-box',
    background: 'linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%)',
    border: '1.5px solid #A6945F',
    boxShadow: 'inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7)',
    borderRadius: 12
  };
  const SECAO = {
    boxSizing: 'border-box',
    flex: 'none',
    height: 30,
    padding: '0 14px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: '#EFEDE8',
    borderTop: '1px solid #CFCBC2',
    borderBottom: '1px solid #CFCBC2',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.14em',
    lineHeight: 1.2,
    color: '#0C2747'
  };
  function Simulador({
    r,
    v
  }) {
    const cel = (nome, c, s) => React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, React.createElement(Bulbo, {
      c: c,
      on: s.on
    }), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, React.createElement("span", {
      style: {
        font: `700 12px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, nome), React.createElement("b", {
      style: {
        font: `700 48px/1.1 ${MONO}`,
        fontVariantNumeric: 'tabular-nums',
        color: '#0C2747'
      }
    }, s.cont)));
    const fases = [['Aceso', '250 ms', 'on', true], ['Apagado', '250 ms', 'off', false], ['Pausa', '2000 ms', 'pausa', false]];
    return React.createElement("div", {
      style: {
        ...VISOR,
        height: 252,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTL,
        color: '#3F3210',
        letterSpacing: '.16em'
      }
    }, "SIMULADOR DE LED"), React.createElement("span", {
      style: {
        font: `700 12px/1.2 ${MONO}`,
        color: '#3F3210'
      }
    }, "LG \xB7 CH25")), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
        gap: 8
      }
    }, cel('LED01', LEDC.v, r), cel('LED02', LEDC.g, v)), React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#3F3210'
      }
    }, "Vermelho: 2 piscadas; verde: 5 piscadas"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        height: 56,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        background: '#EFEDE8',
        border: '1px solid #D6D1C4',
        borderRadius: 8
      }
    }, fases.map(([nome, ms, f, cheio]) => {
      const at = r.fase === f;
      return React.createElement("div", {
        key: f,
        style: {
          position: 'relative',
          boxSizing: 'border-box',
          padding: '8px 8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }
      }, React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 12,
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '.06em',
          color: at ? '#0C2747' : '#334155'
        }
      }, React.createElement("span", {
        style: {
          boxSizing: 'border-box',
          flex: 'none',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: cheio ? LEDC.v[0] : 'transparent',
          border: cheio ? `1px solid ${LEDC.v[1]}` : `2px solid ${LEDC.v[0]}`
        }
      }), (at ? '▸ ' : '') + nome.toUpperCase()), React.createElement("b", {
        style: {
          font: `700 12px/1.2 ${MONO}`,
          color: '#0C2747'
        }
      }, ms), React.createElement("span", {
        style: {
          position: 'absolute',
          left: 8,
          right: 8,
          bottom: 4,
          height: 4,
          borderRadius: 2,
          background: '#E2E0DA',
          overflow: 'hidden'
        }
      }, React.createElement("span", {
        style: {
          display: 'block',
          height: '100%',
          width: `${at ? r.prog * 100 : 0}%`,
          borderRadius: 2,
          background: '#0C2747'
        }
      })));
    })));
  }
  function Piscadas({
    A,
    sel,
    sk
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        height: 96,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement("div", {
      style: {
        ...SECAO,
        borderTop: 'none',
        height: 34,
        padding: '0 12px'
      }
    }, React.createElement(Ic, {
      n: "sol",
      s: 18,
      c: "#0C2747"
    }), "PISCADAS DO LED"), React.createElement("div", {
      style: {
        flex: 1,
        padding: '0 10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
        gap: 8,
        alignItems: 'center'
      }
    }, [1, 2, 3, 4, 5].map(k => React.createElement("div", {
      key: k,
      ref: k === 2 ? A.ref('k2') : undefined,
      style: {
        ...(k === 2 && sel ? ST.S50 : ST.S28),
        minHeight: 40,
        height: 40,
        font: `700 15px/1 ${MONO}`,
        transform: k === 2 ? `scale(${sk})` : 'none'
      }
    }, k))));
  }
  function CardCH25({
    so,
    ss
  }) {
    const passo = (n, b, txt) => React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        flex: 'none',
        width: 26,
        height: 26,
        borderRadius: 6,
        background: '#0C2747',
        color: '#FFFFFF',
        font: `700 14px/26px ${MONO}`,
        textAlign: 'center'
      }
    }, n), React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 700,
        color: '#0C2747'
      }
    }, b), txt));
    return React.createElement("div", {
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        background: '#EFEDE8',
        borderBottom: '1px solid #CFCBC2'
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        height: 38,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#0C2747',
        color: '#FFFFFF',
        font: `700 20px/1 ${MONO}`
      }
    }, "CH25"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        height: 32,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 8,
        background: '#DCFCE7',
        border: '1.5px solid #15803D',
        color: '#14532D',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.1em',
        opacity: so,
        transform: `scale(${ss})`
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 14,
      c: "#14532D",
      w: 3
    }), "N\xC3O \xC9 DEFEITO")), React.createElement("div", {
      style: {
        flex: 'none',
        padding: '9px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("b", {
      style: {
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.2,
        color: '#0C2747'
      }
    }, "Tens\xE3o AC de entrada anormal (baixa ou alta)"), React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "Piscada de LED \xB7 LG \xB7 LED01 vermelho 2x \xB7 LED02 verde 5x")), React.createElement("div", {
      style: {
        flex: 'none',
        padding: '0 14px 10px',
        display: 'flex'
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        height: 26,
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.08em'
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 14,
      c: "#FFFFFF",
      w: 3
    }), "PROTE\xC7\xC3O ATIVA \u2014 N\xC3O \xC9 DEFEITO DA PLACA")), React.createElement("div", {
      style: {
        ...SECAO,
        color: '#14532D'
      }
    }, React.createElement(Ic, {
      n: "prancheta",
      s: 18,
      c: "#0C2747"
    }), React.createElement(Ic, {
      n: "ok",
      s: 13,
      c: "#14532D",
      w: 3
    }), "FA\xC7A NA BANCADA"), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: '0 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10
      }
    }, passo(1, 'Medir', ' rede nos bornes (198 a 242 V~)'), passo(2, 'Corrigir', ' disjuntor/emenda antes da placa')));
  }
  const ROTD = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.16em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const CX = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1.5px solid #A3ACB9',
    borderRadius: 10
  };
  function Laudo({
    T,
    L
  }) {
    const o = MOTION.enter(T, L, L + 0.45);
    const fx = MOTION.enter(T, L + 1.05, L + 1.5);
    const cel = [['CÓDIGO', 'CH25'], ['LED01', 'vermelho 2x'], ['LED02', 'verde 5x']];
    return React.createElement("div", {
      "data-screen-label": "Loop 02 \xB7 Laudo N\xBA 1057",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        background: `rgba(8,27,51,${0.92 * o})`,
        fontFamily: DOC,
        color: '#0C2747',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 12,
        top: 8,
        width: 776,
        height: 384,
        padding: 12,
        background: '#FFFFFF',
        borderRadius: 12,
        boxShadow: '0 16px 36px rgba(8,27,51,.45)',
        opacity: o,
        transform: `translateX(${(1 - o) * 28}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 62,
        padding: '0 20px',
        borderRadius: 12,
        background: '#0F2847',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#DCE7F5'
      }
    }, "PRESTADORA DO SERVI\xC7O"), React.createElement("b", {
      style: {
        fontSize: 20,
        lineHeight: 1.15
      }
    }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#BFD7F2'
      }
    }, "Belo Horizonte \xB7 Chave Pix ", React.createElement("b", {
      style: {
        color: '#FFFFFF'
      }
    }, "pix@climasilvaefilhos.com.br"))), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.2em',
        lineHeight: 1.2
      }
    }, "LAUDO DE APROVA\xC7\xC3O"), React.createElement("b", {
      style: {
        font: `700 27px/1.25 ${MONO}`
      }
    }, "N\xBA 1057"))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        height: 40,
        display: 'grid',
        gridTemplateColumns: '230px minmax(0,1fr)',
        alignItems: 'stretch'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "CLIENTE"), React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2
      }
    }, "Consult\xF3rio Dra. Camila")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        borderLeft: '1px solid #CBD2DB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "EQUIPAMENTO"), React.createElement("b", {
      style: {
        font: `700 13.5px/1.2 ${MONO}`
      }
    }, "LG \xB7 12.000 BTU/h \xB7 R-32"))), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '392px minmax(0,1fr)',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        flex: 'none'
      }
    }, "LEITURAS AFERIDAS NA BANCADA"), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '8px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#1E293B',
        letterSpacing: '.08em'
      }
    }, "C\xD3DIGO & LED \xB7 LG CH25 (2x / 5x)"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 24,
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        borderRadius: 8,
        background: '#DCFCE7',
        border: '1.5px solid #15803D',
        color: '#14532D',
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.05em'
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 13,
      c: "#15803D",
      w: 3
    }), "N\xC3O \xC9 DEFEITO")), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("b", {
      style: {
        fontSize: 18,
        lineHeight: 1.2
      }
    }, "Tens\xE3o AC de entrada anormal"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "Prote\xE7\xE3o ativa \xB7 n\xE3o \xE9 defeito da placa")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 6
      }
    }, cel.map(([l, v]) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        minWidth: 0,
        minHeight: 0,
        padding: '0 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '.1em',
        lineHeight: 1.2,
        color: '#334155'
      }
    }, l), React.createElement("b", {
      style: {
        font: `700 14px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, v))))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        padding: '6px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2,
        whiteSpace: 'normal',
        textWrap: 'balance'
      }
    }, "Corre\xE7\xE3o El\xE9trica de Rede / Borne + Aferi\xE7\xE3o Sob Carga"), React.createElement("b", {
      style: {
        flex: 'none',
        font: `700 15px/1.2 ${MONO}`
      }
    }, "R$ 280,00")), React.createElement("div", {
  style: {
    background: '#F0FDF4',
    borderLeft: '4px solid #15803D',
    borderRadius: 6,
    padding: '6px 9px',
    color: '#14532D',
    fontSize: 11.5,
    lineHeight: 1.25,
    whiteSpace: 'normal',
    textWrap: 'pretty',
    overflow: 'hidden'
  }
}, React.createElement("b", {
  style: {
    fontWeight: 800
  }
}, "Preven\xE7\xE3o:"), " Evita carboniza\xE7\xE3o de bornes e queima da fonte (reparo evitado de R$ 680 a R$ 1.150)."))), React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 16px',
        borderRadius: 12,
        background: 'linear-gradient(180deg,#F3ECDA 0%,#EFE6CF 100%)',
        border: '2px solid #A6945F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        fontSize: 11,
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("b", {
      style: {
        font: `700 32px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, "R$ 280,00")), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: 9,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        overflow: 'hidden'
      }
    }, React.createElement("svg", {
      width: QR.n * 3,
      height: QR.n * 3,
      viewBox: `0 0 ${QR.n} ${QR.n}`,
      shapeRendering: "crispEdges",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, React.createElement("path", {
      d: QR.d,
      fill: "#000000"
    })), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        height: QR.n * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'normal'
      }
    }, React.createElement("span", {
      style: {
        ...ROTD
      }
    }, "PIX \xB7 VALOR EXATO DO LAUDO"), React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`,
        whiteSpace: 'nowrap'
      }
    }, "R$ 280,00"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.25,
        textWrap: 'pretty'
      }
    }, "Para autorizar o servi\xE7o, responda APROVADO nesta mensagem.")))))), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 10,
        height: 84,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'linear-gradient(90deg,#081B33 0%,#0C2747 100%)',
        border: '2px solid #22C55E',
        borderRadius: 14,
        boxShadow: '0 -6px 24px rgba(8,27,51,.45)',
        opacity: fx,
        transform: `translateY(${(1 - fx) * 24}px)`,
        fontFamily: BARLOW
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 60,
        padding: '0 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        borderRadius: 10,
        background: '#15803D',
        border: '2px solid #4ADE80',
        color: '#FFFFFF',
        font: `700 18px/1.2 ${MONO}`,
        letterSpacing: '-.01em'
      }
    }, React.createElement("span", null, "\u2713 VISITA PAGA"), React.createElement("span", null, "\xB7 PIX R$ 280")), React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#FFFFFF'
      }
    }, React.createElement("span", null, "Era s\xF3 rede fraca, n\xE3o placa."), React.createElement("span", {
      style: {
        padding: '1px 6px 2px',
        margin: '0 -6px',
        borderRadius: 4,
        background: '#FACC15',
        color: '#0C2747'
      }
    }, "Visita limpa paga no Pix."))));
  }
  function Piece() {
    const {
      T,
      CUES
    } = useComposition();
    const a = CUES.Acao,
      L = CUES.LaudoPix;
    const root = React.useRef(null);
    const A = useAnchors(root);
    const V = 0.45;
    const b0 = a + 0.5;
    const tK = a + 2.1,
      tS = a + 2.5,
      tM = a + 4.95,
      tG = a + 6.15;
    const fade0 = L + 4.25,
      fade1 = L + 4.7;
    const on = t => T >= t + 0.04;
    const r = pisca(T, b0, 2),
      v = pisca(T, b0, 5);
    const so = MOTION.enter(T, tS, tS + 0.3),
      ss = so < 0.001 ? 0.9 : 1 + 0.12 * Math.sin(Math.PI * p01(T, tS, tS + 0.4));
    const sOn = T >= tM + 0.1 ? {
      n: 1,
      o: 1,
      s: 1 + 0.25 * Math.sin(Math.PI * p01(T, tM + 0.1, tM + 0.5))
    } : null;
    const sai = MOTION.enter(T, a, a + V);
    const ganchoO = T < a + V ? 1 - sai : T >= fade0 ? MOTION.enter(T, fade0, fade1) : 0;
    const ganchoX = T < a + V ? -28 * sai : 0;
    const ganchoT = T < a + V ? T : 0;
    const telaX = 24 * (1 - sai);
    const maoO = MOTION.enter(T, a + 1.2, a + 1.5) * (1 - MOTION.enter(T, tG + 0.3, L));
    return React.createElement("div", {
      style: {
        position: 'relative',
        width: 800,
        height: 500,
        overflow: 'hidden',
        ...BG
      }
    }, React.createElement("div", {
      ref: root,
      "data-screen-label": `Loop 02 · ${Math.floor(T)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ...BG,
        color: '#0C2747',
        fontFamily: BARLOW,
        transform: `translateX(${telaX}px)`
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 8,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("div", {
      style: ST.S21
    }, "\u2039"), React.createElement("div", {
      style: {
        ...ST.S14,
        lineHeight: 1.2
      }
    }, "C\xD3DIGOS & LED"), React.createElement(Faixa, null), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 15,
        lineHeight: 1.1
      }
    }, "LG")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        top: 68,
        width: 368,
        height: 356,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement(Piscadas, {
      A: A,
      sel: on(tK),
      sk: MOTION.press(T, tK)
    }), React.createElement(Simulador, {
      r: r,
      v: v
    })), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 396,
        top: 68,
        width: 388,
        height: 356,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement(CardCH25, {
      so: so,
      ss: ss
    }), React.createElement("div", {
      ref: A.ref('mandar'),
      style: {
        ...ST.S86,
        flex: 'none',
        minHeight: 44,
        height: 44,
        fontSize: 16,
        lineHeight: 1,
        letterSpacing: '.1em',
        transform: `scale(${MOTION.press(T, tM)})`
      }
    }, "+ MANDAR PARA O LAUDO")), React.createElement(Dock, {
      ativa: on(tG) ? 3 : 2,
      selo: sOn,
      rg: A.ref('ganhos'),
      sg: MOTION.press(T, tG)
    }), React.createElement(Hand, {
      T: T,
      A: A,
      o: maoO,
      start: {
        x: 260,
        y: 330
      },
      taps: [tK, tM, tG],
      moves: [{
        s: a + 1.25,
        e: tK - 0.04,
        to: 'k2',
        dy: -8
      }, {
        s: tS + 0.6,
        e: tM - 0.04,
        to: 'mandar',
        dx: 40,
        dy: -17
      }, {
        s: tM + 0.3,
        e: tG - 0.05,
        to: 'ganhos',
        dy: -12
      }]
    }), T >= L && React.createElement(Laudo, {
      T: T,
      L: L
    })), ganchoO > 0.001 && React.createElement(Gancho, {
      t: ganchoT,
      o: ganchoO,
      x: ganchoX
    }));
  }
  window.GPLoops.l02 = Piece;
})();
(function () {
  const useComposition = () => React.useContext(window.GPLoopCtx);
  const css = s => {
    const o = {};
    s.split(';').forEach(d => {
      const i = d.indexOf(':');
      if (i < 0) return;
      const k = d.slice(0, i).trim();
      if (!k) return;
      o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
    });
    return o;
  };
  const ST = {
    S10: css("box-sizing:border-box;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;line-height:1;letter-spacing:-.02em;white-space:nowrap"),
    S14: css("flex:1;font-size:20px;font-weight:700;letter-spacing:.14em;white-space:nowrap"),
    S21: css("box-sizing:border-box;flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px"),
    S22: css("box-sizing:border-box;flex:none;font:700 12px/1 'JetBrains Mono',monospace;color:#0C2747;padding:8px 8px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:6px"),
    S28: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S37: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S50: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747;border-radius:10px"),
    S86: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#1A8642 0%,#1A8642 45%,#126B34 100%);border:1px solid #14532D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #14532D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S137: css("box-sizing:border-box;flex:none;display:grid;grid-template-columns:1fr 1.25fr 1fr;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px")
  };
  const BG = {
    backgroundColor: '#D6D2C9',
    backgroundImage: 'linear-gradient(180deg,#D6D2C9 0%,#DFDCD5 14%,#CCC8BF 100%)'
  };
  const CARD = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #94A3B8',
    boxShadow: '0 1px 3px rgba(9,30,66,.14)',
    borderRadius: 12
  };
  const MONO = "'JetBrains Mono',monospace";
  const BARLOW = "'Barlow Semi Condensed',sans-serif";
  const DOC = "Arial,'Liberation Sans',Helvetica,sans-serif";
  const QR = {"payload":"00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406950.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10646304FF68","n":53,"d":"M0 0h7v1h-7zM9 0h1v1h-1zM11 0h5v1h-5zM17 0h3v1h-3zM21 0h2v1h-2zM24 0h1v1h-1zM26 0h3v1h-3zM30 0h1v1h-1zM33 0h3v1h-3zM38 0h1v1h-1zM40 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM13 1h1v1h-1zM15 1h1v1h-1zM17 1h1v1h-1zM19 1h4v1h-4zM25 1h1v1h-1zM28 1h1v1h-1zM30 1h1v1h-1zM36 1h8v1h-8zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM11 2h6v1h-6zM19 2h2v1h-2zM22 2h3v1h-3zM29 2h2v1h-2zM32 2h1v1h-1zM34 2h4v1h-4zM39 2h1v1h-1zM41 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM13 3h2v1h-2zM20 3h1v1h-1zM24 3h1v1h-1zM28 3h1v1h-1zM30 3h2v1h-2zM34 3h2v1h-2zM37 3h1v1h-1zM39 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM10 4h2v1h-2zM20 4h1v1h-1zM22 4h1v1h-1zM24 4h8v1h-8zM33 4h1v1h-1zM36 4h1v1h-1zM38 4h1v1h-1zM40 4h3v1h-3zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM12 5h3v1h-3zM18 5h2v1h-2zM24 5h1v1h-1zM28 5h1v1h-1zM31 5h4v1h-4zM36 5h2v1h-2zM41 5h2v1h-2zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM9 7h1v1h-1zM16 7h1v1h-1zM19 7h2v1h-2zM22 7h3v1h-3zM28 7h2v1h-2zM33 7h3v1h-3zM37 7h2v1h-2zM0 8h1v1h-1zM3 8h1v1h-1zM5 8h2v1h-2zM8 8h4v1h-4zM13 8h1v1h-1zM15 8h3v1h-3zM20 8h1v1h-1zM22 8h1v1h-1zM24 8h6v1h-6zM31 8h2v1h-2zM36 8h1v1h-1zM40 8h1v1h-1zM42 8h1v1h-1zM45 8h1v1h-1zM47 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM9 9h7v1h-7zM17 9h4v1h-4zM22 9h2v1h-2zM25 9h1v1h-1zM31 9h3v1h-3zM39 9h1v1h-1zM41 9h1v1h-1zM45 9h1v1h-1zM47 9h1v1h-1zM49 9h1v1h-1zM52 9h1v1h-1zM0 10h1v1h-1zM2 10h2v1h-2zM6 10h1v1h-1zM9 10h1v1h-1zM15 10h6v1h-6zM24 10h4v1h-4zM30 10h1v1h-1zM33 10h5v1h-5zM41 10h1v1h-1zM44 10h3v1h-3zM48 10h1v1h-1zM0 11h3v1h-3zM4 11h1v1h-1zM7 11h8v1h-8zM16 11h1v1h-1zM18 11h3v1h-3zM22 11h2v1h-2zM25 11h2v1h-2zM32 11h1v1h-1zM34 11h2v1h-2zM38 11h4v1h-4zM43 11h1v1h-1zM45 11h1v1h-1zM50 11h2v1h-2zM3 12h4v1h-4zM8 12h2v1h-2zM12 12h1v1h-1zM17 12h2v1h-2zM20 12h6v1h-6zM28 12h5v1h-5zM34 12h7v1h-7zM43 12h1v1h-1zM45 12h4v1h-4zM52 12h1v1h-1zM1 13h1v1h-1zM3 13h2v1h-2zM7 13h5v1h-5zM13 13h1v1h-1zM15 13h1v1h-1zM17 13h1v1h-1zM21 13h3v1h-3zM29 13h1v1h-1zM31 13h2v1h-2zM34 13h3v1h-3zM40 13h1v1h-1zM46 13h1v1h-1zM50 13h1v1h-1zM2 14h7v1h-7zM13 14h1v1h-1zM15 14h1v1h-1zM17 14h1v1h-1zM20 14h1v1h-1zM22 14h1v1h-1zM28 14h1v1h-1zM30 14h3v1h-3zM34 14h5v1h-5zM41 14h1v1h-1zM43 14h1v1h-1zM45 14h1v1h-1zM48 14h2v1h-2zM52 14h1v1h-1zM0 15h2v1h-2zM3 15h1v1h-1zM5 15h1v1h-1zM7 15h3v1h-3zM12 15h3v1h-3zM18 15h1v1h-1zM20 15h1v1h-1zM23 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM34 15h4v1h-4zM40 15h1v1h-1zM43 15h2v1h-2zM47 15h1v1h-1zM49 15h1v1h-1zM51 15h1v1h-1zM0 16h1v1h-1zM3 16h1v1h-1zM6 16h1v1h-1zM12 16h1v1h-1zM15 16h5v1h-5zM24 16h1v1h-1zM27 16h1v1h-1zM32 16h1v1h-1zM34 16h5v1h-5zM41 16h2v1h-2zM47 16h2v1h-2zM0 17h1v1h-1zM2 17h2v1h-2zM8 17h1v1h-1zM11 17h1v1h-1zM15 17h2v1h-2zM18 17h1v1h-1zM20 17h1v1h-1zM22 17h1v1h-1zM26 17h1v1h-1zM28 17h2v1h-2zM32 17h1v1h-1zM34 17h1v1h-1zM36 17h3v1h-3zM44 17h2v1h-2zM48 17h3v1h-3zM0 18h2v1h-2zM4 18h1v1h-1zM6 18h1v1h-1zM8 18h1v1h-1zM16 18h6v1h-6zM23 18h1v1h-1zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h2v1h-2zM34 18h2v1h-2zM37 18h1v1h-1zM40 18h2v1h-2zM44 18h2v1h-2zM47 18h3v1h-3zM51 18h2v1h-2zM0 19h1v1h-1zM2 19h2v1h-2zM5 19h1v1h-1zM7 19h3v1h-3zM11 19h2v1h-2zM14 19h1v1h-1zM17 19h1v1h-1zM21 19h1v1h-1zM25 19h1v1h-1zM27 19h2v1h-2zM31 19h2v1h-2zM34 19h4v1h-4zM42 19h5v1h-5zM48 19h2v1h-2zM51 19h2v1h-2zM2 20h1v1h-1zM5 20h2v1h-2zM8 20h5v1h-5zM14 20h1v1h-1zM18 20h1v1h-1zM21 20h1v1h-1zM23 20h2v1h-2zM30 20h2v1h-2zM36 20h1v1h-1zM40 20h9v1h-9zM52 20h1v1h-1zM3 21h1v1h-1zM7 21h1v1h-1zM9 21h2v1h-2zM17 21h1v1h-1zM20 21h2v1h-2zM23 21h2v1h-2zM27 21h1v1h-1zM29 21h1v1h-1zM31 21h3v1h-3zM36 21h1v1h-1zM40 21h1v1h-1zM43 21h1v1h-1zM45 21h1v1h-1zM49 21h2v1h-2zM52 21h1v1h-1zM0 22h3v1h-3zM4 22h1v1h-1zM6 22h2v1h-2zM9 22h2v1h-2zM13 22h3v1h-3zM17 22h4v1h-4zM22 22h1v1h-1zM24 22h6v1h-6zM31 22h2v1h-2zM34 22h5v1h-5zM42 22h2v1h-2zM46 22h3v1h-3zM50 22h1v1h-1zM0 23h1v1h-1zM2 23h1v1h-1zM4 23h2v1h-2zM8 23h1v1h-1zM10 23h2v1h-2zM13 23h3v1h-3zM19 23h1v1h-1zM23 23h2v1h-2zM26 23h6v1h-6zM34 23h5v1h-5zM40 23h2v1h-2zM44 23h1v1h-1zM48 23h1v1h-1zM50 23h1v1h-1zM52 23h1v1h-1zM1 24h1v1h-1zM4 24h5v1h-5zM11 24h4v1h-4zM16 24h1v1h-1zM18 24h1v1h-1zM20 24h3v1h-3zM24 24h5v1h-5zM30 24h4v1h-4zM36 24h1v1h-1zM40 24h1v1h-1zM43 24h6v1h-6zM50 24h1v1h-1zM52 24h1v1h-1zM1 25h1v1h-1zM4 25h1v1h-1zM8 25h1v1h-1zM15 25h1v1h-1zM17 25h2v1h-2zM24 25h1v1h-1zM28 25h1v1h-1zM31 25h2v1h-2zM34 25h4v1h-4zM41 25h1v1h-1zM43 25h2v1h-2zM48 25h1v1h-1zM51 25h1v1h-1zM0 26h1v1h-1zM3 26h2v1h-2zM6 26h1v1h-1zM8 26h1v1h-1zM10 26h1v1h-1zM13 26h2v1h-2zM16 26h1v1h-1zM18 26h3v1h-3zM22 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h3v1h-3zM36 26h3v1h-3zM40 26h1v1h-1zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM51 26h2v1h-2zM0 27h1v1h-1zM2 27h3v1h-3zM8 27h4v1h-4zM16 27h1v1h-1zM19 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM28 27h3v1h-3zM35 27h1v1h-1zM37 27h2v1h-2zM40 27h2v1h-2zM43 27h2v1h-2zM48 27h2v1h-2zM51 27h1v1h-1zM0 28h3v1h-3zM4 28h6v1h-6zM11 28h2v1h-2zM17 28h2v1h-2zM23 28h11v1h-11zM35 28h4v1h-4zM42 28h1v1h-1zM44 28h5v1h-5zM0 29h1v1h-1zM2 29h1v1h-1zM4 29h2v1h-2zM8 29h2v1h-2zM13 29h3v1h-3zM17 29h1v1h-1zM19 29h2v1h-2zM22 29h2v1h-2zM25 29h2v1h-2zM28 29h2v1h-2zM32 29h2v1h-2zM36 29h1v1h-1zM38 29h2v1h-2zM43 29h3v1h-3zM47 29h1v1h-1zM52 29h1v1h-1zM0 30h1v1h-1zM2 30h1v1h-1zM6 30h1v1h-1zM12 30h1v1h-1zM14 30h1v1h-1zM17 30h2v1h-2zM20 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM28 30h3v1h-3zM32 30h2v1h-2zM36 30h1v1h-1zM40 30h2v1h-2zM44 30h5v1h-5zM50 30h1v1h-1zM52 30h1v1h-1zM2 31h1v1h-1zM5 31h1v1h-1zM7 31h2v1h-2zM10 31h1v1h-1zM12 31h2v1h-2zM20 31h1v1h-1zM22 31h1v1h-1zM24 31h1v1h-1zM26 31h1v1h-1zM28 31h1v1h-1zM30 31h1v1h-1zM35 31h1v1h-1zM38 31h2v1h-2zM41 31h1v1h-1zM44 31h3v1h-3zM48 31h2v1h-2zM3 32h1v1h-1zM5 32h2v1h-2zM14 32h1v1h-1zM17 32h3v1h-3zM21 32h7v1h-7zM29 32h1v1h-1zM31 32h1v1h-1zM33 32h1v1h-1zM36 32h1v1h-1zM39 32h2v1h-2zM42 32h1v1h-1zM46 32h1v1h-1zM50 32h1v1h-1zM52 32h1v1h-1zM0 33h1v1h-1zM2 33h3v1h-3zM7 33h1v1h-1zM13 33h1v1h-1zM16 33h1v1h-1zM18 33h4v1h-4zM23 33h3v1h-3zM28 33h1v1h-1zM30 33h2v1h-2zM33 33h1v1h-1zM35 33h3v1h-3zM39 33h2v1h-2zM44 33h1v1h-1zM47 33h1v1h-1zM49 33h2v1h-2zM52 33h1v1h-1zM1 34h1v1h-1zM5 34h3v1h-3zM10 34h3v1h-3zM17 34h1v1h-1zM19 34h1v1h-1zM24 34h3v1h-3zM30 34h2v1h-2zM34 34h1v1h-1zM36 34h1v1h-1zM39 34h1v1h-1zM43 34h1v1h-1zM49 34h2v1h-2zM0 35h2v1h-2zM3 35h1v1h-1zM5 35h1v1h-1zM10 35h1v1h-1zM12 35h2v1h-2zM15 35h1v1h-1zM17 35h1v1h-1zM19 35h2v1h-2zM22 35h2v1h-2zM26 35h1v1h-1zM33 35h1v1h-1zM36 35h3v1h-3zM40 35h1v1h-1zM44 35h1v1h-1zM46 35h1v1h-1zM49 35h2v1h-2zM0 36h4v1h-4zM5 36h3v1h-3zM9 36h1v1h-1zM14 36h1v1h-1zM16 36h3v1h-3zM22 36h2v1h-2zM26 36h3v1h-3zM30 36h1v1h-1zM32 36h3v1h-3zM36 36h3v1h-3zM40 36h1v1h-1zM42 36h1v1h-1zM44 36h1v1h-1zM46 36h4v1h-4zM51 36h2v1h-2zM1 37h1v1h-1zM3 37h1v1h-1zM8 37h1v1h-1zM10 37h1v1h-1zM12 37h1v1h-1zM18 37h1v1h-1zM20 37h1v1h-1zM25 37h2v1h-2zM32 37h3v1h-3zM36 37h1v1h-1zM39 37h3v1h-3zM43 37h2v1h-2zM50 37h2v1h-2zM0 38h2v1h-2zM6 38h1v1h-1zM8 38h2v1h-2zM14 38h1v1h-1zM17 38h1v1h-1zM19 38h2v1h-2zM22 38h3v1h-3zM27 38h1v1h-1zM29 38h1v1h-1zM33 38h6v1h-6zM40 38h2v1h-2zM45 38h2v1h-2zM48 38h2v1h-2zM52 38h1v1h-1zM0 39h4v1h-4zM8 39h5v1h-5zM15 39h1v1h-1zM17 39h1v1h-1zM19 39h2v1h-2zM23 39h1v1h-1zM25 39h1v1h-1zM27 39h1v1h-1zM29 39h1v1h-1zM31 39h2v1h-2zM34 39h3v1h-3zM40 39h3v1h-3zM44 39h4v1h-4zM52 39h1v1h-1zM5 40h2v1h-2zM10 40h1v1h-1zM12 40h2v1h-2zM17 40h2v1h-2zM25 40h2v1h-2zM32 40h1v1h-1zM34 40h4v1h-4zM42 40h2v1h-2zM47 40h6v1h-6zM0 41h3v1h-3zM4 41h2v1h-2zM8 41h1v1h-1zM10 41h1v1h-1zM12 41h2v1h-2zM16 41h3v1h-3zM20 41h1v1h-1zM23 41h1v1h-1zM27 41h1v1h-1zM31 41h1v1h-1zM36 41h1v1h-1zM38 41h4v1h-4zM43 41h3v1h-3zM47 41h1v1h-1zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h5v1h-5zM12 42h1v1h-1zM19 42h1v1h-1zM22 42h1v1h-1zM24 42h1v1h-1zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h1v1h-1zM35 42h1v1h-1zM38 42h3v1h-3zM42 42h2v1h-2zM46 42h1v1h-1zM48 42h1v1h-1zM50 42h1v1h-1zM52 42h1v1h-1zM1 43h2v1h-2zM7 43h1v1h-1zM9 43h3v1h-3zM13 43h2v1h-2zM16 43h2v1h-2zM19 43h4v1h-4zM25 43h1v1h-1zM28 43h3v1h-3zM32 43h1v1h-1zM36 43h1v1h-1zM40 43h1v1h-1zM43 43h1v1h-1zM48 43h2v1h-2zM51 43h2v1h-2zM3 44h1v1h-1zM6 44h4v1h-4zM11 44h1v1h-1zM15 44h2v1h-2zM19 44h2v1h-2zM22 44h7v1h-7zM30 44h2v1h-2zM33 44h4v1h-4zM38 44h5v1h-5zM44 44h5v1h-5zM52 44h1v1h-1zM8 45h3v1h-3zM13 45h2v1h-2zM22 45h1v1h-1zM24 45h1v1h-1zM28 45h1v1h-1zM31 45h3v1h-3zM35 45h3v1h-3zM40 45h2v1h-2zM43 45h2v1h-2zM48 45h2v1h-2zM51 45h1v1h-1zM0 46h7v1h-7zM10 46h1v1h-1zM13 46h1v1h-1zM15 46h8v1h-8zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h3v1h-3zM34 46h4v1h-4zM39 46h3v1h-3zM44 46h1v1h-1zM46 46h1v1h-1zM48 46h4v1h-4zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h2v1h-2zM11 47h4v1h-4zM18 47h5v1h-5zM24 47h1v1h-1zM28 47h1v1h-1zM30 47h5v1h-5zM40 47h1v1h-1zM43 47h2v1h-2zM48 47h4v1h-4zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM9 48h3v1h-3zM13 48h1v1h-1zM16 48h4v1h-4zM21 48h1v1h-1zM24 48h5v1h-5zM31 48h1v1h-1zM33 48h5v1h-5zM40 48h1v1h-1zM42 48h1v1h-1zM44 48h6v1h-6zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h2v1h-2zM12 49h4v1h-4zM21 49h2v1h-2zM25 49h1v1h-1zM28 49h1v1h-1zM32 49h4v1h-4zM37 49h1v1h-1zM39 49h1v1h-1zM41 49h1v1h-1zM43 49h4v1h-4zM48 49h1v1h-1zM50 49h2v1h-2zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM12 50h1v1h-1zM15 50h1v1h-1zM17 50h1v1h-1zM20 50h2v1h-2zM23 50h3v1h-3zM29 50h5v1h-5zM36 50h4v1h-4zM46 50h4v1h-4zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h2v1h-2zM16 51h1v1h-1zM18 51h1v1h-1zM20 51h2v1h-2zM24 51h1v1h-1zM29 51h1v1h-1zM31 51h1v1h-1zM33 51h1v1h-1zM36 51h2v1h-2zM39 51h2v1h-2zM44 51h1v1h-1zM47 51h2v1h-2zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h2v1h-2zM11 52h9v1h-9zM24 52h1v1h-1zM26 52h1v1h-1zM29 52h2v1h-2zM32 52h1v1h-1zM36 52h4v1h-4zM41 52h2v1h-2zM47 52h3v1h-3zM51 52h1v1h-1z"};
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1,
      bx = 3 * (x2 - x1) - cx,
      ax = 1 - cx - bx,
      cy = 3 * y1,
      by = 3 * (y2 - y1) - cy,
      ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t,
      sy = t => ((ay * t + by) * t + cy) * t;
    return x => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0,
        hi = 1,
        t = x;
      for (let i = 0; i < 26; i++) {
        t = (lo + hi) / 2;
        if (sx(t) < x) lo = t;else hi = t;
      }
      return sy(t);
    };
  }
  const CURVA = bezier(0.22, 1, 0.36, 1);
  const p01 = (T, s, e) => e <= s ? T >= s ? 1 : 0 : Math.min(1, Math.max(0, (T - s) / (e - s)));
  const MOTION = {
    enter: (T, s, e) => CURVA(p01(T, s, e)),
    press: (T, at) => 1 - 0.07 * Math.sin(Math.PI * p01(T, at - 0.1, at + 0.24)),
    pulse: (t, per) => 0.5 - 0.5 * Math.cos(2 * Math.PI * t / per)
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  const R_ = (x, y, w, h, r) => 'M' + (x + r) + ' ' + y + 'h' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + ' ' + r + 'h-' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + '-' + r + 'v-' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + '-' + r + 'z';
  const C_ = (x, y, r) => 'M' + (x + r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 1-' + 2 * r + ' 0 ' + r + ' ' + r + ' 0 0 1 ' + 2 * r + ' 0z';
  const IC = {
    prancheta: [R_(8, 2, 8, 4, 1), 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
    multimetro: [R_(5, 2, 14, 20, 2), R_(8, 5, 8, 4, 0.5), C_(12, 15, 2.5), 'M12 15l1.5-1.5'],
    sol: [C_(12, 12, 4), 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
    documento: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'],
    raio: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
    desliga: ['M12 2v10', 'M18.4 6.6a9 9 0 1 1-12.77.04'],
    ok: ['M20 6 9 17l-5-5'],
    atividade: ['M22 12h-4l-3 9L9 3l-3 9H2'],
    fechar: ['M18 6 6 18', 'm6 6 12 12']
  };
  function Ic({
    n,
    s = 20,
    c = '#334155',
    w = 1.6
  }) {
    return React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: c,
      strokeWidth: w,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, IC[n].map((d, i) => React.createElement("path", {
      key: i,
      d: d
    })));
  }
  function useAnchors(rootRef) {
    const els = React.useRef({});
    const [pos, setPos] = React.useState({});
    const ref = k => el => {
      if (el) els.current[k] = el;
    };
    React.useLayoutEffect(() => {
      const medir = () => {
        const root = rootRef.current;
        if (!root) return;
        const out = {};
        Object.keys(els.current).forEach(k => {
          const el = els.current[k];
          let x = 0,
            y = 0,
            e = el;
          while (e && e !== root) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
          }
          out[k] = {
            x: Math.round(x + el.offsetWidth / 2),
            y: Math.round(y + el.offsetHeight / 2),
            w: el.offsetWidth
          };
        });
        setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
      };
      medir();
      const t1 = setTimeout(medir, 400),
        t2 = setTimeout(medir, 1500);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return {
      ref,
      pos
    };
  }
  const MAO = 'M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L6 14Z';
  function Hand({
    T,
    A,
    moves,
    taps = [],
    start,
    o
  }) {
    if (o <= 0.001) return null;
    let cur = start,
      prev = start;
    for (const m of moves) {
      const tg = typeof m.to === 'string' ? A.pos[m.to] : m.to;
      if (!tg) return null;
      const pt = {
        x: tg.x + (m.dx || 0),
        y: tg.y + (m.dy || 0)
      };
      if (T < m.s) break;
      const p = MOTION.enter(T, m.s, m.e);
      cur = {
        x: lerp(prev.x, pt.x, p),
        y: lerp(prev.y, pt.y, p)
      };
      prev = pt;
    }
    let sc = 1;
    taps.forEach(t => {
      sc *= MOTION.press(T, t);
    });
    const rip = taps.map(t => {
      const p = p01(T, t, t + 0.6);
      return p > 0 && p < 1 ? p : null;
    }).find(p => p !== null);
    const k = 50 / 24,
      ox = 8 * k,
      oy = 2.2 * k;
    return React.createElement(React.Fragment, null, rip != null && React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid #FFB020',
        zIndex: 49,
        pointerEvents: 'none',
        opacity: 0.85 * (1 - rip) * o,
        transform: `translate(${cur.x - 28}px,${cur.y - 28}px) scale(${0.3 + 0.9 * CURVA(rip)})`
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        zIndex: 50,
        pointerEvents: 'none',
        opacity: o,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `translate(${cur.x - ox}px,${cur.y - oy}px) scale(${sc})`
      }
    }, React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        filter: 'drop-shadow(0 4px 6px rgba(9,30,66,.35))'
      }
    }, React.createElement("path", {
      d: MAO,
      fill: "#FFFFFF",
      stroke: "#0C2747",
      strokeWidth: "1.3",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 9.5V12M14 10V12M18 11V12",
      fill: "none",
      stroke: "#0C2747",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    }))));
  }
  function Faixa() {
    const cel = [['MARCA', 'Carrier'], ['BTU/h', '60.000'], ['FLUIDO', 'R-410A']];
    return React.createElement("div", {
      style: {
        ...ST.S137,
        width: 320,
        height: 50
      }
    }, cel.map(([l, v], i) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
        borderLeft: i ? '1px solid rgba(63,50,16,.25)' : 'none'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, l, " \u25BC"), React.createElement("b", {
      style: i ? {
        font: `700 17px/1.25 ${MONO}`
      } : {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, v))));
  }
  const DOCK = [['Sintomas', 'prancheta'], ['Aferir Vivo', 'multimetro'], ['Códigos & LED', 'sol'], ['Ganhos & Laudo', 'documento']];
  function Dock({
    ativa,
    selo,
    rg,
    sg
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 8,
        height: 60,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 8,
        zIndex: 5
      }
    }, DOCK.map(([l, ic], i) => React.createElement("div", {
      key: l,
      ref: i === 3 ? rg : undefined,
      style: {
        ...ST.S10,
        position: 'relative',
        fontSize: 14,
        gap: 6,
        transform: i === 3 ? `scale(${sg})` : 'none'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        width: 36,
        height: 3,
        borderRadius: 2,
        background: i === ativa ? '#FFB020' : '#081B33',
        boxShadow: i === ativa ? '0 0 6px rgba(255,176,32,.8)' : 'none'
      }
    }), React.createElement(Ic, {
      n: ic,
      s: 22,
      c: "#FFFFFF"
    }), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, l), i === 3 && selo && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -9,
        right: 12,
        width: 28,
        height: 28,
        boxSizing: 'border-box',
        borderRadius: '50%',
        background: '#FFB020',
        border: '1px solid #7A4E00',
        color: '#0C2747',
        font: `700 15px/26px ${BARLOW}`,
        textAlign: 'center',
        opacity: selo.o,
        transform: `scale(${selo.s})`
      }
    }, selo.n))));
  }
  const ROTL = {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.06em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const SECAO = {
    boxSizing: 'border-box',
    flex: 'none',
    height: 34,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: '#EFEDE8',
    borderBottom: '1px solid #CFCBC2',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.14em',
    lineHeight: 1.2,
    color: '#0C2747'
  };
  function Gancho({
    t,
    o,
    x = 0
  }) {
    const g = MOTION.pulse(t, 1.1);
    const zoom = 1 + 3.5 / 156 * p01(t, 0, 3.8);
    const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55));
    const l1 = MOTION.enter(t, 0.45, 1.05),
      l2 = MOTION.enter(t, 1.05, 1.65);
    const tinta = p => {
      const c = (a, b) => Math.round(lerp(a, b, p));
      return `rgb(${c(255, 12)},${c(255, 39)},${c(255, 71)})`;
    };
    const grifo = (txt, p) => React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '1px 8px 3px',
        margin: '0 -8px',
        borderRadius: 5,
        backgroundImage: 'linear-gradient(#FACC15,#FACC15)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: `${p * 100}% 100%`,
        color: tinta(p)
      }
    }, txt);
    return React.createElement("div", {
      "data-screen-label": `Loop 03 · Gancho · ${Math.floor(t)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 70,
        opacity: o,
        transform: `translateX(${x}px)`,
        background: 'radial-gradient(110% 90% at 28% 40%,#14365F 0%,#0C2747 52%,#081B33 100%)',
        color: '#FFFFFF',
        fontFamily: BARLOW,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 24,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        fontSize: 15,
        lineHeight: 1.2,
        letterSpacing: '.16em'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, "BANCADA GELOPRO"), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#BFD7F2'
      }
    }, "\xB7 EL\xC9TRICA GUIADA")), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        padding: '0 12px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        letterSpacing: '.04em'
      }
    }, "CARRIER \xB7 60.000 BTU/h \xB7 R-410A")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 52,
        top: 90,
        width: 260,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22,
        transform: `scale(${zoom})`,
        transformOrigin: '50% 45%'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: 228,
        height: 228,
        borderRadius: 44,
        background: '#0E2240',
        border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
        boxShadow: `0 0 ${16 + 26 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/t11_bornes_fios.webp",
      alt: "",
      width: "156",
      height: "156",
      style: {
        width: 156,
        height: 156,
        display: 'block',
        borderRadius: 24,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)'
      }
    })), React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 52,
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    background: '#B91C1C',
    border: '1px solid #7F1D1D',
    boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
    font: "800 22px/1.1 'Barlow Semi Condensed',sans-serif",
    letterSpacing: '.04em',
    whiteSpace: 'nowrap',
    transform: `scale(${selo})`
  }
}, "\u2715 CURTO NA PLACA")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 360,
        right: 36,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        whiteSpace: 'normal'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.16,
        letterSpacing: '-.005em',
        textWrap: 'pretty'
      }
    }, "M\xE1quina 60.000 BTU toda morta?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.12,
        whiteSpace: 'nowrap'
      }
    }, grifo('Veja o pino exato pra medir', l1), grifo('sem fechar curto na placa.', l2))));
  }
  const SEG = {
    0: 'ABCDEF',
    1: 'BC',
    2: 'ABGED',
    3: 'ABGCD',
    4: 'FGBC',
    5: 'AFGCD',
    6: 'AFGECD',
    7: 'ABC',
    8: 'ABCDEFG',
    9: 'ABCDFG'
  };
  const f2 = n => String(+(+n).toFixed(2));
  function segPts(s, x, y, w, h, t) {
    const g = t * 0.14,
      x1 = x + t / 2 + g,
      x2 = x + w - t / 2 - g,
      m = y + h / 2;
    const H = cy => [[x1, cy], [x1 + t / 2, cy - t / 2], [x2 - t / 2, cy - t / 2], [x2, cy], [x2 - t / 2, cy + t / 2], [x1 + t / 2, cy + t / 2]];
    const V = (cx, y1, y2) => [[cx, y1], [cx + t / 2, y1 + t / 2], [cx + t / 2, y2 - t / 2], [cx, y2], [cx - t / 2, y2 - t / 2], [cx - t / 2, y1 + t / 2]];
    return {
      A: H(y + t / 2),
      G: H(m),
      D: H(y + h - t / 2),
      F: V(x + t / 2, y + t / 2 + g, m - g),
      B: V(x + w - t / 2, y + t / 2 + g, m - g),
      E: V(x + t / 2, m + g, y + h - t / 2 - g),
      C: V(x + w - t / 2, m + g, y + h - t / 2 - g)
    }[s];
  }
  const poly = p => 'M' + p.map(q => f2(q[0]) + ' ' + f2(q[1])).join('L') + 'Z';
  function digitos(str) {
    const xr = 89.5,
      y = 25,
      w = 10.5,
      h = 24,
      t = 2.8,
      gap = 3,
      dgap = 7;
    const ds = str.replace('.', ''),
      n = ds.length,
      dot = str.indexOf('.') - 1,
      ex = dot >= 0 ? dgap - gap : 0,
      x0 = xr - (n * w + (n - 1) * gap + ex) - 0.0875 * h,
      dt = Math.max(3, t * 1.15);
    let ghost = '',
      lit = '';
    for (let i = 0; i < n; i++) {
      const x = x0 + i * (w + gap) + (i > dot ? ex : 0);
      'ABCDEFG'.split('').forEach(sg => {
        const p = poly(segPts(sg, x, y, w, h, t));
        ghost += p;
        if (SEG[ds[i]].includes(sg)) lit += p;
      });
      if (i === dot) lit += 'M' + f2(x + w + dgap / 2 - dt / 2) + ' ' + f2(y + h - dt) + 'h' + f2(dt) + 'v' + f2(dt) + 'h-' + f2(dt) + 'Z';
    }
    return {
      ghost,
      lit,
      tx: f2(0.0875 * (y + h))
    };
  }
  function Multimetro({
    leitura,
    h = 160,
    pilula = '20k'
  }) {
    const d = digitos(leitura);
    const P = (a, r) => [60 + r * Math.sin(a * Math.PI / 180), 105 - r * Math.cos(a * Math.PI / 180)];
    const arco = (a1, a2, r, c) => {
      const p = P(a1, r),
        q = P(a2, r);
      return React.createElement("path", {
        d: `M${f2(p[0])} ${f2(p[1])}A${r} ${r} 0 0 1 ${f2(q[0])} ${f2(q[1])}`,
        fill: "none",
        stroke: c,
        strokeWidth: "1.3",
        strokeLinecap: "round"
      });
    };
    const sel = P(216, 26.6);
    const larga = pilula.length > 3;
    return React.createElement("svg", {
      viewBox: "0 0 120 190",
      height: h,
      width: h * 120 / 190,
      style: {
        display: 'block',
        flex: 'none',
        overflow: 'visible'
      }
    }, React.createElement("defs", null, React.createElement("linearGradient", {
      id: "mmY",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#F2B705"
    }), React.createElement("stop", {
      offset: ".1",
      stopColor: "#FFD703"
    }), React.createElement("stop", {
      offset: ".36",
      stopColor: "#FFE74A"
    }), React.createElement("stop", {
      offset: ".68",
      stopColor: "#FFD703"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#F2B705"
    })), React.createElement("linearGradient", {
      id: "mmF",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#2E333B"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#23272E"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#15181C"
    })), React.createElement("radialGradient", {
      id: "mmL",
      cx: ".5",
      cy: ".5",
      r: ".78"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#BAE6FD"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#6C9BF2"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#2563EB"
    })), React.createElement("radialGradient", {
      id: "mmK",
      cx: ".38",
      cy: ".28",
      r: ".85"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#5A636E"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#2E333B"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#15181C"
    }))), React.createElement("rect", {
      x: "11",
      y: "5.5",
      width: "102",
      height: "176",
      rx: "16",
      fill: "#3F3210",
      opacity: ".3"
    }), React.createElement("rect", {
      x: "9",
      y: "2",
      width: "102",
      height: "176",
      rx: "16",
      fill: "url(#mmY)",
      stroke: "#B98708",
      strokeWidth: "1.2"
    }), React.createElement("rect", {
      x: "14.4",
      y: "7.4",
      width: "91.2",
      height: "165.2",
      rx: "10.4",
      fill: "#B98708",
      opacity: ".6"
    }), React.createElement("rect", {
      x: "16",
      y: "9",
      width: "88",
      height: "162",
      rx: "9",
      fill: "url(#mmF)",
      stroke: "#15181C",
      strokeWidth: "1.2"
    }), React.createElement("rect", {
      x: "22",
      y: "15",
      width: "76",
      height: "44",
      rx: "6",
      fill: "#15181C",
      stroke: "#4A515C",
      strokeWidth: ".8"
    }), React.createElement("rect", {
      x: "27",
      y: "19.5",
      width: "66",
      height: "35",
      rx: "1.5",
      fill: "url(#mmL)"
    }), React.createElement("g", {
      transform: `translate(${d.tx} 0) skewX(-5)`
    }, React.createElement("path", {
      d: d.ghost,
      fill: "#0C2747",
      opacity: ".07"
    }), React.createElement("path", {
      d: d.lit,
      fill: "#0C2747"
    })), React.createElement("rect", {
      x: "22",
      y: "62",
      width: "17",
      height: "10",
      rx: "5",
      fill: "#4A515C",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("circle", {
      cx: "92.5",
      cy: "67",
      r: "5.5",
      fill: "url(#mmK)",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("circle", {
      cx: "60",
      cy: "105",
      r: "24.5",
      fill: "#000000",
      opacity: ".6"
    }), arco(-9, 9, 29, '#D43A3A'), arco(14, 40, 29, '#F7F8FA'), arco(50, 130, 29, '#4AF08A'), arco(140, 148, 29, '#F7F8FA'), arco(157, 167, 29, '#D43A3A'), arco(176, 256, 29, '#4AF08A'), arco(266, 346, 29, '#F7F8FA'), React.createElement("circle", {
      cx: f2(sel[0]),
      cy: f2(sel[1]),
      r: "1.9",
      fill: "#4AF08A"
    }), React.createElement("rect", {
      x: larga ? 13 : 19.5,
      y: "131.5",
      width: larga ? 27 : 20,
      height: "11.5",
      rx: "4",
      fill: "#06140C",
      stroke: "#4AF08A",
      strokeWidth: "1"
    }), React.createElement("text", {
      x: larga ? 26.5 : 29.5,
      y: larga ? 140.2 : 141.1,
      textAnchor: "middle",
      fontFamily: "Barlow Semi Condensed,sans-serif",
      fontWeight: "700",
      fontSize: larga ? 8.5 : 11,
      fill: "#4AF08A",
      textLength: larga ? 22 : undefined,
      lengthAdjust: "spacingAndGlyphs"
    }, pilula), React.createElement("circle", {
      cx: "60",
      cy: "105",
      r: "22",
      fill: "url(#mmK)",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("g", {
      transform: "rotate(216 60 105)"
    }, React.createElement("path", {
      d: "M56 87.5Q60 84.2 64 87.5L66.4 122.5Q60 126.6 53.6 122.5Z",
      fill: "#4A515C",
      stroke: "#15181C",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), React.createElement("rect", {
      x: "59",
      y: "86.6",
      width: "2",
      height: "9.5",
      rx: "1",
      fill: "#FFFFFF"
    })), React.createElement("rect", {
      x: "21",
      y: "150",
      width: "78",
      height: "18",
      rx: "5",
      fill: "#000000",
      opacity: ".3"
    }), [38, 60, 82].map(x => React.createElement("g", {
      key: x
    }, React.createElement("circle", {
      cx: x,
      cy: "159",
      r: "6",
      fill: "#8C95A1"
    }), React.createElement("circle", {
      cx: x,
      cy: "159",
      r: "4.5",
      fill: "#15181C"
    }))), React.createElement("rect", {
      x: "58.1",
      y: "166",
      width: "3.8",
      height: "22",
      fill: "#15181C"
    }), React.createElement("rect", {
      x: "55.2",
      y: "152",
      width: "9.6",
      height: "17",
      rx: "3.6",
      fill: "#2E333B",
      stroke: "#5A636E",
      strokeWidth: ".9"
    }), React.createElement("rect", {
      x: "80.1",
      y: "166",
      width: "3.8",
      height: "22",
      fill: "#B91C1C"
    }), React.createElement("rect", {
      x: "77.2",
      y: "152",
      width: "9.6",
      height: "17",
      rx: "3.6",
      fill: "#D43A3A",
      stroke: "#7F1D1D",
      strokeWidth: ".9"
    }));
  }
  const ALVOS = [[4.4, 13.0], [38.4, 5.2], [60.7, 5.2], [79.5, 5.2], [96.6, 70.6]];
  const ARTE_H = 366 * 941 / 1672;
  function Diagrama({
    ativo,
    pulso
  }) {
    return React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        flex: 'none',
        height: 170,
        borderRadius: 12,
        border: '1px solid #94A3B8',
        overflow: 'hidden',
        background: '#FFFFFF'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/d023.webp",
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover',
        objectPosition: '50% 0%'
      }
    }), ALVOS.map(([x, y], k) => {
      const on = k === ativo;
      return React.createElement("span", {
        key: k,
        style: {
          boxSizing: 'border-box',
          position: 'absolute',
          left: `clamp(17px, ${x}%, calc(100% - 17px))`,
          top: `clamp(17px, ${(y / 100 * ARTE_H).toFixed(2)}px, calc(100% - 17px))`,
          width: 34,
          height: 34,
          marginLeft: -17,
          marginTop: -17,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          font: `700 12px/1 ${MONO}`,
          background: on ? '#FFB020' : '#0C2747',
          color: on ? '#1A1203' : '#FFFFFF',
          border: on ? '2px solid #5C3A00' : '2px solid #FFFFFF',
          boxShadow: on ? `0 0 0 ${4 + 4 * pulso}px rgba(255,176,32,${0.55 - 0.3 * pulso})` : '0 1px 3px rgba(9,30,66,.4)'
        }
      }, '0' + (k + 1));
    }));
  }
  function Verificacao({
    A,
    lcd,
    d,
    sd
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
        padding: 10,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: ROTL
    }, "VERIFICA\xC7\xC3O 04"), React.createElement("b", {
      style: {
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.2,
        color: '#0C2747'
      }
    }, "Me\xE7a a fonte"), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "220V CA entra \u2192 0V CC sai")), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        ...ST.S28,
        minHeight: 44,
        height: 44,
        gap: 6,
        lineHeight: 1
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 16,
      c: "#FFFFFF",
      w: 2.6
    }), "NORMAL"), React.createElement("div", {
      ref: A.ref('defeito'),
      style: {
        ...ST.S28,
        position: 'relative',
        minHeight: 44,
        height: 44,
        lineHeight: 1,
        transform: `scale(${sd})`
      }
    }, d > 0.001 && React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        inset: -1,
        borderRadius: 10,
        background: 'radial-gradient(140% 130% at 50% -10%,#D43A3A 0%,#C42B2B 45%,#A61919 100%)',
        border: '1px solid #7F1D1D',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,.3),inset 0 -2px 0 #7F1D1D',
        opacity: d
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Ic, {
      n: "fechar",
      s: 14,
      c: "#FFFFFF",
      w: 2.8
    }), "DEFEITO")))), React.createElement(Multimetro, {
      leitura: lcd,
      h: 128,
      pilula: "V CC"
    }));
  }
  const CAUSAS = [['1º · 70% MUITO COMUM', 'Fonte chaveada morta', 70], ['2º · 20% COMUM', 'Fusível / Varistor aberto', 20], ['3º · 10% MENOS COMUM', 'Disjuntor ou cabo L-N', 10]];
  function Causas({
    T,
    c0,
    dest
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement("div", {
      style: SECAO
    }, React.createElement(Ic, {
      n: "atividade",
      s: 18,
      c: "#0C2747",
      w: 2
    }), "CAUSAS PROV\xC1VEIS \xB7 D-023"), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: '6px 12px 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5
      }
    }, CAUSAS.map(([rank, nome, pct], i) => {
      const b = MOTION.enter(T, c0 + i * 0.25, c0 + i * 0.25 + 0.7);
      const hi = i === 0 ? dest : 0;
      return React.createElement("div", {
        key: nome,
        style: {
          boxSizing: 'border-box',
          padding: '3px 8px 5px',
          borderRadius: 10,
          background: `rgba(255,176,32,${0.12 * hi})`,
          boxShadow: `inset 0 0 0 2px rgba(255,176,32,${hi})`,
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8
        }
      }, React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '.06em',
          lineHeight: 1.2,
          color: '#334155'
        }
      }, rank), React.createElement("b", {
        style: {
          font: `700 20px/1.1 ${MONO}`,
          color: '#0C2747'
        }
      }, pct, "%")), React.createElement("b", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          lineHeight: 1.15,
          color: '#0C2747'
        }
      }, nome), React.createElement("span", {
        style: {
          position: 'relative',
          height: 6,
          borderRadius: 3,
          background: '#E5E2DC',
          overflow: 'hidden'
        }
      }, React.createElement("span", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${pct * b}%`,
          borderRadius: 3,
          background: '#0C2747'
        }
      })));
    }), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        padding: '7px 10px',
        borderRadius: 8,
        background: '#FEF3C7',
        border: '1.5px solid #FFB020',
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#78350F',
        whiteSpace: 'normal'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "Antes de condenar:"), " 220V CA sem 5V/12V CC confirma fonte na hora")));
  }
  const ROTD = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.16em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const CX = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1.5px solid #A3ACB9',
    borderRadius: 10
  };
  function Laudo({
    T,
    L
  }) {
    const o = MOTION.enter(T, L, L + 0.45);
    const fx = MOTION.enter(T, L + 1.05, L + 1.5);
    const cel = [['01 DISJUNTOR', '220 V~'], ['02 BORNES L-N', '220 V~'], ['04 FONTE', '0,0 V CC']];
    return React.createElement("div", {
      "data-screen-label": "Loop 03 \xB7 Laudo N\xBA 1064",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        background: `rgba(8,27,51,${0.92 * o})`,
        fontFamily: DOC,
        color: '#0C2747',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 12,
        top: 8,
        width: 776,
        height: 384,
        padding: 12,
        background: '#FFFFFF',
        borderRadius: 12,
        boxShadow: '0 16px 36px rgba(8,27,51,.45)',
        opacity: o,
        transform: `translateX(${(1 - o) * 28}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 62,
        padding: '0 20px',
        borderRadius: 12,
        background: '#0F2847',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#DCE7F5'
      }
    }, "PRESTADORA DO SERVI\xC7O"), React.createElement("b", {
      style: {
        fontSize: 20,
        lineHeight: 1.15
      }
    }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#BFD7F2'
      }
    }, "Belo Horizonte \xB7 Chave Pix ", React.createElement("b", {
      style: {
        color: '#FFFFFF'
      }
    }, "pix@climasilvaefilhos.com.br"))), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.2em',
        lineHeight: 1.2
      }
    }, "LAUDO DE APROVA\xC7\xC3O"), React.createElement("b", {
      style: {
        font: `700 27px/1.25 ${MONO}`
      }
    }, "N\xBA 1064"))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        height: 40,
        display: 'grid',
        gridTemplateColumns: '230px minmax(0,1fr)',
        alignItems: 'stretch'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "CLIENTE"), React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2
      }
    }, "Academia CorpoAtivo")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        borderLeft: '1px solid #CBD2DB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "EQUIPAMENTO"), React.createElement("b", {
      style: {
        font: `700 13.5px/1.2 ${MONO}`
      }
    }, "Carrier \xB7 60.000 BTU/h \xB7 R-410A"))), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '392px minmax(0,1fr)',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        flex: 'none'
      }
    }, "LEITURAS AFERIDAS NA BANCADA"), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '8px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#1E293B',
        letterSpacing: '.08em'
      }
    }, "DIAGN\xD3STICO D-023"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 24,
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        borderRadius: 8,
        background: '#FEE2E2',
        border: '1.5px solid #B91C1C',
        color: '#7F1D1D',
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.05em'
      }
    }, React.createElement(Ic, {
      n: "fechar",
      s: 12,
      c: "#B91C1C",
      w: 3
    }), "DEFEITO CONFIRMADO")), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("b", {
      style: {
        fontSize: 18,
        lineHeight: 1.2
      }
    }, "Ponto 04 Fonte"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "220V CA \u2192 0,0V CC")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 6
      }
    }, cel.map(([l, v]) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        minWidth: 0,
        minHeight: 0,
        padding: '0 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '.1em',
        lineHeight: 1.2,
        color: '#334155'
      }
    }, l), React.createElement("b", {
      style: {
        font: `700 14px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, v))))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        padding: '6px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2,
        whiteSpace: 'normal',
        textWrap: 'balance'
      }
    }, "Reparo / Substitui\xE7\xE3o de Placa Eletr\xF4nica (Porte 60.000 BTU/h)"), React.createElement("b", {
      style: {
        flex: 'none',
        font: `700 15px/1.2 ${MONO}`
      }
    }, "R$ 950,00")), React.createElement("div", {
  style: {
    background: '#F0FDF4',
    borderLeft: '4px solid #15803D',
    borderRadius: 6,
    padding: '6px 9px',
    color: '#14532D',
    fontSize: 11.5,
    lineHeight: 1.25,
    whiteSpace: 'normal',
    textWrap: 'pretty',
    overflow: 'hidden'
  }
}, React.createElement("b", {
  style: {
    fontWeight: 800
  }
}, "Preven\xE7\xE3o:"), " Recupera o conjunto eletr\xF4nico sem substituir placa nova (economia de R$ 2.200 a R$ 3.800)."))), React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 16px',
        borderRadius: 12,
        background: 'linear-gradient(180deg,#F3ECDA 0%,#EFE6CF 100%)',
        border: '2px solid #A6945F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        fontSize: 11,
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("b", {
      style: {
        font: `700 32px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, "R$ 950,00")), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '6px 9px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        overflow: 'hidden'
      }
    }, React.createElement("svg", {
      width: QR.n * 3,
      height: QR.n * 3,
      viewBox: `0 0 ${QR.n} ${QR.n}`,
      shapeRendering: "crispEdges",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, React.createElement("path", {
      d: QR.d,
      fill: "#000000"
    })), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        height: QR.n * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'normal'
      }
    }, React.createElement("span", {
      style: {
        ...ROTD
      }
    }, "PIX \xB7 VALOR EXATO DO LAUDO"), React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`,
        whiteSpace: 'nowrap'
      }
    }, "R$ 950,00"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.25,
        textWrap: 'pretty'
      }
    }, "Para autorizar o servi\xE7o, responda APROVADO nesta mensagem.")))))), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 10,
        height: 84,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'linear-gradient(90deg,#081B33 0%,#0C2747 100%)',
        border: '2px solid #22C55E',
        borderRadius: 14,
        boxShadow: '0 -6px 24px rgba(8,27,51,.45)',
        opacity: fx,
        transform: `translateY(${(1 - fx) * 24}px)`,
        fontFamily: BARLOW
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 60,
        padding: '0 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        borderRadius: 10,
        background: '#15803D',
        border: '2px solid #4ADE80',
        color: '#FFFFFF',
        font: `700 18px/1.2 ${MONO}`,
        letterSpacing: '-.01em'
      }
    }, React.createElement("span", null, "\u2713 ZERO CURTO"), React.createElement("span", null, "\xB7 PIX R$ 950")), React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#FFFFFF'
      }
    }, React.createElement("span", null, "Defeito achado no pino 04."), React.createElement("span", {
      style: {
        padding: '1px 6px 2px',
        margin: '0 -6px',
        borderRadius: 4,
        background: '#FACC15',
        color: '#0C2747'
      }
    }, "Servi\xE7o pesado fechado sem d\xFAvida."))));
  }
  function Piece() {
    const {
      T,
      CUES
    } = useComposition();
    const a = CUES.Acao,
      L = CUES.LaudoPix;
    const root = React.useRef(null);
    const A = useAnchors(root);
    const V = 0.45;
    const p0 = a + 0.4;
    const ativo = T < p0 ? 0 : Math.min(3, Math.floor((T - p0) / (0.8 / 3)));
    const pulso = MOTION.pulse(T, 0.8);
    const r0 = a + 0.7,
      r1 = a + 1.35,
      r2 = a + 2.0;
    const lcdV = T < r1 ? lerp(12.4, 3.1, MOTION.enter(T, r0, r1)) : lerp(3.1, 0, MOTION.enter(T, r1, r2));
    const lcd = lcdV.toFixed(1).padStart(4, '0');
    const tD = a + 2.35,
      c0 = a + 2.6,
      tM = a + 4.95,
      tG = a + 6.15;
    const fade0 = L + 4.25,
      fade1 = L + 4.7;
    const on = t => T >= t + 0.04;
    const sOn = T >= tM + 0.1 ? {
      n: 1,
      o: 1,
      s: 1 + 0.25 * Math.sin(Math.PI * p01(T, tM + 0.1, tM + 0.5))
    } : null;
    const sai = MOTION.enter(T, a, a + V);
    const ganchoO = T < a + V ? 1 - sai : T >= fade0 ? MOTION.enter(T, fade0, fade1) : 0;
    const ganchoX = T < a + V ? -28 * sai : 0;
    const ganchoT = T < a + V ? T : 0;
    const telaX = 24 * (1 - sai);
    const maoO = MOTION.enter(T, a + 1.5, a + 1.8) * (1 - MOTION.enter(T, tG + 0.3, L));
    return React.createElement("div", {
      style: {
        position: 'relative',
        width: 800,
        height: 500,
        overflow: 'hidden',
        ...BG
      }
    }, React.createElement("div", {
      ref: root,
      "data-screen-label": `Loop 03 · ${Math.floor(T)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ...BG,
        color: '#0C2747',
        fontFamily: BARLOW,
        transform: `translateX(${telaX}px)`
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 8,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("div", {
      style: ST.S21
    }, "\u2039"), React.createElement("div", {
      style: {
        ...ST.S14,
        lineHeight: 1.2
      }
    }, "DIAGN\xD3STICO"), React.createElement(Faixa, null), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 15,
        lineHeight: 1.1
      }
    }, "D-023")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        top: 68,
        width: 368,
        height: 356,
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        height: 22,
        marginBottom: 6,
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, React.createElement("b", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#0C2747'
      }
    }, "N\xE3o liga, display apagado"), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "Sem luz, sem bip")), React.createElement(Diagrama, {
      ativo: ativo,
      pulso: pulso
    }), React.createElement("div", {
      style: {
        height: 8,
        flex: 'none'
      }
    }), React.createElement(Verificacao, {
      A: A,
      lcd: lcd,
      d: MOTION.enter(T, tD + 0.05, tD + 0.17),
      sd: MOTION.press(T, tD)
    })), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 396,
        top: 68,
        width: 388,
        height: 356,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement(Causas, {
      T: T,
      c0: c0,
      dest: MOTION.enter(T, c0 + 0.7, c0 + 1.2)
    }), React.createElement("div", {
      ref: A.ref('mandar'),
      style: {
        ...ST.S86,
        flex: 'none',
        minHeight: 44,
        height: 44,
        fontSize: 16,
        lineHeight: 1,
        letterSpacing: '.1em',
        transform: `scale(${MOTION.press(T, tM)})`
      }
    }, "+ MANDAR PARA O LAUDO")), React.createElement(Dock, {
      ativa: on(tG) ? 3 : 0,
      selo: sOn,
      rg: A.ref('ganhos'),
      sg: MOTION.press(T, tG)
    }), React.createElement(Hand, {
      T: T,
      A: A,
      o: maoO,
      start: {
        x: 300,
        y: 320
      },
      taps: [tD, tM, tG],
      moves: [{
        s: a + 1.6,
        e: tD - 0.04,
        to: 'defeito',
        dy: -10
      }, {
        s: tD + 1.3,
        e: tM - 0.04,
        to: 'mandar',
        dx: 40,
        dy: -17
      }, {
        s: tM + 0.3,
        e: tG - 0.05,
        to: 'ganhos',
        dy: -12
      }]
    }), T >= L && React.createElement(Laudo, {
      T: T,
      L: L
    })), ganchoO > 0.001 && React.createElement(Gancho, {
      t: ganchoT,
      o: ganchoO,
      x: ganchoX
    }));
  }
  window.GPLoops.l03 = Piece;
})();
(function () {
  const useComposition = () => React.useContext(window.GPLoopCtx);
  const css = s => {
    const o = {};
    s.split(';').forEach(d => {
      const i = d.indexOf(':');
      if (i < 0) return;
      const k = d.slice(0, i).trim();
      if (!k) return;
      o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
    });
    return o;
  };
  const ST = {
    S10: css("box-sizing:border-box;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;line-height:1;letter-spacing:-.02em;white-space:nowrap"),
    S14: css("flex:1;font-size:20px;font-weight:700;letter-spacing:.14em;white-space:nowrap"),
    S21: css("box-sizing:border-box;flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px"),
    S22: css("box-sizing:border-box;flex:none;font:700 12px/1 'JetBrains Mono',monospace;color:#0C2747;padding:8px 8px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:6px"),
    S28: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S37: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S50: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747;border-radius:10px"),
    S86: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#1A8642 0%,#1A8642 45%,#126B34 100%);border:1px solid #14532D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #14532D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S137: css("box-sizing:border-box;flex:none;display:grid;grid-template-columns:1fr 1.25fr 1fr;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px")
  };
  const BG = {
    backgroundColor: '#D6D2C9',
    backgroundImage: 'linear-gradient(180deg,#D6D2C9 0%,#DFDCD5 14%,#CCC8BF 100%)'
  };
  const CARD = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #94A3B8',
    boxShadow: '0 1px 3px rgba(9,30,66,.14)',
    borderRadius: 12
  };
  const MONO = "'JetBrains Mono',monospace";
  const BARLOW = "'Barlow Semi Condensed',sans-serif";
  const DOC = "Arial,'Liberation Sans',Helvetica,sans-serif";
  const QR = {"payload":"00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406540.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10796304F480","n":53,"d":"M0 0h7v1h-7zM9 0h1v1h-1zM11 0h2v1h-2zM14 0h2v1h-2zM17 0h3v1h-3zM21 0h2v1h-2zM24 0h1v1h-1zM26 0h3v1h-3zM30 0h1v1h-1zM33 0h3v1h-3zM38 0h1v1h-1zM40 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM13 1h1v1h-1zM16 1h1v1h-1zM18 1h5v1h-5zM25 1h1v1h-1zM28 1h1v1h-1zM30 1h1v1h-1zM36 1h8v1h-8zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM11 2h5v1h-5zM19 2h2v1h-2zM22 2h3v1h-3zM29 2h2v1h-2zM32 2h1v1h-1zM34 2h4v1h-4zM39 2h1v1h-1zM41 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM12 3h3v1h-3zM17 3h2v1h-2zM20 3h1v1h-1zM24 3h1v1h-1zM28 3h1v1h-1zM30 3h2v1h-2zM34 3h2v1h-2zM37 3h1v1h-1zM39 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM10 4h2v1h-2zM17 4h1v1h-1zM22 4h1v1h-1zM24 4h8v1h-8zM33 4h1v1h-1zM36 4h1v1h-1zM38 4h1v1h-1zM40 4h3v1h-3zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM10 5h1v1h-1zM13 5h2v1h-2zM18 5h3v1h-3zM24 5h1v1h-1zM28 5h1v1h-1zM31 5h4v1h-4zM37 5h1v1h-1zM41 5h2v1h-2zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM16 7h1v1h-1zM19 7h2v1h-2zM22 7h3v1h-3zM28 7h2v1h-2zM33 7h3v1h-3zM37 7h2v1h-2zM0 8h1v1h-1zM3 8h1v1h-1zM5 8h2v1h-2zM8 8h2v1h-2zM11 8h1v1h-1zM13 8h1v1h-1zM15 8h1v1h-1zM17 8h1v1h-1zM20 8h1v1h-1zM22 8h1v1h-1zM24 8h6v1h-6zM31 8h2v1h-2zM36 8h1v1h-1zM40 8h1v1h-1zM42 8h1v1h-1zM45 8h1v1h-1zM47 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM9 9h1v1h-1zM11 9h4v1h-4zM16 9h5v1h-5zM22 9h2v1h-2zM25 9h1v1h-1zM31 9h3v1h-3zM39 9h1v1h-1zM41 9h1v1h-1zM45 9h1v1h-1zM47 9h1v1h-1zM49 9h1v1h-1zM52 9h1v1h-1zM1 10h3v1h-3zM6 10h1v1h-1zM9 10h1v1h-1zM13 10h3v1h-3zM17 10h4v1h-4zM24 10h4v1h-4zM30 10h1v1h-1zM33 10h5v1h-5zM41 10h1v1h-1zM44 10h3v1h-3zM48 10h1v1h-1zM0 11h3v1h-3zM4 11h2v1h-2zM7 11h7v1h-7zM18 11h3v1h-3zM22 11h2v1h-2zM25 11h2v1h-2zM32 11h1v1h-1zM34 11h2v1h-2zM38 11h4v1h-4zM43 11h1v1h-1zM45 11h1v1h-1zM50 11h2v1h-2zM3 12h4v1h-4zM8 12h2v1h-2zM17 12h2v1h-2zM20 12h6v1h-6zM28 12h5v1h-5zM34 12h7v1h-7zM43 12h1v1h-1zM45 12h4v1h-4zM52 12h1v1h-1zM1 13h1v1h-1zM3 13h1v1h-1zM5 13h1v1h-1zM7 13h4v1h-4zM12 13h4v1h-4zM17 13h1v1h-1zM21 13h3v1h-3zM29 13h1v1h-1zM31 13h2v1h-2zM34 13h3v1h-3zM40 13h1v1h-1zM46 13h1v1h-1zM50 13h1v1h-1zM2 14h2v1h-2zM5 14h4v1h-4zM10 14h4v1h-4zM15 14h1v1h-1zM17 14h1v1h-1zM20 14h1v1h-1zM22 14h1v1h-1zM28 14h1v1h-1zM30 14h3v1h-3zM34 14h5v1h-5zM41 14h1v1h-1zM43 14h1v1h-1zM45 14h1v1h-1zM48 14h2v1h-2zM52 14h1v1h-1zM0 15h2v1h-2zM3 15h1v1h-1zM5 15h1v1h-1zM8 15h4v1h-4zM13 15h2v1h-2zM17 15h1v1h-1zM20 15h1v1h-1zM23 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM34 15h4v1h-4zM40 15h1v1h-1zM47 15h1v1h-1zM49 15h1v1h-1zM51 15h1v1h-1zM0 16h1v1h-1zM3 16h1v1h-1zM6 16h1v1h-1zM9 16h1v1h-1zM12 16h1v1h-1zM15 16h2v1h-2zM18 16h1v1h-1zM20 16h1v1h-1zM24 16h1v1h-1zM27 16h1v1h-1zM32 16h1v1h-1zM34 16h5v1h-5zM42 16h1v1h-1zM47 16h2v1h-2zM0 17h1v1h-1zM2 17h2v1h-2zM7 17h1v1h-1zM9 17h3v1h-3zM15 17h4v1h-4zM20 17h1v1h-1zM22 17h1v1h-1zM26 17h1v1h-1zM28 17h2v1h-2zM32 17h1v1h-1zM34 17h1v1h-1zM36 17h3v1h-3zM44 17h2v1h-2zM48 17h3v1h-3zM0 18h2v1h-2zM4 18h1v1h-1zM6 18h3v1h-3zM13 18h2v1h-2zM16 18h6v1h-6zM23 18h1v1h-1zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h2v1h-2zM34 18h2v1h-2zM37 18h1v1h-1zM40 18h2v1h-2zM44 18h2v1h-2zM47 18h3v1h-3zM51 18h2v1h-2zM0 19h1v1h-1zM4 19h2v1h-2zM7 19h3v1h-3zM11 19h2v1h-2zM17 19h1v1h-1zM19 19h3v1h-3zM25 19h1v1h-1zM27 19h2v1h-2zM31 19h2v1h-2zM34 19h4v1h-4zM42 19h5v1h-5zM48 19h2v1h-2zM51 19h2v1h-2zM0 20h3v1h-3zM4 20h3v1h-3zM8 20h5v1h-5zM14 20h2v1h-2zM18 20h1v1h-1zM21 20h1v1h-1zM23 20h2v1h-2zM30 20h2v1h-2zM36 20h1v1h-1zM40 20h9v1h-9zM52 20h1v1h-1zM0 21h1v1h-1zM3 21h2v1h-2zM7 21h1v1h-1zM9 21h2v1h-2zM13 21h2v1h-2zM17 21h1v1h-1zM20 21h2v1h-2zM23 21h2v1h-2zM27 21h1v1h-1zM29 21h1v1h-1zM31 21h3v1h-3zM36 21h1v1h-1zM40 21h1v1h-1zM43 21h1v1h-1zM45 21h1v1h-1zM49 21h2v1h-2zM52 21h1v1h-1zM0 22h3v1h-3zM6 22h2v1h-2zM9 22h2v1h-2zM13 22h2v1h-2zM19 22h2v1h-2zM22 22h1v1h-1zM24 22h6v1h-6zM31 22h2v1h-2zM34 22h5v1h-5zM42 22h2v1h-2zM46 22h3v1h-3zM50 22h1v1h-1zM0 23h1v1h-1zM2 23h1v1h-1zM4 23h2v1h-2zM7 23h2v1h-2zM10 23h2v1h-2zM13 23h5v1h-5zM19 23h1v1h-1zM23 23h2v1h-2zM26 23h6v1h-6zM34 23h5v1h-5zM40 23h2v1h-2zM44 23h1v1h-1zM48 23h1v1h-1zM50 23h1v1h-1zM52 23h1v1h-1zM1 24h8v1h-8zM13 24h2v1h-2zM16 24h2v1h-2zM21 24h2v1h-2zM24 24h5v1h-5zM30 24h4v1h-4zM36 24h1v1h-1zM40 24h2v1h-2zM43 24h6v1h-6zM50 24h1v1h-1zM52 24h1v1h-1zM1 25h4v1h-4zM8 25h1v1h-1zM11 25h1v1h-1zM15 25h1v1h-1zM18 25h1v1h-1zM20 25h1v1h-1zM24 25h1v1h-1zM28 25h1v1h-1zM31 25h2v1h-2zM34 25h2v1h-2zM37 25h1v1h-1zM41 25h1v1h-1zM43 25h2v1h-2zM48 25h1v1h-1zM51 25h1v1h-1zM0 26h1v1h-1zM2 26h1v1h-1zM4 26h1v1h-1zM6 26h1v1h-1zM8 26h2v1h-2zM11 26h1v1h-1zM13 26h2v1h-2zM16 26h1v1h-1zM18 26h3v1h-3zM22 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h3v1h-3zM35 26h1v1h-1zM37 26h2v1h-2zM40 26h1v1h-1zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM51 26h2v1h-2zM0 27h1v1h-1zM4 27h1v1h-1zM8 27h1v1h-1zM10 27h1v1h-1zM12 27h1v1h-1zM16 27h1v1h-1zM19 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM28 27h3v1h-3zM35 27h1v1h-1zM37 27h2v1h-2zM40 27h2v1h-2zM43 27h2v1h-2zM48 27h2v1h-2zM51 27h1v1h-1zM0 28h3v1h-3zM4 28h9v1h-9zM15 28h1v1h-1zM17 28h2v1h-2zM23 28h11v1h-11zM35 28h4v1h-4zM42 28h1v1h-1zM44 28h5v1h-5zM0 29h1v1h-1zM2 29h1v1h-1zM4 29h2v1h-2zM7 29h3v1h-3zM13 29h2v1h-2zM17 29h1v1h-1zM19 29h2v1h-2zM22 29h2v1h-2zM25 29h2v1h-2zM28 29h2v1h-2zM32 29h2v1h-2zM36 29h1v1h-1zM38 29h2v1h-2zM43 29h3v1h-3zM47 29h1v1h-1zM52 29h1v1h-1zM0 30h3v1h-3zM6 30h1v1h-1zM8 30h1v1h-1zM12 30h4v1h-4zM17 30h2v1h-2zM20 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM28 30h3v1h-3zM32 30h2v1h-2zM36 30h1v1h-1zM40 30h2v1h-2zM44 30h5v1h-5zM50 30h1v1h-1zM52 30h1v1h-1zM1 31h2v1h-2zM5 31h1v1h-1zM10 31h1v1h-1zM12 31h2v1h-2zM20 31h1v1h-1zM22 31h1v1h-1zM24 31h1v1h-1zM26 31h1v1h-1zM28 31h1v1h-1zM30 31h1v1h-1zM35 31h1v1h-1zM38 31h2v1h-2zM41 31h1v1h-1zM44 31h3v1h-3zM48 31h2v1h-2zM0 32h1v1h-1zM3 32h1v1h-1zM5 32h2v1h-2zM14 32h1v1h-1zM17 32h3v1h-3zM21 32h7v1h-7zM29 32h1v1h-1zM31 32h1v1h-1zM33 32h1v1h-1zM36 32h1v1h-1zM39 32h2v1h-2zM42 32h1v1h-1zM46 32h1v1h-1zM50 32h1v1h-1zM52 32h1v1h-1zM2 33h3v1h-3zM7 33h1v1h-1zM13 33h1v1h-1zM16 33h1v1h-1zM18 33h4v1h-4zM23 33h3v1h-3zM28 33h1v1h-1zM30 33h2v1h-2zM33 33h1v1h-1zM35 33h3v1h-3zM39 33h2v1h-2zM44 33h1v1h-1zM47 33h1v1h-1zM49 33h2v1h-2zM52 33h1v1h-1zM1 34h1v1h-1zM5 34h3v1h-3zM10 34h1v1h-1zM17 34h3v1h-3zM24 34h3v1h-3zM30 34h2v1h-2zM34 34h1v1h-1zM36 34h1v1h-1zM39 34h1v1h-1zM43 34h1v1h-1zM49 34h2v1h-2zM0 35h2v1h-2zM3 35h1v1h-1zM5 35h1v1h-1zM11 35h1v1h-1zM13 35h1v1h-1zM15 35h1v1h-1zM19 35h2v1h-2zM22 35h2v1h-2zM26 35h1v1h-1zM33 35h1v1h-1zM36 35h3v1h-3zM40 35h1v1h-1zM44 35h1v1h-1zM46 35h1v1h-1zM49 35h2v1h-2zM0 36h2v1h-2zM4 36h1v1h-1zM6 36h2v1h-2zM14 36h1v1h-1zM16 36h2v1h-2zM22 36h2v1h-2zM26 36h3v1h-3zM30 36h1v1h-1zM32 36h3v1h-3zM36 36h3v1h-3zM40 36h1v1h-1zM42 36h1v1h-1zM44 36h1v1h-1zM46 36h4v1h-4zM51 36h2v1h-2zM1 37h1v1h-1zM3 37h1v1h-1zM8 37h3v1h-3zM12 37h1v1h-1zM17 37h2v1h-2zM20 37h1v1h-1zM25 37h2v1h-2zM32 37h3v1h-3zM36 37h1v1h-1zM39 37h3v1h-3zM43 37h2v1h-2zM50 37h2v1h-2zM0 38h1v1h-1zM2 38h5v1h-5zM8 38h2v1h-2zM13 38h1v1h-1zM17 38h1v1h-1zM22 38h3v1h-3zM27 38h1v1h-1zM29 38h1v1h-1zM33 38h6v1h-6zM40 38h2v1h-2zM45 38h2v1h-2zM48 38h2v1h-2zM52 38h1v1h-1zM0 39h2v1h-2zM5 39h1v1h-1zM8 39h8v1h-8zM17 39h1v1h-1zM19 39h1v1h-1zM23 39h1v1h-1zM25 39h1v1h-1zM27 39h1v1h-1zM29 39h1v1h-1zM31 39h2v1h-2zM34 39h3v1h-3zM40 39h3v1h-3zM44 39h4v1h-4zM52 39h1v1h-1zM0 40h1v1h-1zM5 40h2v1h-2zM10 40h1v1h-1zM12 40h1v1h-1zM14 40h1v1h-1zM17 40h2v1h-2zM25 40h2v1h-2zM32 40h1v1h-1zM34 40h4v1h-4zM42 40h2v1h-2zM47 40h6v1h-6zM1 41h2v1h-2zM4 41h2v1h-2zM7 41h1v1h-1zM10 41h1v1h-1zM12 41h1v1h-1zM14 41h1v1h-1zM17 41h2v1h-2zM20 41h1v1h-1zM23 41h1v1h-1zM27 41h1v1h-1zM31 41h1v1h-1zM36 41h6v1h-6zM43 41h3v1h-3zM47 41h1v1h-1zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h5v1h-5zM12 42h1v1h-1zM17 42h1v1h-1zM19 42h1v1h-1zM22 42h1v1h-1zM24 42h1v1h-1zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h1v1h-1zM35 42h1v1h-1zM37 42h1v1h-1zM39 42h2v1h-2zM42 42h2v1h-2zM46 42h1v1h-1zM48 42h1v1h-1zM50 42h1v1h-1zM52 42h1v1h-1zM1 43h2v1h-2zM8 43h4v1h-4zM13 43h4v1h-4zM19 43h4v1h-4zM25 43h1v1h-1zM28 43h3v1h-3zM32 43h1v1h-1zM36 43h1v1h-1zM40 43h4v1h-4zM48 43h2v1h-2zM51 43h2v1h-2zM3 44h1v1h-1zM6 44h4v1h-4zM11 44h1v1h-1zM15 44h2v1h-2zM22 44h7v1h-7zM30 44h2v1h-2zM33 44h4v1h-4zM38 44h3v1h-3zM42 44h1v1h-1zM44 44h5v1h-5zM52 44h1v1h-1zM8 45h4v1h-4zM13 45h2v1h-2zM22 45h1v1h-1zM24 45h1v1h-1zM28 45h1v1h-1zM31 45h3v1h-3zM35 45h1v1h-1zM37 45h1v1h-1zM40 45h2v1h-2zM43 45h2v1h-2zM48 45h2v1h-2zM51 45h1v1h-1zM0 46h7v1h-7zM12 46h2v1h-2zM15 46h8v1h-8zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h3v1h-3zM34 46h4v1h-4zM39 46h3v1h-3zM44 46h1v1h-1zM46 46h1v1h-1zM48 46h4v1h-4zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h1v1h-1zM10 47h1v1h-1zM13 47h2v1h-2zM18 47h1v1h-1zM21 47h2v1h-2zM24 47h1v1h-1zM28 47h1v1h-1zM30 47h5v1h-5zM40 47h1v1h-1zM43 47h2v1h-2zM48 47h4v1h-4zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM9 48h3v1h-3zM13 48h1v1h-1zM17 48h3v1h-3zM21 48h1v1h-1zM24 48h5v1h-5zM31 48h1v1h-1zM33 48h5v1h-5zM40 48h1v1h-1zM42 48h1v1h-1zM44 48h6v1h-6zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h1v1h-1zM12 49h4v1h-4zM21 49h2v1h-2zM25 49h1v1h-1zM28 49h1v1h-1zM32 49h4v1h-4zM37 49h1v1h-1zM39 49h1v1h-1zM41 49h1v1h-1zM43 49h4v1h-4zM48 49h1v1h-1zM50 49h2v1h-2zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM12 50h2v1h-2zM17 50h1v1h-1zM20 50h2v1h-2zM23 50h3v1h-3zM29 50h5v1h-5zM36 50h4v1h-4zM46 50h4v1h-4zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h2v1h-2zM13 51h1v1h-1zM16 51h1v1h-1zM18 51h1v1h-1zM20 51h2v1h-2zM24 51h1v1h-1zM29 51h1v1h-1zM31 51h1v1h-1zM33 51h1v1h-1zM36 51h2v1h-2zM39 51h2v1h-2zM44 51h1v1h-1zM47 51h2v1h-2zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h2v1h-2zM14 52h6v1h-6zM24 52h1v1h-1zM26 52h1v1h-1zM29 52h2v1h-2zM32 52h1v1h-1zM36 52h4v1h-4zM41 52h2v1h-2zM47 52h3v1h-3zM51 52h1v1h-1z"};
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1,
      bx = 3 * (x2 - x1) - cx,
      ax = 1 - cx - bx,
      cy = 3 * y1,
      by = 3 * (y2 - y1) - cy,
      ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t,
      sy = t => ((ay * t + by) * t + cy) * t;
    return x => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0,
        hi = 1,
        t = x;
      for (let i = 0; i < 26; i++) {
        t = (lo + hi) / 2;
        if (sx(t) < x) lo = t;else hi = t;
      }
      return sy(t);
    };
  }
  const CURVA = bezier(0.22, 1, 0.36, 1);
  const p01 = (T, s, e) => e <= s ? T >= s ? 1 : 0 : Math.min(1, Math.max(0, (T - s) / (e - s)));
  const MOTION = {
    enter: (T, s, e) => CURVA(p01(T, s, e)),
    press: (T, at) => 1 - 0.07 * Math.sin(Math.PI * p01(T, at - 0.1, at + 0.24)),
    pulse: (t, per) => 0.5 - 0.5 * Math.cos(2 * Math.PI * t / per)
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  const R_ = (x, y, w, h, r) => 'M' + (x + r) + ' ' + y + 'h' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + ' ' + r + 'h-' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + '-' + r + 'v-' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + '-' + r + 'z';
  const C_ = (x, y, r) => 'M' + (x + r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 1-' + 2 * r + ' 0 ' + r + ' ' + r + ' 0 0 1 ' + 2 * r + ' 0z';
  const IC = {
    prancheta: [R_(8, 2, 8, 4, 1), 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
    multimetro: [R_(5, 2, 14, 20, 2), R_(8, 5, 8, 4, 0.5), C_(12, 15, 2.5), 'M12 15l1.5-1.5'],
    sol: [C_(12, 12, 4), 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
    documento: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'],
    raio: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
    desliga: ['M12 2v10', 'M18.4 6.6a9 9 0 1 1-12.77.04'],
    ok: ['M20 6 9 17l-5-5'],
    manifold: [C_(7, 7.5, 4), C_(17, 7.5, 4), 'M7 7.5l2-2', 'M17 7.5l-2-2', R_(3, 14, 18, 4, 1), 'M7 11.5V14', 'M17 11.5V14', 'M7 18v3', 'M12 18v3', 'M17 18v3'],
    fechar: ['M18 6 6 18', 'm6 6 12 12']
  };
  function Ic({
    n,
    s = 20,
    c = '#334155',
    w = 1.6
  }) {
    return React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: c,
      strokeWidth: w,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, IC[n].map((d, i) => React.createElement("path", {
      key: i,
      d: d
    })));
  }
  function useAnchors(rootRef) {
    const els = React.useRef({});
    const [pos, setPos] = React.useState({});
    const ref = k => el => {
      if (el) els.current[k] = el;
    };
    React.useLayoutEffect(() => {
      const medir = () => {
        const root = rootRef.current;
        if (!root) return;
        const out = {};
        Object.keys(els.current).forEach(k => {
          const el = els.current[k];
          let x = 0,
            y = 0,
            e = el;
          while (e && e !== root) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
          }
          out[k] = {
            x: Math.round(x + el.offsetWidth / 2),
            y: Math.round(y + el.offsetHeight / 2),
            w: el.offsetWidth
          };
        });
        setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
      };
      medir();
      const t1 = setTimeout(medir, 400),
        t2 = setTimeout(medir, 1500);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return {
      ref,
      pos
    };
  }
  const MAO = 'M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L6 14Z';
  function Hand({
    T,
    A,
    moves,
    taps = [],
    start,
    o
  }) {
    if (o <= 0.001) return null;
    let cur = start,
      prev = start;
    for (const m of moves) {
      const tg = typeof m.to === 'string' ? A.pos[m.to] : m.to;
      if (!tg) return null;
      const pt = {
        x: tg.x + (m.dx || 0),
        y: tg.y + (m.dy || 0)
      };
      if (T < m.s) break;
      const p = MOTION.enter(T, m.s, m.e);
      cur = {
        x: lerp(prev.x, pt.x, p),
        y: lerp(prev.y, pt.y, p)
      };
      prev = pt;
    }
    let sc = 1;
    taps.forEach(t => {
      sc *= MOTION.press(T, t);
    });
    const rip = taps.map(t => {
      const p = p01(T, t, t + 0.6);
      return p > 0 && p < 1 ? p : null;
    }).find(p => p !== null);
    const k = 50 / 24,
      ox = 8 * k,
      oy = 2.2 * k;
    return React.createElement(React.Fragment, null, rip != null && React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid #FFB020',
        zIndex: 49,
        pointerEvents: 'none',
        opacity: 0.85 * (1 - rip) * o,
        transform: `translate(${cur.x - 28}px,${cur.y - 28}px) scale(${0.3 + 0.9 * CURVA(rip)})`
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        zIndex: 50,
        pointerEvents: 'none',
        opacity: o,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `translate(${cur.x - ox}px,${cur.y - oy}px) scale(${sc})`
      }
    }, React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        filter: 'drop-shadow(0 4px 6px rgba(9,30,66,.35))'
      }
    }, React.createElement("path", {
      d: MAO,
      fill: "#FFFFFF",
      stroke: "#0C2747",
      strokeWidth: "1.3",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 9.5V12M14 10V12M18 11V12",
      fill: "none",
      stroke: "#0C2747",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    }))));
  }
  function Faixa() {
    const cel = [['MARCA', 'Daikin'], ['BTU/h', '24.000'], ['FLUIDO', 'R-32']];
    return React.createElement("div", {
      style: {
        ...ST.S137,
        width: 320,
        height: 50
      }
    }, cel.map(([l, v], i) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
        borderLeft: i ? '1px solid rgba(63,50,16,.25)' : 'none'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, l, " \u25BC"), React.createElement("b", {
      style: i ? {
        font: `700 17px/1.25 ${MONO}`
      } : {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, v))));
  }
  const DOCK = [['Sintomas', 'prancheta'], ['Aferir Vivo', 'multimetro'], ['Códigos & LED', 'sol'], ['Ganhos & Laudo', 'documento']];
  function Dock({
    ativa,
    selo,
    rg,
    sg
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 8,
        height: 60,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 8,
        zIndex: 5
      }
    }, DOCK.map(([l, ic], i) => React.createElement("div", {
      key: l,
      ref: i === 3 ? rg : undefined,
      style: {
        ...ST.S10,
        position: 'relative',
        fontSize: 14,
        gap: 6,
        transform: i === 3 ? `scale(${sg})` : 'none'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        width: 36,
        height: 3,
        borderRadius: 2,
        background: i === ativa ? '#FFB020' : '#081B33',
        boxShadow: i === ativa ? '0 0 6px rgba(255,176,32,.8)' : 'none'
      }
    }), React.createElement(Ic, {
      n: ic,
      s: 22,
      c: "#FFFFFF"
    }), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, l), i === 3 && selo && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -4,
        right: 12,
        width: 28,
        height: 28,
        boxSizing: 'border-box',
        borderRadius: '50%',
        background: '#FFB020',
        border: '1px solid #7A4E00',
        color: '#0C2747',
        font: `700 15px/26px ${BARLOW}`,
        textAlign: 'center',
        opacity: selo.o,
        transform: `scale(${selo.s})`
      }
    }, selo.n))));
  }
  function Abas({
    ativa = 2
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 68,
        height: 44,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 8
      }
    }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
      key: t,
      style: {
        ...(i === ativa ? ST.S50 : {
          ...ST.S28,
          color: '#E0F2FE'
        }),
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '.02em'
      }
    }, t)));
  }
  const Borne = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      minWidth: h,
      height: h,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF',
      border: '1.5px solid #0C2747',
      borderRadius: 6,
      font: `700 ${fs}px/1 ${MONO}`,
      color: '#0C2747'
    }
  }, children);
  const Ponta = ({
    cor,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 21,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: cor === 'v' ? '#C81E1E' : '#111111',
      border: `1px solid ${cor === 'v' ? '#7F1D1D' : '#000000'}`,
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.05em'
    }
  }, "\u25CF ", children);
  const Escala = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 8px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#0C2747',
      border: '1px solid #081B33',
      color: '#FFFFFF',
      font: `700 ${fs}px/1 ${MONO}`,
      letterSpacing: '.04em'
    }
  }, children);
  const Esperado = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 7,
      background: '#DCFCE7',
      border: '1.5px solid #15803D',
      color: '#14532D',
      font: `700 ${fs}px/1 ${MONO}`
    }
  }, children);
  function Tarja({
    energ,
    children,
    cheia
  }) {
    const bg = energ ? '#B91C1C' : '#15803D';
    return React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: cheia ? 24 : 20,
        padding: cheia ? '0 10px' : '0 7px',
        display: 'flex',
        alignItems: 'center',
        gap: cheia ? 7 : 5,
        borderRadius: 6,
        background: bg,
        color: '#FFFFFF',
        fontSize: cheia ? 12 : 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: cheia ? '.08em' : '.1em',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement(Ic, {
      n: energ ? 'raio' : 'desliga',
      s: cheia ? 15 : 12,
      c: "#FFFFFF",
      w: 2
    }), children);
  }
  function BotaoNormal({
    r,
    g = 0,
    s = 1,
    h = 44,
    w,
    fs = 14,
    ls = '.06em'
  }) {
    return React.createElement("div", {
      ref: r,
      style: {
        ...ST.S28,
        position: 'relative',
        minHeight: h,
        height: h,
        width: w,
        fontSize: fs,
        lineHeight: 1,
        letterSpacing: ls,
        transform: `scale(${s})`
      }
    }, g > 0.001 && React.createElement("span", {
      style: {
        ...ST.S86,
        position: 'absolute',
        inset: -1,
        minHeight: 0,
        opacity: g
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 16,
      c: "#FFFFFF",
      w: 2.6
    }), "NORMAL"));
  }
  const ForaFaixa = ({
    h = 44,
    fs = 14,
    ls = '.06em'
  }) => React.createElement("div", {
    style: {
      ...ST.S28,
      minHeight: h,
      height: h,
      gap: 5,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: ls
    }
  }, React.createElement(Ic, {
    n: "fechar",
    s: 14,
    c: "#FFFFFF",
    w: 2.6
  }), "FORA DA FAIXA");
  const LINHA = {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '94px minmax(0,1fr)',
    borderTop: '1px solid #CFCBC2',
    minHeight: 0,
    overflow: 'hidden'
  };
  const ROT = {
    boxSizing: 'border-box',
    background: '#EFEDE8',
    borderRight: '1px solid #CFCBC2',
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.1em',
    color: '#334155',
    lineHeight: 1.15,
    whiteSpace: 'normal'
  };
  const VAL = {
    boxSizing: 'border-box',
    minWidth: 0,
    padding: '4px 8px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#1E293B',
    whiteSpace: 'nowrap'
  };
  const QUEBRA = React.createElement("span", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  });
  function Gancho({
    t,
    o,
    x = 0
  }) {
    const g = MOTION.pulse(t, 1.1);
    const zoom = 1 + 3.5 / 156 * p01(t, 0, 3.8);
    const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55));
    const l1 = MOTION.enter(t, 0.45, 1.05),
      l2 = MOTION.enter(t, 1.05, 1.65);
    const tinta = p => {
      const c = (a, b) => Math.round(lerp(a, b, p));
      return `rgb(${c(255, 12)},${c(255, 39)},${c(255, 71)})`;
    };
    const grifo = (txt, p) => React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '1px 8px 3px',
        margin: '0 -8px',
        borderRadius: 5,
        backgroundImage: 'linear-gradient(#FACC15,#FACC15)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: `${p * 100}% 100%`,
        color: tinta(p)
      }
    }, txt);
    return React.createElement("div", {
      "data-screen-label": `Loop 04 · Gancho · ${Math.floor(t)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 70,
        opacity: o,
        transform: `translateX(${x}px)`,
        background: 'radial-gradient(110% 90% at 28% 40%,#14365F 0%,#0C2747 52%,#081B33 100%)',
        color: '#FFFFFF',
        fontFamily: BARLOW,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 24,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        fontSize: 15,
        lineHeight: 1.2,
        letterSpacing: '.16em'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, "BANCADA GELOPRO"), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#BFD7F2'
      }
    }, "\xB7 FLUIDOS & SH")), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        padding: '0 12px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        letterSpacing: '.04em'
      }
    }, "DAIKIN \xB7 24.000 BTU/h \xB7 R-32")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 52,
        top: 90,
        width: 260,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22,
        transform: `scale(${zoom})`,
        transformOrigin: '50% 45%'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: 228,
        height: 228,
        borderRadius: 44,
        background: '#0E2240',
        border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
        boxShadow: `0 0 ${16 + 26 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/t16_vacuo_botija.webp",
      alt: "",
      width: "156",
      height: "156",
      style: {
        width: 156,
        height: 156,
        display: 'block',
        borderRadius: 24,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)'
      }
    })), React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 52,
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    background: '#B91C1C',
    border: '1px solid #7F1D1D',
    boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
    font: "800 22px/1.1 'Barlow Semi Condensed',sans-serif",
    letterSpacing: '.04em',
    whiteSpace: 'nowrap',
    transform: `scale(${selo})`
  }
}, "\u2715 G\xC1S NO CHUTE")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 360,
        right: 36,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        whiteSpace: 'normal'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.16,
        letterSpacing: '-.005em',
        textWrap: 'pretty'
      }
    }, "Dar carga R-32 pela tabela errada?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.12,
        whiteSpace: 'nowrap'
      }
    }, grifo('Crave 8,8 °C na régua digital', l1), grifo('sem líquido no compressor.', l2))));
  }
  const PILL = {
    ok: {
      bg: '#DCFCE7',
      bd: '#15803D',
      fg: '#14532D'
    },
    alerta: {
      bg: '#FEF3C7',
      bd: '#B45309',
      fg: '#78350F'
    }
  };
  const RG = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.06em',
    lineHeight: 1.2,
    color: '#334155',
    whiteSpace: 'nowrap'
  };
  const f1 = v => v.toFixed(1).replace('.', ',');
  const ONDA = 'M-60 0q15 -8 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0';
  const CORPO = 'M14 60Q14 36 38 34H82Q106 36 106 60V150Q106 166 88 166H32Q14 166 14 150Z';
  const BOLHAS = [[46, 0.78, 2.6, 2.2], [64, 0.58, 2.0, 2.7], [55, 0.92, 1.6, 3.2], [73, 0.42, 1.5, 2.5]];
  function Botija({
    T,
    sh,
    h = 196
  }) {
    const lv = Math.max(0, Math.min(100, 100 - sh * 5)),
      fundo = lv / 100 * 78,
      yl = 152 - fundo;
    const mare = -60 * (T % 3.2 / 3.2);
    const g = (id, l, vert) => React.createElement("linearGradient", {
      id: id,
      x1: "0",
      y1: "0",
      x2: vert ? '0' : '1',
      y2: vert ? '1' : '0'
    }, l.map((x, i) => React.createElement("stop", {
      key: i,
      offset: x[0],
      stopColor: '#' + x[1],
      stopOpacity: x[2] == null ? 1 : x[2]
    })));
    const AC = '#3F4854',
      LT = '#5E4F25';
    return React.createElement("svg", {
      viewBox: "0 0 120 180",
      role: "img",
      "aria-label": "Botija de fluido refrigerante",
      style: {
        flex: 'none',
        display: 'block',
        height: h,
        width: h * 120 / 180
      }
    }, React.createElement("defs", null, g('bjm', [[0, '5F6873'], [.14, '8C95A1'], [.34, 'D5DAE1'], [.46, 'F7F8FA'], [.62, 'D5DAE1'], [.82, '8F98A4'], [1, '5A636E']]), g('bjh', [[0, 'FFFFFF', 0], [.1, 'FFFFFF', 0], [.4, 'FFFFFF', .45], [.72, 'FFFFFF', 0], [1, 'FFFFFF', 0]]), g('bjb', [[0, '7A6A3A'], [.25, 'E8D9A8'], [.4, 'FFF6D6'], [.7, 'C9B579'], [1, '8A7440']]), g('bjl', [[0, '6C9BF2'], [.35, '2563EB'], [1, '1D4ED8']], true), g('bjv', [[0, 'FFFFFF'], [1, 'E6EEF9']], true), React.createElement("clipPath", {
      id: "bjc"
    }, React.createElement("rect", {
      x: "34",
      y: "74",
      width: "52",
      height: "78",
      rx: "10"
    }))), React.createElement("ellipse", {
      cx: "60",
      cy: "177",
      rx: "44",
      ry: "3",
      fill: "#3F3210",
      opacity: ".18"
    }), React.createElement("rect", {
      x: "24",
      y: "160",
      width: "72",
      height: "16",
      rx: "3",
      fill: "url(#bjm)",
      stroke: AC,
      strokeWidth: "1.5"
    }), React.createElement("path", {
      d: "M30 171H90",
      stroke: AC,
      strokeWidth: "1",
      opacity: ".35"
    }), React.createElement("rect", {
      x: "55",
      y: "8",
      width: "10",
      height: "28",
      fill: "url(#bjb)",
      stroke: LT,
      strokeWidth: ".8"
    }), React.createElement("rect", {
      x: "65",
      y: "21",
      width: "11",
      height: "6",
      rx: "1",
      fill: "url(#bjb)",
      stroke: LT,
      strokeWidth: ".8"
    }), React.createElement("rect", {
      x: "45",
      y: "2",
      width: "30",
      height: "7",
      rx: "3.5",
      fill: "url(#bjb)",
      stroke: LT,
      strokeWidth: ".8"
    }), React.createElement("path", {
      fillRule: "evenodd",
      d: "M34 36V18Q34 12 40 12H80Q86 12 86 18V36ZM44 18H76Q78 18 78 20V30H42V20Q42 18 44 18Z",
      fill: "url(#bjm)",
      stroke: AC,
      strokeWidth: "1.5",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: CORPO,
      fill: "url(#bjm)"
    }), React.createElement("path", {
      d: CORPO,
      fill: "url(#bjh)"
    }), React.createElement("path", {
      d: "M14.5 64H105.5M14.5 156H105.5",
      stroke: AC,
      strokeWidth: "1.2",
      opacity: ".55"
    }), React.createElement("path", {
      d: "M16.5 65.6H103.5M16.5 157.6H103.5",
      stroke: "#FFFFFF",
      strokeWidth: "1",
      opacity: ".55"
    }), React.createElement("g", {
      clipPath: "url(#bjc)"
    }, React.createElement("rect", {
      x: "0",
      y: "0",
      width: "120",
      height: "180",
      fill: "url(#bjv)"
    }), React.createElement("g", {
      transform: `translate(0 ${yl.toFixed(2)})`
    }, React.createElement("g", {
      transform: `translate(${mare.toFixed(2)} 0)`
    }, React.createElement("path", {
      d: ONDA + 'V96H-60Z',
      fill: "url(#bjl)"
    }), React.createElement("path", {
      d: ONDA,
      fill: "none",
      stroke: "#FFFFFF",
      strokeWidth: "1.6",
      opacity: ".75"
    })), lv > 22 && BOLHAS.map((b, i) => {
      const k = ((T + i * 0.8) % b[3] + b[3]) % b[3] / b[3];
      const op = k < 0.2 ? 0.85 * k / 0.2 : 0.85 * (1 - (k - 0.2) / 0.8);
      return React.createElement("circle", {
        key: i,
        cx: b[0],
        cy: (fundo * b[1] - 22 * k).toFixed(2),
        r: b[2],
        fill: "#FFFFFF",
        opacity: op.toFixed(3)
      });
    })), React.createElement("rect", {
      x: "0",
      y: "101.3",
      width: "120",
      height: "15.6",
      fill: "#15803D",
      opacity: ".2"
    }), React.createElement("path", {
      d: "M0 101.3H120M0 116.9H120",
      stroke: "#15803D",
      strokeWidth: "1.5",
      strokeDasharray: "4 3"
    }), React.createElement("path", {
      d: "M40 74L58 74L44 152L34 152Z",
      fill: "#FFFFFF",
      opacity: ".28"
    })), React.createElement("rect", {
      x: "34",
      y: "74",
      width: "52",
      height: "78",
      rx: "10",
      fill: "none",
      stroke: AC,
      strokeWidth: "5",
      opacity: ".16"
    }), React.createElement("rect", {
      x: "34",
      y: "74",
      width: "52",
      height: "78",
      rx: "10",
      fill: "none",
      stroke: AC,
      strokeWidth: "2"
    }), React.createElement("path", {
      d: CORPO,
      fill: "none",
      stroke: AC,
      strokeWidth: "2.5"
    }), React.createElement("rect", {
      x: "34",
      y: "42",
      width: "52",
      height: "18",
      rx: "3",
      fill: "#FFFFFF",
      stroke: AC,
      strokeWidth: "1.2"
    }), React.createElement("text", {
      x: "60",
      y: "55",
      textAnchor: "middle",
      fontFamily: "JetBrains Mono,monospace",
      fontSize: "12",
      fontWeight: "700",
      fill: "#0C2747"
    }, "R-32"));
  }
  function GasSH({
    A,
    T,
    sh,
    psi
  }) {
    const ok = sh <= 11;
    const pill = ok ? PILL.ok : PILL.alerta;
    const alvo = ok ? '✓ ALVO 7 A 11 °C' : '▲ +' + f1(sh - 11) + ' ACIMA DO ALVO';
    const pm = Math.max(0, Math.min(100, sh / 20 * 100));
    const linha = (l, v) => React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 8,
        borderTop: '1px solid #E5DCC3',
        paddingTop: 5
      }
    }, React.createElement("span", {
      style: RG
    }, l), React.createElement("b", {
      style: {
        font: `700 15px/1.2 ${MONO}`,
        fontVariantNumeric: 'tabular-nums',
        color: '#0C2747'
      }
    }, v));
    return React.createElement("div", {
      style: {
        ...CARD,
        position: 'absolute',
        left: 16,
        top: 120,
        width: 416,
        height: 304,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 36,
        padding: '0 12px',
        background: '#EFEDE8',
        borderBottom: '1px solid #CFCBC2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement(Ic, {
      n: "manifold",
      s: 20,
      c: "#334155"
    }), React.createElement("span", {
      style: RG
    }, "G\xC1S & SH")), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        height: 28,
        padding: '0 10px',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 999,
        boxShadow: `inset 0 0 0 1px ${pill.bd}`,
        background: pill.bg,
        color: pill.fg,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.02em',
        lineHeight: 1.2
      }
    }, ok ? '✓ CARGA IDEAL' : 'FALTA DE FLUIDO')), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: '4px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 203,
        padding: '2px 8px 2px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        overflow: 'hidden',
        background: 'linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%)',
        border: '1.5px solid #A6945F',
        borderRadius: 12,
        boxShadow: 'inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7)'
      }
    }, React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, React.createElement("span", {
      style: RG
    }, "SUPERAQUECIMENTO"), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, React.createElement("b", {
      style: {
        font: `700 48px/1.05 ${MONO}`,
        fontVariantNumeric: 'tabular-nums',
        color: '#0C2747'
      }
    }, f1(sh)), React.createElement("span", {
      style: {
        font: `700 20px/1.1 ${MONO}`,
        color: '#0C2747'
      }
    }, "\xB0C")), React.createElement("span", {
      style: {
        ...RG,
        color: ok ? '#15803D' : '#B45309'
      }
    }, alvo)), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, linha('TUBO', f1(4.6 + sh) + '\u00A0°C'), linha('EVAPORAÇÃO', '4,6\u00A0°C'), linha('SUCÇÃO', Math.round(psi) + '\u00A0PSI'))), React.createElement(Botija, {
      T: T,
      sh: sh,
      h: 196
    })), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("div", {
      ref: A.ref('regua'),
      style: {
        position: 'relative',
        height: 34
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 13,
        height: 8,
        borderRadius: 2,
        background: '#E5E2DC'
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 'calc(16px + (100% - 32px) * .35)',
        width: 'calc((100% - 32px) * .2)',
        top: 13,
        height: 8,
        background: '#15803D'
      }
    }), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        top: 1,
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
        border: '1px solid #081B33',
        boxShadow: 'inset 0 1px 0 rgba(165,243,252,.5),0 0 0 3px #FFB020',
        left: `calc(${pm.toFixed(3)}% - ${(pm * 0.32).toFixed(3)}px)`
      }
    })), React.createElement("div", {
      style: {
        position: 'relative',
        height: 14,
        margin: '0 16px',
        font: `700 12px/1.15 ${MONO}`,
        color: '#334155',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0
      }
    }, "0"), React.createElement("span", {
      style: {
        position: 'absolute',
        left: '35%',
        transform: 'translateX(-50%)'
      }
    }, "7"), React.createElement("span", {
      style: {
        position: 'absolute',
        left: '55%',
        transform: 'translateX(-50%)'
      }
    }, "11"), React.createElement("span", {
      style: {
        position: 'absolute',
        right: 0
      }
    }, "20 \xB0C")))));
  }
  function Controles({
    A,
    psi,
    tM
  }) {
    const pt = [['R-32', '121,0 PSI', true], ['R-410A', '118,0 PSI'], ['R-22', '68,5 PSI']];
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 444,
        top: 120,
        width: 340,
        height: 304,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        ...CARD,
        boxSizing: 'border-box',
        flex: 'none',
        height: 104,
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        height: 24,
        padding: '0 9px',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#1D4ED8',
        border: '1px solid #1E3A8A',
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '.06em',
        lineHeight: 1
      }
    }, "\u25CF BAIXA"), React.createElement("span", {
      style: {
        ...RG,
        letterSpacing: '.1em'
      }
    }, "SUC\xC7\xC3O \xB7 PSI")), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '52px minmax(0,1fr) 52px',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        ...ST.S28,
        minHeight: 52,
        height: 52,
        fontSize: 24,
        lineHeight: 1
      }
    }, "\u2212"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%)',
        border: '1.5px solid #7A6A3A',
        borderRadius: 8,
        boxShadow: 'inset 0 2px 6px rgba(63,50,16,.24)',
        font: `700 24px/1 ${MONO}`,
        color: '#0C2747'
      }
    }, Math.round(psi)), React.createElement("div", {
      style: {
        ...ST.S28,
        minHeight: 52,
        height: 52,
        fontSize: 24,
        lineHeight: 1
      }
    }, "+"))), React.createElement("div", {
      style: {
        ...CARD,
        boxSizing: 'border-box',
        flex: 1,
        minHeight: 0,
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("span", {
      style: {
        ...RG,
        letterSpacing: '.1em'
      }
    }, "REFER\xCANCIA P-T \xB7 4,4 \xB0C"), pt.map(([f, v, sel]) => React.createElement("div", {
      key: f,
      style: {
        boxSizing: 'border-box',
        height: 30,
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        background: sel ? '#FFF7E6' : '#F5F3EC',
        border: sel ? '2px solid #FFB020' : '1px solid #D6D1C4',
        font: `700 15px/1 ${MONO}`,
        color: '#0C2747'
      }
    }, React.createElement("span", null, f), React.createElement("span", null, v)))), React.createElement("div", {
      ref: A.ref('mandar'),
      style: {
        ...ST.S86,
        flex: 'none',
        minHeight: 44,
        height: 44,
        fontSize: 16,
        lineHeight: 1,
        letterSpacing: '.1em',
        transform: `scale(${tM})`
      }
    }, "+ MANDAR PARA O LAUDO"));
  }
  function Piece() {
    const {
      T,
      CUES
    } = useComposition();
    const a = CUES.Acao,
      L = CUES.LaudoPix;
    const root = React.useRef(null);
    const A = useAnchors(root);
    const V = 0.45;
    const g0 = a + 0.7,
      g1 = a + 3.8;
    const pa = MOTION.enter(T, g0, g1);
    const sh = lerp(16.8, 8.8, pa),
      psi = lerp(104, 122, pa);
    const tM = a + 5.05,
      tG = a + 6.15;
    const fade0 = L + 4.25,
      fade1 = L + 4.7;
    const on = t => T >= t + 0.04;
    const sOn = T >= tM + 0.1 ? {
      n: 1,
      o: 1,
      s: 1 + 0.25 * Math.sin(Math.PI * p01(T, tM + 0.1, tM + 0.5))
    } : null;
    const rg = A.pos.regua;
    const pino = v => rg ? {
      x: rg.x - rg.w / 2 + 16 + v / 20 * (rg.w - 32),
      y: rg.y + 1
    } : {
      x: 300,
      y: 390
    };
    const sai = MOTION.enter(T, a, a + V);
    const ganchoO = T < a + V ? 1 - sai : T >= fade0 ? MOTION.enter(T, fade0, fade1) : 0;
    const ganchoX = T < a + V ? -28 * sai : 0;
    const ganchoT = T < a + V ? T : 0;
    const telaX = 24 * (1 - sai);
    const maoO = MOTION.enter(T, a + 0.2, a + 0.45) * (1 - MOTION.enter(T, tG + 0.3, L));
    return React.createElement("div", {
      style: {
        position: 'relative',
        width: 800,
        height: 500,
        overflow: 'hidden',
        ...BG
      }
    }, React.createElement("div", {
      ref: root,
      "data-screen-label": `Loop 04 · ${Math.floor(T)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ...BG,
        color: '#0C2747',
        fontFamily: BARLOW,
        transform: `translateX(${telaX}px)`
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 8,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("div", {
      style: ST.S21
    }, "\u2039"), React.createElement("div", {
      style: {
        ...ST.S14,
        lineHeight: 1.2
      }
    }, "AFERIR VIVO"), React.createElement(Faixa, null), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        lineHeight: 1.1
      }
    }, "R-32")), React.createElement(Abas, {
      ativa: 1
    }), React.createElement(GasSH, {
      A: A,
      T: T,
      sh: sh,
      psi: psi
    }), React.createElement(Controles, {
      A: A,
      psi: psi,
      tM: MOTION.press(T, tM)
    }), React.createElement(Dock, {
      ativa: on(tG) ? 3 : 1,
      selo: sOn,
      rg: A.ref('ganhos'),
      sg: MOTION.press(T, tG)
    }), React.createElement(Hand, {
      T: T,
      A: A,
      o: maoO,
      start: {
        x: 520,
        y: 340
      },
      taps: [g0, tM, tG],
      moves: [{
        s: a + 0.25,
        e: g0 - 0.04,
        to: pino(16.8)
      }, {
        s: g0,
        e: g1,
        to: pino(8.8)
      }, {
        s: g1 + 0.3,
        e: tM - 0.04,
        to: 'mandar',
        dx: 40,
        dy: -17
      }, {
        s: tM + 0.3,
        e: tG - 0.05,
        to: 'ganhos',
        dy: -12
      }]
    }), T >= L && React.createElement(Laudo, {
      T: T,
      L: L
    })), ganchoO > 0.001 && React.createElement(Gancho, {
      t: ganchoT,
      o: ganchoO,
      x: ganchoX
    }));
  }
  const ROTD = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.16em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const CX = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1.5px solid #A3ACB9',
    borderRadius: 10
  };
  function Laudo({
    T,
    L
  }) {
    const o = MOTION.enter(T, L, L + 0.45);
    const fx = MOTION.enter(T, L + 1.05, L + 1.5);
    const cel = [['SUCÇÃO', '122 PSI'], ['TUBO', '13,4 °C'], ['EVAPORAÇÃO', '4,6 °C']];
    return React.createElement("div", {
      "data-screen-label": "Loop 04 \xB7 Laudo N\xBA 1079",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        background: `rgba(8,27,51,${0.92 * o})`,
        fontFamily: DOC,
        color: '#0C2747',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 12,
        top: 8,
        width: 776,
        height: 384,
        padding: 12,
        background: '#FFFFFF',
        borderRadius: 12,
        boxShadow: '0 16px 36px rgba(8,27,51,.45)',
        opacity: o,
        transform: `translateX(${(1 - o) * 28}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 62,
        padding: '0 20px',
        borderRadius: 12,
        background: '#0F2847',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#DCE7F5'
      }
    }, "PRESTADORA DO SERVI\xC7O"), React.createElement("b", {
      style: {
        fontSize: 20,
        lineHeight: 1.15
      }
    }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#BFD7F2'
      }
    }, "Belo Horizonte \xB7 Chave Pix ", React.createElement("b", {
      style: {
        color: '#FFFFFF'
      }
    }, "pix@climasilvaefilhos.com.br"))), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.2em',
        lineHeight: 1.2
      }
    }, "LAUDO DE APROVA\xC7\xC3O"), React.createElement("b", {
      style: {
        font: `700 27px/1.25 ${MONO}`
      }
    }, "N\xBA 1079"))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        height: 40,
        display: 'grid',
        gridTemplateColumns: '230px minmax(0,1fr)',
        alignItems: 'stretch'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "CLIENTE"), React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2
      }
    }, "Cl\xEDnica Odonto Vida")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        borderLeft: '1px solid #CBD2DB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "EQUIPAMENTO"), React.createElement("b", {
      style: {
        font: `700 13.5px/1.2 ${MONO}`
      }
    }, "Daikin \xB7 24.000 BTU/h \xB7 R-32"))), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '392px minmax(0,1fr)',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        flex: 'none'
      }
    }, "LEITURAS AFERIDAS NA BANCADA"), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '8px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#1E293B',
        letterSpacing: '.08em'
      }
    }, "G\xC1S & SH \xB7 R-32"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 24,
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        borderRadius: 8,
        background: '#DCFCE7',
        border: '1.5px solid #15803D',
        color: '#14532D',
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.05em'
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 13,
      c: "#15803D",
      w: 3
    }), "CARGA IDEAL")), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("b", {
      style: {
        fontSize: 18,
        lineHeight: 1.2
      }
    }, "SH 8,8 \xB0C"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "122 PSI \xB7 Tubo 13,4 \xB0C")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 6
      }
    }, cel.map(([l, v]) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        minWidth: 0,
        minHeight: 0,
        padding: '0 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '.1em',
        lineHeight: 1.2,
        color: '#334155'
      }
    }, l), React.createElement("b", {
      style: {
        font: `700 14px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, v))))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        padding: '6px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2,
        whiteSpace: 'normal',
        textWrap: 'balance'
      }
    }, "Corre\xE7\xE3o de Vazamento na Flange + V\xE1cuo + Carga de Fluido"), React.createElement("b", {
      style: {
        flex: 'none',
        font: `700 15px/1.2 ${MONO}`
      }
    }, "R$ 540,00")), React.createElement("div", {
  style: {
    background: '#F0FDF4',
    borderLeft: '4px solid #15803D',
    borderRadius: 6,
    padding: '6px 9px',
    color: '#14532D',
    fontSize: 11.5,
    lineHeight: 1.25,
    whiteSpace: 'normal',
    textWrap: 'pretty',
    overflow: 'hidden'
  }
}, React.createElement("b", {
  style: {
    fontWeight: 800
  }
}, "Preven\xE7\xE3o:"), " Evita golpe de l\xEDquido e queima do compressor (reparo evitado de R$ 1.400 a R$ 2.100)."))), React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 16px',
        borderRadius: 12,
        background: 'linear-gradient(180deg,#F3ECDA 0%,#EFE6CF 100%)',
        border: '2px solid #A6945F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        fontSize: 11,
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("b", {
      style: {
        font: `700 32px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, "R$ 540,00")), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '6px 9px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        overflow: 'hidden'
      }
    }, React.createElement("svg", {
      width: QR.n * 3,
      height: QR.n * 3,
      viewBox: `0 0 ${QR.n} ${QR.n}`,
      shapeRendering: "crispEdges",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, React.createElement("path", {
      d: QR.d,
      fill: "#000000"
    })), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        height: QR.n * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'normal'
      }
    }, React.createElement("span", {
      style: {
        ...ROTD
      }
    }, "PIX \xB7 VALOR EXATO DO LAUDO"), React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`,
        whiteSpace: 'nowrap'
      }
    }, "R$ 540,00"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.25,
        textWrap: 'pretty'
      }
    }, "Para autorizar o servi\xE7o, responda APROVADO nesta mensagem.")))))), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 10,
        height: 84,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'linear-gradient(90deg,#081B33 0%,#0C2747 100%)',
        border: '2px solid #22C55E',
        borderRadius: 14,
        boxShadow: '0 -6px 24px rgba(8,27,51,.45)',
        opacity: fx,
        transform: `translateY(${(1 - fx) * 24}px)`,
        fontFamily: BARLOW
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 60,
        padding: '0 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        borderRadius: 10,
        background: '#15803D',
        border: '2px solid #4ADE80',
        color: '#FFFFFF',
        font: `700 18px/1.2 ${MONO}`,
        letterSpacing: '-.01em'
      }
    }, React.createElement("span", null, "\u2713 CARGA R-32 EXATA"), React.createElement("span", null, "\xB7 PIX R$ 540")), React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#FFFFFF'
      }
    }, React.createElement("span", null, "Carga R-32 cravada no alvo."), React.createElement("span", {
      style: {
        padding: '1px 6px 2px',
        margin: '0 -6px',
        borderRadius: 4,
        background: '#FACC15',
        color: '#0C2747'
      }
    }, "Zero retorno de fluido l\xEDquido."))));
  }
  window.GPLoops.l04 = Piece;
})();
(function () {
  const useComposition = () => React.useContext(window.GPLoopCtx);
  const css = s => {
    const o = {};
    s.split(';').forEach(d => {
      const i = d.indexOf(':');
      if (i < 0) return;
      const k = d.slice(0, i).trim();
      if (!k) return;
      o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
    });
    return o;
  };
  const ST = {
    S10: css("box-sizing:border-box;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;line-height:1;letter-spacing:-.02em;white-space:nowrap"),
    S14: css("flex:1;font-size:20px;font-weight:700;letter-spacing:.14em;white-space:nowrap"),
    S21: css("box-sizing:border-box;flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px"),
    S22: css("box-sizing:border-box;flex:none;font:700 12px/1 'JetBrains Mono',monospace;color:#0C2747;padding:8px 8px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:6px"),
    S28: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S37: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S50: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747;border-radius:10px"),
    S86: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#1A8642 0%,#1A8642 45%,#126B34 100%);border:1px solid #14532D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #14532D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S137: css("box-sizing:border-box;flex:none;display:grid;grid-template-columns:1fr 1.25fr 1fr;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px")
  };
  const BG = {
    backgroundColor: '#D6D2C9',
    backgroundImage: 'linear-gradient(180deg,#D6D2C9 0%,#DFDCD5 14%,#CCC8BF 100%)'
  };
  const CARD = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #94A3B8',
    boxShadow: '0 1px 3px rgba(9,30,66,.14)',
    borderRadius: 12
  };
  const MONO = "'JetBrains Mono',monospace";
  const BARLOW = "'Barlow Semi Condensed',sans-serif";
  const DOC = "Arial,'Liberation Sans',Helvetica,sans-serif";
  const QR = {"payload":"00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406340.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO1086630486E9","n":53,"d":"M0 0h7v1h-7zM10 0h6v1h-6zM17 0h4v1h-4zM24 0h1v1h-1zM30 0h1v1h-1zM32 0h1v1h-1zM35 0h1v1h-1zM39 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM10 1h4v1h-4zM15 1h7v1h-7zM23 1h3v1h-3zM29 1h1v1h-1zM34 1h2v1h-2zM37 1h3v1h-3zM42 1h2v1h-2zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h3v1h-3zM12 2h4v1h-4zM17 2h5v1h-5zM24 2h1v1h-1zM27 2h2v1h-2zM30 2h1v1h-1zM32 2h2v1h-2zM36 2h2v1h-2zM40 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM8 3h1v1h-1zM12 3h1v1h-1zM14 3h1v1h-1zM18 3h2v1h-2zM23 3h1v1h-1zM25 3h1v1h-1zM28 3h2v1h-2zM34 3h1v1h-1zM36 3h1v1h-1zM39 3h1v1h-1zM42 3h1v1h-1zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h4v1h-4zM13 4h3v1h-3zM21 4h2v1h-2zM24 4h7v1h-7zM32 4h1v1h-1zM35 4h3v1h-3zM39 4h4v1h-4zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM11 5h1v1h-1zM24 5h1v1h-1zM28 5h1v1h-1zM30 5h1v1h-1zM33 5h2v1h-2zM38 5h1v1h-1zM41 5h2v1h-2zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM8 7h1v1h-1zM10 7h1v1h-1zM17 7h4v1h-4zM24 7h1v1h-1zM28 7h1v1h-1zM30 7h1v1h-1zM33 7h1v1h-1zM36 7h3v1h-3zM40 7h3v1h-3zM0 8h1v1h-1zM2 8h5v1h-5zM13 8h1v1h-1zM15 8h1v1h-1zM20 8h2v1h-2zM23 8h6v1h-6zM31 8h6v1h-6zM39 8h1v1h-1zM41 8h2v1h-2zM46 8h5v1h-5zM0 9h1v1h-1zM4 9h2v1h-2zM7 9h1v1h-1zM9 9h2v1h-2zM14 9h1v1h-1zM20 9h1v1h-1zM22 9h1v1h-1zM24 9h1v1h-1zM29 9h2v1h-2zM32 9h2v1h-2zM35 9h3v1h-3zM39 9h1v1h-1zM42 9h2v1h-2zM45 9h1v1h-1zM48 9h1v1h-1zM52 9h1v1h-1zM6 10h3v1h-3zM13 10h1v1h-1zM15 10h4v1h-4zM21 10h1v1h-1zM24 10h1v1h-1zM30 10h3v1h-3zM34 10h3v1h-3zM38 10h2v1h-2zM41 10h1v1h-1zM43 10h1v1h-1zM46 10h1v1h-1zM48 10h4v1h-4zM0 11h1v1h-1zM4 11h2v1h-2zM9 11h3v1h-3zM13 11h2v1h-2zM16 11h1v1h-1zM22 11h3v1h-3zM30 11h2v1h-2zM34 11h4v1h-4zM39 11h4v1h-4zM44 11h2v1h-2zM48 11h2v1h-2zM51 11h1v1h-1zM0 12h1v1h-1zM2 12h1v1h-1zM6 12h1v1h-1zM10 12h9v1h-9zM23 12h5v1h-5zM29 12h3v1h-3zM33 12h1v1h-1zM35 12h3v1h-3zM43 12h2v1h-2zM47 12h2v1h-2zM50 12h2v1h-2zM0 13h1v1h-1zM3 13h1v1h-1zM5 13h1v1h-1zM7 13h3v1h-3zM12 13h2v1h-2zM15 13h2v1h-2zM18 13h1v1h-1zM21 13h1v1h-1zM24 13h1v1h-1zM28 13h1v1h-1zM30 13h3v1h-3zM41 13h2v1h-2zM47 13h2v1h-2zM50 13h1v1h-1zM52 13h1v1h-1zM2 14h1v1h-1zM5 14h4v1h-4zM11 14h1v1h-1zM13 14h1v1h-1zM16 14h2v1h-2zM20 14h2v1h-2zM23 14h1v1h-1zM27 14h1v1h-1zM29 14h5v1h-5zM36 14h5v1h-5zM43 14h2v1h-2zM46 14h4v1h-4zM51 14h1v1h-1zM3 15h1v1h-1zM9 15h1v1h-1zM12 15h1v1h-1zM14 15h1v1h-1zM19 15h2v1h-2zM24 15h1v1h-1zM27 15h1v1h-1zM29 15h1v1h-1zM34 15h1v1h-1zM40 15h3v1h-3zM48 15h1v1h-1zM51 15h1v1h-1zM0 16h4v1h-4zM6 16h1v1h-1zM9 16h1v1h-1zM12 16h3v1h-3zM16 16h2v1h-2zM21 16h1v1h-1zM24 16h3v1h-3zM31 16h1v1h-1zM33 16h4v1h-4zM39 16h1v1h-1zM42 16h4v1h-4zM47 16h5v1h-5zM1 17h1v1h-1zM7 17h1v1h-1zM9 17h1v1h-1zM11 17h10v1h-10zM22 17h1v1h-1zM24 17h2v1h-2zM28 17h4v1h-4zM34 17h1v1h-1zM42 17h2v1h-2zM45 17h1v1h-1zM1 18h1v1h-1zM6 18h1v1h-1zM9 18h2v1h-2zM15 18h1v1h-1zM17 18h2v1h-2zM22 18h2v1h-2zM27 18h1v1h-1zM29 18h1v1h-1zM31 18h1v1h-1zM33 18h1v1h-1zM35 18h1v1h-1zM37 18h3v1h-3zM41 18h1v1h-1zM46 18h5v1h-5zM0 19h1v1h-1zM2 19h2v1h-2zM5 19h1v1h-1zM7 19h4v1h-4zM16 19h1v1h-1zM18 19h8v1h-8zM27 19h1v1h-1zM29 19h4v1h-4zM37 19h1v1h-1zM40 19h2v1h-2zM43 19h3v1h-3zM47 19h1v1h-1zM49 19h1v1h-1zM51 19h1v1h-1zM2 20h2v1h-2zM5 20h2v1h-2zM8 20h1v1h-1zM12 20h2v1h-2zM16 20h3v1h-3zM22 20h1v1h-1zM24 20h1v1h-1zM27 20h5v1h-5zM33 20h4v1h-4zM39 20h1v1h-1zM42 20h3v1h-3zM48 20h1v1h-1zM51 20h1v1h-1zM0 21h1v1h-1zM3 21h1v1h-1zM5 21h1v1h-1zM9 21h4v1h-4zM14 21h1v1h-1zM16 21h1v1h-1zM18 21h4v1h-4zM25 21h1v1h-1zM27 21h1v1h-1zM30 21h1v1h-1zM32 21h2v1h-2zM35 21h1v1h-1zM40 21h3v1h-3zM45 21h1v1h-1zM47 21h2v1h-2zM50 21h1v1h-1zM52 21h1v1h-1zM0 22h1v1h-1zM3 22h1v1h-1zM5 22h2v1h-2zM8 22h1v1h-1zM10 22h1v1h-1zM17 22h2v1h-2zM21 22h2v1h-2zM24 22h1v1h-1zM28 22h2v1h-2zM33 22h7v1h-7zM42 22h1v1h-1zM44 22h6v1h-6zM51 22h1v1h-1zM1 23h1v1h-1zM4 23h2v1h-2zM8 23h1v1h-1zM10 23h3v1h-3zM15 23h4v1h-4zM20 23h1v1h-1zM23 23h1v1h-1zM25 23h1v1h-1zM27 23h3v1h-3zM32 23h1v1h-1zM34 23h2v1h-2zM40 23h1v1h-1zM43 23h1v1h-1zM49 23h1v1h-1zM52 23h1v1h-1zM1 24h11v1h-11zM13 24h1v1h-1zM15 24h1v1h-1zM19 24h2v1h-2zM24 24h5v1h-5zM30 24h2v1h-2zM34 24h1v1h-1zM36 24h1v1h-1zM38 24h2v1h-2zM42 24h7v1h-7zM51 24h1v1h-1zM0 25h2v1h-2zM4 25h1v1h-1zM8 25h1v1h-1zM10 25h1v1h-1zM12 25h1v1h-1zM15 25h2v1h-2zM22 25h3v1h-3zM28 25h5v1h-5zM35 25h3v1h-3zM40 25h1v1h-1zM42 25h3v1h-3zM48 25h1v1h-1zM51 25h2v1h-2zM0 26h1v1h-1zM4 26h1v1h-1zM6 26h1v1h-1zM8 26h3v1h-3zM13 26h3v1h-3zM17 26h2v1h-2zM20 26h2v1h-2zM23 26h2v1h-2zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h1v1h-1zM33 26h7v1h-7zM41 26h1v1h-1zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM1 27h4v1h-4zM8 27h1v1h-1zM10 27h2v1h-2zM13 27h1v1h-1zM16 27h3v1h-3zM22 27h3v1h-3zM28 27h1v1h-1zM31 27h1v1h-1zM36 27h1v1h-1zM38 27h1v1h-1zM40 27h1v1h-1zM42 27h1v1h-1zM44 27h1v1h-1zM48 27h1v1h-1zM51 27h1v1h-1zM0 28h1v1h-1zM3 28h6v1h-6zM10 28h6v1h-6zM17 28h5v1h-5zM23 28h8v1h-8zM35 28h2v1h-2zM39 28h1v1h-1zM42 28h10v1h-10zM1 29h1v1h-1zM4 29h2v1h-2zM7 29h4v1h-4zM12 29h1v1h-1zM15 29h1v1h-1zM17 29h2v1h-2zM22 29h3v1h-3zM28 29h4v1h-4zM33 29h1v1h-1zM37 29h1v1h-1zM39 29h1v1h-1zM42 29h1v1h-1zM45 29h1v1h-1zM47 29h4v1h-4zM52 29h1v1h-1zM3 30h2v1h-2zM6 30h2v1h-2zM9 30h2v1h-2zM12 30h2v1h-2zM15 30h1v1h-1zM17 30h2v1h-2zM21 30h1v1h-1zM24 30h4v1h-4zM29 30h2v1h-2zM34 30h1v1h-1zM36 30h1v1h-1zM38 30h2v1h-2zM41 30h1v1h-1zM47 30h2v1h-2zM51 30h1v1h-1zM0 31h3v1h-3zM4 31h1v1h-1zM11 31h1v1h-1zM15 31h4v1h-4zM20 31h1v1h-1zM23 31h1v1h-1zM26 31h1v1h-1zM29 31h1v1h-1zM34 31h1v1h-1zM36 31h1v1h-1zM38 31h3v1h-3zM42 31h1v1h-1zM44 31h2v1h-2zM47 31h1v1h-1zM49 31h1v1h-1zM52 31h1v1h-1zM4 32h1v1h-1zM6 32h1v1h-1zM9 32h4v1h-4zM14 32h3v1h-3zM18 32h2v1h-2zM24 32h3v1h-3zM28 32h1v1h-1zM31 32h1v1h-1zM34 32h3v1h-3zM41 32h2v1h-2zM45 32h1v1h-1zM47 32h1v1h-1zM50 32h2v1h-2zM1 33h5v1h-5zM11 33h4v1h-4zM16 33h2v1h-2zM20 33h2v1h-2zM28 33h2v1h-2zM33 33h1v1h-1zM39 33h6v1h-6zM48 33h1v1h-1zM50 33h1v1h-1zM52 33h1v1h-1zM2 34h2v1h-2zM5 34h2v1h-2zM8 34h1v1h-1zM12 34h4v1h-4zM20 34h2v1h-2zM24 34h1v1h-1zM27 34h1v1h-1zM30 34h1v1h-1zM32 34h3v1h-3zM36 34h3v1h-3zM44 34h2v1h-2zM51 34h1v1h-1zM2 35h2v1h-2zM5 35h1v1h-1zM7 35h2v1h-2zM12 35h1v1h-1zM14 35h2v1h-2zM17 35h2v1h-2zM22 35h4v1h-4zM30 35h4v1h-4zM40 35h1v1h-1zM42 35h2v1h-2zM46 35h1v1h-1zM48 35h1v1h-1zM0 36h3v1h-3zM4 36h1v1h-1zM6 36h3v1h-3zM10 36h1v1h-1zM15 36h1v1h-1zM17 36h3v1h-3zM21 36h1v1h-1zM23 36h1v1h-1zM30 36h1v1h-1zM36 36h2v1h-2zM39 36h1v1h-1zM42 36h1v1h-1zM45 36h1v1h-1zM47 36h4v1h-4zM0 37h4v1h-4zM5 37h1v1h-1zM8 37h2v1h-2zM11 37h1v1h-1zM16 37h2v1h-2zM22 37h5v1h-5zM28 37h3v1h-3zM32 37h2v1h-2zM35 37h1v1h-1zM39 37h1v1h-1zM42 37h3v1h-3zM46 37h3v1h-3zM50 37h3v1h-3zM0 38h2v1h-2zM3 38h4v1h-4zM8 38h1v1h-1zM10 38h2v1h-2zM14 38h3v1h-3zM19 38h1v1h-1zM21 38h1v1h-1zM24 38h1v1h-1zM28 38h1v1h-1zM36 38h4v1h-4zM47 38h3v1h-3zM51 38h1v1h-1zM0 39h1v1h-1zM2 39h1v1h-1zM7 39h4v1h-4zM15 39h1v1h-1zM18 39h2v1h-2zM24 39h1v1h-1zM27 39h1v1h-1zM30 39h1v1h-1zM32 39h1v1h-1zM34 39h1v1h-1zM38 39h1v1h-1zM40 39h1v1h-1zM43 39h4v1h-4zM48 39h2v1h-2zM52 39h1v1h-1zM1 40h3v1h-3zM5 40h2v1h-2zM9 40h2v1h-2zM12 40h1v1h-1zM14 40h1v1h-1zM16 40h6v1h-6zM27 40h1v1h-1zM31 40h1v1h-1zM33 40h4v1h-4zM39 40h1v1h-1zM42 40h1v1h-1zM44 40h2v1h-2zM47 40h2v1h-2zM52 40h1v1h-1zM0 41h2v1h-2zM4 41h2v1h-2zM8 41h1v1h-1zM10 41h1v1h-1zM16 41h2v1h-2zM19 41h1v1h-1zM23 41h5v1h-5zM30 41h1v1h-1zM32 41h1v1h-1zM39 41h4v1h-4zM45 41h1v1h-1zM47 41h4v1h-4zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h5v1h-5zM9 42h2v1h-2zM12 42h1v1h-1zM14 42h2v1h-2zM17 42h1v1h-1zM19 42h3v1h-3zM24 42h1v1h-1zM26 42h1v1h-1zM28 42h2v1h-2zM31 42h5v1h-5zM37 42h2v1h-2zM42 42h4v1h-4zM48 42h1v1h-1zM51 42h1v1h-1zM1 43h2v1h-2zM9 43h1v1h-1zM12 43h3v1h-3zM18 43h4v1h-4zM23 43h3v1h-3zM32 43h1v1h-1zM34 43h1v1h-1zM36 43h1v1h-1zM41 43h3v1h-3zM46 43h2v1h-2zM49 43h1v1h-1zM51 43h1v1h-1zM3 44h1v1h-1zM6 44h3v1h-3zM10 44h1v1h-1zM12 44h1v1h-1zM17 44h2v1h-2zM21 44h1v1h-1zM24 44h8v1h-8zM35 44h2v1h-2zM38 44h1v1h-1zM44 44h5v1h-5zM51 44h1v1h-1zM8 45h5v1h-5zM14 45h1v1h-1zM17 45h1v1h-1zM22 45h3v1h-3zM28 45h3v1h-3zM32 45h2v1h-2zM40 45h1v1h-1zM42 45h1v1h-1zM44 45h1v1h-1zM48 45h1v1h-1zM51 45h1v1h-1zM0 46h7v1h-7zM11 46h1v1h-1zM14 46h1v1h-1zM16 46h4v1h-4zM22 46h1v1h-1zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h1v1h-1zM33 46h4v1h-4zM38 46h1v1h-1zM40 46h2v1h-2zM43 46h2v1h-2zM46 46h1v1h-1zM48 46h1v1h-1zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h2v1h-2zM11 47h1v1h-1zM21 47h2v1h-2zM24 47h1v1h-1zM28 47h1v1h-1zM33 47h2v1h-2zM36 47h3v1h-3zM40 47h1v1h-1zM42 47h1v1h-1zM44 47h1v1h-1zM48 47h1v1h-1zM51 47h1v1h-1zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM8 48h4v1h-4zM13 48h8v1h-8zM22 48h1v1h-1zM24 48h5v1h-5zM31 48h2v1h-2zM35 48h5v1h-5zM42 48h1v1h-1zM44 48h9v1h-9zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h1v1h-1zM10 49h2v1h-2zM13 49h2v1h-2zM16 49h3v1h-3zM21 49h1v1h-1zM23 49h3v1h-3zM29 49h2v1h-2zM32 49h2v1h-2zM36 49h2v1h-2zM39 49h2v1h-2zM42 49h4v1h-4zM47 49h1v1h-1zM50 49h3v1h-3zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM8 50h5v1h-5zM14 50h1v1h-1zM16 50h1v1h-1zM20 50h1v1h-1zM22 50h1v1h-1zM24 50h2v1h-2zM27 50h2v1h-2zM30 50h3v1h-3zM34 50h5v1h-5zM40 50h2v1h-2zM45 50h1v1h-1zM48 50h2v1h-2zM51 50h2v1h-2zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h1v1h-1zM12 51h1v1h-1zM14 51h2v1h-2zM17 51h1v1h-1zM19 51h3v1h-3zM23 51h1v1h-1zM25 51h1v1h-1zM30 51h1v1h-1zM33 51h1v1h-1zM35 51h1v1h-1zM39 51h6v1h-6zM49 51h1v1h-1zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h1v1h-1zM11 52h3v1h-3zM16 52h3v1h-3zM20 52h2v1h-2zM24 52h2v1h-2zM27 52h1v1h-1zM29 52h3v1h-3zM33 52h1v1h-1zM36 52h1v1h-1zM41 52h5v1h-5zM47 52h2v1h-2zM50 52h1v1h-1z"};
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1,
      bx = 3 * (x2 - x1) - cx,
      ax = 1 - cx - bx,
      cy = 3 * y1,
      by = 3 * (y2 - y1) - cy,
      ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t,
      sy = t => ((ay * t + by) * t + cy) * t;
    return x => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0,
        hi = 1,
        t = x;
      for (let i = 0; i < 26; i++) {
        t = (lo + hi) / 2;
        if (sx(t) < x) lo = t;else hi = t;
      }
      return sy(t);
    };
  }
  const CURVA = bezier(0.22, 1, 0.36, 1);
  const p01 = (T, s, e) => e <= s ? T >= s ? 1 : 0 : Math.min(1, Math.max(0, (T - s) / (e - s)));
  const MOTION = {
    enter: (T, s, e) => CURVA(p01(T, s, e)),
    press: (T, at) => 1 - 0.07 * Math.sin(Math.PI * p01(T, at - 0.1, at + 0.24)),
    pulse: (t, per) => 0.5 - 0.5 * Math.cos(2 * Math.PI * t / per)
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  const R_ = (x, y, w, h, r) => 'M' + (x + r) + ' ' + y + 'h' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + ' ' + r + 'h-' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + '-' + r + 'v-' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + '-' + r + 'z';
  const C_ = (x, y, r) => 'M' + (x + r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 1-' + 2 * r + ' 0 ' + r + ' ' + r + ' 0 0 1 ' + 2 * r + ' 0z';
  const IC = {
    prancheta: [R_(8, 2, 8, 4, 1), 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
    multimetro: [R_(5, 2, 14, 20, 2), R_(8, 5, 8, 4, 0.5), C_(12, 15, 2.5), 'M12 15l1.5-1.5'],
    sol: [C_(12, 12, 4), 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
    documento: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'],
    raio: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
    desliga: ['M12 2v10', 'M18.4 6.6a9 9 0 1 1-12.77.04'],
    ok: ['M20 6 9 17l-5-5'],
    fechar: ['M18 6 6 18', 'm6 6 12 12']
  };
  function Ic({
    n,
    s = 20,
    c = '#334155',
    w = 1.6
  }) {
    return React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: c,
      strokeWidth: w,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, IC[n].map((d, i) => React.createElement("path", {
      key: i,
      d: d
    })));
  }
  function useAnchors(rootRef) {
    const els = React.useRef({});
    const [pos, setPos] = React.useState({});
    const ref = k => el => {
      if (el) els.current[k] = el;
    };
    React.useLayoutEffect(() => {
      const medir = () => {
        const root = rootRef.current;
        if (!root) return;
        const out = {};
        Object.keys(els.current).forEach(k => {
          const el = els.current[k];
          let x = 0,
            y = 0,
            e = el;
          while (e && e !== root) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
          }
          out[k] = {
            x: Math.round(x + el.offsetWidth / 2),
            y: Math.round(y + el.offsetHeight / 2),
            w: el.offsetWidth
          };
        });
        setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
      };
      medir();
      const t1 = setTimeout(medir, 400),
        t2 = setTimeout(medir, 1500);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return {
      ref,
      pos
    };
  }
  const MAO = 'M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L6 14Z';
  function Hand({
    T,
    A,
    moves,
    taps = [],
    start,
    o
  }) {
    if (o <= 0.001) return null;
    let cur = start,
      prev = start;
    for (const m of moves) {
      const tg = typeof m.to === 'string' ? A.pos[m.to] : m.to;
      if (!tg) return null;
      const pt = {
        x: tg.x + (m.dx || 0),
        y: tg.y + (m.dy || 0)
      };
      if (T < m.s) break;
      const p = MOTION.enter(T, m.s, m.e);
      cur = {
        x: lerp(prev.x, pt.x, p),
        y: lerp(prev.y, pt.y, p)
      };
      prev = pt;
    }
    let sc = 1;
    taps.forEach(t => {
      sc *= MOTION.press(T, t);
    });
    const rip = taps.map(t => {
      const p = p01(T, t, t + 0.6);
      return p > 0 && p < 1 ? p : null;
    }).find(p => p !== null);
    const k = 50 / 24,
      ox = 8 * k,
      oy = 2.2 * k;
    return React.createElement(React.Fragment, null, rip != null && React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid #FFB020',
        zIndex: 49,
        pointerEvents: 'none',
        opacity: 0.85 * (1 - rip) * o,
        transform: `translate(${cur.x - 28}px,${cur.y - 28}px) scale(${0.3 + 0.9 * CURVA(rip)})`
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        zIndex: 50,
        pointerEvents: 'none',
        opacity: o,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `translate(${cur.x - ox}px,${cur.y - oy}px) scale(${sc})`
      }
    }, React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        filter: 'drop-shadow(0 4px 6px rgba(9,30,66,.35))'
      }
    }, React.createElement("path", {
      d: MAO,
      fill: "#FFFFFF",
      stroke: "#0C2747",
      strokeWidth: "1.3",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 9.5V12M14 10V12M18 11V12",
      fill: "none",
      stroke: "#0C2747",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    }))));
  }
  function Faixa() {
    const cel = [['MARCA', 'Fujitsu'], ['BTU/h', '36.000'], ['FLUIDO', 'R-410A']];
    return React.createElement("div", {
      style: {
        ...ST.S137,
        width: 320,
        height: 50
      }
    }, cel.map(([l, v], i) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
        borderLeft: i ? '1px solid rgba(63,50,16,.25)' : 'none'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, l, " \u25BC"), React.createElement("b", {
      style: i ? {
        font: `700 17px/1.25 ${MONO}`
      } : {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, v))));
  }
  const DOCK = [['Sintomas', 'prancheta'], ['Aferir Vivo', 'multimetro'], ['Códigos & LED', 'sol'], ['Ganhos & Laudo', 'documento']];
  function Dock({
    ativa,
    selo,
    rg,
    sg
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 8,
        height: 60,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 8,
        zIndex: 5
      }
    }, DOCK.map(([l, ic], i) => React.createElement("div", {
      key: l,
      ref: i === 3 ? rg : undefined,
      style: {
        ...ST.S10,
        position: 'relative',
        fontSize: 14,
        gap: 6,
        transform: i === 3 ? `scale(${sg})` : 'none'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        width: 36,
        height: 3,
        borderRadius: 2,
        background: i === ativa ? '#FFB020' : '#081B33',
        boxShadow: i === ativa ? '0 0 6px rgba(255,176,32,.8)' : 'none'
      }
    }), React.createElement(Ic, {
      n: ic,
      s: 22,
      c: "#FFFFFF"
    }), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, l), i === 3 && selo && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -9,
        right: 12,
        width: 28,
        height: 28,
        boxSizing: 'border-box',
        borderRadius: '50%',
        background: '#FFB020',
        border: '1px solid #7A4E00',
        color: '#0C2747',
        font: `700 15px/26px ${BARLOW}`,
        textAlign: 'center',
        opacity: selo.o,
        transform: `scale(${selo.s})`
      }
    }, selo.n))));
  }
  function Abas() {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 68,
        height: 44,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 8
      }
    }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
      key: t,
      style: {
        ...(i === 2 ? ST.S50 : {
          ...ST.S28,
          color: '#E0F2FE'
        }),
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '.02em'
      }
    }, t)));
  }
  const Borne = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      minWidth: h,
      height: h,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF',
      border: '1.5px solid #0C2747',
      borderRadius: 6,
      font: `700 ${fs}px/1 ${MONO}`,
      color: '#0C2747'
    }
  }, children);
  const Ponta = ({
    cor,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 21,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: cor === 'v' ? '#C81E1E' : '#111111',
      border: `1px solid ${cor === 'v' ? '#7F1D1D' : '#000000'}`,
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.05em'
    }
  }, "\u25CF ", children);
  const Escala = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 8px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#0C2747',
      border: '1px solid #081B33',
      color: '#FFFFFF',
      font: `700 ${fs}px/1 ${MONO}`,
      letterSpacing: '.04em'
    }
  }, children);
  const Esperado = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 7,
      background: '#DCFCE7',
      border: '1.5px solid #15803D',
      color: '#14532D',
      font: `700 ${fs}px/1 ${MONO}`
    }
  }, children);
  function Tarja({
    energ,
    children,
    cheia
  }) {
    const bg = energ ? '#B91C1C' : '#15803D';
    return React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: cheia ? 24 : 20,
        padding: cheia ? '0 10px' : '0 7px',
        display: 'flex',
        alignItems: 'center',
        gap: cheia ? 7 : 5,
        borderRadius: 6,
        background: bg,
        color: '#FFFFFF',
        fontSize: cheia ? 12 : 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: cheia ? '.08em' : '.1em',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement(Ic, {
      n: energ ? 'raio' : 'desliga',
      s: cheia ? 15 : 12,
      c: "#FFFFFF",
      w: 2
    }), children);
  }
  function BotaoNormal({
    r,
    g = 0,
    s = 1,
    h = 44,
    w,
    fs = 14,
    ls = '.06em'
  }) {
    return React.createElement("div", {
      ref: r,
      style: {
        ...ST.S28,
        position: 'relative',
        minHeight: h,
        height: h,
        width: w,
        fontSize: fs,
        lineHeight: 1,
        letterSpacing: ls,
        transform: `scale(${s})`
      }
    }, g > 0.001 && React.createElement("span", {
      style: {
        ...ST.S86,
        position: 'absolute',
        inset: -1,
        minHeight: 0,
        opacity: g
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 16,
      c: "#FFFFFF",
      w: 2.6
    }), "NORMAL"));
  }
  const ForaFaixa = ({
    h = 44,
    fs = 14,
    ls = '.06em'
  }) => React.createElement("div", {
    style: {
      ...ST.S28,
      minHeight: h,
      height: h,
      gap: 5,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: ls
    }
  }, React.createElement(Ic, {
    n: "fechar",
    s: 14,
    c: "#FFFFFF",
    w: 2.6
  }), "FORA DA FAIXA");
  const LINHA = {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '94px minmax(0,1fr)',
    borderTop: '1px solid #CFCBC2',
    minHeight: 0,
    overflow: 'hidden'
  };
  const ROT = {
    boxSizing: 'border-box',
    background: '#EFEDE8',
    borderRight: '1px solid #CFCBC2',
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.1em',
    color: '#334155',
    lineHeight: 1.15,
    whiteSpace: 'normal'
  };
  const VAL = {
    boxSizing: 'border-box',
    minWidth: 0,
    padding: '4px 8px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#1E293B',
    whiteSpace: 'nowrap'
  };
  const QUEBRA = React.createElement("span", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  });
  function Gancho({
    t,
    o,
    x = 0
  }) {
    const g = MOTION.pulse(t, 1.1);
    const zoom = 1 + 3.5 / 156 * p01(t, 0, 3.8);
    const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55));
    const l1 = MOTION.enter(t, 0.45, 1.05),
      l2 = MOTION.enter(t, 1.05, 1.65);
    const tinta = p => {
      const c = (a, b) => Math.round(lerp(a, b, p));
      return `rgb(${c(255, 12)},${c(255, 39)},${c(255, 71)})`;
    };
    const grifo = (txt, p) => React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '1px 8px 3px',
        margin: '0 -8px',
        borderRadius: 5,
        backgroundImage: 'linear-gradient(#FACC15,#FACC15)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: `${p * 100}% 100%`,
        color: tinta(p)
      }
    }, txt);
    return React.createElement("div", {
      "data-screen-label": `Loop 05 · Gancho · ${Math.floor(t)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 70,
        opacity: o,
        transform: `translateX(${x}px)`,
        background: 'radial-gradient(110% 90% at 28% 40%,#14365F 0%,#0C2747 52%,#081B33 100%)',
        color: '#FFFFFF',
        fontFamily: BARLOW,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 24,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        fontSize: 15,
        lineHeight: 1.2,
        letterSpacing: '.16em'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, "BANCADA GELOPRO"), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#BFD7F2'
      }
    }, "\xB7 TRAVA DE 30S")), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        padding: '0 12px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        letterSpacing: '.04em'
      }
    }, "FUJITSU \xB7 36.000 BTU/h \xB7 R-410A")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 52,
        top: 90,
        width: 260,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22,
        transform: `scale(${zoom})`,
        transformOrigin: '50% 45%'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: 228,
        height: 228,
        borderRadius: 44,
        background: '#0E2240',
        border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
        boxShadow: `0 0 ${16 + 26 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/t09_capacitor_uf.webp",
      alt: "",
      width: "156",
      height: "156",
      style: {
        width: 156,
        height: 156,
        display: 'block',
        borderRadius: 24,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)'
      }
    })), React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 52,
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    background: '#B91C1C',
    border: '1px solid #7F1D1D',
    boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
    font: "800 22px/1.1 'Barlow Semi Condensed',sans-serif",
    letterSpacing: '.04em',
    whiteSpace: 'nowrap',
    transform: `scale(${selo})`
  }
}, "\u2715 RETORNO DE GRA\xC7A")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 360,
        right: 36,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        whiteSpace: 'normal'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.16,
        letterSpacing: '-.005em',
        textWrap: 'pretty'
      }
    }, "Pegar aparelho j\xE1 fu\xE7ado por outro?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.12,
        whiteSpace: 'nowrap'
      }
    }, grifo('Grave Rede, Sensor e Capacitor', l1), grifo('antes de encostar a chave.', l2))));
  }
  const SEG = {
    0: 'ABCDEF',
    1: 'BC',
    2: 'ABGED',
    3: 'ABGCD',
    4: 'FGBC',
    5: 'AFGCD',
    6: 'AFGECD',
    7: 'ABC',
    8: 'ABCDEFG',
    9: 'ABCDFG'
  };
  const f2 = n => String(+(+n).toFixed(2));
  function segPts(s, x, y, w, h, t) {
    const g = t * 0.14,
      x1 = x + t / 2 + g,
      x2 = x + w - t / 2 - g,
      m = y + h / 2;
    const H = cy => [[x1, cy], [x1 + t / 2, cy - t / 2], [x2 - t / 2, cy - t / 2], [x2, cy], [x2 - t / 2, cy + t / 2], [x1 + t / 2, cy + t / 2]];
    const V = (cx, y1, y2) => [[cx, y1], [cx + t / 2, y1 + t / 2], [cx + t / 2, y2 - t / 2], [cx, y2], [cx - t / 2, y2 - t / 2], [cx - t / 2, y1 + t / 2]];
    return {
      A: H(y + t / 2),
      G: H(m),
      D: H(y + h - t / 2),
      F: V(x + t / 2, y + t / 2 + g, m - g),
      B: V(x + w - t / 2, y + t / 2 + g, m - g),
      E: V(x + t / 2, m + g, y + h - t / 2 - g),
      C: V(x + w - t / 2, m + g, y + h - t / 2 - g)
    }[s];
  }
  const poly = p => 'M' + p.map(q => f2(q[0]) + ' ' + f2(q[1])).join('L') + 'Z';
  function digitos(str) {
    const xr = 89.5,
      y = 25,
      w = 10.5,
      h = 24,
      t = 2.8,
      gap = 3,
      dgap = 7;
    const ds = str.replace('.', ''),
      n = ds.length,
      dot = str.indexOf('.') - 1,
      ex = dot >= 0 ? dgap - gap : 0,
      x0 = xr - (n * w + (n - 1) * gap + ex) - 0.0875 * h,
      dt = Math.max(3, t * 1.15);
    let ghost = '',
      lit = '';
    for (let i = 0; i < n; i++) {
      const x = x0 + i * (w + gap) + (i > dot ? ex : 0);
      'ABCDEFG'.split('').forEach(sg => {
        const p = poly(segPts(sg, x, y, w, h, t));
        ghost += p;
        if (SEG[ds[i]].includes(sg)) lit += p;
      });
      if (i === dot) lit += 'M' + f2(x + w + dgap / 2 - dt / 2) + ' ' + f2(y + h - dt) + 'h' + f2(dt) + 'v' + f2(dt) + 'h-' + f2(dt) + 'Z';
    }
    return {
      ghost,
      lit,
      tx: f2(0.0875 * (y + h))
    };
  }
  function Multimetro({
    leitura,
    h = 160,
    pilula = '20k'
  }) {
    const d = digitos(leitura);
    const P = (a, r) => [60 + r * Math.sin(a * Math.PI / 180), 105 - r * Math.cos(a * Math.PI / 180)];
    const arco = (a1, a2, r, c) => {
      const p = P(a1, r),
        q = P(a2, r);
      return React.createElement("path", {
        d: `M${f2(p[0])} ${f2(p[1])}A${r} ${r} 0 0 1 ${f2(q[0])} ${f2(q[1])}`,
        fill: "none",
        stroke: c,
        strokeWidth: "1.3",
        strokeLinecap: "round"
      });
    };
    const sel = P(216, 26.6);
    const larga = pilula.length > 3;
    return React.createElement("svg", {
      viewBox: "0 0 120 190",
      height: h,
      width: h * 120 / 190,
      style: {
        display: 'block',
        flex: 'none',
        overflow: 'visible'
      }
    }, React.createElement("defs", null, React.createElement("linearGradient", {
      id: "mmY",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#F2B705"
    }), React.createElement("stop", {
      offset: ".1",
      stopColor: "#FFD703"
    }), React.createElement("stop", {
      offset: ".36",
      stopColor: "#FFE74A"
    }), React.createElement("stop", {
      offset: ".68",
      stopColor: "#FFD703"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#F2B705"
    })), React.createElement("linearGradient", {
      id: "mmF",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#2E333B"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#23272E"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#15181C"
    })), React.createElement("radialGradient", {
      id: "mmL",
      cx: ".5",
      cy: ".5",
      r: ".78"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#BAE6FD"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#6C9BF2"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#2563EB"
    })), React.createElement("radialGradient", {
      id: "mmK",
      cx: ".38",
      cy: ".28",
      r: ".85"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#5A636E"
    }), React.createElement("stop", {
      offset: ".5",
      stopColor: "#2E333B"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#15181C"
    }))), React.createElement("rect", {
      x: "11",
      y: "5.5",
      width: "102",
      height: "176",
      rx: "16",
      fill: "#3F3210",
      opacity: ".3"
    }), React.createElement("rect", {
      x: "9",
      y: "2",
      width: "102",
      height: "176",
      rx: "16",
      fill: "url(#mmY)",
      stroke: "#B98708",
      strokeWidth: "1.2"
    }), React.createElement("rect", {
      x: "14.4",
      y: "7.4",
      width: "91.2",
      height: "165.2",
      rx: "10.4",
      fill: "#B98708",
      opacity: ".6"
    }), React.createElement("rect", {
      x: "16",
      y: "9",
      width: "88",
      height: "162",
      rx: "9",
      fill: "url(#mmF)",
      stroke: "#15181C",
      strokeWidth: "1.2"
    }), React.createElement("rect", {
      x: "22",
      y: "15",
      width: "76",
      height: "44",
      rx: "6",
      fill: "#15181C",
      stroke: "#4A515C",
      strokeWidth: ".8"
    }), React.createElement("rect", {
      x: "27",
      y: "19.5",
      width: "66",
      height: "35",
      rx: "1.5",
      fill: "url(#mmL)"
    }), React.createElement("g", {
      transform: `translate(${d.tx} 0) skewX(-5)`
    }, React.createElement("path", {
      d: d.ghost,
      fill: "#0C2747",
      opacity: ".07"
    }), React.createElement("path", {
      d: d.lit,
      fill: "#0C2747"
    })), React.createElement("rect", {
      x: "22",
      y: "62",
      width: "17",
      height: "10",
      rx: "5",
      fill: "#4A515C",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("circle", {
      cx: "92.5",
      cy: "67",
      r: "5.5",
      fill: "url(#mmK)",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("circle", {
      cx: "60",
      cy: "105",
      r: "24.5",
      fill: "#000000",
      opacity: ".6"
    }), arco(-9, 9, 29, '#D43A3A'), arco(14, 40, 29, '#F7F8FA'), arco(50, 130, 29, '#4AF08A'), arco(140, 148, 29, '#F7F8FA'), arco(157, 167, 29, '#D43A3A'), arco(176, 256, 29, '#4AF08A'), arco(266, 346, 29, '#F7F8FA'), React.createElement("circle", {
      cx: f2(sel[0]),
      cy: f2(sel[1]),
      r: "1.9",
      fill: "#4AF08A"
    }), React.createElement("rect", {
      x: larga ? 13 : 19.5,
      y: "131.5",
      width: larga ? 27 : 20,
      height: "11.5",
      rx: "4",
      fill: "#06140C",
      stroke: "#4AF08A",
      strokeWidth: "1"
    }), React.createElement("text", {
      x: larga ? 26.5 : 29.5,
      y: larga ? 140.2 : 141.1,
      textAnchor: "middle",
      fontFamily: "Barlow Semi Condensed,sans-serif",
      fontWeight: "700",
      fontSize: larga ? 8.5 : 11,
      fill: "#4AF08A",
      textLength: larga ? 22 : undefined,
      lengthAdjust: "spacingAndGlyphs"
    }, pilula), React.createElement("circle", {
      cx: "60",
      cy: "105",
      r: "22",
      fill: "url(#mmK)",
      stroke: "#15181C",
      strokeWidth: "1"
    }), React.createElement("g", {
      transform: "rotate(216 60 105)"
    }, React.createElement("path", {
      d: "M56 87.5Q60 84.2 64 87.5L66.4 122.5Q60 126.6 53.6 122.5Z",
      fill: "#4A515C",
      stroke: "#15181C",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), React.createElement("rect", {
      x: "59",
      y: "86.6",
      width: "2",
      height: "9.5",
      rx: "1",
      fill: "#FFFFFF"
    })), React.createElement("rect", {
      x: "21",
      y: "150",
      width: "78",
      height: "18",
      rx: "5",
      fill: "#000000",
      opacity: ".3"
    }), [38, 60, 82].map(x => React.createElement("g", {
      key: x
    }, React.createElement("circle", {
      cx: x,
      cy: "159",
      r: "6",
      fill: "#8C95A1"
    }), React.createElement("circle", {
      cx: x,
      cy: "159",
      r: "4.5",
      fill: "#15181C"
    }))), React.createElement("rect", {
      x: "58.1",
      y: "166",
      width: "3.8",
      height: "22",
      fill: "#15181C"
    }), React.createElement("rect", {
      x: "55.2",
      y: "152",
      width: "9.6",
      height: "17",
      rx: "3.6",
      fill: "#2E333B",
      stroke: "#5A636E",
      strokeWidth: ".9"
    }), React.createElement("rect", {
      x: "80.1",
      y: "166",
      width: "3.8",
      height: "22",
      fill: "#B91C1C"
    }), React.createElement("rect", {
      x: "77.2",
      y: "152",
      width: "9.6",
      height: "17",
      rx: "3.6",
      fill: "#D43A3A",
      stroke: "#7F1D1D",
      strokeWidth: ".9"
    }));
  }
  const ROTL = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.1em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const LIN = {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#1E293B'
  };
  const SELO = {
    0: {
      t: '⚠ TRAVA 0/3',
      c: '#78350F',
      bg: '#FEF3C7',
      bd: '#B45309'
    },
    1: {
      t: '⚠ TRAVA 1/3',
      c: '#78350F',
      bg: '#FEF3C7',
      bd: '#B45309'
    },
    2: {
      t: '⚠ TRAVA 2/3',
      c: '#78350F',
      bg: '#FEF3C7',
      bd: '#B45309'
    },
    ok: {
      t: '✓ TRAVA LIBERADA',
      c: '#14532D',
      bg: '#DCFCE7',
      bd: '#15803D'
    },
    fora: {
      t: '✕ FORA DA FAIXA',
      c: '#7F1D1D',
      bg: '#FEE2E2',
      bd: '#B91C1C'
    }
  };
  function BotaoFora({
    r,
    d = 0,
    s = 1,
    h = 40
  }) {
    return React.createElement("div", {
      ref: r,
      style: {
        ...ST.S28,
        position: 'relative',
        minHeight: h,
        height: h,
        lineHeight: 1,
        transform: `scale(${s})`
      }
    }, d > 0.001 && React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        inset: -1,
        borderRadius: 10,
        background: 'radial-gradient(140% 130% at 50% -10%,#D43A3A 0%,#C42B2B 45%,#A61919 100%)',
        border: '1px solid #7F1D1D',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,.3),inset 0 -2px 0 #7F1D1D',
        opacity: d
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, React.createElement(Ic, {
      n: "fechar",
      s: 14,
      c: "#FFFFFF",
      w: 2.8
    }), "FORA DA FAIXA"));
  }
  function FichaCapacitor({
    A,
    lcd,
    anel,
    d,
    s
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        position: 'absolute',
        left: 16,
        top: 156,
        width: 368,
        height: 268,
        overflow: 'hidden',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(Tarja, {
      cheia: true
    }, "DESENERGIZADO E DESCARREGADO")), React.createElement("b", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 1.2,
        color: '#0C2747'
      }
    }, "Capacitor \xB15%")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement("span", {
      style: ROTL
    }, "ESCALA"), React.createElement(Escala, null, "\xB5F")), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("span", {
      style: ROTL
    }, "ONDE MEDIR"), React.createElement("div", {
      style: LIN
    }, "Capacitor fora do circuito")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        boxShadow: anel,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("span", {
      style: {
        ...ROTL,
        color: '#14532D'
      }
    }, "\u2713 ESPERADO"), React.createElement("div", {
      style: {
        ...LIN,
        gap: 6
      }
    }, React.createElement(Esperado, null, "ETIQUETA \xB15%"), "45 \xB5F"))), React.createElement(Multimetro, {
      leitura: lcd,
      h: 139,
      pilula: "\xB5F"
    })), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
      }
    }, React.createElement(BotaoNormal, {
      h: 40
    }), React.createElement(BotaoFora, {
      r: A.ref('fora'),
      d: d,
      s: s
    })));
  }
  function Garantia() {
    const k = (t, sel) => React.createElement("div", {
      style: {
        ...(sel ? ST.S50 : ST.S28),
        minHeight: 38,
        height: 38,
        padding: '0 12px',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.02em'
      }
    }, t);
    return React.createElement("div", {
      style: {
        ...CARD,
        flex: 'none',
        height: 50,
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTL,
        flex: 1
      }
    }, "GARANTIA"), k('Sem garantia', true), k('7 dias'), k('30 dias'));
  }
  function FichaCurta({
    energ,
    tarja,
    escala,
    titulo,
    esq,
    dir,
    r,
    g,
    s
  }) {
    return React.createElement("div", {
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
        padding: '5px 10px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 104px',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Tarja, {
      energ: energ
    }, tarja), React.createElement(Escala, {
      h: 20,
      fs: 11
    }, escala)), React.createElement("b", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.15,
        color: '#0C2747',
        overflow: 'hidden',
        textOverflow: 'clip'
      }
    }, titulo), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: '100%',
        height: 22,
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        borderRadius: 6,
        fontSize: 12.5,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1E293B',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        minWidth: 0
      }
    }, esq), React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flex: 'none'
      }
    }, dir))), React.createElement(BotaoNormal, {
      r: r,
      g: g,
      s: s,
      h: 48,
      w: 104
    }));
  }
  const ROTD = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.16em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const CX = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1.5px solid #A3ACB9',
    borderRadius: 10
  };
  function Laudo({
    T,
    L
  }) {
    const o = MOTION.enter(T, L, L + 0.45);
    const fx = MOTION.enter(T, L + 1.05, L + 1.5);
    const cel = [['REDE 198–242 V', 'NORMAL'], ['SENSOR NTC', 'NORMAL'], ['CAPACITOR', '21,8 µF']];
    return React.createElement("div", {
      "data-screen-label": "Loop 05 \xB7 Laudo N\xBA 1086",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        background: `rgba(8,27,51,${0.92 * o})`,
        fontFamily: DOC,
        color: '#0C2747',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 12,
        top: 8,
        width: 776,
        height: 384,
        padding: 12,
        background: '#FFFFFF',
        borderRadius: 12,
        boxShadow: '0 16px 36px rgba(8,27,51,.45)',
        opacity: o,
        transform: `translateX(${(1 - o) * 28}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 62,
        padding: '0 20px',
        borderRadius: 12,
        background: '#0F2847',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#DCE7F5'
      }
    }, "PRESTADORA DO SERVI\xC7O"), React.createElement("b", {
      style: {
        fontSize: 20,
        lineHeight: 1.15
      }
    }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#BFD7F2'
      }
    }, "Belo Horizonte \xB7 Chave Pix ", React.createElement("b", {
      style: {
        color: '#FFFFFF'
      }
    }, "pix@climasilvaefilhos.com.br"))), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.2em',
        lineHeight: 1.2
      }
    }, "LAUDO DE APROVA\xC7\xC3O"), React.createElement("b", {
      style: {
        font: `700 27px/1.25 ${MONO}`
      }
    }, "N\xBA 1086"))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        height: 40,
        display: 'grid',
        gridTemplateColumns: '180px minmax(0,1fr)',
        alignItems: 'stretch'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "CLIENTE"), React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2
      }
    }, "\xD3tica Vis\xE3o")), React.createElement("div", { style: { boxSizing: 'border-box', minWidth: 0, padding: '0 8px 0 16px', borderLeft: '1px solid #CBD2DB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 } }, React.createElement("div", { style: { minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 } }, React.createElement("span", { style: ROTD }, "EQUIPAMENTO"), React.createElement("b", { style: { font: `700 13.5px/1.2 ${MONO}`, whiteSpace: 'nowrap' } }, "Fujitsu \xB7 36.000 BTU/h \xB7 R-410A")), React.createElement("span", { style: { boxSizing: 'border-box', flex: 'none', height: 26, padding: '0 9px', display: 'flex', alignItems: 'center', borderRadius: 6, background: '#FEF3C7', borderLeft: '4px solid #B45309', color: '#78350F', fontSize: 11.5, fontWeight: 800, lineHeight: 1, whiteSpace: 'nowrap' } }, "Sem garantia \xB7 estado inicial gravado"))), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '392px minmax(0,1fr)',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        flex: 'none'
      }
    }, "LEITURAS AFERIDAS NA BANCADA"), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '8px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#1E293B',
        letterSpacing: '.08em'
      }
    }, "TRAVA 30S"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 24,
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        borderRadius: 8,
        background: '#FEE2E2',
        border: '1.5px solid #B91C1C',
        color: '#7F1D1D',
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '.05em'
      }
    }, React.createElement(Ic, {
      n: "fechar",
      s: 12,
      c: "#B91C1C",
      w: 3
    }), "FORA DA FAIXA")), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("b", {
      style: {
        fontSize: 18,
        lineHeight: 1.2
      }
    }, "Capacitor 21,8 \xB5F"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#1E293B'
      }
    }, "Etiqueta 45 \xB5F \xB15%")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 6
      }
    }, cel.map(([l, v]) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        minWidth: 0,
        minHeight: 0,
        padding: '0 8px',
        borderRadius: 8,
        background: '#F5F3EC',
        border: '1px solid #D6D1C4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '.1em',
        lineHeight: 1.2,
        color: '#334155'
      }
    }, l), React.createElement("b", {
      style: {
        font: `700 14px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, v))))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        padding: '6px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2,
        whiteSpace: 'normal',
        textWrap: 'balance'
      }
    }, "Substitui\xE7\xE3o de Capacitor + Revis\xE3o de Partida"), React.createElement("b", {
      style: {
        flex: 'none',
        font: `700 15px/1.2 ${MONO}`
      }
    }, "R$ 340,00")), React.createElement("div", {
  style: {
    background: '#F0FDF4',
    borderLeft: '4px solid #15803D',
    borderRadius: 6,
    padding: '6px 9px',
    color: '#14532D',
    fontSize: 11.5,
    lineHeight: 1.25,
    whiteSpace: 'normal',
    textWrap: 'pretty',
    overflow: 'hidden'
  }
}, React.createElement("b", {
  style: {
    fontWeight: 800
  }
}, "Preven\xE7\xE3o:"), " Evita sobrecarga na partida do compressor (reparo evitado de R$ 1.200 a R$ 1.950)."))), React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 16px',
        borderRadius: 12,
        background: 'linear-gradient(180deg,#F3ECDA 0%,#EFE6CF 100%)',
        border: '2px solid #A6945F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        fontSize: 11,
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("b", {
      style: {
        font: `700 32px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, "R$ 340,00")), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '6px 9px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        overflow: 'hidden'
      }
    }, React.createElement("svg", {
      width: QR.n * 3,
      height: QR.n * 3,
      viewBox: `0 0 ${QR.n} ${QR.n}`,
      shapeRendering: "crispEdges",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, React.createElement("path", {
      d: QR.d,
      fill: "#000000"
    })), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        height: QR.n * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'normal'
      }
    }, React.createElement("span", {
      style: {
        ...ROTD
      }
    }, "PIX \xB7 VALOR EXATO DO LAUDO"), React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`,
        whiteSpace: 'nowrap'
      }
    }, "R$ 340,00"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.25,
        textWrap: 'pretty'
      }
    }, "Para autorizar o servi\xE7o, responda APROVADO nesta mensagem.")))))), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 10,
        height: 84,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'linear-gradient(90deg,#081B33 0%,#0C2747 100%)',
        border: '2px solid #22C55E',
        borderRadius: 14,
        boxShadow: '0 -6px 24px rgba(8,27,51,.45)',
        opacity: fx,
        transform: `translateY(${(1 - fx) * 24}px)`,
        fontFamily: BARLOW
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 60,
        padding: '0 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        borderRadius: 10,
        background: '#15803D',
        border: '2px solid #4ADE80',
        color: '#FFFFFF',
        font: `700 18px/1.2 ${MONO}`,
        letterSpacing: '-.01em'
      }
    }, React.createElement("span", null, "\u2713 ZERO RETORNO"), React.createElement("span", null, "\xB7 PIX R$ 340")), React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#FFFFFF'
      }
    }, React.createElement("span", null, "Defeito velho provado antes."), React.createElement("span", {
      style: {
        padding: '1px 6px 2px',
        margin: '0 -6px',
        borderRadius: 4,
        background: '#FACC15',
        color: '#0C2747'
      }
    }, "Ningu\xE9m joga bucha nas suas costas."))));
  }
  function Piece({
    seloReal = true
  }) {
    const {
      T,
      CUES
    } = useComposition();
    const a = CUES.Acao,
      L = CUES.LaudoPix;
    const root = React.useRef(null);
    const A = useAnchors(root);
    const V = 0.45;
    const tR = a + 0.8,
      tN = a + 1.3;
    const r0 = a + 0.7,
      r1 = a + 1.35,
      r2 = a + 2.0;
    const lcdV = T < r1 ? lerp(48.2, 31.4, MOTION.enter(T, r0, r1)) : lerp(31.4, 21.8, MOTION.enter(T, r1, r2));
    const lcd = lcdV.toFixed(1).padStart(4, '0');
    const tF = a + 2.35,
      tS = a + 2.5,
      tM = a + 4.95,
      tG = a + 6.15;
    const fade0 = L + 4.25,
      fade1 = L + 4.7;
    const on = t => T >= t + 0.04;
    const acende = t => MOTION.enter(T, t, t + 0.3);
    const pop = t => 1 + 0.04 * Math.sin(Math.PI * p01(T, t, t + 0.35));
    const anelO = MOTION.enter(T, r0, r0 + 0.2) * (1 - MOTION.enter(T, tF + 0.6, tF + 1.0));
    const brilho = 0.75 + 0.25 * MOTION.pulse(T, 0.7);
    const anel = anelO < 0.001 ? 'none' : T < r2 ? `0 0 0 3px rgba(255,176,32,${anelO * brilho})` : `0 0 0 3px rgba(185,28,28,${anelO})`;
    const est = T >= tS ? seloReal ? 'fora' : 'ok' : T >= tN ? 2 : T >= tR ? 1 : 0;
    const tSelo = T >= tS ? tS : T >= tN ? tN : T >= tR ? tR : -9;
    const selo = SELO[est],
      sPop = 1 + 0.1 * Math.sin(Math.PI * p01(T, tSelo, tSelo + 0.35));
    const sOn = T >= tM + 0.1 ? {
      n: 1,
      o: 1,
      s: 1 + 0.25 * Math.sin(Math.PI * p01(T, tM + 0.1, tM + 0.5))
    } : null;
    const sai = MOTION.enter(T, a, a + V);
    const ganchoO = T < a + V ? 1 - sai : T >= fade0 ? MOTION.enter(T, fade0, fade1) : 0;
    const ganchoX = T < a + V ? -28 * sai : 0;
    const ganchoT = T < a + V ? T : 0;
    const telaX = 24 * (1 - sai);
    const maoO = MOTION.enter(T, a + 1.5, a + 1.8) * (1 - MOTION.enter(T, tG + 0.3, L));
    return React.createElement("div", {
      style: {
        position: 'relative',
        width: 800,
        height: 500,
        overflow: 'hidden',
        ...BG
      }
    }, React.createElement("div", {
      ref: root,
      "data-screen-label": `Loop 05 · ${Math.floor(T)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ...BG,
        color: '#0C2747',
        fontFamily: BARLOW,
        transform: `translateX(${telaX}px)`
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 8,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("div", {
      style: ST.S21
    }, "\u2039"), React.createElement("div", {
      style: {
        ...ST.S14,
        lineHeight: 1.2
      }
    }, "AFERIR VIVO"), React.createElement(Faixa, null), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 13,
        lineHeight: 1.1
      }
    }, "FUJITSU")), React.createElement(Abas, null), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 120,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: '.12em',
        lineHeight: 1.2,
        color: '#0C2747'
      }
    }, "TRAVA DE 30 SEGUNDOS"), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 30,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        background: selo.bg,
        border: `1.5px solid ${selo.bd}`,
        color: selo.c,
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: '.06em',
        lineHeight: 1,
        transform: `scale(${sPop})`,
        transformOrigin: '100% 50%'
      }
    }, selo.t)), React.createElement(FichaCapacitor, {
      A: A,
      lcd: lcd,
      anel: anel,
      d: MOTION.enter(T, tF + 0.05, tF + 0.17),
      s: MOTION.press(T, tF)
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 396,
        top: 156,
        width: 388,
        height: 268,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement(FichaCurta, {
      energ: true,
      tarja: "ENERGIZADO",
      escala: "V~",
      titulo: "Rede 198\u2013242 V",
      g: acende(tR),
      s: pop(tR),
      esq: React.createElement(React.Fragment, null, "nos bornes", React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "L"), "e", React.createElement(Borne, {
        h: 18,
        fs: 11
      }, "N"), "\xB7"),
      dir: React.createElement(Esperado, {
        h: 18,
        fs: 11
      }, "198\u2013242 V")
    }), React.createElement(FichaCurta, {
      tarja: "DESLIGADO",
      escala: "k\u03A9",
      titulo: "Sensor NTC na curva",
      g: acende(tN),
      s: pop(tN),
      esq: React.createElement(React.Fragment, null, "Term\xF4metro no mesmo ponto"),
      dir: React.createElement(Esperado, {
        h: 18,
        fs: 11
      }, "CURVA REAL")
    }), React.createElement(Garantia, null), React.createElement("div", {
      ref: A.ref('mandar'),
      style: {
        ...ST.S86,
        flex: 'none',
        minHeight: 44,
        height: 44,
        fontSize: 16,
        lineHeight: 1,
        letterSpacing: '.1em',
        transform: `scale(${MOTION.press(T, tM)})`
      }
    }, "+ MANDAR PARA O LAUDO")), React.createElement(Dock, {
      ativa: on(tG) ? 3 : 1,
      selo: sOn,
      rg: A.ref('ganhos'),
      sg: MOTION.press(T, tG)
    }), React.createElement(Hand, {
      T: T,
      A: A,
      o: maoO,
      start: {
        x: 300,
        y: 330
      },
      taps: [tF, tM, tG],
      moves: [{
        s: a + 1.6,
        e: tF - 0.04,
        to: 'fora',
        dy: -10
      }, {
        s: tF + 1.3,
        e: tM - 0.04,
        to: 'mandar',
        dx: 40,
        dy: -17
      }, {
        s: tM + 0.3,
        e: tG - 0.05,
        to: 'ganhos',
        dy: -12
      }]
    }), T >= L && React.createElement(Laudo, {
      T: T,
      L: L
    })), ganchoO > 0.001 && React.createElement(Gancho, {
      t: ganchoT,
      o: ganchoO,
      x: ganchoX
    }));
  }
  window.GPLoops.l05 = Piece;
})();
(function () {
  const useComposition = () => React.useContext(window.GPLoopCtx);
  const css = s => {
    const o = {};
    s.split(';').forEach(d => {
      const i = d.indexOf(':');
      if (i < 0) return;
      const k = d.slice(0, i).trim();
      if (!k) return;
      o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
    });
    return o;
  };
  const ST = {
    S10: css("box-sizing:border-box;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;line-height:1;letter-spacing:-.02em;white-space:nowrap"),
    S14: css("flex:1;font-size:20px;font-weight:700;letter-spacing:.14em;white-space:nowrap"),
    S21: css("box-sizing:border-box;flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px"),
    S22: css("box-sizing:border-box;flex:none;font:700 12px/1 'JetBrains Mono',monospace;color:#0C2747;padding:8px 8px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:6px"),
    S28: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S37: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S50: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F2FAFC 45%,#DDF3F9 100%);border:3px solid #FFB020;box-shadow:inset 0 0 0 1px #081B33;color:#0C2747;border-radius:10px"),
    S86: css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#1A8642 0%,#1A8642 45%,#126B34 100%);border:1px solid #14532D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #14532D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em"),
    S23: css("min-height:56px;display:flex;align-items:center;gap:8px;padding:4px 12px 4px 8px;background:radial-gradient(140% 130% at 50% -10%,#FFFFFF 0%,#F3F5F7 40%,#E8EBEF 75%,#D5DBE3 100%);border:1px solid #5A6A7E;box-shadow:inset 0 1px 1px #FFFFFF,inset 0 -2px 0 #5A6A7E;color:#0C2747;border-radius:10px"),
    S53: css("flex:none;position:relative;width:96px;height:44px;border-radius:10px;background:#CBD5E1;border:1px solid #1C4268;box-shadow:inset 0 2px 4px rgba(9,30,66,.3),0 1px 0 rgba(255,255,255,.6);display:grid;grid-template-columns:1fr 1fr"),
    S56: css("height:44px;display:flex;align-items:center;justify-content:center;font:700 17px/1 'JetBrains Mono',monospace;color:#0C2747;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px"),
    S91: css("position:absolute;top:2px;bottom:3px;width:45px;left:47px;border-radius:8px;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;box-shadow:inset 0 1px 1px rgba(190,235,255,.55),inset 0 -2px 0 #081B33"),
    S94: css("position:relative;overflow:hidden;border-radius:12px;padding:16px 16px 16px;display:flex;flex-direction:column;gap:12px;font-family:'Barlow Semi Condensed',sans-serif;background-image:linear-gradient(115deg,#F7EED3 0%,#DCC998 26%,#F5EACB 48%,#CDB67E 74%,#EFE2BC 100%);border:1px solid #8A7440;box-shadow:inset 0 1px 0 rgba(255,255,255,.8),inset 0 -2px 0 rgba(138,116,64,.45),0 3px 8px rgba(9,30,66,.25)"),
    S95: css("position:absolute;left:-40px;top:-60px;width:120px;height:320px;transform:rotate(28deg);background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.45),rgba(255,255,255,0))"),
    S98: css("height:32px;padding:0 8px;border-radius:999px;display:flex;align-items:center;font-size:12px;font-weight:700;line-height:1;letter-spacing:.08em;white-space:nowrap;background:#0C2747;color:#F7EED3"),
    S102: css("background-image:repeating-linear-gradient(135deg,#0C2747 0,#0C2747 2px,#EFE2BC 2px,#EFE2BC 4px)"),
    S103: css("display:flex;justify-content:space-between;font:700 12px/1 'JetBrains Mono',monospace;color:#3F3210"),
    S121: css("position:absolute;top:3px;left:3px;width:34px;height:36px;background:radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%);border:1px solid #081B33;border-radius:6px"),
    S161: css("flex:none;padding:16px;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #A6945F;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:12px;display:flex;flex-direction:column;justify-content:center;gap:8px"),
    S172: css("flex:none;width:76px;height:44px;position:relative;background:#CBD5E1;border:1px solid #1C4268;box-shadow:inset 0 2px 4px rgba(9,30,66,.3);border-radius:8px"),
    S137: css("box-sizing:border-box;flex:none;display:grid;grid-template-columns:1fr 1.25fr 1fr;background:linear-gradient(180deg,#F1EAD8 0%,#FFFEFA 34%,#FAF5E8 100%);border:1.5px solid #7A6A3A;box-shadow:inset 0 2px 6px rgba(63,50,16,.24),0 1px 0 rgba(255,255,255,.7);border-radius:8px")
  };
  const BG = {
    backgroundColor: '#D6D2C9',
    backgroundImage: 'linear-gradient(180deg,#D6D2C9 0%,#DFDCD5 14%,#CCC8BF 100%)'
  };
  const CARD = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #94A3B8',
    boxShadow: '0 1px 3px rgba(9,30,66,.14)',
    borderRadius: 12
  };
  const MONO = "'JetBrains Mono',monospace";
  const BARLOW = "'Barlow Semi Condensed',sans-serif";
  const DOC = "Arial,'Liberation Sans',Helvetica,sans-serif";
  const QR = {"payload":"00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406690.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10936304E038","n":53,"d":"M0 0h7v1h-7zM8 0h1v1h-1zM10 0h4v1h-4zM16 0h5v1h-5zM24 0h1v1h-1zM30 0h1v1h-1zM32 0h1v1h-1zM35 0h1v1h-1zM39 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h3v1h-3zM13 1h2v1h-2zM18 1h2v1h-2zM25 1h3v1h-3zM30 1h1v1h-1zM32 1h3v1h-3zM36 1h2v1h-2zM41 1h3v1h-3zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM14 2h3v1h-3zM20 2h1v1h-1zM22 2h1v1h-1zM25 2h1v1h-1zM31 2h2v1h-2zM34 2h1v1h-1zM39 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM8 3h1v1h-1zM12 3h1v1h-1zM14 3h1v1h-1zM18 3h2v1h-2zM23 3h1v1h-1zM25 3h1v1h-1zM28 3h2v1h-2zM34 3h1v1h-1zM36 3h1v1h-1zM39 3h1v1h-1zM42 3h1v1h-1zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM10 4h1v1h-1zM12 4h2v1h-2zM17 4h2v1h-2zM20 4h1v1h-1zM22 4h7v1h-7zM33 4h1v1h-1zM35 4h1v1h-1zM37 4h2v1h-2zM40 4h1v1h-1zM42 4h1v1h-1zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM12 5h2v1h-2zM15 5h2v1h-2zM18 5h1v1h-1zM21 5h2v1h-2zM24 5h1v1h-1zM28 5h1v1h-1zM31 5h1v1h-1zM36 5h7v1h-7zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM8 7h5v1h-5zM14 7h2v1h-2zM21 7h1v1h-1zM23 7h2v1h-2zM28 7h2v1h-2zM32 7h1v1h-1zM35 7h1v1h-1zM37 7h1v1h-1zM39 7h2v1h-2zM44 7h1v1h-1zM0 8h1v1h-1zM2 8h2v1h-2zM5 8h3v1h-3zM10 8h1v1h-1zM12 8h1v1h-1zM16 8h1v1h-1zM18 8h3v1h-3zM22 8h7v1h-7zM30 8h1v1h-1zM32 8h1v1h-1zM35 8h1v1h-1zM37 8h1v1h-1zM40 8h2v1h-2zM43 8h1v1h-1zM46 8h1v1h-1zM49 8h1v1h-1zM51 8h2v1h-2zM0 9h1v1h-1zM4 9h2v1h-2zM7 9h1v1h-1zM9 9h1v1h-1zM14 9h1v1h-1zM16 9h1v1h-1zM20 9h1v1h-1zM22 9h1v1h-1zM24 9h1v1h-1zM29 9h2v1h-2zM32 9h2v1h-2zM35 9h3v1h-3zM39 9h1v1h-1zM42 9h2v1h-2zM45 9h1v1h-1zM48 9h1v1h-1zM52 9h1v1h-1zM2 10h2v1h-2zM5 10h3v1h-3zM9 10h1v1h-1zM11 10h2v1h-2zM14 10h2v1h-2zM20 10h1v1h-1zM23 10h1v1h-1zM26 10h2v1h-2zM29 10h1v1h-1zM31 10h1v1h-1zM33 10h2v1h-2zM42 10h6v1h-6zM49 10h1v1h-1zM0 11h2v1h-2zM3 11h2v1h-2zM7 11h1v1h-1zM11 11h4v1h-4zM16 11h1v1h-1zM18 11h2v1h-2zM21 11h1v1h-1zM23 11h1v1h-1zM25 11h1v1h-1zM27 11h2v1h-2zM33 11h1v1h-1zM35 11h1v1h-1zM41 11h1v1h-1zM43 11h2v1h-2zM46 11h1v1h-1zM52 11h1v1h-1zM2 12h1v1h-1zM4 12h1v1h-1zM6 12h1v1h-1zM10 12h3v1h-3zM15 12h4v1h-4zM23 12h5v1h-5zM29 12h3v1h-3zM33 12h1v1h-1zM35 12h3v1h-3zM43 12h2v1h-2zM47 12h2v1h-2zM50 12h2v1h-2zM0 13h1v1h-1zM2 13h1v1h-1zM5 13h1v1h-1zM7 13h1v1h-1zM11 13h1v1h-1zM13 13h2v1h-2zM16 13h2v1h-2zM20 13h1v1h-1zM23 13h1v1h-1zM26 13h4v1h-4zM31 13h1v1h-1zM33 13h1v1h-1zM35 13h2v1h-2zM38 13h2v1h-2zM44 13h2v1h-2zM51 13h2v1h-2zM0 14h7v1h-7zM8 14h4v1h-4zM15 14h1v1h-1zM17 14h4v1h-4zM22 14h4v1h-4zM28 14h2v1h-2zM32 14h1v1h-1zM34 14h1v1h-1zM38 14h1v1h-1zM42 14h4v1h-4zM47 14h1v1h-1zM52 14h1v1h-1zM3 15h1v1h-1zM10 15h3v1h-3zM14 15h1v1h-1zM18 15h3v1h-3zM24 15h1v1h-1zM27 15h1v1h-1zM29 15h1v1h-1zM34 15h1v1h-1zM40 15h1v1h-1zM43 15h1v1h-1zM48 15h1v1h-1zM51 15h1v1h-1zM1 16h2v1h-2zM5 16h2v1h-2zM11 16h1v1h-1zM13 16h1v1h-1zM15 16h2v1h-2zM23 16h1v1h-1zM25 16h1v1h-1zM27 16h1v1h-1zM29 16h4v1h-4zM34 16h1v1h-1zM38 16h1v1h-1zM43 16h1v1h-1zM49 16h1v1h-1zM0 17h1v1h-1zM2 17h1v1h-1zM4 17h1v1h-1zM8 17h4v1h-4zM14 17h1v1h-1zM17 17h1v1h-1zM20 17h2v1h-2zM27 17h1v1h-1zM29 17h1v1h-1zM33 17h1v1h-1zM36 17h2v1h-2zM39 17h2v1h-2zM46 17h1v1h-1zM48 17h2v1h-2zM51 17h2v1h-2zM0 18h2v1h-2zM6 18h1v1h-1zM8 18h3v1h-3zM14 18h2v1h-2zM17 18h2v1h-2zM22 18h2v1h-2zM27 18h1v1h-1zM29 18h1v1h-1zM31 18h1v1h-1zM33 18h1v1h-1zM35 18h1v1h-1zM37 18h3v1h-3zM41 18h1v1h-1zM46 18h5v1h-5zM0 19h1v1h-1zM2 19h3v1h-3zM7 19h1v1h-1zM10 19h3v1h-3zM15 19h3v1h-3zM20 19h1v1h-1zM22 19h1v1h-1zM25 19h2v1h-2zM31 19h1v1h-1zM33 19h1v1h-1zM35 19h6v1h-6zM42 19h2v1h-2zM48 19h3v1h-3zM0 20h3v1h-3zM4 20h1v1h-1zM6 20h5v1h-5zM16 20h2v1h-2zM19 20h1v1h-1zM21 20h1v1h-1zM25 20h1v1h-1zM29 20h1v1h-1zM35 20h1v1h-1zM37 20h1v1h-1zM40 20h1v1h-1zM44 20h3v1h-3zM49 20h1v1h-1zM52 20h1v1h-1zM0 21h2v1h-2zM3 21h2v1h-2zM9 21h6v1h-6zM18 21h4v1h-4zM25 21h1v1h-1zM27 21h1v1h-1zM30 21h1v1h-1zM32 21h2v1h-2zM35 21h1v1h-1zM37 21h1v1h-1zM40 21h3v1h-3zM45 21h1v1h-1zM47 21h2v1h-2zM50 21h1v1h-1zM52 21h1v1h-1zM2 22h1v1h-1zM4 22h3v1h-3zM9 22h4v1h-4zM14 22h4v1h-4zM20 22h1v1h-1zM22 22h2v1h-2zM26 22h3v1h-3zM30 22h1v1h-1zM32 22h1v1h-1zM34 22h1v1h-1zM38 22h1v1h-1zM41 22h1v1h-1zM46 22h1v1h-1zM49 22h2v1h-2zM0 23h1v1h-1zM3 23h1v1h-1zM5 23h1v1h-1zM8 23h2v1h-2zM11 23h1v1h-1zM13 23h1v1h-1zM15 23h1v1h-1zM18 23h7v1h-7zM29 23h5v1h-5zM35 23h3v1h-3zM39 23h1v1h-1zM42 23h1v1h-1zM45 23h2v1h-2zM48 23h1v1h-1zM51 23h1v1h-1zM1 24h2v1h-2zM4 24h7v1h-7zM12 24h2v1h-2zM15 24h1v1h-1zM19 24h1v1h-1zM24 24h5v1h-5zM30 24h2v1h-2zM34 24h1v1h-1zM36 24h1v1h-1zM38 24h2v1h-2zM41 24h8v1h-8zM51 24h1v1h-1zM1 25h4v1h-4zM8 25h5v1h-5zM14 25h1v1h-1zM16 25h1v1h-1zM18 25h2v1h-2zM21 25h2v1h-2zM24 25h1v1h-1zM28 25h1v1h-1zM31 25h1v1h-1zM33 25h1v1h-1zM36 25h6v1h-6zM43 25h2v1h-2zM48 25h1v1h-1zM50 25h1v1h-1zM52 25h1v1h-1zM1 26h1v1h-1zM3 26h2v1h-2zM6 26h1v1h-1zM8 26h1v1h-1zM10 26h1v1h-1zM14 26h1v1h-1zM16 26h2v1h-2zM20 26h1v1h-1zM22 26h3v1h-3zM26 26h1v1h-1zM28 26h1v1h-1zM31 26h1v1h-1zM38 26h1v1h-1zM40 26h5v1h-5zM46 26h1v1h-1zM48 26h2v1h-2zM51 26h2v1h-2zM1 27h2v1h-2zM4 27h1v1h-1zM8 27h1v1h-1zM10 27h2v1h-2zM13 27h1v1h-1zM16 27h3v1h-3zM20 27h1v1h-1zM22 27h3v1h-3zM28 27h1v1h-1zM31 27h1v1h-1zM36 27h1v1h-1zM38 27h1v1h-1zM40 27h1v1h-1zM42 27h1v1h-1zM44 27h1v1h-1zM48 27h1v1h-1zM51 27h1v1h-1zM2 28h1v1h-1zM4 28h6v1h-6zM13 28h1v1h-1zM16 28h1v1h-1zM19 28h1v1h-1zM24 28h5v1h-5zM32 28h2v1h-2zM38 28h1v1h-1zM41 28h1v1h-1zM43 28h7v1h-7zM0 29h1v1h-1zM3 29h1v1h-1zM5 29h1v1h-1zM7 29h1v1h-1zM13 29h1v1h-1zM15 29h1v1h-1zM17 29h1v1h-1zM19 29h1v1h-1zM21 29h1v1h-1zM23 29h1v1h-1zM25 29h1v1h-1zM27 29h1v1h-1zM29 29h1v1h-1zM34 29h1v1h-1zM36 29h1v1h-1zM40 29h1v1h-1zM43 29h1v1h-1zM46 29h2v1h-2zM50 29h2v1h-2zM0 30h1v1h-1zM3 30h2v1h-2zM6 30h2v1h-2zM9 30h2v1h-2zM12 30h1v1h-1zM15 30h1v1h-1zM17 30h2v1h-2zM21 30h1v1h-1zM24 30h4v1h-4zM29 30h2v1h-2zM34 30h1v1h-1zM36 30h1v1h-1zM38 30h2v1h-2zM41 30h1v1h-1zM47 30h2v1h-2zM51 30h1v1h-1zM0 31h2v1h-2zM3 31h3v1h-3zM8 31h2v1h-2zM12 31h1v1h-1zM15 31h2v1h-2zM21 31h1v1h-1zM24 31h1v1h-1zM27 31h1v1h-1zM30 31h1v1h-1zM32 31h4v1h-4zM40 31h2v1h-2zM48 31h5v1h-5zM3 32h1v1h-1zM6 32h2v1h-2zM11 32h4v1h-4zM21 32h2v1h-2zM26 32h2v1h-2zM30 32h1v1h-1zM33 32h1v1h-1zM35 32h1v1h-1zM37 32h1v1h-1zM39 32h3v1h-3zM43 32h1v1h-1zM46 32h5v1h-5zM52 32h1v1h-1zM2 33h4v1h-4zM11 33h1v1h-1zM13 33h2v1h-2zM16 33h2v1h-2zM20 33h2v1h-2zM28 33h2v1h-2zM33 33h1v1h-1zM39 33h6v1h-6zM48 33h1v1h-1zM50 33h1v1h-1zM52 33h1v1h-1zM0 34h1v1h-1zM6 34h1v1h-1zM9 34h3v1h-3zM13 34h1v1h-1zM18 34h1v1h-1zM23 34h1v1h-1zM26 34h1v1h-1zM29 34h1v1h-1zM34 34h2v1h-2zM37 34h1v1h-1zM39 34h1v1h-1zM41 34h2v1h-2zM47 34h2v1h-2zM50 34h1v1h-1zM0 35h3v1h-3zM4 35h2v1h-2zM8 35h3v1h-3zM13 35h2v1h-2zM16 35h1v1h-1zM18 35h2v1h-2zM21 35h1v1h-1zM23 35h1v1h-1zM27 35h2v1h-2zM32 35h1v1h-1zM34 35h1v1h-1zM36 35h2v1h-2zM39 35h1v1h-1zM45 35h1v1h-1zM49 35h1v1h-1zM51 35h2v1h-2zM0 36h2v1h-2zM3 36h1v1h-1zM6 36h4v1h-4zM15 36h1v1h-1zM17 36h1v1h-1zM19 36h1v1h-1zM21 36h1v1h-1zM23 36h1v1h-1zM30 36h1v1h-1zM36 36h2v1h-2zM39 36h1v1h-1zM42 36h1v1h-1zM45 36h1v1h-1zM47 36h4v1h-4zM1 37h1v1h-1zM3 37h2v1h-2zM9 37h1v1h-1zM12 37h1v1h-1zM14 37h3v1h-3zM18 37h1v1h-1zM21 37h2v1h-2zM25 37h1v1h-1zM27 37h2v1h-2zM36 37h1v1h-1zM38 37h1v1h-1zM41 37h1v1h-1zM43 37h1v1h-1zM45 37h2v1h-2zM52 37h1v1h-1zM3 38h7v1h-7zM11 38h2v1h-2zM14 38h1v1h-1zM18 38h2v1h-2zM22 38h1v1h-1zM25 38h1v1h-1zM27 38h1v1h-1zM30 38h2v1h-2zM33 38h2v1h-2zM38 38h1v1h-1zM40 38h1v1h-1zM42 38h2v1h-2zM45 38h3v1h-3zM52 38h1v1h-1zM0 39h1v1h-1zM3 39h1v1h-1zM5 39h1v1h-1zM7 39h4v1h-4zM13 39h3v1h-3zM18 39h1v1h-1zM24 39h1v1h-1zM27 39h1v1h-1zM30 39h1v1h-1zM32 39h1v1h-1zM34 39h1v1h-1zM37 39h1v1h-1zM40 39h1v1h-1zM43 39h4v1h-4zM48 39h2v1h-2zM52 39h1v1h-1zM1 40h1v1h-1zM6 40h1v1h-1zM8 40h1v1h-1zM10 40h2v1h-2zM14 40h1v1h-1zM16 40h1v1h-1zM19 40h1v1h-1zM23 40h2v1h-2zM26 40h1v1h-1zM29 40h4v1h-4zM34 40h1v1h-1zM37 40h2v1h-2zM41 40h1v1h-1zM50 40h3v1h-3zM1 41h1v1h-1zM3 41h1v1h-1zM5 41h1v1h-1zM8 41h2v1h-2zM12 41h2v1h-2zM16 41h3v1h-3zM21 41h3v1h-3zM26 41h1v1h-1zM28 41h1v1h-1zM31 41h4v1h-4zM36 41h2v1h-2zM41 41h1v1h-1zM43 41h1v1h-1zM46 41h2v1h-2zM50 41h2v1h-2zM0 42h2v1h-2zM3 42h4v1h-4zM8 42h3v1h-3zM12 42h1v1h-1zM14 42h1v1h-1zM17 42h1v1h-1zM19 42h3v1h-3zM24 42h1v1h-1zM26 42h1v1h-1zM28 42h2v1h-2zM31 42h5v1h-5zM37 42h2v1h-2zM42 42h4v1h-4zM48 42h1v1h-1zM51 42h1v1h-1zM1 43h2v1h-2zM7 43h1v1h-1zM11 43h1v1h-1zM13 43h1v1h-1zM15 43h2v1h-2zM19 43h1v1h-1zM25 43h3v1h-3zM29 43h2v1h-2zM33 43h2v1h-2zM36 43h1v1h-1zM38 43h2v1h-2zM41 43h1v1h-1zM43 43h4v1h-4zM48 43h3v1h-3zM3 44h1v1h-1zM6 44h1v1h-1zM8 44h2v1h-2zM13 44h1v1h-1zM15 44h2v1h-2zM18 44h3v1h-3zM22 44h1v1h-1zM24 44h6v1h-6zM33 44h2v1h-2zM37 44h13v1h-13zM52 44h1v1h-1zM8 45h5v1h-5zM14 45h1v1h-1zM17 45h1v1h-1zM20 45h1v1h-1zM22 45h3v1h-3zM28 45h3v1h-3zM32 45h2v1h-2zM36 45h1v1h-1zM40 45h1v1h-1zM42 45h1v1h-1zM44 45h1v1h-1zM48 45h1v1h-1zM51 45h1v1h-1zM0 46h7v1h-7zM8 46h1v1h-1zM15 46h2v1h-2zM20 46h5v1h-5zM26 46h1v1h-1zM28 46h2v1h-2zM32 46h1v1h-1zM34 46h2v1h-2zM39 46h2v1h-2zM42 46h3v1h-3zM46 46h1v1h-1zM48 46h1v1h-1zM50 46h2v1h-2zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h1v1h-1zM10 47h1v1h-1zM12 47h2v1h-2zM15 47h2v1h-2zM18 47h3v1h-3zM24 47h1v1h-1zM28 47h1v1h-1zM30 47h2v1h-2zM38 47h2v1h-2zM43 47h2v1h-2zM48 47h2v1h-2zM52 47h1v1h-1zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM9 48h3v1h-3zM13 48h3v1h-3zM17 48h4v1h-4zM22 48h1v1h-1zM24 48h5v1h-5zM31 48h2v1h-2zM35 48h5v1h-5zM42 48h1v1h-1zM44 48h9v1h-9zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h3v1h-3zM12 49h2v1h-2zM20 49h1v1h-1zM25 49h3v1h-3zM35 49h1v1h-1zM37 49h2v1h-2zM40 49h2v1h-2zM43 49h1v1h-1zM48 49h1v1h-1zM52 49h1v1h-1zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM8 50h1v1h-1zM11 50h1v1h-1zM13 50h1v1h-1zM15 50h2v1h-2zM18 50h4v1h-4zM32 50h2v1h-2zM35 50h1v1h-1zM38 50h2v1h-2zM41 50h3v1h-3zM46 50h1v1h-1zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h1v1h-1zM12 51h1v1h-1zM14 51h1v1h-1zM16 51h2v1h-2zM19 51h3v1h-3zM23 51h1v1h-1zM25 51h1v1h-1zM30 51h1v1h-1zM33 51h1v1h-1zM35 51h1v1h-1zM39 51h6v1h-6zM49 51h1v1h-1zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h2v1h-2zM12 52h1v1h-1zM15 52h2v1h-2zM23 52h1v1h-1zM25 52h2v1h-2zM31 52h2v1h-2zM35 52h1v1h-1zM38 52h2v1h-2zM43 52h1v1h-1zM51 52h1v1h-1z"};
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1,
      bx = 3 * (x2 - x1) - cx,
      ax = 1 - cx - bx,
      cy = 3 * y1,
      by = 3 * (y2 - y1) - cy,
      ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t,
      sy = t => ((ay * t + by) * t + cy) * t;
    return x => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0,
        hi = 1,
        t = x;
      for (let i = 0; i < 26; i++) {
        t = (lo + hi) / 2;
        if (sx(t) < x) lo = t;else hi = t;
      }
      return sy(t);
    };
  }
  const CURVA = bezier(0.22, 1, 0.36, 1);
  const p01 = (T, s, e) => e <= s ? T >= s ? 1 : 0 : Math.min(1, Math.max(0, (T - s) / (e - s)));
  const MOTION = {
    enter: (T, s, e) => CURVA(p01(T, s, e)),
    press: (T, at) => 1 - 0.07 * Math.sin(Math.PI * p01(T, at - 0.1, at + 0.24)),
    pulse: (t, per) => 0.5 - 0.5 * Math.cos(2 * Math.PI * t / per)
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  const R_ = (x, y, w, h, r) => 'M' + (x + r) + ' ' + y + 'h' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + ' ' + r + 'h-' + (w - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1-' + r + '-' + r + 'v-' + (h - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + '-' + r + 'z';
  const C_ = (x, y, r) => 'M' + (x + r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 1-' + 2 * r + ' 0 ' + r + ' ' + r + ' 0 0 1 ' + 2 * r + ' 0z';
  const IC = {
    prancheta: [R_(8, 2, 8, 4, 1), 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
    multimetro: [R_(5, 2, 14, 20, 2), R_(8, 5, 8, 4, 0.5), C_(12, 15, 2.5), 'M12 15l1.5-1.5'],
    sol: [C_(12, 12, 4), 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
    documento: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'],
    raio: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
    desliga: ['M12 2v10', 'M18.4 6.6a9 9 0 1 1-12.77.04'],
    ok: ['M20 6 9 17l-5-5'],
    calc: [R_(4, 2, 16, 20, 2), 'M8 6h8', 'M16 14v4', 'M16 10h.01', 'M12 10h.01', 'M8 10h.01', 'M12 14h.01', 'M8 14h.01', 'M12 18h.01', 'M8 18h.01'],
    fechar: ['M18 6 6 18', 'm6 6 12 12']
  };
  function Ic({
    n,
    s = 20,
    c = '#334155',
    w = 1.6
  }) {
    return React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: c,
      strokeWidth: w,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, IC[n].map((d, i) => React.createElement("path", {
      key: i,
      d: d
    })));
  }
  function useAnchors(rootRef) {
    const els = React.useRef({});
    const [pos, setPos] = React.useState({});
    const ref = k => el => {
      if (el) els.current[k] = el;
    };
    React.useLayoutEffect(() => {
      const medir = () => {
        const root = rootRef.current;
        if (!root) return;
        const out = {};
        Object.keys(els.current).forEach(k => {
          const el = els.current[k];
          let x = 0,
            y = 0,
            e = el;
          while (e && e !== root) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
          }
          out[k] = {
            x: Math.round(x + el.offsetWidth / 2),
            y: Math.round(y + el.offsetHeight / 2),
            w: el.offsetWidth
          };
        });
        setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
      };
      medir();
      const t1 = setTimeout(medir, 400),
        t2 = setTimeout(medir, 1500);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return {
      ref,
      pos
    };
  }
  const MAO = 'M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L6 14Z';
  function Hand({
    T,
    A,
    moves,
    taps = [],
    start,
    o
  }) {
    if (o <= 0.001) return null;
    let cur = start,
      prev = start;
    for (const m of moves) {
      const tg = typeof m.to === 'string' ? A.pos[m.to] : m.to;
      if (!tg) return null;
      const pt = {
        x: tg.x + (m.dx || 0),
        y: tg.y + (m.dy || 0)
      };
      if (T < m.s) break;
      const p = MOTION.enter(T, m.s, m.e);
      cur = {
        x: lerp(prev.x, pt.x, p),
        y: lerp(prev.y, pt.y, p)
      };
      prev = pt;
    }
    let sc = 1;
    taps.forEach(t => {
      sc *= MOTION.press(T, t);
    });
    const rip = taps.map(t => {
      const p = p01(T, t, t + 0.6);
      return p > 0 && p < 1 ? p : null;
    }).find(p => p !== null);
    const k = 50 / 24,
      ox = 8 * k,
      oy = 2.2 * k;
    return React.createElement(React.Fragment, null, rip != null && React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '3px solid #FFB020',
        zIndex: 49,
        pointerEvents: 'none',
        opacity: 0.85 * (1 - rip) * o,
        transform: `translate(${cur.x - 28}px,${cur.y - 28}px) scale(${0.3 + 0.9 * CURVA(rip)})`
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        zIndex: 50,
        pointerEvents: 'none',
        opacity: o,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `translate(${cur.x - ox}px,${cur.y - oy}px) scale(${sc})`
      }
    }, React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        filter: 'drop-shadow(0 4px 6px rgba(9,30,66,.35))'
      }
    }, React.createElement("path", {
      d: MAO,
      fill: "#FFFFFF",
      stroke: "#0C2747",
      strokeWidth: "1.3",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 9.5V12M14 10V12M18 11V12",
      fill: "none",
      stroke: "#0C2747",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    }))));
  }
  function Faixa() {
    const cel = [['MARCA', 'Springer'], ['BTU/h', '90.000'], ['FLUIDO', 'R-410A']];
    return React.createElement("div", {
      style: {
        ...ST.S137,
        width: 320,
        height: 50
      }
    }, cel.map(([l, v], i) => React.createElement("div", {
      key: l,
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
        borderLeft: i ? '1px solid rgba(63,50,16,.25)' : 'none'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, l, " \u25BC"), React.createElement("b", {
      style: i ? {
        font: `700 17px/1.25 ${MONO}`
      } : {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, v))));
  }
  const DOCK = [['Sintomas', 'prancheta'], ['Aferir Vivo', 'multimetro'], ['Códigos & LED', 'sol'], ['Ganhos & Laudo', 'documento']];
  function Dock({
    ativa,
    selo,
    rg,
    sg
  }) {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 8,
        height: 60,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 8,
        zIndex: 5
      }
    }, DOCK.map(([l, ic], i) => React.createElement("div", {
      key: l,
      ref: i === 3 ? rg : undefined,
      style: {
        ...ST.S10,
        position: 'relative',
        fontSize: 14,
        gap: 6,
        transform: i === 3 ? `scale(${sg})` : 'none'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        width: 36,
        height: 3,
        borderRadius: 2,
        background: i === ativa ? '#FFB020' : '#081B33',
        boxShadow: i === ativa ? '0 0 6px rgba(255,176,32,.8)' : 'none'
      }
    }), React.createElement(Ic, {
      n: ic,
      s: 22,
      c: "#FFFFFF"
    }), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, l), i === 3 && selo && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -9,
        right: 12,
        width: 28,
        height: 28,
        boxSizing: 'border-box',
        borderRadius: '50%',
        background: '#FFB020',
        border: '1px solid #7A4E00',
        color: '#0C2747',
        font: `700 15px/26px ${BARLOW}`,
        textAlign: 'center',
        opacity: selo.o,
        transform: `scale(${selo.s})`
      }
    }, selo.n))));
  }
  function Abas() {
    return React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 68,
        height: 44,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 8
      }
    }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
      key: t,
      style: {
        ...(i === 2 ? ST.S50 : {
          ...ST.S28,
          color: '#E0F2FE'
        }),
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '.02em'
      }
    }, t)));
  }
  const Borne = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      minWidth: h,
      height: h,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF',
      border: '1.5px solid #0C2747',
      borderRadius: 6,
      font: `700 ${fs}px/1 ${MONO}`,
      color: '#0C2747'
    }
  }, children);
  const Ponta = ({
    cor,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 21,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: cor === 'v' ? '#C81E1E' : '#111111',
      border: `1px solid ${cor === 'v' ? '#7F1D1D' : '#000000'}`,
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.05em'
    }
  }, "\u25CF ", children);
  const Escala = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 8px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#0C2747',
      border: '1px solid #081B33',
      color: '#FFFFFF',
      font: `700 ${fs}px/1 ${MONO}`,
      letterSpacing: '.04em'
    }
  }, children);
  const Esperado = ({
    h = 21,
    fs = 12,
    children
  }) => React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: h,
      padding: '0 7px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 7,
      background: '#DCFCE7',
      border: '1.5px solid #15803D',
      color: '#14532D',
      font: `700 ${fs}px/1 ${MONO}`
    }
  }, children);
  function Tarja({
    energ,
    children,
    cheia
  }) {
    const bg = energ ? '#B91C1C' : '#15803D';
    return React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: cheia ? 24 : 20,
        padding: cheia ? '0 10px' : '0 7px',
        display: 'flex',
        alignItems: 'center',
        gap: cheia ? 7 : 5,
        borderRadius: 6,
        background: bg,
        color: '#FFFFFF',
        fontSize: cheia ? 12 : 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: cheia ? '.08em' : '.1em',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement(Ic, {
      n: energ ? 'raio' : 'desliga',
      s: cheia ? 15 : 12,
      c: "#FFFFFF",
      w: 2
    }), children);
  }
  function BotaoNormal({
    r,
    g = 0,
    s = 1,
    h = 44,
    w,
    fs = 14,
    ls = '.06em'
  }) {
    return React.createElement("div", {
      ref: r,
      style: {
        ...ST.S28,
        position: 'relative',
        minHeight: h,
        height: h,
        width: w,
        fontSize: fs,
        lineHeight: 1,
        letterSpacing: ls,
        transform: `scale(${s})`
      }
    }, g > 0.001 && React.createElement("span", {
      style: {
        ...ST.S86,
        position: 'absolute',
        inset: -1,
        minHeight: 0,
        opacity: g
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement(Ic, {
      n: "ok",
      s: 16,
      c: "#FFFFFF",
      w: 2.6
    }), "NORMAL"));
  }
  const ForaFaixa = ({
    h = 44,
    fs = 14,
    ls = '.06em'
  }) => React.createElement("div", {
    style: {
      ...ST.S28,
      minHeight: h,
      height: h,
      gap: 5,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: ls
    }
  }, React.createElement(Ic, {
    n: "fechar",
    s: 14,
    c: "#FFFFFF",
    w: 2.6
  }), "FORA DA FAIXA");
  const LINHA = {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '94px minmax(0,1fr)',
    borderTop: '1px solid #CFCBC2',
    minHeight: 0,
    overflow: 'hidden'
  };
  const ROT = {
    boxSizing: 'border-box',
    background: '#EFEDE8',
    borderRight: '1px solid #CFCBC2',
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.1em',
    color: '#334155',
    lineHeight: 1.15,
    whiteSpace: 'normal'
  };
  const VAL = {
    boxSizing: 'border-box',
    minWidth: 0,
    padding: '4px 8px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#1E293B',
    whiteSpace: 'nowrap'
  };
  const QUEBRA = React.createElement("span", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  });
  function Gancho({
    t,
    o,
    x = 0
  }) {
    const g = MOTION.pulse(t, 1.1);
    const zoom = 1 + 3.5 / 156 * p01(t, 0, 3.8);
    const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55));
    const l1 = MOTION.enter(t, 0.45, 1.05),
      l2 = MOTION.enter(t, 1.05, 1.65);
    const tinta = p => {
      const c = (a, b) => Math.round(lerp(a, b, p));
      return `rgb(${c(255, 12)},${c(255, 39)},${c(255, 71)})`;
    };
    const grifo = (txt, p) => React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '1px 8px 3px',
        margin: '0 -8px',
        borderRadius: 5,
        backgroundImage: 'linear-gradient(#FACC15,#FACC15)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: `${p * 100}% 100%`,
        color: tinta(p)
      }
    }, txt);
    return React.createElement("div", {
      "data-screen-label": `Loop 06 · Gancho · ${Math.floor(t)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 70,
        opacity: o,
        transform: `translateX(${x}px)`,
        background: 'radial-gradient(110% 90% at 28% 40%,#14365F 0%,#0C2747 52%,#081B33 100%)',
        color: '#FFFFFF',
        fontFamily: BARLOW,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 24,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        fontSize: 15,
        lineHeight: 1.2,
        letterSpacing: '.16em'
      }
    }, React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, "BANCADA GELOPRO"), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#BFD7F2'
      }
    }, "\xB7 GANHOS & LAUDO")), React.createElement("div", {
      style: {
        ...ST.S22,
        fontSize: 14,
        padding: '0 12px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        letterSpacing: '.04em'
      }
    }, "SPRINGER \xB7 90.000 BTU/h \xB7 R-410A")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 52,
        top: 90,
        width: 260,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22,
        transform: `scale(${zoom})`,
        transformOrigin: '50% 45%'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        width: 228,
        height: 228,
        borderRadius: 44,
        background: '#0E2240',
        border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
        boxShadow: `0 0 ${16 + 26 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("img", {
      src: window.GP_BASE + "img/t31_contatora.webp",
      alt: "",
      width: "156",
      height: "156",
      style: {
        width: 156,
        height: 156,
        display: 'block',
        borderRadius: 24,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)'
      }
    })), React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 52,
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    background: '#B91C1C',
    border: '1px solid #7F1D1D',
    boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
    font: "800 22px/1.1 'Barlow Semi Condensed',sans-serif",
    letterSpacing: '.04em',
    whiteSpace: 'nowrap',
    transform: `scale(${selo})`
  }
}, "\u2715 CHORO DE PRE\xC7O")), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 360,
        right: 36,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        whiteSpace: 'normal'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.16,
        letterSpacing: '-.005em',
        textWrap: 'pretty'
      }
    }, "Cliente achando o servi\xE7o caro?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        fontSize: 26.5,
        fontWeight: 700,
        lineHeight: 1.12,
        whiteSpace: 'nowrap'
      }
    }, grifo('Veja seu lucro só na sua tela', l1), grifo('e mostre o prejuízo que ele evitou.', l2))));
  }
  const KICK = {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '.12em',
    color: '#334155',
    whiteSpace: 'nowrap'
  };
  const brl = v => 'R$ ' + Math.round(v).toLocaleString('pt-BR') + ',00';
  const vv = v => Math.round(v).toLocaleString('pt-BR') + ',00';
  function Servico({
    img,
    nome,
    v,
    c,
    o = 1,
    y = 0,
    bo = 1
  }) {
    return React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: o,
        transform: `translateY(${y}px)`
      }
    }, React.createElement("div", {
      style: {
        ...ST.S23,
        minHeight: 42,
        height: 42
      }
    }, React.createElement("img", {
      src: img,
      alt: "",
      style: {
        flex: 'none',
        width: 32,
        height: 32,
        borderRadius: 7,
        objectFit: 'cover',
        border: '1px solid #5A6A7E'
      }
    }), React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.25,
        overflow: 'hidden'
      }
    }, nome), React.createElement("span", null, "\u25BC")), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, React.createElement("span", {
      style: {
        ...KICK,
        fontSize: 11,
        letterSpacing: '.1em',
        color: '#3F3210'
      }
    }, "COBRAR DO CLIENTE \xB7 R$"), React.createElement("div", {
      style: {
        ...ST.S56,
        height: 34,
        fontSize: 18
      }
    }, v)), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        opacity: bo
      }
    }, React.createElement("span", {
      style: {
        ...KICK,
        fontSize: 11,
        letterSpacing: '.1em',
        color: '#3F3210'
      }
    }, "MEU CUSTO DA PE\xC7A \xB7 R$"), React.createElement("div", {
      style: {
        ...ST.S56,
        height: 34,
        fontSize: 18
      }
    }, c))));
  }
  function Piece() {
    const {
      T,
      CUES
    } = useComposition();
    const a = CUES.Acao,
      L = CUES.LaudoPix;
    const root = React.useRef(null);
    const A = useAnchors(root);
    const V = 0.45;
    const s0 = a + 0.7,
      s1 = a + 1.8;
    const tMala = a + 2.4,
      tChave = a + 6.25;
    const fade0 = L + 4.25,
      fade1 = L + 4.7;
    const srvP = MOTION.enter(T, s0, s1);
    const tot = lerp(430, 690, srvP);
    const mala = MOTION.enter(T, tMala + 0.05, tMala + 0.4);
    const custo = lerp(100, 0, MOTION.enter(T, tMala + 0.1, tMala + 0.7));
    const lucro = tot - custo,
      marg = Math.round(lucro / tot * 100);
    const wP = custo / tot * 100;
    const boom = 1 + 0.045 * Math.sin(Math.PI * p01(T, tMala + 0.1, tMala + 0.8));
    const pill = 1 + 0.18 * Math.sin(Math.PI * p01(T, tMala + 0.5, tMala + 0.9));
    const ch = MOTION.enter(T, tChave + 0.05, tChave + 0.4);
    const tt = MOTION.enter(T, tChave + 0.1, tChave + 0.35);
    const bo = 1 - MOTION.enter(T, L, L + 0.45);
    const sai = MOTION.enter(T, a, a + V);
    const ganchoO = T < a + V ? 1 - sai : T >= fade0 ? MOTION.enter(T, fade0, fade1) : 0;
    const ganchoX = T < a + V ? -28 * sai : 0;
    const ganchoT = T < a + V ? T : 0;
    const telaX = 24 * (1 - sai);
    const maoO = MOTION.enter(T, a + 1.6, a + 1.9) * (1 - MOTION.enter(T, tChave + 0.5, L));
    return React.createElement("div", {
      style: {
        position: 'relative',
        width: 800,
        height: 500,
        overflow: 'hidden',
        ...BG
      }
    }, React.createElement("div", {
      ref: root,
      "data-screen-label": `Loop 06 · ${Math.floor(T)}s`,
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ...BG,
        color: '#0C2747',
        fontFamily: BARLOW,
        transform: `translateX(${telaX}px)`
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        right: 16,
        top: 8,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("div", {
      style: {
        ...ST.S14,
        lineHeight: 1.2,
        position: 'relative'
      }
    }, React.createElement("span", {
      style: {
        display: 'block',
        opacity: 1 - tt
      }
    }, "GANHOS & LAUDO"), React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: tt
      }
    }, "LAUDO T\xC9CNICO")), React.createElement(Faixa, null), React.createElement("div", {
      ref: A.ref('chave'),
      style: {
        ...ST.S53,
        transform: `scale(${MOTION.press(T, tChave)})`
      }
    }, React.createElement("span", {
      style: {
        ...ST.S91,
        left: lerp(47, 2, ch)
      }
    }), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Ic, {
      n: "documento",
      s: 22,
      c: ch > 0.5 ? '#E0F2FE' : '#0C2747'
    })), React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Ic, {
      n: "calc",
      s: 22,
      c: ch > 0.5 ? '#0C2747' : '#E0F2FE'
    })))), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 16,
        top: 68,
        width: 380,
        height: 356,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        ...ST.S161,
        padding: '10px 14px',
        gap: 4
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, React.createElement("span", {
      style: {
        ...KICK,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, "N\xBA 1093")), React.createElement("b", {
      style: {
        font: `700 50px/1 ${MONO}`,
        letterSpacing: '-.01em',
        fontVariantNumeric: 'tabular-nums'
      }
    }, brl(tot)), React.createElement("span", {
      style: {
        font: `500 12.5px/1.2 ${MONO}`,
        color: '#334155'
      }
    }, "Springer \xB7 90.000 BTU/h \xB7 R-410A \xB7 porte 90K")), React.createElement("div", {
      style: {
        ...ST.S94,
        flex: 1,
        padding: '14px 16px',
        gap: 10,
        justifyContent: 'center',
        opacity: bo,
        transform: `scale(${boom})`
      }
    }, React.createElement("span", {
      style: ST.S95
    }), React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '.14em',
        color: '#3F3210'
      }
    }, "LUCRO LIMPO NO BOLSO"), React.createElement("span", {
      style: {
        ...ST.S98,
        transform: `scale(${pill})`,
        transformOrigin: '100% 50%'
      }
    }, marg, "% DE MARGEM")), React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        color: '#0C2747',
        textShadow: '0 1px 0 rgba(255,255,255,.6)'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 700
      }
    }, "+R$"), React.createElement("b", {
      style: {
        fontSize: 62,
        fontWeight: 800,
        lineHeight: 0.9,
        fontVariantNumeric: 'tabular-nums'
      }
    }, Math.round(lucro)), React.createElement("span", {
      style: {
        fontSize: 24,
        fontWeight: 700
      }
    }, ",00")), React.createElement("div", {
      style: {
        position: 'relative',
        height: 12,
        borderRadius: 999,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: `${wP}fr ${100 - wP}fr`,
        gap: wP > 0.3 ? 4 : 0
      }
    }, React.createElement("span", {
      style: ST.S102
    }), React.createElement("span", {
      style: {
        background: '#0C2747'
      }
    })), React.createElement("div", {
      style: {
        ...ST.S103,
        position: 'relative',
        fontSize: 13
      }
    }, React.createElement("span", null, mala > 0.5 ? 'PEÇA NA MALA (CUSTO R$ 0)' : 'PEÇA ' + brl(custo)), React.createElement("span", null, "TOTAL ", brl(tot).replace(/,00$/, ''))))), React.createElement("div", {
      style: {
        ...CARD,
        position: 'absolute',
        left: 408,
        right: 16,
        top: 68,
        height: 356,
        overflow: 'hidden',
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, React.createElement("span", {
      style: {
        ...KICK,
        letterSpacing: '.1em'
      }
    }, "SERVI\xC7OS & CAUSA \xB7 TABELA OFICIAL 2026"), React.createElement(Servico, {
      img: "img/t31_contatora.webp",
      nome: "Contatora Magn\xE9tica (Porte 90K)",
      v: "430,00",
      c: vv(custo),
      bo: bo
    }), React.createElement(Servico, {
      img: "img/t11_bornes_fios.webp",
      nome: "Reaperto & Bornes",
      v: vv(lerp(0, 260, srvP)),
      c: "0,00",
      o: srvP,
      y: (1 - srvP) * 12,
      bo: bo
    }), React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        opacity: bo
      }
    }, React.createElement("div", {
      style: {
        minHeight: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        borderTop: '1px solid #E2E8F0',
        paddingTop: 4
      }
    }, React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 500
      }
    }, "Pe\xE7a na Mala (Custo R$ 0)"), React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, React.createElement("s", {
      style: {
        font: `700 14px/1 ${MONO}`,
        color: '#334155',
        opacity: mala
      }
    }, "R$ 100,00"), React.createElement("b", {
      style: {
        font: `700 17px/1 ${MONO}`
      }
    }, brl(custo).replace(/^R\$ /, 'R$ ')))), React.createElement("div", {
      style: {
        minHeight: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #E2E8F0',
        paddingTop: 4
      }
    }, React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 600
      }
    }, "Pe\xE7a na Mala = R$ 0"), React.createElement("div", {
      ref: A.ref('mala'),
      style: {
        ...ST.S172,
        background: mala > 0.5 ? '#FFB020' : '#CBD5E1',
        border: mala > 0.5 ? '1px solid #7A4E00' : '1px solid #1C4268',
        transform: `scale(${MOTION.press(T, tMala)})`
      }
    }, React.createElement("span", {
      style: {
        ...ST.S121,
        left: lerp(3, 37, mala)
      }
    }))))), React.createElement(Dock, {
      ativa: 3
    }), React.createElement(Hand, {
      T: T,
      A: A,
      o: maoO,
      start: {
        x: 600,
        y: 330
      },
      taps: [tMala, tChave],
      moves: [{
        s: a + 1.7,
        e: tMala - 0.04,
        to: 'mala',
        dy: -18
      }, {
        s: tChave - 1.3,
        e: tChave - 0.05,
        to: 'chave',
        dx: -14,
        dy: 6
      }]
    }), T >= L && React.createElement(Laudo, {
      T: T,
      L: L
    })), ganchoO > 0.001 && React.createElement(Gancho, {
      t: ganchoT,
      o: ganchoO,
      x: ganchoX
    }));
  }
  const ROTD = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.16em',
    lineHeight: 1.2,
    color: '#334155'
  };
  const CX = {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1.5px solid #A3ACB9',
    borderRadius: 10
  };
  function Laudo({
    T,
    L
  }) {
    const o = MOTION.enter(T, L, L + 0.45);
    const fx = MOTION.enter(T, L + 1.05, L + 1.5);
    const cel = [['SUCÇÃO', '122 PSI'], ['TUBO', '13,4 °C'], ['EVAPORAÇÃO', '4,6 °C']];
    return React.createElement("div", {
      "data-screen-label": "Loop 06 \xB7 Laudo N\xBA 1093",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        background: `rgba(8,27,51,${0.92 * o})`,
        fontFamily: DOC,
        color: '#0C2747',
        whiteSpace: 'nowrap'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 12,
        top: 8,
        width: 776,
        height: 384,
        padding: 12,
        background: '#FFFFFF',
        borderRadius: 12,
        boxShadow: '0 16px 36px rgba(8,27,51,.45)',
        opacity: o,
        transform: `translateX(${(1 - o) * 28}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 62,
        padding: '0 20px',
        borderRadius: 12,
        background: '#0F2847',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        color: '#DCE7F5'
      }
    }, "PRESTADORA DO SERVI\xC7O"), React.createElement("b", {
      style: {
        fontSize: 20,
        lineHeight: 1.15
      }
    }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        color: '#BFD7F2'
      }
    }, "Belo Horizonte \xB7 Chave Pix ", React.createElement("b", {
      style: {
        color: '#FFFFFF'
      }
    }, "pix@climasilvaefilhos.com.br"))), React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.2em',
        lineHeight: 1.2
      }
    }, "LAUDO DE APROVA\xC7\xC3O"), React.createElement("b", {
      style: {
        font: `700 27px/1.25 ${MONO}`
      }
    }, "N\xBA 1093"))), React.createElement("div", {
      style: {
        ...CX,
        flex: 'none',
        height: 40,
        display: 'grid',
        gridTemplateColumns: '230px minmax(0,1fr)',
        alignItems: 'stretch'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "CLIENTE"), React.createElement("b", {
      style: {
        fontSize: 14,
        lineHeight: 1.2
      }
    }, "Padaria Sol")), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '0 16px',
        borderLeft: '1px solid #CBD2DB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, React.createElement("span", {
      style: ROTD
    }, "EQUIPAMENTO"), React.createElement("b", {
      style: {
        font: `700 13.5px/1.2 ${MONO}`
      }
    }, "Springer \xB7 90.000 BTU/h \xB7 R-410A"))), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '392px minmax(0,1fr)',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        flex: 'none'
      }
    }, "SERVI\xC7OS EXECUTADOS & PREVEN\xC7\xC3O"), React.createElement("div", { style: { ...CX, flex: 1, minHeight: 0, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden' } }, [['Contatora Magn\xE9tica (Porte 90K)', 'R$ 430,00'], ['Reaperto & Bornes', 'R$ 260,00']].map(([sv, v]) => React.createElement("div", { key: sv, style: { flex: 'none', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingBottom: 6, borderBottom: '1px solid #E2E8F0' } }, React.createElement("b", { style: { fontSize: 15, lineHeight: 1.2 } }, sv), React.createElement("b", { style: { flex: 'none', font: `700 15px/1.2 ${MONO}` } }, v))), React.createElement("div", { style: { flex: 'none', background: '#F0FDF4', borderLeft: '4px solid #15803D', borderRadius: 6, padding: '6px 9px', color: '#14532D', fontSize: 12.5, lineHeight: 1.3, whiteSpace: 'normal', textWrap: 'pretty', overflow: 'hidden' } }, React.createElement("b", { style: { fontWeight: 800 } }, "Preven\xE7\xE3o:"), " Impede falta de fase e queima do compressor Scroll 7,5 TR (preju\xEDzo evitado de R$ 3.800 a R$ 5.900)."))), React.createElement("div", {
      style: {
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 56,
        padding: '0 16px',
        borderRadius: 12,
        background: 'linear-gradient(180deg,#F3ECDA 0%,#EFE6CF 100%)',
        border: '2px solid #A6945F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        ...ROTD,
        fontSize: 11,
        color: '#3F3210'
      }
    }, "VALOR TOTAL"), React.createElement("b", {
      style: {
        font: `700 32px/1.2 ${MONO}`,
        color: '#0C2747'
      }
    }, "R$ 690,00")), React.createElement("div", {
      style: {
        ...CX,
        flex: 1,
        minHeight: 0,
        padding: '6px 9px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        overflow: 'hidden'
      }
    }, React.createElement("svg", {
      width: QR.n * 3,
      height: QR.n * 3,
      viewBox: `0 0 ${QR.n} ${QR.n}`,
      shapeRendering: "crispEdges",
      style: {
        display: 'block',
        flex: 'none'
      }
    }, React.createElement("path", {
      d: QR.d,
      fill: "#000000"
    })), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        height: QR.n * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'normal'
      }
    }, React.createElement("span", {
      style: {
        ...ROTD
      }
    }, "PIX \xB7 VALOR EXATO DO LAUDO"), React.createElement("b", {
      style: {
        font: `700 21px/1.2 ${MONO}`,
        whiteSpace: 'nowrap'
      }
    }, "R$ 690,00"), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '6px 8px',
        borderRadius: 6,
        background: '#15803D',
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.25,
        textWrap: 'pretty'
      }
    }, "Para autorizar o servi\xE7o, responda APROVADO nesta mensagem.")))))), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 10,
        height: 84,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'linear-gradient(90deg,#081B33 0%,#0C2747 100%)',
        border: '2px solid #22C55E',
        borderRadius: 14,
        boxShadow: '0 -6px 24px rgba(8,27,51,.45)',
        opacity: fx,
        transform: `translateY(${(1 - fx) * 24}px)`,
        fontFamily: BARLOW
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        flex: 'none',
        height: 60,
        padding: '0 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        borderRadius: 10,
        background: '#15803D',
        border: '2px solid #4ADE80',
        color: '#FFFFFF',
        font: `700 18px/1.2 ${MONO}`,
        letterSpacing: '-.01em'
      }
    }, React.createElement("span", null, "\u2713 +R$ 690 NO PIX"), React.createElement("span", null, "\xB7 ZERO CHORO")), React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#FFFFFF'
      }
    }, React.createElement("span", null, "Preju\xEDzo maior provado na tela."), React.createElement("span", {
      style: {
        padding: '1px 6px 2px',
        margin: '0 -6px',
        borderRadius: 4,
        background: '#FACC15',
        color: '#0C2747'
      }
    }, "Cliente aprova tranquilo na hora."))));
  }
  window.GPLoops.l06 = Piece;
})();
(function () {
  /* Holofote: no mobile (< 960 px) só o loop mais visível roda; no desktop (>= 960 px, 2 cards por linha) roda o par da linha mais visível ([0,1], [2,3], [4,5]).
     Todo loop ativado parte de 0,0 s; os outros mostram o quadro 0 parado.
     Pausa para leitura: tocar/clicar na janela congela o T atual (sem zerar) com a pílula PAUSADO; tocar de novo retoma do mesmo T.
     Tocar num card parado fora do holofote ativa-o na hora. */
  var e = React.createElement, DUR = 15.5, CUES = { Gancho: 0, Acao: 3.8, LaudoPix: 10.8 };
  var reduz = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var hosts = [], vis = [], ativos = [], subs = [], forcado = -1;
  var PILULA = { position: 'absolute', right: 8, bottom: 8, background: 'rgba(8,27,51,0.86)', color: '#FDE68A', border: '1px solid rgba(250,204,21,0.6)', font: "700 12px/1 'Plus Jakarta Sans',sans-serif", padding: '6px 10px', borderRadius: 999, pointerEvents: 'none', zIndex: 90, maxWidth: 'calc(100% - 16px)', textAlign: 'center' };
  function desktop() { return window.innerWidth >= 960; }
  function escolher() {
    var best = -1, bh = 24;
    for (var i = 0; i < hosts.length; i++) if (vis[i] > bh) { bh = vis[i]; best = i; }
    if (forcado >= 0 && !(vis[forcado] > 24)) forcado = -1;
    var base = forcado >= 0 ? forcado : best, novos = [];
    if (base >= 0) {
      if (desktop()) { var a = base - (base % 2); novos.push(a); if (a + 1 < hosts.length) novos.push(a + 1); }
      else novos.push(base);
    }
    if (novos.join() !== ativos.join()) { ativos = novos; subs.forEach(function (f) { f(ativos); }); }
  }
  var io = new IntersectionObserver(function (en) {
    en.forEach(function (x) { vis[+x.target.getAttribute('data-gp-i')] = x.isIntersecting ? x.intersectionRect.height : 0; });
    escolher();
  }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
  window.addEventListener('resize', escolher);
  function Player(props) {
    var host = props.host, idx = props.idx;
    var a = React.useState(reduz ? (props.fixo || 12.6) : 0), T = a[0], setT = a[1];
    var b = React.useState((host.clientWidth || 400) / 800), sc = b[0], setS = b[1];
    var c = React.useState(false), toca = c[0], setToca = c[1];
    var d = React.useState(false), paused = d[0], setPaused = d[1];
    var acc = React.useRef(0), tocaRef = React.useRef(false);
    React.useEffect(function () {
      var ro = new ResizeObserver(function () { setS(host.clientWidth / 800); }); ro.observe(host);
      var f = function (at) { var on = at.indexOf(idx) >= 0; tocaRef.current = on; setToca(on); }; subs.push(f); f(ativos);
      var clique = function () {
        if (reduz) return;
        if (!tocaRef.current) { forcado = idx; escolher(); setPaused(false); return; }
        setPaused(function (p) { return !p; });
      };
      host.addEventListener('click', clique);
      return function () { ro.disconnect(); subs.splice(subs.indexOf(f), 1); host.removeEventListener('click', clique); };
    }, []);
    React.useEffect(function () {
      if (reduz) return undefined;
      if (!toca) { acc.current = 0; setT(0); setPaused(false); return undefined; }
      if (paused) return undefined;
      var raf = 0, last = 0;
      var tick = function (now) { if (last) acc.current += Math.min(now - last, 100) / 1000; last = now; setT(acc.current % DUR); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
      return function () { cancelAnimationFrame(raf); };
    }, [toca, paused]);
    return e(React.Fragment, null,
      e('div', { style: { position: 'absolute', left: 0, top: 0, width: 800, height: 500, transform: 'scale(' + sc + ')', transformOrigin: '0 0' } },
        e(window.GPLoopCtx.Provider, { value: { T: T, CUES: CUES } }, e(props.piece, props.pp))),
      toca && paused ? e('div', { 'data-gp-pausado': '', style: PILULA }, '\u275A\u275A PAUSADO \u00B7 TOQUE PARA CONTINUAR') : null);
  }
  document.querySelectorAll('[data-gp-loop]').forEach(function (el) {
    var p = window.GPLoops[el.getAttribute('data-gp-loop')];
    if (!p) return;
    var i = hosts.length; hosts.push(el); vis.push(0); el.setAttribute('data-gp-i', String(i)); io.observe(el);
    el.style.cursor = 'pointer';
    var l05 = el.getAttribute('data-gp-loop') === 'l05'; /* Card 05: quadro estático com o selo ✕ FORA DA FAIXA (7,20 s) */
    ReactDOM.createRoot(el).render(e(Player, { host: el, piece: p, idx: i, fixo: l05 ? 7.2 : 0, pp: l05 ? { seloReal: true } : null }));
  });
})();

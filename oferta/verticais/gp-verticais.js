/* GeloPRO · 5 vídeos verticais da PV (390 × 844) · gerado por unidades/referencias-video/verticais-pv/build-gp-verticais.js
   Pré-requisitos na página (mesmos da Dobra 5): oferta/loops/react.production.min.js e react-dom.production.min.js; fontes de oferta/loops/fonts/.
   Montagem: <div data-gp-vertical="v01"></div> … "v05". Palco 390 × 844 escalado para caber no slot (centralizado), mão e Urso ligados, sem chassi (o slot da PV já é o celular).
   Holofote: IntersectionObserver — o loop mudo roda a 60 fps só enquanto o slot está visível.
   🔊 OUVIR EXPLICAÇÃO: currentTime = 0 + play() no .mp3 oficial (pausa os outros 4); o T passa a ser audio.currentTime; no fim volta ao loop mudo.
   Toque/clique na tela: congela T e o .mp3 juntos com a pílula ❚❚ PAUSADO · TOQUE PARA CONTINUAR; novo toque retoma do mesmo T.
   Seek externo (sondas): CustomEvent 'data-om-seek-to-time-frame' no slot com detail.time. */
(function () {
  var s = document.currentScript && document.currentScript.src;
  window.GPV_BASE = s ? s.replace(/[^/]*$/, '') : '/oferta/verticais/';
  var F = window.GPV_BASE + '../loops/fonts/';
  var f = function (fam, w, file) { return "@font-face{font-family:'" + fam + "';font-weight:" + w + ";font-display:swap;src:url(" + F + file + ") format('woff2')}"; };
  var st = document.createElement('style');
  st.textContent = f('Barlow Semi Condensed', 500, 'barlow-500.woff2') + f('Barlow Semi Condensed', 600, 'barlow-600.woff2') + f('Barlow Semi Condensed', 700, 'barlow-700.woff2') + f('Barlow Semi Condensed', 800, 'barlow-800.woff2') + f('JetBrains Mono', 500, 'jbmono-500.woff2') + f('JetBrains Mono', 700, 'jbmono-700.woff2');
  document.head.appendChild(st);
  window.GPVerticais = {};
  window.GPVCtx = React.createContext({ T: 0, CUES: {} });
  window.GPV_META = {"v01":{"nome":"Video01Hero","dur":33.46,"cues":{"Gancho":0,"Sintoma":8.94,"Lucro":17.02,"Laudo":26.09},"audio":"v01-hero-voz.mp3"},"v02":{"nome":"Video02PinoEletrico","dur":27.66,"cues":{"Gancho":0,"Sintoma":8.3,"Pino":15.53,"Laudo":22.26},"audio":"v02-pino-eletrico-voz.mp3"},"v03":{"nome":"Video03NtcGasR32","dur":26.83,"cues":{"Gancho":0,"Sensor":6.7,"Gas":13.63,"Laudo":21.61},"audio":"v03-ntc-gas-r32-voz.mp3"},"v04":{"nome":"Video04Ch25Trava30s","dur":27.9,"cues":{"Gancho":0,"Codigo":7.41,"Trava":13.57,"Laudo":23.94},"audio":"v04-ch25-trava30s-voz.mp3"},"v05":{"nome":"Video05Dobra4LaudoPix","dur":31.95,"cues":{"Gancho":0,"Lucro":6.37,"Garantia":15.6,"Laudo":24.62},"audio":"v05-dobra4-laudo-pix-voz.mp3"}};
})();

/* ── Video01Hero · video01-hero.jsx · 33,46 s ── */
(function () {
  const GPV = window.GPV_BASE;
  const useComposition = () => React.useContext(window.GPVCtx);
const W_BASE = [0, 5, 12, 17.5, 24],
  W_REAL = [0, 8.94, 17.02, 26.09, 33.46];
const mapa = (de, para) => t => {
  for (let i = 1; i < de.length; i++) if (t <= de[i] || i === de.length - 1) return para[i - 1] + (t - de[i - 1]) * (para[i] - para[i - 1]) / (de[i] - de[i - 1]);
  return t;
};
const paraBase = mapa(W_REAL, W_BASE),
  paraReal = mapa(W_BASE, W_REAL);
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
    let raf = 0,
      vivo = true;
    const medir = () => {
      if (!vivo) return;
      const root = rootRef.current;
      const ks = Object.keys(els.current);
      if (!root || !root.offsetWidth || !ks.length) {
        raf = requestAnimationFrame(medir);
        return;
      }
      const out = {};
      let ok = true;
      ks.forEach(k => {
        const el = els.current[k];
        let x = 0,
          y = 0,
          e = el;
        while (e && e !== root) {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        if (e !== root || !el.offsetWidth) ok = false;
        out[k] = {
          x: Math.round(x + el.offsetWidth / 2),
          y: Math.round(y + el.offsetHeight / 2),
          w: el.offsetWidth
        };
      });
      if (!ok) {
        raf = requestAnimationFrame(medir);
        return;
      }
      setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
    };
    medir();
    const t1 = setTimeout(medir, 400),
      t2 = setTimeout(medir, 1500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    const ro = typeof ResizeObserver !== 'undefined' && rootRef.current ? new ResizeObserver(() => medir()) : null;
    if (ro) ro.observe(rootRef.current);
    return () => {
      vivo = false;
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      if (ro) ro.disconnect();
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
const QR = {
  "payload": "00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406490.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10486304FCEA",
  "n": 53,
  "d": "M0 0h7v1h-7zM9 0h1v1h-1zM11 0h2v1h-2zM14 0h1v1h-1zM17 0h3v1h-3zM21 0h2v1h-2zM24 0h1v1h-1zM26 0h3v1h-3zM30 0h1v1h-1zM33 0h3v1h-3zM38 0h1v1h-1zM40 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM13 1h1v1h-1zM16 1h2v1h-2zM19 1h4v1h-4zM25 1h1v1h-1zM28 1h1v1h-1zM30 1h1v1h-1zM36 1h8v1h-8zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM11 2h5v1h-5zM17 2h1v1h-1zM19 2h2v1h-2zM22 2h3v1h-3zM29 2h2v1h-2zM32 2h1v1h-1zM34 2h4v1h-4zM39 2h1v1h-1zM41 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM11 3h4v1h-4zM18 3h2v1h-2zM24 3h1v1h-1zM28 3h1v1h-1zM30 3h2v1h-2zM34 3h2v1h-2zM37 3h1v1h-1zM39 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM10 4h3v1h-3zM19 4h2v1h-2zM22 4h1v1h-1zM24 4h8v1h-8zM33 4h1v1h-1zM35 4h2v1h-2zM38 4h1v1h-1zM40 4h3v1h-3zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h2v1h-2zM11 5h4v1h-4zM18 5h2v1h-2zM24 5h1v1h-1zM28 5h1v1h-1zM31 5h4v1h-4zM37 5h1v1h-1zM41 5h2v1h-2zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM11 7h2v1h-2zM16 7h1v1h-1zM19 7h1v1h-1zM22 7h3v1h-3zM28 7h2v1h-2zM33 7h3v1h-3zM37 7h2v1h-2zM0 8h1v1h-1zM3 8h1v1h-1zM5 8h2v1h-2zM8 8h2v1h-2zM11 8h1v1h-1zM13 8h1v1h-1zM15 8h3v1h-3zM20 8h1v1h-1zM22 8h1v1h-1zM24 8h6v1h-6zM31 8h2v1h-2zM36 8h1v1h-1zM40 8h1v1h-1zM42 8h1v1h-1zM45 8h1v1h-1zM47 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM11 9h4v1h-4zM17 9h4v1h-4zM22 9h2v1h-2zM25 9h1v1h-1zM31 9h3v1h-3zM39 9h1v1h-1zM41 9h1v1h-1zM45 9h1v1h-1zM47 9h1v1h-1zM49 9h1v1h-1zM52 9h1v1h-1zM2 10h2v1h-2zM6 10h1v1h-1zM9 10h1v1h-1zM13 10h8v1h-8zM24 10h4v1h-4zM30 10h1v1h-1zM33 10h5v1h-5zM41 10h1v1h-1zM44 10h3v1h-3zM48 10h1v1h-1zM2 11h1v1h-1zM4 11h2v1h-2zM7 11h6v1h-6zM14 11h1v1h-1zM18 11h3v1h-3zM22 11h2v1h-2zM25 11h2v1h-2zM32 11h1v1h-1zM34 11h2v1h-2zM38 11h4v1h-4zM43 11h1v1h-1zM45 11h1v1h-1zM50 11h2v1h-2zM1 12h1v1h-1zM3 12h1v1h-1zM5 12h2v1h-2zM8 12h2v1h-2zM12 12h1v1h-1zM14 12h1v1h-1zM17 12h2v1h-2zM20 12h6v1h-6zM28 12h5v1h-5zM34 12h7v1h-7zM43 12h1v1h-1zM45 12h4v1h-4zM52 12h1v1h-1zM3 13h1v1h-1zM7 13h4v1h-4zM13 13h3v1h-3zM17 13h1v1h-1zM21 13h3v1h-3zM29 13h1v1h-1zM31 13h2v1h-2zM34 13h3v1h-3zM40 13h1v1h-1zM46 13h1v1h-1zM50 13h1v1h-1zM2 14h7v1h-7zM11 14h3v1h-3zM15 14h1v1h-1zM17 14h2v1h-2zM20 14h1v1h-1zM22 14h1v1h-1zM28 14h1v1h-1zM30 14h3v1h-3zM34 14h5v1h-5zM41 14h1v1h-1zM45 14h1v1h-1zM48 14h2v1h-2zM52 14h1v1h-1zM0 15h2v1h-2zM3 15h1v1h-1zM5 15h1v1h-1zM7 15h2v1h-2zM10 15h1v1h-1zM13 15h2v1h-2zM20 15h1v1h-1zM23 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM34 15h4v1h-4zM40 15h3v1h-3zM47 15h1v1h-1zM49 15h1v1h-1zM51 15h1v1h-1zM0 16h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM10 16h1v1h-1zM12 16h1v1h-1zM15 16h4v1h-4zM20 16h1v1h-1zM24 16h1v1h-1zM27 16h1v1h-1zM32 16h1v1h-1zM34 16h5v1h-5zM41 16h2v1h-2zM47 16h2v1h-2zM0 17h1v1h-1zM7 17h1v1h-1zM9 17h1v1h-1zM11 17h1v1h-1zM15 17h2v1h-2zM19 17h1v1h-1zM22 17h1v1h-1zM26 17h1v1h-1zM28 17h2v1h-2zM32 17h1v1h-1zM34 17h1v1h-1zM36 17h3v1h-3zM44 17h2v1h-2zM48 17h3v1h-3zM0 18h3v1h-3zM4 18h1v1h-1zM6 18h1v1h-1zM16 18h3v1h-3zM20 18h2v1h-2zM23 18h1v1h-1zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h2v1h-2zM34 18h2v1h-2zM37 18h1v1h-1zM40 18h2v1h-2zM44 18h2v1h-2zM47 18h3v1h-3zM51 18h2v1h-2zM1 19h1v1h-1zM3 19h2v1h-2zM7 19h3v1h-3zM11 19h2v1h-2zM17 19h1v1h-1zM19 19h3v1h-3zM25 19h1v1h-1zM27 19h2v1h-2zM31 19h2v1h-2zM34 19h4v1h-4zM42 19h5v1h-5zM48 19h2v1h-2zM51 19h2v1h-2zM1 20h2v1h-2zM5 20h2v1h-2zM8 20h5v1h-5zM15 20h1v1h-1zM18 20h1v1h-1zM21 20h1v1h-1zM23 20h2v1h-2zM30 20h2v1h-2zM36 20h1v1h-1zM40 20h9v1h-9zM52 20h1v1h-1zM0 21h1v1h-1zM3 21h1v1h-1zM5 21h1v1h-1zM7 21h1v1h-1zM9 21h2v1h-2zM13 21h2v1h-2zM16 21h2v1h-2zM20 21h2v1h-2zM23 21h2v1h-2zM27 21h1v1h-1zM29 21h1v1h-1zM31 21h3v1h-3zM36 21h1v1h-1zM40 21h1v1h-1zM43 21h1v1h-1zM45 21h1v1h-1zM49 21h2v1h-2zM52 21h1v1h-1zM0 22h3v1h-3zM6 22h2v1h-2zM9 22h2v1h-2zM13 22h3v1h-3zM17 22h1v1h-1zM19 22h2v1h-2zM22 22h1v1h-1zM24 22h6v1h-6zM31 22h2v1h-2zM34 22h5v1h-5zM42 22h2v1h-2zM46 22h3v1h-3zM50 22h1v1h-1zM0 23h1v1h-1zM2 23h1v1h-1zM4 23h2v1h-2zM8 23h1v1h-1zM10 23h2v1h-2zM13 23h2v1h-2zM19 23h1v1h-1zM23 23h2v1h-2zM26 23h6v1h-6zM34 23h1v1h-1zM37 23h2v1h-2zM40 23h2v1h-2zM44 23h1v1h-1zM48 23h1v1h-1zM50 23h1v1h-1zM52 23h1v1h-1zM1 24h8v1h-8zM11 24h4v1h-4zM16 24h2v1h-2zM19 24h4v1h-4zM24 24h5v1h-5zM30 24h4v1h-4zM35 24h2v1h-2zM40 24h1v1h-1zM42 24h7v1h-7zM50 24h1v1h-1zM52 24h1v1h-1zM1 25h2v1h-2zM4 25h1v1h-1zM8 25h1v1h-1zM11 25h2v1h-2zM15 25h1v1h-1zM18 25h1v1h-1zM24 25h1v1h-1zM28 25h1v1h-1zM31 25h2v1h-2zM34 25h1v1h-1zM37 25h1v1h-1zM41 25h1v1h-1zM43 25h2v1h-2zM48 25h1v1h-1zM51 25h1v1h-1zM0 26h1v1h-1zM2 26h3v1h-3zM6 26h1v1h-1zM8 26h1v1h-1zM10 26h1v1h-1zM13 26h2v1h-2zM16 26h1v1h-1zM18 26h1v1h-1zM22 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h3v1h-3zM36 26h3v1h-3zM40 26h1v1h-1zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM51 26h2v1h-2zM0 27h1v1h-1zM4 27h1v1h-1zM8 27h2v1h-2zM12 27h1v1h-1zM16 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM28 27h3v1h-3zM35 27h1v1h-1zM37 27h2v1h-2zM40 27h2v1h-2zM43 27h2v1h-2zM48 27h2v1h-2zM51 27h1v1h-1zM0 28h3v1h-3zM4 28h5v1h-5zM10 28h3v1h-3zM16 28h3v1h-3zM23 28h11v1h-11zM35 28h4v1h-4zM42 28h1v1h-1zM44 28h5v1h-5zM0 29h1v1h-1zM2 29h1v1h-1zM4 29h2v1h-2zM7 29h1v1h-1zM9 29h1v1h-1zM13 29h2v1h-2zM17 29h1v1h-1zM19 29h2v1h-2zM22 29h2v1h-2zM25 29h2v1h-2zM28 29h2v1h-2zM32 29h2v1h-2zM36 29h1v1h-1zM38 29h2v1h-2zM43 29h3v1h-3zM47 29h1v1h-1zM52 29h1v1h-1zM2 30h1v1h-1zM6 30h3v1h-3zM12 30h2v1h-2zM15 30h4v1h-4zM20 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM28 30h3v1h-3zM32 30h2v1h-2zM36 30h1v1h-1zM40 30h2v1h-2zM44 30h5v1h-5zM50 30h1v1h-1zM52 30h1v1h-1zM0 31h3v1h-3zM5 31h1v1h-1zM10 31h1v1h-1zM12 31h2v1h-2zM15 31h2v1h-2zM20 31h1v1h-1zM22 31h1v1h-1zM24 31h1v1h-1zM26 31h1v1h-1zM28 31h1v1h-1zM30 31h1v1h-1zM35 31h1v1h-1zM38 31h2v1h-2zM41 31h1v1h-1zM44 31h3v1h-3zM48 31h2v1h-2zM0 32h2v1h-2zM3 32h1v1h-1zM5 32h2v1h-2zM11 32h1v1h-1zM17 32h3v1h-3zM21 32h7v1h-7zM29 32h1v1h-1zM31 32h1v1h-1zM33 32h1v1h-1zM36 32h1v1h-1zM39 32h2v1h-2zM42 32h1v1h-1zM46 32h1v1h-1zM50 32h1v1h-1zM52 32h1v1h-1zM2 33h3v1h-3zM7 33h1v1h-1zM11 33h2v1h-2zM16 33h1v1h-1zM18 33h4v1h-4zM23 33h3v1h-3zM28 33h1v1h-1zM30 33h2v1h-2zM33 33h1v1h-1zM35 33h3v1h-3zM39 33h2v1h-2zM44 33h1v1h-1zM47 33h1v1h-1zM49 33h2v1h-2zM52 33h1v1h-1zM1 34h1v1h-1zM5 34h3v1h-3zM10 34h3v1h-3zM17 34h3v1h-3zM24 34h3v1h-3zM30 34h2v1h-2zM34 34h1v1h-1zM36 34h1v1h-1zM39 34h1v1h-1zM43 34h1v1h-1zM49 34h2v1h-2zM0 35h2v1h-2zM3 35h1v1h-1zM5 35h1v1h-1zM9 35h1v1h-1zM11 35h3v1h-3zM15 35h1v1h-1zM17 35h1v1h-1zM19 35h2v1h-2zM22 35h2v1h-2zM26 35h1v1h-1zM33 35h1v1h-1zM36 35h3v1h-3zM40 35h1v1h-1zM44 35h1v1h-1zM46 35h1v1h-1zM49 35h2v1h-2zM0 36h3v1h-3zM4 36h1v1h-1zM6 36h2v1h-2zM9 36h2v1h-2zM14 36h1v1h-1zM16 36h1v1h-1zM18 36h1v1h-1zM22 36h2v1h-2zM26 36h3v1h-3zM30 36h1v1h-1zM32 36h3v1h-3zM36 36h3v1h-3zM40 36h1v1h-1zM42 36h1v1h-1zM44 36h1v1h-1zM46 36h4v1h-4zM51 36h2v1h-2zM1 37h5v1h-5zM8 37h2v1h-2zM12 37h1v1h-1zM18 37h1v1h-1zM20 37h1v1h-1zM25 37h2v1h-2zM32 37h3v1h-3zM36 37h1v1h-1zM39 37h3v1h-3zM43 37h2v1h-2zM50 37h2v1h-2zM0 38h2v1h-2zM6 38h1v1h-1zM8 38h2v1h-2zM17 38h1v1h-1zM19 38h2v1h-2zM22 38h3v1h-3zM27 38h1v1h-1zM29 38h1v1h-1zM33 38h6v1h-6zM40 38h2v1h-2zM45 38h2v1h-2zM48 38h2v1h-2zM52 38h1v1h-1zM3 39h1v1h-1zM8 39h5v1h-5zM14 39h2v1h-2zM17 39h1v1h-1zM20 39h1v1h-1zM23 39h1v1h-1zM25 39h1v1h-1zM27 39h1v1h-1zM29 39h1v1h-1zM31 39h2v1h-2zM34 39h3v1h-3zM40 39h3v1h-3zM44 39h4v1h-4zM52 39h1v1h-1zM0 40h1v1h-1zM5 40h3v1h-3zM10 40h1v1h-1zM12 40h1v1h-1zM15 40h1v1h-1zM17 40h2v1h-2zM25 40h2v1h-2zM32 40h1v1h-1zM34 40h4v1h-4zM42 40h2v1h-2zM47 40h6v1h-6zM0 41h3v1h-3zM4 41h2v1h-2zM8 41h1v1h-1zM10 41h1v1h-1zM12 41h4v1h-4zM17 41h2v1h-2zM20 41h1v1h-1zM23 41h1v1h-1zM27 41h1v1h-1zM31 41h1v1h-1zM36 41h1v1h-1zM38 41h4v1h-4zM43 41h3v1h-3zM47 41h1v1h-1zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h4v1h-4zM8 42h1v1h-1zM12 42h1v1h-1zM15 42h1v1h-1zM17 42h3v1h-3zM22 42h1v1h-1zM24 42h1v1h-1zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h1v1h-1zM35 42h1v1h-1zM38 42h3v1h-3zM42 42h2v1h-2zM46 42h1v1h-1zM48 42h1v1h-1zM50 42h1v1h-1zM52 42h1v1h-1zM1 43h2v1h-2zM7 43h5v1h-5zM13 43h2v1h-2zM19 43h4v1h-4zM25 43h1v1h-1zM28 43h3v1h-3zM32 43h1v1h-1zM35 43h1v1h-1zM40 43h4v1h-4zM48 43h2v1h-2zM51 43h2v1h-2zM3 44h1v1h-1zM6 44h4v1h-4zM15 44h4v1h-4zM20 44h1v1h-1zM22 44h7v1h-7zM30 44h2v1h-2zM33 44h2v1h-2zM36 44h1v1h-1zM38 44h5v1h-5zM44 44h5v1h-5zM52 44h1v1h-1zM8 45h3v1h-3zM12 45h3v1h-3zM17 45h2v1h-2zM22 45h1v1h-1zM24 45h1v1h-1zM28 45h1v1h-1zM31 45h3v1h-3zM36 45h2v1h-2zM40 45h2v1h-2zM43 45h2v1h-2zM48 45h2v1h-2zM51 45h1v1h-1zM0 46h7v1h-7zM9 46h2v1h-2zM12 46h2v1h-2zM15 46h8v1h-8zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h3v1h-3zM34 46h1v1h-1zM36 46h2v1h-2zM39 46h3v1h-3zM44 46h1v1h-1zM46 46h1v1h-1zM48 46h4v1h-4zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h1v1h-1zM13 47h2v1h-2zM18 47h1v1h-1zM21 47h2v1h-2zM24 47h1v1h-1zM28 47h1v1h-1zM30 47h5v1h-5zM40 47h1v1h-1zM43 47h2v1h-2zM48 47h4v1h-4zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM9 48h3v1h-3zM13 48h1v1h-1zM16 48h4v1h-4zM21 48h1v1h-1zM24 48h5v1h-5zM31 48h1v1h-1zM33 48h5v1h-5zM40 48h1v1h-1zM42 48h1v1h-1zM44 48h6v1h-6zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h3v1h-3zM12 49h3v1h-3zM21 49h2v1h-2zM25 49h1v1h-1zM28 49h1v1h-1zM32 49h4v1h-4zM37 49h1v1h-1zM39 49h1v1h-1zM41 49h1v1h-1zM43 49h4v1h-4zM48 49h1v1h-1zM50 49h2v1h-2zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM12 50h1v1h-1zM14 50h4v1h-4zM20 50h2v1h-2zM23 50h3v1h-3zM29 50h5v1h-5zM36 50h4v1h-4zM46 50h4v1h-4zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h2v1h-2zM13 51h1v1h-1zM15 51h2v1h-2zM18 51h1v1h-1zM20 51h2v1h-2zM24 51h1v1h-1zM29 51h1v1h-1zM31 51h1v1h-1zM33 51h1v1h-1zM36 51h2v1h-2zM39 51h2v1h-2zM44 51h1v1h-1zM47 51h2v1h-2zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h2v1h-2zM11 52h9v1h-9zM24 52h1v1h-1zM26 52h1v1h-1zM29 52h2v1h-2zM32 52h1v1h-1zM36 52h4v1h-4zM41 52h2v1h-2zM47 52h3v1h-3zM51 52h1v1h-1z"
};
const TELA = 660;
IC.busca = [C_(11, 11, 8), 'm21 21-4.3-4.3'];
IC.termo = ['M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'];
IC.pulso = ['M22 12h-4l-3 9L9 3l-3 9H2'];
SEG['-'] = 'G';
const NTC = {
  B: Math.log(0.649) / (1 / 308.15 - 1 / 298.15),
  R25: 10
};
const esperado = tc => NTC.R25 * Math.exp(NTC.B * (1 / (tc + 273.15) - 1 / 298.15));
const tempDe = r => 1 / (1 / 298.15 + Math.log(r / NTC.R25) / NTC.B) - 273.15;
const n2 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const n1 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});
const KICK = {
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '.12em',
  color: '#334155',
  whiteSpace: 'nowrap'
};
function Status() {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 28,
      padding: '0 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 700,
      color: '#0C2747'
    }
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    style: {
      width: 24,
      height: 11,
      borderRadius: 3,
      background: '#0C2747'
    }
  }));
}
function Topo({
  titulo,
  chip,
  voltar = true,
  children
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 28,
      height: 46,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, voltar && React.createElement("div", {
    style: ST.S21
  }, "\u2039"), React.createElement("div", {
    style: {
      ...ST.S14,
      fontSize: 23,
      lineHeight: 1.2
    }
  }, titulo), chip && React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '8px 9px'
    }
  }, chip), children);
}
const Tag = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    background: 'linear-gradient(180deg,#FFFFFF,#E8EBEF)',
    border: '1px solid #5A6A7E',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1,
    color: '#0C2747',
    whiteSpace: 'nowrap'
  }
}, children);
const Cod = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
    background: '#0C2747',
    color: '#FFFFFF',
    font: `700 13px/1 ${MONO}`
  }
}, children);
const Selo = ({
  cor,
  children
}) => {
  const C = {
    v: ['#14532D', '#DCFCE7', '#15803D'],
    r: ['#7F1D1D', '#FEE2E2', '#B91C1C'],
    m: ['#FFFFFF', '#0C2747', '#081B33']
  }[cor];
  return React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 30,
      padding: '0 11px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      borderRadius: 999,
      background: C[1],
      border: `1.5px solid ${C[2]}`,
      color: C[0],
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, children);
};
function Sintomas({
  A,
  foco
}) {
  const itens = [[GPV + 'img/t04_termometro_nivel.webp', 'Liga, mas não gela', 'Ventila normal, sem frio', 'D-001', ['Convencional e Inverter', 'Refrigeração']], [GPV + 'img/t10_sensor_ntc.webp', 'Split / Inverter para após minutos', 'Perde frio após minutos', 'D-004', ['Inverter', 'Sensor NTC', 'Multímetro']], [GPV + 'img/t01_alicate.webp', 'Compressor desarma no térmico', 'Desliga sozinho após minutos', 'D-002', ['Convencional e Inverter', 'Alicate amperímetro']]];
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "SINTOMAS",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 46,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(Ic, {
    n: "busca",
    s: 20,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: '#334155'
    }
  }, "Buscar sintoma, pe\xE7a ou D-033")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 140,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      lineHeight: 1.2
    }
  }, "SPLIT INVERTER E PLACAS ELETR\xD4NICAS"), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 158,
      bottom: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, itens.map(([img, t, s, c, tags], i) => React.createElement("div", {
    key: c,
    ref: i === 1 ? A.ref('d004') : undefined,
    style: {
      ...CARD,
      flex: 1,
      minHeight: 0,
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 14,
      border: i === 1 && foco > 0 ? '2px solid #22C55E' : CARD.border,
      boxShadow: i === 1 && foco > 0 ? `0 0 0 ${4 * foco}px rgba(34,197,94,.22)` : CARD.boxShadow,
      margin: i === 1 && foco > 0 ? -1 : 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    style: {
      flex: 'none',
      width: 54,
      height: 54,
      borderRadius: 10,
      objectFit: 'cover',
      border: '1.5px solid #2A5C8F'
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      whiteSpace: 'normal'
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 600,
      lineHeight: 1.18
    }
  }, t), React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, s))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, tags.map(g => React.createElement(Tag, {
    key: g
  }, g)), React.createElement("span", {
    style: {
      flex: 1
    }
  }), React.createElement(Cod, null, c))))));
}
function Diagnostico({
  A,
  barra,
  foco
}) {
  const cs = [[70, 'Sensor alterado ou borne oxidado', '1º · 70% MUITO COMUM', 'Sensor NTC e bornes'], [20, 'Capacitor do ventilador fraco', '2º · 20% COMUM', 'Capacitor'], [10, 'Placa Inverter', '3º · 10% MENOS COMUM', 'Placa eletrônica']];
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "DIAGN\xD3STICO",
    chip: "D-004"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 76,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: GPV + "img/t10_sensor_ntc.webp",
    alt: "",
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 9,
      objectFit: 'cover',
      border: '1.5px solid #2A5C8F'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, "Split / Inverter para ap\xF3s minutos"), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, "M\xE1quina aberta \xB7 Inverter"))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 170,
      height: 434,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "pulso",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: KICK
  }, "CAUSAS PROV\xC1VEIS \xB7 1\xBA \u2192 5\xBA")), cs.map(([p, nome, rank, det], i) => React.createElement("div", {
    key: nome,
    ref: i === 0 ? A.ref('causa1') : undefined,
    style: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '72px minmax(0,1fr)',
      gap: 4,
      padding: '14px 12px',
      borderRadius: 10,
      border: i === 0 && foco > 0 ? '2px solid #22C55E' : '2px solid transparent',
      borderTop: i && !(i === 0 && foco > 0) ? '1px solid #E2E8F0' : undefined,
      boxShadow: i === 0 && foco > 0 ? `0 0 0 ${4 * foco}px rgba(34,197,94,.2)` : 'none'
    }
  }, React.createElement("b", {
    style: {
      font: `700 25px/1.1 ${MONO}`
    }
  }, p, "%"), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.15,
      whiteSpace: 'normal'
    }
  }, nome), React.createElement("span", {
    style: {
      height: 8,
      borderRadius: 4,
      background: '#E5E2DC',
      overflow: 'hidden'
    }
  }, React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${p * barra}%`,
      borderRadius: 4,
      background: i === 0 && foco > 0 ? '#15803D' : '#0C2747'
    }
  })), React.createElement("span", {
    style: {
      font: `700 13px/1.2 ${MONO}`,
      color: '#334155',
      letterSpacing: '.02em'
    }
  }, rank), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#1E293B'
    }
  }, det))))));
}
const T_MIN = 15,
  T_MAX = 40;
function Aferir({
  A,
  lido,
  amb,
  fase
}) {
  const esp = esperado(amb);
  const desv = lido == null ? null : (lido - esp) / esp * 100;
  const marca = lido == null ? null : tempDe(lido);
  const bom = fase !== 0 && desv != null && Math.abs(desv) <= 5;
  const lcd = lido == null ? '-.--' : lido.toFixed(2);
  const pct = v => (v - T_MIN) / (T_MAX - T_MIN) * 100;
  const linha = (rot, val, cor) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid rgba(63,50,16,.2)',
      padding: '5px 0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: '#3F3210'
    }
  }, rot), React.createElement("b", {
    style: {
      font: `700 17px/1.2 ${MONO}`,
      color: cor || '#0C2747'
    }
  }, val));
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === 0 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 396,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "termo",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      ...KICK,
      flex: 1,
      color: '#0C2747'
    }
  }, "SENSOR NTC"), fase === 0 ? React.createElement(Selo, {
    cor: "m"
  }, "\u25B8 MEDINDO") : bom ? React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "SENSOR BOM") : React.createElement(Selo, {
    cor: "r"
  }, React.createElement(Ic, {
    n: "fechar",
    s: 12,
    c: "#B91C1C",
    w: 3
  }), "FORA DA CURVA")), React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      border: bom ? '2px solid #22C55E' : ST.S161.border,
      boxShadow: bom ? '0 0 0 4px rgba(34,197,94,.2)' : ST.S161.boxShadow
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, "O SENSOR MARCA"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, React.createElement("b", {
    style: {
      font: `700 44px/1.05 ${MONO}`,
      fontVariantNumeric: 'tabular-nums'
    }
  }, marca == null ? '—' : n1(marca)), React.createElement("span", {
    style: {
      font: `700 16px/1 ${MONO}`
    }
  }, "\xB0C")), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      lineHeight: 1.2,
      color: fase === 0 ? '#334155' : bom ? '#15803D' : '#B91C1C',
      marginBottom: 4
    }
  }, fase === 0 ? '▸ MEDINDO' : bom ? `✓ AMBIENTE ${Math.round(amb)} °C` : `▲ +${n1(marca - amb)} °C DO AMBIENTE`), linha('LIDO', lido == null ? '— kΩ' : n2(lido) + ' kΩ'), linha('ESPERADO', n2(esp) + ' kΩ'), linha('DESVIO', desv == null ? '—' : (desv > 0.05 ? '+' : '') + n1(Math.abs(desv) < 0.05 ? 0 : desv) + '%', desv == null ? null : Math.abs(desv) <= 5 ? '#15803D' : '#7F1D1D')), React.createElement(Multimetro, {
    leitura: lcd,
    h: 168,
    pilula: "20k"
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("span", {
    style: KICK
  }, "TEMPERATURA REAL"), React.createElement("b", {
    style: {
      font: `700 21px/1.2 ${MONO}`
    }
  }, n1(amb), " \xB0C")), React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      margin: '0 14px'
    }
  }, React.createElement("span", {
    ref: A.ref('trilho'),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 14,
      height: 6,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(34)}%`,
      width: `${pct(36) - pct(34)}%`,
      top: 14,
      height: 6,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(amb)}%`,
      top: 2,
      width: 30,
      height: 30,
      marginLeft: -15,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
      border: '3px solid #FFB020',
      boxShadow: '0 2px 5px rgba(9,30,66,.35)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      margin: '-12px 14px 0',
      font: `700 13px/1 ${MONO}`,
      color: '#334155'
    }
  }, [15, 25, 35, 40].map(v => React.createElement("span", {
    key: v,
    style: {
      position: 'absolute',
      left: `${pct(v)}%`,
      transform: v === 40 ? 'translateX(-100%)' : 'translateX(-50%)'
    }
  }, v === 40 ? '40 °C' : v)))), React.createElement("div", {
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 544,
      height: 52,
      gap: 8,
      fontSize: 18
    }
  }, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Servico({
  r,
  nome,
  img,
  v,
  c,
  o = 1,
  y = 0
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      opacity: o,
      transform: `translateY(${y}px)`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S23,
      minHeight: 40,
      height: 40
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
      letterSpacing: '-.01em',
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
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "COBRAR DO CLIENTE \xB7 R$"), React.createElement("div", {
    ref: r,
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, v)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "MEU CUSTO DA PE\xC7A \xB7 R$"), React.createElement("div", {
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, c))));
}
function Ganhos({
  A,
  T,
  p2,
  ent,
  cont,
  boom,
  ch,
  tCh
}) {
  const tot = 260 + 230 * p2,
    custo = 20 * p2,
    lucro = tot - custo,
    marg = Math.round(lucro / tot * 100);
  const lp = n2(lucro).split(',');
  const wP = custo / tot * 100;
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "GANHOS & LAUDO",
    voltar: false
  }, React.createElement("div", {
    ref: A.ref('chave'),
    style: {
      ...ST.S53,
      transform: `scale(${MOTION.press(T, tCh)})`
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
      ...ST.S161,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 96,
      padding: '8px 14px',
      gap: 2
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
      fontSize: 13,
      fontWeight: 600
    }
  }, "N\xBA 1048 \xB7 1 leitura no laudo")), React.createElement("b", {
    style: {
      font: `700 48px/1 ${MONO}`,
      letterSpacing: '-.01em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "R$ ", n2(tot)), React.createElement("span", {
    style: {
      font: `500 13px/1.2 ${MONO}`,
      color: '#334155'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32 \xB7 porte 12K")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 190,
      height: 138,
      transform: `scale(${boom})`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S94,
      position: 'absolute',
      inset: 0,
      padding: '12px 16px',
      gap: 9,
      justifyContent: 'center'
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
      fontSize: 13
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
      fontSize: 25,
      fontWeight: 700
    }
  }, "+R$"), React.createElement("b", {
    style: {
      fontSize: 64,
      fontWeight: 800,
      lineHeight: 0.9,
      fontVariantNumeric: 'tabular-nums'
    }
  }, lp[0]), React.createElement("span", {
    style: {
      fontSize: 27,
      fontWeight: 700
    }
  }, ",", lp[1])), React.createElement("div", {
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
  }, React.createElement("span", null, "PE\xC7A R$ ", n2(custo)), React.createElement("span", null, "TOTAL R$ ", Math.round(tot)))), React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: 15,
      border: '3px solid #22C55E',
      boxShadow: '0 0 14px rgba(34,197,94,.55)',
      opacity: cont,
      pointerEvents: 'none'
    }
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 338,
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
    img: GPV + "img/t10_sensor_ntc.webp",
    nome: "Diagn\xF3stico e Aferi\xE7\xE3o \xD4hmica NTC",
    v: "260,00",
    c: "0,00"
  }), React.createElement(Servico, {
    r: A.ref('cobrar2'),
    img: GPV + "img/t11_bornes_fios.webp",
    nome: "Recupera\xE7\xE3o de Bornes e Conex\xE3o S/N",
    v: n2(230 * p2),
    c: n2(20 * p2),
    o: ent,
    y: (1 - ent) * 14
  })));
}
const ROTD = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.1em',
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
  c
}) {
  const o = MOTION.enter(T, c, c + 0.45);
  const pv = MOTION.pulse(Math.max(0, T - (c + 1.1)), 1.6) * MOTION.enter(T, c + 1.1, c + 1.4);
  const qr = MOTION.enter(T, c + 2.1, c + 2.5);
  const L13 = {
    fontSize: 13,
    lineHeight: 1.25,
    color: '#1E293B'
  };
  return React.createElement("div", {
    "data-screen-label": "Video 01 \xB7 Laudo N\xBA 1048",
    style: {
      position: 'absolute',
      left: -1,
      top: -1,
      width: 392,
      height: TELA + 1,
      zIndex: 60,
      overflow: 'hidden',
      background: `rgba(8,30,56,${o})`,
      fontFamily: DOC,
      color: '#0C2747',
      whiteSpace: 'nowrap'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 17,
      right: 17,
      top: 13,
      bottom: 16,
      padding: 10,
      boxSizing: 'border-box',
      borderRadius: 14,
      background: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(0,0,0,.35)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      opacity: o,
      transform: `translateY(${(1 - o) * 26}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 12,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: BARLOW,
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '.14em'
    }
  }, "BANCADA GELOPRO"), React.createElement("span", {
    style: {
      ...ROTD,
      letterSpacing: '.06em',
      color: '#BFD7F2'
    }
  }, "LAUDO DE APROVA\xC7\xC3O")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 15,
      lineHeight: 1.2
    }
  }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 22px/1.1 ${MONO}`
    }
  }, "N\xBA 1048"))), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Cliente:"), " Pet Shop Amigo"), React.createElement("b", {
    style: {
      font: `700 13px/1.25 ${MONO}`
    }
  }, "LG 12.000 \xB7 R-32")), React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Sintoma:"), " Para ap\xF3s minutos (D-004)"), React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Causa:"), " Borne oxidado na interliga\xE7\xE3o")), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SENSOR NTC 10K"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      height: 26,
      padding: '0 9px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      borderRadius: 999,
      background: '#DCFCE7',
      border: '1.5px solid #15803D',
      color: '#14532D',
      fontSize: 13,
      fontWeight: 700
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "NA CURVA")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, React.createElement("b", {
    style: {
      font: `700 24px/1.1 ${MONO}`
    }
  }, "6,49 k\u03A9"), React.createElement("span", {
    style: {
      font: `700 15px/1 ${MONO}`
    }
  }, "a 35,0 \xB0C")), React.createElement("span", {
    style: L13
  }, "Esperado 6,49 k\u03A9 \xB7 desvio 0,0%"), React.createElement("div", {
    style: {
      position: 'relative',
      height: 12,
      margin: '2px 4px 0'
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 4,
      height: 5,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: '41.7%',
      width: '16.6%',
      top: 4,
      height: 5,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      width: 12,
      height: 12,
      marginLeft: -6,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: '#0C2747',
      border: '2px solid #FFB020'
    }
  }))), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SERVI\xC7OS EXECUTADOS & PREVEN\xC7\xC3O"), [['Diagnóstico e Aferição Ôhmica NTC', 'R$ 260,00'], ['Recuperação de Bornes e Conexão S/N', 'R$ 230,00']].map(([sv, v]) => React.createElement("div", {
    key: sv,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      paddingBottom: 5,
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 13,
      lineHeight: 1.25,
      whiteSpace: 'normal',
      textWrap: 'balance'
    }
  }, sv), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 13px/1.25 ${MONO}`
    }
  }, v))), React.createElement("div", {
    style: {
      position: 'relative',
      background: '#F0FDF4',
      borderLeft: '4px solid #15803D',
      borderRadius: 6,
      padding: '6px 9px',
      color: '#14532D',
      fontSize: 13,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty',
      overflow: 'hidden',
      boxShadow: `0 0 0 ${3 * pv}px rgba(34,197,94,.35)`
    }
  }, React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Preven\xE7\xE3o:"), " Evita troca desnecess\xE1ria da placa eletr\xF4nica (economia de R$ 950 a R$ 1.450).")), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px 8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: qr > 0.01 ? '2px solid #22C55E' : CX.border,
      boxShadow: `0 0 0 ${4 * qr}px rgba(34,197,94,.22)`
    }
  }, React.createElement("svg", {
    width: QR.n * 2.1,
    height: QR.n * 2.1,
    viewBox: `-2 -2 ${QR.n + 4} ${QR.n + 4}`,
    shapeRendering: "crispEdges",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("rect", {
    x: "-2",
    y: "-2",
    width: QR.n + 4,
    height: QR.n + 4,
    fill: "#FFFFFF"
  }), React.createElement("path", {
    d: QR.d,
    fill: "#000000"
  })), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      whiteSpace: 'normal'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "PIX \xB7 VALOR EXATO"), React.createElement("b", {
    style: {
      font: `700 26px/1.1 ${MONO}`
    }
  }, "R$ 490,00"), React.createElement("span", {
    style: {
      borderRadius: 6,
      background: '#15803D',
      color: '#FFFFFF',
      padding: '6px 8px',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, "Responda APROVADO para autorizar o servi\xE7o.")))));
}
function Gancho({
  t,
  o,
  x = 0
}) {
  const g = MOTION.pulse(t, 1.1);
  const zoom = 1 + 0.02 * p01(t, 0, 5.0);
  const selo = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55)) + 0.025 * Math.sin(2 * Math.PI * t / 1.1);
  const l1 = MOTION.enter(t, 0.7, 1.3),
    l2 = MOTION.enter(t, 1.3, 1.9);
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
      backgroundSize: `${p * 100}% 100%`,
      color: tinta(p)
    }
  }, txt);
  return React.createElement("div", {
    "data-screen-label": `Video 01 · Gancho · ${Math.floor(t)}s`,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 90,
      opacity: o,
      transform: `translateX(${x}px)`,
      background: 'radial-gradient(120% 80% at 50% 30%,#14365F 0%,#0C2747 55%,#081B33 100%)',
      color: '#FFFFFF',
      fontFamily: BARLOW,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      top: 28,
      bottom: 40,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
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
  }, "\xB7 DIAGN\xD3STICO")), React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '0 10px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      letterSpacing: '.04em'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      transform: `scale(${zoom})`,
      transformOrigin: '50% 50%'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      width: 220,
      height: 220,
      borderRadius: 44,
      background: '#0E2240',
      border: `9px solid rgba(${Math.round(150 + 50 * g)},28,40,${0.55 + 0.3 * g})`,
      boxShadow: `0 0 ${18 + 28 * g}px rgba(220,38,38,${0.25 + 0.4 * g}),inset 0 0 18px rgba(0,0,0,.45)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("img", {
    src: GPV + "img/t05_placa_pcb.webp",
    alt: "",
    width: "152",
    height: "152",
    style: {
      width: 152,
      height: 152,
      display: 'block',
      borderRadius: 24,
      boxShadow: '0 6px 18px rgba(0,0,0,.45)'
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 54,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
      background: '#B91C1C',
      border: '1px solid #7F1D1D',
      boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * g})`,
      font: "800 24px/1.1 'Barlow Semi Condensed',sans-serif",
      letterSpacing: '.04em',
      whiteSpace: 'nowrap',
      transform: `scale(${selo})`
    }
  }, "\u2715 CONDENAR NO CHUTE")), React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-.005em',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", null, "Parou no sol"), React.createElement("span", null, "de 35 \xB0C?")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1.1
    }
  }, grifo('Crave a causa', l1), grifo('sem chutar placa.', l2)))));
}
const PASSOS = [{
  n: 1,
  urso: GPV + 'img/mascote/m-maos-cintura.webp',
  ar: 731 / 667,
  sobe: 16,
  dir: -35,
  leg: [['No sintoma:'], ['\n'], ['6,49 kΩ', 'v'], [' a 35 °C.'], ['\n'], ['Placa intacta.', 'a']]
}, {
  n: 2,
  urso: GPV + 'img/mascote/m-aponta-cima.webp',
  ar: 693 / 697,
  dir: -35,
  leg: [['Só na sua tela:'], ['\n'], ['veja '], ['+R$ 470', 'a'], ['\n'], ['limpos.', 'a']]
}, {
  n: 3,
  urso: GPV + 'img/mascote/m-joinha.webp',
  ar: 633 / 667,
  desce: 42,
  dir: -30,
  leg: [['Mostre o Laudo:'], ['\n'], ['R$ 490 no Pix', 'a'], ['\n'], ['sem choro.', 'a']]
}];
function Faixa({
  T,
  t0,
  mascote
}) {
  const y = (1 - MOTION.enter(T, t0[0], t0[0] + 0.45)) * 250;
  const ativo = T >= t0[2] ? 2 : T >= t0[1] ? 1 : 0;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: TELA,
      height: 844 - TELA,
      boxSizing: 'border-box',
      zIndex: 80,
      overflow: 'visible',
      background: '#0C2747',
      borderTop: '2px solid #0265DC',
      fontFamily: BARLOW,
      transform: `translateY(${y}px)`
    }
  }, PASSOS.map((p, i) => {
    const ent = MOTION.enter(T, t0[i], t0[i] + 0.3);
    const o = i === ativo ? ent : 0;
    if (o <= 0.001) return null;
    const gp = MOTION.enter(T, t0[i] + 0.45, t0[i] + 1.05);
    return React.createElement(React.Fragment, {
      key: p.n
    }, mascote && React.createElement("img", {
      src: p.urso,
      alt: "",
      style: {
        position: 'absolute',
        right: p.dir ?? -30,
        bottom: p.sobe || -(p.desce || 0),
        zIndex: 30,
        width: 226,
        height: 'auto',
        aspectRatio: String(p.ar),
        display: 'block',
        WebkitMaskImage: p.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        maskImage: p.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        opacity: o,
        transform: `translateY(${(1 - ent) * 18}px)`,
        transformOrigin: '50% 100%'
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 230,
        boxSizing: 'border-box',
        padding: '12px 0 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: o,
        zIndex: 31
      }
    }, React.createElement("span", {
      style: {
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        height: 28,
        padding: '0 11px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#FACC15',
        color: '#0C2747',
        font: `700 14px/1 ${MONO}`,
        letterSpacing: '.12em'
      }
    }, "PASSO ", p.n, " DE 3"), React.createElement("div", {
      style: {
        fontSize: 25.5,
        fontWeight: 800,
        lineHeight: 1.12,
        color: '#FFFFFF',
        whiteSpace: 'nowrap'
      }
    }, p.leg.map(([txt, k], j) => txt === '\n' ? React.createElement("br", {
      key: j
    }) : k ? React.createElement("span", {
      key: j,
      style: {
        padding: '0 4px',
        margin: '0 -1px',
        borderRadius: 4,
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
        backgroundImage: `linear-gradient(${k === 'v' ? '#4ADE80,#4ADE80' : '#FFB020,#FFB020'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${gp * 100}% 100%`,
        color: gp > 0.5 ? '#0C2747' : '#FFFFFF'
      }
    }, txt) : React.createElement("span", {
      key: j
    }, txt)))));
  }));
}
function Piece({
  mao = true,
  mascote = true
}) {
  const {
    T: Treal
  } = useComposition();
  const T = paraBase(Treal);
  const a = W_BASE[1],
    b = W_BASE[2],
    c = W_BASE[3];
  const root = React.useRef(null);
  const A = useAnchors(root);
  const tDiag = a + 2.15,
    tAfer = a + 4.0;
  const tTap1 = a + 1.6,
    tTap2 = tDiag + 1.25;
  const tPega = tAfer + 1.45,
    d0 = tAfer + 1.5,
    d1 = tAfer + 2.3;
  const tCob = b + 1.3,
    v0 = b + 1.45,
    v1 = b + 2.25,
    tCh = c - 0.3;
  const tela = T < tDiag ? 0 : T < tAfer ? 1 : T < b ? 2 : 3;
  const foco1 = MOTION.enter(T, tTap1, tTap1 + 0.3);
  const barra = MOTION.enter(T, tDiag + 0.15, tDiag + 0.85);
  const foco2 = MOTION.enter(T, tDiag + 0.85, tDiag + 1.15);
  const rolo = MOTION.enter(T, tAfer + 0.1, tAfer + 0.9);
  const lido = T < tAfer + 0.1 ? null : lerp(9.5, 6.49, rolo);
  const amb = 25 + 10 * MOTION.enter(T, d0, d1);
  const fase = T < tAfer + 0.9 ? 0 : T < d1 ? 1 : 2;
  const p2 = MOTION.enter(T, v0, v1);
  const ent = MOTION.enter(T, b + 0.4, b + 0.8);
  const cont = MOTION.enter(T, v1, v1 + 0.3);
  const boom = 1 + 0.035 * Math.sin(Math.PI * p01(T, v1 - 0.1, v1 + 0.6));
  const ch = MOTION.enter(T, tCh + 0.05, tCh + 0.35);
  const sai = MOTION.enter(Treal, W_REAL[1], W_REAL[1] + 0.45);
  const fim = MOTION.enter(Treal, W_REAL[4] - 0.4, W_REAL[4]);
  const ganchoO = fim > 0 ? fim : 1 - sai,
    ganchoX = fim > 0 ? 0 : -28 * sai,
    ganchoT = fim > 0 ? 0 : T;
  const telaX = 24 * (1 - sai);
  const tr = A.pos.trilho;
  const knob = v => tr ? {
    x: tr.x - tr.w / 2 + tr.w * (v - T_MIN) / (T_MAX - T_MIN),
    y: tr.y + 2
  } : 'trilho';
  const maoO = (mao ? 1 : 0) * Math.max(MOTION.enter(T, a + 0.45, a + 0.75) * (1 - MOTION.enter(T, d1 + 0.35, d1 + 0.6)), MOTION.enter(T, b + 0.45, b + 0.75) * (1 - MOTION.enter(T, c, c + 0.25)));
  const XF = 0.28,
    tIni = [-1, tDiag, tAfer, b];
  const vis = i => {
    const pi = i === 0 ? 1 : MOTION.enter(Treal, paraReal(tIni[i]), paraReal(tIni[i]) + XF),
      po = i === 3 ? 0 : MOTION.enter(Treal, paraReal(tIni[i + 1]), paraReal(tIni[i + 1]) + XF);
    return {
      position: 'absolute',
      inset: 0,
      opacity: pi * (1 - po)
    };
  };
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      height: 844,
      overflow: 'hidden',
      background: '#0C2747'
    }
  }, React.createElement("div", {
    ref: root,
    "data-screen-label": `Video 01 · ${Math.floor(Treal)}s`,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 390,
      height: TELA,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      ...BG,
      visibility: ganchoO >= 0.999 || T >= c + 0.45 ? 'hidden' : 'visible',
      color: '#0C2747',
      fontFamily: BARLOW,
      transform: `translateX(${telaX}px)`
    }
  }, React.createElement(Status, null), React.createElement("div", {
    style: vis(0)
  }, React.createElement(Sintomas, {
    A: A,
    foco: foco1
  })), React.createElement("div", {
    style: vis(1)
  }, React.createElement(Diagnostico, {
    A: A,
    barra: barra,
    foco: foco2
  })), React.createElement("div", {
    style: vis(2)
  }, React.createElement(Aferir, {
    A: A,
    lido: lido,
    amb: amb,
    fase: fase
  })), React.createElement("div", {
    style: vis(3)
  }, React.createElement(Ganhos, {
    A: A,
    T: T,
    p2: p2,
    ent: ent,
    cont: cont,
    boom: boom,
    ch: ch,
    tCh: tCh
  })), React.createElement(Hand, {
    T: T,
    A: A,
    o: maoO,
    start: {
      x: 320,
      y: 500
    },
    taps: [tTap1, tTap2, tPega, tCob, tCh],
    moves: [{
      s: a + 0.85,
      e: a + 1.5,
      to: 'd004',
      dx: 40,
      dy: 6
    }, {
      s: tDiag + 0.4,
      e: tDiag + 1.1,
      to: 'causa1',
      dx: 60,
      dy: 8
    }, {
      s: tAfer + 0.95,
      e: tAfer + 1.4,
      to: knob(25)
    }, {
      s: d0,
      e: d1,
      to: knob(35)
    }, {
      s: b + 0.5,
      e: b + 1.15,
      to: 'cobrar2',
      dx: 6,
      dy: 4
    }, {
      s: c - 2.25,
      e: c - 0.4,
      to: 'chave',
      dx: 6,
      dy: 6
    }]
  })), T >= c && React.createElement(Laudo, {
    T: T,
    c: c
  }), React.createElement(Faixa, {
    T: T,
    t0: [a, b, c],
    mascote: mascote
  }), ganchoO > 0.001 && React.createElement(Gancho, {
    t: ganchoT,
    o: ganchoO,
    x: ganchoX
  }));
}
  window.GPVerticais.v01 = Piece;
})();

/* ── Video02PinoEletrico · video02-pino-eletrico.jsx · 27,66 s ── */
(function () {
  const GPV = window.GPV_BASE;
  const useComposition = () => React.useContext(window.GPVCtx);
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
    let raf = 0,
      vivo = true;
    const medir = () => {
      if (!vivo) return;
      const root = rootRef.current;
      const ks = Object.keys(els.current);
      if (!root || !root.offsetWidth || !ks.length) {
        raf = requestAnimationFrame(medir);
        return;
      }
      const out = {};
      let ok = true;
      ks.forEach(k => {
        const el = els.current[k];
        let x = 0,
          y = 0,
          e = el;
        while (e && e !== root) {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        if (e !== root || !el.offsetWidth) ok = false;
        out[k] = {
          x: Math.round(x + el.offsetWidth / 2),
          y: Math.round(y + el.offsetHeight / 2),
          w: el.offsetWidth
        };
      });
      if (!ok) {
        raf = requestAnimationFrame(medir);
        return;
      }
      setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
    };
    medir();
    const t1 = setTimeout(medir, 400),
      t2 = setTimeout(medir, 1500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    const ro = typeof ResizeObserver !== 'undefined' && rootRef.current ? new ResizeObserver(() => medir()) : null;
    if (ro) ro.observe(rootRef.current);
    return () => {
      vivo = false;
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      if (ro) ro.disconnect();
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
const TELA = 660;
IC.busca = [C_(11, 11, 8), 'm21 21-4.3-4.3'];
IC.termo = ['M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'];
IC.pulso = ['M22 12h-4l-3 9L9 3l-3 9H2'];
SEG['-'] = 'G';
const NTC = {
  B: Math.log(0.649) / (1 / 308.15 - 1 / 298.15),
  R25: 10
};
const esperado = tc => NTC.R25 * Math.exp(NTC.B * (1 / (tc + 273.15) - 1 / 298.15));
const tempDe = r => 1 / (1 / 298.15 + Math.log(r / NTC.R25) / NTC.B) - 273.15;
const n2 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const n1 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});
const KICK = {
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '.12em',
  color: '#334155',
  whiteSpace: 'nowrap'
};
function Status() {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 28,
      padding: '0 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 700,
      color: '#0C2747'
    }
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    style: {
      width: 24,
      height: 11,
      borderRadius: 3,
      background: '#0C2747'
    }
  }));
}
function Topo({
  titulo,
  chip,
  voltar = true,
  children
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 28,
      height: 46,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, voltar && React.createElement("div", {
    style: ST.S21
  }, "\u2039"), React.createElement("div", {
    style: {
      ...ST.S14,
      fontSize: 23,
      lineHeight: 1.2
    }
  }, titulo), chip && React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '8px 9px'
    }
  }, chip), children);
}
const Tag = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    background: 'linear-gradient(180deg,#FFFFFF,#E8EBEF)',
    border: '1px solid #5A6A7E',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1,
    color: '#0C2747',
    whiteSpace: 'nowrap'
  }
}, children);
const Cod = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
    background: '#0C2747',
    color: '#FFFFFF',
    font: `700 13px/1 ${MONO}`
  }
}, children);
const Selo = ({
  cor,
  children
}) => {
  const C = {
    v: ['#14532D', '#DCFCE7', '#15803D'],
    r: ['#7F1D1D', '#FEE2E2', '#B91C1C'],
    m: ['#FFFFFF', '#0C2747', '#081B33']
  }[cor];
  return React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 30,
      padding: '0 11px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      borderRadius: 999,
      background: C[1],
      border: `1.5px solid ${C[2]}`,
      color: C[0],
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, children);
};
const ROTD = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.1em',
  lineHeight: 1.2,
  color: '#334155'
};
const CX = {
  boxSizing: 'border-box',
  background: '#FFFFFF',
  border: '1.5px solid #A3ACB9',
  borderRadius: 10
};
const T_MIN = 15,
  T_MAX = 40;
function Aferir({
  A,
  lido,
  amb,
  fase
}) {
  const esp = esperado(amb);
  const desv = lido == null ? null : (lido - esp) / esp * 100;
  const marca = lido == null ? null : tempDe(lido);
  const bom = fase !== 0 && desv != null && Math.abs(desv) <= 5;
  const lcd = lido == null ? '-.--' : lido.toFixed(2);
  const pct = v => (v - T_MIN) / (T_MAX - T_MIN) * 100;
  const linha = (rot, val, cor) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid rgba(63,50,16,.2)',
      padding: '5px 0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: '#3F3210'
    }
  }, rot), React.createElement("b", {
    style: {
      font: `700 17px/1.2 ${MONO}`,
      color: cor || '#0C2747'
    }
  }, val));
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === 0 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 396,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "termo",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      ...KICK,
      flex: 1,
      color: '#0C2747'
    }
  }, "SENSOR NTC"), fase === 0 ? React.createElement(Selo, {
    cor: "m"
  }, "\u25B8 MEDINDO") : bom ? React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "SENSOR BOM") : React.createElement(Selo, {
    cor: "r"
  }, React.createElement(Ic, {
    n: "fechar",
    s: 12,
    c: "#B91C1C",
    w: 3
  }), "FORA DA CURVA")), React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      border: bom ? '2px solid #22C55E' : ST.S161.border,
      boxShadow: bom ? '0 0 0 4px rgba(34,197,94,.2)' : ST.S161.boxShadow
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, "O SENSOR MARCA"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, React.createElement("b", {
    style: {
      font: `700 44px/1.05 ${MONO}`,
      fontVariantNumeric: 'tabular-nums'
    }
  }, marca == null ? '—' : n1(marca)), React.createElement("span", {
    style: {
      font: `700 16px/1 ${MONO}`
    }
  }, "\xB0C")), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      lineHeight: 1.2,
      color: fase === 0 ? '#334155' : bom ? '#15803D' : '#B91C1C',
      marginBottom: 4
    }
  }, fase === 0 ? '▸ MEDINDO' : bom ? `✓ AMBIENTE ${Math.round(amb)} °C` : `▲ +${n1(marca - amb)} °C DO AMBIENTE`), linha('LIDO', lido == null ? '— kΩ' : n2(lido) + ' kΩ'), linha('ESPERADO', n2(esp) + ' kΩ'), linha('DESVIO', desv == null ? '—' : (desv > 0.05 ? '+' : '') + n1(Math.abs(desv) < 0.05 ? 0 : desv) + '%', desv == null ? null : Math.abs(desv) <= 5 ? '#15803D' : '#7F1D1D')), React.createElement(Multimetro, {
    leitura: lcd,
    h: 168,
    pilula: "20k"
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("span", {
    style: KICK
  }, "TEMPERATURA REAL"), React.createElement("b", {
    style: {
      font: `700 21px/1.2 ${MONO}`
    }
  }, n1(amb), " \xB0C")), React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      margin: '0 14px'
    }
  }, React.createElement("span", {
    ref: A.ref('trilho'),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 14,
      height: 6,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(34)}%`,
      width: `${pct(36) - pct(34)}%`,
      top: 14,
      height: 6,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(amb)}%`,
      top: 2,
      width: 30,
      height: 30,
      marginLeft: -15,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
      border: '3px solid #FFB020',
      boxShadow: '0 2px 5px rgba(9,30,66,.35)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      margin: '-12px 14px 0',
      font: `700 13px/1 ${MONO}`,
      color: '#334155'
    }
  }, [15, 25, 35, 40].map(v => React.createElement("span", {
    key: v,
    style: {
      position: 'absolute',
      left: `${pct(v)}%`,
      transform: v === 40 ? 'translateX(-100%)' : 'translateX(-50%)'
    }
  }, v === 40 ? '40 °C' : v)))), React.createElement("div", {
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 544,
      height: 52,
      gap: 8,
      fontSize: 18
    }
  }, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Servico({
  r,
  nome,
  img,
  v,
  c,
  o = 1,
  y = 0
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      opacity: o,
      transform: `translateY(${y}px)`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S23,
      minHeight: 40,
      height: 40
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
      letterSpacing: '-.01em',
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
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "COBRAR DO CLIENTE \xB7 R$"), React.createElement("div", {
    ref: r,
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, v)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "MEU CUSTO DA PE\xC7A \xB7 R$"), React.createElement("div", {
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, c))));
}
IC.alerta = ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'];
IC.escudo = ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'];
IC.gas = [R_(7, 6, 10, 16, 4), 'M10 6V3h4v3', 'M7 12h10'];
const BTN_R = css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#DC4545 0%,#C22D2D 45%,#9B1C1C 100%);border:1px solid #7F1D1D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #7F1D1D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em");
const XF = 0.28;
const visTela = (T, tIni, i) => {
  const pi = i === 0 ? 1 : MOTION.enter(T, tIni[i], tIni[i] + XF),
    po = i === tIni.length - 1 ? 0 : MOTION.enter(T, tIni[i + 1], tIni[i + 1] + XF);
  return {
    position: 'absolute',
    inset: 0,
    opacity: pi * (1 - po)
  };
};
const costura = (T, a, D) => {
  const sai = MOTION.enter(T, a, a + 0.45),
    fim = MOTION.enter(T, D - 0.4, D);
  return {
    o: fim > 0 ? fim : 1 - sai,
    x: fim > 0 ? 0 : -28 * sai,
    t: fim > 0 ? 0 : T,
    telaX: 24 * (1 - sai)
  };
};
function Abas({
  ativa,
  p = 1
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === ativa && p > 0.5 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t)));
}
function Mandar({
  r,
  T,
  t,
  feito
}) {
  return React.createElement("div", {
    ref: r,
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      gap: 8,
      fontSize: 18,
      height: 52,
      transform: `scale(${MOTION.press(T, t)})`
    }
  }, feito ? React.createElement(React.Fragment, null, React.createElement(Ic, {
    n: "ok",
    s: 20,
    c: "#FFFFFF",
    w: 3
  }), "ENVIADO PARA O LAUDO") : React.createElement(React.Fragment, null, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Sintomas({
  A,
  foco,
  alvo = 1
}) {
  const itens = [[GPV + 'img/t04_termometro_nivel.webp', 'Liga, mas não gela', 'Ventila normal, sem frio', 'D-001', ['Convencional e Inverter', 'Refrigeração']], [GPV + 'img/t10_sensor_ntc.webp', 'Split / Inverter para após minutos', 'Perde frio após minutos', 'D-004', ['Inverter', 'Sensor NTC', 'Multímetro']], [GPV + 'img/t01_alicate.webp', 'Compressor desarma no térmico', 'Desliga sozinho após minutos', 'D-002', ['Convencional e Inverter', 'Alicate amperímetro']]];
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "SINTOMAS",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 46,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(Ic, {
    n: "busca",
    s: 20,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: '#334155'
    }
  }, "Buscar sintoma, pe\xE7a ou D-033")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 140,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      lineHeight: 1.2
    }
  }, "SPLIT INVERTER E PLACAS ELETR\xD4NICAS"), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 158,
      bottom: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, itens.map(([img, t, s, c, tags], i) => {
    const on = i === alvo && foco > 0;
    return React.createElement("div", {
      key: c,
      ref: i === alvo ? A.ref('alvo') : undefined,
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 14,
        border: on ? '2px solid #22C55E' : CARD.border,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.22)` : CARD.boxShadow,
        margin: on ? -1 : 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("img", {
      src: img,
      alt: "",
      style: {
        flex: 'none',
        width: 54,
        height: 54,
        borderRadius: 10,
        objectFit: 'cover',
        border: '1.5px solid #2A5C8F'
      }
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        whiteSpace: 'normal'
      }
    }, React.createElement("b", {
      style: {
        fontSize: 19.5,
        fontWeight: 600,
        lineHeight: 1.18
      }
    }, t), React.createElement("span", {
      style: {
        fontSize: 15.5,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#334155'
      }
    }, s))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, tags.map(g => React.createElement(Tag, {
      key: g
    }, g)), React.createElement("span", {
      style: {
        flex: 1
      }
    }), React.createElement(Cod, null, c)));
  })));
}
function Diagnostico({
  A,
  barra,
  foco,
  chip,
  titulo,
  sub,
  img,
  cs
}) {
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "DIAGN\xD3STICO",
    chip: chip
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 76,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 9,
      objectFit: 'cover',
      border: '1.5px solid #2A5C8F'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, sub))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 170,
      height: 434,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "pulso",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: KICK
  }, "CAUSAS PROV\xC1VEIS \xB7 1\xBA \u2192 5\xBA")), cs.map(([p, nome, rank, det], i) => {
    const on = i === 0 && foco > 0;
    return React.createElement("div", {
      key: nome,
      ref: i === 0 ? A.ref('causa1') : undefined,
      style: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '72px minmax(0,1fr)',
        gap: 4,
        padding: '11px 12px',
        borderRadius: 10,
        border: on ? '2px solid #22C55E' : '2px solid transparent',
        borderTop: i && !on ? '1px solid #E2E8F0' : undefined,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.2)` : 'none'
      }
    }, React.createElement("b", {
      style: {
        font: `700 25px/1.1 ${MONO}`
      }
    }, p, "%"), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, React.createElement("b", {
      style: {
        minWidth: 0,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.15,
        whiteSpace: 'normal'
      }
    }, nome), React.createElement("span", {
      style: {
        height: 8,
        borderRadius: 4,
        background: '#E5E2DC',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        display: 'block',
        height: '100%',
        width: `${p * barra}%`,
        borderRadius: 4,
        background: on ? '#15803D' : '#0C2747'
      }
    })), React.createElement("span", {
      style: {
        font: `700 13px/1.2 ${MONO}`,
        color: '#334155',
        letterSpacing: '.02em'
      }
    }, rank), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.25,
        color: '#1E293B',
        whiteSpace: 'normal',
        textWrap: 'pretty'
      }
    }, det)));
  })));
}
function LaudoDoc({
  T,
  c,
  num,
  label,
  cliente,
  equip,
  equipExtra,
  linhas,
  servicos,
  prev,
  qr,
  valor,
  children
}) {
  const o = MOTION.enter(T, c, c + 0.45);
  const pv = MOTION.pulse(Math.max(0, T - (c + 1.1)), 1.6) * MOTION.enter(T, c + 1.1, c + 1.4);
  const qo = MOTION.enter(T, c + 2.1, c + 2.5);
  const L13 = {
    fontSize: 13,
    lineHeight: 1.25,
    color: '#1E293B',
    whiteSpace: 'normal'
  };
  return React.createElement("div", {
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: -1,
      top: -1,
      width: 392,
      height: TELA + 1,
      zIndex: 60,
      overflow: 'hidden',
      background: `rgba(8,30,56,${o})`,
      fontFamily: DOC,
      color: '#0C2747',
      whiteSpace: 'nowrap'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 17,
      right: 17,
      top: 13,
      bottom: 16,
      padding: 10,
      boxSizing: 'border-box',
      borderRadius: 14,
      background: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(0,0,0,.35)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      opacity: o,
      transform: `translateY(${(1 - o) * 26}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 12,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: BARLOW,
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '.12em'
    }
  }, "BANCADA GELOPRO"), React.createElement("span", {
    style: {
      ...ROTD,
      letterSpacing: '.04em',
      color: '#BFD7F2'
    }
  }, "LAUDO DE APROVA\xC7\xC3O")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 15,
      lineHeight: 1.2
    }
  }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 22px/1.1 ${MONO}`
    }
  }, "N\xBA ", num))), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      ...L13,
      whiteSpace: 'nowrap'
    }
  }, React.createElement("b", null, "Cliente:"), " ", cliente), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 12px/1.25 ${MONO}`
    }
  }, equip)), equipExtra && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Sintoma:"), " Diagn\xF3stico na bancada"), React.createElement("b", {
    style: {
      flex: 'none',
      fontSize: 13,
      lineHeight: 1.25
    }
  }, equipExtra)), linhas.map(([k, v]) => React.createElement("span", {
    key: k,
    style: L13
  }, React.createElement("b", null, k, ":"), " ", v))), children, React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SERVI\xC7OS EXECUTADOS & PREVEN\xC7\xC3O"), servicos.map(([sv, v]) => React.createElement("div", {
    key: sv,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      paddingBottom: 5,
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 13,
      lineHeight: 1.25,
      whiteSpace: 'normal',
      textWrap: 'balance'
    }
  }, sv), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 13px/1.25 ${MONO}`
    }
  }, v))), React.createElement("div", {
    style: {
      position: 'relative',
      background: '#F0FDF4',
      borderLeft: '4px solid #15803D',
      borderRadius: 6,
      padding: '6px 9px',
      color: '#14532D',
      fontSize: 13,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty',
      overflow: 'hidden',
      boxShadow: `0 0 0 ${3 * pv}px rgba(34,197,94,.35)`
    }
  }, React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Preven\xE7\xE3o:"), " ", prev)), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px 8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: qo > 0.01 ? '2px solid #22C55E' : CX.border,
      boxShadow: `0 0 0 ${4 * qo}px rgba(34,197,94,.22)`
    }
  }, React.createElement("svg", {
    width: qr.n * 2.1,
    height: qr.n * 2.1,
    viewBox: `-2 -2 ${qr.n + 4} ${qr.n + 4}`,
    shapeRendering: "crispEdges",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("rect", {
    x: "-2",
    y: "-2",
    width: qr.n + 4,
    height: qr.n + 4,
    fill: "#FFFFFF"
  }), React.createElement("path", {
    d: qr.d,
    fill: "#000000"
  })), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      whiteSpace: 'normal'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "PIX \xB7 VALOR EXATO"), React.createElement("b", {
    style: {
      font: `700 26px/1.1 ${MONO}`
    }
  }, valor), React.createElement("span", {
    style: {
      borderRadius: 6,
      background: '#15803D',
      color: '#FFFFFF',
      padding: '6px 8px',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, "Responda APROVADO para autorizar o servi\xE7o.")))));
}
const SeloDoc = ({
  ok,
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 24,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    borderRadius: 999,
    background: ok ? '#DCFCE7' : '#FEE2E2',
    border: `1.5px solid ${ok ? '#15803D' : '#B91C1C'}`,
    color: ok ? '#14532D' : '#7F1D1D',
    fontFamily: DOC,
    fontSize: 12,
    fontWeight: 700
  }
}, React.createElement(Ic, {
  n: ok ? 'ok' : 'fechar',
  s: 12,
  c: ok ? '#15803D' : '#B91C1C',
  w: 3
}), children);
function Gravado({
  T,
  t,
  titulo,
  sub,
  children
}) {
  const o = MOTION.enter(T, t, t + 0.45);
  if (o <= 0.001) return null;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40,
      background: `rgba(8,30,56,${0.62 * o})`
    }
  }, React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: o,
      transform: `translateY(${(1 - o) * 40}px)`,
      boxShadow: '0 10px 30px rgba(0,0,0,.35)'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 10,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: '#15803D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 18,
    c: "#FFFFFF",
    w: 3
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '.06em',
      lineHeight: 1.1
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#BFD7F2'
    }
  }, sub))), children));
}
function Registro({
  rot,
  val,
  extra,
  selo,
  o = 1
}) {
  return React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      gap: 4,
      opacity: o,
      transform: `translateY(${(1 - o) * 10}px)`
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
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, rot), React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), selo)), React.createElement("b", {
    style: {
      font: `700 22px/1.15 ${MONO}`
    }
  }, val), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.25,
      color: '#334155',
      whiteSpace: 'normal'
    }
  }, extra));
}
function Gancho({
  t,
  o,
  x = 0,
  k = 1,
  dur = 5,
  img,
  h1,
  g,
  aviso,
  label
}) {
  const pz = MOTION.pulse(t, 1.1);
  const zoom = 1 + 0.02 * p01(t, 0, dur);
  const sc = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55)) + 0.025 * Math.sin(2 * Math.PI * t / 1.1);
  const l1 = MOTION.enter(t, 0.7 * k, 1.3 * k),
    l2 = MOTION.enter(t, 1.3 * k, 1.9 * k);
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
      backgroundSize: `${p * 100}% 100%`,
      color: tinta(p)
    }
  }, txt);
  return React.createElement("div", {
    "data-screen-label": `${label} · Gancho · ${Math.floor(t)}s`,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 90,
      opacity: o,
      transform: `translateX(${x}px)`,
      background: 'radial-gradient(120% 80% at 50% 30%,#14365F 0%,#0C2747 55%,#081B33 100%)',
      color: '#FFFFFF',
      fontFamily: BARLOW,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      top: 28,
      bottom: 40,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
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
  }, "\xB7 DIAGN\xD3STICO")), React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '0 10px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      letterSpacing: '.04em'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      transform: `scale(${zoom})`,
      transformOrigin: '50% 50%'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      width: 220,
      height: 220,
      borderRadius: 44,
      background: '#0E2240',
      border: `9px solid rgba(${Math.round(150 + 50 * pz)},28,40,${0.55 + 0.3 * pz})`,
      boxShadow: `0 0 ${18 + 28 * pz}px rgba(220,38,38,${0.25 + 0.4 * pz}),inset 0 0 18px rgba(0,0,0,.45)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    width: "152",
    height: "152",
    style: {
      width: 152,
      height: 152,
      display: 'block',
      borderRadius: 24,
      boxShadow: '0 6px 18px rgba(0,0,0,.45)'
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 54,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
      background: '#B91C1C',
      border: '1px solid #7F1D1D',
      boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * pz})`,
      font: "800 24px/1.1 'Barlow Semi Condensed',sans-serif",
      letterSpacing: '.04em',
      whiteSpace: 'nowrap',
      transform: `scale(${sc})`
    }
  }, aviso)), React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-.005em',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", null, h1[0]), React.createElement("span", null, h1[1])), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1.1
    }
  }, grifo(g[0], l1), grifo(g[1], l2)))));
}
const URSOS = [{
  urso: GPV + 'img/mascote/m-maos-cintura.webp',
  ar: 731 / 667,
  sobe: 16,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-aponta-cima.webp',
  ar: 693 / 697,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-joinha.webp',
  ar: 633 / 667,
  desce: 42,
  dir: -30
}];
function Faixa({
  T,
  t0,
  mascote,
  legs,
  dirs = []
}) {
  const y = (1 - MOTION.enter(T, t0[0], t0[0] + 0.45)) * 250;
  const ativo = T >= t0[2] ? 2 : T >= t0[1] ? 1 : 0;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: TELA,
      height: 844 - TELA,
      boxSizing: 'border-box',
      zIndex: 80,
      overflow: 'visible',
      background: '#0C2747',
      borderTop: '2px solid #0265DC',
      fontFamily: BARLOW,
      transform: `translateY(${y}px)`
    }
  }, URSOS.map((u, i) => {
    const ent = MOTION.enter(T, t0[i], t0[i] + 0.3);
    const o = i === ativo ? ent : 0;
    if (o <= 0.001) return null;
    const gp = MOTION.enter(T, t0[i] + 0.45, t0[i] + 1.05);
    return React.createElement(React.Fragment, {
      key: i
    }, mascote && React.createElement("img", {
      src: u.urso,
      alt: "",
      style: {
        position: 'absolute',
        right: dirs[i] ?? u.dir,
        bottom: u.sobe || -(u.desce || 0),
        zIndex: 30,
        width: 226,
        height: 'auto',
        aspectRatio: String(u.ar),
        display: 'block',
        WebkitMaskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        maskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        opacity: o,
        transform: `translateY(${(1 - ent) * 18}px)`,
        transformOrigin: '50% 100%'
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 230,
        boxSizing: 'border-box',
        padding: '12px 0 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: o,
        zIndex: 31
      }
    }, React.createElement("span", {
      style: {
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        height: 28,
        padding: '0 11px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#FACC15',
        color: '#0C2747',
        font: `700 14px/1 ${MONO}`,
        letterSpacing: '.12em'
      }
    }, "PASSO ", i + 1, " DE 3"), React.createElement("div", {
      style: {
        fontSize: 25.5,
        fontWeight: 800,
        lineHeight: 1.12,
        color: '#FFFFFF',
        whiteSpace: 'nowrap'
      }
    }, legs[i].map(([txt, k], j) => txt === '\n' ? React.createElement("br", {
      key: j
    }) : k ? React.createElement("span", {
      key: j,
      style: {
        padding: '0 4px',
        margin: '0 -1px',
        borderRadius: 4,
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
        backgroundImage: `linear-gradient(${k === 'v' ? '#4ADE80,#4ADE80' : '#FFB020,#FFB020'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${gp * 100}% 100%`,
        color: gp > 0.5 ? '#0C2747' : '#FFFFFF'
      }
    }, txt) : React.createElement("span", {
      key: j
    }, txt)))));
  }));
}
function Palco({
  rootRef,
  label,
  oculto,
  telaX,
  children
}) {
  return React.createElement("div", {
    ref: rootRef,
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 390,
      height: TELA,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      ...BG,
      visibility: oculto ? 'hidden' : 'visible',
      color: '#0C2747',
      fontFamily: BARLOW,
      transform: `translateX(${telaX}px)`
    }
  }, React.createElement(Status, null), children);
}
const QR1049 = {
  "n": 53,
  "d": "M0 0h7v1h-7zM9 0h1v1h-1zM11 0h2v1h-2zM14 0h2v1h-2zM17 0h3v1h-3zM21 0h2v1h-2zM24 0h1v1h-1zM26 0h3v1h-3zM30 0h1v1h-1zM33 0h3v1h-3zM38 0h1v1h-1zM40 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h1v1h-1zM10 1h1v1h-1zM15 1h1v1h-1zM17 1h1v1h-1zM20 1h2v1h-2zM30 1h2v1h-2zM34 1h1v1h-1zM36 1h1v1h-1zM38 1h2v1h-2zM41 1h3v1h-3zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM12 2h2v1h-2zM15 2h2v1h-2zM18 2h2v1h-2zM22 2h1v1h-1zM24 2h1v1h-1zM26 2h1v1h-1zM30 2h1v1h-1zM34 2h1v1h-1zM36 2h4v1h-4zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM11 3h1v1h-1zM13 3h2v1h-2zM18 3h1v1h-1zM24 3h1v1h-1zM28 3h1v1h-1zM30 3h2v1h-2zM34 3h2v1h-2zM37 3h1v1h-1zM39 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h1v1h-1zM11 4h1v1h-1zM13 4h1v1h-1zM16 4h1v1h-1zM19 4h1v1h-1zM24 4h7v1h-7zM33 4h2v1h-2zM36 4h3v1h-3zM41 4h2v1h-2zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM10 5h1v1h-1zM12 5h2v1h-2zM17 5h2v1h-2zM23 5h2v1h-2zM28 5h2v1h-2zM31 5h1v1h-1zM33 5h2v1h-2zM37 5h2v1h-2zM42 5h1v1h-1zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM11 7h1v1h-1zM13 7h1v1h-1zM19 7h2v1h-2zM23 7h2v1h-2zM28 7h2v1h-2zM31 7h1v1h-1zM33 7h1v1h-1zM35 7h1v1h-1zM38 7h1v1h-1zM40 7h1v1h-1zM43 7h1v1h-1zM0 8h1v1h-1zM2 8h1v1h-1zM4 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM13 8h2v1h-2zM22 8h7v1h-7zM31 8h1v1h-1zM35 8h2v1h-2zM38 8h1v1h-1zM40 8h3v1h-3zM44 8h1v1h-1zM48 8h1v1h-1zM51 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM9 9h6v1h-6zM17 9h4v1h-4zM22 9h2v1h-2zM25 9h1v1h-1zM31 9h3v1h-3zM39 9h1v1h-1zM41 9h1v1h-1zM45 9h1v1h-1zM47 9h1v1h-1zM49 9h1v1h-1zM52 9h1v1h-1zM2 10h3v1h-3zM6 10h2v1h-2zM9 10h2v1h-2zM15 10h1v1h-1zM17 10h2v1h-2zM20 10h1v1h-1zM22 10h1v1h-1zM24 10h1v1h-1zM26 10h3v1h-3zM30 10h2v1h-2zM33 10h1v1h-1zM35 10h2v1h-2zM40 10h2v1h-2zM43 10h3v1h-3zM48 10h2v1h-2zM52 10h1v1h-1zM7 11h1v1h-1zM9 11h2v1h-2zM12 11h8v1h-8zM22 11h1v1h-1zM25 11h1v1h-1zM29 11h1v1h-1zM34 11h1v1h-1zM39 11h2v1h-2zM43 11h3v1h-3zM47 11h1v1h-1zM51 11h1v1h-1zM0 12h2v1h-2zM3 12h4v1h-4zM8 12h2v1h-2zM12 12h2v1h-2zM17 12h2v1h-2zM20 12h6v1h-6zM28 12h5v1h-5zM34 12h7v1h-7zM43 12h1v1h-1zM45 12h4v1h-4zM52 12h1v1h-1zM0 13h2v1h-2zM3 13h1v1h-1zM5 13h1v1h-1zM8 13h2v1h-2zM12 13h1v1h-1zM14 13h4v1h-4zM19 13h1v1h-1zM21 13h1v1h-1zM23 13h1v1h-1zM25 13h1v1h-1zM28 13h2v1h-2zM32 13h1v1h-1zM35 13h3v1h-3zM43 13h1v1h-1zM49 13h2v1h-2zM52 13h1v1h-1zM3 14h5v1h-5zM10 14h1v1h-1zM13 14h3v1h-3zM17 14h1v1h-1zM22 14h2v1h-2zM26 14h1v1h-1zM28 14h4v1h-4zM34 14h1v1h-1zM36 14h2v1h-2zM43 14h1v1h-1zM45 14h1v1h-1zM47 14h4v1h-4zM52 14h1v1h-1zM0 15h2v1h-2zM3 15h1v1h-1zM5 15h1v1h-1zM7 15h1v1h-1zM10 15h5v1h-5zM17 15h1v1h-1zM20 15h1v1h-1zM23 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM34 15h4v1h-4zM40 15h1v1h-1zM43 15h1v1h-1zM47 15h1v1h-1zM49 15h1v1h-1zM51 15h1v1h-1zM0 16h3v1h-3zM4 16h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM12 16h2v1h-2zM15 16h1v1h-1zM19 16h1v1h-1zM22 16h1v1h-1zM24 16h2v1h-2zM27 16h2v1h-2zM31 16h2v1h-2zM35 16h2v1h-2zM38 16h1v1h-1zM40 16h2v1h-2zM43 16h1v1h-1zM46 16h4v1h-4zM52 16h1v1h-1zM0 17h1v1h-1zM2 17h2v1h-2zM5 17h1v1h-1zM9 17h2v1h-2zM14 17h3v1h-3zM18 17h2v1h-2zM22 17h2v1h-2zM28 17h1v1h-1zM34 17h4v1h-4zM41 17h1v1h-1zM45 17h1v1h-1zM47 17h3v1h-3zM1 18h1v1h-1zM3 18h2v1h-2zM6 18h2v1h-2zM13 18h1v1h-1zM16 18h3v1h-3zM21 18h1v1h-1zM23 18h1v1h-1zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h2v1h-2zM34 18h2v1h-2zM37 18h1v1h-1zM40 18h2v1h-2zM44 18h2v1h-2zM47 18h3v1h-3zM51 18h2v1h-2zM4 19h1v1h-1zM8 19h5v1h-5zM16 19h2v1h-2zM21 19h2v1h-2zM27 19h1v1h-1zM32 19h1v1h-1zM35 19h2v1h-2zM40 19h1v1h-1zM42 19h1v1h-1zM44 19h2v1h-2zM48 19h1v1h-1zM51 19h1v1h-1zM0 20h2v1h-2zM4 20h1v1h-1zM6 20h1v1h-1zM9 20h2v1h-2zM12 20h1v1h-1zM15 20h4v1h-4zM20 20h2v1h-2zM24 20h1v1h-1zM26 20h1v1h-1zM29 20h4v1h-4zM35 20h2v1h-2zM38 20h1v1h-1zM40 20h1v1h-1zM42 20h2v1h-2zM45 20h2v1h-2zM48 20h1v1h-1zM50 20h1v1h-1zM52 20h1v1h-1zM1 21h1v1h-1zM3 21h1v1h-1zM7 21h1v1h-1zM9 21h2v1h-2zM13 21h2v1h-2zM16 21h2v1h-2zM20 21h2v1h-2zM23 21h2v1h-2zM27 21h1v1h-1zM29 21h1v1h-1zM31 21h3v1h-3zM36 21h2v1h-2zM40 21h1v1h-1zM43 21h1v1h-1zM45 21h1v1h-1zM49 21h2v1h-2zM52 21h1v1h-1zM0 22h1v1h-1zM2 22h1v1h-1zM4 22h1v1h-1zM6 22h1v1h-1zM9 22h1v1h-1zM14 22h1v1h-1zM16 22h1v1h-1zM20 22h1v1h-1zM24 22h1v1h-1zM26 22h2v1h-2zM29 22h1v1h-1zM32 22h1v1h-1zM35 22h3v1h-3zM40 22h1v1h-1zM42 22h1v1h-1zM47 22h4v1h-4zM52 22h1v1h-1zM0 23h1v1h-1zM4 23h1v1h-1zM7 23h1v1h-1zM10 23h1v1h-1zM13 23h1v1h-1zM15 23h1v1h-1zM17 23h1v1h-1zM19 23h2v1h-2zM24 23h1v1h-1zM27 23h2v1h-2zM30 23h3v1h-3zM34 23h2v1h-2zM37 23h1v1h-1zM40 23h1v1h-1zM47 23h2v1h-2zM52 23h1v1h-1zM1 24h1v1h-1zM4 24h5v1h-5zM11 24h1v1h-1zM13 24h2v1h-2zM16 24h4v1h-4zM21 24h2v1h-2zM24 24h5v1h-5zM30 24h4v1h-4zM35 24h2v1h-2zM40 24h1v1h-1zM42 24h7v1h-7zM50 24h1v1h-1zM52 24h1v1h-1zM2 25h1v1h-1zM4 25h1v1h-1zM8 25h1v1h-1zM10 25h2v1h-2zM13 25h1v1h-1zM15 25h2v1h-2zM19 25h2v1h-2zM22 25h1v1h-1zM24 25h1v1h-1zM28 25h1v1h-1zM32 25h1v1h-1zM35 25h1v1h-1zM40 25h2v1h-2zM44 25h1v1h-1zM48 25h2v1h-2zM51 25h2v1h-2zM0 26h1v1h-1zM2 26h1v1h-1zM4 26h1v1h-1zM6 26h1v1h-1zM8 26h6v1h-6zM16 26h3v1h-3zM22 26h3v1h-3zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h1v1h-1zM32 26h1v1h-1zM37 26h1v1h-1zM40 26h2v1h-2zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM50 26h3v1h-3zM0 27h1v1h-1zM2 27h3v1h-3zM8 27h1v1h-1zM11 27h2v1h-2zM16 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM28 27h3v1h-3zM35 27h1v1h-1zM37 27h2v1h-2zM40 27h2v1h-2zM43 27h2v1h-2zM48 27h2v1h-2zM51 27h1v1h-1zM0 28h1v1h-1zM2 28h1v1h-1zM4 28h5v1h-5zM11 28h3v1h-3zM16 28h4v1h-4zM22 28h9v1h-9zM32 28h5v1h-5zM38 28h1v1h-1zM40 28h1v1h-1zM42 28h8v1h-8zM52 28h1v1h-1zM0 29h1v1h-1zM4 29h1v1h-1zM7 29h5v1h-5zM13 29h1v1h-1zM16 29h1v1h-1zM19 29h1v1h-1zM22 29h1v1h-1zM25 29h1v1h-1zM28 29h1v1h-1zM33 29h1v1h-1zM35 29h2v1h-2zM39 29h1v1h-1zM41 29h1v1h-1zM43 29h1v1h-1zM45 29h1v1h-1zM50 29h1v1h-1zM52 29h1v1h-1zM0 30h1v1h-1zM2 30h1v1h-1zM6 30h1v1h-1zM12 30h2v1h-2zM15 30h4v1h-4zM20 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM28 30h3v1h-3zM32 30h2v1h-2zM36 30h1v1h-1zM40 30h2v1h-2zM44 30h5v1h-5zM50 30h1v1h-1zM52 30h1v1h-1zM0 31h1v1h-1zM2 31h1v1h-1zM4 31h2v1h-2zM12 31h5v1h-5zM19 31h2v1h-2zM24 31h3v1h-3zM30 31h2v1h-2zM34 31h2v1h-2zM37 31h5v1h-5zM43 31h3v1h-3zM48 31h1v1h-1zM52 31h1v1h-1zM0 32h1v1h-1zM2 32h2v1h-2zM6 32h1v1h-1zM8 32h1v1h-1zM11 32h2v1h-2zM14 32h1v1h-1zM18 32h5v1h-5zM24 32h2v1h-2zM27 32h1v1h-1zM31 32h3v1h-3zM35 32h2v1h-2zM38 32h5v1h-5zM44 32h1v1h-1zM46 32h2v1h-2zM52 32h1v1h-1zM0 33h5v1h-5zM7 33h1v1h-1zM11 33h2v1h-2zM16 33h1v1h-1zM18 33h4v1h-4zM23 33h3v1h-3zM28 33h1v1h-1zM30 33h2v1h-2zM33 33h1v1h-1zM35 33h3v1h-3zM39 33h2v1h-2zM44 33h1v1h-1zM47 33h1v1h-1zM49 33h2v1h-2zM52 33h1v1h-1zM4 34h3v1h-3zM10 34h4v1h-4zM16 34h2v1h-2zM22 34h1v1h-1zM24 34h1v1h-1zM26 34h1v1h-1zM28 34h1v1h-1zM30 34h1v1h-1zM36 34h2v1h-2zM39 34h2v1h-2zM46 34h1v1h-1zM50 34h1v1h-1zM52 34h1v1h-1zM0 35h4v1h-4zM8 35h2v1h-2zM13 35h3v1h-3zM17 35h1v1h-1zM19 35h1v1h-1zM22 35h1v1h-1zM29 35h1v1h-1zM32 35h2v1h-2zM35 35h3v1h-3zM40 35h2v1h-2zM46 35h2v1h-2zM49 35h1v1h-1zM0 36h2v1h-2zM5 36h3v1h-3zM9 36h1v1h-1zM14 36h1v1h-1zM16 36h2v1h-2zM22 36h2v1h-2zM26 36h3v1h-3zM30 36h1v1h-1zM32 36h3v1h-3zM36 36h3v1h-3zM40 36h1v1h-1zM42 36h1v1h-1zM44 36h1v1h-1zM46 36h4v1h-4zM51 36h2v1h-2zM2 37h3v1h-3zM7 37h2v1h-2zM12 37h2v1h-2zM16 37h1v1h-1zM20 37h1v1h-1zM22 37h1v1h-1zM26 37h1v1h-1zM28 37h1v1h-1zM31 37h3v1h-3zM36 37h2v1h-2zM39 37h1v1h-1zM41 37h1v1h-1zM44 37h1v1h-1zM46 37h1v1h-1zM49 37h4v1h-4zM0 38h1v1h-1zM3 38h1v1h-1zM6 38h1v1h-1zM9 38h1v1h-1zM11 38h1v1h-1zM13 38h2v1h-2zM19 38h1v1h-1zM22 38h1v1h-1zM24 38h1v1h-1zM26 38h2v1h-2zM32 38h3v1h-3zM36 38h2v1h-2zM40 38h1v1h-1zM44 38h7v1h-7zM52 38h1v1h-1zM1 39h1v1h-1zM3 39h1v1h-1zM8 39h6v1h-6zM15 39h1v1h-1zM17 39h1v1h-1zM19 39h1v1h-1zM23 39h1v1h-1zM25 39h1v1h-1zM27 39h1v1h-1zM29 39h1v1h-1zM31 39h2v1h-2zM34 39h5v1h-5zM40 39h3v1h-3zM44 39h4v1h-4zM52 39h1v1h-1zM1 40h1v1h-1zM4 40h5v1h-5zM12 40h1v1h-1zM14 40h2v1h-2zM17 40h3v1h-3zM22 40h1v1h-1zM26 40h1v1h-1zM28 40h1v1h-1zM31 40h2v1h-2zM35 40h4v1h-4zM40 40h1v1h-1zM42 40h1v1h-1zM46 40h3v1h-3zM50 40h2v1h-2zM0 41h2v1h-2zM4 41h1v1h-1zM10 41h3v1h-3zM15 41h1v1h-1zM18 41h1v1h-1zM26 41h2v1h-2zM29 41h1v1h-1zM31 41h2v1h-2zM35 41h3v1h-3zM39 41h2v1h-2zM43 41h1v1h-1zM45 41h1v1h-1zM50 41h1v1h-1zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h4v1h-4zM12 42h1v1h-1zM16 42h1v1h-1zM18 42h2v1h-2zM22 42h1v1h-1zM24 42h1v1h-1zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h1v1h-1zM35 42h1v1h-1zM37 42h1v1h-1zM39 42h2v1h-2zM42 42h2v1h-2zM46 42h1v1h-1zM48 42h1v1h-1zM50 42h1v1h-1zM52 42h1v1h-1zM1 43h2v1h-2zM8 43h2v1h-2zM11 43h1v1h-1zM14 43h2v1h-2zM20 43h2v1h-2zM29 43h4v1h-4zM34 43h1v1h-1zM36 43h2v1h-2zM41 43h2v1h-2zM46 43h1v1h-1zM48 43h1v1h-1zM51 43h1v1h-1zM3 44h1v1h-1zM6 44h2v1h-2zM9 44h1v1h-1zM12 44h1v1h-1zM14 44h3v1h-3zM22 44h1v1h-1zM24 44h11v1h-11zM36 44h1v1h-1zM39 44h4v1h-4zM44 44h5v1h-5zM50 44h1v1h-1zM52 44h1v1h-1zM8 45h7v1h-7zM17 45h1v1h-1zM19 45h2v1h-2zM22 45h1v1h-1zM24 45h1v1h-1zM28 45h1v1h-1zM31 45h3v1h-3zM35 45h3v1h-3zM40 45h2v1h-2zM43 45h2v1h-2zM48 45h2v1h-2zM51 45h1v1h-1zM0 46h7v1h-7zM15 46h1v1h-1zM17 46h2v1h-2zM20 46h2v1h-2zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h1v1h-1zM32 46h1v1h-1zM35 46h2v1h-2zM39 46h1v1h-1zM41 46h1v1h-1zM43 46h2v1h-2zM46 46h1v1h-1zM48 46h1v1h-1zM50 46h3v1h-3zM0 47h1v1h-1zM6 47h1v1h-1zM12 47h2v1h-2zM17 47h8v1h-8zM28 47h4v1h-4zM33 47h3v1h-3zM38 47h1v1h-1zM40 47h2v1h-2zM43 47h2v1h-2zM48 47h2v1h-2zM51 47h1v1h-1zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM8 48h1v1h-1zM10 48h2v1h-2zM13 48h1v1h-1zM17 48h3v1h-3zM21 48h1v1h-1zM24 48h5v1h-5zM31 48h1v1h-1zM33 48h5v1h-5zM40 48h1v1h-1zM42 48h1v1h-1zM44 48h6v1h-6zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM9 49h1v1h-1zM12 49h1v1h-1zM14 49h3v1h-3zM19 49h1v1h-1zM21 49h1v1h-1zM31 49h3v1h-3zM35 49h1v1h-1zM39 49h3v1h-3zM44 49h2v1h-2zM48 49h5v1h-5zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM8 50h1v1h-1zM11 50h2v1h-2zM14 50h1v1h-1zM16 50h1v1h-1zM21 50h1v1h-1zM24 50h3v1h-3zM30 50h2v1h-2zM33 50h1v1h-1zM35 50h3v1h-3zM39 50h1v1h-1zM41 50h1v1h-1zM44 50h1v1h-1zM46 50h1v1h-1zM48 50h3v1h-3zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h2v1h-2zM13 51h2v1h-2zM16 51h1v1h-1zM18 51h1v1h-1zM20 51h2v1h-2zM24 51h1v1h-1zM29 51h1v1h-1zM31 51h1v1h-1zM33 51h1v1h-1zM36 51h2v1h-2zM39 51h2v1h-2zM44 51h1v1h-1zM47 51h2v1h-2zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h3v1h-3zM12 52h2v1h-2zM15 52h1v1h-1zM17 52h2v1h-2zM22 52h1v1h-1zM24 52h3v1h-3zM28 52h5v1h-5zM34 52h1v1h-1zM36 52h1v1h-1zM38 52h6v1h-6zM46 52h3v1h-3zM51 52h2v1h-2z",
  "payload": "00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406370.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10496304968D"
};
const PINOS = [['01', 61.3, 77], ['02', 6.5, 28.5], ['03', 22, 68.5], ['04', 92.5, 14], ['05', 66.5, 15.5]];
const CAUSAS_D002 = [[70, 'Condensadora suja', '1º · 70% MUITO COMUM', 'Higienização Técnica Completa (Serpentina, Turbina e Bandeja)'], [20, 'Ventilador externo fraco', '2º · 20% COMUM', 'Substituição de Motor Ventilador / Turbina ou Coxins'], [10, 'Capacitor baixo', '3º · 10% MENOS COMUM', 'Substituição de Capacitor de Partida + Teste de Corrente']];
function Pino({
  A,
  T,
  tAmp,
  tDef,
  tM,
  zoom,
  vIn,
  def,
  leit,
  enviado
}) {
  const anel = MOTION.pulse(T, 1.2);
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "DIAGN\xD3STICO",
    chip: "D-002"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 213,
      padding: 13
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      width: 330,
      height: 185,
      borderRadius: 10,
      overflow: 'hidden',
      border: '1px solid #94A3B8',
      boxSizing: 'border-box',
      background: '#FFFFFF'
    }
  }, React.createElement("img", {
    src: GPV + "img/d002.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transformOrigin: `${PINOS[0][1]}% ${PINOS[0][2]}%`,
      transform: `scale(${1 + 1.1 * zoom})`
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${PINOS[0][1]}%`,
      top: `${PINOS[0][2]}%`,
      width: 34,
      height: 34,
      marginLeft: -17,
      marginTop: -17,
      boxSizing: 'border-box',
      borderRadius: '50%',
      border: '3px solid #FFB020',
      opacity: 0.35 + 0.65 * anel,
      transform: `scale(${(1 + 1.1 * zoom) * (1 + 0.25 * anel)})`,
      pointerEvents: 'none'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: 8,
      top: 8,
      height: 24,
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#0C2747',
      color: '#FFFFFF',
      font: `700 12px/1 ${MONO}`,
      letterSpacing: '.06em',
      opacity: zoom
    }
  }, "PONTO 01 \xB7 2,1\xD7"))), React.createElement("div", {
    ref: A.ref('amp'),
    style: {
      ...ST.S28,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 307,
      height: 48,
      fontSize: 17,
      letterSpacing: '.08em',
      transform: `scale(${MOTION.press(T, tAmp)})`
    }
  }, "AMPLIAR PE\xC7A NO PONTO 01"), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 365,
      height: 180,
      padding: 12
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 600,
      color: '#334155',
      opacity: 1 - vIn
    }
  }, "Toque em AMPLIAR para abrir a verifica\xE7\xE3o"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: vIn,
      transform: `translateY(${(1 - vIn) * 10}px)`
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: GPV + "img/d002-verif.png",
    alt: "",
    style: {
      flex: 'none',
      width: 76,
      height: 58,
      borderRadius: 8,
      objectFit: 'cover',
      border: '1px solid #CBD5E1'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      letterSpacing: '.16em'
    }
  }, "VERIFICA\xC7\xC3O 01"), React.createElement("b", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, "Me\xE7a a corrente"), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.15,
      color: '#1E293B'
    }
  }, "Acima da nominal: sobrecarga"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      ...ST.S28,
      minHeight: 46,
      fontSize: 16,
      letterSpacing: '.08em',
      gap: 6
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 16,
    c: "#FFFFFF",
    w: 2.4
  }), "NORMAL"), React.createElement("div", {
    ref: A.ref('def'),
    style: {
      ...BTN_R,
      minHeight: 46,
      fontSize: 16,
      letterSpacing: '.08em',
      gap: 6,
      boxShadow: def ? '0 0 0 3px #FFB020,inset 0 -2px 0 #7F1D1D' : BTN_R.boxShadow,
      transform: `scale(${MOTION.press(T, tDef)})`
    }
  }, "\u2717 DEFEITO")))), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 555
    }
  }, React.createElement(Mandar, {
    r: A.ref('mandar'),
    T: T,
    t: tM,
    feito: enviado
  })));
}
function Piece({
  mao = true,
  mascote = true
}) {
  const {
    T,
    CUES
  } = useComposition();
  const a = CUES.Sintoma,
    b = CUES.Pino,
    c = CUES.Laudo,
    D = 27.66;
  const root = React.useRef(null);
  const A = useAnchors(root);
  const tTap1 = a + 1.8,
    tDiag = a + 2.4,
    tTap2 = tDiag + 1.5;
  const tAmp = b + 1.6,
    tDef = b + 4.4,
    tM = c + 0.25,
    L = c + 0.55;
  const foco1 = MOTION.enter(T, tTap1, tTap1 + 0.3);
  const barra = MOTION.enter(T, tDiag + 0.2, tDiag + 1.2);
  const foco2 = MOTION.enter(T, tTap2, tTap2 + 0.3);
  const zoom = MOTION.enter(T, tAmp + 0.1, tAmp + 0.9);
  const vIn = MOTION.enter(T, tAmp + 0.5, tAmp + 1.0);
  const leit = MOTION.enter(T, tDef + 0.1, tDef + 0.5);
  const k = costura(T, a, D);
  const tIni = [-1, tDiag, b];
  const maoO = (mao ? 1 : 0) * Math.max(MOTION.enter(T, a + 0.45, a + 0.75) * (1 - MOTION.enter(T, tTap2 + 0.9, tTap2 + 1.2)), MOTION.enter(T, b + 0.3, b + 0.6) * (1 - MOTION.enter(T, L, L + 0.25)));
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      height: 844,
      overflow: 'hidden',
      background: '#0C2747'
    }
  }, React.createElement(Palco, {
    rootRef: root,
    label: `Video 02 · ${Math.floor(T)}s`,
    oculto: k.o >= 0.999 || T >= L + 0.45,
    telaX: k.telaX
  }, React.createElement("div", {
    style: visTela(T, tIni, 0)
  }, React.createElement(Sintomas, {
    A: A,
    foco: foco1,
    alvo: 2
  })), React.createElement("div", {
    style: visTela(T, tIni, 1)
  }, React.createElement(Diagnostico, {
    A: A,
    barra: barra,
    foco: foco2,
    chip: "D-002",
    titulo: "Compressor desarma no t\xE9rmico",
    sub: "Desliga sozinho ap\xF3s minutos",
    img: GPV + "img/t01_alicate.webp",
    cs: CAUSAS_D002
  })), React.createElement("div", {
    style: visTela(T, tIni, 2)
  }, React.createElement(Pino, {
    A: A,
    T: T,
    tAmp: tAmp,
    tDef: tDef,
    tM: tM,
    zoom: zoom,
    vIn: vIn,
    def: T >= tDef,
    leit: leit,
    enviado: T >= tM + 0.1
  })), React.createElement(Hand, {
    T: T,
    A: A,
    o: maoO,
    start: {
      x: 320,
      y: 500
    },
    taps: [tTap1, tTap2, tAmp, tDef, tM],
    moves: [{
      s: a + 0.9,
      e: a + 1.6,
      to: 'alvo',
      dx: 40,
      dy: 6
    }, {
      s: tDiag + 0.6,
      e: tDiag + 1.35,
      to: 'causa1',
      dx: 60,
      dy: 8
    }, {
      s: b + 0.6,
      e: b + 1.4,
      to: 'amp',
      dx: 30,
      dy: 4
    }, {
      s: tAmp + 1.6,
      e: tAmp + 2.6,
      to: 'def',
      dx: 10,
      dy: 4
    }, {
      s: c - 1.6,
      e: c - 0.2,
      to: 'mandar',
      dx: 40,
      dy: 4
    }]
  })), T >= L && React.createElement(LaudoDoc, {
    T: T,
    c: L,
    num: "1049",
    label: "Video 02 \xB7 Laudo N\xBA 1049",
    cliente: "Padaria Sol",
    equip: "LG \xB7 12.000 BTU/h \xB7 R-32",
    qr: QR1049,
    valor: "R$ 370,00",
    linhas: [['Sintoma', 'Compressor desarma no térmico'], ['Causa', 'Condensadora suja']],
    servicos: [['Higienização Técnica Completa (Serpentina, Turbina e Bandeja)', 'R$ 250,00'], ['Visita Técnica e Diagnóstico Instrumentado', 'R$ 120,00']],
    prev: "Reduz at\xE9 30% no consumo el\xE9trico e evita queima do motor ventilador por desbalanceamento (reparo estimado em R$ 450 a R$ 750)."
  }, React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "VERIFICA\xC7\xC3O 01 \xB7 D-002"), React.createElement(SeloDoc, {
    ok: false
  }, "DEFEITO")), React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.25,
      color: '#1E293B',
      whiteSpace: 'normal'
    }
  }, React.createElement("b", null, "Me\xE7a a corrente"), " \xB7 Acima da nominal: sobrecarga"))), React.createElement(Faixa, {
    T: T,
    t0: [a, b, c],
    mascote: mascote,
    legs: [[['Puxa a elétrica'], ['\n'], ['antes do gás:'], ['\n'], ['70% causa nº 1.', 'v']], [['Amplia o'], ['\n'], ['Ponto 01', 'a'], ['\n'], ['sem curto.', 'a']], [['Falha cravada:'], ['\n'], ['R$ 370 no Pix', 'a'], ['\n'], ['na 1ª visita.', 'a']]]
  }), k.o > 0.001 && React.createElement(Gancho, {
    t: k.t,
    o: k.o,
    x: k.x,
    k: 1.1,
    dur: 8.3,
    label: "Video 02",
    img: GPV + "img/t01_alicate.webp",
    h1: ['Parou sozinho', 'na rua?'],
    g: ['Vá no pino exato', 'sem desmontar à toa.'],
    aviso: "\u2715 SOLTAR G\xC1S NO ESCURO"
  }));
}
  window.GPVerticais.v02 = Piece;
})();

/* ── Video03NtcGasR32 · video03-ntc-gas-r32.jsx · 26,83 s ── */
(function () {
  const GPV = window.GPV_BASE;
  const useComposition = () => React.useContext(window.GPVCtx);
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
    let raf = 0,
      vivo = true;
    const medir = () => {
      if (!vivo) return;
      const root = rootRef.current;
      const ks = Object.keys(els.current);
      if (!root || !root.offsetWidth || !ks.length) {
        raf = requestAnimationFrame(medir);
        return;
      }
      const out = {};
      let ok = true;
      ks.forEach(k => {
        const el = els.current[k];
        let x = 0,
          y = 0,
          e = el;
        while (e && e !== root) {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        if (e !== root || !el.offsetWidth) ok = false;
        out[k] = {
          x: Math.round(x + el.offsetWidth / 2),
          y: Math.round(y + el.offsetHeight / 2),
          w: el.offsetWidth
        };
      });
      if (!ok) {
        raf = requestAnimationFrame(medir);
        return;
      }
      setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
    };
    medir();
    const t1 = setTimeout(medir, 400),
      t2 = setTimeout(medir, 1500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    const ro = typeof ResizeObserver !== 'undefined' && rootRef.current ? new ResizeObserver(() => medir()) : null;
    if (ro) ro.observe(rootRef.current);
    return () => {
      vivo = false;
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      if (ro) ro.disconnect();
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
const TELA = 660;
IC.busca = [C_(11, 11, 8), 'm21 21-4.3-4.3'];
IC.termo = ['M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'];
IC.pulso = ['M22 12h-4l-3 9L9 3l-3 9H2'];
SEG['-'] = 'G';
const NTC = {
  B: Math.log(0.649) / (1 / 308.15 - 1 / 298.15),
  R25: 10
};
const esperado = tc => NTC.R25 * Math.exp(NTC.B * (1 / (tc + 273.15) - 1 / 298.15));
const tempDe = r => 1 / (1 / 298.15 + Math.log(r / NTC.R25) / NTC.B) - 273.15;
const n2 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const n1 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});
const KICK = {
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '.12em',
  color: '#334155',
  whiteSpace: 'nowrap'
};
function Status() {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 28,
      padding: '0 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 700,
      color: '#0C2747'
    }
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    style: {
      width: 24,
      height: 11,
      borderRadius: 3,
      background: '#0C2747'
    }
  }));
}
function Topo({
  titulo,
  chip,
  voltar = true,
  children
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 28,
      height: 46,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, voltar && React.createElement("div", {
    style: ST.S21
  }, "\u2039"), React.createElement("div", {
    style: {
      ...ST.S14,
      fontSize: 23,
      lineHeight: 1.2
    }
  }, titulo), chip && React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '8px 9px'
    }
  }, chip), children);
}
const Tag = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    background: 'linear-gradient(180deg,#FFFFFF,#E8EBEF)',
    border: '1px solid #5A6A7E',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1,
    color: '#0C2747',
    whiteSpace: 'nowrap'
  }
}, children);
const Cod = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
    background: '#0C2747',
    color: '#FFFFFF',
    font: `700 13px/1 ${MONO}`
  }
}, children);
const Selo = ({
  cor,
  children
}) => {
  const C = {
    v: ['#14532D', '#DCFCE7', '#15803D'],
    r: ['#7F1D1D', '#FEE2E2', '#B91C1C'],
    m: ['#FFFFFF', '#0C2747', '#081B33']
  }[cor];
  return React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 30,
      padding: '0 11px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      borderRadius: 999,
      background: C[1],
      border: `1.5px solid ${C[2]}`,
      color: C[0],
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, children);
};
const ROTD = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.1em',
  lineHeight: 1.2,
  color: '#334155'
};
const CX = {
  boxSizing: 'border-box',
  background: '#FFFFFF',
  border: '1.5px solid #A3ACB9',
  borderRadius: 10
};
const T_MIN = 15,
  T_MAX = 40;
function Aferir({
  A,
  lido,
  amb,
  fase
}) {
  const esp = esperado(amb);
  const desv = lido == null ? null : (lido - esp) / esp * 100;
  const marca = lido == null ? null : tempDe(lido);
  const bom = fase !== 0 && desv != null && Math.abs(desv) <= 5;
  const lcd = lido == null ? '-.--' : lido.toFixed(2);
  const pct = v => (v - T_MIN) / (T_MAX - T_MIN) * 100;
  const linha = (rot, val, cor) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid rgba(63,50,16,.2)',
      padding: '5px 0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: '#3F3210'
    }
  }, rot), React.createElement("b", {
    style: {
      font: `700 17px/1.2 ${MONO}`,
      color: cor || '#0C2747'
    }
  }, val));
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === 0 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 396,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "termo",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      ...KICK,
      flex: 1,
      color: '#0C2747'
    }
  }, "SENSOR NTC"), fase === 0 ? React.createElement(Selo, {
    cor: "m"
  }, "\u25B8 MEDINDO") : bom ? React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "SENSOR BOM") : React.createElement(Selo, {
    cor: "r"
  }, React.createElement(Ic, {
    n: "fechar",
    s: 12,
    c: "#B91C1C",
    w: 3
  }), "FORA DA CURVA")), React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      border: bom ? '2px solid #22C55E' : ST.S161.border,
      boxShadow: bom ? '0 0 0 4px rgba(34,197,94,.2)' : ST.S161.boxShadow
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, "O SENSOR MARCA"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, React.createElement("b", {
    style: {
      font: `700 44px/1.05 ${MONO}`,
      fontVariantNumeric: 'tabular-nums'
    }
  }, marca == null ? '—' : n1(marca)), React.createElement("span", {
    style: {
      font: `700 16px/1 ${MONO}`
    }
  }, "\xB0C")), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      lineHeight: 1.2,
      color: fase === 0 ? '#334155' : bom ? '#15803D' : '#B91C1C',
      marginBottom: 4
    }
  }, fase === 0 ? '▸ MEDINDO' : bom ? `✓ AMBIENTE ${Math.round(amb)} °C` : `▲ +${n1(marca - amb)} °C DO AMBIENTE`), linha('LIDO', lido == null ? '— kΩ' : n2(lido) + ' kΩ'), linha('ESPERADO', n2(esp) + ' kΩ'), linha('DESVIO', desv == null ? '—' : (desv > 0.05 ? '+' : '') + n1(Math.abs(desv) < 0.05 ? 0 : desv) + '%', desv == null ? null : Math.abs(desv) <= 5 ? '#15803D' : '#7F1D1D')), React.createElement(Multimetro, {
    leitura: lcd,
    h: 168,
    pilula: "20k"
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("span", {
    style: KICK
  }, "TEMPERATURA REAL"), React.createElement("b", {
    style: {
      font: `700 21px/1.2 ${MONO}`
    }
  }, n1(amb), " \xB0C")), React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      margin: '0 14px'
    }
  }, React.createElement("span", {
    ref: A.ref('trilho'),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 14,
      height: 6,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(34)}%`,
      width: `${pct(36) - pct(34)}%`,
      top: 14,
      height: 6,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(amb)}%`,
      top: 2,
      width: 30,
      height: 30,
      marginLeft: -15,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
      border: '3px solid #FFB020',
      boxShadow: '0 2px 5px rgba(9,30,66,.35)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      margin: '-12px 14px 0',
      font: `700 13px/1 ${MONO}`,
      color: '#334155'
    }
  }, [15, 25, 35, 40].map(v => React.createElement("span", {
    key: v,
    style: {
      position: 'absolute',
      left: `${pct(v)}%`,
      transform: v === 40 ? 'translateX(-100%)' : 'translateX(-50%)'
    }
  }, v === 40 ? '40 °C' : v)))), React.createElement("div", {
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 544,
      height: 52,
      gap: 8,
      fontSize: 18
    }
  }, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Servico({
  r,
  nome,
  img,
  v,
  c,
  o = 1,
  y = 0
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      opacity: o,
      transform: `translateY(${y}px)`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S23,
      minHeight: 40,
      height: 40
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
      letterSpacing: '-.01em',
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
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "COBRAR DO CLIENTE \xB7 R$"), React.createElement("div", {
    ref: r,
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, v)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "MEU CUSTO DA PE\xC7A \xB7 R$"), React.createElement("div", {
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, c))));
}
IC.alerta = ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'];
IC.escudo = ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'];
IC.gas = [R_(7, 6, 10, 16, 4), 'M10 6V3h4v3', 'M7 12h10'];
const BTN_R = css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#DC4545 0%,#C22D2D 45%,#9B1C1C 100%);border:1px solid #7F1D1D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #7F1D1D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em");
const XF = 0.28;
const visTela = (T, tIni, i) => {
  const pi = i === 0 ? 1 : MOTION.enter(T, tIni[i], tIni[i] + XF),
    po = i === tIni.length - 1 ? 0 : MOTION.enter(T, tIni[i + 1], tIni[i + 1] + XF);
  return {
    position: 'absolute',
    inset: 0,
    opacity: pi * (1 - po)
  };
};
const costura = (T, a, D) => {
  const sai = MOTION.enter(T, a, a + 0.45),
    fim = MOTION.enter(T, D - 0.4, D);
  return {
    o: fim > 0 ? fim : 1 - sai,
    x: fim > 0 ? 0 : -28 * sai,
    t: fim > 0 ? 0 : T,
    telaX: 24 * (1 - sai)
  };
};
function Abas({
  ativa,
  p = 1
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === ativa && p > 0.5 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t)));
}
function Mandar({
  r,
  T,
  t,
  feito
}) {
  return React.createElement("div", {
    ref: r,
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      gap: 8,
      fontSize: 18,
      height: 52,
      transform: `scale(${MOTION.press(T, t)})`
    }
  }, feito ? React.createElement(React.Fragment, null, React.createElement(Ic, {
    n: "ok",
    s: 20,
    c: "#FFFFFF",
    w: 3
  }), "ENVIADO PARA O LAUDO") : React.createElement(React.Fragment, null, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Sintomas({
  A,
  foco,
  alvo = 1
}) {
  const itens = [[GPV + 'img/t04_termometro_nivel.webp', 'Liga, mas não gela', 'Ventila normal, sem frio', 'D-001', ['Convencional e Inverter', 'Refrigeração']], [GPV + 'img/t10_sensor_ntc.webp', 'Split / Inverter para após minutos', 'Perde frio após minutos', 'D-004', ['Inverter', 'Sensor NTC', 'Multímetro']], [GPV + 'img/t01_alicate.webp', 'Compressor desarma no térmico', 'Desliga sozinho após minutos', 'D-002', ['Convencional e Inverter', 'Alicate amperímetro']]];
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "SINTOMAS",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 46,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(Ic, {
    n: "busca",
    s: 20,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: '#334155'
    }
  }, "Buscar sintoma, pe\xE7a ou D-033")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 140,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      lineHeight: 1.2
    }
  }, "SPLIT INVERTER E PLACAS ELETR\xD4NICAS"), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 158,
      bottom: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, itens.map(([img, t, s, c, tags], i) => {
    const on = i === alvo && foco > 0;
    return React.createElement("div", {
      key: c,
      ref: i === alvo ? A.ref('alvo') : undefined,
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 14,
        border: on ? '2px solid #22C55E' : CARD.border,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.22)` : CARD.boxShadow,
        margin: on ? -1 : 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("img", {
      src: img,
      alt: "",
      style: {
        flex: 'none',
        width: 54,
        height: 54,
        borderRadius: 10,
        objectFit: 'cover',
        border: '1.5px solid #2A5C8F'
      }
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        whiteSpace: 'normal'
      }
    }, React.createElement("b", {
      style: {
        fontSize: 19.5,
        fontWeight: 600,
        lineHeight: 1.18
      }
    }, t), React.createElement("span", {
      style: {
        fontSize: 15.5,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#334155'
      }
    }, s))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, tags.map(g => React.createElement(Tag, {
      key: g
    }, g)), React.createElement("span", {
      style: {
        flex: 1
      }
    }), React.createElement(Cod, null, c)));
  })));
}
function Diagnostico({
  A,
  barra,
  foco,
  chip,
  titulo,
  sub,
  img,
  cs
}) {
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "DIAGN\xD3STICO",
    chip: chip
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 76,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 9,
      objectFit: 'cover',
      border: '1.5px solid #2A5C8F'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, sub))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 170,
      height: 434,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "pulso",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: KICK
  }, "CAUSAS PROV\xC1VEIS \xB7 1\xBA \u2192 5\xBA")), cs.map(([p, nome, rank, det], i) => {
    const on = i === 0 && foco > 0;
    return React.createElement("div", {
      key: nome,
      ref: i === 0 ? A.ref('causa1') : undefined,
      style: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '72px minmax(0,1fr)',
        gap: 4,
        padding: '11px 12px',
        borderRadius: 10,
        border: on ? '2px solid #22C55E' : '2px solid transparent',
        borderTop: i && !on ? '1px solid #E2E8F0' : undefined,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.2)` : 'none'
      }
    }, React.createElement("b", {
      style: {
        font: `700 25px/1.1 ${MONO}`
      }
    }, p, "%"), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, React.createElement("b", {
      style: {
        minWidth: 0,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.15,
        whiteSpace: 'normal'
      }
    }, nome), React.createElement("span", {
      style: {
        height: 8,
        borderRadius: 4,
        background: '#E5E2DC',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        display: 'block',
        height: '100%',
        width: `${p * barra}%`,
        borderRadius: 4,
        background: on ? '#15803D' : '#0C2747'
      }
    })), React.createElement("span", {
      style: {
        font: `700 13px/1.2 ${MONO}`,
        color: '#334155',
        letterSpacing: '.02em'
      }
    }, rank), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.25,
        color: '#1E293B',
        whiteSpace: 'normal',
        textWrap: 'pretty'
      }
    }, det)));
  })));
}
function LaudoDoc({
  T,
  c,
  num,
  label,
  cliente,
  equip,
  equipExtra,
  linhas,
  servicos,
  prev,
  qr,
  valor,
  children
}) {
  const o = MOTION.enter(T, c, c + 0.45);
  const pv = MOTION.pulse(Math.max(0, T - (c + 1.1)), 1.6) * MOTION.enter(T, c + 1.1, c + 1.4);
  const qo = MOTION.enter(T, c + 2.1, c + 2.5);
  const L13 = {
    fontSize: 13,
    lineHeight: 1.25,
    color: '#1E293B',
    whiteSpace: 'normal'
  };
  return React.createElement("div", {
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: -1,
      top: -1,
      width: 392,
      height: TELA + 1,
      zIndex: 60,
      overflow: 'hidden',
      background: `rgba(8,30,56,${o})`,
      fontFamily: DOC,
      color: '#0C2747',
      whiteSpace: 'nowrap'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 17,
      right: 17,
      top: 13,
      bottom: 16,
      padding: 10,
      boxSizing: 'border-box',
      borderRadius: 14,
      background: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(0,0,0,.35)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      opacity: o,
      transform: `translateY(${(1 - o) * 26}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 12,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: BARLOW,
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '.12em'
    }
  }, "BANCADA GELOPRO"), React.createElement("span", {
    style: {
      ...ROTD,
      letterSpacing: '.04em',
      color: '#BFD7F2'
    }
  }, "LAUDO DE APROVA\xC7\xC3O")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 15,
      lineHeight: 1.2
    }
  }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 22px/1.1 ${MONO}`
    }
  }, "N\xBA ", num))), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      ...L13,
      whiteSpace: 'nowrap'
    }
  }, React.createElement("b", null, "Cliente:"), " ", cliente), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 12px/1.25 ${MONO}`
    }
  }, equip)), equipExtra && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Sintoma:"), " Diagn\xF3stico na bancada"), React.createElement("b", {
    style: {
      flex: 'none',
      fontSize: 13,
      lineHeight: 1.25
    }
  }, equipExtra)), linhas.map(([k, v]) => React.createElement("span", {
    key: k,
    style: L13
  }, React.createElement("b", null, k, ":"), " ", v))), children, React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SERVI\xC7OS EXECUTADOS & PREVEN\xC7\xC3O"), servicos.map(([sv, v]) => React.createElement("div", {
    key: sv,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      paddingBottom: 5,
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 13,
      lineHeight: 1.25,
      whiteSpace: 'normal',
      textWrap: 'balance'
    }
  }, sv), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 13px/1.25 ${MONO}`
    }
  }, v))), React.createElement("div", {
    style: {
      position: 'relative',
      background: '#F0FDF4',
      borderLeft: '4px solid #15803D',
      borderRadius: 6,
      padding: '6px 9px',
      color: '#14532D',
      fontSize: 13,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty',
      overflow: 'hidden',
      boxShadow: `0 0 0 ${3 * pv}px rgba(34,197,94,.35)`
    }
  }, React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Preven\xE7\xE3o:"), " ", prev)), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px 8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: qo > 0.01 ? '2px solid #22C55E' : CX.border,
      boxShadow: `0 0 0 ${4 * qo}px rgba(34,197,94,.22)`
    }
  }, React.createElement("svg", {
    width: qr.n * 2.1,
    height: qr.n * 2.1,
    viewBox: `-2 -2 ${qr.n + 4} ${qr.n + 4}`,
    shapeRendering: "crispEdges",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("rect", {
    x: "-2",
    y: "-2",
    width: qr.n + 4,
    height: qr.n + 4,
    fill: "#FFFFFF"
  }), React.createElement("path", {
    d: qr.d,
    fill: "#000000"
  })), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      whiteSpace: 'normal'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "PIX \xB7 VALOR EXATO"), React.createElement("b", {
    style: {
      font: `700 26px/1.1 ${MONO}`
    }
  }, valor), React.createElement("span", {
    style: {
      borderRadius: 6,
      background: '#15803D',
      color: '#FFFFFF',
      padding: '6px 8px',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, "Responda APROVADO para autorizar o servi\xE7o.")))));
}
const SeloDoc = ({
  ok,
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 24,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    borderRadius: 999,
    background: ok ? '#DCFCE7' : '#FEE2E2',
    border: `1.5px solid ${ok ? '#15803D' : '#B91C1C'}`,
    color: ok ? '#14532D' : '#7F1D1D',
    fontFamily: DOC,
    fontSize: 12,
    fontWeight: 700
  }
}, React.createElement(Ic, {
  n: ok ? 'ok' : 'fechar',
  s: 12,
  c: ok ? '#15803D' : '#B91C1C',
  w: 3
}), children);
function Gravado({
  T,
  t,
  titulo,
  sub,
  children
}) {
  const o = MOTION.enter(T, t, t + 0.45);
  if (o <= 0.001) return null;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40,
      background: `rgba(8,30,56,${0.62 * o})`
    }
  }, React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: o,
      transform: `translateY(${(1 - o) * 40}px)`,
      boxShadow: '0 10px 30px rgba(0,0,0,.35)'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 10,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: '#15803D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 18,
    c: "#FFFFFF",
    w: 3
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '.06em',
      lineHeight: 1.1
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#BFD7F2'
    }
  }, sub))), children));
}
function Registro({
  rot,
  val,
  extra,
  selo,
  o = 1
}) {
  return React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      gap: 4,
      opacity: o,
      transform: `translateY(${(1 - o) * 10}px)`
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
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, rot), React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), selo)), React.createElement("b", {
    style: {
      font: `700 22px/1.15 ${MONO}`
    }
  }, val), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.25,
      color: '#334155',
      whiteSpace: 'normal'
    }
  }, extra));
}
function Gancho({
  t,
  o,
  x = 0,
  k = 1,
  dur = 5,
  img,
  h1,
  g,
  aviso,
  label
}) {
  const pz = MOTION.pulse(t, 1.1);
  const zoom = 1 + 0.02 * p01(t, 0, dur);
  const sc = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55)) + 0.025 * Math.sin(2 * Math.PI * t / 1.1);
  const l1 = MOTION.enter(t, 0.7 * k, 1.3 * k),
    l2 = MOTION.enter(t, 1.3 * k, 1.9 * k);
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
      backgroundSize: `${p * 100}% 100%`,
      color: tinta(p)
    }
  }, txt);
  return React.createElement("div", {
    "data-screen-label": `${label} · Gancho · ${Math.floor(t)}s`,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 90,
      opacity: o,
      transform: `translateX(${x}px)`,
      background: 'radial-gradient(120% 80% at 50% 30%,#14365F 0%,#0C2747 55%,#081B33 100%)',
      color: '#FFFFFF',
      fontFamily: BARLOW,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      top: 28,
      bottom: 40,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
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
  }, "\xB7 DIAGN\xD3STICO")), React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '0 10px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      letterSpacing: '.04em'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      transform: `scale(${zoom})`,
      transformOrigin: '50% 50%'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      width: 220,
      height: 220,
      borderRadius: 44,
      background: '#0E2240',
      border: `9px solid rgba(${Math.round(150 + 50 * pz)},28,40,${0.55 + 0.3 * pz})`,
      boxShadow: `0 0 ${18 + 28 * pz}px rgba(220,38,38,${0.25 + 0.4 * pz}),inset 0 0 18px rgba(0,0,0,.45)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    width: "152",
    height: "152",
    style: {
      width: 152,
      height: 152,
      display: 'block',
      borderRadius: 24,
      boxShadow: '0 6px 18px rgba(0,0,0,.45)'
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 54,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
      background: '#B91C1C',
      border: '1px solid #7F1D1D',
      boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * pz})`,
      font: "800 24px/1.1 'Barlow Semi Condensed',sans-serif",
      letterSpacing: '.04em',
      whiteSpace: 'nowrap',
      transform: `scale(${sc})`
    }
  }, aviso)), React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-.005em',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", null, h1[0]), React.createElement("span", null, h1[1])), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1.1
    }
  }, grifo(g[0], l1), grifo(g[1], l2)))));
}
const URSOS = [{
  urso: GPV + 'img/mascote/m-maos-cintura.webp',
  ar: 731 / 667,
  sobe: 16,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-aponta-cima.webp',
  ar: 693 / 697,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-joinha.webp',
  ar: 633 / 667,
  desce: 42,
  dir: -30
}];
function Faixa({
  T,
  t0,
  mascote,
  legs,
  dirs = []
}) {
  const y = (1 - MOTION.enter(T, t0[0], t0[0] + 0.45)) * 250;
  const ativo = T >= t0[2] ? 2 : T >= t0[1] ? 1 : 0;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: TELA,
      height: 844 - TELA,
      boxSizing: 'border-box',
      zIndex: 80,
      overflow: 'visible',
      background: '#0C2747',
      borderTop: '2px solid #0265DC',
      fontFamily: BARLOW,
      transform: `translateY(${y}px)`
    }
  }, URSOS.map((u, i) => {
    const ent = MOTION.enter(T, t0[i], t0[i] + 0.3);
    const o = i === ativo ? ent : 0;
    if (o <= 0.001) return null;
    const gp = MOTION.enter(T, t0[i] + 0.45, t0[i] + 1.05);
    return React.createElement(React.Fragment, {
      key: i
    }, mascote && React.createElement("img", {
      src: u.urso,
      alt: "",
      style: {
        position: 'absolute',
        right: dirs[i] ?? u.dir,
        bottom: u.sobe || -(u.desce || 0),
        zIndex: 30,
        width: 226,
        height: 'auto',
        aspectRatio: String(u.ar),
        display: 'block',
        WebkitMaskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        maskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        opacity: o,
        transform: `translateY(${(1 - ent) * 18}px)`,
        transformOrigin: '50% 100%'
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 230,
        boxSizing: 'border-box',
        padding: '12px 0 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: o,
        zIndex: 31
      }
    }, React.createElement("span", {
      style: {
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        height: 28,
        padding: '0 11px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#FACC15',
        color: '#0C2747',
        font: `700 14px/1 ${MONO}`,
        letterSpacing: '.12em'
      }
    }, "PASSO ", i + 1, " DE 3"), React.createElement("div", {
      style: {
        fontSize: 25.5,
        fontWeight: 800,
        lineHeight: 1.12,
        color: '#FFFFFF',
        whiteSpace: 'nowrap'
      }
    }, legs[i].map(([txt, k], j) => txt === '\n' ? React.createElement("br", {
      key: j
    }) : k ? React.createElement("span", {
      key: j,
      style: {
        padding: '0 4px',
        margin: '0 -1px',
        borderRadius: 4,
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
        backgroundImage: `linear-gradient(${k === 'v' ? '#4ADE80,#4ADE80' : '#FFB020,#FFB020'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${gp * 100}% 100%`,
        color: gp > 0.5 ? '#0C2747' : '#FFFFFF'
      }
    }, txt) : React.createElement("span", {
      key: j
    }, txt)))));
  }));
}
function Palco({
  rootRef,
  label,
  oculto,
  telaX,
  children
}) {
  return React.createElement("div", {
    ref: rootRef,
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 390,
      height: TELA,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      ...BG,
      visibility: oculto ? 'hidden' : 'visible',
      color: '#0C2747',
      fontFamily: BARLOW,
      transform: `translateX(${telaX}px)`
    }
  }, React.createElement(Status, null), children);
}
const TUBO = 13.4;
const evapDe = psi => 4.6 + (psi - 122) * 0.25;
function Botija({
  T
}) {
  const bol = [[0.2, 0, 3], [0.55, 0.45, 2.4], [0.8, 0.9, 2], [0.38, 1.3, 2.6], [0.68, 1.75, 1.8]];
  return React.createElement("svg", {
    width: "96",
    height: "168",
    viewBox: "0 0 96 168",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "btC",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#7C8794"
  }), React.createElement("stop", {
    offset: ".3",
    stopColor: "#D5DBE3"
  }), React.createElement("stop", {
    offset: ".55",
    stopColor: "#F3F5F7"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#6B7684"
  })), React.createElement("linearGradient", {
    id: "btL",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#60A5FA"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#1D4ED8"
  })), React.createElement("clipPath", {
    id: "btJ"
  }, React.createElement("rect", {
    x: "27",
    y: "76",
    width: "42",
    height: "64",
    rx: "10"
  }))), React.createElement("rect", {
    x: "34",
    y: "2",
    width: "28",
    height: "8",
    rx: "4",
    fill: "#C9A24A",
    stroke: "#8A6D25"
  }), React.createElement("rect", {
    x: "44",
    y: "9",
    width: "8",
    height: "12",
    fill: "#C9A24A",
    stroke: "#8A6D25"
  }), React.createElement("rect", {
    x: "22",
    y: "18",
    width: "52",
    height: "22",
    rx: "6",
    fill: "url(#btC)",
    stroke: "#475569",
    strokeWidth: "1.5"
  }), React.createElement("path", {
    d: "M14 58Q14 38 34 38h28q20 0 20 20v94q0 8-8 8H22q-8 0-8-8z",
    fill: "url(#btC)",
    stroke: "#475569",
    strokeWidth: "1.8"
  }), React.createElement("rect", {
    x: "25",
    y: "47",
    width: "46",
    height: "20",
    rx: "4",
    fill: "#FFFFFF",
    stroke: "#0C2747",
    strokeWidth: "1.5"
  }), React.createElement("text", {
    x: "48",
    y: "62",
    textAnchor: "middle",
    fontFamily: "JetBrains Mono,monospace",
    fontWeight: "700",
    fontSize: "13",
    fill: "#0C2747"
  }, "R-32"), React.createElement("rect", {
    x: "25",
    y: "74",
    width: "46",
    height: "68",
    rx: "12",
    fill: "#0C2747"
  }), React.createElement("g", {
    clipPath: "url(#btJ)"
  }, React.createElement("rect", {
    x: "27",
    y: "76",
    width: "42",
    height: "64",
    fill: "#EAF2FB"
  }), React.createElement("rect", {
    x: "27",
    y: 98 + 1.5 * Math.sin(T * 2.4),
    width: "42",
    height: "50",
    fill: "url(#btL)"
  }), bol.map(([fx, ph, r], i) => {
    const p = ((T / 1.8 + ph) % 1 + 1) % 1;
    return React.createElement("circle", {
      key: i,
      cx: 27 + 42 * fx,
      cy: 138 - 36 * p,
      r: r,
      fill: "#FFFFFF",
      opacity: 0.85 * (1 - p)
    });
  }), React.createElement("line", {
    x1: "27",
    y1: "94",
    x2: "69",
    y2: "94",
    stroke: "#15803D",
    strokeWidth: "1.6",
    strokeDasharray: "4 3"
  }), React.createElement("line", {
    x1: "27",
    y1: "104",
    x2: "69",
    y2: "104",
    stroke: "#15803D",
    strokeWidth: "1.6",
    strokeDasharray: "4 3"
  })), React.createElement("rect", {
    x: "20",
    y: "158",
    width: "56",
    height: "8",
    rx: "2",
    fill: "#94A3B8",
    stroke: "#475569"
  }));
}
const SH_MAX = 20;
function GasSH({
  A,
  T,
  psi,
  taps,
  tM,
  enviado
}) {
  const evap = evapDe(psi),
    sh = TUBO - evap,
    ok = sh >= 7 && sh <= 11;
  const pct = v => Math.max(0, Math.min(100, v / SH_MAX * 100));
  const linha = (rot, val) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid rgba(63,50,16,.2)',
      padding: '5px 0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: '#3F3210'
    }
  }, rot), React.createElement("b", {
    style: {
      font: `700 17px/1.2 ${MONO}`
    }
  }, val));
  const press = taps.reduce((s, t) => s * MOTION.press(T, t), 1);
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "R-32"
  }), React.createElement(Abas, {
    ativa: 1
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 340,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "gas",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      ...KICK,
      flex: 1,
      color: '#0C2747'
    }
  }, "G\xC1S & SH"), ok ? React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "CARGA IDEAL") : React.createElement(Selo, {
    cor: "r"
  }, React.createElement(Ic, {
    n: "fechar",
    s: 12,
    c: "#B91C1C",
    w: 3
  }), "FORA DA FAIXA")), React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      border: ok ? '2px solid #22C55E' : ST.S161.border,
      boxShadow: ok ? '0 0 0 4px rgba(34,197,94,.2)' : ST.S161.boxShadow
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, "SUPERAQUECIMENTO"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, React.createElement("b", {
    style: {
      font: `700 44px/1.05 ${MONO}`,
      fontVariantNumeric: 'tabular-nums'
    }
  }, n1(sh)), React.createElement("span", {
    style: {
      font: `700 16px/1 ${MONO}`
    }
  }, "\xB0C")), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      lineHeight: 1.2,
      color: ok ? '#15803D' : '#B91C1C',
      marginBottom: 4
    }
  }, ok ? '✓ ALVO 7 A 11 °C' : '▲ ACIMA DO ALVO 7 A 11 °C'), linha('TUBO', n1(TUBO) + ' °C'), linha('EVAPORAÇÃO', n1(evap) + ' °C'), linha('SUCÇÃO', Math.round(psi) + ' PSI')), React.createElement(Botija, {
    T: T
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      margin: '0 14px'
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 14,
      height: 6,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(7)}%`,
      width: `${pct(11) - pct(7)}%`,
      top: 14,
      height: 6,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(sh)}%`,
      top: 2,
      width: 30,
      height: 30,
      marginLeft: -15,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
      border: '3px solid #FFB020',
      boxShadow: '0 2px 5px rgba(9,30,66,.35)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      margin: '-12px 14px 0',
      font: `700 13px/1 ${MONO}`,
      color: '#334155'
    }
  }, [0, 7, 11, 20].map(v => React.createElement("span", {
    key: v,
    style: {
      position: 'absolute',
      left: `${pct(v)}%`,
      transform: v === 20 ? 'translateX(-100%)' : v === 0 ? 'none' : 'translateX(-50%)'
    }
  }, v === 20 ? '20 °C' : v)))), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 488,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      height: 28,
      padding: '0 9px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#1D4ED8',
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '.06em'
    }
  }, "\u25CF BAIXA"), React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.04em',
      color: '#334155'
    }
  }, "SUC\xC7\xC3O \xB7 PSI"), React.createElement("div", {
    style: {
      ...ST.S21,
      width: 48,
      height: 48,
      fontSize: 26
    }
  }, "\u2212"), React.createElement("div", {
    style: {
      ...ST.S56,
      width: 84,
      height: 48,
      fontSize: 22
    }
  }, Math.round(psi)), React.createElement("div", {
    ref: A.ref('mais'),
    style: {
      ...ST.S21,
      width: 48,
      height: 48,
      fontSize: 26,
      transform: `scale(${press})`
    }
  }, "+")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 548
    }
  }, React.createElement(Mandar, {
    r: A.ref('mandar'),
    T: T,
    t: tM,
    feito: enviado
  })));
}
const QR1051 = {
  "payload": "00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406370.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10516304D100",
  "n": 53,
  "d": "M0 0h7v1h-7zM8 0h1v1h-1zM11 0h1v1h-1zM13 0h1v1h-1zM15 0h1v1h-1zM17 0h1v1h-1zM19 0h2v1h-2zM26 0h1v1h-1zM29 0h3v1h-3zM34 0h3v1h-3zM40 0h3v1h-3zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM9 1h1v1h-1zM11 1h2v1h-2zM14 1h2v1h-2zM17 1h1v1h-1zM19 1h1v1h-1zM23 1h3v1h-3zM29 1h4v1h-4zM36 1h1v1h-1zM38 1h6v1h-6zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM9 2h1v1h-1zM11 2h2v1h-2zM14 2h3v1h-3zM18 2h4v1h-4zM23 2h1v1h-1zM26 2h4v1h-4zM31 2h1v1h-1zM33 2h2v1h-2zM41 2h1v1h-1zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM9 3h1v1h-1zM12 3h2v1h-2zM15 3h2v1h-2zM18 3h2v1h-2zM21 3h1v1h-1zM23 3h4v1h-4zM28 3h1v1h-1zM32 3h3v1h-3zM39 3h4v1h-4zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h1v1h-1zM14 4h2v1h-2zM17 4h1v1h-1zM21 4h1v1h-1zM23 4h7v1h-7zM33 4h2v1h-2zM37 4h1v1h-1zM42 4h1v1h-1zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM10 5h1v1h-1zM16 5h1v1h-1zM18 5h2v1h-2zM21 5h1v1h-1zM23 5h2v1h-2zM28 5h1v1h-1zM30 5h1v1h-1zM32 5h2v1h-2zM36 5h1v1h-1zM39 5h2v1h-2zM42 5h1v1h-1zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM11 7h3v1h-3zM15 7h1v1h-1zM18 7h1v1h-1zM20 7h2v1h-2zM24 7h1v1h-1zM28 7h3v1h-3zM33 7h2v1h-2zM37 7h1v1h-1zM44 7h1v1h-1zM1 8h7v1h-7zM10 8h1v1h-1zM13 8h2v1h-2zM22 8h1v1h-1zM24 8h8v1h-8zM33 8h4v1h-4zM38 8h2v1h-2zM41 8h1v1h-1zM47 8h2v1h-2zM52 8h1v1h-1zM0 9h1v1h-1zM3 9h1v1h-1zM7 9h1v1h-1zM9 9h1v1h-1zM12 9h5v1h-5zM19 9h1v1h-1zM21 9h1v1h-1zM25 9h1v1h-1zM27 9h1v1h-1zM30 9h4v1h-4zM35 9h1v1h-1zM37 9h1v1h-1zM40 9h3v1h-3zM45 9h2v1h-2zM51 9h1v1h-1zM0 10h1v1h-1zM2 10h1v1h-1zM5 10h2v1h-2zM8 10h4v1h-4zM13 10h2v1h-2zM17 10h2v1h-2zM20 10h1v1h-1zM23 10h2v1h-2zM26 10h1v1h-1zM31 10h3v1h-3zM38 10h2v1h-2zM48 10h3v1h-3zM0 11h5v1h-5zM11 11h1v1h-1zM13 11h1v1h-1zM15 11h2v1h-2zM19 11h2v1h-2zM24 11h2v1h-2zM27 11h3v1h-3zM31 11h3v1h-3zM36 11h2v1h-2zM39 11h1v1h-1zM42 11h1v1h-1zM45 11h2v1h-2zM52 11h1v1h-1zM4 12h1v1h-1zM6 12h2v1h-2zM9 12h2v1h-2zM12 12h3v1h-3zM17 12h5v1h-5zM23 12h1v1h-1zM26 12h4v1h-4zM35 12h3v1h-3zM39 12h1v1h-1zM41 12h1v1h-1zM48 12h2v1h-2zM51 12h1v1h-1zM0 13h3v1h-3zM4 13h2v1h-2zM10 13h1v1h-1zM12 13h1v1h-1zM14 13h1v1h-1zM18 13h8v1h-8zM29 13h1v1h-1zM33 13h1v1h-1zM35 13h1v1h-1zM38 13h2v1h-2zM44 13h3v1h-3zM49 13h2v1h-2zM0 14h3v1h-3zM4 14h3v1h-3zM9 14h2v1h-2zM12 14h6v1h-6zM19 14h1v1h-1zM24 14h3v1h-3zM28 14h4v1h-4zM36 14h1v1h-1zM38 14h2v1h-2zM41 14h3v1h-3zM45 14h1v1h-1zM50 14h2v1h-2zM0 15h1v1h-1zM3 15h3v1h-3zM7 15h1v1h-1zM9 15h1v1h-1zM13 15h2v1h-2zM16 15h1v1h-1zM20 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM33 15h3v1h-3zM38 15h2v1h-2zM41 15h2v1h-2zM47 15h1v1h-1zM50 15h1v1h-1zM52 15h1v1h-1zM1 16h1v1h-1zM3 16h1v1h-1zM6 16h1v1h-1zM8 16h2v1h-2zM11 16h4v1h-4zM17 16h3v1h-3zM21 16h2v1h-2zM25 16h1v1h-1zM27 16h3v1h-3zM32 16h1v1h-1zM34 16h1v1h-1zM36 16h1v1h-1zM39 16h4v1h-4zM47 16h2v1h-2zM51 16h1v1h-1zM0 17h1v1h-1zM2 17h4v1h-4zM9 17h3v1h-3zM13 17h3v1h-3zM17 17h2v1h-2zM21 17h1v1h-1zM23 17h1v1h-1zM26 17h1v1h-1zM31 17h2v1h-2zM35 17h1v1h-1zM39 17h1v1h-1zM42 17h1v1h-1zM44 17h2v1h-2zM48 17h2v1h-2zM51 17h1v1h-1zM6 18h2v1h-2zM9 18h2v1h-2zM12 18h1v1h-1zM15 18h2v1h-2zM18 18h2v1h-2zM21 18h2v1h-2zM24 18h3v1h-3zM30 18h1v1h-1zM32 18h1v1h-1zM34 18h1v1h-1zM36 18h1v1h-1zM40 18h1v1h-1zM43 18h1v1h-1zM45 18h1v1h-1zM47 18h2v1h-2zM50 18h3v1h-3zM1 19h3v1h-3zM9 19h2v1h-2zM12 19h1v1h-1zM14 19h1v1h-1zM16 19h2v1h-2zM19 19h1v1h-1zM21 19h2v1h-2zM24 19h2v1h-2zM28 19h1v1h-1zM30 19h2v1h-2zM33 19h2v1h-2zM36 19h3v1h-3zM41 19h5v1h-5zM52 19h1v1h-1zM0 20h3v1h-3zM4 20h1v1h-1zM6 20h1v1h-1zM8 20h1v1h-1zM11 20h1v1h-1zM13 20h1v1h-1zM18 20h1v1h-1zM20 20h1v1h-1zM23 20h8v1h-8zM34 20h2v1h-2zM38 20h4v1h-4zM44 20h1v1h-1zM46 20h3v1h-3zM50 20h2v1h-2zM0 21h2v1h-2zM5 21h1v1h-1zM9 21h1v1h-1zM11 21h1v1h-1zM15 21h2v1h-2zM22 21h2v1h-2zM25 21h1v1h-1zM28 21h1v1h-1zM30 21h3v1h-3zM34 21h1v1h-1zM37 21h2v1h-2zM43 21h5v1h-5zM51 21h2v1h-2zM0 22h3v1h-3zM6 22h2v1h-2zM11 22h5v1h-5zM17 22h3v1h-3zM23 22h2v1h-2zM29 22h2v1h-2zM33 22h1v1h-1zM35 22h1v1h-1zM39 22h2v1h-2zM43 22h3v1h-3zM49 22h3v1h-3zM0 23h2v1h-2zM4 23h1v1h-1zM7 23h1v1h-1zM10 23h2v1h-2zM17 23h2v1h-2zM22 23h5v1h-5zM28 23h1v1h-1zM30 23h4v1h-4zM36 23h1v1h-1zM43 23h4v1h-4zM48 23h1v1h-1zM50 23h1v1h-1zM52 23h1v1h-1zM1 24h1v1h-1zM4 24h6v1h-6zM11 24h1v1h-1zM13 24h1v1h-1zM15 24h2v1h-2zM21 24h2v1h-2zM24 24h8v1h-8zM34 24h1v1h-1zM36 24h7v1h-7zM44 24h6v1h-6zM0 25h1v1h-1zM2 25h1v1h-1zM4 25h1v1h-1zM8 25h1v1h-1zM11 25h1v1h-1zM13 25h1v1h-1zM15 25h1v1h-1zM19 25h1v1h-1zM23 25h2v1h-2zM28 25h4v1h-4zM36 25h1v1h-1zM38 25h1v1h-1zM41 25h1v1h-1zM44 25h1v1h-1zM48 25h1v1h-1zM1 26h4v1h-4zM6 26h1v1h-1zM8 26h1v1h-1zM11 26h1v1h-1zM14 26h1v1h-1zM23 26h2v1h-2zM26 26h1v1h-1zM28 26h3v1h-3zM33 26h1v1h-1zM36 26h2v1h-2zM39 26h1v1h-1zM41 26h1v1h-1zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM51 26h2v1h-2zM0 27h1v1h-1zM3 27h2v1h-2zM8 27h4v1h-4zM13 27h4v1h-4zM19 27h2v1h-2zM22 27h3v1h-3zM28 27h1v1h-1zM30 27h2v1h-2zM36 27h1v1h-1zM42 27h1v1h-1zM44 27h1v1h-1zM48 27h1v1h-1zM52 27h1v1h-1zM1 28h1v1h-1zM4 28h5v1h-5zM10 28h4v1h-4zM15 28h3v1h-3zM19 28h2v1h-2zM24 28h7v1h-7zM37 28h1v1h-1zM40 28h1v1h-1zM44 28h6v1h-6zM0 29h4v1h-4zM8 29h2v1h-2zM15 29h2v1h-2zM18 29h3v1h-3zM22 29h1v1h-1zM25 29h1v1h-1zM29 29h1v1h-1zM31 29h1v1h-1zM34 29h1v1h-1zM37 29h4v1h-4zM42 29h1v1h-1zM46 29h1v1h-1zM48 29h1v1h-1zM51 29h1v1h-1zM3 30h2v1h-2zM6 30h1v1h-1zM9 30h1v1h-1zM12 30h2v1h-2zM15 30h2v1h-2zM18 30h2v1h-2zM25 30h3v1h-3zM29 30h1v1h-1zM34 30h1v1h-1zM36 30h1v1h-1zM39 30h1v1h-1zM42 30h1v1h-1zM44 30h4v1h-4zM52 30h1v1h-1zM3 31h1v1h-1zM7 31h1v1h-1zM9 31h1v1h-1zM11 31h1v1h-1zM13 31h1v1h-1zM16 31h1v1h-1zM19 31h3v1h-3zM24 31h3v1h-3zM30 31h2v1h-2zM33 31h3v1h-3zM38 31h2v1h-2zM41 31h2v1h-2zM52 31h1v1h-1zM0 32h1v1h-1zM3 32h1v1h-1zM5 32h4v1h-4zM10 32h2v1h-2zM14 32h3v1h-3zM18 32h5v1h-5zM29 32h1v1h-1zM31 32h9v1h-9zM41 32h1v1h-1zM44 32h4v1h-4zM51 32h2v1h-2zM5 33h1v1h-1zM13 33h3v1h-3zM18 33h1v1h-1zM20 33h2v1h-2zM23 33h1v1h-1zM26 33h6v1h-6zM34 33h3v1h-3zM40 33h1v1h-1zM42 33h2v1h-2zM47 33h2v1h-2zM50 33h1v1h-1zM52 33h1v1h-1zM1 34h2v1h-2zM5 34h3v1h-3zM9 34h3v1h-3zM13 34h3v1h-3zM21 34h1v1h-1zM26 34h1v1h-1zM29 34h4v1h-4zM34 34h1v1h-1zM37 34h3v1h-3zM47 34h5v1h-5zM5 35h1v1h-1zM7 35h3v1h-3zM11 35h1v1h-1zM13 35h3v1h-3zM18 35h1v1h-1zM22 35h1v1h-1zM25 35h2v1h-2zM28 35h2v1h-2zM31 35h1v1h-1zM36 35h1v1h-1zM39 35h1v1h-1zM42 35h1v1h-1zM44 35h1v1h-1zM46 35h1v1h-1zM48 35h1v1h-1zM0 36h1v1h-1zM2 36h2v1h-2zM5 36h3v1h-3zM9 36h5v1h-5zM15 36h1v1h-1zM17 36h1v1h-1zM20 36h1v1h-1zM23 36h2v1h-2zM29 36h2v1h-2zM33 36h1v1h-1zM36 36h7v1h-7zM44 36h3v1h-3zM49 36h1v1h-1zM51 36h2v1h-2zM0 37h2v1h-2zM3 37h1v1h-1zM8 37h1v1h-1zM10 37h4v1h-4zM16 37h1v1h-1zM19 37h3v1h-3zM23 37h3v1h-3zM27 37h2v1h-2zM33 37h1v1h-1zM36 37h1v1h-1zM43 37h1v1h-1zM46 37h1v1h-1zM48 37h1v1h-1zM50 37h1v1h-1zM52 37h1v1h-1zM5 38h3v1h-3zM9 38h1v1h-1zM11 38h2v1h-2zM14 38h2v1h-2zM17 38h1v1h-1zM19 38h1v1h-1zM26 38h2v1h-2zM29 38h2v1h-2zM32 38h1v1h-1zM34 38h1v1h-1zM36 38h1v1h-1zM38 38h2v1h-2zM42 38h2v1h-2zM45 38h1v1h-1zM47 38h1v1h-1zM49 38h2v1h-2zM0 39h1v1h-1zM2 39h4v1h-4zM7 39h3v1h-3zM11 39h2v1h-2zM17 39h2v1h-2zM20 39h1v1h-1zM22 39h1v1h-1zM24 39h1v1h-1zM26 39h1v1h-1zM29 39h1v1h-1zM31 39h1v1h-1zM33 39h1v1h-1zM36 39h1v1h-1zM40 39h1v1h-1zM42 39h1v1h-1zM44 39h1v1h-1zM48 39h2v1h-2zM2 40h1v1h-1zM6 40h1v1h-1zM9 40h1v1h-1zM12 40h1v1h-1zM14 40h2v1h-2zM22 40h1v1h-1zM24 40h2v1h-2zM28 40h1v1h-1zM31 40h6v1h-6zM38 40h1v1h-1zM41 40h1v1h-1zM44 40h1v1h-1zM46 40h3v1h-3zM50 40h3v1h-3zM4 41h2v1h-2zM8 41h1v1h-1zM11 41h2v1h-2zM16 41h4v1h-4zM23 41h2v1h-2zM27 41h1v1h-1zM30 41h1v1h-1zM35 41h1v1h-1zM43 41h1v1h-1zM45 41h2v1h-2zM48 41h1v1h-1zM50 41h3v1h-3zM0 42h2v1h-2zM3 42h7v1h-7zM11 42h4v1h-4zM18 42h3v1h-3zM22 42h2v1h-2zM25 42h4v1h-4zM30 42h1v1h-1zM36 42h2v1h-2zM39 42h1v1h-1zM41 42h1v1h-1zM48 42h3v1h-3zM1 43h2v1h-2zM10 43h2v1h-2zM13 43h2v1h-2zM17 43h1v1h-1zM25 43h1v1h-1zM28 43h2v1h-2zM31 43h1v1h-1zM34 43h1v1h-1zM36 43h1v1h-1zM38 43h2v1h-2zM42 43h1v1h-1zM45 43h1v1h-1zM47 43h3v1h-3zM52 43h1v1h-1zM3 44h1v1h-1zM6 44h1v1h-1zM11 44h6v1h-6zM21 44h2v1h-2zM24 44h11v1h-11zM37 44h2v1h-2zM42 44h1v1h-1zM44 44h9v1h-9zM8 45h2v1h-2zM11 45h1v1h-1zM15 45h1v1h-1zM18 45h3v1h-3zM23 45h2v1h-2zM28 45h2v1h-2zM32 45h1v1h-1zM34 45h2v1h-2zM37 45h2v1h-2zM40 45h1v1h-1zM43 45h2v1h-2zM48 45h1v1h-1zM0 46h7v1h-7zM8 46h2v1h-2zM11 46h1v1h-1zM14 46h1v1h-1zM18 46h1v1h-1zM21 46h1v1h-1zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h2v1h-2zM31 46h3v1h-3zM36 46h1v1h-1zM39 46h2v1h-2zM42 46h1v1h-1zM44 46h1v1h-1zM46 46h1v1h-1zM48 46h2v1h-2zM51 46h1v1h-1zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h1v1h-1zM10 47h3v1h-3zM15 47h2v1h-2zM18 47h1v1h-1zM20 47h1v1h-1zM23 47h2v1h-2zM28 47h1v1h-1zM30 47h6v1h-6zM41 47h1v1h-1zM44 47h1v1h-1zM48 47h1v1h-1zM52 47h1v1h-1zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM8 48h1v1h-1zM10 48h2v1h-2zM13 48h1v1h-1zM15 48h1v1h-1zM19 48h2v1h-2zM22 48h7v1h-7zM31 48h1v1h-1zM34 48h16v1h-16zM51 48h1v1h-1zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h1v1h-1zM14 49h6v1h-6zM23 49h4v1h-4zM30 49h7v1h-7zM39 49h1v1h-1zM42 49h5v1h-5zM50 49h2v1h-2zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM8 50h1v1h-1zM11 50h4v1h-4zM18 50h3v1h-3zM23 50h1v1h-1zM27 50h1v1h-1zM29 50h1v1h-1zM34 50h1v1h-1zM36 50h1v1h-1zM42 50h2v1h-2zM46 50h3v1h-3zM51 50h1v1h-1zM0 51h1v1h-1zM6 51h1v1h-1zM8 51h1v1h-1zM10 51h4v1h-4zM15 51h3v1h-3zM19 51h1v1h-1zM22 51h1v1h-1zM24 51h1v1h-1zM27 51h3v1h-3zM33 51h1v1h-1zM35 51h2v1h-2zM40 51h1v1h-1zM42 51h1v1h-1zM47 51h2v1h-2zM50 51h1v1h-1zM0 52h7v1h-7zM9 52h4v1h-4zM14 52h1v1h-1zM16 52h2v1h-2zM19 52h4v1h-4zM25 52h2v1h-2zM30 52h1v1h-1zM33 52h2v1h-2zM36 52h2v1h-2zM42 52h1v1h-1zM44 52h2v1h-2zM49 52h1v1h-1zM51 52h1v1h-1z"
};
function Piece({
  mao = true,
  mascote = true
}) {
  const {
    T,
    CUES
  } = useComposition();
  const a = CUES.Sensor,
    b = CUES.Gas,
    c = CUES.Laudo,
    D = 26.83;
  const root = React.useRef(null);
  const A = useAnchors(root);
  const rolo = MOTION.enter(T, a + 0.4, a + 1.2);
  const lido = T < a + 0.4 ? null : lerp(9.5, 6.49, rolo);
  const tPega = a + 2.4,
    d0 = a + 2.5,
    d1 = a + 4.0;
  const amb = 25 + 10 * MOTION.enter(T, d0, d1);
  const fase = T < a + 1.2 ? 0 : 1;
  const tTab = b + 1.1,
    tGas = b + 1.25;
  const taps = [0, 0.45, 0.9, 1.35].map(d => tGas + 1.6 + d);
  const psi = 110 + 12 * MOTION.enter(T, taps[0], taps[3] + 0.2);
  const tM = c + 0.4,
    L = c + 0.65;
  const k = costura(T, a, D);
  const tIni = [-1, tGas];
  const tr = A.pos.trilho;
  const knob = v => tr ? {
    x: tr.x - tr.w / 2 + tr.w * (v - T_MIN) / (T_MAX - T_MIN),
    y: tr.y + 2
  } : 'trilho';
  const maoO = (mao ? 1 : 0) * Math.max(MOTION.enter(T, a + 0.45, a + 0.75) * (1 - MOTION.enter(T, d1 + 0.5, d1 + 0.8)), MOTION.enter(T, b, b + 0.3) * (1 - MOTION.enter(T, L, L + 0.25)));
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      height: 844,
      overflow: 'hidden',
      background: '#0C2747'
    }
  }, React.createElement(Palco, {
    rootRef: root,
    label: `Video 03 · ${Math.floor(T)}s`,
    oculto: k.o >= 0.999 || T >= L + 0.45,
    telaX: k.telaX
  }, React.createElement("div", {
    style: visTela(T, tIni, 0)
  }, React.createElement(Aferir, {
    A: A,
    lido: lido,
    amb: amb,
    fase: fase
  })), React.createElement("div", {
    style: visTela(T, tIni, 1)
  }, React.createElement(GasSH, {
    A: A,
    T: T,
    psi: psi,
    taps: taps,
    tM: tM,
    enviado: T >= tM + 0.1
  })), React.createElement(Hand, {
    T: T,
    A: A,
    o: maoO,
    start: {
      x: 320,
      y: 500
    },
    taps: [tPega, tTab, ...taps, tM],
    moves: [{
      s: a + 1.5,
      e: a + 2.3,
      to: knob(25)
    }, {
      s: d0,
      e: d1,
      to: knob(35)
    }, {
      s: b + 0.2,
      e: b + 0.95,
      to: {
        x: 195,
        y: 108
      }
    }, {
      s: tGas + 0.5,
      e: tGas + 1.4,
      to: 'mais',
      dx: 2,
      dy: 4
    }, {
      s: c - 1.4,
      e: c + 0.2,
      to: 'mandar',
      dx: 40,
      dy: 4
    }]
  })), T >= L && React.createElement(LaudoDoc, {
    T: T,
    c: L,
    num: "1051",
    label: "Video 03 \xB7 Laudo N\xBA 1051",
    cliente: "Padaria Sol",
    equip: "LG \xB7 12.000 BTU/h \xB7 R-32",
    qr: QR1051,
    valor: "R$ 370,00",
    linhas: [],
    servicos: [['Higienização Técnica Completa (Serpentina, Turbina e Bandeja)', 'R$ 250,00'], ['Visita Técnica e Diagnóstico Instrumentado', 'R$ 120,00']],
    prev: "Identifica a causa exata evitando troca desnecess\xE1ria de componentes."
  }, React.createElement("div", {
    style: {
      ...CX,
      padding: '6px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SENSOR NTC \xB7 10K"), React.createElement(SeloDoc, {
    ok: true
  }, "SENSOR BOM")), React.createElement("b", {
    style: {
      font: `700 17px/1.1 ${MONO}`
    }
  }, "6,49 k\u03A9 a 35,0 \xB0C"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid #E2E8F0',
      paddingTop: 5
    }
  }, React.createElement("span", {
    style: ROTD
  }, "G\xC1S & SH \xB7 R-32"), React.createElement(SeloDoc, {
    ok: true
  }, "CARGA IDEAL")), React.createElement("b", {
    style: {
      font: `700 17px/1.1 ${MONO}`
    }
  }, "122 PSI \xB7 SH 8,8 \xB0C"))), React.createElement(Faixa, {
    T: T,
    t0: [a, b, c],
    mascote: mascote,
    legs: [[['Ajuste 35 °C:'], ['\n'], ['6,49 kΩ', 'v'], ['\n'], ['Sensor bom.', 'a']], [['Bata 122 PSI no'], ['\n'], ['R-32: '], ['SH 8,8 °C', 'v'], ['\n'], ['carga ideal.', 'a']], [['Zero chute:'], ['\n'], ['R$ 370 no Pix', 'a'], ['\n'], ['gás intacto.', 'a']]]
  }), k.o > 0.001 && React.createElement(Gancho, {
    t: k.t,
    o: k.o,
    x: k.x,
    k: 1.1,
    dur: 6.7,
    label: "Video 03",
    img: GPV + "img/t16_vacuo_botija.webp",
    h1: ['Sol forte na', 'condensadora?'],
    g: ['Confirme sensor e gás', 'sem conta de cabeça.'],
    aviso: "\u2715 JOGAR FLUIDO FORA"
  }));
}
  window.GPVerticais.v03 = Piece;
})();

/* ── Video04Ch25Trava30s · video04-ch25-trava-30s.jsx · 27,9 s ── */
(function () {
  const GPV = window.GPV_BASE;
  const useComposition = () => React.useContext(window.GPVCtx);
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
    let raf = 0,
      vivo = true;
    const medir = () => {
      if (!vivo) return;
      const root = rootRef.current;
      const ks = Object.keys(els.current);
      if (!root || !root.offsetWidth || !ks.length) {
        raf = requestAnimationFrame(medir);
        return;
      }
      const out = {};
      let ok = true;
      ks.forEach(k => {
        const el = els.current[k];
        let x = 0,
          y = 0,
          e = el;
        while (e && e !== root) {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        if (e !== root || !el.offsetWidth) ok = false;
        out[k] = {
          x: Math.round(x + el.offsetWidth / 2),
          y: Math.round(y + el.offsetHeight / 2),
          w: el.offsetWidth
        };
      });
      if (!ok) {
        raf = requestAnimationFrame(medir);
        return;
      }
      setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
    };
    medir();
    const t1 = setTimeout(medir, 400),
      t2 = setTimeout(medir, 1500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    const ro = typeof ResizeObserver !== 'undefined' && rootRef.current ? new ResizeObserver(() => medir()) : null;
    if (ro) ro.observe(rootRef.current);
    return () => {
      vivo = false;
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      if (ro) ro.disconnect();
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
const TELA = 660;
IC.busca = [C_(11, 11, 8), 'm21 21-4.3-4.3'];
IC.termo = ['M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'];
IC.pulso = ['M22 12h-4l-3 9L9 3l-3 9H2'];
SEG['-'] = 'G';
const NTC = {
  B: Math.log(0.649) / (1 / 308.15 - 1 / 298.15),
  R25: 10
};
const esperado = tc => NTC.R25 * Math.exp(NTC.B * (1 / (tc + 273.15) - 1 / 298.15));
const tempDe = r => 1 / (1 / 298.15 + Math.log(r / NTC.R25) / NTC.B) - 273.15;
const n2 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const n1 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});
const KICK = {
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '.12em',
  color: '#334155',
  whiteSpace: 'nowrap'
};
function Status() {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 28,
      padding: '0 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 700,
      color: '#0C2747'
    }
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    style: {
      width: 24,
      height: 11,
      borderRadius: 3,
      background: '#0C2747'
    }
  }));
}
function Topo({
  titulo,
  chip,
  voltar = true,
  children
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 28,
      height: 46,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, voltar && React.createElement("div", {
    style: ST.S21
  }, "\u2039"), React.createElement("div", {
    style: {
      ...ST.S14,
      fontSize: 23,
      lineHeight: 1.2
    }
  }, titulo), chip && React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '8px 9px'
    }
  }, chip), children);
}
const Tag = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    background: 'linear-gradient(180deg,#FFFFFF,#E8EBEF)',
    border: '1px solid #5A6A7E',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1,
    color: '#0C2747',
    whiteSpace: 'nowrap'
  }
}, children);
const Cod = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
    background: '#0C2747',
    color: '#FFFFFF',
    font: `700 13px/1 ${MONO}`
  }
}, children);
const Selo = ({
  cor,
  children
}) => {
  const C = {
    v: ['#14532D', '#DCFCE7', '#15803D'],
    r: ['#7F1D1D', '#FEE2E2', '#B91C1C'],
    m: ['#FFFFFF', '#0C2747', '#081B33']
  }[cor];
  return React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 30,
      padding: '0 11px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      borderRadius: 999,
      background: C[1],
      border: `1.5px solid ${C[2]}`,
      color: C[0],
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, children);
};
const ROTD = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.1em',
  lineHeight: 1.2,
  color: '#334155'
};
const CX = {
  boxSizing: 'border-box',
  background: '#FFFFFF',
  border: '1.5px solid #A3ACB9',
  borderRadius: 10
};
const T_MIN = 15,
  T_MAX = 40;
function Aferir({
  A,
  lido,
  amb,
  fase
}) {
  const esp = esperado(amb);
  const desv = lido == null ? null : (lido - esp) / esp * 100;
  const marca = lido == null ? null : tempDe(lido);
  const bom = fase !== 0 && desv != null && Math.abs(desv) <= 5;
  const lcd = lido == null ? '-.--' : lido.toFixed(2);
  const pct = v => (v - T_MIN) / (T_MAX - T_MIN) * 100;
  const linha = (rot, val, cor) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid rgba(63,50,16,.2)',
      padding: '5px 0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: '#3F3210'
    }
  }, rot), React.createElement("b", {
    style: {
      font: `700 17px/1.2 ${MONO}`,
      color: cor || '#0C2747'
    }
  }, val));
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === 0 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 396,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "termo",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      ...KICK,
      flex: 1,
      color: '#0C2747'
    }
  }, "SENSOR NTC"), fase === 0 ? React.createElement(Selo, {
    cor: "m"
  }, "\u25B8 MEDINDO") : bom ? React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "SENSOR BOM") : React.createElement(Selo, {
    cor: "r"
  }, React.createElement(Ic, {
    n: "fechar",
    s: 12,
    c: "#B91C1C",
    w: 3
  }), "FORA DA CURVA")), React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      border: bom ? '2px solid #22C55E' : ST.S161.border,
      boxShadow: bom ? '0 0 0 4px rgba(34,197,94,.2)' : ST.S161.boxShadow
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, "O SENSOR MARCA"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, React.createElement("b", {
    style: {
      font: `700 44px/1.05 ${MONO}`,
      fontVariantNumeric: 'tabular-nums'
    }
  }, marca == null ? '—' : n1(marca)), React.createElement("span", {
    style: {
      font: `700 16px/1 ${MONO}`
    }
  }, "\xB0C")), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      lineHeight: 1.2,
      color: fase === 0 ? '#334155' : bom ? '#15803D' : '#B91C1C',
      marginBottom: 4
    }
  }, fase === 0 ? '▸ MEDINDO' : bom ? `✓ AMBIENTE ${Math.round(amb)} °C` : `▲ +${n1(marca - amb)} °C DO AMBIENTE`), linha('LIDO', lido == null ? '— kΩ' : n2(lido) + ' kΩ'), linha('ESPERADO', n2(esp) + ' kΩ'), linha('DESVIO', desv == null ? '—' : (desv > 0.05 ? '+' : '') + n1(Math.abs(desv) < 0.05 ? 0 : desv) + '%', desv == null ? null : Math.abs(desv) <= 5 ? '#15803D' : '#7F1D1D')), React.createElement(Multimetro, {
    leitura: lcd,
    h: 168,
    pilula: "20k"
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("span", {
    style: KICK
  }, "TEMPERATURA REAL"), React.createElement("b", {
    style: {
      font: `700 21px/1.2 ${MONO}`
    }
  }, n1(amb), " \xB0C")), React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      margin: '0 14px'
    }
  }, React.createElement("span", {
    ref: A.ref('trilho'),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 14,
      height: 6,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(34)}%`,
      width: `${pct(36) - pct(34)}%`,
      top: 14,
      height: 6,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(amb)}%`,
      top: 2,
      width: 30,
      height: 30,
      marginLeft: -15,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
      border: '3px solid #FFB020',
      boxShadow: '0 2px 5px rgba(9,30,66,.35)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      margin: '-12px 14px 0',
      font: `700 13px/1 ${MONO}`,
      color: '#334155'
    }
  }, [15, 25, 35, 40].map(v => React.createElement("span", {
    key: v,
    style: {
      position: 'absolute',
      left: `${pct(v)}%`,
      transform: v === 40 ? 'translateX(-100%)' : 'translateX(-50%)'
    }
  }, v === 40 ? '40 °C' : v)))), React.createElement("div", {
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 544,
      height: 52,
      gap: 8,
      fontSize: 18
    }
  }, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Servico({
  r,
  nome,
  img,
  v,
  c,
  o = 1,
  y = 0
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      opacity: o,
      transform: `translateY(${y}px)`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S23,
      minHeight: 40,
      height: 40
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
      letterSpacing: '-.01em',
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
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "COBRAR DO CLIENTE \xB7 R$"), React.createElement("div", {
    ref: r,
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, v)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "MEU CUSTO DA PE\xC7A \xB7 R$"), React.createElement("div", {
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, c))));
}
IC.alerta = ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'];
IC.escudo = ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'];
IC.gas = [R_(7, 6, 10, 16, 4), 'M10 6V3h4v3', 'M7 12h10'];
const BTN_R = css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#DC4545 0%,#C22D2D 45%,#9B1C1C 100%);border:1px solid #7F1D1D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #7F1D1D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em");
const XF = 0.28;
const visTela = (T, tIni, i) => {
  const pi = i === 0 ? 1 : MOTION.enter(T, tIni[i], tIni[i] + XF),
    po = i === tIni.length - 1 ? 0 : MOTION.enter(T, tIni[i + 1], tIni[i + 1] + XF);
  return {
    position: 'absolute',
    inset: 0,
    opacity: pi * (1 - po)
  };
};
const costura = (T, a, D) => {
  const sai = MOTION.enter(T, a, a + 0.45),
    fim = MOTION.enter(T, D - 0.4, D);
  return {
    o: fim > 0 ? fim : 1 - sai,
    x: fim > 0 ? 0 : -28 * sai,
    t: fim > 0 ? 0 : T,
    telaX: 24 * (1 - sai)
  };
};
function Abas({
  ativa,
  p = 1
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === ativa && p > 0.5 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t)));
}
function Mandar({
  r,
  T,
  t,
  feito
}) {
  return React.createElement("div", {
    ref: r,
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      gap: 8,
      fontSize: 18,
      height: 52,
      transform: `scale(${MOTION.press(T, t)})`
    }
  }, feito ? React.createElement(React.Fragment, null, React.createElement(Ic, {
    n: "ok",
    s: 20,
    c: "#FFFFFF",
    w: 3
  }), "ENVIADO PARA O LAUDO") : React.createElement(React.Fragment, null, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Sintomas({
  A,
  foco,
  alvo = 1
}) {
  const itens = [[GPV + 'img/t04_termometro_nivel.webp', 'Liga, mas não gela', 'Ventila normal, sem frio', 'D-001', ['Convencional e Inverter', 'Refrigeração']], [GPV + 'img/t10_sensor_ntc.webp', 'Split / Inverter para após minutos', 'Perde frio após minutos', 'D-004', ['Inverter', 'Sensor NTC', 'Multímetro']], [GPV + 'img/t01_alicate.webp', 'Compressor desarma no térmico', 'Desliga sozinho após minutos', 'D-002', ['Convencional e Inverter', 'Alicate amperímetro']]];
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "SINTOMAS",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 46,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(Ic, {
    n: "busca",
    s: 20,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: '#334155'
    }
  }, "Buscar sintoma, pe\xE7a ou D-033")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 140,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      lineHeight: 1.2
    }
  }, "SPLIT INVERTER E PLACAS ELETR\xD4NICAS"), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 158,
      bottom: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, itens.map(([img, t, s, c, tags], i) => {
    const on = i === alvo && foco > 0;
    return React.createElement("div", {
      key: c,
      ref: i === alvo ? A.ref('alvo') : undefined,
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 14,
        border: on ? '2px solid #22C55E' : CARD.border,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.22)` : CARD.boxShadow,
        margin: on ? -1 : 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("img", {
      src: img,
      alt: "",
      style: {
        flex: 'none',
        width: 54,
        height: 54,
        borderRadius: 10,
        objectFit: 'cover',
        border: '1.5px solid #2A5C8F'
      }
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        whiteSpace: 'normal'
      }
    }, React.createElement("b", {
      style: {
        fontSize: 19.5,
        fontWeight: 600,
        lineHeight: 1.18
      }
    }, t), React.createElement("span", {
      style: {
        fontSize: 15.5,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#334155'
      }
    }, s))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, tags.map(g => React.createElement(Tag, {
      key: g
    }, g)), React.createElement("span", {
      style: {
        flex: 1
      }
    }), React.createElement(Cod, null, c)));
  })));
}
function Diagnostico({
  A,
  barra,
  foco,
  chip,
  titulo,
  sub,
  img,
  cs
}) {
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "DIAGN\xD3STICO",
    chip: chip
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 76,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 9,
      objectFit: 'cover',
      border: '1.5px solid #2A5C8F'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, sub))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 170,
      height: 434,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "pulso",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: KICK
  }, "CAUSAS PROV\xC1VEIS \xB7 1\xBA \u2192 5\xBA")), cs.map(([p, nome, rank, det], i) => {
    const on = i === 0 && foco > 0;
    return React.createElement("div", {
      key: nome,
      ref: i === 0 ? A.ref('causa1') : undefined,
      style: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '72px minmax(0,1fr)',
        gap: 4,
        padding: '11px 12px',
        borderRadius: 10,
        border: on ? '2px solid #22C55E' : '2px solid transparent',
        borderTop: i && !on ? '1px solid #E2E8F0' : undefined,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.2)` : 'none'
      }
    }, React.createElement("b", {
      style: {
        font: `700 25px/1.1 ${MONO}`
      }
    }, p, "%"), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, React.createElement("b", {
      style: {
        minWidth: 0,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.15,
        whiteSpace: 'normal'
      }
    }, nome), React.createElement("span", {
      style: {
        height: 8,
        borderRadius: 4,
        background: '#E5E2DC',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        display: 'block',
        height: '100%',
        width: `${p * barra}%`,
        borderRadius: 4,
        background: on ? '#15803D' : '#0C2747'
      }
    })), React.createElement("span", {
      style: {
        font: `700 13px/1.2 ${MONO}`,
        color: '#334155',
        letterSpacing: '.02em'
      }
    }, rank), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.25,
        color: '#1E293B',
        whiteSpace: 'normal',
        textWrap: 'pretty'
      }
    }, det)));
  })));
}
function LaudoDoc({
  T,
  c,
  num,
  label,
  cliente,
  equip,
  equipExtra,
  linhas,
  servicos,
  prev,
  qr,
  valor,
  children
}) {
  const o = MOTION.enter(T, c, c + 0.45);
  const pv = MOTION.pulse(Math.max(0, T - (c + 1.1)), 1.6) * MOTION.enter(T, c + 1.1, c + 1.4);
  const qo = MOTION.enter(T, c + 2.1, c + 2.5);
  const L13 = {
    fontSize: 13,
    lineHeight: 1.25,
    color: '#1E293B',
    whiteSpace: 'normal'
  };
  return React.createElement("div", {
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: -1,
      top: -1,
      width: 392,
      height: TELA + 1,
      zIndex: 60,
      overflow: 'hidden',
      background: `rgba(8,30,56,${o})`,
      fontFamily: DOC,
      color: '#0C2747',
      whiteSpace: 'nowrap'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 17,
      right: 17,
      top: 13,
      bottom: 16,
      padding: 10,
      boxSizing: 'border-box',
      borderRadius: 14,
      background: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(0,0,0,.35)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      opacity: o,
      transform: `translateY(${(1 - o) * 26}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 12,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: BARLOW,
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '.12em'
    }
  }, "BANCADA GELOPRO"), React.createElement("span", {
    style: {
      ...ROTD,
      letterSpacing: '.04em',
      color: '#BFD7F2'
    }
  }, "LAUDO DE APROVA\xC7\xC3O")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 15,
      lineHeight: 1.2
    }
  }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 22px/1.1 ${MONO}`
    }
  }, "N\xBA ", num))), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      ...L13,
      whiteSpace: 'nowrap'
    }
  }, React.createElement("b", null, "Cliente:"), " ", cliente), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 12px/1.25 ${MONO}`
    }
  }, equip)), equipExtra && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Sintoma:"), " Diagn\xF3stico na bancada"), React.createElement("b", {
    style: {
      flex: 'none',
      fontSize: 13,
      lineHeight: 1.25
    }
  }, equipExtra)), linhas.map(([k, v]) => React.createElement("span", {
    key: k,
    style: L13
  }, React.createElement("b", null, k, ":"), " ", v))), children, React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SERVI\xC7OS EXECUTADOS & PREVEN\xC7\xC3O"), servicos.map(([sv, v]) => React.createElement("div", {
    key: sv,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      paddingBottom: 5,
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 13,
      lineHeight: 1.25,
      whiteSpace: 'normal',
      textWrap: 'balance'
    }
  }, sv), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 13px/1.25 ${MONO}`
    }
  }, v))), React.createElement("div", {
    style: {
      position: 'relative',
      background: '#F0FDF4',
      borderLeft: '4px solid #15803D',
      borderRadius: 6,
      padding: '6px 9px',
      color: '#14532D',
      fontSize: 13,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty',
      overflow: 'hidden',
      boxShadow: `0 0 0 ${3 * pv}px rgba(34,197,94,.35)`
    }
  }, React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Preven\xE7\xE3o:"), " ", prev)), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px 8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: qo > 0.01 ? '2px solid #22C55E' : CX.border,
      boxShadow: `0 0 0 ${4 * qo}px rgba(34,197,94,.22)`
    }
  }, React.createElement("svg", {
    width: qr.n * 2.1,
    height: qr.n * 2.1,
    viewBox: `-2 -2 ${qr.n + 4} ${qr.n + 4}`,
    shapeRendering: "crispEdges",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("rect", {
    x: "-2",
    y: "-2",
    width: qr.n + 4,
    height: qr.n + 4,
    fill: "#FFFFFF"
  }), React.createElement("path", {
    d: qr.d,
    fill: "#000000"
  })), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      whiteSpace: 'normal'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "PIX \xB7 VALOR EXATO"), React.createElement("b", {
    style: {
      font: `700 26px/1.1 ${MONO}`
    }
  }, valor), React.createElement("span", {
    style: {
      borderRadius: 6,
      background: '#15803D',
      color: '#FFFFFF',
      padding: '6px 8px',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, "Responda APROVADO para autorizar o servi\xE7o.")))));
}
const SeloDoc = ({
  ok,
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 24,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    borderRadius: 999,
    background: ok ? '#DCFCE7' : '#FEE2E2',
    border: `1.5px solid ${ok ? '#15803D' : '#B91C1C'}`,
    color: ok ? '#14532D' : '#7F1D1D',
    fontFamily: DOC,
    fontSize: 12,
    fontWeight: 700
  }
}, React.createElement(Ic, {
  n: ok ? 'ok' : 'fechar',
  s: 12,
  c: ok ? '#15803D' : '#B91C1C',
  w: 3
}), children);
function Gravado({
  T,
  t,
  titulo,
  sub,
  children
}) {
  const o = MOTION.enter(T, t, t + 0.45);
  if (o <= 0.001) return null;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40,
      background: `rgba(8,30,56,${0.62 * o})`
    }
  }, React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: o,
      transform: `translateY(${(1 - o) * 40}px)`,
      boxShadow: '0 10px 30px rgba(0,0,0,.35)'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 10,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: '#15803D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 18,
    c: "#FFFFFF",
    w: 3
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '.06em',
      lineHeight: 1.1
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#BFD7F2'
    }
  }, sub))), children));
}
function Registro({
  rot,
  val,
  extra,
  selo,
  o = 1
}) {
  return React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      gap: 4,
      opacity: o,
      transform: `translateY(${(1 - o) * 10}px)`
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
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, rot), React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), selo)), React.createElement("b", {
    style: {
      font: `700 22px/1.15 ${MONO}`
    }
  }, val), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.25,
      color: '#334155',
      whiteSpace: 'normal'
    }
  }, extra));
}
function Gancho({
  t,
  o,
  x = 0,
  k = 1,
  dur = 5,
  img,
  visual,
  h1,
  g,
  aviso,
  label
}) {
  const pz = MOTION.pulse(t, 1.1);
  const zoom = 1 + 0.02 * p01(t, 0, dur);
  const sc = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55)) + 0.025 * Math.sin(2 * Math.PI * t / 1.1);
  const l1 = MOTION.enter(t, 0.7 * k, 1.3 * k),
    l2 = MOTION.enter(t, 1.3 * k, 1.9 * k);
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
      backgroundSize: `${p * 100}% 100%`,
      color: tinta(p)
    }
  }, txt);
  return React.createElement("div", {
    "data-screen-label": `${label} · Gancho · ${Math.floor(t)}s`,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 90,
      opacity: o,
      transform: `translateX(${x}px)`,
      background: 'radial-gradient(120% 80% at 50% 30%,#14365F 0%,#0C2747 55%,#081B33 100%)',
      color: '#FFFFFF',
      fontFamily: BARLOW,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      top: 28,
      bottom: 40,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
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
  }, "\xB7 DIAGN\xD3STICO")), React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '0 10px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      letterSpacing: '.04em'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      transform: `scale(${zoom})`,
      transformOrigin: '50% 50%'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      width: 220,
      height: 220,
      borderRadius: 44,
      background: '#0E2240',
      border: `9px solid rgba(${Math.round(150 + 50 * pz)},28,40,${0.55 + 0.3 * pz})`,
      boxShadow: `0 0 ${18 + 28 * pz}px rgba(220,38,38,${0.25 + 0.4 * pz}),inset 0 0 18px rgba(0,0,0,.45)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, visual ? visual(t) : React.createElement("img", {
    src: img,
    alt: "",
    width: "152",
    height: "152",
    style: {
      width: 152,
      height: 152,
      display: 'block',
      borderRadius: 24,
      boxShadow: '0 6px 18px rgba(0,0,0,.45)'
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 54,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
      background: '#B91C1C',
      border: '1px solid #7F1D1D',
      boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * pz})`,
      font: "800 24px/1.1 'Barlow Semi Condensed',sans-serif",
      letterSpacing: '.04em',
      whiteSpace: 'nowrap',
      transform: `scale(${sc})`
    }
  }, aviso)), React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-.005em',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", null, h1[0]), React.createElement("span", null, h1[1])), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1.1
    }
  }, grifo(g[0], l1), grifo(g[1], l2)))));
}
const URSOS = [{
  urso: GPV + 'img/mascote/m-maos-cintura.webp',
  ar: 731 / 667,
  sobe: 16,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-aponta-cima.webp',
  ar: 693 / 697,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-joinha.webp',
  ar: 633 / 667,
  desce: 42,
  dir: -30
}];
function Faixa({
  T,
  t0,
  mascote,
  legs,
  dirs = []
}) {
  const y = (1 - MOTION.enter(T, t0[0], t0[0] + 0.45)) * 250;
  const ativo = T >= t0[2] ? 2 : T >= t0[1] ? 1 : 0;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: TELA,
      height: 844 - TELA,
      boxSizing: 'border-box',
      zIndex: 80,
      overflow: 'visible',
      background: '#0C2747',
      borderTop: '2px solid #0265DC',
      fontFamily: BARLOW,
      transform: `translateY(${y}px)`
    }
  }, URSOS.map((u, i) => {
    const ent = MOTION.enter(T, t0[i], t0[i] + 0.3);
    const o = i === ativo ? ent : 0;
    if (o <= 0.001) return null;
    const gp = MOTION.enter(T, t0[i] + 0.45, t0[i] + 1.05);
    return React.createElement(React.Fragment, {
      key: i
    }, mascote && React.createElement("img", {
      src: u.urso,
      alt: "",
      style: {
        position: 'absolute',
        right: dirs[i] ?? u.dir,
        bottom: u.sobe || -(u.desce || 0),
        zIndex: 30,
        width: 226,
        height: 'auto',
        aspectRatio: String(u.ar),
        display: 'block',
        WebkitMaskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        maskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        opacity: o,
        transform: `translateY(${(1 - ent) * 18}px)`,
        transformOrigin: '50% 100%'
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 230,
        boxSizing: 'border-box',
        padding: '12px 0 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: o,
        zIndex: 31
      }
    }, React.createElement("span", {
      style: {
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        height: 28,
        padding: '0 11px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#FACC15',
        color: '#0C2747',
        font: `700 14px/1 ${MONO}`,
        letterSpacing: '.12em'
      }
    }, "PASSO ", i + 1, " DE 3"), React.createElement("div", {
      style: {
        fontSize: 25.5,
        fontWeight: 800,
        lineHeight: 1.12,
        color: '#FFFFFF',
        whiteSpace: 'nowrap'
      }
    }, legs[i].map(([txt, k], j) => txt === '\n' ? React.createElement("br", {
      key: j
    }) : k ? React.createElement("span", {
      key: j,
      style: {
        padding: '0 4px',
        margin: '0 -1px',
        borderRadius: 4,
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
        backgroundImage: `linear-gradient(${k === 'v' ? '#4ADE80,#4ADE80' : '#FFB020,#FFB020'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${gp * 100}% 100%`,
        color: gp > 0.5 ? '#0C2747' : '#FFFFFF'
      }
    }, txt) : React.createElement("span", {
      key: j
    }, txt)))));
  }));
}
function Palco({
  rootRef,
  label,
  oculto,
  telaX,
  children
}) {
  return React.createElement("div", {
    ref: rootRef,
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 390,
      height: TELA,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      ...BG,
      visibility: oculto ? 'hidden' : 'visible',
      color: '#0C2747',
      fontFamily: BARLOW,
      transform: `translateX(${telaX}px)`
    }
  }, React.createElement(Status, null), children);
}
const SecaoCod = ({
  ic,
  children,
  verde
}) => React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    height: 36,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: '#F1F0EC',
    borderTop: '1px solid #D5D3CC',
    borderBottom: '1px solid #D5D3CC'
  }
}, React.createElement(Ic, {
  n: ic,
  s: 18,
  c: "#334155",
  w: 1.8
}), React.createElement("span", {
  style: {
    ...KICK,
    color: verde ? '#15803D' : '#0C2747'
  }
}, children));
function SimLed({
  T
}) {
  const ph = (T % 2 + 2) % 2,
    aceso = ph < 0.25 || ph >= 0.5 && ph < 0.75,
    slot = Math.min(4, Math.floor(ph / 0.25));
  return React.createElement("div", {
    style: {
      ...ST.S161,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 144,
      height: 140,
      boxSizing: 'border-box',
      padding: '10px 12px',
      gap: 10,
      justifyContent: 'flex-start'
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
      ...KICK,
      color: '#3F3210'
    }
  }, "SIMULADOR DE LED"), React.createElement(Cod, null, "LED01 \xB7 2 piscadas")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: '50%',
      boxSizing: 'border-box',
      border: '2px solid #3F3210',
      background: aceso ? 'radial-gradient(circle at 40% 35%,#FFB4B4 0%,#FF3B3B 45%,#B91C1C 100%)' : 'radial-gradient(circle at 40% 35%,#6B2A2A 0%,#3B1010 70%)',
      boxShadow: aceso ? '0 0 14px 4px rgba(255,59,59,.55)' : 'inset 0 2px 4px rgba(0,0,0,.5)'
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr)) 1.4fr',
      gap: 4
    }
  }, ['ACESO', 'APAGADO', 'ACESO', 'APAGADO', 'PAUSA'].map((rot, i) => React.createElement("span", {
    key: i,
    style: {
      boxSizing: 'border-box',
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      font: `700 11px/1 ${MONO}`,
      letterSpacing: '-.02em',
      background: rot === 'ACESO' ? '#B91C1C' : '#FFFEFA',
      color: rot === 'ACESO' ? '#FFFFFF' : '#3F3210',
      border: `1.5px solid ${i === slot ? '#0C2747' : '#A6945F'}`,
      boxShadow: i === slot ? '0 0 0 2px rgba(12,39,71,.25)' : 'none'
    }
  }, rot === 'PAUSA' ? '…' : rot === 'ACESO' ? '●' : '○')))), React.createElement("span", {
    style: {
      font: `700 13px/1.2 ${MONO}`,
      color: '#3F3210'
    }
  }, "\u25CF ACESO 250 ms \xB7 \u25CB APAGADO 250 ms"));
}
function Codigos({
  A,
  T,
  dig,
  caret,
  res,
  glow,
  tBusca
}) {
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "C\xD3DIGOS & LED",
    chip: "LG"
  }), React.createElement("div", {
    ref: A.ref('busca'),
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 50,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: dig || caret ? '2px solid #2A5C8F' : CARD.border,
      transform: `scale(${MOTION.press(T, tBusca)})`
    }
  }, React.createElement(Ic, {
    n: "busca",
    s: 20,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: 600,
      color: dig ? '#0C2747' : '#334155'
    }
  }, dig || (caret ? '' : 'Buscar código ou piscadas'), caret && React.createElement("span", {
    style: {
      width: 2,
      height: 22,
      marginLeft: 1,
      background: '#0C2747',
      opacity: Math.floor(T * 2.5) % 2 ? 0 : 1
    }
  })), dig && React.createElement(Ic, {
    n: "fechar",
    s: 20,
    c: "#2A5C8F",
    w: 2.6
  })), React.createElement("div", {
    style: {
      opacity: 1 - res
    }
  }, React.createElement(SimLed, {
    T: T
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 294,
      overflow: 'hidden'
    }
  }, React.createElement(SecaoCod, {
    ic: "sol"
  }, "PISCADAS DO LED"), React.createElement("div", {
    style: {
      padding: 10,
      display: 'grid',
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
      gap: 8
    }
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map(n => React.createElement("div", {
    key: n,
    style: {
      ...(n === '8' || n === '10+' ? {
        ...ST.S37,
        color: '#5A6A7E'
      } : n === '2' ? ST.S50 : ST.S28),
      minHeight: 50,
      fontSize: 19,
      fontWeight: 600
    }
  }, n)), React.createElement("div", {
    style: {
      ...ST.S37,
      gridColumn: '1 / -1',
      minHeight: 44,
      fontSize: 14,
      letterSpacing: '.04em'
    }
  }, "VER TODOS OS PADR\xD5ES DE LED DESTA MARCA (24)")))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 144,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      opacity: res,
      transform: `translateY(${(1 - res) * 14}px)`
    }
  }, React.createElement("div", {
    style: {
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#F1F0EC'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      height: 40,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 7,
      background: '#0C2747',
      color: '#FFFFFF',
      font: `700 21px/1 ${MONO}`
    }
  }, "CH25"), React.createElement("span", {
    style: {
      borderRadius: 999,
      boxShadow: `0 0 0 ${5 * glow}px rgba(34,197,94,.3)`
    }
  }, React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "N\xC3O \xC9 DEFEITO"))), React.createElement("div", {
    style: {
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      whiteSpace: 'normal'
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, "Tens\xE3o AC de entrada anormal (baixa ou alta)"), React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, "C\xF3digo \xB7 LG \xB7 Split Hi Wall Inverter")), React.createElement(SecaoCod, {
    ic: "documento"
  }, "SIGNIFICA"), React.createElement("div", {
    style: {
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, React.createElement("span", {
    ref: A.ref('protecao'),
    style: {
      boxSizing: 'border-box',
      height: 30,
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 6,
      background: '#15803D',
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.06em',
      boxShadow: `0 0 0 ${4 * glow}px rgba(34,197,94,.28)`
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#FFFFFF",
    w: 3
  }), "PROTE\xC7\xC3O ATIVA \u2014 N\xC3O \xC9 DEFEITO DA PLACA")), React.createElement(SecaoCod, {
    ic: "prancheta",
    verde: true
  }, "\u2713 FA\xC7A NA BANCADA"), React.createElement("div", {
    style: {
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['1', React.createElement(React.Fragment, null, React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "Medir"), " a tens\xE3o da rede sob carga nos bornes (198 a 242 V~)")], ['2', React.createElement(React.Fragment, null, React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "Corrigir"), " disjuntor, cabo ou emenda antes da placa")]].map(([n, txt]) => React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 28,
      height: 28,
      borderRadius: 6,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `700 14px/1 ${MONO}`
    }
  }, n), React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 500,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty'
    }
  }, txt))))), React.createElement("div", {
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 556,
      height: 50,
      gap: 8,
      fontSize: 18
    }
  }, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
const CHEQUES = [['raio', 'ENERGIZADO', true, 'Rede 198–242 V', '198–242 V'], ['desliga', 'DESENERGIZADO E DESCARREGADO', false, 'Capacitor ±5%', '±5% do nominal'], ['desliga', 'DESENERGIZADO', false, 'Sensor NTC', 'na curva 10K']];
function Trava({
  A,
  T,
  abaP,
  marcas,
  tC,
  tM,
  enviado,
  lib
}) {
  const nOk = marcas.filter(Boolean).length,
    livre = nOk === 3;
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "LG"
  }), React.createElement(Abas, {
    ativa: 2,
    p: abaP
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: lerp(0.35, 1, abaP)
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '.12em',
      lineHeight: 1.2
    }
  }, "TRAVA DE 30 SEGUNDOS"), livre ? React.createElement("span", {
    style: {
      borderRadius: 999,
      boxShadow: `0 0 0 ${5 * lib}px rgba(34,197,94,.3)`
    }
  }, React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "TRAVA LIBERADA")) : React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 30,
      padding: '0 11px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      borderRadius: 999,
      background: '#FEF3C7',
      border: '1.5px solid #B45309',
      color: '#78350F',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.06em'
    }
  }, React.createElement(Ic, {
    n: "alerta",
    s: 14,
    c: "#B45309",
    w: 2.4
  }), "TRAVA ", nOk, "/3")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 174,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, CHEQUES.map(([ic, faixa, energ, nome, esp], i) => React.createElement("div", {
    key: nome,
    style: {
      ...CARD,
      height: 120,
      padding: '8px 12px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      boxShadow: marcas[i] ? '0 0 0 2px #22C55E,0 0 0 5px rgba(34,197,94,.2)' : CARD.boxShadow
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 28,
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 6,
      background: energ ? '#B91C1C' : '#15803D',
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em'
    }
  }, React.createElement(Ic, {
    n: ic,
    s: 16,
    c: "#FFFFFF",
    w: 2
  }), faixa), React.createElement("div", {
    style: {
      height: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19,
      fontWeight: 700
    }
  }, nome), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      height: 26,
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 6,
      background: '#F0FDF4',
      border: '1.5px solid #15803D',
      color: '#14532D',
      font: `700 13px/1 ${MONO}`
    }
  }, esp)), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, React.createElement("div", {
    ref: A.ref('ok' + i),
    style: {
      ...(marcas[i] ? ST.S86 : ST.S28),
      minHeight: 40,
      height: 40,
      fontSize: 15,
      gap: 6,
      transform: `scale(${MOTION.press(T, tC[i])})`
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 15,
    c: "#FFFFFF",
    w: 2.6
  }), "NORMAL"), React.createElement("div", {
    style: {
      ...ST.S28,
      minHeight: 40,
      height: 40,
      fontSize: 15,
      gap: 6
    }
  }, React.createElement(Ic, {
    n: "fechar",
    s: 14,
    c: "#FFFFFF",
    w: 2.6
  }), "FORA DA FAIXA"))))), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 556
    }
  }, React.createElement(Mandar, {
    r: A.ref('mandar'),
    T: T,
    t: tM,
    feito: enviado
  }))));
}
const corMix = (a, b, p) => {
  const h = (s, i) => parseInt(s.slice(1 + 2 * i, 3 + 2 * i), 16);
  return 'rgb(' + [0, 1, 2].map(i => Math.round(lerp(h(a, i), h(b, i), p))).join(',') + ')';
};
function VisorCH25(t) {
  const p = MOTION.pulse(t, 0.55),
    cor = corMix('#FF4D4D', '#FACC15', p);
  const ph = t % 1.6 / 1.6,
    bump = c => Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (ph - c) / 0.18))));
  const led = Math.max(bump(0.04), bump(0.34));
  const raios = [0, 45, 90, 135, 180, 225, 270, 315].map(a => {
    const r = a * Math.PI / 180;
    return 'M' + f2(150 + 7 * Math.cos(r)) + ' ' + f2(46 + 7 * Math.sin(r)) + 'L' + f2(150 + 11.5 * Math.cos(r)) + ' ' + f2(46 + 11.5 * Math.sin(r));
  }).join('');
  return React.createElement("svg", {
    width: "176",
    height: "118",
    viewBox: "0 0 176 118",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, React.createElement("rect", {
    x: "1",
    y: "1",
    width: "174",
    height: "116",
    rx: "18",
    fill: "#081526",
    stroke: "#1E3A5F",
    strokeWidth: "2"
  }), React.createElement("rect", {
    x: "10",
    y: "10",
    width: "156",
    height: "72",
    rx: "10",
    fill: "#050E1A"
  }), React.createElement("text", {
    x: "18",
    y: "63",
    fontFamily: "JetBrains Mono,monospace",
    fontWeight: "700",
    fontSize: "42",
    letterSpacing: "-1",
    fill: cor,
    style: {
      filter: `drop-shadow(0 0 ${4 + 6 * (1 - Math.abs(p - 0.5) * 2)}px ${cor})`
    }
  }, "CH25"), React.createElement("circle", {
    cx: "150",
    cy: "46",
    r: "13",
    fill: "#FF3B3B",
    opacity: 0.28 * led
  }), React.createElement("path", {
    d: raios,
    stroke: "#FF6B6B",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    opacity: led
  }), React.createElement("circle", {
    cx: "150",
    cy: "46",
    r: "4",
    fill: corMix('#5A1A1A', '#FF4D4D', led),
    stroke: "#FFB4B4",
    strokeWidth: 0.8 * led
  }), React.createElement("text", {
    x: "150",
    y: "73",
    textAnchor: "middle",
    fontFamily: "JetBrains Mono,monospace",
    fontWeight: "700",
    fontSize: "8.5",
    fill: "#94A3B8"
  }, "LED01"), React.createElement("text", {
    x: "88",
    y: "104",
    textAnchor: "middle",
    fontFamily: "JetBrains Mono,monospace",
    fontWeight: "700",
    fontSize: "11",
    letterSpacing: ".5",
    fill: "#BFD7F2"
  }, "2 PISCADAS \xB7 REDE"));
}
const QR1052 = {
  "payload": "00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406310.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10526304C32E",
  "n": 53,
  "d": "M0 0h7v1h-7zM10 0h1v1h-1zM14 0h3v1h-3zM19 0h1v1h-1zM22 0h2v1h-2zM25 0h1v1h-1zM28 0h1v1h-1zM30 0h1v1h-1zM32 0h1v1h-1zM36 0h3v1h-3zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h1v1h-1zM11 1h3v1h-3zM17 1h1v1h-1zM19 1h3v1h-3zM23 1h2v1h-2zM26 1h2v1h-2zM29 1h2v1h-2zM33 1h1v1h-1zM36 1h2v1h-2zM40 1h4v1h-4zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM9 2h1v1h-1zM11 2h5v1h-5zM18 2h1v1h-1zM21 2h3v1h-3zM25 2h3v1h-3zM29 2h1v1h-1zM33 2h1v1h-1zM37 2h1v1h-1zM40 2h2v1h-2zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM8 3h3v1h-3zM12 3h3v1h-3zM18 3h3v1h-3zM22 3h4v1h-4zM27 3h1v1h-1zM38 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h1v1h-1zM11 4h1v1h-1zM15 4h1v1h-1zM20 4h2v1h-2zM24 4h5v1h-5zM32 4h4v1h-4zM37 4h2v1h-2zM41 4h2v1h-2zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM9 5h1v1h-1zM11 5h1v1h-1zM15 5h1v1h-1zM17 5h3v1h-3zM22 5h1v1h-1zM24 5h1v1h-1zM28 5h3v1h-3zM32 5h1v1h-1zM34 5h3v1h-3zM41 5h2v1h-2zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM8 7h2v1h-2zM11 7h2v1h-2zM14 7h1v1h-1zM18 7h2v1h-2zM21 7h1v1h-1zM23 7h2v1h-2zM28 7h5v1h-5zM34 7h1v1h-1zM38 7h2v1h-2zM43 7h1v1h-1zM1 8h1v1h-1zM3 8h4v1h-4zM8 8h1v1h-1zM14 8h2v1h-2zM19 8h1v1h-1zM21 8h1v1h-1zM24 8h7v1h-7zM33 8h1v1h-1zM35 8h7v1h-7zM43 8h1v1h-1zM45 8h2v1h-2zM48 8h2v1h-2zM51 8h1v1h-1zM0 9h1v1h-1zM3 9h2v1h-2zM7 9h2v1h-2zM10 9h1v1h-1zM12 9h2v1h-2zM16 9h1v1h-1zM19 9h2v1h-2zM25 9h2v1h-2zM30 9h2v1h-2zM34 9h2v1h-2zM37 9h3v1h-3zM41 9h2v1h-2zM44 9h1v1h-1zM50 9h1v1h-1zM52 9h1v1h-1zM0 10h1v1h-1zM2 10h1v1h-1zM6 10h1v1h-1zM9 10h2v1h-2zM14 10h3v1h-3zM18 10h1v1h-1zM24 10h1v1h-1zM27 10h3v1h-3zM31 10h1v1h-1zM33 10h1v1h-1zM35 10h1v1h-1zM39 10h1v1h-1zM41 10h1v1h-1zM44 10h1v1h-1zM47 10h3v1h-3zM0 11h3v1h-3zM5 11h1v1h-1zM8 11h3v1h-3zM13 11h2v1h-2zM17 11h1v1h-1zM19 11h7v1h-7zM27 11h2v1h-2zM31 11h2v1h-2zM34 11h4v1h-4zM40 11h3v1h-3zM46 11h2v1h-2zM51 11h1v1h-1zM1 12h2v1h-2zM5 12h5v1h-5zM11 12h2v1h-2zM16 12h1v1h-1zM18 12h1v1h-1zM21 12h2v1h-2zM25 12h1v1h-1zM28 12h1v1h-1zM31 12h2v1h-2zM34 12h1v1h-1zM36 12h1v1h-1zM38 12h3v1h-3zM43 12h6v1h-6zM50 12h3v1h-3zM0 13h1v1h-1zM3 13h3v1h-3zM7 13h1v1h-1zM9 13h2v1h-2zM12 13h4v1h-4zM18 13h2v1h-2zM22 13h3v1h-3zM26 13h2v1h-2zM29 13h1v1h-1zM31 13h2v1h-2zM35 13h1v1h-1zM37 13h1v1h-1zM40 13h1v1h-1zM43 13h1v1h-1zM49 13h1v1h-1zM51 13h1v1h-1zM0 14h1v1h-1zM2 14h1v1h-1zM5 14h3v1h-3zM10 14h1v1h-1zM12 14h1v1h-1zM14 14h2v1h-2zM17 14h1v1h-1zM19 14h1v1h-1zM22 14h1v1h-1zM24 14h1v1h-1zM26 14h1v1h-1zM29 14h2v1h-2zM34 14h1v1h-1zM36 14h3v1h-3zM41 14h2v1h-2zM45 14h2v1h-2zM50 14h3v1h-3zM0 15h1v1h-1zM2 15h1v1h-1zM5 15h1v1h-1zM7 15h3v1h-3zM13 15h1v1h-1zM15 15h1v1h-1zM20 15h3v1h-3zM25 15h2v1h-2zM28 15h1v1h-1zM30 15h3v1h-3zM35 15h1v1h-1zM40 15h3v1h-3zM44 15h4v1h-4zM51 15h1v1h-1zM1 16h3v1h-3zM5 16h2v1h-2zM9 16h2v1h-2zM12 16h2v1h-2zM18 16h6v1h-6zM25 16h4v1h-4zM34 16h3v1h-3zM38 16h3v1h-3zM42 16h1v1h-1zM44 16h1v1h-1zM48 16h1v1h-1zM50 16h2v1h-2zM0 17h1v1h-1zM2 17h1v1h-1zM9 17h2v1h-2zM12 17h3v1h-3zM16 17h1v1h-1zM18 17h1v1h-1zM22 17h1v1h-1zM25 17h1v1h-1zM27 17h3v1h-3zM31 17h4v1h-4zM40 17h3v1h-3zM44 17h1v1h-1zM46 17h4v1h-4zM52 17h1v1h-1zM1 18h2v1h-2zM4 18h3v1h-3zM8 18h2v1h-2zM12 18h4v1h-4zM20 18h2v1h-2zM23 18h2v1h-2zM28 18h4v1h-4zM35 18h4v1h-4zM41 18h1v1h-1zM44 18h3v1h-3zM48 18h2v1h-2zM51 18h1v1h-1zM7 19h2v1h-2zM10 19h1v1h-1zM13 19h1v1h-1zM15 19h2v1h-2zM20 19h1v1h-1zM22 19h1v1h-1zM24 19h5v1h-5zM30 19h1v1h-1zM32 19h1v1h-1zM34 19h1v1h-1zM36 19h1v1h-1zM39 19h1v1h-1zM41 19h2v1h-2zM49 19h4v1h-4zM0 20h1v1h-1zM3 20h1v1h-1zM6 20h3v1h-3zM10 20h2v1h-2zM16 20h5v1h-5zM22 20h3v1h-3zM27 20h1v1h-1zM29 20h3v1h-3zM35 20h1v1h-1zM37 20h3v1h-3zM41 20h1v1h-1zM43 20h2v1h-2zM47 20h6v1h-6zM0 21h2v1h-2zM4 21h2v1h-2zM8 21h1v1h-1zM10 21h2v1h-2zM14 21h5v1h-5zM20 21h2v1h-2zM23 21h1v1h-1zM25 21h3v1h-3zM30 21h2v1h-2zM33 21h1v1h-1zM37 21h1v1h-1zM39 21h2v1h-2zM43 21h1v1h-1zM47 21h1v1h-1zM50 21h1v1h-1zM0 22h2v1h-2zM5 22h4v1h-4zM12 22h2v1h-2zM16 22h1v1h-1zM18 22h3v1h-3zM24 22h1v1h-1zM26 22h1v1h-1zM28 22h1v1h-1zM30 22h1v1h-1zM32 22h2v1h-2zM38 22h4v1h-4zM43 22h1v1h-1zM45 22h1v1h-1zM47 22h1v1h-1zM49 22h1v1h-1zM51 22h1v1h-1zM0 23h3v1h-3zM5 23h1v1h-1zM8 23h2v1h-2zM13 23h1v1h-1zM16 23h1v1h-1zM18 23h1v1h-1zM21 23h1v1h-1zM24 23h9v1h-9zM34 23h3v1h-3zM39 23h3v1h-3zM43 23h2v1h-2zM47 23h2v1h-2zM50 23h2v1h-2zM2 24h1v1h-1zM4 24h7v1h-7zM13 24h1v1h-1zM15 24h1v1h-1zM17 24h1v1h-1zM19 24h3v1h-3zM23 24h6v1h-6zM30 24h1v1h-1zM32 24h1v1h-1zM35 24h2v1h-2zM39 24h1v1h-1zM42 24h7v1h-7zM50 24h1v1h-1zM52 24h1v1h-1zM0 25h2v1h-2zM3 25h2v1h-2zM8 25h2v1h-2zM11 25h1v1h-1zM20 25h2v1h-2zM23 25h2v1h-2zM28 25h3v1h-3zM32 25h2v1h-2zM36 25h2v1h-2zM39 25h1v1h-1zM41 25h1v1h-1zM43 25h2v1h-2zM48 25h4v1h-4zM2 26h3v1h-3zM6 26h1v1h-1zM8 26h1v1h-1zM10 26h2v1h-2zM13 26h2v1h-2zM16 26h1v1h-1zM19 26h1v1h-1zM21 26h4v1h-4zM26 26h1v1h-1zM28 26h4v1h-4zM33 26h2v1h-2zM36 26h1v1h-1zM39 26h3v1h-3zM43 26h2v1h-2zM46 26h1v1h-1zM48 26h2v1h-2zM51 26h1v1h-1zM0 27h3v1h-3zM4 27h1v1h-1zM8 27h1v1h-1zM11 27h1v1h-1zM13 27h1v1h-1zM19 27h1v1h-1zM21 27h1v1h-1zM23 27h2v1h-2zM28 27h1v1h-1zM30 27h5v1h-5zM36 27h1v1h-1zM38 27h3v1h-3zM42 27h1v1h-1zM44 27h1v1h-1zM48 27h1v1h-1zM50 27h2v1h-2zM1 28h2v1h-2zM4 28h5v1h-5zM10 28h2v1h-2zM13 28h4v1h-4zM19 28h1v1h-1zM23 28h6v1h-6zM30 28h1v1h-1zM32 28h1v1h-1zM35 28h1v1h-1zM37 28h2v1h-2zM40 28h3v1h-3zM44 28h7v1h-7zM2 29h1v1h-1zM10 29h1v1h-1zM17 29h4v1h-4zM25 29h1v1h-1zM27 29h1v1h-1zM31 29h1v1h-1zM33 29h1v1h-1zM35 29h1v1h-1zM37 29h2v1h-2zM41 29h2v1h-2zM45 29h1v1h-1zM47 29h2v1h-2zM52 29h1v1h-1zM1 30h3v1h-3zM5 30h2v1h-2zM8 30h3v1h-3zM12 30h1v1h-1zM14 30h2v1h-2zM17 30h2v1h-2zM20 30h1v1h-1zM22 30h1v1h-1zM27 30h2v1h-2zM31 30h2v1h-2zM35 30h7v1h-7zM43 30h1v1h-1zM45 30h1v1h-1zM49 30h2v1h-2zM1 31h2v1h-2zM7 31h2v1h-2zM11 31h1v1h-1zM14 31h3v1h-3zM27 31h1v1h-1zM30 31h1v1h-1zM32 31h1v1h-1zM34 31h2v1h-2zM37 31h1v1h-1zM41 31h5v1h-5zM49 31h4v1h-4zM0 32h2v1h-2zM3 32h4v1h-4zM8 32h1v1h-1zM11 32h1v1h-1zM13 32h3v1h-3zM18 32h1v1h-1zM21 32h1v1h-1zM25 32h1v1h-1zM28 32h2v1h-2zM32 32h2v1h-2zM35 32h2v1h-2zM38 32h4v1h-4zM43 32h3v1h-3zM47 32h1v1h-1zM49 32h1v1h-1zM51 32h1v1h-1zM2 33h4v1h-4zM8 33h3v1h-3zM13 33h1v1h-1zM16 33h1v1h-1zM18 33h1v1h-1zM20 33h1v1h-1zM22 33h2v1h-2zM29 33h5v1h-5zM35 33h2v1h-2zM38 33h2v1h-2zM42 33h7v1h-7zM51 33h1v1h-1zM1 34h1v1h-1zM6 34h3v1h-3zM13 34h1v1h-1zM15 34h1v1h-1zM17 34h1v1h-1zM19 34h1v1h-1zM21 34h1v1h-1zM23 34h1v1h-1zM26 34h1v1h-1zM30 34h2v1h-2zM34 34h2v1h-2zM37 34h1v1h-1zM39 34h1v1h-1zM41 34h1v1h-1zM44 34h1v1h-1zM48 34h2v1h-2zM51 34h1v1h-1zM3 35h2v1h-2zM7 35h2v1h-2zM10 35h1v1h-1zM13 35h2v1h-2zM16 35h3v1h-3zM21 35h1v1h-1zM23 35h1v1h-1zM27 35h1v1h-1zM31 35h1v1h-1zM33 35h4v1h-4zM40 35h3v1h-3zM44 35h2v1h-2zM47 35h2v1h-2zM51 35h2v1h-2zM0 36h2v1h-2zM3 36h2v1h-2zM6 36h1v1h-1zM8 36h1v1h-1zM10 36h1v1h-1zM12 36h1v1h-1zM14 36h3v1h-3zM19 36h1v1h-1zM22 36h1v1h-1zM24 36h1v1h-1zM26 36h1v1h-1zM28 36h1v1h-1zM30 36h7v1h-7zM39 36h1v1h-1zM42 36h2v1h-2zM45 36h1v1h-1zM47 36h1v1h-1zM50 36h2v1h-2zM0 37h1v1h-1zM2 37h1v1h-1zM7 37h1v1h-1zM9 37h1v1h-1zM11 37h2v1h-2zM14 37h3v1h-3zM23 37h2v1h-2zM28 37h1v1h-1zM31 37h2v1h-2zM36 37h4v1h-4zM44 37h3v1h-3zM48 37h2v1h-2zM51 37h2v1h-2zM0 38h1v1h-1zM4 38h3v1h-3zM9 38h9v1h-9zM21 38h1v1h-1zM25 38h8v1h-8zM36 38h5v1h-5zM42 38h1v1h-1zM45 38h3v1h-3zM50 38h1v1h-1zM52 38h1v1h-1zM0 39h1v1h-1zM5 39h1v1h-1zM7 39h1v1h-1zM10 39h3v1h-3zM14 39h5v1h-5zM22 39h1v1h-1zM24 39h1v1h-1zM27 39h6v1h-6zM34 39h1v1h-1zM36 39h1v1h-1zM38 39h2v1h-2zM42 39h1v1h-1zM45 39h2v1h-2zM48 39h5v1h-5zM0 40h2v1h-2zM4 40h1v1h-1zM6 40h1v1h-1zM8 40h2v1h-2zM11 40h2v1h-2zM17 40h1v1h-1zM20 40h2v1h-2zM23 40h4v1h-4zM28 40h2v1h-2zM31 40h1v1h-1zM33 40h2v1h-2zM36 40h1v1h-1zM46 40h1v1h-1zM51 40h2v1h-2zM0 41h1v1h-1zM2 41h1v1h-1zM5 41h1v1h-1zM8 41h3v1h-3zM12 41h1v1h-1zM15 41h2v1h-2zM18 41h2v1h-2zM21 41h3v1h-3zM28 41h1v1h-1zM33 41h2v1h-2zM39 41h3v1h-3zM43 41h1v1h-1zM47 41h2v1h-2zM50 41h1v1h-1zM0 42h2v1h-2zM3 42h4v1h-4zM9 42h2v1h-2zM12 42h1v1h-1zM14 42h5v1h-5zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h2v1h-2zM34 42h3v1h-3zM38 42h3v1h-3zM43 42h2v1h-2zM46 42h3v1h-3zM52 42h1v1h-1zM1 43h2v1h-2zM7 43h5v1h-5zM14 43h4v1h-4zM19 43h3v1h-3zM23 43h2v1h-2zM26 43h4v1h-4zM32 43h3v1h-3zM36 43h2v1h-2zM42 43h3v1h-3zM47 43h2v1h-2zM50 43h3v1h-3zM3 44h1v1h-1zM6 44h2v1h-2zM10 44h3v1h-3zM14 44h2v1h-2zM19 44h1v1h-1zM21 44h1v1h-1zM23 44h8v1h-8zM32 44h2v1h-2zM38 44h1v1h-1zM40 44h1v1h-1zM42 44h7v1h-7zM50 44h2v1h-2zM8 45h1v1h-1zM10 45h2v1h-2zM13 45h1v1h-1zM16 45h1v1h-1zM18 45h2v1h-2zM21 45h4v1h-4zM28 45h2v1h-2zM33 45h1v1h-1zM35 45h1v1h-1zM37 45h1v1h-1zM43 45h2v1h-2zM48 45h1v1h-1zM50 45h3v1h-3zM0 46h7v1h-7zM9 46h1v1h-1zM17 46h2v1h-2zM21 46h1v1h-1zM23 46h2v1h-2zM26 46h1v1h-1zM28 46h1v1h-1zM31 46h1v1h-1zM33 46h1v1h-1zM35 46h2v1h-2zM38 46h2v1h-2zM41 46h2v1h-2zM44 46h1v1h-1zM46 46h1v1h-1zM48 46h4v1h-4zM0 47h1v1h-1zM6 47h1v1h-1zM8 47h2v1h-2zM12 47h1v1h-1zM17 47h2v1h-2zM20 47h3v1h-3zM24 47h1v1h-1zM28 47h5v1h-5zM39 47h2v1h-2zM44 47h1v1h-1zM48 47h1v1h-1zM51 47h1v1h-1zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM8 48h5v1h-5zM14 48h4v1h-4zM24 48h6v1h-6zM32 48h1v1h-1zM36 48h1v1h-1zM39 48h1v1h-1zM42 48h1v1h-1zM44 48h5v1h-5zM50 48h3v1h-3zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM8 49h3v1h-3zM12 49h2v1h-2zM16 49h3v1h-3zM20 49h2v1h-2zM23 49h2v1h-2zM27 49h1v1h-1zM30 49h1v1h-1zM34 49h5v1h-5zM42 49h1v1h-1zM46 49h1v1h-1zM49 49h1v1h-1zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM10 50h1v1h-1zM12 50h1v1h-1zM14 50h1v1h-1zM16 50h1v1h-1zM18 50h1v1h-1zM20 50h1v1h-1zM22 50h2v1h-2zM25 50h1v1h-1zM27 50h3v1h-3zM31 50h1v1h-1zM36 50h2v1h-2zM40 50h1v1h-1zM42 50h1v1h-1zM47 50h3v1h-3zM51 50h2v1h-2zM0 51h1v1h-1zM6 51h1v1h-1zM8 51h2v1h-2zM12 51h3v1h-3zM17 51h5v1h-5zM24 51h1v1h-1zM26 51h4v1h-4zM32 51h1v1h-1zM34 51h3v1h-3zM38 51h2v1h-2zM42 51h1v1h-1zM44 51h5v1h-5zM51 51h2v1h-2zM0 52h7v1h-7zM9 52h2v1h-2zM12 52h1v1h-1zM15 52h1v1h-1zM19 52h1v1h-1zM21 52h3v1h-3zM25 52h1v1h-1zM27 52h2v1h-2zM30 52h1v1h-1zM32 52h7v1h-7zM41 52h2v1h-2zM45 52h1v1h-1zM47 52h1v1h-1zM49 52h3v1h-3z"
};
function Piece({
  mao = true,
  mascote = true
}) {
  const {
    T,
    CUES
  } = useComposition();
  const a = CUES.Codigo,
    b = CUES.Trava,
    c = CUES.Laudo,
    D = 27.9;
  const root = React.useRef(null);
  const A = useAnchors(root);
  const tBusca = a + 1.4,
    tDig = a + 1.6,
    cod = 'CH25';
  const nDig = T < tDig ? 0 : Math.min(4, Math.floor((T - tDig) / 0.3) + 1);
  const tRes = tDig + 1.4;
  const res = MOTION.enter(T, tRes, tRes + 0.4);
  const glow = MOTION.pulse(Math.max(0, T - (tRes + 0.5)), 1.4) * MOTION.enter(T, tRes + 0.5, tRes + 0.8);
  const tTab = b + 0.7,
    abaP = MOTION.enter(T, tTab + 0.05, tTab + 0.3);
  const tC = [b + 2.0, b + 4.2, b + 6.4];
  const marcas = tC.map(t => T >= t + 0.05);
  const lib = MOTION.pulse(Math.max(0, T - (tC[2] + 0.2)), 1.4) * MOTION.enter(T, tC[2] + 0.2, tC[2] + 0.5);
  const tM = c + 0.4,
    L = c + 0.65;
  const k = costura(T, a, D);
  const tIni = [-1, b];
  const maoO = (mao ? 1 : 0) * Math.max(MOTION.enter(T, a + 0.45, a + 0.75) * (1 - MOTION.enter(T, tRes + 2.6, tRes + 2.9)), MOTION.enter(T, b + 0.1, b + 0.4) * (1 - MOTION.enter(T, L, L + 0.25)));
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      height: 844,
      overflow: 'hidden',
      background: '#0C2747'
    }
  }, React.createElement(Palco, {
    rootRef: root,
    label: `Video 04 · ${Math.floor(T)}s`,
    oculto: k.o >= 0.999 || T >= L + 0.45,
    telaX: k.telaX
  }, React.createElement("div", {
    style: visTela(T, tIni, 0)
  }, React.createElement(Codigos, {
    A: A,
    T: T,
    dig: cod.slice(0, nDig),
    caret: T >= tBusca + 0.05,
    res: res,
    glow: glow,
    tBusca: tBusca
  })), React.createElement("div", {
    style: visTela(T, tIni, 1)
  }, React.createElement(Trava, {
    A: A,
    T: T,
    abaP: abaP,
    marcas: marcas,
    tC: tC,
    tM: tM,
    enviado: T >= tM + 0.1,
    lib: lib
  })), React.createElement(Hand, {
    T: T,
    A: A,
    o: maoO,
    start: {
      x: 320,
      y: 500
    },
    taps: [tBusca, tTab, ...tC, tM],
    moves: [{
      s: a + 0.75,
      e: a + 1.3,
      to: 'busca',
      dx: 60,
      dy: 6
    }, {
      s: tRes + 0.7,
      e: tRes + 1.5,
      to: 'protecao',
      dx: 90,
      dy: 8
    }, {
      s: b + 0.1,
      e: b + 0.6,
      to: {
        x: 317,
        y: 108
      }
    }, {
      s: b + 1.0,
      e: tC[0] - 0.15,
      to: 'ok0',
      dx: 20,
      dy: 4
    }, {
      s: tC[0] + 0.4,
      e: tC[1] - 0.15,
      to: 'ok1',
      dx: 20,
      dy: 4
    }, {
      s: tC[1] + 0.4,
      e: tC[2] - 0.15,
      to: 'ok2',
      dx: 20,
      dy: 4
    }, {
      s: c - 1.4,
      e: c + 0.2,
      to: 'mandar',
      dx: 40,
      dy: 4
    }]
  })), T >= L && React.createElement(LaudoDoc, {
    T: T,
    c: L,
    num: "1052",
    label: "Video 04 \xB7 Laudo N\xBA 1052",
    cliente: "Padaria Sol",
    equip: "LG \xB7 12.000 BTU/h \xB7 R-32",
    qr: QR1052,
    valor: "R$ 310,00",
    linhas: [],
    servicos: [['Recuperação de Proteção Elétrica, Fusível e Bornes de Força', 'R$ 190,00'], ['Visita Técnica e Diagnóstico Instrumentado', 'R$ 120,00']],
    prev: "Evita carboniza\xE7\xE3o do chicote el\xE9trico e queima da fonte da placa principal (reparo estimado em R$ 580 a R$ 1.100)."
  }, React.createElement("div", {
    style: {
      ...CX,
      padding: '6px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("span", {
    style: ROTD
  }, "C\xD3DIGO LG \xB7 CH25"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      fontSize: 13,
      lineHeight: 1.25,
      color: '#1E293B'
    }
  }, "Tens\xE3o AC de entrada anormal"), React.createElement(SeloDoc, {
    ok: true
  }, "N\xC3O \xC9 DEFEITO")), React.createElement("span", {
    style: {
      ...ROTD,
      borderTop: '1px solid #E2E8F0',
      paddingTop: 5
    }
  }, "TRAVA DE 30 SEGUNDOS"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      fontSize: 13,
      lineHeight: 1.25,
      color: '#1E293B'
    }
  }, "Rede, Capacitor e NTC"), React.createElement(SeloDoc, {
    ok: true
  }, "TRAVA LIBERADA")))), React.createElement(Faixa, {
    T: T,
    t0: [a, b, c],
    mascote: mascote,
    legs: [[['Digite CH25:'], ['\n'], ['Não É Defeito:', 'v'], ['\n'], ['queda de rede.', 'a']], [['3 cheques:'], ['\n'], ['Trava livre', 'v'], ['\n'], ['em 30s.', 'a']], [['Placa salva:'], ['\n'], ['R$ 310 no Pix', 'a'], ['\n'], ['sem cilada.', 'a']]]
  }), k.o > 0.001 && React.createElement(Gancho, {
    t: k.t,
    o: k.o,
    x: k.x,
    k: 1.1,
    dur: 7.41,
    label: "Video 04",
    visual: VisorCH25,
    h1: ['Piscou código', 'ou já mexeram?'],
    g: ['Trave em 30 segundos', 'antes de pôr a chave.'],
    aviso: "\u2715 ASSUMIR BUCHA ALHEIA"
  }));
}
  window.GPVerticais.v04 = Piece;
})();

/* ── Video05Dobra4LaudoPix · video05-dobra4-laudo-pix.jsx · 31,95 s ── */
(function () {
  const GPV = window.GPV_BASE;
  const useComposition = () => React.useContext(window.GPVCtx);
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
    let raf = 0,
      vivo = true;
    const medir = () => {
      if (!vivo) return;
      const root = rootRef.current;
      const ks = Object.keys(els.current);
      if (!root || !root.offsetWidth || !ks.length) {
        raf = requestAnimationFrame(medir);
        return;
      }
      const out = {};
      let ok = true;
      ks.forEach(k => {
        const el = els.current[k];
        let x = 0,
          y = 0,
          e = el;
        while (e && e !== root) {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        if (e !== root || !el.offsetWidth) ok = false;
        out[k] = {
          x: Math.round(x + el.offsetWidth / 2),
          y: Math.round(y + el.offsetHeight / 2),
          w: el.offsetWidth
        };
      });
      if (!ok) {
        raf = requestAnimationFrame(medir);
        return;
      }
      setPos(p => JSON.stringify(p) === JSON.stringify(out) ? p : out);
    };
    medir();
    const t1 = setTimeout(medir, 400),
      t2 = setTimeout(medir, 1500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    const ro = typeof ResizeObserver !== 'undefined' && rootRef.current ? new ResizeObserver(() => medir()) : null;
    if (ro) ro.observe(rootRef.current);
    return () => {
      vivo = false;
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      if (ro) ro.disconnect();
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
const TELA = 660;
IC.busca = [C_(11, 11, 8), 'm21 21-4.3-4.3'];
IC.termo = ['M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'];
IC.pulso = ['M22 12h-4l-3 9L9 3l-3 9H2'];
SEG['-'] = 'G';
const NTC = {
  B: Math.log(0.649) / (1 / 308.15 - 1 / 298.15),
  R25: 10
};
const esperado = tc => NTC.R25 * Math.exp(NTC.B * (1 / (tc + 273.15) - 1 / 298.15));
const tempDe = r => 1 / (1 / 298.15 + Math.log(r / NTC.R25) / NTC.B) - 273.15;
const n2 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const n1 = v => v.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});
const KICK = {
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '.12em',
  color: '#334155',
  whiteSpace: 'nowrap'
};
function Status() {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 28,
      padding: '0 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 700,
      color: '#0C2747'
    }
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    style: {
      width: 24,
      height: 11,
      borderRadius: 3,
      background: '#0C2747'
    }
  }));
}
function Topo({
  titulo,
  chip,
  voltar = true,
  children
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 28,
      height: 46,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, voltar && React.createElement("div", {
    style: ST.S21
  }, "\u2039"), React.createElement("div", {
    style: {
      ...ST.S14,
      fontSize: 23,
      lineHeight: 1.2
    }
  }, titulo), chip && React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '8px 9px'
    }
  }, chip), children);
}
const Tag = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    background: 'linear-gradient(180deg,#FFFFFF,#E8EBEF)',
    border: '1px solid #5A6A7E',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1,
    color: '#0C2747',
    whiteSpace: 'nowrap'
  }
}, children);
const Cod = ({
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 26,
    padding: '0 9px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
    background: '#0C2747',
    color: '#FFFFFF',
    font: `700 13px/1 ${MONO}`
  }
}, children);
const Selo = ({
  cor,
  children
}) => {
  const C = {
    v: ['#14532D', '#DCFCE7', '#15803D'],
    r: ['#7F1D1D', '#FEE2E2', '#B91C1C'],
    m: ['#FFFFFF', '#0C2747', '#081B33']
  }[cor];
  return React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 30,
      padding: '0 11px',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      borderRadius: 999,
      background: C[1],
      border: `1.5px solid ${C[2]}`,
      color: C[0],
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, children);
};
const ROTD = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.1em',
  lineHeight: 1.2,
  color: '#334155'
};
const CX = {
  boxSizing: 'border-box',
  background: '#FFFFFF',
  border: '1.5px solid #A3ACB9',
  borderRadius: 10
};
const T_MIN = 15,
  T_MAX = 40;
function Aferir({
  A,
  lido,
  amb,
  fase
}) {
  const esp = esperado(amb);
  const desv = lido == null ? null : (lido - esp) / esp * 100;
  const marca = lido == null ? null : tempDe(lido);
  const bom = fase !== 0 && desv != null && Math.abs(desv) <= 5;
  const lcd = lido == null ? '-.--' : lido.toFixed(2);
  const pct = v => (v - T_MIN) / (T_MAX - T_MIN) * 100;
  const linha = (rot, val, cor) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid rgba(63,50,16,.2)',
      padding: '5px 0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: '#3F3210'
    }
  }, rot), React.createElement("b", {
    style: {
      font: `700 17px/1.2 ${MONO}`,
      color: cor || '#0C2747'
    }
  }, val));
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "AFERIR VIVO",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === 0 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 138,
      height: 396,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "termo",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      ...KICK,
      flex: 1,
      color: '#0C2747'
    }
  }, "SENSOR NTC"), fase === 0 ? React.createElement(Selo, {
    cor: "m"
  }, "\u25B8 MEDINDO") : bom ? React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), "SENSOR BOM") : React.createElement(Selo, {
    cor: "r"
  }, React.createElement(Ic, {
    n: "fechar",
    s: 12,
    c: "#B91C1C",
    w: 3
  }), "FORA DA CURVA")), React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      border: bom ? '2px solid #22C55E' : ST.S161.border,
      boxShadow: bom ? '0 0 0 4px rgba(34,197,94,.2)' : ST.S161.boxShadow
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, "O SENSOR MARCA"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, React.createElement("b", {
    style: {
      font: `700 44px/1.05 ${MONO}`,
      fontVariantNumeric: 'tabular-nums'
    }
  }, marca == null ? '—' : n1(marca)), React.createElement("span", {
    style: {
      font: `700 16px/1 ${MONO}`
    }
  }, "\xB0C")), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      lineHeight: 1.2,
      color: fase === 0 ? '#334155' : bom ? '#15803D' : '#B91C1C',
      marginBottom: 4
    }
  }, fase === 0 ? '▸ MEDINDO' : bom ? `✓ AMBIENTE ${Math.round(amb)} °C` : `▲ +${n1(marca - amb)} °C DO AMBIENTE`), linha('LIDO', lido == null ? '— kΩ' : n2(lido) + ' kΩ'), linha('ESPERADO', n2(esp) + ' kΩ'), linha('DESVIO', desv == null ? '—' : (desv > 0.05 ? '+' : '') + n1(Math.abs(desv) < 0.05 ? 0 : desv) + '%', desv == null ? null : Math.abs(desv) <= 5 ? '#15803D' : '#7F1D1D')), React.createElement(Multimetro, {
    leitura: lcd,
    h: 168,
    pilula: "20k"
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("span", {
    style: KICK
  }, "TEMPERATURA REAL"), React.createElement("b", {
    style: {
      font: `700 21px/1.2 ${MONO}`
    }
  }, n1(amb), " \xB0C")), React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      margin: '0 14px'
    }
  }, React.createElement("span", {
    ref: A.ref('trilho'),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 14,
      height: 6,
      borderRadius: 3,
      background: '#E5E2DC'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(34)}%`,
      width: `${pct(36) - pct(34)}%`,
      top: 14,
      height: 6,
      background: '#15803D'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pct(amb)}%`,
      top: 2,
      width: 30,
      height: 30,
      marginLeft: -15,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'radial-gradient(140% 130% at 50% -10%,#31639A 0%,#2A5C8F 45%,#0F2B4C 100%)',
      border: '3px solid #FFB020',
      boxShadow: '0 2px 5px rgba(9,30,66,.35)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      margin: '-12px 14px 0',
      font: `700 13px/1 ${MONO}`,
      color: '#334155'
    }
  }, [15, 25, 35, 40].map(v => React.createElement("span", {
    key: v,
    style: {
      position: 'absolute',
      left: `${pct(v)}%`,
      transform: v === 40 ? 'translateX(-100%)' : 'translateX(-50%)'
    }
  }, v === 40 ? '40 °C' : v)))), React.createElement("div", {
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 544,
      height: 52,
      gap: 8,
      fontSize: 18
    }
  }, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Servico({
  r,
  nome,
  img,
  ic,
  v,
  c,
  o = 1,
  y = 0
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      opacity: o,
      transform: `translateY(${y}px)`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S23,
      minHeight: 40,
      height: 40
    }
  }, ic ? React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      width: 32,
      height: 32,
      borderRadius: 7,
      background: '#0C2747',
      border: '1px solid #5A6A7E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: ic,
    s: 22,
    c: "#FACC15",
    w: 1.8
  })) : React.createElement("img", {
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
      letterSpacing: '-.01em',
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
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "COBRAR DO CLIENTE \xB7 R$"), React.createElement("div", {
    ref: r,
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, v)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      fontSize: 13,
      letterSpacing: '.03em',
      color: '#3F3210'
    }
  }, "MEU CUSTO DA PE\xC7A \xB7 R$"), React.createElement("div", {
    style: {
      ...ST.S56,
      height: 34,
      fontSize: 19
    }
  }, c))));
}
IC.alerta = ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'];
IC.escudo = ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'];
IC.gas = [R_(7, 6, 10, 16, 4), 'M10 6V3h4v3', 'M7 12h10'];
const BTN_R = css("box-sizing:border-box;min-height:44px;display:flex;align-items:center;justify-content:center;background:radial-gradient(140% 130% at 50% -10%,#DC4545 0%,#C22D2D 45%,#9B1C1C 100%);border:1px solid #7F1D1D;box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -2px 0 #7F1D1D;color:#FFFFFF;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.06em");
const XF = 0.28;
const visTela = (T, tIni, i) => {
  const pi = i === 0 ? 1 : MOTION.enter(T, tIni[i], tIni[i] + XF),
    po = i === tIni.length - 1 ? 0 : MOTION.enter(T, tIni[i + 1], tIni[i + 1] + XF);
  return {
    position: 'absolute',
    inset: 0,
    opacity: pi * (1 - po)
  };
};
const costura = (T, a, D) => {
  const sai = MOTION.enter(T, a, a + 0.45),
    fim = MOTION.enter(T, D - 0.4, D);
  return {
    o: fim > 0 ? fim : 1 - sai,
    x: fim > 0 ? 0 : -28 * sai,
    t: fim > 0 ? 0 : T,
    telaX: 24 * (1 - sai)
  };
};
function Abas({
  ativa,
  p = 1
}) {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['SENSOR NTC', 'GÁS & SH', 'INVERTER & 30S'].map((t, i) => React.createElement("div", {
    key: t,
    style: {
      ...(i === ativa && p > 0.5 ? ST.S50 : {
        ...ST.S28,
        color: '#E0F2FE'
      }),
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, t)));
}
function Mandar({
  r,
  T,
  t,
  feito
}) {
  return React.createElement("div", {
    ref: r,
    style: {
      ...ST.S86,
      position: 'absolute',
      left: 16,
      right: 16,
      gap: 8,
      fontSize: 18,
      height: 52,
      transform: `scale(${MOTION.press(T, t)})`
    }
  }, feito ? React.createElement(React.Fragment, null, React.createElement(Ic, {
    n: "ok",
    s: 20,
    c: "#FFFFFF",
    w: 3
  }), "ENVIADO PARA O LAUDO") : React.createElement(React.Fragment, null, React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, "+"), "MANDAR PARA O LAUDO"));
}
function Sintomas({
  A,
  foco,
  alvo = 1
}) {
  const itens = [[GPV + 'img/t04_termometro_nivel.webp', 'Liga, mas não gela', 'Ventila normal, sem frio', 'D-001', ['Convencional e Inverter', 'Refrigeração']], [GPV + 'img/t10_sensor_ntc.webp', 'Split / Inverter para após minutos', 'Perde frio após minutos', 'D-004', ['Inverter', 'Sensor NTC', 'Multímetro']], [GPV + 'img/t01_alicate.webp', 'Compressor desarma no térmico', 'Desliga sozinho após minutos', 'D-002', ['Convencional e Inverter', 'Alicate amperímetro']]];
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "SINTOMAS",
    chip: "R-32"
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 46,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(Ic, {
    n: "busca",
    s: 20,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: '#334155'
    }
  }, "Buscar sintoma, pe\xE7a ou D-033")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 140,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      lineHeight: 1.2
    }
  }, "SPLIT INVERTER E PLACAS ELETR\xD4NICAS"), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 158,
      bottom: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, itens.map(([img, t, s, c, tags], i) => {
    const on = i === alvo && foco > 0;
    return React.createElement("div", {
      key: c,
      ref: i === alvo ? A.ref('alvo') : undefined,
      style: {
        ...CARD,
        flex: 1,
        minHeight: 0,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 14,
        border: on ? '2px solid #22C55E' : CARD.border,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.22)` : CARD.boxShadow,
        margin: on ? -1 : 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement("img", {
      src: img,
      alt: "",
      style: {
        flex: 'none',
        width: 54,
        height: 54,
        borderRadius: 10,
        objectFit: 'cover',
        border: '1.5px solid #2A5C8F'
      }
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        whiteSpace: 'normal'
      }
    }, React.createElement("b", {
      style: {
        fontSize: 19.5,
        fontWeight: 600,
        lineHeight: 1.18
      }
    }, t), React.createElement("span", {
      style: {
        fontSize: 15.5,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#334155'
      }
    }, s))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, tags.map(g => React.createElement(Tag, {
      key: g
    }, g)), React.createElement("span", {
      style: {
        flex: 1
      }
    }), React.createElement(Cod, null, c)));
  })));
}
function Diagnostico({
  A,
  barra,
  foco,
  chip,
  titulo,
  sub,
  img,
  cs
}) {
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "DIAGN\xD3STICO",
    chip: chip
  }), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 76,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("img", {
    src: img,
    alt: "",
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 9,
      objectFit: 'cover',
      border: '1.5px solid #2A5C8F'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 19.5,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#334155'
    }
  }, sub))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 170,
      height: 434,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Ic, {
    n: "pulso",
    s: 18,
    c: "#334155",
    w: 2
  }), React.createElement("span", {
    style: KICK
  }, "CAUSAS PROV\xC1VEIS \xB7 1\xBA \u2192 5\xBA")), cs.map(([p, nome, rank, det], i) => {
    const on = i === 0 && foco > 0;
    return React.createElement("div", {
      key: nome,
      ref: i === 0 ? A.ref('causa1') : undefined,
      style: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '72px minmax(0,1fr)',
        gap: 4,
        padding: '11px 12px',
        borderRadius: 10,
        border: on ? '2px solid #22C55E' : '2px solid transparent',
        borderTop: i && !on ? '1px solid #E2E8F0' : undefined,
        boxShadow: on ? `0 0 0 ${4 * foco}px rgba(34,197,94,.2)` : 'none'
      }
    }, React.createElement("b", {
      style: {
        font: `700 25px/1.1 ${MONO}`
      }
    }, p, "%"), React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, React.createElement("b", {
      style: {
        minWidth: 0,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.15,
        whiteSpace: 'normal'
      }
    }, nome), React.createElement("span", {
      style: {
        height: 8,
        borderRadius: 4,
        background: '#E5E2DC',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        display: 'block',
        height: '100%',
        width: `${p * barra}%`,
        borderRadius: 4,
        background: on ? '#15803D' : '#0C2747'
      }
    })), React.createElement("span", {
      style: {
        font: `700 13px/1.2 ${MONO}`,
        color: '#334155',
        letterSpacing: '.02em'
      }
    }, rank), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.25,
        color: '#1E293B',
        whiteSpace: 'normal',
        textWrap: 'pretty'
      }
    }, det)));
  })));
}
function LaudoDoc({
  T,
  c,
  num,
  label,
  cliente,
  equip,
  equipExtra,
  linhas,
  servicos,
  prev,
  qr,
  valor,
  children
}) {
  const o = MOTION.enter(T, c, c + 0.45);
  const pv = MOTION.pulse(Math.max(0, T - (c + 1.1)), 1.6) * MOTION.enter(T, c + 1.1, c + 1.4);
  const qo = MOTION.enter(T, c + 2.1, c + 2.5);
  const L13 = {
    fontSize: 13,
    lineHeight: 1.25,
    color: '#1E293B',
    whiteSpace: 'normal'
  };
  return React.createElement("div", {
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: -1,
      top: -1,
      width: 392,
      height: TELA + 1,
      zIndex: 60,
      overflow: 'hidden',
      background: `rgba(8,30,56,${o})`,
      fontFamily: DOC,
      color: '#0C2747',
      whiteSpace: 'nowrap'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 17,
      right: 17,
      top: 13,
      bottom: 16,
      padding: 10,
      boxSizing: 'border-box',
      borderRadius: 14,
      background: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(0,0,0,.35)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      opacity: o,
      transform: `translateY(${(1 - o) * 26}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 12,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: BARLOW,
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '.12em'
    }
  }, "BANCADA GELOPRO"), React.createElement("span", {
    style: {
      ...ROTD,
      letterSpacing: '.04em',
      color: '#BFD7F2'
    }
  }, "LAUDO DE APROVA\xC7\xC3O")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 15,
      lineHeight: 1.2
    }
  }, "Climatiza\xE7\xE3o Silva & Filhos"), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 22px/1.1 ${MONO}`
    }
  }, "N\xBA ", num))), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Cliente:"), " ", cliente), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 13px/1.25 ${MONO}`
    }
  }, equip)), equipExtra && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("span", {
    style: L13
  }, React.createElement("b", null, "Sintoma:"), " Diagn\xF3stico na bancada"), React.createElement("b", {
    style: {
      flex: 'none',
      fontSize: 13,
      lineHeight: 1.25
    }
  }, equipExtra)), linhas.map(([k, v]) => React.createElement("span", {
    key: k,
    style: L13
  }, React.createElement("b", null, k, ":"), " ", v))), children, React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SERVI\xC7OS EXECUTADOS & PREVEN\xC7\xC3O"), servicos.map(([sv, v]) => React.createElement("div", {
    key: sv,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      paddingBottom: 5,
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("b", {
    style: {
      minWidth: 0,
      fontSize: 13,
      lineHeight: 1.25,
      whiteSpace: 'normal',
      textWrap: 'balance'
    }
  }, sv), React.createElement("b", {
    style: {
      flex: 'none',
      font: `700 13px/1.25 ${MONO}`
    }
  }, v))), React.createElement("div", {
    style: {
      position: 'relative',
      background: '#F0FDF4',
      borderLeft: '4px solid #15803D',
      borderRadius: 6,
      padding: '6px 9px',
      color: '#14532D',
      fontSize: 13,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty',
      overflow: 'hidden',
      boxShadow: `0 0 0 ${3 * pv}px rgba(34,197,94,.35)`
    }
  }, React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Preven\xE7\xE3o:"), " ", prev)), React.createElement("div", {
    style: {
      ...CX,
      padding: '8px 12px 8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: qo > 0.01 ? '2px solid #22C55E' : CX.border,
      boxShadow: `0 0 0 ${4 * qo}px rgba(34,197,94,.22)`
    }
  }, React.createElement("svg", {
    width: qr.n * 2.1,
    height: qr.n * 2.1,
    viewBox: `-2 -2 ${qr.n + 4} ${qr.n + 4}`,
    shapeRendering: "crispEdges",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("rect", {
    x: "-2",
    y: "-2",
    width: qr.n + 4,
    height: qr.n + 4,
    fill: "#FFFFFF"
  }), React.createElement("path", {
    d: qr.d,
    fill: "#000000"
  })), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      whiteSpace: 'normal'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "PIX \xB7 VALOR EXATO"), React.createElement("b", {
    style: {
      font: `700 26px/1.1 ${MONO}`
    }
  }, valor), React.createElement("span", {
    style: {
      borderRadius: 6,
      background: '#15803D',
      color: '#FFFFFF',
      padding: '6px 8px',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, "Responda APROVADO para autorizar o servi\xE7o.")))));
}
const SeloDoc = ({
  ok,
  children
}) => React.createElement("span", {
  style: {
    boxSizing: 'border-box',
    flex: 'none',
    height: 24,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    borderRadius: 999,
    background: ok ? '#DCFCE7' : '#FEE2E2',
    border: `1.5px solid ${ok ? '#15803D' : '#B91C1C'}`,
    color: ok ? '#14532D' : '#7F1D1D',
    fontFamily: DOC,
    fontSize: 12,
    fontWeight: 700
  }
}, React.createElement(Ic, {
  n: ok ? 'ok' : 'fechar',
  s: 12,
  c: ok ? '#15803D' : '#B91C1C',
  w: 3
}), children);
function Gravado({
  T,
  t,
  titulo,
  sub,
  children
}) {
  const o = MOTION.enter(T, t, t + 0.45);
  if (o <= 0.001) return null;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40,
      background: `rgba(8,30,56,${0.62 * o})`
    }
  }, React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16,
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: o,
      transform: `translateY(${(1 - o) * 40}px)`,
      boxShadow: '0 10px 30px rgba(0,0,0,.35)'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 10,
      background: '#0C2747',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: '#15803D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "ok",
    s: 18,
    c: "#FFFFFF",
    w: 3
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("b", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '.06em',
      lineHeight: 1.1
    }
  }, titulo), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#BFD7F2'
    }
  }, sub))), children));
}
function Registro({
  rot,
  val,
  extra,
  selo,
  o = 1
}) {
  return React.createElement("div", {
    style: {
      ...ST.S161,
      padding: '10px 12px',
      gap: 4,
      opacity: o,
      transform: `translateY(${(1 - o) * 10}px)`
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
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      color: '#3F3210'
    }
  }, rot), React.createElement(Selo, {
    cor: "v"
  }, React.createElement(Ic, {
    n: "ok",
    s: 13,
    c: "#15803D",
    w: 3
  }), selo)), React.createElement("b", {
    style: {
      font: `700 22px/1.15 ${MONO}`
    }
  }, val), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.25,
      color: '#334155',
      whiteSpace: 'normal'
    }
  }, extra));
}
function Gancho({
  t,
  o,
  x = 0,
  k = 1,
  dur = 5,
  img,
  visual,
  h1,
  g,
  aviso,
  label
}) {
  const pz = MOTION.pulse(t, 1.1);
  const zoom = 1 + 0.02 * p01(t, 0, dur);
  const sc = 1 + 0.08 * Math.sin(Math.PI * p01(t, 0.2, 0.55)) + 0.025 * Math.sin(2 * Math.PI * t / 1.1);
  const l1 = MOTION.enter(t, 0.7 * k, 1.3 * k),
    l2 = MOTION.enter(t, 1.3 * k, 1.9 * k);
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
      backgroundSize: `${p * 100}% 100%`,
      color: tinta(p)
    }
  }, txt);
  return React.createElement("div", {
    "data-screen-label": `${label} · Gancho · ${Math.floor(t)}s`,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 90,
      opacity: o,
      transform: `translateX(${x}px)`,
      background: 'radial-gradient(120% 80% at 50% 30%,#14365F 0%,#0C2747 55%,#081B33 100%)',
      color: '#FFFFFF',
      fontFamily: BARLOW,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      top: 28,
      bottom: 40,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
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
  }, "\xB7 DIAGN\xD3STICO")), React.createElement("div", {
    style: {
      ...ST.S22,
      fontSize: 13,
      padding: '0 10px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      letterSpacing: '.04em'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32")), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      transform: `scale(${zoom})`,
      transformOrigin: '50% 50%'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      width: 220,
      height: 220,
      borderRadius: 44,
      background: '#0E2240',
      border: `9px solid rgba(${Math.round(150 + 50 * pz)},28,40,${0.55 + 0.3 * pz})`,
      boxShadow: `0 0 ${18 + 28 * pz}px rgba(220,38,38,${0.25 + 0.4 * pz}),inset 0 0 18px rgba(0,0,0,.45)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, visual ? visual(t) : React.createElement("img", {
    src: img,
    alt: "",
    width: "152",
    height: "152",
    style: {
      width: 152,
      height: 152,
      display: 'block',
      borderRadius: 24,
      boxShadow: '0 6px 18px rgba(0,0,0,.45)'
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 'none',
      height: 54,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
      background: '#B91C1C',
      border: '1px solid #7F1D1D',
      boxShadow: `0 6px 18px rgba(185,28,28,${0.3 + 0.25 * pz})`,
      font: "800 24px/1.1 'Barlow Semi Condensed',sans-serif",
      letterSpacing: '.04em',
      whiteSpace: 'nowrap',
      transform: `scale(${sc})`
    }
  }, aviso)), React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-.005em',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", null, h1[0]), React.createElement("span", null, h1[1])), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1.1
    }
  }, grifo(g[0], l1), grifo(g[1], l2)))));
}
const URSOS = [{
  urso: GPV + 'img/mascote/m-maos-cintura.webp',
  ar: 731 / 667,
  sobe: 16,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-aponta-cima.webp',
  ar: 693 / 697,
  dir: -35
}, {
  urso: GPV + 'img/mascote/m-joinha.webp',
  ar: 633 / 667,
  desce: 42,
  dir: -30
}];
function Faixa({
  T,
  t0,
  mascote,
  legs,
  dirs = []
}) {
  const y = (1 - MOTION.enter(T, t0[0], t0[0] + 0.45)) * 250;
  const ativo = T >= t0[2] ? 2 : T >= t0[1] ? 1 : 0;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: TELA,
      height: 844 - TELA,
      boxSizing: 'border-box',
      zIndex: 80,
      overflow: 'visible',
      background: '#0C2747',
      borderTop: '2px solid #0265DC',
      fontFamily: BARLOW,
      transform: `translateY(${y}px)`
    }
  }, URSOS.map((u, i) => {
    const ent = MOTION.enter(T, t0[i], t0[i] + 0.3);
    const o = i === ativo ? ent : 0;
    if (o <= 0.001) return null;
    const gp = MOTION.enter(T, t0[i] + 0.45, t0[i] + 1.05);
    return React.createElement(React.Fragment, {
      key: i
    }, mascote && React.createElement("img", {
      src: u.urso,
      alt: "",
      style: {
        position: 'absolute',
        right: dirs[i] ?? u.dir,
        bottom: u.sobe || -(u.desce || 0),
        zIndex: 30,
        width: 226,
        height: 'auto',
        aspectRatio: String(u.ar),
        display: 'block',
        WebkitMaskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        maskImage: u.sobe ? 'linear-gradient(to top, transparent 0, #000 42px)' : undefined,
        opacity: o,
        transform: `translateY(${(1 - ent) * 18}px)`,
        transformOrigin: '50% 100%'
      }
    }), React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 230,
        boxSizing: 'border-box',
        padding: '12px 0 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: o,
        zIndex: 31
      }
    }, React.createElement("span", {
      style: {
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        height: 28,
        padding: '0 11px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: '#FACC15',
        color: '#0C2747',
        font: `700 14px/1 ${MONO}`,
        letterSpacing: '.12em'
      }
    }, "PASSO ", i + 1, " DE 3"), React.createElement("div", {
      style: {
        fontSize: 25.5,
        fontWeight: 800,
        lineHeight: 1.12,
        color: '#FFFFFF',
        whiteSpace: 'nowrap'
      }
    }, legs[i].map(([txt, k], j) => txt === '\n' ? React.createElement("br", {
      key: j
    }) : k ? React.createElement("span", {
      key: j,
      style: {
        padding: '0 4px',
        margin: '0 -1px',
        borderRadius: 4,
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
        backgroundImage: `linear-gradient(${k === 'v' ? '#4ADE80,#4ADE80' : '#FFB020,#FFB020'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${gp * 100}% 100%`,
        color: gp > 0.5 ? '#0C2747' : '#FFFFFF'
      }
    }, txt) : React.createElement("span", {
      key: j
    }, txt)))));
  }));
}
function Palco({
  rootRef,
  label,
  oculto,
  telaX,
  children
}) {
  return React.createElement("div", {
    ref: rootRef,
    "data-screen-label": label,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 390,
      height: TELA,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      ...BG,
      visibility: oculto ? 'hidden' : 'visible',
      color: '#0C2747',
      fontFamily: BARLOW,
      transform: `translateX(${telaX}px)`
    }
  }, React.createElement(Status, null), children);
}
const QR1050 = {
  "n": 53,
  "d": "M0 0h7v1h-7zM9 0h1v1h-1zM11 0h2v1h-2zM14 0h2v1h-2zM17 0h3v1h-3zM21 0h2v1h-2zM24 0h1v1h-1zM26 0h3v1h-3zM30 0h1v1h-1zM33 0h3v1h-3zM38 0h1v1h-1zM40 0h1v1h-1zM42 0h1v1h-1zM46 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h1v1h-1zM10 1h1v1h-1zM15 1h2v1h-2zM20 1h2v1h-2zM30 1h2v1h-2zM34 1h1v1h-1zM36 1h1v1h-1zM38 1h2v1h-2zM41 1h3v1h-3zM46 1h1v1h-1zM52 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM12 2h2v1h-2zM15 2h2v1h-2zM19 2h1v1h-1zM22 2h1v1h-1zM24 2h1v1h-1zM26 2h1v1h-1zM30 2h1v1h-1zM34 2h1v1h-1zM36 2h4v1h-4zM43 2h1v1h-1zM46 2h1v1h-1zM48 2h3v1h-3zM52 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM13 3h2v1h-2zM19 3h1v1h-1zM24 3h1v1h-1zM28 3h1v1h-1zM30 3h2v1h-2zM34 3h2v1h-2zM37 3h1v1h-1zM39 3h1v1h-1zM41 3h2v1h-2zM44 3h1v1h-1zM46 3h1v1h-1zM48 3h3v1h-3zM52 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h1v1h-1zM11 4h1v1h-1zM13 4h1v1h-1zM16 4h1v1h-1zM18 4h1v1h-1zM20 4h1v1h-1zM24 4h7v1h-7zM33 4h3v1h-3zM37 4h2v1h-2zM41 4h2v1h-2zM46 4h1v1h-1zM48 4h3v1h-3zM52 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM9 5h1v1h-1zM12 5h2v1h-2zM17 5h4v1h-4zM23 5h2v1h-2zM28 5h2v1h-2zM31 5h1v1h-1zM33 5h2v1h-2zM37 5h2v1h-2zM42 5h1v1h-1zM46 5h1v1h-1zM52 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM28 6h1v1h-1zM30 6h1v1h-1zM32 6h1v1h-1zM34 6h1v1h-1zM36 6h1v1h-1zM38 6h1v1h-1zM40 6h1v1h-1zM42 6h1v1h-1zM44 6h1v1h-1zM46 6h7v1h-7zM10 7h2v1h-2zM13 7h1v1h-1zM23 7h2v1h-2zM28 7h2v1h-2zM31 7h1v1h-1zM33 7h1v1h-1zM35 7h1v1h-1zM38 7h1v1h-1zM40 7h1v1h-1zM43 7h1v1h-1zM0 8h1v1h-1zM2 8h1v1h-1zM4 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM13 8h4v1h-4zM22 8h7v1h-7zM31 8h1v1h-1zM35 8h2v1h-2zM38 8h1v1h-1zM40 8h3v1h-3zM44 8h1v1h-1zM48 8h1v1h-1zM51 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM11 9h4v1h-4zM17 9h4v1h-4zM22 9h2v1h-2zM25 9h1v1h-1zM31 9h3v1h-3zM39 9h1v1h-1zM41 9h1v1h-1zM45 9h1v1h-1zM47 9h1v1h-1zM49 9h1v1h-1zM52 9h1v1h-1zM1 10h4v1h-4zM6 10h2v1h-2zM9 10h2v1h-2zM14 10h2v1h-2zM17 10h2v1h-2zM20 10h1v1h-1zM22 10h1v1h-1zM24 10h1v1h-1zM26 10h3v1h-3zM30 10h2v1h-2zM33 10h1v1h-1zM35 10h2v1h-2zM40 10h2v1h-2zM43 10h3v1h-3zM48 10h2v1h-2zM52 10h1v1h-1zM4 11h1v1h-1zM7 11h1v1h-1zM9 11h2v1h-2zM12 11h1v1h-1zM17 11h3v1h-3zM22 11h1v1h-1zM25 11h1v1h-1zM29 11h1v1h-1zM34 11h1v1h-1zM39 11h2v1h-2zM43 11h3v1h-3zM47 11h1v1h-1zM51 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM5 12h2v1h-2zM8 12h2v1h-2zM12 12h1v1h-1zM14 12h1v1h-1zM17 12h2v1h-2zM20 12h6v1h-6zM28 12h5v1h-5zM34 12h7v1h-7zM43 12h1v1h-1zM45 12h4v1h-4zM52 12h1v1h-1zM1 13h1v1h-1zM3 13h2v1h-2zM8 13h2v1h-2zM14 13h4v1h-4zM19 13h1v1h-1zM21 13h1v1h-1zM23 13h1v1h-1zM25 13h1v1h-1zM28 13h2v1h-2zM32 13h1v1h-1zM35 13h3v1h-3zM43 13h1v1h-1zM49 13h2v1h-2zM52 13h1v1h-1zM3 14h2v1h-2zM6 14h2v1h-2zM9 14h2v1h-2zM12 14h4v1h-4zM18 14h1v1h-1zM22 14h2v1h-2zM26 14h1v1h-1zM28 14h4v1h-4zM34 14h1v1h-1zM36 14h2v1h-2zM44 14h2v1h-2zM47 14h4v1h-4zM52 14h1v1h-1zM0 15h2v1h-2zM3 15h1v1h-1zM5 15h1v1h-1zM7 15h2v1h-2zM13 15h2v1h-2zM20 15h1v1h-1zM23 15h1v1h-1zM25 15h1v1h-1zM27 15h1v1h-1zM30 15h2v1h-2zM34 15h4v1h-4zM40 15h3v1h-3zM47 15h1v1h-1zM49 15h1v1h-1zM51 15h1v1h-1zM0 16h3v1h-3zM4 16h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM10 16h1v1h-1zM12 16h2v1h-2zM15 16h1v1h-1zM17 16h2v1h-2zM22 16h1v1h-1zM24 16h2v1h-2zM27 16h2v1h-2zM31 16h2v1h-2zM35 16h2v1h-2zM38 16h1v1h-1zM40 16h4v1h-4zM46 16h4v1h-4zM52 16h1v1h-1zM0 17h1v1h-1zM2 17h1v1h-1zM5 17h1v1h-1zM7 17h2v1h-2zM10 17h1v1h-1zM14 17h4v1h-4zM20 17h1v1h-1zM22 17h2v1h-2zM28 17h1v1h-1zM34 17h4v1h-4zM41 17h1v1h-1zM45 17h1v1h-1zM47 17h3v1h-3zM2 18h1v1h-1zM4 18h1v1h-1zM6 18h3v1h-3zM13 18h1v1h-1zM16 18h3v1h-3zM21 18h1v1h-1zM23 18h1v1h-1zM26 18h1v1h-1zM28 18h2v1h-2zM31 18h2v1h-2zM34 18h2v1h-2zM37 18h1v1h-1zM40 18h2v1h-2zM44 18h2v1h-2zM47 18h3v1h-3zM51 18h2v1h-2zM0 19h1v1h-1zM2 19h1v1h-1zM5 19h1v1h-1zM8 19h5v1h-5zM14 19h1v1h-1zM16 19h2v1h-2zM20 19h3v1h-3zM27 19h1v1h-1zM32 19h1v1h-1zM35 19h2v1h-2zM40 19h1v1h-1zM42 19h1v1h-1zM44 19h2v1h-2zM48 19h1v1h-1zM51 19h1v1h-1zM4 20h1v1h-1zM6 20h1v1h-1zM9 20h2v1h-2zM12 20h3v1h-3zM16 20h3v1h-3zM20 20h2v1h-2zM24 20h1v1h-1zM26 20h1v1h-1zM29 20h4v1h-4zM35 20h2v1h-2zM38 20h1v1h-1zM40 20h1v1h-1zM42 20h2v1h-2zM45 20h2v1h-2zM48 20h1v1h-1zM50 20h1v1h-1zM52 20h1v1h-1zM1 21h1v1h-1zM3 21h2v1h-2zM7 21h1v1h-1zM9 21h2v1h-2zM14 21h2v1h-2zM17 21h1v1h-1zM20 21h2v1h-2zM23 21h2v1h-2zM27 21h1v1h-1zM29 21h1v1h-1zM31 21h3v1h-3zM36 21h1v1h-1zM40 21h1v1h-1zM43 21h1v1h-1zM45 21h1v1h-1zM49 21h2v1h-2zM52 21h1v1h-1zM0 22h1v1h-1zM2 22h1v1h-1zM4 22h1v1h-1zM6 22h1v1h-1zM9 22h1v1h-1zM14 22h5v1h-5zM20 22h1v1h-1zM24 22h1v1h-1zM26 22h2v1h-2zM29 22h1v1h-1zM32 22h1v1h-1zM35 22h2v1h-2zM38 22h1v1h-1zM40 22h1v1h-1zM42 22h1v1h-1zM47 22h4v1h-4zM52 22h1v1h-1zM0 23h1v1h-1zM4 23h1v1h-1zM10 23h1v1h-1zM13 23h1v1h-1zM17 23h4v1h-4zM24 23h1v1h-1zM27 23h2v1h-2zM30 23h3v1h-3zM34 23h1v1h-1zM36 23h2v1h-2zM40 23h1v1h-1zM47 23h2v1h-2zM52 23h1v1h-1zM1 24h8v1h-8zM13 24h2v1h-2zM16 24h1v1h-1zM19 24h4v1h-4zM24 24h5v1h-5zM30 24h4v1h-4zM36 24h1v1h-1zM40 24h9v1h-9zM50 24h1v1h-1zM52 24h1v1h-1zM2 25h1v1h-1zM4 25h1v1h-1zM8 25h1v1h-1zM10 25h1v1h-1zM12 25h2v1h-2zM15 25h5v1h-5zM22 25h1v1h-1zM24 25h1v1h-1zM28 25h1v1h-1zM32 25h1v1h-1zM35 25h2v1h-2zM40 25h2v1h-2zM44 25h1v1h-1zM48 25h2v1h-2zM51 25h2v1h-2zM0 26h1v1h-1zM3 26h2v1h-2zM6 26h1v1h-1zM8 26h1v1h-1zM10 26h2v1h-2zM13 26h1v1h-1zM16 26h3v1h-3zM20 26h1v1h-1zM22 26h3v1h-3zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h1v1h-1zM32 26h1v1h-1zM35 26h3v1h-3zM40 26h2v1h-2zM44 26h1v1h-1zM46 26h1v1h-1zM48 26h1v1h-1zM50 26h3v1h-3zM0 27h1v1h-1zM4 27h1v1h-1zM8 27h2v1h-2zM11 27h2v1h-2zM16 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM28 27h3v1h-3zM35 27h1v1h-1zM37 27h2v1h-2zM40 27h2v1h-2zM43 27h2v1h-2zM48 27h2v1h-2zM51 27h1v1h-1zM0 28h1v1h-1zM2 28h1v1h-1zM4 28h5v1h-5zM11 28h3v1h-3zM17 28h3v1h-3zM22 28h9v1h-9zM32 28h5v1h-5zM38 28h1v1h-1zM40 28h1v1h-1zM42 28h8v1h-8zM52 28h1v1h-1zM0 29h1v1h-1zM4 29h1v1h-1zM7 29h3v1h-3zM11 29h1v1h-1zM13 29h1v1h-1zM19 29h1v1h-1zM22 29h1v1h-1zM25 29h1v1h-1zM28 29h1v1h-1zM33 29h1v1h-1zM35 29h2v1h-2zM39 29h1v1h-1zM41 29h1v1h-1zM43 29h1v1h-1zM45 29h1v1h-1zM50 29h1v1h-1zM52 29h1v1h-1zM2 30h1v1h-1zM6 30h3v1h-3zM12 30h2v1h-2zM15 30h4v1h-4zM20 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM28 30h3v1h-3zM32 30h2v1h-2zM36 30h1v1h-1zM40 30h2v1h-2zM44 30h5v1h-5zM50 30h1v1h-1zM52 30h1v1h-1zM0 31h1v1h-1zM2 31h1v1h-1zM4 31h2v1h-2zM7 31h1v1h-1zM12 31h1v1h-1zM15 31h1v1h-1zM19 31h2v1h-2zM24 31h3v1h-3zM30 31h2v1h-2zM34 31h2v1h-2zM37 31h5v1h-5zM43 31h3v1h-3zM48 31h1v1h-1zM52 31h1v1h-1zM0 32h4v1h-4zM6 32h1v1h-1zM8 32h1v1h-1zM14 32h1v1h-1zM18 32h5v1h-5zM24 32h2v1h-2zM27 32h1v1h-1zM31 32h3v1h-3zM35 32h2v1h-2zM38 32h5v1h-5zM44 32h1v1h-1zM46 32h2v1h-2zM52 32h1v1h-1zM2 33h3v1h-3zM7 33h1v1h-1zM11 33h2v1h-2zM16 33h1v1h-1zM18 33h4v1h-4zM23 33h3v1h-3zM28 33h1v1h-1zM30 33h2v1h-2zM33 33h1v1h-1zM35 33h3v1h-3zM39 33h2v1h-2zM44 33h1v1h-1zM47 33h1v1h-1zM49 33h2v1h-2zM52 33h1v1h-1zM4 34h3v1h-3zM9 34h5v1h-5zM16 34h3v1h-3zM22 34h1v1h-1zM24 34h1v1h-1zM26 34h1v1h-1zM28 34h1v1h-1zM30 34h1v1h-1zM36 34h2v1h-2zM39 34h2v1h-2zM46 34h1v1h-1zM50 34h1v1h-1zM52 34h1v1h-1zM0 35h4v1h-4zM8 35h3v1h-3zM12 35h4v1h-4zM19 35h1v1h-1zM22 35h1v1h-1zM29 35h1v1h-1zM32 35h2v1h-2zM35 35h3v1h-3zM40 35h2v1h-2zM46 35h2v1h-2zM49 35h1v1h-1zM0 36h3v1h-3zM4 36h1v1h-1zM6 36h2v1h-2zM14 36h1v1h-1zM16 36h1v1h-1zM18 36h1v1h-1zM22 36h2v1h-2zM26 36h3v1h-3zM30 36h1v1h-1zM32 36h3v1h-3zM36 36h3v1h-3zM40 36h1v1h-1zM42 36h1v1h-1zM44 36h1v1h-1zM46 36h4v1h-4zM51 36h2v1h-2zM2 37h2v1h-2zM5 37h1v1h-1zM7 37h2v1h-2zM10 37h1v1h-1zM12 37h2v1h-2zM16 37h1v1h-1zM18 37h3v1h-3zM22 37h1v1h-1zM26 37h1v1h-1zM28 37h1v1h-1zM31 37h3v1h-3zM36 37h2v1h-2zM39 37h1v1h-1zM41 37h1v1h-1zM44 37h1v1h-1zM46 37h1v1h-1zM49 37h4v1h-4zM0 38h1v1h-1zM5 38h2v1h-2zM9 38h1v1h-1zM11 38h1v1h-1zM22 38h1v1h-1zM24 38h1v1h-1zM26 38h2v1h-2zM32 38h3v1h-3zM36 38h2v1h-2zM40 38h1v1h-1zM44 38h7v1h-7zM52 38h1v1h-1zM0 39h4v1h-4zM8 39h6v1h-6zM15 39h1v1h-1zM17 39h1v1h-1zM19 39h1v1h-1zM23 39h1v1h-1zM25 39h1v1h-1zM27 39h1v1h-1zM29 39h1v1h-1zM31 39h2v1h-2zM34 39h4v1h-4zM40 39h3v1h-3zM44 39h4v1h-4zM52 39h1v1h-1zM0 40h1v1h-1zM4 40h3v1h-3zM8 40h1v1h-1zM12 40h2v1h-2zM16 40h4v1h-4zM22 40h1v1h-1zM26 40h1v1h-1zM28 40h1v1h-1zM31 40h2v1h-2zM35 40h2v1h-2zM40 40h1v1h-1zM42 40h1v1h-1zM46 40h3v1h-3zM50 40h2v1h-2zM0 41h1v1h-1zM4 41h1v1h-1zM10 41h4v1h-4zM15 41h2v1h-2zM18 41h1v1h-1zM26 41h2v1h-2zM29 41h1v1h-1zM31 41h2v1h-2zM35 41h2v1h-2zM39 41h2v1h-2zM43 41h1v1h-1zM45 41h1v1h-1zM50 41h1v1h-1zM52 41h1v1h-1zM0 42h2v1h-2zM3 42h6v1h-6zM12 42h1v1h-1zM18 42h2v1h-2zM22 42h1v1h-1zM24 42h1v1h-1zM27 42h1v1h-1zM29 42h1v1h-1zM31 42h1v1h-1zM35 42h1v1h-1zM38 42h3v1h-3zM42 42h2v1h-2zM46 42h1v1h-1zM48 42h1v1h-1zM50 42h1v1h-1zM52 42h1v1h-1zM1 43h2v1h-2zM7 43h3v1h-3zM11 43h1v1h-1zM14 43h2v1h-2zM20 43h2v1h-2zM29 43h4v1h-4zM34 43h1v1h-1zM36 43h2v1h-2zM41 43h1v1h-1zM46 43h1v1h-1zM48 43h1v1h-1zM51 43h1v1h-1zM3 44h1v1h-1zM6 44h2v1h-2zM9 44h1v1h-1zM14 44h3v1h-3zM18 44h1v1h-1zM22 44h1v1h-1zM24 44h11v1h-11zM36 44h1v1h-1zM39 44h2v1h-2zM42 44h1v1h-1zM44 44h5v1h-5zM50 44h1v1h-1zM52 44h1v1h-1zM8 45h4v1h-4zM13 45h2v1h-2zM17 45h1v1h-1zM22 45h1v1h-1zM24 45h1v1h-1zM28 45h1v1h-1zM31 45h3v1h-3zM35 45h3v1h-3zM40 45h2v1h-2zM43 45h2v1h-2zM48 45h2v1h-2zM51 45h1v1h-1zM0 46h7v1h-7zM9 46h1v1h-1zM11 46h2v1h-2zM15 46h1v1h-1zM17 46h2v1h-2zM20 46h2v1h-2zM24 46h1v1h-1zM26 46h1v1h-1zM28 46h1v1h-1zM30 46h1v1h-1zM32 46h1v1h-1zM36 46h1v1h-1zM39 46h1v1h-1zM41 46h1v1h-1zM43 46h2v1h-2zM46 46h1v1h-1zM48 46h1v1h-1zM50 46h3v1h-3zM0 47h1v1h-1zM6 47h1v1h-1zM13 47h1v1h-1zM17 47h2v1h-2zM20 47h5v1h-5zM28 47h4v1h-4zM33 47h3v1h-3zM38 47h1v1h-1zM40 47h2v1h-2zM43 47h2v1h-2zM48 47h2v1h-2zM51 47h1v1h-1zM0 48h1v1h-1zM2 48h3v1h-3zM6 48h1v1h-1zM8 48h4v1h-4zM13 48h1v1h-1zM16 48h4v1h-4zM21 48h1v1h-1zM24 48h5v1h-5zM31 48h1v1h-1zM33 48h5v1h-5zM40 48h1v1h-1zM42 48h1v1h-1zM44 48h6v1h-6zM0 49h1v1h-1zM2 49h3v1h-3zM6 49h1v1h-1zM9 49h1v1h-1zM12 49h1v1h-1zM14 49h1v1h-1zM16 49h1v1h-1zM19 49h1v1h-1zM21 49h1v1h-1zM31 49h3v1h-3zM35 49h1v1h-1zM39 49h3v1h-3zM44 49h2v1h-2zM48 49h5v1h-5zM0 50h1v1h-1zM2 50h3v1h-3zM6 50h1v1h-1zM8 50h1v1h-1zM11 50h2v1h-2zM15 50h2v1h-2zM21 50h1v1h-1zM24 50h3v1h-3zM30 50h2v1h-2zM33 50h1v1h-1zM35 50h3v1h-3zM39 50h1v1h-1zM41 50h1v1h-1zM44 50h1v1h-1zM46 50h1v1h-1zM48 50h3v1h-3zM0 51h1v1h-1zM6 51h1v1h-1zM10 51h2v1h-2zM13 51h1v1h-1zM15 51h2v1h-2zM18 51h1v1h-1zM20 51h2v1h-2zM24 51h1v1h-1zM29 51h1v1h-1zM31 51h1v1h-1zM33 51h1v1h-1zM36 51h2v1h-2zM39 51h2v1h-2zM44 51h1v1h-1zM47 51h2v1h-2zM51 51h1v1h-1zM0 52h7v1h-7zM8 52h5v1h-5zM14 52h2v1h-2zM17 52h2v1h-2zM22 52h1v1h-1zM24 52h3v1h-3zM28 52h5v1h-5zM34 52h1v1h-1zM36 52h1v1h-1zM38 52h6v1h-6zM46 52h3v1h-3zM51 52h2v1h-2z",
  "payload": "00020126500014br.gov.bcb.pix0128pix@climasilvaefilhos.com.br5204000053039865406490.005802BR5925CLIMATIZACAO SILVA FILHOS6014BELO HORIZONTE62130509LAUDO10506304BB67"
};
const CUSTO = 19.81,
  TOTAL = 490;
function Chave({
  r,
  T,
  tCh,
  ch
}) {
  return React.createElement("div", {
    ref: r,
    style: {
      ...ST.S53,
      transform: `scale(${MOTION.press(T, tCh)})`
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
  })));
}
function Interruptor({
  r,
  T,
  t,
  on
}) {
  return React.createElement("div", {
    ref: r,
    style: {
      ...ST.S172,
      flex: 'none',
      background: on > 0.5 ? '#FFB020' : '#CBD5E1',
      border: `1px solid ${on > 0.5 ? '#B45309' : '#1C4268'}`,
      transform: `scale(${MOTION.press(T, t)})`
    }
  }, React.createElement("span", {
    style: {
      ...ST.S121,
      left: lerp(3, 37, on)
    }
  }));
}
function Ganhos5({
  A,
  T,
  mala,
  cont,
  boom,
  tMala
}) {
  const custo = CUSTO * (1 - mala),
    lucro = TOTAL - custo,
    marg = Math.round(lucro / TOTAL * 100);
  const lp = n2(lucro).split(',');
  const wP = custo / TOTAL * 100;
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "GANHOS & LAUDO",
    voltar: false
  }, React.createElement(Chave, {
    T: T,
    tCh: -9,
    ch: 0
  })), React.createElement("div", {
    style: {
      ...ST.S161,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 86,
      padding: '6px 14px',
      gap: 1
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
      fontSize: 13,
      fontWeight: 600
    }
  }, "N\xBA 1050 \xB7 Modo: T\xE9cnico")), React.createElement("b", {
    style: {
      font: `700 42px/1 ${MONO}`,
      letterSpacing: '-.01em'
    }
  }, "R$ 490,00"), React.createElement("span", {
    style: {
      font: `500 13px/1.2 ${MONO}`,
      color: '#334155'
    }
  }, "LG \xB7 12.000 BTU/h \xB7 R-32 \xB7 porte 12K")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 178,
      height: 126,
      transform: `scale(${boom})`
    }
  }, React.createElement("div", {
    style: {
      ...ST.S94,
      position: 'absolute',
      inset: 0,
      padding: '8px 16px',
      gap: 3,
      justifyContent: 'center'
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
      fontSize: 13
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
      fontSize: 25,
      fontWeight: 700
    }
  }, "+R$"), React.createElement("b", {
    style: {
      fontSize: 64,
      fontWeight: 800,
      lineHeight: 0.9,
      fontVariantNumeric: 'tabular-nums'
    }
  }, lp[0]), React.createElement("span", {
    style: {
      fontSize: 27,
      fontWeight: 700
    }
  }, ",", lp[1])), React.createElement("div", {
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
  }, React.createElement("span", null, mala > 0.5 ? 'PEÇA NA MALA (CUSTO R$ 0)' : 'PEÇA R$ ' + n2(custo)), React.createElement("span", null, "TOTAL R$ 490"))), React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: 15,
      border: '3px solid #22C55E',
      boxShadow: '0 0 14px rgba(34,197,94,.55)',
      opacity: cont,
      pointerEvents: 'none'
    }
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 312,
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
    img: GPV + "img/t10_sensor_ntc.webp",
    nome: "Sensor NTC",
    v: "260,00",
    c: n2(custo)
  }), React.createElement(Servico, {
    ic: "valvula",
    nome: "V\xE1lvula Schrader",
    v: "230,00",
    c: "0,00"
  })), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 566,
      height: 50,
      padding: '0 6px 0 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: mala > 0.5 ? '2px solid #FFB020' : CARD.border
    }
  }, React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 600
    }
  }, "Pe\xE7a na Mala = R$ 0"), React.createElement(Interruptor, {
    r: A.ref('mala'),
    T: T,
    t: tMala,
    on: mala
  })));
}
const OPC_GAR = ['Sem garantia', '7 dias', '30 dias'];
function Garantia5({
  A,
  T,
  sel,
  tSem,
  tCh,
  ch
}) {
  return React.createElement(React.Fragment, null, React.createElement(Topo, {
    titulo: "GANHOS & LAUDO",
    voltar: false
  }, React.createElement(Chave, {
    r: A.ref('chave'),
    T: T,
    tCh: tCh,
    ch: ch
  })), React.createElement("div", {
    style: {
      ...ST.S161,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 84,
      height: 64,
      padding: '0 14px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      color: '#3F3210'
    }
  }, "VALOR TOTAL"), React.createElement("b", {
    style: {
      font: `700 24px/1 ${MONO}`
    }
  }, "R$ 490,00")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 3
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      color: '#3F3210'
    }
  }, "LUCRO \xB7 100%"), React.createElement("b", {
    style: {
      font: `700 24px/1 ${MONO}`,
      color: '#15803D'
    }
  }, "+R$ 490,00"))), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 158,
      height: 180,
      padding: '2px 14px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Pe\xE7a na Mala (Custo R$ 0)"), React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, React.createElement("s", {
    style: {
      font: `700 13px/1 ${MONO}`,
      color: '#5A6A7E'
    }
  }, "R$ 19,81"), React.createElement("b", {
    style: {
      font: `700 19px/1 ${MONO}`
    }
  }, "R$ 0,00"))), React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E2E8F0'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Pe\xE7a na Mala = R$ 0"), React.createElement(Interruptor, {
    T: T,
    t: -9,
    on: 1
  })), React.createElement("div", {
    style: {
      flex: 1.2,
      display: 'flex',
      alignItems: 'center',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.3,
      whiteSpace: 'normal',
      textWrap: 'pretty'
    }
  }, "Pe\xE7a na Mala (Custo R$ 0): 100% do valor cobrado do cliente virou lucro limpo no bolso.")), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 348,
      height: 102,
      padding: '12px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      letterSpacing: '.14em'
    }
  }, "GARANTIA DO SERVI\xC7O"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, OPC_GAR.map((g, i) => React.createElement("div", {
    key: g,
    ref: i === 0 ? A.ref('sem') : undefined,
    style: {
      ...(sel === i ? ST.S50 : ST.S37),
      minHeight: 48,
      height: 48,
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '.02em',
      transform: i === 0 ? `scale(${MOTION.press(T, tSem)})` : undefined
    }
  }, g)))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 16,
      right: 16,
      top: 460,
      height: 40,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 10,
      background: '#F0FDF4',
      border: '1.5px solid #15803D',
      color: '#14532D',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.04em'
    }
  }, React.createElement("span", {
    style: {
      flex: 'none',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#22C55E'
    }
  }), "LAUDO T\xC9CNICO AFERIDO \xB7 PRONTO PARA APROVA\xC7\xC3O PIX"), React.createElement("div", {
    style: {
      ...CARD,
      position: 'absolute',
      left: 16,
      right: 16,
      top: 510,
      height: 92,
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      ...KICK,
      letterSpacing: '.14em'
    }
  }, "CLIENTE & WHATSAPP"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 46,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
      border: '1.5px solid #5A6A7E',
      fontSize: 19,
      fontWeight: 500
    }
  }, "Padaria Sol")));
}
IC.valvula = ['M2 15h7', 'M15 15h7', R_(9, 11, 6, 8, 1), 'M10.5 11V7h3v4', 'M9.5 7h5', 'M12 4v3'];
function EscudoPix(t) {
  const br = 1 + 0.03 * MOTION.pulse(t, 1.1);
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: 136,
      height: 168,
      transform: `scale(${br})`
    }
  }, React.createElement("svg", {
    width: "136",
    height: "168",
    viewBox: "3.5 1.5 17 21",
    style: {
      display: 'block',
      overflow: 'visible',
      filter: 'drop-shadow(0 6px 14px rgba(250,204,21,.35))'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "escOuro",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#FACC15"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#FFB020"
  }))), React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    fill: "url(#escOuro)",
    stroke: "#FFE27A",
    strokeWidth: ".5",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M12 7.5v10",
    fill: "none",
    stroke: "#0C2747",
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M14.6 9.6c-.4-.8-1.3-1.3-2.6-1.3-1.5 0-2.6.8-2.6 1.9 0 2.7 5.3 1.3 5.3 4 0 1.1-1.1 2-2.7 2-1.3 0-2.4-.6-2.8-1.5",
    fill: "none",
    stroke: "#0C2747",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), React.createElement("span", {
    style: {
      position: 'absolute',
      right: -14,
      bottom: 10,
      boxSizing: 'border-box',
      height: 34,
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 9,
      background: '#22C55E',
      border: '3px solid #0E2240',
      color: '#FFFFFF',
      font: "800 20px/1 'Barlow Semi Condensed',sans-serif",
      letterSpacing: '.08em',
      boxShadow: '0 4px 10px rgba(0,0,0,.35)'
    }
  }, "PIX"));
}
function Piece({
  mao = true,
  mascote = true
}) {
  const {
    T,
    CUES
  } = useComposition();
  const a = CUES.Lucro,
    b = CUES.Garantia,
    c = CUES.Laudo,
    D = 31.95;
  const root = React.useRef(null);
  const A = useAnchors(root);
  const tMala = a + 2.7;
  const mala = MOTION.enter(T, tMala + 0.05, tMala + 0.35);
  const malaV = MOTION.enter(T, tMala + 0.2, tMala + 1.0);
  const cont = MOTION.enter(T, tMala + 1.0, tMala + 1.3);
  const boom = 1 + 0.035 * Math.sin(Math.PI * p01(T, tMala + 0.9, tMala + 1.6));
  const tSem = b + 1.5,
    sel = T >= tSem + 0.05 ? 0 : 2;
  const tCh = c - 0.3,
    ch = MOTION.enter(T, tCh + 0.05, tCh + 0.35);
  const k = costura(T, a, D);
  const tIni = [-1, b + 0.1];
  const maoO = (mao ? 1 : 0) * Math.max(MOTION.enter(T, a + 0.5, a + 0.8) * (1 - MOTION.enter(T, tMala + 1.6, tMala + 1.9)), MOTION.enter(T, b + 0.3, b + 0.6) * (1 - MOTION.enter(T, c, c + 0.25)));
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      height: 844,
      overflow: 'hidden',
      background: '#0C2747'
    }
  }, React.createElement(Palco, {
    rootRef: root,
    label: `Video 05 · ${Math.floor(T)}s`,
    oculto: k.o >= 0.999 || T >= c + 0.45,
    telaX: k.telaX
  }, React.createElement("div", {
    style: visTela(T, tIni, 0)
  }, React.createElement(Ganhos5, {
    A: A,
    T: T,
    mala: malaV,
    cont: cont,
    boom: boom,
    tMala: tMala
  })), React.createElement("div", {
    style: visTela(T, tIni, 1)
  }, React.createElement(Garantia5, {
    A: A,
    T: T,
    sel: sel,
    tSem: tSem,
    tCh: tCh,
    ch: ch
  })), React.createElement(Hand, {
    T: T,
    A: A,
    o: maoO,
    start: {
      x: 320,
      y: 470
    },
    taps: [tMala, tSem, tCh],
    moves: [{
      s: a + 1.2,
      e: a + 2.4,
      to: 'mala',
      dx: 4,
      dy: 4
    }, {
      s: b + 0.5,
      e: b + 1.3,
      to: 'sem',
      dx: 10,
      dy: 6
    }, {
      s: c - 2.2,
      e: c - 0.5,
      to: 'chave',
      dx: 6,
      dy: 6
    }]
  })), T >= c && React.createElement(LaudoDoc, {
    T: T,
    c: c,
    num: "1050",
    label: "Video 05 \xB7 Laudo N\xBA 1050",
    cliente: "Padaria Sol",
    equip: "LG 12.000 \xB7 R-32",
    qr: QR1050,
    valor: "R$ 490,00",
    equipExtra: "Sem garantia",
    linhas: [['Causa', 'Sensor NTC fora da curva na temperatura real']],
    servicos: [['Substituição de Sensor NTC + Aferição Ôhmica', 'R$ 260,00'], ['Válvula Schrader', 'R$ 230,00']],
    prev: "Evita congelamento da linha e retorno de fluido l\xEDquido ao compressor (reparo estimado em R$ 950 a R$ 1.800)."
  }, React.createElement("div", {
    style: {
      ...CX,
      padding: '5px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("span", {
    style: ROTD
  }, "SENSOR NTC 10K"), React.createElement(SeloDoc, {
    ok: false
  }, "FORA DA CURVA")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 6
    }
  }, React.createElement("b", {
    style: {
      font: `700 17px/1.1 ${MONO}`
    }
  }, "9,50 k\u03A9 a 35,0 \xB0C"), React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#1E293B'
    }
  }, "desvio +46,4%")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid #E2E8F0',
      paddingTop: 5
    }
  }, React.createElement("span", {
    style: ROTD
  }, "G\xC1S & SH \xB7 R-32"), React.createElement(SeloDoc, {
    ok: true
  }, "CARGA IDEAL")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 6
    }
  }, React.createElement("b", {
    style: {
      font: `700 17px/1.1 ${MONO}`
    }
  }, "SH 8,8 \xB0C"), React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#1E293B'
    }
  }, "suc\xE7\xE3o 122 PSI")))), React.createElement(Faixa, {
    T: T,
    t0: [a, b, c],
    mascote: mascote,
    legs: [[['Peça na Mala:'], ['\n'], ['+R$ 490 limpos', 'a'], ['\n'], ['só pra você.']], [['Já mexeram?'], ['\n'], ['Sem garantia', 'a'], ['\n'], ['em 1 toque.']], [['Modo Laudo:'], ['\n'], ['Pix na hora', 'a'], ['\n'], ['sem choro.', 'a']]]
  }), k.o > 0.001 && React.createElement(Gancho, {
    t: k.t,
    o: k.o,
    x: k.x,
    k: 1.2,
    dur: 6.37,
    label: "Video 05",
    visual: EscudoPix,
    h1: ['Chorou desconto', 'na hora do preço?'],
    g: ['Blinde seu lucro', 'e aprove no Pix.'],
    aviso: "\u2715 VOLTAR DE GRA\xC7A"
  }));
}
  window.GPVerticais.v05 = Piece;
})();

(function () {
  /* Player dos 5 verticais (anexado por build-gp-verticais.js ao fim de gp-verticais.js).
     Modos: 'mudo' (loop por rAF, só com o slot visível) e 'som' (T = audio.currentTime do .mp3 oficial).
     Toque na tela congela T (e o .mp3, se houver som) com a pílula PAUSADO; novo toque retoma do mesmo T.
     🔊 OUVIR EXPLICAÇÃO reinicia o .mp3 em 0 e pausa os outros; ao terminar, volta ao loop mudo a partir de 0,0 s (costura de loop do próprio vídeo).
     Na PV o botão mora em [data-gp-barra="vNN"] (base do chassi, fora do palco); sem essa barra, cai no selo da faixa de status do palco. */
  var e = React.createElement, META = window.GPV_META;
  var reduz = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var PILULA = { position: 'absolute', right: 8, bottom: 8, background: 'rgba(8,27,51,0.86)', color: '#FDE68A', border: '1px solid rgba(250,204,21,0.6)', font: "700 12px/1 'Plus Jakarta Sans',sans-serif", padding: '6px 10px', borderRadius: 999, pointerEvents: 'none', zIndex: 90, maxWidth: 'calc(100% - 16px)', textAlign: 'center' };
  /* Selo do som na faixa de status do palco (y 0–28): não cobre cabeçalho, Topo nem Dock. */
  var BOTAO = { position: 'absolute', left: '50%', top: 2, transform: 'translateX(-50%)', zIndex: 91, boxSizing: 'border-box', height: 24, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 6, borderRadius: 999, border: '1.5px solid #FACC15', background: 'rgba(8,27,51,0.92)', color: '#FFFFFF', font: "800 12px/1 'Barlow Semi Condensed',sans-serif", letterSpacing: '.06em', whiteSpace: 'nowrap', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,.35)' };
  /* Barra da PV: fora do palco, na base do chassi marinho ([data-gp-barra="vNN"], altura reservada no HTML). Mesmo estilo do botão estático do pôster. */
  var BARRA = { boxSizing: 'border-box', width: '100%', height: 40, padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 999, border: 'none', background: '#FACC15', color: '#0C2747', font: "800 15px/1.1 'Plus Jakarta Sans',system-ui,sans-serif", letterSpacing: '.03em', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', /* rótulos curtos, sempre 1 linha */ cursor: 'pointer', boxShadow: '0 6px 16px rgba(0,0,0,.3)' };
  var BARRA_SOM = { background: '#15803D', color: '#FFFFFF' };
  var players = [];
  function pararOutros(quem) { players.forEach(function (p) { if (p !== quem) p.pararSom(); }); }

  function Player(props) {
    var host = props.host, m = META[props.id], DUR = m.dur;
    var fixo = reduz ? Math.min(DUR - 0.05, m.cues.Laudo != null ? m.cues.Laudo + 3 : DUR * 0.9) : 0;
    var sT = React.useState(fixo), T = sT[0], setT = sT[1];
    var sG = React.useState({ sc: 1, x: 0, y: 0 }), geo = sG[0], setGeo = sG[1];
    var sV = React.useState(false), visivel = sV[0], setVis = sV[1];
    var sM = React.useState('mudo'), modo = sM[0], setModo = sM[1];
    var sP = React.useState(false), pausado = sP[0], setPausado = sP[1];
    var acc = React.useRef(fixo), audio = React.useRef(null), est = React.useRef({});
    est.current = { modo: modo, pausado: pausado };

    function aud() {
      if (!audio.current) {
        var a = new Audio(window.GPV_BASE + 'audios/' + m.audio);
        a.preload = 'auto';
        a.addEventListener('ended', function () { acc.current = 0; setT(0); setModo('mudo'); setPausado(false); });
        audio.current = a;
      }
      return audio.current;
    }
    var api = React.useRef({ pararSom: function () { if (audio.current) audio.current.pause(); if (est.current.modo === 'som') { acc.current = audio.current ? audio.current.currentTime : acc.current; setModo('mudo'); setPausado(false); } } });

    React.useEffect(function () {
      players.push(api.current);
      /* Escala só muda com >= 2 px de largura (ignora o abre/fecha da barra de endereço no scroll do celular). */
      var ultW = -99;
      var medir = function () { var w = host.clientWidth; if (Math.abs(w - ultW) < 2) return; ultW = w; var h = host.clientHeight || w * 844 / 390, sc = Math.min(w / 390, h / 844); setGeo({ sc: sc, x: (w - 390 * sc) / 2, y: (h - 844 * sc) / 2 }); };
      var ro = new ResizeObserver(medir); ro.observe(host); medir();
      /* Holofote com histerese (liga com >= 18% à mostra, desliga abaixo de 6%) e debounce de 220 ms; fora dele o quadro congela no último T. */
      var visAgora = false, esperaVis = 0;
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { var r = x.isIntersecting ? x.intersectionRatio : 0, v = visAgora ? r >= 0.06 : r >= 0.18; clearTimeout(esperaVis); esperaVis = setTimeout(function () { if (v !== visAgora) { visAgora = v; setVis(v); } }, 220); }); }, { threshold: [0, 0.06, 0.12, 0.18, 0.3, 0.5, 0.75, 1] });
      io.observe(host);
      var clique = function (ev) {
        if (ev.target && ev.target.closest && ev.target.closest('[data-gp-ouvir]')) return; /* o botão é tratado pelo React (raiz = este slot) */
        if (est.current.modo === 'mudo' && reduz) return;
        var p = !est.current.pausado;
        if (est.current.modo === 'som' && audio.current) { if (p) audio.current.pause(); else audio.current.play(); }
        setPausado(p);
      };
      var seek = function (ev) {
        var t = Math.max(0, Math.min(DUR, +(ev.detail && ev.detail.time) || 0));
        acc.current = t; if (est.current.modo === 'som' && audio.current) audio.current.currentTime = t;
        host.setAttribute('data-gp-t', t.toFixed(2)); /* só no seek (sonda): zero mutação de DOM a 60 fps */
        setT(t);
      };
      host.addEventListener('click', clique);
      host.addEventListener('data-om-seek-to-time-frame', seek);
      return function () { clearTimeout(esperaVis); ro.disconnect(); io.disconnect(); host.removeEventListener('click', clique); host.removeEventListener('data-om-seek-to-time-frame', seek); players.splice(players.indexOf(api.current), 1); if (audio.current) audio.current.pause(); };
    }, []);

    React.useEffect(function () {
      if (pausado || !visivel) return undefined;
      if (modo === 'mudo' && reduz) return undefined;
      var raf = 0, last = 0;
      var tick = function (now) {
        if (modo === 'som') { var a = audio.current; setT(a ? Math.min(a.currentTime, DUR - 0.001) : 0); }
        else { if (last) acc.current = (acc.current + Math.min(now - last, 100) / 1000) % DUR; last = now; setT(acc.current); }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return function () { cancelAnimationFrame(raf); };
    }, [modo, pausado, visivel]);

    React.useEffect(function () { host.setAttribute('data-gp-modo', pausado ? 'pausado' : modo); }, [modo, pausado]);
    var ouvir = function (ev) {
      ev.stopPropagation();
      if (modo === 'som' && !pausado) { if (audio.current) audio.current.pause(); setPausado(true); return; }
      if (modo === 'som' && pausado) { if (audio.current) audio.current.play(); setPausado(false); return; }
      pararOutros(api.current);
      var a = aud(); a.currentTime = 0; setT(0);
      var pr = a.play(); if (pr && pr.catch) pr.catch(function (err) { console.warn('gp-verticais: áudio não tocou', err && err.name); setModo('mudo'); });
      setModo('som'); setPausado(false);
    };
    /* Barra da PV: rótulos curtos de 1 linha (cabem em 264 px a 15 px). O selo interno do palco (sem barra) mantém os longos. */
    var rotulo = props.barra
      ? (modo === 'som' ? (pausado ? '❚❚ PAUSADO · CONTINUAR' : '🔊 OUVINDO · PAUSAR') : '🔊 OUVIR EXPLICAÇÃO')
      : (modo === 'som' ? (pausado ? '❚❚ PAUSADO · TOQUE PARA CONTINUAR' : '🔊 OUVINDO · TOQUE PARA PAUSAR') : '🔊 OUVIR EXPLICAÇÃO');
    var bProps = { type: 'button', 'data-gp-ouvir': modo, 'aria-label': modo === 'som' ? (pausado ? 'Continuar explicação' : 'Pausar explicação') : 'Ouvir explicação', onClick: ouvir };
    var botao = props.barra
      ? ReactDOM.createPortal(e('button', Object.assign(bProps, { style: modo === 'som' ? Object.assign({}, BARRA, BARRA_SOM) : BARRA }), rotulo), props.barra)
      : e('button', Object.assign(bProps, { style: BOTAO }), rotulo);
    return e(React.Fragment, null,
      e('div', { style: { position: 'absolute', left: geo.x, top: geo.y, width: 390, height: 844, transform: 'scale(' + geo.sc + ')', transformOrigin: '0 0' } },
        e(window.GPVCtx.Provider, { value: { T: T, CUES: m.cues } }, e(props.piece, { mao: true, mascote: true }))),
      botao,
      pausado ? e('div', { 'data-gp-pausado': '', style: PILULA }, '❚❚ PAUSADO · TOQUE PARA CONTINUAR') : null);
  }

  document.querySelectorAll('[data-gp-vertical]').forEach(function (el) {
    var id = el.getAttribute('data-gp-vertical'), p = window.GPVerticais[id];
    if (!p || !META[id]) return;
    var cs = getComputedStyle(el);
    if (cs.position === 'static') el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.style.transform = 'translateZ(0)'; el.style.backfaceVisibility = 'hidden'; el.style.webkitBackfaceVisibility = 'hidden'; el.style.contain = 'layout paint';
    if (!el.clientHeight) el.style.aspectRatio = '390 / 844';
    el.style.cursor = 'pointer';
    var barra = document.querySelector('[data-gp-barra="' + id + '"]');
    var slot = barra ? (barra.querySelector('[data-gp-ouvir-slot]') || barra) : null; /* o ⛶ Ampliar, irmão do slot, fica intacto */
    if (slot) slot.textContent = ''; /* sai o botão estático do pôster; entra o do player */
    ReactDOM.createRoot(el).render(e(Player, { host: el, piece: p, id: id, barra: slot }));
  });
})();

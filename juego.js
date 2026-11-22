/* Español EF – gemeinsamer Spielmotor für Story-Spiele
   Jedes Spiel ruft JUEGO.start({...}) auf. Aufgabentypen: choice, type, order, error.
   Konventionen wie english8: Spielstand in sessionStorage, Resume-Frage, nur weiter bei richtig,
   falsche Aufgaben kommen später wieder, am Ende E8.reportInto mit total. */
(function () {
  const CSS = `
  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
  body{margin:0;min-height:100vh;background:var(--bg);color:var(--txt);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;font-size:18px;line-height:1.45;padding-bottom:40px}
  main{max-width:880px;margin:0 auto;padding:10px 14px}
  .top{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}
  a.back{color:var(--muted);text-decoration:none;font-size:15px}
  .tbtn{background:transparent;color:var(--txt);border:1.5px solid var(--line);border-radius:10px;padding:7px 12px;font-size:15px;cursor:pointer}
  .panel{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:18px;margin-top:12px;box-shadow:0 14px 40px rgba(0,0,0,.35)}
  .scene{padding:0;overflow:hidden}
  h1{font-size:30px;margin:6px 0;line-height:1.15} h2{font-size:23px;margin:4px 0 6px}
  .de{color:var(--muted);font-size:15px;font-style:italic;margin-top:4px}
  .tag{display:inline-block;background:var(--accent);color:var(--accentTxt);padding:3px 10px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;border-radius:20px;font-weight:700}
  .center{text-align:center}
  .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
  .row.c{justify-content:center}
  .btn{font-size:19px;padding:12px 20px;border-radius:12px;border:2px solid var(--line);background:var(--btn);color:var(--txt);cursor:pointer;font-weight:600;min-width:64px}
  .btn:active{transform:translateY(2px)}
  .btn.primary{background:var(--accent);border-color:var(--accent);color:var(--accentTxt)}
  .btn.right{border-color:var(--ok);background:rgba(76,255,154,.15);color:var(--ok)}
  .btn.wrong{border-color:var(--bad);background:rgba(255,90,110,.15);color:var(--bad);animation:shake .35s}
  .btn:disabled{opacity:.5}
  @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
  @keyframes pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
  .opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-top:12px}
  .who{display:flex;gap:12px;align-items:flex-start;background:var(--bubble);border-left:5px solid var(--accent);padding:10px 14px;border-radius:8px;margin:10px 0}
  .who .face{font-size:38px;line-height:1;flex:none}
  .who .face.av{width:48px;height:48px;border-radius:50%;overflow:hidden}
  .who b.n{display:block;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
  .q{font-size:23px;font-weight:600;margin:10px 0 2px}
  .gap{display:inline-block;min-width:64px;border-bottom:3px solid var(--accent);text-align:center;padding:0 4px}
  .task{font-weight:700;color:var(--accent2);margin-top:6px}
  input.ty{font-size:22px;padding:11px 14px;border-radius:12px;border:2px solid var(--accent);background:var(--input);color:var(--txt);width:100%;max-width:520px}
  .acc{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
  .acc button{font-size:20px;min-width:44px;padding:7px;border-radius:10px;border:2px solid var(--line);background:var(--btn);color:var(--txt)}
  .fb{min-height:26px;margin-top:12px;font-weight:700}
  .fb.good{color:var(--ok)} .fb.bad{color:var(--bad)}
  .fb .sol{display:block;margin-top:6px;color:var(--txt);font-weight:600}
  .fb .hint{display:block;font-weight:500;color:var(--txt);margin-top:4px}
  .line{min-height:60px;background:var(--input);border:2px solid var(--accent);border-radius:12px;padding:10px;display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
  .line.wrong{border-color:var(--bad);animation:shake .35s} .line.right{border-color:var(--ok)}
  .pool{display:flex;flex-wrap:wrap;gap:8px;min-height:52px;margin:8px 0}
  .chip{font-size:20px;padding:9px 14px;border-radius:10px;background:var(--btn);border:2px solid var(--line);color:var(--txt);cursor:pointer;font-weight:600}
  .line .chip{border-color:var(--accent)}
  .words{font-size:23px;line-height:2;margin:10px 0}
  .word{display:inline-block;padding:2px 8px;margin:2px;border-radius:8px;border:2px solid var(--line);cursor:pointer;background:var(--btn)}
  .word.wrong{border-color:var(--bad);animation:shake .35s} .word.picked{border-color:var(--accent);background:var(--bubble)} .word.fixed{border-color:var(--ok);color:var(--ok)}
  .dots{display:flex;gap:5px;flex-wrap:wrap;margin-top:8px}
  .dots i{width:11px;height:11px;border-radius:50%;background:var(--line);display:block}
  .dots i.d{background:var(--ok)}
  .ov{position:fixed;inset:0;background:rgba(0,0,0,.7);display:none;z-index:20;overflow:auto;padding:16px}
  .ov.show{display:block}
  .ov .panel{max-width:720px;margin:20px auto}
  .rule{background:var(--bubble);border-radius:10px;padding:10px 14px;margin:10px 0}
  .ex{font-style:italic;color:var(--accent2)}
  table.t{border-collapse:collapse;margin:8px 0;font-size:17px} table.t td,table.t th{border:1px solid var(--line);padding:5px 10px;text-align:left}
  .stat{display:inline-block;background:var(--bubble);border-radius:10px;padding:6px 12px;margin:4px}
  .avbig{width:150px;border-radius:50%;overflow:hidden;margin:8px auto;border:4px solid var(--accent)}
  .small{font-size:14px;color:var(--muted)}
  @media(max-width:560px){.q{font-size:20px}.opts{grid-template-columns:1fr}}`;

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[<>&]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[¿¡.!?,;:]+/g, " ").replace(/\s+/g, " ").trim();
  const noAcc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
  const asList = a => Array.isArray(a) ? a : [a];
  const solText = t => t.show || (t.q ? (t.q.indexOf("___") >= 0 ? t.q.replace(/___/g, "<b>" + asList(t.a)[0] + "</b>") : t.q + " → <b>" + asList(t.a)[0] + "</b>") : asList(t.a)[0]);

  let G = null, S = null, LOCK = false;
  const ALL = () => G.stages.flatMap((st, si) => st.tasks.map((t, ti) => si + "-" + ti));
  const task = id => { const [s, t] = id.split("-").map(Number); return G.stages[s].tasks[t]; };
  function save() { try { sessionStorage.setItem(G.key, JSON.stringify(S)); } catch (e) { } }
  function load() { try { const x = JSON.parse(sessionStorage.getItem(G.key)); if (x && x.v === 1) S = x; } catch (e) { } }
  function me() { const s = window.E8 && E8.getSession(); return s ? s.nr : null; }
  function reset() { S = null; try { sessionStorage.removeItem(G.key); } catch (e) { } }

  function newGame() {
    S = { v: 1, nr: me(), stage: 0, phase: "intro", queue: [], solved: 0, total: ALL().length, mistakes: 0, wrong: [], start: Date.now(), end: 0, done: false, data: {} };
    save();
  }
  function startStage() {
    const st = G.stages[S.stage];
    const ids = st.tasks.map((t, i) => S.stage + "-" + i);
    S.queue = st.shuffle ? shuffle(ids) : ids;
    S.phase = "play"; save();
  }

  /* ---------- Rahmen ---------- */
  function frame(inner, opts) {
    opts = opts || {};
    return `<div class="top"><a class="back" href="./">← Todos los juegos</a>
      <div class="row">${G.rules ? `<button class="tbtn" id="rulesBtn">📜 ${G.rulesLabel || "La regla"}</button>` : ""}${opts.mistakes ? `<span class="small">Errores: <span id="errc">${S.mistakes}</span></span>` : ""}</div></div>${inner}`;
  }
  function wire() {
    if ($("rulesBtn")) $("rulesBtn").onclick = showRules;
  }
  function showRules() {
    $("ovc").innerHTML = `<span class="tag">${G.rulesLabel || "La regla"}</span>${G.rules}<div class="row c" style="margin-top:12px"><button class="btn primary" id="ovx">¡Vale! – Okay</button></div>`;
    $("ov").classList.add("show"); $("ovx").onclick = () => $("ov").classList.remove("show");
  }

  /* ---------- Bildschirme ---------- */
  function intro() {
    $("app").innerHTML = frame(`<div class="panel center">
      <div style="font-size:60px">${G.icon}</div><span class="tag">${G.topic}</span><h1>${G.title}</h1>
      <div class="avbig">${E8.myAvatar()}</div>
      <div style="text-align:left">${G.intro}</div>
      <div class="row c" style="margin-top:14px"><button class="btn primary" id="go">${G.goLabel || "¡Vamos!"}</button></div>
      <p class="small">${G.time || "ca. 15 minutos"}</p></div>`);
    wire(); $("go").onclick = () => { newGame(); render(); };
  }
  function resume() {
    $("app").innerHTML = frame(`<div class="panel center"><h1>¡Bienvenido/a otra vez!</h1>
      <p>Alguien ya empezó este juego en este iPad. <span class="de">– Hier hat schon jemand angefangen.</span></p>
      <div class="row c"><button class="btn primary" id="c">Continuar – Weiter</button><button class="btn" id="n">Soy otro jugador / otra jugadora</button></div></div>`);
    wire(); $("c").onclick = render; $("n").onclick = () => { reset(); intro(); };
  }
  function scene() { return G.scene ? `<div class="panel scene">${G.scene(S, G)}</div>` : ""; }
  function render() {
    if (S.done) return finish();
    const st = G.stages[S.stage];
    if (S.phase === "intro") {
      $("app").innerHTML = frame(`${scene()}<div class="panel"><span class="tag">${st.label || "Parte " + (S.stage + 1)}</span><h2>${st.title}</h2>${st.intro || ""}
        <div class="row c" style="margin-top:14px"><button class="btn primary" id="go">${st.go || "¡Adelante!"}</button></div></div>`, { mistakes: true });
      wire(); $("go").onclick = () => { startStage(); render(); }; window.scrollTo(0, 0); return;
    }
    const id = S.queue[0], t = task(id);
    const doneInStage = st.tasks.length - new Set(S.queue).size;
    const dots = `<div class="dots">${st.tasks.map((x, i) => `<i class="${i < doneInStage ? "d" : ""}"></i>`).join("")}</div>`;
    $("app").innerHTML = frame(`${scene()}<div class="panel"><div class="row" style="justify-content:space-between"><span class="tag">${st.label || "Parte " + (S.stage + 1)}</span><span class="small">${st.title}</span></div>${dots}
      <div id="task"></div><div class="fb" id="fb"></div><div class="row c" id="nextrow"></div></div>`, { mistakes: true });
    wire(); LOCK = false; JUEGO._t = t;
    ({ choice: rChoice, type: rType, order: rOrder, error: rError })[t.t](t, id);
  }
  function head(t) {
    let h = "";
    const q = t.q ? `<div class="q">${t.q.replace(/___/g, '<span class="gap" id="gap">&nbsp;?&nbsp;</span>')}</div>${t.qDe ? `<div class="de">${t.qDe}</div>` : ""}` : "";
    const inBubble = t.who && !t.say;
    if (t.task) h += `<div class="task">${t.task}${t.taskDe ? ` <span class="de" style="font-weight:400">– ${t.taskDe}</span>` : ""}</div>`;
    if (t.who) h += `<div class="who"><div class="face${t.who.av ? " av" : ""}">${t.who.av ? E8.myAvatar() : t.who.face}</div><div><b class="n">${t.who.name}</b>${t.say || ""}${t.sayDe ? `<div class="de">${t.sayDe}</div>` : ""}${inBubble ? q : ""}</div></div>`;
    else if (t.say) h += `<div class="rule">${t.say}${t.sayDe ? `<div class="de">${t.sayDe}</div>` : ""}</div>`;
    if (!inBubble) h += q;
    return h;
  }

  /* ---------- Antwort-Verarbeitung ---------- */
  function right(t, id, msg) {
    if (LOCK) return; LOCK = true;
    S.queue.shift(); if (S.queue.indexOf(id) < 0) S.solved++;
    if (G.onSolve) G.onSolve(S, t);
    $("fb").className = "fb good";
    $("fb").innerHTML = (msg || ["¡Correcto! ✔", "¡Muy bien! ⭐", "¡Genial! 🎉", "¡Perfecto! ✔"][Math.floor(Math.random() * 4)]) + (t.after ? `<span class="hint">${t.after}</span>` : "");
    advance(t.after ? 0 : 1100);
  }
  function wrong(t, id, hint) {
    if (LOCK) return; LOCK = true;
    S.mistakes++; if (S.wrong.indexOf(id) < 0) S.wrong.push(id); if ($("errc")) $("errc").textContent = S.mistakes;
    S.queue.shift(); S.queue.splice(Math.min(3, S.queue.length), 0, id);
    save();
    $("fb").className = "fb bad";
    $("fb").innerHTML = `✘ ${hint || t.hint || "No es correcto. – Leider falsch."}${t.solution !== false ? `<span class="sol">✔ ${solText(t)}</span>` : ""}<span class="small">Esta tarea vuelve más tarde. – Die Aufgabe kommt nochmal.</span>`;
    $("nextrow").innerHTML = `<button class="btn primary" id="nx">Vale → Weiter</button>`; $("nx").onclick = render;
    if (G.onMistake) G.onMistake(S);
  }
  function advance(ms) {
    if (!S.queue.length) {
      if (S.stage + 1 < G.stages.length) { S.stage++; S.phase = "intro"; }
      else { S.done = true; S.end = Date.now(); }
    }
    save();
    if (ms) setTimeout(render, ms);
    else { $("nextrow").innerHTML = `<button class="btn primary" id="nx">Siguiente →</button>`; $("nx").onclick = render; }
  }

  /* ---------- Aufgabentypen ---------- */
  function rChoice(t, id) {
    const opts = t.keep ? t.opts.slice() : shuffle(t.opts);
    $("task").innerHTML = head(t) + `<div class="opts">${opts.map(o => `<button class="btn" data-o="${esc(o)}">${o}</button>`).join("")}</div>`;
    document.querySelectorAll(".opts .btn").forEach(b => b.onclick = () => {
      if (LOCK) return;
      const o = b.dataset.o, ok = asList(t.a).indexOf(o) >= 0;
      b.classList.add(ok ? "right" : "wrong");
      if (ok) { if ($("gap")) $("gap").textContent = o; right(t, id); }
      else { document.querySelectorAll(".opts .btn").forEach(x => { if (asList(t.a).indexOf(x.dataset.o) >= 0) x.classList.add("right"); }); wrong(t, id, t.why && t.why[o]); }
    });
  }
  function accBar() { return `<div class="acc">${["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡"].map(c => `<button type="button" data-c="${c}">${c}</button>`).join("")}</div>`; }
  function wireAcc(inp) {
    document.querySelectorAll(".acc button").forEach(b => b.onclick = () => { const p = inp.selectionStart ?? inp.value.length, e = inp.selectionEnd ?? p; inp.value = inp.value.slice(0, p) + b.dataset.c + inp.value.slice(e); inp.focus(); inp.setSelectionRange(p + 1, p + 1); });
  }
  function rType(t, id) {
    $("task").innerHTML = head(t) + `<div class="row" style="margin-top:10px"><input class="ty" id="ty" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${t.ph || "…"}"><button class="btn primary" id="chk">✔</button></div>${accBar()}`;
    const inp = $("ty"); wireAcc(inp); inp.focus();
    const go = () => {
      if (LOCK || !inp.value.trim()) return;
      const g = norm(inp.value), A = asList(t.a).map(norm);
      if (A.indexOf(g) >= 0) { if ($("gap")) $("gap").textContent = inp.value.trim(); inp.disabled = true; return right(t, id); }
      if (A.some(a => noAcc(a) === noAcc(g))) return wrong(t, id, "¡Casi! Ojo con los acentos. – Achte auf die Akzente.");
      const noArt = x => x.replace(/^(el|la|los|las|un|una|unos|unas) /, "");
      if (A.some(a => noArt(a) !== a && noArt(a) === noArt(g))) return wrong(t, id, t.artHint || "¡Casi! Ojo con el artículo. – Achte auf den Artikel (el/la …).");
      const tip = t.tips && Object.keys(t.tips).find(k => norm(k) === g);
      wrong(t, id, tip ? t.tips[tip] : null);
    };
    $("chk").onclick = go; inp.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  }
  function rOrder(t, id) {
    const pool = shuffle(t.words.map((w, i) => ({ w, i }))), line = [];
    $("task").innerHTML = head(t) + `<div class="line" id="line"></div><div class="pool" id="pool"></div><div class="row"><button class="btn" id="clr">↺ Borrar</button><button class="btn primary" id="chk">✔ Comprobar</button></div>`;
    const draw = () => {
      $("line").innerHTML = line.map((x, k) => `<button class="chip" data-k="${k}">${x.w}</button>`).join("");
      $("pool").innerHTML = pool.map((x, k) => x.used ? "" : `<button class="chip" data-p="${k}">${x.w}</button>`).join("");
      $("line").querySelectorAll(".chip").forEach(b => b.onclick = () => { if (LOCK) return; const x = line.splice(+b.dataset.k, 1)[0]; x.used = false; draw(); });
      $("pool").querySelectorAll(".chip").forEach(b => b.onclick = () => { if (LOCK) return; const x = pool[+b.dataset.p]; x.used = true; line.push(x); draw(); });
    };
    draw();
    $("clr").onclick = () => { if (LOCK) return; line.length = 0; pool.forEach(x => x.used = false); draw(); };
    $("chk").onclick = () => {
      if (LOCK) return;
      if (line.length < t.words.length) { $("fb").className = "fb bad"; $("fb").textContent = "Usa todas las palabras. – Benutze alle Wörter."; return; }
      const g = norm(line.map(x => x.w).join(" "));
      if (asList(t.a).map(norm).indexOf(g) >= 0) { $("line").classList.add("right"); right(t, id); }
      else { $("line").classList.add("wrong"); wrong(t, id); }
    };
  }
  function rError(t, id) {
    $("task").innerHTML = head(t) + `<div class="words">${t.words.map((w, i) => `<span class="word" data-i="${i}">${w}</span>`).join(" ")}</div><div id="fix"></div>`;
    let missed = false;
    document.querySelectorAll(".word").forEach(w => w.onclick = () => {
      if (LOCK || $("fix").innerHTML) return;
      if (+w.dataset.i !== t.bad) { w.classList.add("wrong"); if (!missed) { missed = true; $("fb").className = "fb bad"; $("fb").textContent = "Esta palabra está bien. Busca otra. – Dieses Wort ist richtig."; } else wrong(t, id); return; }
      w.classList.add("picked"); $("fb").textContent = "";
      $("fix").innerHTML = `<div class="task">¿Qué es correcto? <span class="de" style="font-weight:400">– Was ist richtig?</span></div><div class="opts">${shuffle(t.opts).map(o => `<button class="btn" data-o="${esc(o)}">${o}</button>`).join("")}</div>`;
      document.querySelectorAll("#fix .btn").forEach(b => b.onclick = () => {
        if (LOCK) return;
        if (b.dataset.o === t.fix) { b.classList.add("right"); w.textContent = t.fix; w.classList.add("fixed"); if (missed) wrong(t, id, t.hint); else right(t, id); }
        else { b.classList.add("wrong"); wrong(t, id); }
      });
    });
    t.show = t.show || t.words.map((w, i) => i === t.bad ? t.fix : w).join(" ");
  }

  /* ---------- Ende ---------- */
  function finish() {
    const sec = Math.round((S.end - S.start) / 1000);
    $("app").innerHTML = frame(`${scene()}<div class="panel center">${G.outro}
      <p><span class="stat">Errores: <b>${S.mistakes}</b></span><span class="stat">Tiempo: <b>${Math.floor(sec / 60)} min ${sec % 60} s</b></span><span class="stat">Tareas: <b>${S.total}</b></span></p>
      <div id="coinbox" style="margin:12px auto;padding:12px;background:var(--bubble);border-radius:12px;max-width:460px"></div>
      ${S.wrong.length ? `<div style="text-align:left"><b>Repasa esto:</b> <span class="small">– Das solltest du nochmal anschauen:</span><ul>${S.wrong.map(id => `<li>${solText(task(id))}</li>`).join("")}</ul></div>` : `<p>🌟 ¡Sin errores, perfecto!</p>`}
      <div class="row c"><button class="btn primary" id="again">Otra vez / otro jugador</button><button class="btn" onclick="location.href='./'">← Todos los juegos</button></div></div>`);
    wire();
    E8.reportInto("coinbox", G.id, S, save);
    $("again").onclick = () => { reset(); intro(); };
  }

  window.JUEGO = {
    start(cfg) {
      G = cfg;
      const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
      document.body.insertAdjacentHTML("beforeend", `<div class="ov" id="ov"><div class="panel" id="ovc"></div></div>`);
      load();
      if (S && me() && S.nr !== me()) reset();
      if (S && S.total !== ALL().length) reset();
      if (S && S.done) finish();
      else if (S && (S.solved > 0 || S.stage > 0 || S.mistakes > 0)) resume();
      else { reset(); intro(); }
    },
    get S() { return S; }, render, esc
  };
})();

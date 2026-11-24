/* Sammelkarten (Cromos): jede Karte gehört fest zu einem Spiel – kein Zufall.
   Erhalten: mindestens 1 Stern · Golden: 3 Sterne · 👑: ohne Fehler (Maestro/a) · 🔥: Modo difícil geschafft */
window.CROMOS = [
  { id: "numeros", f: "🤖", n: "BIT-7", c: "#3a2a6a", t: "Robot de la nave Cervantes I. Calcula muy rápido – pero solo en español.", de: "Roboter aus Misión Marte" },
  { id: "pronombres", f: "🧟", n: "El zombi goloso", c: "#2a4a1a", t: "Vive en la Gran Vía. No es malo: ¡solo tiene hambre de helado! 🍦", de: "aus ¡Zombis en Madrid!" },
  { id: "posesivos", f: "👧🏽", n: "Lucía López", c: "#6a1a2a", t: "Tiene 15 años y un canal de YouTube con 100.000 suscriptores.", de: "aus Los López" },
  { id: "tener-no", f: "👮🏽‍♀️", n: "Inspectora Gómez", c: "#4a3a1a", t: "Resuelve todos los casos de Madrid. Su arma secreta: buenas preguntas.", de: "aus El robo del móvil" },
  { id: "conectores", f: "👩🏽", n: "Inés", c: "#1a4a5a", t: "Es de Málaga y tiene 16 años. Su perro Rocky siempre está con ella. 🐶", de: "aus SOS desde una isla" },
  { id: "hay-estar", f: "☕", n: "El Café Azul", c: "#1a3a6a", t: "Un café en la Plaza de Olavide. Aquí te esperan Lucía y sus amigos.", de: "aus Misión Barrio" },
  { id: "mucho-poco", f: "👩🏻‍💼", n: "La alcaldesa Rosa", c: "#2a5a3a", t: "Quiere un barrio con muchos parques y poco tráfico.", de: "aus SimBarrio" },
  { id: "adjetivos", f: "👷🏽‍♀️", n: "Carla, la arquitecta", c: "#6a4a1a", t: "Sus reformas son… un poco locas. ¡Pero muy bonitas! 🏗️", de: "aus ¡Reformas Locas!" },
  { id: "verbos-cafe", f: "☕🤖", n: "RoBarista 3000", c: "#5a2a4a", t: "Prepara el mejor café de Madrid – y conjuga todos los verbos.", de: "aus Café Robot" },
  { id: "ser-estar", f: "👩🏻‍✈️", n: "Carmen, la revisora", c: "#1a2a5a", t: "Trabaja en el tren nocturno a Granada. Siempre está despierta. 🌙", de: "aus El tren nocturno" },
  { id: "jefe-u1", f: "🐉", n: "El Dragón Mudo", c: "#7a1a0a", t: "Jefe final de la Unidad 1. Ahora habla… ¡y dice „hola“!", de: "Endgegner Unidad 1" },
  { id: "jefe-u2", f: "🐙", n: "El Pulpo Gramático", c: "#5a0a3a", t: "Jefe final de la Unidad 2. Ocho brazos, ocho reglas.", de: "Endgegner Unidad 2" },
  { id: "jefe-u3", f: "👹", n: "El Gigante del Barrio", c: "#4a0a0a", t: "Jefe final de la Unidad 3. Ahora construye casas bonitas.", de: "Endgegner Unidad 3" },
  { id: "tele-1", f: "👧🏽", n: "Alba", c: "#6a0a2a", t: "Es de Guadalajara (México) y vive ahora en Madrid. ¿Quién es „C.“?", de: "aus der Telenovela" },
  { id: "conjugador", f: "🕹️", n: "El Conjugador", c: "#3a0a6a", t: "Una máquina arcade de los años 80. ¡Conjuga o pierde! ❤️❤️❤️", de: "Arcade" },
  { id: "adv-24", f: "🦌", n: "El Ciervo de Navidad", c: "#0f3a2a", t: "Aparece solo en Navidad. ¡Feliz Navidad y próspero Año Nuevo!", de: "Adventskalender, Türchen 24" }
];
window.cromoState = function (s, id) {
  const st = (s && s.stars) || {}, pf = (s && s.perfect) || [];
  return { got: (st[id] || 0) > 0, gold: (st[id] || 0) >= 3, crown: pf.indexOf(id) >= 0, hard: (st[id + "-dificil"] || 0) > 0 };
};
window.cromoCard = function (c, s, big) {
  const k = cromoState(s, c.id), w = big ? 170 : 120;
  if (!k.got) return `<div class="cromo off" style="width:${w}px"><div class="cf">❓</div><div class="cn">???</div><div class="ct">${c.de}</div></div>`;
  return `<div class="cromo ${k.gold ? "gold" : ""}" style="width:${w}px;--c:${c.c}"><div class="cb">${k.crown ? "👑" : ""}${k.hard ? "🔥" : ""}</div><div class="cf">${c.f}</div><div class="cn">${c.n}</div><div class="ct">${c.t}</div></div>`;
};
window.CROMO_CSS = `.cromo{position:relative;flex:none;border-radius:12px;padding:10px 8px 8px;text-align:center;background:linear-gradient(160deg,var(--c,#333),#111);border:3px solid #ffffff33;box-shadow:0 6px 16px #0008;color:#fff}
  .cromo.gold{border-color:#ffd23a;background:linear-gradient(160deg,#ffd23a,var(--c,#333) 45%,#111);box-shadow:0 0 18px #ffd23a88,0 6px 16px #0008}
  .cromo.gold:before{content:"";position:absolute;inset:0;border-radius:9px;background:linear-gradient(120deg,transparent 30%,#ffffff44 45%,transparent 60%);background-size:250% 100%;animation:shine 2.6s linear infinite}
  @keyframes shine{from{background-position:150% 0}to{background-position:-100% 0}}
  .cromo.off{background:#1a1a22;border-style:dashed;color:#888}
  .cromo .cf{font-size:44px;line-height:1.2}
  .cromo .cn{font-weight:800;font-size:14px;margin-top:2px}
  .cromo .ct{font-size:11.5px;line-height:1.3;opacity:.85;margin-top:4px}
  .cromo .cb{position:absolute;top:4px;right:6px;font-size:15px}`;

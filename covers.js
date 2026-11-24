/* Cover-Grafiken für Spiele auf der Startseite (id: SVG). Ohne Eintrag wird das Emoji aus GRAMMAR.icon gezeigt. */
window.COVERS = {
  "adviento": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="140" rx="10" fill="#0f3a2a"/>
    <g fill="#fff" opacity=".7"><circle cx="20" cy="16" r="1.6"/><circle cx="70" cy="10" r="1.2"/><circle cx="150" cy="18" r="1.6"/><circle cx="200" cy="40" r="1.2"/><circle cx="12" cy="70" r="1.2"/><circle cx="208" cy="100" r="1.6"/></g>
    ${[0,1,2,3,4,5].map(c=>[0,1,2].map(r=>{const n=[7,14,2,21,10,18,5,24,12,1,16,9,20,3,13,23,6,11][r*6+c];const col=["#c8312b","#1f7a3a","#2a5aa0","#b8862a","#8a2a6a","#2a8a8a"][(r*6+c)%6];return `<rect x="${22+c*30}" y="${26+r*34}" width="26" height="30" rx="4" fill="${col}" stroke="#ffffff33"/><text x="${35+c*30}" y="${46+r*34}" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">${n}</text>`}).join("")).join("")}
    <rect x="142" y="94" width="26" height="30" rx="4" fill="#f3ead0"/><text x="155" y="115" font-size="15" text-anchor="middle">🍇</text>
    <path d="M110 0 L110 10" stroke="#ffd23a" stroke-width="2"/><path d="M110 6 l2.5 5.5 6 .5 -4.6 3.8 1.5 5.8 -5.4 -3.2 -5.4 3.2 1.5 -5.8 -4.6 -3.8 6 -.5Z" fill="#ffd23a"/>
  </svg>`,
  "conjugador": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cjg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a0838"/><stop offset="1" stop-color="#3a0e6a"/></linearGradient></defs>
    <rect width="220" height="140" rx="10" fill="url(#cjg)"/>
    <g stroke="#ff3bd4" stroke-width="1" opacity=".6"><path d="M0 110 L220 110 M0 122 L220 122 M0 134 L220 134 M110 100 L110 140 M70 100 L40 140 M150 100 L180 140 M30 100 L-20 140 M190 100 L240 140"/></g>
    <text x="110" y="46" font-family="Arial Black,Impact,sans-serif" font-size="22" fill="#fff" text-anchor="middle" stroke="#ff3bd4" stroke-width=".8">HABL_</text>
    <g font-family="Menlo,monospace" font-size="14" font-weight="bold" text-anchor="middle"><text x="50" y="80" fill="#3affd4">-o</text><text x="90" y="72" fill="#ffd23a">-as</text><text x="130" y="80" fill="#3ab0ff">-amos</text><text x="174" y="70" fill="#ff6a8a">-áis</text></g>
    <rect x="30" y="90" width="160" height="7" rx="3.5" fill="#1a0838" stroke="#8a3bff"/><rect x="31" y="91" width="96" height="5" rx="2.5" fill="#ff3bd4"/>
    <text x="22" y="22" font-size="13">❤️❤️❤️</text><text x="198" y="22" font-family="Menlo,monospace" font-size="13" fill="#3affd4" text-anchor="end">×5</text>
  </svg>`,
  "telenovela": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="140" rx="10" fill="#3a0a1a"/>
    <rect x="34" y="14" width="152" height="100" rx="12" fill="#1a0a10" stroke="#8a2a4a" stroke-width="4"/>
    <rect x="42" y="22" width="136" height="84" rx="6" fill="#ff8aa0"/>
    <circle cx="86" cy="58" r="13" fill="#c9905a"/><path d="M72 56 C72 40 100 40 100 56 L100 76 L72 76Z" fill="#3a1a0a"/><circle cx="86" cy="58" r="10" fill="#c9905a"/><rect x="74" y="72" width="24" height="34" rx="6" fill="#ffd23a"/>
    <circle cx="134" cy="58" r="11" fill="#f2c9a0"/><path d="M123 54 C123 44 145 44 145 54Z" fill="#6a3a1a"/><rect x="122" y="70" width="24" height="36" rx="6" fill="#3a78d8"/>
    <path d="M110 44 C104 36 96 42 110 54 C124 42 116 36 110 44Z" fill="#ff2a5a"/>
    <path d="M90 114 L80 130 M130 114 L140 130" stroke="#8a2a4a" stroke-width="4"/>
    <text x="110" y="134" font-family="Georgia,serif" font-style="italic" font-size="12" fill="#ffb3c2" text-anchor="middle">continuará…</text>
    <rect x="150" y="84" width="24" height="16" rx="2" fill="#fff8e6" transform="rotate(-8 162 92)"/>
  </svg>`,
  "tener-no": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="10" width="184" height="120" rx="8" fill="#7a5634"/>
    <g fill="#fffbe9"><rect x="30" y="20" width="36" height="44" rx="2" transform="rotate(-4 48 42)"/><rect x="92" y="18" width="36" height="44" rx="2" transform="rotate(3 110 40)"/><rect x="154" y="20" width="36" height="44" rx="2" transform="rotate(-2 172 42)"/><rect x="40" y="76" width="36" height="44" rx="2" transform="rotate(2 58 98)"/><rect x="144" y="76" width="36" height="44" rx="2" transform="rotate(-3 162 98)"/></g>
    <g fill="#c99a6a"><circle cx="48" cy="38" r="9"/><circle cx="110" cy="36" r="9"/><circle cx="172" cy="38" r="9"/><circle cx="58" cy="94" r="9"/><circle cx="162" cy="94" r="9"/></g>
    <g stroke="#d22" stroke-width="1.5" fill="none"><path d="M48 42 L110 40 L172 42 M110 40 L110 84 M58 98 L110 84 L162 98"/></g>
    <g fill="#d33"><circle cx="48" cy="20" r="3"/><circle cx="110" cy="18" r="3"/><circle cx="172" cy="20" r="3"/><circle cx="58" cy="76" r="3"/><circle cx="162" cy="76" r="3"/></g>
    <rect x="96" y="72" width="28" height="46" rx="5" fill="#222"/><rect x="99" y="77" width="22" height="34" rx="2" fill="#3a8ad8"/><text x="110" y="100" font-family="system-ui" font-size="18" font-weight="900" fill="#fff" text-anchor="middle">?</text>
    <g transform="translate(130 98) rotate(-30)"><circle r="14" fill="none" stroke="#e8c34a" stroke-width="5"/><circle r="11" fill="#fff" opacity=".25"/><rect x="12" y="-3" width="26" height="7" rx="3" fill="#5a3a1a"/></g>
  </svg>`,
  "conectores": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="140" rx="10" fill="#8fd8ff"/><rect y="78" width="220" height="62" fill="#1f95b8"/>
    <circle cx="36" cy="30" r="14" fill="#ffe25a"/>
    <ellipse cx="110" cy="96" rx="70" ry="20" fill="#f3d58a"/>
    <path d="M90 92 C92 70 96 56 98 42" stroke="#7a5230" stroke-width="5" fill="none"/>
    <g fill="#2aa04a"><path d="M98 42 C80 36 70 44 64 52 C76 44 88 44 98 42Z"/><path d="M98 42 C112 32 126 36 132 46 C120 38 108 40 98 42Z"/><path d="M98 42 C92 26 80 22 72 26 C84 28 92 34 98 42Z"/><path d="M98 42 C108 26 120 24 128 28 C116 30 106 34 98 42Z"/></g>
    <text x="128" y="104" font-family="system-ui" font-size="15" font-weight="900" fill="#9a7a3a" letter-spacing="3">SOS</text>
    <g transform="translate(160 26)"><ellipse cx="0" cy="8" rx="20" ry="9" fill="#e0492a"/><rect x="-26" y="-2" width="52" height="3" fill="#333"/><rect x="14" y="6" width="22" height="3" fill="#e0492a"/><circle cx="-8" cy="7" r="5" fill="#bde6ff"/><path d="M-10 17 L-14 22 M10 17 L14 22 M-18 22 L18 22" stroke="#333" stroke-width="2"/></g>
    <g transform="translate(26 60)"><rect width="38" height="22" rx="8" fill="#dcf8c6"/><path d="M8 22 L4 30 L16 22Z" fill="#dcf8c6"/><text x="19" y="15" font-family="system-ui" font-size="9" font-weight="800" fill="#14321a" text-anchor="middle">pero</text></g>
  </svg>`,
  "pronombres": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="140" rx="10" fill="#000"/><rect x="10" y="10" width="200" height="102" rx="4" fill="#5a2a3a"/><rect x="10" y="80" width="200" height="32" fill="#2a1a14"/>
    <circle cx="180" cy="30" r="12" fill="#f3eac0"/>
    <g fill="#0c0608"><rect x="14" y="56" width="18" height="24"/><rect x="36" y="44" width="12" height="36"/><rect x="52" y="60" width="22" height="20"/><rect x="120" y="50" width="16" height="30"/><rect x="140" y="62" width="24" height="18"/><rect x="170" y="54" width="14" height="26"/></g>
    <g transform="translate(150 70)"><circle cx="0" cy="0" r="11" fill="#8ab04a"/><rect x="-9" y="10" width="18" height="24" rx="4" fill="#4a5a7a"/><path d="M-9 14 L-26 12 M9 14 L-6 10" stroke="#8ab04a" stroke-width="5" stroke-linecap="round"/><circle cx="-4" cy="-2" r="2.5" fill="#fff"/><circle cx="4" cy="-1" r="2" fill="#fff"/><path d="M-5 5 L5 6" stroke="#300" stroke-width="2"/></g>
    <g transform="translate(70 74)"><circle cx="0" cy="0" r="9" fill="#f2c9a0"/><path d="M-9 -2 C-8 -12 8 -12 9 -2" fill="#6a3a1a"/><rect x="-8" y="8" width="16" height="22" rx="4" fill="#d24a4a"/></g>
    <rect x="70" y="100" width="80" height="12" rx="2" fill="#000" opacity=".7"/><text x="110" y="109" font-family="system-ui" font-size="8.5" font-weight="700" fill="#ffe25a" text-anchor="middle">¡Somos rápidos!</text>
    <g transform="translate(14 116)"><rect width="40" height="18" fill="#fff"/><path d="M0 0 L40 0 L40 -7 L0 -4Z" fill="#222"/><g fill="#fff"><path d="M6 -4.5 L12 -5 L10 0Z"/><path d="M18 -5.5 L24 -6 L22 0Z"/><path d="M30 -6.5 L36 -7 L34 0Z"/></g><text x="20" y="13" font-family="monospace" font-size="9" font-weight="800" fill="#111" text-anchor="middle">ESP</text></g>
    <g transform="translate(176 118)"><rect x="-6" y="-8" width="12" height="18" rx="6" fill="#ccc"/><path d="M-10 2 C-10 12 10 12 10 2" stroke="#ccc" stroke-width="2" fill="none"/></g>
  </svg>`,
  "posesivos": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect x="58" y="8" width="104" height="128" rx="14" fill="#111"/><rect x="64" y="20" width="92" height="104" rx="4" fill="#fff4e0"/>
    <rect x="64" y="20" width="92" height="14" fill="#181818"/><rect x="69" y="23" width="14" height="9" rx="2" fill="#ff0000"/><path d="M74 25 L79 27.5 L74 30Z" fill="#fff"/>
    <g stroke="#c79a6a" stroke-width="1.5" fill="none"><path d="M110 56 V70 H86 V78 M110 70 H134 V78 M110 70 V78"/></g>
    <circle cx="100" cy="50" r="9" fill="#fff" stroke="#ff3b4e" stroke-width="2"/><circle cx="120" cy="50" r="9" fill="#fff" stroke="#ff3b4e" stroke-width="2"/>
    <circle cx="86" cy="88" r="9" fill="#fff" stroke="#ff3b4e" stroke-width="2"/><circle cx="110" cy="88" r="9" fill="#fff" stroke="#ff3b4e" stroke-width="2"/><circle cx="134" cy="88" r="9" fill="#fff" stroke="#ff3b4e" stroke-width="2"/>
    <g fill="#8a5a3a"><circle cx="100" cy="50" r="5"/><circle cx="120" cy="50" r="5"/><circle cx="86" cy="88" r="5"/><circle cx="110" cy="88" r="5"/><circle cx="134" cy="88" r="5"/></g>
    <rect x="72" y="104" width="76" height="12" rx="3" fill="#000" opacity=".8"/><text x="110" y="113" font-family="system-ui" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">mi · tu · su</text>
    <g transform="translate(174 40)"><path d="M0 8 C0 -2 14 -2 14 8 C14 -2 28 -2 28 8 C28 18 14 26 14 30 C14 26 0 18 0 8Z" fill="#ff3b4e"/></g>
    <g transform="translate(20 70)"><rect width="30" height="20" rx="5" fill="#fff"/><path d="M6 20 L4 27 L12 20Z" fill="#fff"/><circle cx="9" cy="10" r="2" fill="#555"/><circle cx="15" cy="10" r="2" fill="#555"/><circle cx="21" cy="10" r="2" fill="#555"/></g>
  </svg>`,
  "numeros": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="140" rx="10" fill="#0b0920"/>
    <g fill="#fff"><circle cx="20" cy="20" r="1.4"/><circle cx="70" cy="34" r="1"/><circle cx="120" cy="14" r="1.4"/><circle cx="196" cy="110" r="1"/><circle cx="40" cy="120" r="1.2"/><circle cx="150" cy="128" r="1"/></g>
    <circle cx="170" cy="40" r="28" fill="#c4421c"/><circle cx="160" cy="32" r="6" fill="#a3361a"/><circle cx="180" cy="50" r="4" fill="#a3361a"/>
    <circle cx="10" cy="140" r="40" fill="#1e5fa8"/><path d="M-4 112 q14 -6 22 6 q-8 8 -22 2z" fill="#3fae5a"/>
    <path d="M40 118 Q90 70 150 52" stroke="#ffffff55" stroke-width="2" fill="none" stroke-dasharray="5 5"/>
    <g transform="translate(96 78) rotate(50)"><path d="M0 -26 C10 -14 10 10 8 18 L-8 18 C-10 10 -10 -14 0 -26Z" fill="#e8ecf5"/><circle cx="0" cy="-6" r="5" fill="#5ab0ff" stroke="#2a3a5a" stroke-width="1.5"/><path d="M-8 8 L-16 22 L-8 18Z M8 8 L16 22 L8 18Z" fill="#ff6b3d"/><path d="M-5 18 L0 32 L5 18Z" fill="#ffcf3a"/></g>
    <text x="16" y="34" font-family="Menlo,monospace" font-size="18" font-weight="bold" fill="#9ff0c9">T−10</text>
  </svg>`,
  "ir-camino": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="12" width="176" height="116" rx="10" fill="#efe4cc"/>
    <rect x="101" y="12" width="18" height="116" fill="#8a8f98"/><rect x="22" y="40" width="176" height="14" fill="#8a8f98"/><rect x="22" y="84" width="176" height="14" fill="#8a8f98"/>
    <path d="M110 124 L110 92 L60 92" stroke="#ffcf3a" stroke-width="4" fill="none" stroke-dasharray="7 6" stroke-linecap="round"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.2s" repeatCount="indefinite"/></path>
    <g transform="translate(46 76)"><path d="M0 18 C-12 4 -12 -8 0 -10 C12 -8 12 4 0 18 Z" fill="#e23a3a" stroke="#7a1010" stroke-width="2"/><circle cy="-2" r="4.5" fill="#fff"/><animateTransform attributeName="transform" type="translate" values="46 76;46 70;46 76" dur="1s" repeatCount="indefinite"/></g>
    <circle cx="164" cy="28" r="10" fill="#fff" stroke="#7a3a30" stroke-width="2"/><path d="M158 30 L170 30 L168 36 L160 36 Z" fill="#5a2a14"/><path d="M162 26 q2 -6 0 -9 M166 26 q2 -6 0 -9" stroke="#999" stroke-width="1.5" fill="none"/>
    <g transform="translate(176 106)"><circle r="14" fill="#fff" stroke="#7a3a30" stroke-width="2"/><path d="M0 -10 L4 0 L0 10 L-4 0 Z" fill="#d8262e"/><path d="M-10 0 L0 -3 L10 0 L0 3 Z" fill="#555"/></g></svg>`,
  "adjetivos": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="14" width="184" height="112" rx="10" fill="#1d1d22"/><rect x="24" y="20" width="172" height="90" rx="6" fill="#d9cbb0"/>
    <rect x="30" y="26" width="76" height="78" fill="#8a8480"/><rect x="112" y="26" width="78" height="78" fill="#fff3dc"><animate attributeName="fill" values="#8a8480;#fff3dc;#fff3dc" keyTimes="0;.35;1" dur="4s" repeatCount="indefinite"/></rect>
    <path d="M40 92 L96 92 L96 70 L40 70 Z" fill="#6a625c"/><path d="M48 70 L48 60 L88 60 L88 70" stroke="#5a524c" stroke-width="4" fill="none"/><path d="M60 40 l6 10 M80 38 l-4 12" stroke="#5a524c" stroke-width="2"/>
    <rect x="122" y="70" width="58" height="22" rx="5" fill="#2aa08a"/><rect x="122" y="60" width="58" height="12" rx="5" fill="#3fc0a5"/><circle cx="168" cy="40" r="8" fill="#ffb02e"/><rect x="128" y="34" width="22" height="16" fill="#4fa3e0" stroke="#fff" stroke-width="2"/>
    <rect x="104" y="20" width="12" height="90" fill="#1d1d22"/>
    <circle cx="34" cy="118" r="4" fill="#ff3b3b"><animate attributeName="opacity" values="1;.2;1" dur="1s" repeatCount="indefinite"/></circle>
    <text x="44" y="122" font-family="Arial Black,Arial" font-size="9" fill="#fff">REC</text>
    <text x="196" y="122" font-family="Anton,Impact,Arial Black" font-size="11" fill="#ffb02e" text-anchor="end">-O -A -OS -AS</text></svg>`,
  "review": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><g><path d="M60 70 L160 70 L150 128 L70 128Z" fill="#8a5a2a"/><path d="M60 70 L160 70 L150 82 L70 82Z" fill="#6b4226"/>
    <g><path d="M78 74 q-6 -40 32 -46 q38 6 32 46z" fill="#5fd068"/><circle cx="96" cy="52" r="9" fill="#fff"/><circle cx="124" cy="52" r="9" fill="#fff"/><circle cx="98" cy="54" r="4" fill="#222"/><circle cx="122" cy="54" r="4" fill="#222"/><path d="M98 66 q12 8 24 0" stroke="#1e4a24" stroke-width="3" fill="none"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -4;0 4" dur="1.6s" repeatCount="indefinite"/></g>
    <path d="M56 66 L164 66 L160 78 L60 78Z" fill="#a8743a"/><text x="28" y="40" font-size="26" font-weight="800" fill="#ffd23a" font-family="Arial">?</text><text x="176" y="52" font-size="22" font-weight="800" fill="#ff6a6a" font-family="Arial">✘</text><text x="40" y="110" font-size="18" font-weight="800" fill="#fff" font-family="Arial" opacity=".8">abc</text></g></svg>`,
  "hay-estar": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 22 L80 12 L140 24 L190 14 L190 118 L140 128 L80 116 L30 126 Z" fill="#f4e6c6" stroke="#8a6a3a" stroke-width="3" stroke-linejoin="round"/>
    <path d="M80 12 L80 116 M140 24 L140 128" stroke="#cdb48a" stroke-width="2"/>
    <path d="M30 70 C70 60 100 84 190 66" stroke="#5aa8d8" stroke-width="9" fill="none" opacity=".85"/>
    <rect x="44" y="30" width="20" height="16" rx="3" fill="#d98a3a"/><rect x="96" y="34" width="22" height="18" rx="3" fill="#7aa85a"/><rect x="150" y="34" width="18" height="18" rx="3" fill="#c0566a"/>
    <rect x="48" y="86" width="22" height="18" rx="3" fill="#7a8ac0"/><rect x="100" y="94" width="18" height="16" rx="3" fill="#d9b24a"/>
    <path d="M58 104 C80 120 120 80 150 96" stroke="#5a3a18" stroke-width="3" stroke-dasharray="6 6" fill="none"><animate attributeName="stroke-dashoffset" values="24;0" dur="1.2s" repeatCount="indefinite"/></path>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="1.1s" repeatCount="indefinite"/>
      <path d="M160 100 C146 84 146 66 160 62 C174 66 174 84 160 100 Z" fill="#e23a3a" stroke="#7a1010" stroke-width="2"/><circle cx="160" cy="76" r="6" fill="#fff"/></g>
    <g transform="translate(160 112)"><path d="M-8 0 L8 0 L6 10 L-6 10 Z" fill="#fff" stroke="#5a3a18" stroke-width="2"/><path d="M8 3 C13 3 13 8 7 8" stroke="#5a3a18" stroke-width="2" fill="none"/></g></svg>`,
  "mucho-poco": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cvSB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fe0ff"/><stop offset="1" stop-color="#e6f8ff"/></linearGradient></defs>
    <rect x="20" y="10" width="180" height="112" rx="12" fill="url(#cvSB)"/>
    <circle cx="48" cy="34" r="12" fill="#ffd23a"/>
    <path d="M150 112 L150 26 L196 26 M150 30 L190 30" stroke="#f2a23a" stroke-width="4" fill="none"/><line x1="186" y1="30" x2="186" y2="54" stroke="#5a5a6a" stroke-width="2"><animate attributeName="y2" values="48;62;48" dur="2s" repeatCount="indefinite"/></line>
    <rect x="34" y="70" width="26" height="42" fill="#4a7ac0"/><rect x="64" y="52" width="24" height="60" fill="#3fd0a0"><animate attributeName="y" values="112;52;52" keyTimes="0;.4;1" dur="4s" repeatCount="indefinite"/><animate attributeName="height" values="0;60;60" keyTimes="0;.4;1" dur="4s" repeatCount="indefinite"/></rect>
    <rect x="92" y="78" width="22" height="34" fill="#e07a5a"/><rect x="118" y="62" width="26" height="50" fill="#8a6ad0"/>
    <g fill="#fff" opacity=".85"><rect x="40" y="78" width="6" height="6"/><rect x="50" y="78" width="6" height="6"/><rect x="40" y="92" width="6" height="6"/><rect x="50" y="92" width="6" height="6"/><rect x="124" y="70" width="6" height="6"/><rect x="134" y="70" width="6" height="6"/><rect x="124" y="84" width="6" height="6"/><rect x="134" y="84" width="6" height="6"/><rect x="98" y="86" width="10" height="8"/></g>
    <circle cx="170" cy="100" r="10" fill="#3a9a4a"/><rect x="168" y="104" width="4" height="10" fill="#6a4a2a"/>
    <rect x="20" y="112" width="180" height="10" rx="2" fill="#6cb05a"/></svg>`,
  "ser-estar": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cvTN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0b24"/><stop offset="1" stop-color="#2c1f6a"/></linearGradient></defs>
    <rect x="14" y="8" width="192" height="122" rx="14" fill="url(#cvTN)"/>
    <g fill="#fff"><circle cx="40" cy="26" r="1.5"/><circle cx="80" cy="40" r="1"/><circle cx="120" cy="20" r="1.5"/><circle cx="60" cy="56" r="1"/><circle cx="100" cy="50" r="1"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle></g>
    <path d="M182 22 A16 16 0 1 0 186 50 A13 13 0 1 1 182 22 Z" fill="#ffe08a"/>
    <path d="M14 100 C60 80 120 84 206 96 L206 130 L14 130 Z" fill="#17123a"/>
    <rect x="14" y="114" width="192" height="4" fill="#6b5a3a"/>
    <g><animateTransform attributeName="transform" type="translate" values="-4 0;4 0;-4 0" dur="3s" repeatCount="indefinite"/>
      <rect x="22" y="80" width="40" height="32" rx="12" fill="#4a4a5a"/><rect x="66" y="78" width="56" height="34" rx="5" fill="#8a2a2a" stroke="#c8603a" stroke-width="2"/><rect x="126" y="78" width="56" height="34" rx="5" fill="#8a2a2a" stroke="#c8603a" stroke-width="2"/>
      <g fill="#ffd96a"><rect x="74" y="86" width="12" height="10" rx="2"/><rect x="92" y="86" width="12" height="10" rx="2"/><rect x="134" y="86" width="12" height="10" rx="2"/><rect x="152" y="86" width="12" height="10" rx="2"><animate attributeName="opacity" values="1;.3;1" dur="2.2s" repeatCount="indefinite"/></rect></g>
      <circle cx="36" cy="114" r="5" fill="#222"/><circle cx="84" cy="114" r="5" fill="#222"/><circle cx="108" cy="114" r="5" fill="#222"/><circle cx="144" cy="114" r="5" fill="#222"/><circle cx="168" cy="114" r="5" fill="#222"/></g>
    <g transform="translate(110 30)"><path d="M-10 4 L-10 -4 A10 10 0 0 1 10 -4 L10 4" stroke="#f2c230" stroke-width="4" fill="none"/><rect x="-15" y="2" width="30" height="24" rx="4" fill="#f2c230"/><circle cx="0" cy="12" r="3.5" fill="#5a3a00"/><rect x="-1.5" y="12" width="3" height="8" fill="#5a3a00"/></g></svg>`,
  "verbos-cafe": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <line x1="80" y1="22" x2="80" y2="8" stroke="#c9c9d1" stroke-width="3"/><circle cx="80" cy="8" r="5" fill="#ff7eb6"><animate attributeName="opacity" values="1;.2;1" dur="1s" repeatCount="indefinite"/></circle>
    <rect x="44" y="22" width="72" height="58" rx="14" fill="#c9c9d1" stroke="#8a8a96" stroke-width="3"/>
    <rect x="54" y="34" width="52" height="26" rx="8" fill="#2a1622"/>
    <circle cx="68" cy="47" r="6" fill="#6fe59a"><animate attributeName="r" values="6;1;6" keyTimes="0;.1;.2" dur="3s" repeatCount="indefinite"/></circle><circle cx="92" cy="47" r="6" fill="#6fe59a"><animate attributeName="r" values="6;1;6" keyTimes="0;.1;.2" dur="3s" repeatCount="indefinite"/></circle>
    <rect x="64" y="66" width="32" height="6" rx="3" fill="#8a8a96"/>
    <rect x="52" y="84" width="56" height="40" rx="10" fill="#a9a9b4"/><circle cx="80" cy="102" r="8" fill="#ff7eb6"/>
    <g transform="translate(150 70)"><path d="M-22 0 L22 0 L18 40 L-18 40 Z" fill="#fff" stroke="#5a2f47" stroke-width="3"/><path d="M22 10 C36 10 36 28 20 28" stroke="#5a2f47" stroke-width="4" fill="none"/><rect x="-18" y="4" width="36" height="8" fill="#7a4a2e"/>
      <path d="M-8 -6 C-14 -16 -2 -20 -8 -30" stroke="#fff" stroke-width="3" fill="none" opacity=".8"><animate attributeName="opacity" values=".8;.1;.8" dur="1.6s" repeatCount="indefinite"/></path><path d="M8 -6 C2 -16 14 -20 8 -30" stroke="#fff" stroke-width="3" fill="none" opacity=".4"><animate attributeName="opacity" values=".2;.9;.2" dur="1.6s" repeatCount="indefinite"/></path></g>
    <text x="150" y="134" font-family="Anton,Impact,Arial Black" font-size="13" fill="#fff" text-anchor="middle">-AMOS</text></svg>`,
  "daily": `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><g><path d="M110 10 C140 40 160 60 150 100 C145 120 125 132 110 132 C80 132 60 112 62 86 C64 66 80 56 86 40 C96 56 100 64 108 66 C112 50 108 30 110 10 Z" fill="#ff6a2a"/><path d="M110 50 C124 70 134 84 128 104 C124 118 116 124 110 124 C94 124 84 112 86 98 C88 86 96 80 100 70 C104 80 108 84 112 84 C114 74 112 62 110 50 Z" fill="#ffd23a"/><animateTransform attributeName="transform" type="scale" values="1 1;1.03 .97;1 1" dur=".8s" repeatCount="indefinite" additive="sum"/></g>
    <text x="110" y="112" font-family="Anton,Impact,Arial Black" font-size="26" fill="#7a1a00" text-anchor="middle">HOY</text></svg>`
};

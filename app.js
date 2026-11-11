// People First — UI redesign prototype (v4). Presentation only: no buttons submit, save, or send anything.
(function () {
  const D = window.APP_DATA;
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // Material-style icons (24px grid)
  const P = {
    home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    business: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z',
    personSearch: 'M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.35 2.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
    group: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    event: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    search: 'M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    calendar: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3zM6 12h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z',
    chat: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z',
    bell: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
    edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    chevR: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    chevL: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    arrowR: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
    arrowL: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    work: 'M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z',
    place: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z',
    filter: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
    copy: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    quiz: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z',
    cake: 'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9zm-1.54 7.5c-1.17 0-2.27-.45-3.09-1.27l-.37-.37-.37.37c-1.65 1.65-4.53 1.65-6.18 0l-.37-.37-.37.37A4.3 4.3 0 0 1 4 17.49V21c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.51c-.81.67-1.83 1.01-3.04 1.01z',
    restaurant: 'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z',
    link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    apps: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
    menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    image: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
    video: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z',
    play: 'M8 5v14l11-7z',
    download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    campaign: 'M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z',
    doc: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    article: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    celebration: 'M2 22l14-5-9-9-5 14zm10.35-5.82L6.65 18.3l2.06-5.68 3.64 3.56zM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06zM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.47.48 1.28 0 1.76z',
    mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    phone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    supervisor: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z',
    verified: 'M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z',
  };
  P.moon = 'M12.3 22h-.1C6.7 21.9 2.2 17.4 2.1 11.8 2 7.5 4.9 3.7 9 2.5c.4-.1.8 0 1 .3.3.3.3.8.1 1.1-.6 1.1-.9 2.3-.9 3.6 0 4.2 3.4 7.6 7.6 7.6 1.3 0 2.5-.3 3.6-.9.4-.2.8-.2 1.1.1.3.3.4.6.3 1-1.3 4.2-5.2 7.1-9.5 7.1z';
  P.sun = 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z';
  P.idcard = 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM9 12a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 9 12zm4.5 4.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM14 9h5v1.5h-5zm0 3h5v1.5h-5z';
  P.close = 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
  P.expand = 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z';
  P.school = 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z';
  P.flight ='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z';
  P.laptop = 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z';
  P.more = 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z';
  P.check = 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7.59 19.59 6.17z';
  P.info = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z';
  P.lock = 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z';
  P.bulb = 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z';
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${P[name]}"/></svg>`;

  // Light / dark theme on html[data-theme]; the choice is remembered in this browser (best-effort localStorage,
  // read early in index.html so there is no flash on load).
  const THEME_KEY = 'pf-theme';
  const isDark = () => document.documentElement.dataset.theme === 'dark';
  const themeLabel = () => (isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  function setTheme(theme) {
    const root = document.documentElement;
    // Instant switch: suspend every transition for the one frame the colours change, so nothing fades.
    root.classList.add('theme-switch');
    root.dataset.theme = theme;
    void root.offsetWidth; // apply the new colours while transitions are off
    clearTimeout(setTheme.t);
    setTheme.t = setTimeout(() => root.classList.remove('theme-switch'), 50);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage unavailable: theme still applies for this visit */ }
    const btn = $('[data-theme-toggle]');
    if (btn) { btn.setAttribute('aria-pressed', String(isDark())); btn.setAttribute('aria-label', themeLabel()); btn.title = themeLabel(); }
  }

  // Default person avatar (grey silhouette, as on the live site)
  const AVATAR = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#bdbdbd"/><circle cx="32" cy="25" r="11" fill="#fff"/><path d="M12 56c2-11 10-17 20-17s18 6 20 17" fill="#fff"/></svg>');
  const avatar = (alt, cls = 'avatar') => `<img class="${cls}" src="${AVATAR}" alt="${esc(alt)}" />`;
  const img = (src, alt = '', cls = '') => `<img ${cls ? `class="${cls}"` : ''} src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.classList.add('broken')" />`;

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const MON = MONTHS.map((m) => m.slice(0, 3));
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const ord = (n) => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th');
  const parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const today = new Date();

  // ---------- Design-system building blocks ----------
  // target: '#page/section' navigates (like the live site's View all links); 'modal:name' opens a pop-up; '' = plain button.
  const viewAll = (label = 'View all', target = '') => target.startsWith('#')
    ? `<a class="link" href="${target}">${label}${icon('chevR')}</a>`
    : `<button type="button" class="link"${target.startsWith('modal:') ? ` data-modal="${target.slice(6)}"` : ''}>${label}${icon('chevR')}</button>`;
  const panelHead = (title, right = '', sub = '', ico = '') =>
    `<div class="panel-head"><div class="ph-title">${ico ? `<span class="ph-ico">${icon(ico)}</span>` : ''}<div><h2>${title}</h2>${sub ? `<p class="sub">${sub}</p>` : ''}</div></div>${right}</div>`;
  const panel = (title, body, { right = '', sub = '', cls = '', flush = false, foot = '', ico = '', anchor = '' } = {}) =>
    `<section class="panel ${cls}"${anchor ? ` data-anchor="${anchor}"` : ''}>${panelHead(title, right, sub, ico)}<div class="panel-body${flush ? ' flush' : ''}">${body}</div>${foot ? `<div class="panel-foot">${foot}</div>` : ''}</section>`;
  // Decorative, text-free placeholder for panels that are empty on the live site
  const blank = (ico) => `<div class="empty blank"><span class="em-ico">${icon(ico)}</span></div>`;
  const sectionHead = (title, sub, right = '') => `<div class="section-head"><div><h2>${title}</h2><p class="sub">${sub}</p></div>${right}</div>`;
  const empty = (title, sub = '', ico = 'image') =>
    `<div class="empty"><span class="em-ico">${icon(ico)}</span><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</div>`;
  const searchBox = (ph, attr = '', cls = '') => `<label class="field-search ${cls}">${icon('search')}<span class="sr-only">${ph}</span><input type="search" placeholder="${ph}" ${attr} /></label>`;
  const filterBtn = (cls = '') => `<button type="button" class="filter-btn ${cls}" aria-label="Filter">${icon('filter')}</button>`;

  function calendar(id, events) {
    const marks = new Set(events.map((e) => e.date));
    return `<div class="cal-wrap" data-cal="${id}" data-y="${today.getFullYear()}" data-m="${today.getMonth()}" data-marks="${[...marks].join(',')}"></div>`;
  }
  function renderCal(el) {
    const y = +el.dataset.y, m = +el.dataset.m;
    const marks = new Set(el.dataset.marks ? el.dataset.marks.split(',') : []);
    const first = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();
    let cells = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => `<div class="dow">${d}</div>`).join('');
    for (let i = 0; i < first; i++) cells += '<div class="day blank"></div>';
    for (let d = 1; d <= days; d++) {
      const key = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = y === today.getFullYear() && m === today.getMonth() && d === today.getDate();
      cells += marks.has(key) ? `<button type="button" class="day has${isToday ? ' today' : ''}" data-ev-day="${key}" aria-label="Events on ${d} ${MONTHS[m]}"><span>${d}</span></button>` : `<div class="day${isToday ? ' today' : ''}"><span>${d}</span></div>`;
    }
    el.innerHTML = `<div class="panel-head"><div class="ph-title"><span class="ph-ico">${icon('calendar')}</span><h2 class="cal-month">${MONTHS[m]} ${y}</h2></div><div class="cal-nav">
      <button type="button" data-step="-1" aria-label="Previous month">${icon('chevL')}</button>
      <button type="button" data-step="1" aria-label="Next month">${icon('chevR')}</button></div></div>
      <div class="panel-body"><div class="cal" role="grid">${cells}</div></div>`;
  }
  const calPanel = (id, events, cls = '') => {
    const marks = [...new Set(events.map((e) => e.date))].join(',');
    return `<section class="panel cal-panel ${cls}" data-cal="${id}" data-y="${today.getFullYear()}" data-m="${today.getMonth()}" data-marks="${marks}"></section>`;
  };

  const dateList = (items) =>
    `<ul class="date-list">${items.map((e) => {
      const d = parse(e.date);
      return `<li class="date-item${d.getMonth() !== today.getMonth() ? ' later' : ''}"><div class="date-badge"><b>${String(d.getDate()).padStart(2, '0')}</b><small>${MON[d.getMonth()]}</small></div><span class="title">${esc(e.title)}</span></li>`;
    }).join('')}</ul>`;

  const jobsTable = (jobs) => `<table class="table"><tbody>${jobs.map((j) => `<tr class="job">
      <td><div class="t-main"><span class="t-ico">${icon('work')}</span><div><h3 class="t-title">${esc(j.title)}</h3><p class="t-code">Job Code: ${j.code}</p></div></div></td>
      <td><span class="t-meta">${icon('business')}${esc(j.dept)}</span></td>
      <td><span class="t-meta">${icon('place')}${esc(j.loc)}</span></td>
      <td class="t-act"><button type="button" class="btn btn-primary btn-xs">Apply</button></td>
    </tr>`).join('')}</tbody></table>`;
  // Card-grid presentation of the same job data (used on Home): badge + code chip, title, department, location, Apply.
  const jobsCards = (jobs) => `<div class="job-grid">${jobs.map((j) => `<article class="job jcard">
      <div class="jc-top"><span class="jc-ico">${icon('work')}</span><span class="jc-code">Job Code: ${j.code}</span></div>
      <h3 class="jc-title">${esc(j.title)}</h3>
      <ul class="jc-meta"><li>${icon('business')}<span>${esc(j.dept)}</span></li><li>${icon('place')}<span>${esc(j.loc)}</span></li></ul>
      <div class="jc-foot"><button type="button" class="btn btn-primary btn-sm">Apply${icon('arrowR')}</button></div>
    </article>`).join('')}</div>`;
  const jobsPanel = (jobs, foot, cls = '', variant = 'table', anchor = '') =>
    panel('Job Postings', variant === 'cards' ? jobsCards(jobs) : jobsTable(jobs), { right: searchBox('Search by title...', 'data-filter-jobs', 'sm'), flush: variant !== 'cards', foot, cls, ico: 'work', anchor });
  const pager = `<nav class="pager" aria-label="Job pages"><button type="button" disabled aria-label="Previous page">${icon('chevL')}</button><button type="button" aria-current="page">1</button><button type="button">2</button><button type="button" class="next" aria-label="Next page">${icon('chevR')}</button></nav>`;


  // ---------- Meal illustrations for the Home "Today's Menu" tabs ----------
  // Soft 3D "clay" style (no outlines): rounded shapes, gentle gradients, white highlights and blurred shadows.
  // Brand palette only — browns/beige, the live site's gold (#ffdf85, #fbf8e6), veg green (#7dbd72), measured greys.
  const artSvg = (inner, defs = '') => `<svg class="meal-art" viewBox="0 0 64 64" aria-hidden="true">${defs ? `<defs>${defs}</defs>` : ''}${inner}</svg>`;
  const SOFT = (id) => `<filter id="${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2"/></filter>`;
  const MEAL_ART = {
    // Breakfast: chai cup on a saucer, morning sun behind, soft steam
    Breakfast: artSvg(`
      <circle cx="46" cy="18" r="15" fill="#ffdf85" opacity=".28"/>
      <circle cx="46" cy="18" r="10.5" fill="url(#mb-sun)"/>
      <ellipse cx="42.5" cy="14" rx="3.6" ry="2.4" fill="#ffffff" opacity=".75"/>
      <ellipse cx="28" cy="58.5" rx="21" ry="3.2" fill="#6d492a" opacity=".24" filter="url(#mb-blur)"/>
      <ellipse cx="28" cy="54" rx="23" ry="5.6" fill="url(#mb-sau)"/>
      <ellipse cx="28" cy="53.2" rx="14" ry="3" fill="#eae1d6" opacity=".8"/>
      <path d="M42.5 35h2.8a5.8 5.8 0 0 1 0 11.6H41" fill="none" stroke="#eae1d6" stroke-width="5" stroke-linecap="round"/>
      <path d="M43 35.6h2.3a4.6 4.6 0 0 1 3.4 1.6" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 31h34v6c0 9-7.6 16-17 16S9 46 9 37z" fill="url(#mb-cup)"/>
      <path d="M9.3 40.2h33.4" stroke="url(#mb-band)" stroke-width="3.6"/>
      <path d="M14 35v3.2M14.6 44.6c1.2 2.2 2.8 3.8 4.8 4.8" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"/>
      <ellipse cx="26" cy="31" rx="17" ry="4.4" fill="#eae1d6"/>
      <ellipse cx="26" cy="31.2" rx="15" ry="3.3" fill="url(#mb-tea)"/>
      <ellipse cx="21.5" cy="30.4" rx="5.5" ry="1.1" fill="#fbf8e6" opacity=".7"/>
      <g fill="none" stroke="#b7b6b5" stroke-width="2.6" stroke-linecap="round" opacity=".75"><path d="M19.5 25.5c-2.2-2.6 2.2-4.8 0-7.6"/><path d="M27.5 24.5c-2.2-2.6 2.2-4.8 0-7.6"/></g>`,
      `${SOFT('mb-blur')}<radialGradient id="mb-sun" cx=".35" cy=".35" r=".75"><stop offset="0" stop-color="#fbf8e6"/><stop offset=".45" stop-color="#ffdf85"/><stop offset="1" stop-color="#ffdf85"/></radialGradient>
       <linearGradient id="mb-cup" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#ffffff"/><stop offset="1" stop-color="#eae1d6"/></linearGradient>
       <linearGradient id="mb-sau" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eae1d6"/></linearGradient>
       <linearGradient id="mb-band" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffdf85"/><stop offset="1" stop-color="#9c6d41"/></linearGradient>
       <radialGradient id="mb-tea" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="#9c6d41"/><stop offset="1" stop-color="#6d492a"/></radialGradient>`),
    // Lunch: steel thali from above — dal, sabzi and curry katoris, rice and a roti
    Lunch: artSvg(`
      <ellipse cx="32" cy="59" rx="23" ry="3.4" fill="#6d492a" opacity=".24" filter="url(#ml-blur)"/>
      <circle cx="32" cy="32" r="28" fill="url(#ml-plate)"/>
      <circle cx="32" cy="32" r="22.5" fill="#f5f5f5"/>
      <circle cx="32" cy="32" r="22.5" fill="none" stroke="#e3e3e3" stroke-width="1.6"/>
      <path d="M9.5 23.5A24 24 0 0 1 23 8.6" fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"/>
      <g fill="#6d492a" opacity=".2" filter="url(#ml-blur)"><circle cx="20.5" cy="25.5" r="7.6"/><circle cx="33" cy="17" r="7.2"/><circle cx="45.5" cy="25.5" r="7.6"/><ellipse cx="24.5" cy="46.5" rx="9" ry="4"/><circle cx="44" cy="45" r="8.6"/></g>
      <circle cx="19.5" cy="23.5" r="8.2" fill="url(#ml-bowl)"/><circle cx="19.5" cy="23.5" r="6.3" fill="url(#ml-dal)"/><ellipse cx="17.4" cy="21.4" rx="2.4" ry="1.4" fill="#ffffff" opacity=".7"/>
      <circle cx="32" cy="15" r="7.8" fill="url(#ml-bowl)"/><circle cx="32" cy="15" r="6" fill="#7dbd72"/><circle cx="30.2" cy="13.4" r="1.6" fill="#ffffff" opacity=".55"/><circle cx="34.2" cy="16.4" r="1.1" fill="#ffdf85"/><circle cx="33.4" cy="12.6" r=".9" fill="#fbf8e6"/>
      <circle cx="44.5" cy="23.5" r="8.2" fill="url(#ml-bowl)"/><circle cx="44.5" cy="23.5" r="6.3" fill="url(#ml-cur)"/><ellipse cx="42.4" cy="21.4" rx="2.4" ry="1.4" fill="#eae1d6" opacity=".55"/>
      <path d="M14.5 44c0-5.4 4.2-9 9.5-9s9.5 3.6 9.5 9c0 2.2-4.2 3.6-9.5 3.6S14.5 46.2 14.5 44z" fill="url(#ml-rice)"/>
      <ellipse cx="21" cy="39.5" rx="3" ry="1.6" fill="#ffffff"/>
      <g fill="#eae1d6"><ellipse cx="25.5" cy="41" rx="1.1" ry=".6"/><ellipse cx="28.5" cy="43.5" rx="1.1" ry=".6"/><ellipse cx="20.5" cy="44" rx="1.1" ry=".6"/></g>
      <path d="M22.5 36.4c1.5 1 3.2.3 3.8-1.1" fill="none" stroke="#7dbd72" stroke-width="2" stroke-linecap="round"/>
      <circle cx="43" cy="43" r="9" fill="url(#ml-roti)"/>
      <ellipse cx="40" cy="39.6" rx="3" ry="1.6" fill="#ffffff" opacity=".6"/>
      <g fill="#9c6d41" opacity=".55"><circle cx="41" cy="44" r="1.3"/><circle cx="46" cy="41.5" r="1.1"/><circle cx="45" cy="47" r="1.2"/></g>`,
      `${SOFT('ml-blur')}<radialGradient id="ml-plate" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f0f0f0"/><stop offset="1" stop-color="#e1dfdd"/></radialGradient>
       <radialGradient id="ml-bowl" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e1dfdd"/></radialGradient>
       <radialGradient id="ml-dal" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#fbf8e6"/><stop offset=".5" stop-color="#ffdf85"/><stop offset="1" stop-color="#ffdf85"/></radialGradient>
       <radialGradient id="ml-cur" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#9c6d41"/><stop offset="1" stop-color="#6d492a"/></radialGradient>
       <radialGradient id="ml-rice" cx=".4" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#ffffff"/><stop offset="1" stop-color="#eae1d6"/></radialGradient>
       <radialGradient id="ml-roti" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#fbf8e6"/><stop offset=".65" stop-color="#eae1d6"/><stop offset="1" stop-color="#9c6d41"/></radialGradient>`),
    // Snacks: two golden samosas on a plate with a bowl of green chutney, soft steam
    Snacks: artSvg(`
      <ellipse cx="32" cy="59.5" rx="25" ry="3.2" fill="#6d492a" opacity=".24" filter="url(#ms-blur)"/>
      <ellipse cx="32" cy="52.5" rx="28" ry="6.6" fill="url(#ms-plate)"/>
      <ellipse cx="32" cy="51.6" rx="20" ry="3.8" fill="#eae1d6" opacity=".55"/>
      <ellipse cx="34" cy="50" rx="16" ry="2.6" fill="#6d492a" opacity=".22" filter="url(#ms-blur)"/>
      <path d="M19 20c1.2 0 2.2.7 2.7 1.7l9.5 21.6c.8 1.9-.5 4-2.6 4.2-6.4.6-12.8.6-19.2 0-2.1-.2-3.4-2.3-2.6-4.2l9.5-21.6c.5-1 1.5-1.7 2.7-1.7z" fill="url(#ms-sam2)"/>
      <path d="M18 25.5 13.4 36" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>
      <path d="M34 13c1.4 0 2.6.8 3.2 2l12.6 29.5c1 2.4-.6 5-3.2 5.2-8.4.8-16.8.8-25.2 0-2.6-.2-4.2-2.8-3.2-5.2L30.8 15c.6-1.2 1.8-2 3.2-2z" fill="url(#ms-sam)"/>
      <path d="M23 46.2c1.6 1 3.2 1 4.8 0s3.2-1 4.8 0 3.2 1 4.8 0 3.2-1 4.8 0 3.2 1 4.8 0" fill="none" stroke="#9c6d41" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
      <path d="M31.8 19.5 25.4 34.5" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".75"/>
      <g fill="#9c6d41" opacity=".45"><circle cx="37" cy="29" r="1.1"/><circle cx="40.5" cy="37" r="1.1"/><circle cx="33" cy="39" r="1.1"/></g>
      <ellipse cx="54.5" cy="50.5" rx="7" ry="2.4" fill="#6d492a" opacity=".2" filter="url(#ms-blur)"/>
      <ellipse cx="54.5" cy="48.6" rx="7.6" ry="4.4" fill="url(#ms-bowl)"/>
      <ellipse cx="54.5" cy="47.6" rx="5.8" ry="2.7" fill="#7dbd72"/>
      <ellipse cx="52.8" cy="47" rx="2.2" ry=".8" fill="#ffffff" opacity=".65"/>
      <g fill="none" stroke="#b7b6b5" stroke-width="2.6" stroke-linecap="round" opacity=".75"><path d="M31 9.5c-2.2-2.4 2.2-4.2 0-6.8"/><path d="M38.5 9c-2.2-2.4 2.2-4.2 0-6.8"/></g>`,
      `${SOFT('ms-blur')}<linearGradient id="ms-sam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf8e6"/><stop offset=".25" stop-color="#ffdf85"/><stop offset=".7" stop-color="#ffdf85"/><stop offset="1" stop-color="#9c6d41"/></linearGradient>
       <linearGradient id="ms-sam2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffdf85"/><stop offset=".5" stop-color="#ffdf85"/><stop offset="1" stop-color="#9c6d41"/></linearGradient>
       <linearGradient id="ms-plate" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eae1d6"/></linearGradient>
       <radialGradient id="ms-bowl" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e1dfdd"/></radialGradient>`),
  };

  // ---------- Banner carousel: infinite loop, slides travel left → right, advances every 5 s ----------
  // Layout: full-width banner artwork on top, control bar below (progress segments, the banner's own button, arrows).
  const BANNER_MS = 5000;
  // Festive banner, recomposed: live text + button on the left, curved brand panel with the Chairman's photo on the right.
  // The photo is the same one, shown by cropping the original artwork to its photo region (no new image).
  const festiveSlide = () => {
    const p = D.festive.photo;
    const fw = p.x1 - p.x0, fh = p.y1 - p.y0;
    const crop = `background-image:url('${D.festive.img}');aspect-ratio:${((fw * p.aspect) / fh).toFixed(4)};` +
      `background-size:auto ${(100 / fh).toFixed(2)}%;background-position:${((p.x0 / (1 - fw)) * 100).toFixed(2)}% ${((p.y0 / (1 - fh)) * 100).toFixed(2)}%`;
    return `<div class="slide festive fv">
      <div class="fv-copy"><h3>${esc(D.festive.lines[0])}</h3><p>${esc(D.festive.lines[1])}</p>
        <button type="button" class="btn btn-primary fv-cta">${esc(D.festive.cta)}${icon('arrowR')}</button></div>
      <span class="fv-arc" aria-hidden="true"></span><span class="fv-panel" aria-hidden="true"></span>
      <div class="fv-photo" role="img" aria-label="${esc(D.festive.alt)}" style="${crop}"></div>
    </div>`;
  };
  // Other banners use the festive layout too: title + own button on the left; curved brand panel (with the banner's
  // original background as a brown-toned texture) and the banner's event image in a framed tile on the right.
  const composedSlide = (b) => `<div class="slide fv fv-event">
      <div class="fv-copy"><h3>${esc(b.title)}</h3>
        <button type="button" class="btn btn-primary fv-cta">${esc(b.cta)}${icon('arrowR')}</button></div>
      <span class="fv-arc" aria-hidden="true"></span><span class="fv-panel" aria-hidden="true" style="--panel-img:url('${b.bg}')"></span>
      <div class="fv-photo fv-photo-img${b.fit === 'cover' ? ' cover' : ''}">${img(b.img, '', '')}</div>
    </div>`;
  // Track order, left → right: [clone of 1st, last, …, 2nd, 1st]. Shifting the track one slide to the right
  // brings the next banner in from the left; reaching the clone snaps back to the real 1st without animation.
  function bannerCarousel() {
    const s = [festiveSlide(), ...D.banners.map(composedSlide)];
    const ctas = [D.festive.cta, ...D.banners.map((b) => b.cta)];
    const ownCta = [true, ...D.banners.map(() => true)]; // every slide now carries its own button
    const cells = [s[0], ...s.slice(1).reverse(), s[0]];
    return `<section class="carousel" aria-roledescription="carousel" aria-label="Banners" data-count="${s.length}" data-ctas="${esc(JSON.stringify(ctas))}" data-own-cta="${esc(JSON.stringify(ownCta))}">
      <div class="viewport"><div class="track">${cells.map((html, i) => `<div class="cell"${i === 0 ? ' aria-hidden="true" inert' : ''}>${html}</div>`).join('')}</div></div>
      <div class="c-bar">
        <div class="c-progress">${s.map((_, i) => `<button type="button" class="c-seg" data-go="${i}" aria-label="Banner ${i + 1}"><span></span></button>`).join('')}</div>
        <div class="c-actions">
          <button type="button" class="btn btn-primary btn-sm c-cta" data-cta>${ctas[0]}${icon('arrowR')}</button>
          <button type="button" class="c-nav" data-dir="-1" aria-label="Previous banner">${icon('chevL')}</button>
          <button type="button" class="c-nav" data-dir="1" aria-label="Next banner">${icon('chevR')}</button>
        </div>
      </div>
    </section>`;
  }

  let carouselTimer = null;
  function initCarousel() {
    clearInterval(carouselTimer);
    const root = $('.carousel');
    if (!root) return;
    const track = $('.track', root);
    const n = +root.dataset.count;
    const ctas = JSON.parse(root.dataset.ctas);
    const ownCta = JSON.parse(root.dataset.ownCta || '[]');
    const segs = [...root.querySelectorAll('.c-seg')];
    const cta = $('[data-cta]', root);
    let k = 0; // logical banner index; k === n means "showing the clone of banner 0"
    const place = (animate) => {
      if (!animate) track.style.transition = 'none';
      track.style.transform = `translateX(${-(n - k) * 100}%)`;
      if (!animate) { void track.offsetWidth; track.style.transition = ''; }
      const i = k % n;
      segs.forEach((s, j) => {
        s.classList.remove('active');
        s.classList.toggle('done', j < i);
        s.setAttribute('aria-current', String(j === i));
      });
      void segs[i].offsetWidth; // restart the 5 s fill animation
      segs[i].classList.add('active');
      cta.firstChild.textContent = ctas[i];
      cta.hidden = ownCta[i]; // avoid a duplicate button when the slide shows its own
    };
    const snapIfClone = () => { if (k === n) { k = 0; place(false); } };
    const settle = () => { if (getComputedStyle(track).transitionDuration === '0s') snapIfClone(); }; // reduced motion: no transitionend
    const go = (next) => { snapIfClone(); k = next; place(true); settle(); };
    const back = () => { if (k === 0) { k = n; place(false); } k -= 1; place(true); };
    const start = () => { clearInterval(carouselTimer); carouselTimer = setInterval(() => go(k + 1), BANNER_MS); };
    track.addEventListener('transitionend', (e) => { if (e.target === track) snapIfClone(); });
    root.addEventListener('click', (e) => {
      const seg = e.target.closest('[data-go]');
      const dir = e.target.closest('[data-dir]');
      if (seg) go(+seg.dataset.go);
      else if (dir) (+dir.dataset.dir > 0 ? go(k + 1) : back());
      else return;
      start();
    });
    place(false);
    start();
  }

  // ---------- Home dashboard widgets (production content; interactive) ----------
  const H = D.home;
  const hsNav = (light = false) => `<div class="hs-nav${light ? ' light' : ''}"><button type="button" class="hs-btn" data-hs="-1" aria-label="Scroll left">${icon('chevL')}</button><button type="button" class="hs-btn" data-hs="1" aria-label="Scroll right">${icon('chevR')}</button></div>`;
  const secPanel = (id, title, body, opts = {}) => panel(title, body, { ...opts, anchor: id, cls: `dash-w ${opts.cls || ''}` });
  // Shortcut cards: the exact cards from the supplied design (lossless crops, shown at their design proportions),
  // each a link with its name as hidden text; soft coloured glow beneath; soft gold waves behind the row.
  // Dark mode swaps in --card-dark: the same card converted to dark, so both themes share one layout.
  const PC_WAVES = `<svg class="pc-waves" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 230C260 130 520 320 820 190S1130 70 1200 110V320H0Z" fill="#fff" opacity=".55"/>
      <path d="M0 230C260 130 520 320 820 190S1130 70 1200 110" fill="none" stroke="#d9b56a" stroke-width="1.4" opacity=".55"/>
      <path d="M0 80C240 20 470 130 700 60S1060 -10 1200 40" fill="none" stroke="#e8cf98" stroke-width="1.2" opacity=".5"/>
      <path d="M700 320C820 250 1000 230 1200 260" fill="none" stroke="#d9b56a" stroke-width="1.6" opacity=".45"/></svg>`;
  // Columns keep each card's design width ratio (--cols); narrow screens use fixed widths at the same ratio (--cols-px).
  const dashShortcuts = () => `<div class="pc-row" style="--cols:${H.tiles.map((t) => `${t.w}fr`).join(' ')};--cols-px:${H.tiles.map((t) => `${Math.round(t.w * 0.62)}px`).join(' ')}">${PC_WAVES}${H.tiles.map((t) => {
    const attrs = `class="pc-card pc-${t.tone}" style="--w:${t.w};--h:${t.h};--card:url('${esc(t.card)}');--card-dark:url('${esc(t.cardDark || t.card)}')"`;
    const inner = `<span class="sr-only">${esc(t.label)}</span>`;
    return t.target ? `<a ${attrs} href="#home/${t.target}">${inner}</a>` : `<button type="button" ${attrs}>${inner}</button>`;
  }).join('')}</div>`;

  // Birthdays: classic framed greeting cards; shared by the Home section and its "View all" pop-up.
  const ORNAMENT = '<svg class="bd-orn" viewBox="0 0 120 12" aria-hidden="true"><path d="M0 6h48M72 6h48" stroke="currentColor" stroke-width="1"/><path d="M60 1l5 5-5 5-5-5z" fill="currentColor"/><circle cx="51" cy="6" r="1.5" fill="currentColor"/><circle cx="69" cy="6" r="1.5" fill="currentColor"/></svg>';
  const bdayCard = (p) => `<li class="bd-card">
      <span class="bd-av">${p.photo ? img(p.photo, p.name, 'avatar') : avatar(p.name)}<span class="bd-cake">${icon('cake')}</span></span>
      <b class="bd-name" title="${esc(p.name)}">${esc(p.name)}</b>
      ${ORNAMENT}
      <small class="bd-role">${esc(p.role)}</small>
      <button type="button" class="btn btn-primary btn-xs">Wish Now!</button></li>`;
  // photo = Home panel: stock birthday photo under a brown overlay instead of the beige gradient.
  const bdayGreeting = (photo = false) => `<div class="bd-intro${photo && H.birthdays.bg ? ' bd-photo' : ''}"${photo && H.birthdays.bg ? ` style="--bd-bg:url('${esc(H.birthdays.bg)}')"` : ''}>${ORNAMENT}<p>${esc(H.birthdays.sub)}</p>${ORNAMENT}</div>`;
  const dashBirthdays = () => secPanel('celebrations', H.birthdays.title, `<div class="bd-layout">${bdayGreeting(true)}
    <ul class="bd-list">${H.birthdays.people.map((p) => bdayCard(p)).join('')}</ul></div>`, { right: viewAll('View all', 'modal:birthdays'), ico: 'cake', cls: 'bd-w' });

  // Today's Menu (Home + Weekly Menu pop-up): illustrated meal tabs and a clean two-column dish list
  // with hairline dividers and right-aligned quantities.
  const mealTabs = (attr, active) => `<div class="tm-tabs" role="group" aria-label="Meal">${D.menu.tabs.map((t) => `<button type="button" class="tm-tab" ${attr}="${t}" aria-pressed="${t === active}"><span class="tm-art">${MEAL_ART[t] || ''}</span><span class="tm-label">${t}</span></button>`).join('')}</div>`;
  const menuRow = (i) => `<li class="ml-row"><span class="tm-mark${i.type === 'Non-Veg' ? ' nv' : ''}" title="${i.type}"><i></i></span>
      <span class="ml-name"><b>${esc(i.name)}</b><small>${i.type} · ${i.meal}</small></span>
      <span class="ml-qty"><b>${i.qty}</b>${i.unit}</span></li>`;
  const menuList = (items, emptyNote = '') => items.length
    ? `<ul class="ml-list">${items.map(menuRow).join('')}</ul>`
    : `<div class="ml-empty">${empty('No menu available', emptyNote, 'restaurant')}</div>`;
  // Every meal's full list sits in the same grid cell (inactive ones hidden), so the box always keeps the
  // height of the longest menu and the card doesn't resize when switching meals or filters.
  const menuPanes = (meal, shown, emptyNote) => `<div class="ml-panes"><div class="ml-pane">${menuList(shown, emptyNote)}</div>${D.menu.tabs.map((m) => `<div class="ml-pane" aria-hidden="true" inert>${menuList(D.menu.items[m] || [])}</div>`).join('')}</div>`;
  const dashMenu = () => secPanel('todays-menu', "Today's Menu", `<div class="tm-head">
      ${mealTabs('data-meal', D.menu.active)}
    </div>
    <div data-menu aria-live="polite"></div>`, { right: viewAll('View all', 'modal:weekly-menu'), ico: 'restaurant', cls: 'tm-w' });

  // Video Gallery: one featured category (large photo tile) beside a list of every category;
  // picking one in the list features it (UI only — nothing plays).
  const vgBg = (v) => (v.photo ? ` style="--vg-img:url('${esc(v.photo)}')"` : '');
  const vgFeature = (v) => `<div class="vg-feature"${vgBg(v)}>
      <button type="button" class="vg-play" aria-label="Play ${esc(v.label)}">${icon('play')}</button>
      <div class="vg-cap"><span class="vg-ico">${icon(v.icon)}</span><h3>${esc(v.label)}</h3></div>
    </div>`;
  const dashVideos = () => secPanel('video-gallery', 'Video Gallery', `<div class="vg">
      <div class="vg-stage" data-vg-feature>${vgFeature(H.videos[0])}</div>
      <ul class="vg-list">${H.videos.map((v, i) => `<li><button type="button" class="vg-item" data-vg="${i}" aria-pressed="${i === 0}">
        <span class="vg-thumb"${vgBg(v)}><span class="vg-mini">${icon('play')}</span></span>
        <span class="vg-label">${esc(v.label)}</span><span class="vg-go">${icon('chevR')}</span></button></li>`).join('')}</ul>
    </div>`, { right: viewAll('View all', '#corporate/videos'), ico: 'video' });


  // Recognition carousel (full width, after Video Gallery): the four production banners as slides — ERP winners,
  // two Everyday Hero pairs and an Everyday Hero spotlight. All slides share one grid cell, so the carousel keeps
  // the tallest slide's height and never resizes; it advances every 7 s and pauses on hover / focus.
  const RC = H.recognition;
  const RECO_MS = 7000;
  const rcTitle = (cls = '') => `<h2 class="rc-hero-title${cls}">${RC.heroTitle[0]} <span>${RC.heroTitle[1]}</span></h2>`;
  const rcPhoto = (name) => ((RC.photos || {})[name] ? img(RC.photos[name], name, 'avatar') : avatar(name));
  const rcAv = (name) => `<span class="rc-av">${rcPhoto(name)}<span class="rc-medal">${icon('group')}</span></span>`;
  const rcSlides = () => [
    ['rc-erp', `<div class="rc-erp-intro"><span class="rc-badge">${icon('verified')}</span>
        <h2>${esc(RC.erp.title)}</h2>
        <p class="rc-period">${icon('calendar')}${esc(RC.erp.period)}</p>
        <button type="button" class="rc-link">${esc(RC.erp.cta)}${icon('arrowR')}</button></div>
      <ul class="rc-winners">${RC.erp.winners.map((n) => `<li class="rc-winner"><span class="rc-wband" aria-hidden="true"></span>
        <span class="rc-wav">${rcPhoto(n)}</span>
        <b>${esc(n)}</b><button type="button" class="btn btn-primary btn-xs">Wish Now!</button></li>`).join('')}</ul>`],
    ...RC.heroPairs.map((pair) => ['rc-heroes', `${rcTitle()}<div class="rc-pair">${pair.map((h) => `<article class="rc-hcard">${rcAv(h.name)}
        <div class="rc-hinfo"><h3>${esc(h.name)}</h3><p class="rc-dept">${esc(h.dept)}</p>
          <div class="rc-value"><span class="rc-vico">${icon('group')}</span><span><b>${esc(h.value)}</b><small>${esc(h.tagline)}</small></span></div>
          <p class="rc-meta"><span class="rc-mico">${icon('campaign')}</span><span>Nominated By : <b>${esc(h.nominatedBy)}</b></span></p>
          <p class="rc-meta"><span class="rc-mico">${icon('business')}</span><span>Department : <b>${esc(h.dept)}</b></span></p></div></article>`).join('')}</div>`]),
    ['rc-spot', `<div class="rc-spot-tile">${rcTitle(' stack')}${rcAv(RC.spotlight.name)}</div>
      <div class="rc-spot-body"><div class="rc-spot-head"><h3>${esc(RC.spotlight.name)}</h3><span class="rc-chip">${icon('business')}${esc(RC.spotlight.dept)}</span></div>
        <blockquote><svg class="rc-qmark" viewBox="0 0 40 32" aria-hidden="true"><path d="M0 32V19C0 8.5 5.6 2.2 16.8 0l1.8 4.6C12.3 6.4 9.3 10 9 15h8v17zm22 0V19C22 8.5 27.6 2.2 38.8 0l1.8 4.6C34.3 6.4 31.3 10 31 15h8v17z"/></svg>“${esc(RC.spotlight.quote)}”</blockquote>
        <div class="rc-spot-meta">${[['supervisor', 'Manager :', RC.spotlight.manager], ['campaign', 'Nominated by :', RC.spotlight.nominatedBy], ['business', 'Department :', RC.spotlight.dept]].map(([ico, label, val]) => `<div class="rc-mchip"><span class="rc-mico">${icon(ico)}</span><span><small>${label}</small><b>${esc(val)}</b></span></div>`).join('')}</div></div>`],
  ];
  const dashReco = () => {
    const slides = rcSlides();
    return `<section class="reco" data-anchor="erp-winners" data-reco aria-roledescription="carousel" aria-label="Employee recognition">
      <div class="rc-stage" data-anchor="everyday-hero">${slides.map(([cls, html], i) => `<div class="rc-slide ${cls}${i ? '' : ' on'}" aria-roledescription="slide" aria-label="${i + 1} of ${slides.length}"${i ? ' aria-hidden="true" inert' : ''}>${html}</div>`).join('')}</div>
      <button type="button" class="rc-arrow prev" data-rc-dir="-1" aria-label="Previous slide">${icon('chevL')}</button>
      <button type="button" class="rc-arrow next" data-rc-dir="1" aria-label="Next slide">${icon('chevR')}</button>
      <div class="rc-dots">${slides.map((_, i) => `<button type="button" class="rc-dot" data-rc-go="${i}" aria-label="Slide ${i + 1}" aria-current="${i === 0}"></button>`).join('')}</div>
    </section>`;
  };
  let recoTimer = null, recoIdx = 0;
  function recoGo(n) {
    const root = $('[data-reco]');
    if (!root) return;
    const slides = root.querySelectorAll('.rc-slide');
    recoIdx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => {
      const on = i === recoIdx;
      s.classList.toggle('on', on);
      s.toggleAttribute('inert', !on);
      if (on) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true');
    });
    root.querySelectorAll('[data-rc-go]').forEach((d, i) => d.setAttribute('aria-current', String(i === recoIdx)));
  }
  function initReco() {
    clearInterval(recoTimer);
    const root = $('[data-reco]');
    if (!root) return;
    recoIdx = 0;
    const stop = () => clearInterval(recoTimer);
    const start = () => { stop(); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) recoTimer = setInterval(() => recoGo(recoIdx + 1), RECO_MS); };
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) start(); });
    root.addEventListener('click', (e) => {
      const dir = e.target.closest('[data-rc-dir]');
      const dot = e.target.closest('[data-rc-go]');
      if (dir) recoGo(recoIdx + +dir.dataset.rcDir);
      else if (dot) recoGo(+dot.dataset.rcGo);
    });
    start();
  }

  const dashJobs = () => secPanel('job-postings', 'Job Postings', jobsCards(H.jobs), { right: searchBox('Search by title...', 'data-filter-jobs', 'sm'), foot: viewAll('View More', '#hr-admin/jobPostings'), ico: 'work', cls: 'jobs-w' });

  const dashLearning = () => secPanel('learning-events', 'Learning Events', empty('No Events', '', 'event'), { right: viewAll('View all', '#training-events'), ico: 'article' });

  // Same desk-calendar date pages as the "View all" pop-up (later months use the beige strip).
  const dashHolidays = () => secPanel('holiday-calendar', 'Holiday Calendar', `<div class="mini-cal" data-mini-cal data-y="${today.getFullYear()}" data-m="${today.getMonth()}"></div>
    <ul class="date-list holiday-rail">${D.holidays.map((h) => {
      const d = parse(h.date);
      return `<li class="date-item${d.getMonth() !== today.getMonth() ? ' later' : ''}" data-date="${h.date}"><div class="date-badge"><b>${String(d.getDate()).padStart(2, '0')}</b><small>${MON[d.getMonth()]}</small></div><span class="title">${esc(h.title)}</span></li>`;
    }).join('')}</ul>`, { right: viewAll('View all', 'modal:holiday-calendar'), ico: 'event', cls: 'hol-w' });

  function renderMiniCal(el) {
    const y = +el.dataset.y, m = +el.dataset.m;
    const marks = new Set(D.holidays.map((h) => h.date));
    const first = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();
    let cells = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => `<div class="dow">${d}</div>`).join('');
    for (let i = 0; i < first; i++) cells += '<div class="day blank"></div>';
    for (let d = 1; d <= days; d++) {
      const key = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = y === today.getFullYear() && m === today.getMonth() && d === today.getDate();
      cells += `<div class="day${marks.has(key) ? ' has' : ''}${isToday ? ' today' : ''}" data-date="${key}"><span>${d}</span></div>`;
    }
    el.innerHTML = `<div class="mc-head"><b>${MONTHS[m]} ${y}</b><div class="cal-nav">
      <button type="button" data-mstep="-1" aria-label="Previous month">${icon('chevL')}</button>
      <button type="button" data-mstep="1" aria-label="Next month">${icon('chevR')}</button></div></div>
      <div class="cal">${cells}</div>`;
  }

  function updateScroller(sc) {
    const host = sc.closest('.panel, .hero-band');
    if (!host) return;
    const max = sc.scrollWidth - sc.clientWidth;
    host.classList.toggle('no-scroll', max <= 2);
    host.querySelectorAll('[data-hs]').forEach((b) => { b.disabled = +b.dataset.hs < 0 ? sc.scrollLeft <= 2 : sc.scrollLeft >= max - 2; });
    const dots = host.querySelector('[data-dots]');
    if (dots) {
      const pages = max <= 2 ? 1 : Math.ceil(sc.scrollWidth / sc.clientWidth - 0.05);
      const cur = Math.min(pages - 1, Math.round(sc.scrollLeft / sc.clientWidth));
      dots.innerHTML = pages > 1 ? Array.from({ length: pages }, (_, i) => `<button type="button" class="hs-dot${i === cur ? ' on' : ''}" data-page="${i}" aria-label="Page ${i + 1}"></button>`).join('') : '';
    }
  }

  function initDash() {
    const mc = $('[data-mini-cal]');
    if (mc) renderMiniCal(mc);
    document.querySelectorAll('[data-scroller]').forEach((sc) => {
      sc.addEventListener('scroll', () => updateScroller(sc), { passive: true });
      updateScroller(sc);
    });
  }

  // ---------- Corporate: Media, Policies, Video Gallery (UI only — nothing downloads or plays) ----------
  const C = D.corporate;
  const fmtDate = (s) => { const d = parse(s); return `${String(d.getDate()).padStart(2, '0')} ${MON[d.getMonth()]} ${d.getFullYear()}`; };

  // Media — premium 3D cards: rounded photo (zoom + cursor parallax) with the publication on a glass plate,
  // date, headline, Know More. Cards tilt slightly toward the cursor, lift on hover and fade up on first scroll-in.
  // Layers move by different amounts (photo most, plate and text least) to create depth.
  // Layout: large heading + pill "View all"; the latest story as a wide featured card (photo | text panel);
  // the remaining stories as image-on-top cards in a row beneath it.
  // Publication masthead image (alt = publication name); falls back to the plain name if no logo is set.
  const mdWord = (m) => (m.logo
    ? `<img class="md-logo" src="${esc(m.logo)}" alt="${esc(m.source)}" style="--logo-h:${m.logoH || 26}px" />`
    : `<span class="md-word">${esc(m.source)}</span>`);
  const mdImg = (m) => `<span class="md-img"${m.photo ? ` style="--md-img:url('${esc(m.photo)}')"` : ''} aria-hidden="true"></span>`;
  const mdDate = (m) => `<p class="md-meta">${icon('calendar')}<time datetime="${m.date}">${fmtDate(m.date)}</time></p>`;
  const mdMore = `<button type="button" class="btn btn-secondary btn-sm md-cta">Know More${icon('arrowR')}</button>`;
  const mediaFeature = (m) => `<div class="md-item" style="--i:0"><article class="md-feat" data-tilt="0.35">
      <div class="md-fimg">${mdImg(m)}</div>
      <div class="md-fbody">
        <span class="md-chip">Must Read</span>
        <h3 class="md-ftitle">${esc(m.title)}</h3>
        ${mdDate(m)}
        <div class="md-ffoot"><span class="md-pub" title="${esc(m.source)}">${mdWord(m)}</span>${mdMore}</div>
      </div></article></div>`;
  const mediaCard = (m, i) => `<div class="md-item" style="--i:${i}"><article class="md-card" data-tilt>
      <div class="md-media">${mdImg(m)}<span class="md-plate">${mdWord(m)}</span></div>
      <div class="md-body">${mdDate(m)}<h3 class="md-title">${esc(m.title)}</h3><div class="md-foot">${mdMore}</div></div>
    </article></div>`;
  const corpMedia = () => {
    const [lead, ...rest] = C.media;
    return `<section class="panel md-panel" data-anchor="media" aria-labelledby="md-heading"><div class="md-stage">
      <div class="md-amb" aria-hidden="true"><span class="b1"></span><span class="b2"></span><span class="b3"></span></div>
      <header class="md-head">
        <div><p class="md-eyebrow">${icon('image')}Media</p><h2 class="md-h" id="md-heading">Oberoi Realty<br />in the news.</h2></div>
        <button type="button" class="md-all">View all<span class="md-all-ico">${icon('arrowR')}</span></button>
      </header>
      <div class="md-grid" data-md-grid>
        ${lead ? mediaFeature(lead) : ''}
        <div class="md-row">${rest.map((m, i) => mediaCard(m, i + 1)).join('')}</div>
      </div>
    </div></section>`;
  };

  // Tilt + parallax only for a real mouse/trackpad (not touch) and when motion is allowed.
  const canTilt = () => matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mdObserver = null;
  function initMedia() {
    const grid = $('[data-md-grid]');
    if (!grid) return;
    // Scroll reveal: fade-up + scale-in, staggered; each card reveals once and is then unobserved.
    if (mdObserver) mdObserver.disconnect();
    const items = [...grid.querySelectorAll('.md-item')];
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      grid.classList.add('md-reveal');
      mdObserver = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        mdObserver.unobserve(en.target);
      }), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      items.forEach((it) => mdObserver.observe(it));
    }
    if (!canTilt()) return;
    grid.querySelectorAll('[data-tilt]').forEach((card) => {
      let raf = 0;
      const k = parseFloat(card.dataset.tilt) || 1; // smaller tilt for the large featured card
      card.addEventListener('pointerenter', () => card.classList.add('tilting'));
      card.addEventListener('pointermove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          card.style.setProperty('--rx', `${(-y * 5 * k).toFixed(2)}deg`);
          card.style.setProperty('--ry', `${(x * 6 * k).toFixed(2)}deg`);
          card.style.setProperty('--mx', x.toFixed(3));
          card.style.setProperty('--my', y.toFixed(3));
        });
      });
      card.addEventListener('pointerleave', () => {
        cancelAnimationFrame(raf); raf = 0;
        card.classList.remove('tilting');
        ['--rx', '--ry', '--mx', '--my'].forEach((v) => card.style.removeProperty(v));
      });
    });
  }

  // Policies: category pills with counts + title search, filtering a grid of document cards.
  const POL_ALL = 'All';
  const polCount = (cat) => (cat === POL_ALL ? C.policies.length : C.policies.filter((p) => p.cat === cat).length);
  const polItems = () => C.policies.map((p) => `<li class="pl-item" data-cat="${esc(p.cat)}">
        <span class="pl-file" aria-hidden="true">${icon('doc')}<b>PDF</b></span>
        <span class="pl-info"><b class="pl-name" title="${esc(p.name)}">${esc(p.name)}</b><small>${esc(p.cat)}</small></span>
        <button type="button" class="pl-dl" aria-label="Download ${esc(p.name)}" title="Download">${icon('download')}</button></li>`).join('');
  // The visible (filtered) list shares one grid cell with an invisible copy of the full list, so the box always
  // keeps the "All" height and doesn't resize when switching categories or searching (same as Today's Menu).
  const corpPolicies = () => panel('Policies', `
      <div class="pill-row" role="group" aria-label="Policy category">${[POL_ALL, ...C.policyCategories].map((c, i) => `<button type="button" class="pill" data-pol-tab="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}<span>${polCount(c)}</span></button>`).join('')}</div>
      <div class="ml-panes">
        <div class="ml-pane"><ul class="pl-grid" data-pol-list>${polItems()}</ul>
          <div data-pol-empty hidden>${empty('No policies found', 'Try another category or search term', 'doc')}</div></div>
        <div class="ml-pane" aria-hidden="true" inert><ul class="pl-grid">${polItems()}</ul></div>
      </div>`,
    { right: `<div class="ph-actions pl-actions">${searchBox('Search policies...', 'data-filter-policies', 'sm')}${viewAll()}</div>`, ico: 'doc', anchor: 'policies', sub: `${C.policies.length} documents` });
  function filterPolicies() {
    const root = $('[data-anchor="policies"]');
    if (!root) return;
    const cat = $('[data-pol-tab][aria-pressed="true"]', root).dataset.polTab;
    const q = $('[data-filter-policies]', root).value.trim().toLowerCase();
    let shown = 0;
    root.querySelectorAll('[data-pol-list] .pl-item').forEach((li) => {
      const ok = (cat === POL_ALL || li.dataset.cat === cat) && $('.pl-name', li).textContent.toLowerCase().includes(q);
      li.hidden = !ok;
      if (ok) shown += 1;
    });
    $('[data-pol-empty]', root).hidden = shown > 0;
  }

  // Video Gallery: category pills, a large player with Previous / Next, and an "Up next" playlist.
  let cvCat = C.videoCats[0], cvIdx = 0, cvMinH = 0;
  const cvList = () => C.videos.filter((v) => v.cat === cvCat);
  const cvBg = (v) => (v.photo ? ` style="--cv-img:url('${esc(v.photo)}')"` : '');
  function cvStage() {
    const list = cvList();
    if (!list.length) return empty('No videos available', 'There are no videos in this category yet', 'video');
    const v = list[cvIdx];
    return `<div class="cv-player"${cvBg(v)}>
        <span class="cv-now">${icon('play')}Now playing · ${cvIdx + 1} / ${list.length}</span>
        <button type="button" class="vg-play cv-play" aria-label="Play ${esc(v.title)}">${icon('play')}</button>
        ${v.duration ? `<span class="cv-dur">${v.duration}</span>` : ''}
      </div>
      <div class="cv-info">
        <div class="cv-head"><div><span class="cv-cat">${esc(v.cat)}</span><h3>${esc(v.title)}</h3></div>
          <div class="cv-steps"><button type="button" class="btn btn-secondary btn-sm" data-cv-step="-1"${cvIdx === 0 ? ' disabled' : ''}>${icon('chevL')}Previous</button><button type="button" class="btn btn-primary btn-sm" data-cv-step="1"${cvIdx === list.length - 1 ? ' disabled' : ''}>Next${icon('chevR')}</button></div></div>
        ${v.desc ? `<p class="cv-desc">${esc(v.desc)}</p>` : ''}
      </div>`;
  }
  const cvPlaylist = () => cvList().map((v, i) => `<li><button type="button" class="cv-item" data-cv-item="${i}" aria-pressed="${i === cvIdx}">
      <span class="cv-thumb"${cvBg(v)}><span class="vg-mini">${icon('play')}</span></span>
      <span class="cv-ttl"><b>${esc(v.title)}</b><small>${i === cvIdx ? 'Now playing' : `Video ${i + 1}`}</small></span></button></li>`).join('');
  const corpVideos = () => panel('Video Gallery', `
      <div class="pill-row" role="group" aria-label="Video category">${C.videoCats.map((c) => `<button type="button" class="pill" data-cv-tab="${esc(c)}" aria-pressed="${c === cvCat}">${esc(c)}<span>${C.videos.filter((v) => v.cat === c).length}</span></button>`).join('')}</div>
      <div class="cv" data-cv></div>`, { ico: 'video', anchor: 'videos' });
  function renderCv() {
    const root = $('[data-cv]');
    if (!root) return;
    const list = cvList();
    root.classList.toggle('cv-empty', !list.length);
    root.innerHTML = `<div class="cv-stage" aria-live="polite">${cvStage()}</div>
      ${list.length ? `<aside class="cv-side" aria-label="Playlist"><p class="cv-side-head"><b>Up next</b><span>${list.length} video${list.length === 1 ? '' : 's'}</span></p><ul class="cv-list">${cvPlaylist()}</ul></aside>` : ''}`;
    document.querySelectorAll('[data-cv-tab]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cvTab === cvCat)));
    // Keep the box at the tallest height seen (first film has the longest description), so it doesn't resize
    // when moving between videos or into an empty category. Reset on window resize.
    root.style.minHeight = '';
    cvMinH = Math.max(cvMinH, root.offsetHeight);
    root.style.minHeight = `${cvMinH}px`;
    // Bring the current item into view inside the playlist only (never scrolls the page).
    const cur = $('.cv-item[aria-pressed="true"]', root);
    const pl = $('.cv-list', root);
    if (cur && pl) {
      const lr = pl.getBoundingClientRect(), cr = cur.getBoundingClientRect();
      if (cr.top < lr.top) pl.scrollTop += cr.top - lr.top - 8;
      else if (cr.bottom > lr.bottom) pl.scrollTop += cr.bottom - lr.bottom + 8;
    }
  }

  // ---------- HR & Admin (live-site content; UI only — nothing is submitted or sent anywhere) ----------
  const HR = D.hr;
  // Single-page pager (the live site has one page of postings)
  const pagerOne = `<nav class="pager" aria-label="Job pages"><button type="button" disabled aria-label="Previous page">${icon('chevL')}</button><button type="button" aria-current="page">1</button><button type="button" class="next" disabled aria-label="Next page">${icon('chevR')}</button></nav>`;
  // Know Your Team: profile card (cover, avatar, name/role, contact facts, About Me) + HRD & Employee Services directory
  const hrProfile = () => `<section class="panel hr-profile">
      <div class="hr-cover" style="--cover:url('${esc(D.profile.coverPhoto)}')">
        <button type="button" class="hr-fab" aria-label="Edit cover">${icon('edit')}</button>
      </div>
      <div class="hr-id">
        <span class="hr-av">${avatar(D.user.name)}</span>
        <div class="hr-name"><h3>${esc(D.user.name)}</h3><p>${esc(D.user.title)}</p></div>
      </div>
      <div class="hr-body">
        <ul class="hr-facts">
          <li><span class="hr-fi">${icon('mail')}</span><span class="hr-fv"><small>Email</small><b>${esc(D.user.email)}</b></span><button type="button" class="hr-copy" data-copy="${esc(D.user.email)}" aria-label="Copy email" title="Copy email">${icon('copy')}</button></li>
          <li><span class="hr-fi">${icon('phone')}</span><span class="hr-fv"><small>Phone Number</small><b>${esc(D.profile.phone)}</b></span></li>
          <li><span class="hr-fi">${icon('supervisor')}</span><span class="hr-fv"><small>Reporting Manager</small><b>${esc(D.profile.manager)}</b></span></li>
        </ul>
        <div class="hr-about"><div class="hr-about-head"><h4>About Me</h4><button type="button" class="hr-fab sm" aria-label="Edit about me">${icon('edit')}</button></div><p>${esc(D.profile.about)}</p></div>
      </div>
    </section>`;
  // HRD & Employee Services: A–Z groups (sticky letters); each person = photo, name (+ "You"), role, quick actions
  const hrTeam = () => {
    let last = '';
    const rows = [...D.team].sort((a, b) => a[0].localeCompare(b[0])).map(([n, r, ph]) => {
      const L = n[0].toUpperCase();
      const head = L !== last ? `<li class="hr-letter" data-letter="${L}" aria-hidden="true">${L}</li>` : '';
      last = L;
      return `${head}<li class="hr-person" data-letter-of="${L}">
        <span class="hr-pav">${ph ? img(ph, n, 'avatar') : avatar(n)}</span>
        <span class="hr-pinfo"><b>${esc(n)}${n === D.user.name ? '<em class="hr-you">You</em>' : ''}</b><small title="${esc(r)}">${esc(r)}</small></span>
        <span class="hr-acts"><button type="button" class="hr-act" aria-label="Email ${esc(n)}" title="Email">${icon('mail')}</button><button type="button" class="hr-act" aria-label="Message ${esc(n)}" title="Message">${icon('chat')}</button></span>
      </li>`;
    }).join('');
    return panel('HRD &amp; Employee Services', `<ul class="hr-dir" data-team>${rows}</ul>
      <div data-team-empty hidden>${empty('No matching team members', 'Try another name or role', 'group')}</div>`, { flush: true, cls: 'hr-team', ico: 'group', sub: `${D.team.length} members` });
  };

  // Wish Your Colleagues: tabs (Birthdays / New Joiners / Work Anniversaries) with counts; colleague cards
  const WC_ICON = { Birthdays: 'cake', 'New Joiners': 'group', 'Work Anniversaries': 'celebration' };
  let wcTab = Object.keys(HR.colleagues)[0], wcMinH = 0;
  const hrWish = () => panel('Wish Your Colleagues', `<div class="pill-row" role="group" aria-label="Celebration type">${Object.keys(HR.colleagues).map((t) => `<button type="button" class="pill" data-wc-tab="${esc(t)}" aria-pressed="${t === wcTab}">${esc(t)}<span>${HR.colleagues[t].length}</span></button>`).join('')}</div>
      <div class="wc-box" data-wc aria-live="polite"></div>`, { ico: 'celebration', anchor: 'wish-your-colleagues', sub: 'Say Hello! to new energy', right: viewAll('View all', 'modal:colleagues') });
  // One colleague card (Home Birthdays design): photo + badge, serif name, ornament, role, department (+ years), Wish Now!
  const WC_ROW = 4; // the section shows one full row; "View all" shows everyone
  const wcCard = (p, ico) => `<li class="bd-card">
      <span class="bd-av">${p.photo ? img(p.photo, p.name, 'avatar') : avatar(p.name)}<span class="bd-cake">${icon(ico)}</span></span>
      <b class="bd-name" title="${esc(p.name)}">${esc(p.name)}</b>
      ${ORNAMENT}
      <small class="bd-role">${esc(p.role)}</small>
      <span class="wc-tags"><span class="wc-dept">${icon('business')}${esc(p.dept)}</span>${p.years ? `<span class="wc-years">${p.years} ${p.years === 1 ? 'year' : 'years'}</span>` : ''}</span>
      <button type="button" class="btn btn-primary btn-xs">Wish Now!</button></li>`;
  // Framed colleague cards in the Home Birthdays design (photo with badge, serif name, ornament, role, department, Wish Now!)
  function renderWc() {
    const box = $('[data-wc]');
    if (!box) return;
    const list = HR.colleagues[wcTab] || [], ico = WC_ICON[wcTab] || 'celebration';
    box.innerHTML = list.length
      ? `<ul class="bd-list wc-list">${list.slice(0, WC_ROW).map((p) => wcCard(p, ico)).join('')}</ul>`
      : empty(`No ${wcTab.toLowerCase()} today`, 'Check back tomorrow', ico);
    document.querySelectorAll('[data-wc-tab]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.wcTab === wcTab)));
    // keep the box at the tallest height seen, so switching tabs doesn't resize it (reset on window resize)
    box.style.minHeight = '';
    wcMinH = Math.max(wcMinH, box.offsetHeight);
    box.style.minHeight = `${wcMinH}px`;
  }

  // Applications: logo tiles with the app name
  const hrApps = () => panel('Applications', `<ul class="ap-grid">${HR.apps.map((a) => `<li><button type="button" class="ap-tile" title="Open ${esc(a.name)}">
      <span class="ap-logo"><img src="${esc(a.logo)}" alt="${esc(a.name)}" loading="lazy" /></span>
      <span class="ap-name">${esc(a.name)}${icon('arrowR')}</span></button></li>`).join('')}</ul>`, { ico: 'apps', anchor: 'applications' });

  // ERP Winners: quarter pills; winner cards with quote
  let erpQ = Object.keys(HR.erp)[0];
  // A winner's photo: their own (past winners) or the Home recognition photo (current winners); else the default avatar
  const erpPhoto = (p) => { const src = p.photo || (H.recognition.photos || {})[p.name]; return src ? img(src, p.name, 'avatar') : avatar(p.name); };
  // View-all archive: the current quarter tabs plus the earlier Q2 FY 2024-2025 winners captured from the live site
  const erpArchive = () => ({ ...HR.erp, [D.erpPeriod]: D.erp });
  // Header: title + live subtitle (quarter · winner count) + quarter tabs. Body: award cards — champagne band with a
  // "Winner" chip and medal, photo in a gold ring overlapping the band, serif name, role chip, ornament, quoted citation.
  const erpSub = (q) => { const n = (HR.erp[q] || []).length; return `For ${esc(q)} · ${n ? `${n} winner${n === 1 ? '' : 's'}` : 'to be announced'}`; };
  const hrErp = () => panel('Employee Recognition Program (ERP) Winners',
    `<div class="ew-box" data-erp aria-live="polite"></div>`,
    { ico: 'verified', anchor: 'erp-winners', cls: 'ew-panel', sub: `<span data-erp-sub>${erpSub(erpQ)}</span>`,
      right: `<div class="ew-actions"><div class="ew-tabs" role="group" aria-label="Quarter">${Object.keys(HR.erp).map((q) => `<button type="button" class="ew-tab" data-erp-q="${esc(q)}" aria-pressed="${q === erpQ}">${esc(q)}</button>`).join('')}</div>${viewAll('View all', 'modal:erp')}</div>` });
  const erpCard = (p) => `<article class="ew-card">
      <div class="ew-band"><span class="ew-chip">${icon('verified')}Winner</span><span class="ew-medal" aria-hidden="true">${icon('verified')}</span></div>
      <span class="ew-av">${erpPhoto(p)}</span>
      <div class="ew-body">
        <h3 class="ew-name">${esc(p.name)}</h3>
        <span class="ew-role">${esc(p.role)}</span>
        ${ORNAMENT}
        <blockquote class="ew-quote"><span class="ew-qm" aria-hidden="true">“</span>${esc(p.text)}</blockquote>
      </div>
    </article>`;
  // Every quarter is rendered into the same grid cell (only the chosen one visible), so the box keeps the height of
  // the fullest quarter and never resizes when switching.
  function renderErp() {
    const box = $('[data-erp]');
    if (!box) return;
    const pane = (q) => {
      const list = HR.erp[q] || [];
      return list.length
        ? `<div class="ew-grid">${list.map(erpCard).join('')}</div>`
        : `<div class="ew-empty"><span class="ew-empty-ico">${icon('verified')}</span><b>Winners for ${esc(q)} will appear here</b><span>No winners have been announced for this quarter yet.</span></div>`;
    };
    box.innerHTML = Object.keys(HR.erp).map((q) => (q === erpQ
      ? `<div class="ml-pane ew-pane">${pane(q)}</div>`
      : `<div class="ml-pane ew-pane" aria-hidden="true" inert>${pane(q)}</div>`)).join('');
    const sub = $('[data-erp-sub]');
    if (sub) sub.innerHTML = erpSub(erpQ);
    document.querySelectorAll('[data-erp-q]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.erpQ === erpQ)));
  }

  // Make a Request / Send Suggestions
  // Two guided forms: numbered steps, tile / chip pickers, a text box with counter, and an in-place "sent" state
  // (the form keeps its size). Prototype only: nothing is sent anywhere.
  const hfStep = (n, title, hint = '') => `<span class="hf-step"><span class="hf-num">${n}</span><span class="hf-step-t">${title}</span>${hint ? `<span class="hf-hint">${hint}</span>` : ''}</span>`;
  const hfBox = (id, ph, rows) => `<span class="hf-box"><textarea id="${id}" name="text" rows="${rows}" maxlength="500" placeholder="${ph}" data-count></textarea><small class="hf-count" data-count-out aria-live="polite">0 / 500</small></span>`;
  const hfFoot = (ico, note, label) => `<div class="hf-foot"><p class="hf-note" data-hf-msg data-note="${esc(note)}" data-ico="${ico}">${icon(ico)}<span>${note}</span></p><button type="submit" class="btn btn-primary hf-submit">${label}${icon('arrowR')}</button></div>`;
  const hfDone = (title, text, again) => `<div class="hf-done" role="status" aria-hidden="true" inert><span class="hf-done-ico">${icon('check')}</span><b>${title}</b><p>${text}</p><button type="button" class="btn btn-secondary" data-hf-again>${again}</button></div>`;
  const hrRequest = () => panel('Make a Request', `<form class="hf" data-hf="request" novalidate>
      <fieldset class="hf-group"><legend>${hfStep(1, 'What do you need?')}</legend>
        <div class="hf-tiles">${(HR.requestTypes || []).map((t) => `<label class="hf-tile"><input type="radio" name="type" value="${esc(t.id)}" /><span class="hf-tile-ico">${icon(t.icon)}</span><span class="hf-tile-name">${esc(t.label)}</span><span class="hf-tick">${icon('check')}</span></label>`).join('')}</div>
      </fieldset>
      <div class="hf-group hf-grow"><label for="hf-req-text">${hfStep(2, 'Tell us more')}</label>${hfBox('hf-req-text', 'Type your request here', 3)}</div>
      ${hfFoot('info', 'The HR &amp; Admin team will follow up with you.', 'Submit request')}
      ${hfDone('Request submitted', 'Thank you. The HR &amp; Admin team will follow up with you.', 'Make another request')}
    </form>`, { ico: 'chat', anchor: 'make-a-request', cls: 'hf-panel', sub: 'Raise a request with the HR &amp; Admin team' });
  // "Share your idea" illustration: 3D light bulb — shaded glass sphere with a glowing filament, specular highlights,
  // a metallic screw base, light rays, sparkles and a soft floor shadow / reflected glow.
  const ideaArt = (vb = '0 0 160 110') => `<svg class="hf-art" viewBox="${vb}" aria-hidden="true">
      <defs>
        <radialGradient id="hbHalo" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe08a" stop-opacity=".85"/><stop offset=".55" stop-color="#ffd36b" stop-opacity=".28"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient>
        <radialGradient id="hbGlass" cx="40%" cy="34%" r="66%"><stop offset="0" stop-color="#fffdf2"/><stop offset=".3" stop-color="#ffeaa8"/><stop offset=".68" stop-color="#f4b850"/><stop offset=".9" stop-color="#d48f36"/><stop offset="1" stop-color="#b8742a"/></radialGradient>
        <radialGradient id="hbCore" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff6d6" stop-opacity="0"/></radialGradient>
        <linearGradient id="hbSpec" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
        <linearGradient id="hbMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5e4c3c"/><stop offset=".22" stop-color="#bda78d"/><stop offset=".42" stop-color="#f6ead8"/><stop offset=".66" stop-color="#a08a73"/><stop offset="1" stop-color="#4a3c30"/></linearGradient>
        <filter id="hbBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2"/></filter>
        <filter id="hbSoft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1"/></filter>
      </defs>
      <ellipse class="hb-floor" cx="80" cy="101" rx="36" ry="6.5" fill="#ffcf6b" filter="url(#hbBlur)"/>
      <ellipse cx="80" cy="101.5" rx="16" ry="2.8" fill="rgba(60,38,18,.4)" filter="url(#hbSoft)"/>
      <circle class="hb-halo" cx="80" cy="42" r="44" fill="url(#hbHalo)"/>
      <g class="hb-rays"><path d="M80 11V4M57.4 19.4l-4.6-4.6M102.6 19.4l4.6-4.6M48 42h-7M112 42h7M54 62l-4 3M106 62l4 3"/></g>
      <path d="M69 73c0-9-14-15-14-31a25 25 0 0 1 50 0c0 16-14 22-14 31z" fill="url(#hbGlass)"/>
      <circle cx="80" cy="49" r="15" fill="url(#hbCore)"/>
      <path d="M73.5 72V60M86.5 72V60" stroke="rgba(150,96,40,.55)" stroke-width="1.2"/>
      <path d="M73.5 60l2-12 2.6 6.5 1.9-9 1.9 9 2.6-6.5 2 12" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" opacity=".7" filter="url(#hbSoft)"/>
      <path d="M73.5 60l2-12 2.6 6.5 1.9-9 1.9 9 2.6-6.5 2 12" fill="none" stroke="#fff1bf" stroke-width="1.5" stroke-linejoin="round"/>
      <ellipse cx="68" cy="29" rx="6.5" ry="11" transform="rotate(-38 68 29)" fill="url(#hbSpec)"/>
      <circle cx="62.5" cy="45" r="1.8" fill="#fff" opacity=".7"/>
      <path d="M98.5 27a25 25 0 0 1 5.3 21" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".5"/>
      <rect x="70" y="76" width="20" height="16" rx="3" fill="#3f3228"/>
      <rect x="67.5" y="71.5" width="25" height="5.5" rx="2.4" fill="url(#hbMetal)"/>
      <rect x="69" y="77.5" width="22" height="4.3" rx="2.15" fill="url(#hbMetal)"/>
      <rect x="69" y="82.6" width="22" height="4.3" rx="2.15" fill="url(#hbMetal)"/>
      <rect x="69.5" y="87.7" width="21" height="4.3" rx="2.15" fill="url(#hbMetal)"/>
      <path d="M73.5 92.5h13l-2.6 5.2a2 2 0 0 1-1.8 1.1h-4.2a2 2 0 0 1-1.8-1.1z" fill="#3a2e25"/>
      <path class="hb-spark" d="M132 20l2 5.6 5.6 2-5.6 2-2 5.6-2-5.6-5.6-2 5.6-2z"/>
      <path class="hb-spark sm" d="M26 66l1.4 3.8 3.8 1.4-3.8 1.4-1.4 3.8-1.4-3.8-3.8-1.4 3.8-1.4z"/>
      <circle class="hb-spark" cx="140" cy="52" r="2"/><circle class="hb-spark" cx="22" cy="24" r="1.6"/><circle class="hb-spark sm" cx="120" cy="82" r="1.4"/>
    </svg>`;
  // Split layout: gold "idea" side panel (3D bulb, heading, reassurances) | writing area (box with anonymous switch + counter, tip / error, send)
  const hrSuggest = () => panel('Send Suggestions', `<form class="hf hf-split" data-hf="suggest" novalidate>
      <aside class="hf-side">
        <span class="hf-art-wrap">${ideaArt()}</span>
        <div class="hf-side-t"><h3>Share your idea</h3>
        <p>Big or small, every idea helps make our workplace better.</p></div>
        <ul class="hf-points"><li>${icon('check')}Read by the HR team</li><li>${icon('check')}Anonymous if you prefer</li></ul>
      </aside>
      <div class="hf-main">
        <label class="hf-main-t" for="hf-sg-text">Your suggestion</label>
        <div class="hf-box"><textarea id="hf-sg-text" name="text" rows="5" maxlength="500" placeholder="Type your suggestions here" data-count></textarea>
          <div class="hf-box-bar"><label class="hf-switch"><input type="checkbox" role="switch" name="anon" /><span class="hf-track" aria-hidden="true"></span><span class="hf-switch-t">${icon('lock')}Send anonymously</span></label><small class="hf-count" data-count-out aria-live="polite">0 / 500</small></div></div>
        <div class="hf-act">
          <p class="hf-note" data-hf-msg data-note="Tip: say what you would change and why." data-ico="info">${icon('info')}<span>Tip: say what you would change and why.</span></p>
          <button type="submit" class="btn btn-primary hf-submit">Send suggestion${icon('arrowR')}</button>
        </div>
      </div>
      ${hfDone('Thanks for your idea', 'Your suggestion has been shared with the HR team.', 'Share another idea')}
    </form>`, { ico: 'bulb', anchor: 'send-suggestions', cls: 'hf-panel hf-panel-split', sub: 'Ideas that make work better for everyone' });

  // ---------- I-Connect ----------
  // Our Values tiles · People Stories (featured story + card grid) · Newsletter (latest edition + compact cards + archive tile).
  // Read buttons are presentation only (the live site opens the full article).
  const IC = D.iconnect;
  const more = (t) => `${esc(t.replace(/[\s,;:]+$/, ''))}…`;
  const icRead = (label, primary = false) => `<button type="button" class="${primary ? 'btn btn-primary ic-cta' : 'ic-read'}">${label}${icon('arrowR')}</button>`;
  // Our Values: cards (reference "Build faster"), light in light mode / dark in dark mode. Each card: value icon + tagline on
  // the right, a dashed connector to a glowing dot, a glow in the
  // value's colour, then name and statement.
  const icValues = () => {
    const V = D.values;
    return panel('Our Values', `<ul class="vb-grid">${V.map((v, i) => `
      <li class="vb-card${i < 2 ? ' wide' : ''} has-photo" style="--tone:${v.tone};--g1:${v.glow[0]};--g2:${v.glow[1]}">
        ${v.photo ? `<span class="vb-fill">${img(v.photo, v.alt)}</span>` : `<span class="vb-fill vb-fill-ico"><i class="vb-big" style="--ico:url('${esc(v.icon)}')"></i></span>`}
        <div class="vb-visual" aria-hidden="true">
        </div>
        <div class="vb-text"><h3>${esc(v.alt)}</h3><p>${esc(v.statement)}</p></div>
      </li>`).join('')}</ul>`,
      { ico: 'verified', anchor: 'our-values', sub: 'The principles behind everything we do', cls: 'vl-panel' });
  };
  const psMedia = (s) => `<div class="ps-media${s.portrait ? ' portrait' : ''}"${s.portrait ? ` style="--bg:url('${esc(s.img)}')"` : ''}>${img(s.img, '')}<span class="ps-tag">${esc(s.tag)}</span></div>`;
  const icEmpty = (what) => `<div data-ic-empty hidden>${empty(`No ${what} found`, 'Try a different search term', 'article')}</div>`;
  // People Stories — editorial bento ("travel journal"): headline intro with a dotted route line, then a bento of story cards —
  // the featured story in a tall arch-topped frame, photo cards with the title over a soft gradient, and wide split cards.
  // Every card opens the story pop-up. While searching, the bento becomes an even grid so filtered cards leave no holes.
  const PJ_SLOTS = ['feat', 'tile', 'tile', 'wide', 'tile', 'tile', 'wide'];
  const PJ_SHOW = PJ_SLOTS.length; // the bento shows the latest 7; the rest are in "View all stories" (and in search results)
  const pjCard = (st, i, slot, extra = '') => `<button type="button" class="pj-card pj-${slot}"${extra} data-modal="story" data-story="${i}">
          <span class="pj-media${st.portrait ? ' portrait' : ''}" style="--bg:url('${esc(st.img)}')">${img(st.img, '')}</span>
          <span class="pj-tag"><i class="sx-dot"></i>${esc(st.tag)}</span>
          <span class="pj-copy">${i === 0 && slot === 'feat' ? '<small class="pj-label">Featured story</small>' : ''}<b class="pj-title">${esc(st.title)}</b>${slot !== 'tile' ? `<span class="pj-ex">${more(st.text)}</span>` : ''}<span class="pj-go">Read story${icon('arrowR')}</span></span>
        </button>`;
  const icStories = () => {
    const L = IC.stories;
    return panel('People Stories', `
      <div class="pj-intro">
        <div class="pj-head"><p class="pj-kicker"><i class="sx-dot"></i>From our people</p><h3 class="pj-h">Journeys worth sharing</h3></div>
        <p class="pj-sub">Adventures, discoveries and quiet moments shared by colleagues across Oberoi Realty. Pick a story to read it in full.</p>
        <svg class="pj-route" viewBox="0 0 220 70" aria-hidden="true"><path d="M6 58 C 50 58, 60 14, 110 22 S 170 60, 214 12"/><circle cx="6" cy="58" r="4"/><circle cx="110" cy="22" r="4"/><circle class="end" cx="214" cy="12" r="5"/></svg>
      </div>
      <div class="pj-grid" data-pj-grid>${L.map((st, i) => pjCard(st, i, i < PJ_SHOW ? PJ_SLOTS[i] : 'tile', ` data-ic-item${i < PJ_SHOW ? '' : ' data-pj-extra'}`)).join('')}</div>
      <div class="pj-foot"><span>Showing ${Math.min(PJ_SHOW, L.length)} of ${L.length} stories</span><button type="button" class="pj-all" data-modal="stories">View all stories${icon('arrowR')}</button></div>
      ${icEmpty('stories')}`,
    { ico: 'article', anchor: 'people-stories', cls: 'pj-panel', sub: `${IC.stories.length} stories shared by our colleagues`, right: searchBox('Search stories...', 'data-filter-ic', 'sm') });
  };
  // Newsletter — editorial issue: masthead (serif title, double rule), cover story beside an "In this issue" index of the
  // other articles, then a past-editions strip. Every article opens the reading view; search filters cover + index.
  const nwOpen = (i, from = '') => ` data-modal="story" data-set="news" data-story="${i}"${from ? ` data-from="${from}"` : ''}`;
  const icNews = () => {
    const [f, ...rest] = IC.newsletters;
    return panel('Newsletter', `
      <div class="nw-mast">
        <div class="nw-mast-l"><p class="pj-kicker"><i class="sx-dot"></i>The newsletter</p><h3 class="nw-h">Inside Oberoi Realty</h3></div>
        <p class="nw-mast-r">Explore features, updates, and inspiring insights from across our organization.<span>${IC.newsletters.length} features in this edition</span></p>
      </div>
      <div class="nw-layout">
        <button type="button" class="nw-cover" data-ic-item${nwOpen(0)}>
          <span class="nw-cover-media">${img(f.img, '')}<span class="st-tag"><i class="sx-dot"></i>Cover story</span></span>
          <span class="nw-cover-copy"><b>${esc(f.title)}</b><span class="nw-ex">${more(f.text)}</span><span class="nw-go">Read article${icon('arrowR')}</span></span>
        </button>
        <div class="nw-index">
          <p class="nw-index-head"><b>In this issue</b><span>${rest.length} articles</span></p>
          <ul class="nw-list">${rest.map((n, k) => `<li data-ic-item><button type="button" class="nw-row"${nwOpen(k + 1)}>
            <span class="nw-thumb">${img(n.img, '')}</span>
            <span class="nw-row-t"><b>${esc(n.title)}</b><span>${more(n.text)}</span></span>${icon('chevR')}</button></li>`).join('')}</ul>
        </div>
      </div>
      <div class="nw-past">
        <span class="nw-past-ico">${icon('article')}</span>
        <p><b>Looking for older editions?</b><span>Browse every article from past newsletters in one place.</span></p>
        <button type="button" class="pj-all" data-modal="newsletters">View past newsletters${icon('arrowR')}</button>
      </div>
      ${icEmpty('newsletters')}`,
    { ico: 'campaign', anchor: 'newsletter', cls: 'nw-panel', sub: 'Features, updates and insights from across the organisation', right: searchBox('Search newsletters...', 'data-filter-ic', 'sm') });
  };

  // ---------- Training & Events ----------
  const TE = D.training;
  const dayMs = 864e5, today0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysUntil = (iso) => Math.round((parse(iso) - today0) / dayMs);
  const whenText = (n) => (n === 0 ? 'Today' : n === 1 ? 'Tomorrow' : n < 0 ? 'Done' : n < 60 ? `in ${n} days` : `in ${Math.round(n / 30)} months`);
  const longDate = (iso) => { const t = parse(iso); return `${DAYS[t.getDay()]}, ${t.getDate()} ${MONTHS[t.getMonth()]} ${t.getFullYear()}`; };
  // Learning & Development: designed empty state (the live list has no sessions yet)
  const LD_ART = `<svg class="te-art" viewBox="0 0 120 96" aria-hidden="true"><ellipse cx="60" cy="86" rx="38" ry="5" class="sh"/>
    <rect x="22" y="54" width="76" height="12" rx="3" class="b1"/><rect x="28" y="66" width="66" height="12" rx="3" class="b2"/><rect x="18" y="42" width="70" height="12" rx="3" class="b3"/>
    <path d="M60 10 92 22 60 34 28 22Z" class="cap"/><path d="M42 27v9c0 4 8 7 18 7s18-3 18-7v-9l-18 7z" class="cap2"/><path d="M90 23v12" class="tas"/><circle cx="90" cy="37" r="2.6" class="tas2"/>
    <path class="sp" d="M104 12l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z"/><circle class="sp" cx="16" cy="28" r="2"/></svg>`;
  const teLearning = () => `<div class="te-empty">${LD_ART}<b>No sessions scheduled yet</b><span>New training sessions and workshops will appear here as soon as they're announced.</span></div>`;
  // Fun @ Work: "Up next" (countdown) + the rest grouped by month
  const teAgenda = (src, kicker, emptyHtml) => {
    const up = src.filter((e) => daysUntil(e.date) >= 0).sort((x, y) => (x.date < y.date ? -1 : 1));
    if (!up.length) return emptyHtml;
    const [n0, ...rest] = up, t0 = parse(n0.date);
    const groups = [];
    rest.forEach((e) => { const t = parse(e.date), k = `${MONTHS[t.getMonth()]} ${t.getFullYear()}`; let g = groups.find((x) => x.k === k); if (!g) groups.push(g = { k, items: [] }); g.items.push(e); });
    return `<div class="fw">
      <article class="fw-next" data-ev="${n0.date}">
        <span class="desk-date lg"><small>${MON[t0.getMonth()]}</small><b>${String(t0.getDate()).padStart(2, '0')}</b></span>
        <div class="fw-next-t"><p class="pj-kicker"><i class="sx-dot"></i>${kicker}</p><h3>${esc(n0.title)}</h3><p class="fw-when">${icon('calendar')}${longDate(n0.date)}${n0.place ? `<span class="fw-sep">·</span>${icon('place')}${esc(n0.place)}` : ''}</p></div>
        <div class="fw-count"><b>${Math.max(daysUntil(n0.date), 0)}</b><span>${daysUntil(n0.date) === 1 ? 'day to go' : 'days to go'}</span></div>
      </article>
      <div class="fw-list">${groups.map((g) => `<p class="fw-month">${g.k}</p><ul>${g.items.map((e) => { const t = parse(e.date); return `<li class="fw-item" data-ev="${e.date}"><span class="desk-date${t.getMonth() !== today.getMonth() || t.getFullYear() !== today.getFullYear() ? ' later' : ''}"><small>${MON[t.getMonth()]}</small><b>${String(t.getDate()).padStart(2, '0')}</b></span><span class="fw-item-t"><b>${esc(e.title)}</b><small>${e.place ? `${esc(e.place)} · ` : ''}${DAYS[t.getDay()]} · ${whenText(daysUntil(e.date))}</small></span></li>`; }).join('')}</ul>`).join('')}</div>
    </div>`;
  };
  const teFun = () => teAgenda(D.funEvents, 'Up next', empty('No upcoming events', 'Check back soon', 'event'));
  // Learning Events card: today's sessions (left) and the upcoming ones (right); the illustration when there are none.
  const teLD = () => {
    const key = (e) => e.date + ' ' + (e.time || '');
    const list = (D.learningEvents || []).slice().sort((x, y) => (key(x) < key(y) ? -1 : 1));
    const todays = list.filter((e) => daysUntil(e.date) === 0), up = list.filter((e) => daysUntil(e.date) > 0);
    if (!todays.length && !up.length) return teLearning();
    const t0 = today0;
    const todayHtml = todays.length
      ? `<ul class="ld-today-list">${todays.map((e) => `<li class="ld-tt" data-ev="${e.date}"><span class="ld-time">${icon('event')}${esc(e.time || 'All day')}</span><b>${esc(e.title)}</b><small>${icon('place')}${esc(e.place || '')}</small></li>`).join('')}</ul>`
      : '<p class="ld-none">No sessions today</p>';
    const upHtml = up.length
      ? `<ul class="ld-up-list">${up.map((e) => {
          const t = parse(e.date), later = t.getMonth() !== today.getMonth() || t.getFullYear() !== today.getFullYear();
          return `<li class="fw-item" data-ev="${e.date}"><span class="desk-date${later ? ' later' : ''}"><small>${MON[t.getMonth()]}</small><b>${String(t.getDate()).padStart(2, '0')}</b></span><span class="fw-item-t"><b>${esc(e.title)}</b><small>${esc(e.place || '')}${e.time ? ` · ${esc(e.time)}` : ''} · ${whenText(daysUntil(e.date))}</small></span></li>`;
        }).join('')}</ul>`
      : '<p class="ld-none">No upcoming sessions</p>';
    return `<div class="ld2">
      <section class="ld-today" aria-label="Today's sessions">
        <header><p class="pj-kicker"><i class="sx-dot"></i>Today</p><b>${DAYS[t0.getDay()]}, ${t0.getDate()} ${MONTHS[t0.getMonth()]}</b><span>${todays.length} ${todays.length === 1 ? 'session' : 'sessions'}</span></header>
        ${todayHtml}
      </section>
      <section class="ld-up" aria-label="Upcoming sessions">
        <header><b>Upcoming</b><span>${up.length}</span></header>
        ${upHtml}
      </section>
    </div>`;
  };
  // Photo Gallery: album viewer (photo on a blurred copy, arrows, counter, thumbnails) + album cards
  let tgAlbum = 0, tgPhoto = 0;
  const teGallery = () => `<div class="tg" data-tg>
      <div class="tg-stage" data-tg-stage aria-live="polite"></div>
      <div class="tg-thumbs" data-tg-thumbs role="group" aria-label="Photos"></div>
      <div class="tg-albums-head"><b>${TE.albums[0] ? TE.albums[0].year : ''} albums</b><span>${TE.albums.length} albums</span></div>
      <div class="tg-albums">${TE.albums.map((al, i) => `<button type="button" class="tg-album" data-tg-album="${i}" aria-pressed="${i === tgAlbum}"><span class="tg-cover">${img(al.photos[0], '')}</span><span class="tg-album-t"><b>${esc(al.title)}</b><small>${al.count} photos</small></span></button>`).join('')}</div>
    </div>`;
  // Full-screen viewer for the Photo Gallery (shares tgAlbum / tgPhoto with the page viewer)
  function renderLb(bd) {
    const al = TE.albums[tgAlbum], n = al.photos.length; tgPhoto = ((tgPhoto % n) + n) % n;
    const src = al.photos[tgPhoto];
    $('[data-lb-title]', bd).textContent = al.title;
    $('[data-lb-count]', bd).textContent = `Photo ${tgPhoto + 1} of ${n}`;
    const st = $('[data-lb-stage]', bd);
    st.style.setProperty('--bg', `url('${src}')`);
    st.innerHTML = `${img(src, `${al.title}, photo ${tgPhoto + 1}`)}${n > 1 ? `<button type="button" class="lb-arrow prev" data-lb-step="-1" aria-label="Previous photo">${icon('chevL')}</button><button type="button" class="lb-arrow next" data-lb-step="1" aria-label="Next photo">${icon('chevR')}</button>` : ''}`;
    $('[data-lb-thumbs]', bd).innerHTML = n < 2 ? '' : al.photos.map((p, i) => `<button type="button" class="lb-thumb" data-lb-photo="${i}" aria-pressed="${i === tgPhoto}" aria-label="Photo ${i + 1}">${img(p, '')}</button>`).join('');
  }
  function renderTg() {
    const stage = $('[data-tg-stage]');
    if (!stage || !TE.albums.length) return;
    const al = TE.albums[tgAlbum], n = al.photos.length; tgPhoto = ((tgPhoto % n) + n) % n;
    const src = al.photos[tgPhoto];
    stage.style.setProperty('--bg', `url('${src}')`);
    stage.innerHTML = `${img(src, `${al.title}, photo ${tgPhoto + 1}`)}
      <div class="tg-cap"><span class="st-tag"><i class="sx-dot"></i>${esc(TE.galleryCategory)}</span><b>${esc(al.title)}</b><small>Photo ${tgPhoto + 1} of ${n}</small></div>
      ${n > 1 ? `<button type="button" class="tg-arrow prev" data-tg-step="-1" aria-label="Previous photo">${icon('chevL')}</button><button type="button" class="tg-arrow next" data-tg-step="1" aria-label="Next photo">${icon('chevR')}</button>` : ''}
      <button type="button" class="tg-expand" data-modal="gallery" aria-label="View photo full screen" title="Expand">${icon('expand')}</button>`;
    $('[data-tg-thumbs]').innerHTML = n < 2 ? '' : al.photos.map((p, i) => `<button type="button" class="tg-thumb" data-tg-photo="${i}" aria-pressed="${i === tgPhoto}" aria-label="Photo ${i + 1}">${img(p, '')}</button>`).join('');
    document.querySelectorAll('[data-tg-album]').forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.tgAlbum === tgAlbum)));
  }

  // ---------- Pages ----------
  const pages = {
    // Home — interactive dashboard: shortcuts, banners, birthdays, main column + side rail,
    // then the full-width recognition carousel (ERP winners / Everyday Hero) and job postings.
    home: () => `<div class="dash">
      ${dashShortcuts()}
      ${bannerCarousel()}
      ${dashBirthdays()}
      <div class="dash-cols">
        <div class="dash-main">
          ${dashMenu()}
          ${dashVideos()}
        </div>
        <aside class="dash-rail">
          ${dashHolidays()}
          ${dashLearning()}
        </aside>
      </div>
      ${dashReco()}
      ${dashJobs()}
    </div>`,

    corporate: () => `${corpMedia()}${corpPolicies()}${corpVideos()}`,

    // HR & Admin: Know Your Team (profile + HRD directory), Wish Your Colleagues, Applications, ERP Winners,
    // Job Postings, then Make a Request / Send Suggestions side by side.
    'hr-admin': () => `
      <div class="section hr-section" data-anchor="know-your-team">
        ${sectionHead('Know Your Team', 'Find out more about your team members.', `<div class="tools">${searchBox('Search employees...', 'data-filter-team')}${filterBtn()}</div>`)}
        <div class="row"><div class="c-8">${hrProfile()}</div><div class="c-4">${hrTeam()}</div></div>
      </div>
      ${hrWish()}
      ${hrApps()}
      ${hrErp()}
      ${jobsPanel(H.jobs, pagerOne, 'hr-jobs', 'cards', 'jobPostings')}
      <div class="row"><div class="c-6">${hrRequest()}</div><div class="c-6">${hrSuggest()}</div></div>`,

    'i-connect': () => `${icValues()}${icStories()}${icNews()}`,

    'training-events': () => `
      <div class="section te-section" data-anchor="learning-events">
        ${sectionHead('Learning &amp; Development', 'Explore upcoming training sessions and boost your skills')}
        <div class="row">
          <div class="c-8">${panel('Learning Events', teLD(), { right: viewAll('View all', 'modal:te-ld'), ico: 'school', sub: 'Training sessions and workshops', cls: 'te-panel ld-panel' })}</div>
          <div class="c-4">${calPanel('ld', D.learningEvents || [])}</div>
        </div>
      </div>

      <div class="section te-section" data-anchor="fun-at-work">
        ${sectionHead('Fun @ Work', 'Engage in exciting activities and make work more fun')}
        <div class="row">
          <div class="c-8">${panel('Events', teFun(), { right: viewAll('View all', 'modal:te-fun'), ico: 'celebration', sub: `${D.funEvents.filter((e) => daysUntil(e.date) >= 0).length} upcoming events`, cls: 'te-panel fw-panel' })}</div>
          <div class="c-4">${calPanel('fun', D.funEvents)}</div>
        </div>
      </div>

      <div class="section te-section" data-anchor="photo-gallery">
        ${sectionHead('Photo Gallery', 'Relive memories from events and milestones')}
        ${panel('Albums', teGallery(), { ico: 'image', sub: `${TE.albums.reduce((s, x) => s + x.count, 0)} photos across ${TE.albums.length} albums`, right: `<span class="tg-cat">${esc(TE.galleryCategory)}</span>`, cls: 'te-panel tg-panel' })}
      </div>`,

  };

  // ---------- Chrome ----------
  // Home's sub-links behave like production: hidden until Home is clicked, then shown as a dropdown.
  // Corporate's sub-links (Media / Policies / Video Gallery): the first click on "Corporate" only opens the page;
  // clicking "Corporate" again (while on it) shows the dropdown, and a further click hides it.
  let homeSubOpen = false;
  const subOpen = { corporate: false, 'hr-admin': false, 'i-connect': false, 'training-events': false };
  const isSubOpen = (id) => (id === 'home' ? homeSubOpen : subOpen[id]);
  function renderSidebar(active) {
    const subs = { home: D.home.sections, corporate: C.sections, 'hr-admin': HR.sections, 'i-connect': D.iconnect.sections, 'training-events': D.training.sections };
    const hasSub = (n) => n.id === active && subs[n.id];
    $('#sidebar').innerHTML = `
      <div class="brand">${img(D.logo, 'People First — An Oberoi Realty initiative')}</div>
      <nav class="nav-wrap"><ul class="nav">${D.nav.map((n) => {
        if (!hasSub(n)) return `<li><a href="#${n.id}" ${n.id === active ? 'aria-current="page"' : ''}><span class="nav-ico">${icon(n.icon)}</span>${n.label}</a></li>`;
        const open = isSubOpen(n.id);
        return `<li><a href="#${n.id}" aria-current="page" data-sub-toggle="${n.id}"${n.id === 'home' ? ' data-home-toggle' : ''} aria-expanded="${open}" aria-controls="${n.id}-subnav"><span class="nav-ico">${icon(n.icon)}</span>${n.label}<span class="nav-caret">${icon('chevR')}</span></a>
          <div class="subnav-wrap${open ? ' open' : ''}" id="${n.id}-subnav"><ul class="subnav">${subs[n.id].map((s) => `<li><a href="#${n.id}/${s.id}" data-sec-link="${s.id}"${open ? '' : ' tabindex="-1"'}>${s.label}</a></li>`).join('')}</ul></div></li>`;
      }).join('')}</ul></nav>`;
  }
  function renderTopbar(active) {
    const d = today;
    $('#topbar').innerHTML = `
      <div class="topbar-inner">
        <button type="button" class="menu-btn" aria-label="Open navigation" data-open-nav>${icon('menu')}</button>
        <div class="greet"><h1>Hello, <b>${esc(D.user.name)}!</b></h1><p class="greet-date">${icon('calendar')}Today is ${DAYS[d.getDay()]} ${ord(d.getDate())} ${MONTHS[d.getMonth()]} ${d.getFullYear()}</p></div>
        <div class="top-actions">
          <label class="search">${icon('search')}<span class="sr-only">Search</span><input type="search" placeholder="Search here..." /></label>
          <div class="tb-group">
            <button type="button" class="icon-btn theme-btn" data-theme-toggle aria-pressed="${isDark()}" aria-label="${themeLabel()}" title="${themeLabel()}"><span class="ic-moon">${icon('moon')}</span><span class="ic-sun">${icon('sun')}</span></button>
            <button type="button" class="icon-btn" aria-label="Calendar" data-modal="calendar">${icon('calendar')}<span class="badge${cdOn(isoOf(today0)).length ? '' : ' zero'}">${cdOn(isoOf(today0)).length}</span></button>
            <div class="tb-pop-wrap">
              <button type="button" class="icon-btn" aria-label="Messages" aria-haspopup="true" aria-expanded="false" aria-controls="msg-pop" data-pop="msg-pop">${icon('chat')}<span class="badge${D.chatCount ? '' : ' zero'}">${D.chatCount || 0}</span></button>
              <div class="tb-pop" id="msg-pop" hidden>
                <div class="tp-head">${icon('chat')}<b>Messages</b><span class="tp-count">${(D.messages || []).length}</span></div>
                <ul class="tp-list">${(D.messages || []).map((m) => `<li><button type="button" class="tp-item"><span class="tp-ico">${icon('chat')}</span><span class="tp-title">${esc(m.title)}</span><span class="tp-go">${icon('link')}</span></button></li>`).join('')}</ul>
              </div>
            </div>
            <div class="tb-pop-wrap">
              <button type="button" class="icon-btn" aria-label="Notifications" aria-haspopup="true" aria-expanded="false" aria-controls="notif-pop" data-pop="notif-pop">${icon('bell')}<span class="badge zero">0</span></button>
              <div class="tb-pop np-pop" id="notif-pop" hidden>
                <div class="tp-head">${icon('bell')}<b>Notifications</b><span class="tp-count zero">0</span></div>
                <div class="np-empty"><span class="np-art" aria-hidden="true">${icon('bell')}<i>${icon('check')}</i></span><b>You are up to date!</b><small>No new notifications. We'll let you know when something needs your attention.</small></div>
              </div>
            </div>
          </div>
          <button type="button" class="tb-profile" aria-label="Profile: ${esc(D.user.name)}">${avatar(D.user.name, 'avatar-sm')}<span class="tb-name">${esc(D.user.name)}</span><span class="tb-caret">${icon('chevR')}</span></button>
        </div>
      </div>
      ${active === 'home' ? `<div class="quickbar" id="quickbar"><ul>${D.quickBar.map((q) => `<li><a href="#home${q.target ? `/${q.target}` : ''}">${icon(q.icon)}${q.label}</a></li>`).join('')}</ul></div>` : ''}`;
  }

  function renderMenu(meal) {
    const box = $('[data-menu]');
    if (box) box.innerHTML = menuPanes(meal, D.menu.items[meal] || []);
  }

  // ---------- "View all" pop-ups (mirroring the live site: Birthdays, Weekly Menu, Holiday Calendar) ----------
  const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // Training & Events "View all": every event of the chosen year, grouped by month.
  const TE_LISTS = { 'te-ld': () => D.learningEvents || [], 'te-fun': () => D.funEvents || [] };
  function renderTev(bd) {
    const list = TE_LISTS[bd.dataset.kind]().slice().sort((x, y) => (x.date < y.date ? -1 : 1));
    const years = [...new Set(list.map((e) => +e.date.slice(0, 4)))].sort();
    let y = +bd.dataset.year;
    if (!years.includes(y)) y = years.includes(today.getFullYear()) ? today.getFullYear() : years[years.length - 1];
    bd.dataset.year = y;
    $('[data-tev-year]', bd).textContent = y;
    $('[data-tev-step="-1"]', bd).disabled = !years.some((v) => v < y);
    $('[data-tev-step="1"]', bd).disabled = !years.some((v) => v > y);
    const items = list.filter((e) => +e.date.slice(0, 4) === y);
    const months = [...new Set(items.map((e) => parse(e.date).getMonth()))];
    $('[data-tev-count]', bd).textContent = `${items.length} ${items.length === 1 ? 'event' : 'events'} in ${y}`;
    $('[data-tev-months]', bd).innerHTML = MONTHS.map((m, i) => `<button type="button" class="tev-m" data-tev-jump="${i}"${months.includes(i) ? '' : ' disabled'}>${m.slice(0, 3)}</button>`).join('');
    const body = $('[data-tev-body]', bd);
    body.innerHTML = months.length ? months.map((mi) => {
      const evs = items.filter((e) => parse(e.date).getMonth() === mi);
      return `<section class="tev-sec" data-tev-month="${mi}"><h3 class="tev-h">${MONTHS[mi]}<span>${evs.length}</span></h3><div class="tev-grid">${evs.map((e) => {
        const t = parse(e.date), n = daysUntil(e.date), past = n < 0;
        return `<article class="tev-card${past ? ' past' : ''}"><span class="desk-date${past ? ' later' : ''}"><small>${MON[t.getMonth()]}</small><b>${String(t.getDate()).padStart(2, '0')}</b></span>
          <span class="tev-t"><b>${esc(e.title)}</b><small>${e.place ? `${icon('place')}${esc(e.place)}` : `${icon('calendar')}${DAYS[t.getDay()]}`}</small></span>
          <span class="tev-st${past ? '' : ' up'}">${past ? 'Completed' : n === 0 ? 'Today' : `In ${n} ${n === 1 ? 'day' : 'days'}`}</span></article>`;
      }).join('')}</div></section>`;
    }).join('') : empty('No events this year', 'Try another year', 'event');
    body.scrollTop = 0;
  }

  // "View all stories" archive: category pills + search over every story; cards open the read view (with a way back).
  function renderSa(bd) {
    const pill = $('[data-sa-tag][aria-pressed="true"]', bd), tag = pill ? pill.dataset.saTag : 'All';
    const q = ($('[data-sa-search]', bd).value || '').trim().toLowerCase();
    let shown = 0;
    bd.querySelectorAll('[data-sa-item]').forEach((c) => { c.hidden = !((tag === 'All' || c.dataset.tag === tag) && c.textContent.toLowerCase().includes(q)); if (!c.hidden) shown += 1; });
    const [one, many] = $('.modal-newsletters', bd) ? ['article', 'articles'] : ['story', 'stories'];
    $('[data-sa-count]', bd).textContent = `${shown} ${shown === 1 ? one : many}`;
    $('[data-sa-empty]', bd).hidden = shown > 0;
  }

  // People Story pop-up — immersive article: full-width photo with tag, title, date, reading time and photo count over it
  // (round close button, reading-progress bar), then the story (drop-cap opening) beside a side column with the photos
  // (click to show at the top) and "More stories".
  function renderSr(bd, idx, shot = 0) {
    const news = bd.dataset.srSet === 'news', L = news ? IC.newsletters : IC.stories, i = ((idx % L.length) + L.length) % L.length, s = L[i], tag = s.tag || 'Newsletter';
    const pics = s.gallery && s.gallery.length ? s.gallery : [s.img], n = pics.length, k = ((shot % n) + n) % n;
    const paras = s.body && s.body.length ? s.body : [`${s.text.replace(/[\s,;:]+$/, '')}…`];
    const mins = Math.max(1, Math.round(paras.join(' ').split(/\s+/).length / 200));
    const others = [1, 2, 3].map((d) => (i + d) % L.length).filter((j, x, arr) => j !== i && arr.indexOf(j) === x);
    bd.dataset.srAt = i; bd.dataset.srPic = k;
    $('[data-sr]', bd).innerHTML = `
      <header class="rd-hero">
        <div class="rd-photo" style="--bg:url('${esc(pics[k])}')">${img(pics[k], s.title)}</div>
        <div class="rd-shade"></div>
        <div class="rd-bar"><span class="rd-bar-l">${bd.dataset.srFrom === 'archive' ? `<button type="button" class="rd-back" data-modal="${news ? 'newsletters' : 'stories'}">${icon('chevL')}${news ? 'All articles' : 'All stories'}</button>` : ''}<span class="st-tag"><i class="sx-dot"></i>${esc(tag)}</span></span><button type="button" class="rd-close" data-close-modal aria-label="Close">${icon('close')}</button></div>
        <div class="rd-head">
          <p class="rd-kicker">${news ? 'Newsletter' : 'People Story'}</p>
          <h2 id="modal-title">${esc(s.title)}</h2>
          <p class="rd-facts">${s.date ? `<span>${icon('calendar')}${esc(s.date)}</span>` : ''}<span>${icon('article')}${mins} min read</span>${n > 1 ? `<span>${icon('image')}${n} photos</span>` : ''}</p>
        </div>
      </header>
      <div class="rd-main">
        <article class="rd-article"><p class="rd-lede">${esc(paras[0])}</p>${paras.slice(1).map((p) => `<p>${esc(p)}</p>`).join('')}</article>
        <aside class="rd-side">
          ${n > 1 ? `<section class="rd-sec"><h4>Photos</h4><div class="rd-photos">${pics.map((p, j) => `<button type="button" class="rd-thumb" data-sr-shot="${j}" aria-pressed="${j === k}" aria-label="Show photo ${j + 1}">${img(p, '')}</button>`).join('')}</div></section>` : ''}
          ${others.length ? `<section class="rd-sec"><h4>${news ? 'More from this edition' : 'More stories'}</h4><div class="rd-more">${others.map((j) => `<button type="button" class="rd-next" data-sr-story="${j}"><span class="rd-next-img">${img(L[j].img, '')}</span><span class="rd-next-t"><small>${esc(L[j].tag || 'Newsletter')}</small><b>${esc(L[j].title)}</b></span></button>`).join('')}</div></section>` : ''}
        </aside>
      </div>`;
  }

  // Calendar drawer (top bar): every dated item on the intranet, by day
  const CD_TYPES = { holiday: 'Holiday', learning: 'Learning', fun: 'Fun @ Work' };
  const cdItems = () => [
    ...(D.holidays || []).map((h) => ({ ...h, type: 'holiday' })),
    ...(D.learningEvents || []).map((e) => ({ ...e, type: 'learning' })),
    ...(D.funEvents || []).map((e) => ({ ...e, type: 'fun' })),
  ];
  const isoOf = (t) => `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
  const cdOn = (iso) => cdItems().filter((x) => x.date === iso).sort((x, y) => ((x.time || '') < (y.time || '') ? -1 : 1));
  const cdRow = (x, withDate) => { const t = parse(x.date); return `<li class="cd-item cd-${x.type}">${withDate ? `<span class="desk-date${t.getMonth() !== today.getMonth() ? ' later' : ''}"><small>${MON[t.getMonth()]}</small><b>${String(t.getDate()).padStart(2, '0')}</b></span>` : `<span class="cd-bar"></span>`}
      <span class="cd-item-t"><span class="cd-type">${CD_TYPES[x.type]}</span><b>${esc(x.title)}</b>${x.time || x.place ? `<small>${[x.time, x.place].filter(Boolean).map(esc).join(' · ')}</small>` : ''}</span></li>`; };
  function renderCd(bd) {
    const y = +bd.dataset.y, m = +bd.dataset.m, sel = bd.dataset.sel, all = cdItems();
    const marks = new Set(all.map((x) => x.date));
    const first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate();
    let cells = ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => `<span class="cd-dow">${d}</span>`).join('');
    for (let i = 0; i < first; i++) cells += '<span></span>';
    for (let d = 1; d <= days; d++) {
      const iso = isoOf(new Date(y, m, d));
      cells += `<button type="button" class="cd-day${iso === isoOf(today0) ? ' today' : ''}${iso === sel ? ' sel' : ''}${marks.has(iso) ? ' has' : ''}" data-cd-day="${iso}" aria-pressed="${iso === sel}" aria-label="${d} ${MONTHS[m]}${marks.has(iso) ? ', has logs' : ''}">${d}</button>`;
    }
    $('[data-cd-month]', bd).textContent = `${MONTHS[m]} ${y}`;
    $('[data-cd-grid]', bd).innerHTML = cells;
    const st = parse(sel), isToday = sel === isoOf(today0), logs = cdOn(sel);
    $('[data-cd-day-h]', bd).innerHTML = `<b>${isToday ? 'Today' : `${DAYS[st.getDay()]}, ${st.getDate()} ${MONTHS[st.getMonth()]}`}</b><span>${logs.length} ${logs.length === 1 ? 'log' : 'logs'}</span>`;
    $('[data-cd-logs]', bd).innerHTML = logs.length ? `<ul class="cd-list">${logs.map((x) => cdRow(x, false)).join('')}</ul>`
      : `<div class="cd-empty"><span class="cd-empty-ico">${icon('event')}</span><b>No logs for the day</b><small>Holidays, training sessions and events will show up here.</small></div>`;
    const soon = all.filter((x) => x.date > sel).sort((p, q) => (p.date < q.date ? -1 : 1)).slice(0, 4);
    $('[data-cd-soon]', bd).innerHTML = soon.length ? `<p class="cd-soon-h">Coming up</p><ul class="cd-list soon">${soon.map((x) => cdRow(x, true)).join('')}</ul>` : '';
  }

  let modalOpener = null;

  function closeModal() {
    const bd = $('.modal-backdrop');
    if (!bd) return;
    bd.remove();
    document.body.style.overflow = '';
    // the opener may have been redrawn while the pop-up was open (e.g. the gallery expand button): focus its replacement
    if (modalOpener) (modalOpener.isConnected ? modalOpener : (modalOpener.dataset.modal && $(`[data-modal="${modalOpener.dataset.modal}"]`)) || modalOpener).focus();
  }

  function openModal(name, opener) {
    closeModal();
    modalOpener = opener || null;
    const head = (title, extra = '') => `<div class="modal-head"><h2 id="modal-title">${title}</h2>${extra}<button type="button" class="link modal-close" data-close-modal>Close</button></div>`;
    let body = '';
    if (name === 'birthdays') {
      body = `${head(H.birthdays.title)}
        <div class="modal-body">${bdayGreeting()}<ul class="bd-list">${H.birthdays.people.concat(H.birthdays.more || []).map((p) => bdayCard(p)).join('')}</ul></div>`;
    } else if (name === 'weekly-menu') {
      const today = DAYS[new Date().getDay()];
      body = `${head('Weekly Menu')}
        <div class="modal-body">
          <div class="wm-days" role="group" aria-label="Day">${WEEK.map((d) => `<button type="button" class="wm-day" data-wm-day="${d}" aria-pressed="${d === today}" aria-label="${d}"><span>${d.slice(0, 3)}</span><span class="wm-rest">${d.slice(3)}</span>${d === today ? '<em>Today</em>' : ''}</button>`).join('')}</div>
          <div class="tm-head">${mealTabs('data-wm-meal', D.menu.active)}</div>
          <div data-wm-list aria-live="polite"></div>
        </div>`;
    } else if (name === 'holiday-calendar') {
      const years = Object.keys(D.holidayYears).map(Number).sort();
      const year = years.includes(today.getFullYear()) ? today.getFullYear() : years[years.length - 1];
      const tabs = Object.keys(D.holidayYears[year]);
      body = `${head('Holiday Calendar', `<div class="year-nav" data-year="${year}"><button type="button" data-year-step="-1" aria-label="Previous year">${icon('chevL')}</button><b data-year-label>${year}</b><button type="button" data-year-step="1" aria-label="Next year">${icon('chevR')}</button></div>`)}
        <div class="modal-body holiday-rail">
          <div class="seg htabs" role="group" aria-label="Holiday type">${tabs.map((t, i) => `<button type="button" class="chip" data-htab="${t}" aria-pressed="${i === 0}">${t}</button>`).join('')}</div>
          <div class="ml-panes" data-hlist></div>
        </div>`;
    } else if (name === 'erp') {
      // ERP Winners — View all: quarter list (with winner counts) on the left, that quarter's winners on the right
      // Layout: fixed-size window → quarter strip (with counts) → gold summary band → two columns of winner cards.
      const all = erpArchive(), qs = Object.keys(all);
      body = `${head('<span class="ea-title">ERP Winners<small>Employee Recognition Program</small></span>', `<label class="field-search sm mwc-search">${icon('search')}<span class="sr-only">Search winners</span><input type="search" placeholder="Search winners..." data-ea-search /></label>`)}
        <div class="ea-strip" role="group" aria-label="Quarter">${qs.map((q, i) => `<button type="button" class="ea-q${all[q].length ? '' : ' is-empty'}" data-ea-q="${esc(q)}" aria-pressed="${i === 0}"><span class="ea-q-name">${esc(q)}</span><span class="ea-q-count">${all[q].length || '—'}</span></button>`).join('')}</div>
        <div class="modal-body ea-body" data-ea aria-live="polite"></div>`;
    } else if (name === 'stories') {
      const tags = [...new Set(IC.stories.map((s) => s.tag))];
      const count = (t) => (t === 'All' ? IC.stories.length : IC.stories.filter((s) => s.tag === t).length);
      body = `${head('<span class="ea-title">All People Stories<small>Every story shared by our colleagues</small></span>', `<label class="field-search sm mwc-search">${icon('search')}<span class="sr-only">Search stories</span><input type="search" placeholder="Search stories..." data-sa-search /></label>`)}
        <div class="sa-bar"><div class="pill-row" role="group" aria-label="Category">${['All', ...tags].map((t, i) => `<button type="button" class="pill" data-sa-tag="${esc(t)}" aria-pressed="${i === 0}">${esc(t)}<span>${count(t)}</span></button>`).join('')}</div><p class="sa-count" data-sa-count aria-live="polite"></p></div>
        <div class="modal-body sa-body"><div class="sa-grid">${IC.stories.map((st, i) => pjCard(st, i, 'tile', ` data-sa-item data-tag="${esc(st.tag)}" data-from="archive"`)).join('')}</div>
          <div data-sa-empty hidden>${empty('No stories found', 'Try another category or search term', 'article')}</div></div>`;
    } else if (name === 'calendar') {
      body = `<div class="cd-head"><div><h2 id="modal-title">Calendar</h2><p>Today · ${DAYS[today.getDay()]}, ${today.getDate()} ${MONTHS[today.getMonth()]} ${today.getFullYear()}</p></div><button type="button" class="cd-close" data-close-modal aria-label="Close calendar">${icon('close')}</button></div>
        <div class="cd-body">
          <div class="cd-cal"><div class="cd-cal-head"><b data-cd-month></b><span class="cal-nav"><button type="button" data-cd-step="-1" aria-label="Previous month">${icon('chevL')}</button><button type="button" data-cd-step="1" aria-label="Next month">${icon('chevR')}</button></span></div><div class="cd-grid" data-cd-grid></div></div>
          <div class="cd-day-h" data-cd-day-h></div>
          <div data-cd-logs aria-live="polite"></div>
          <div data-cd-soon></div>
        </div>`;
    } else if (name === 'gallery') {
      body = `<div class="lb-top"><div class="lb-title"><span class="st-tag"><i class="sx-dot"></i>${esc(TE.galleryCategory)}</span><b id="modal-title" data-lb-title></b><small data-lb-count></small></div>
          <button type="button" class="lb-close" data-close-modal aria-label="Close full screen">${icon('close')}</button></div>
        <div class="lb-stage" data-lb-stage aria-live="polite"></div>
        <div class="lb-thumbs" data-lb-thumbs role="group" aria-label="Photos"></div>`;
    } else if (name === 'te-ld' || name === 'te-fun') {
      const ttl = name === 'te-ld' ? 'Learning &amp; Development Events' : 'Fun @ Work Events';
      body = `${head(`<span class="ea-title">${ttl}<small data-tev-count></small></span>`, `<div class="year-nav tev-year"><button type="button" data-tev-step="-1" aria-label="Previous year">${icon('chevL')}</button><b data-tev-year></b><button type="button" data-tev-step="1" aria-label="Next year">${icon('chevR')}</button></div>`)}
        <div class="tev-months" data-tev-months role="group" aria-label="Jump to month"></div>
        <div class="modal-body tev-body" data-tev-body aria-live="polite"></div>`;
    } else if (name === 'newsletters') {
      body = `${head('<span class="ea-title">Past Newsletters<small>Every article from our newsletter</small></span>', `<label class="field-search sm mwc-search">${icon('search')}<span class="sr-only">Search articles</span><input type="search" placeholder="Search articles..." data-sa-search /></label>`)}
        <div class="sa-bar"><p class="sa-lead">All articles</p><p class="sa-count" data-sa-count aria-live="polite"></p></div>
        <div class="modal-body sa-body"><div class="sa-grid">${IC.newsletters.map((n, i) => `<button type="button" class="pj-card pj-tile" data-sa-item${nwOpen(i, 'archive')}>
          <span class="pj-media">${img(n.img, '')}</span><span class="pj-tag"><i class="sx-dot"></i>Newsletter</span>
          <span class="pj-copy"><b class="pj-title">${esc(n.title)}</b><span class="pj-go">Read article${icon('arrowR')}</span></span></button>`).join('')}</div>
          <div data-sa-empty hidden>${empty('No articles found', 'Try a different search term', 'article')}</div></div>`;
    } else if (name === 'story') {
      body = `<div class="rd-progress" aria-hidden="true"><i data-rd-bar></i></div><div class="rd-body" data-sr></div>`;
    } else if (name === 'colleagues') {
      // Wish Your Colleagues — View all: tabs with counts, colleague search, "Today" + upcoming/recent groups
      const tabs = Object.keys(HR.colleagues);
      const count = (t) => (HR.colleagues[t] || []).length;
      body = `${head('Wish Your Colleagues', `<label class="field-search sm mwc-search">${icon('search')}<span class="sr-only">Search colleagues</span><input type="search" placeholder="Search colleagues..." data-mwc-search /></label>`)}
        <div class="modal-body">
          <div class="pill-row" role="group" aria-label="Celebration type">${tabs.map((t, i) => `<button type="button" class="pill" data-mwc-tab="${esc(t)}" aria-pressed="${t === wcTab}">${esc(t)}<span>${count(t)}</span></button>`).join('')}</div>
          <div class="mwc" data-mwc aria-live="polite"></div>
        </div>`;
    } else return;
    const bd = document.createElement('div');
    bd.className = 'modal-backdrop';
    bd.innerHTML = `<div class="modal modal-${name}" role="dialog" aria-modal="true" aria-labelledby="modal-title">${body}</div>`;
    document.body.appendChild(bd);
    document.body.style.overflow = 'hidden';
    bd.addEventListener('click', (e) => {
      if (e.target === bd || e.target.closest('[data-close-modal]')) return closeModal();
      const day = e.target.closest('[data-wm-day]');
      const meal = e.target.closest('[data-wm-meal]');
      const htab = e.target.closest('[data-htab]');
      const more = e.target.closest('[data-ea-more]');
      if (more) {
        const cardEl = more.closest('.ea-card');
        const open = !cardEl.classList.contains('open');
        cardEl.classList.toggle('open', open);
        more.setAttribute('aria-expanded', String(open));
        more.firstChild.textContent = open ? 'Show less' : 'Read more';
        return;
      }
      const srStep = e.target.closest('[data-sr-step]'), srShot = e.target.closest('[data-sr-shot]'), srStory = e.target.closest('[data-sr-story]');
      if (srStep || srShot) { renderSr(bd, +bd.dataset.srAt, srShot ? +srShot.dataset.srShot : +bd.dataset.srPic + +srStep.dataset.srStep); $(srShot ? `[data-sr-shot="${srShot.dataset.srShot}"]` : `[data-sr-step="${srStep.dataset.srStep}"]`, bd)?.focus(); return; }
      if (srStory) { renderSr(bd, +srStory.dataset.srStory); $('[data-sr]', bd).scrollTop = 0; $('.rd-close', bd)?.focus({ preventScroll: true }); return; }
      const cdStep = e.target.closest('[data-cd-step]'), cdDay = e.target.closest('[data-cd-day]');
      if (cdStep) { const t = new Date(+bd.dataset.y, +bd.dataset.m + +cdStep.dataset.cdStep, 1); bd.dataset.y = t.getFullYear(); bd.dataset.m = t.getMonth(); renderCd(bd); return; }
      if (cdDay) { bd.dataset.sel = cdDay.dataset.cdDay; renderCd(bd); $(`[data-cd-day="${cdDay.dataset.cdDay}"]`, bd)?.focus(); return; }
      const lbStep = e.target.closest('[data-lb-step]'), lbPh = e.target.closest('[data-lb-photo]');
      if (lbStep || lbPh) { if (lbPh) tgPhoto = +lbPh.dataset.lbPhoto; else tgPhoto += +lbStep.dataset.lbStep; renderLb(bd); renderTg(); if (lbStep) $(`[data-lb-step="${lbStep.dataset.lbStep}"]`, bd)?.focus(); return; }
      const tevStep = e.target.closest('[data-tev-step]'), tevJump = e.target.closest('[data-tev-jump]');
      if (tevStep && !tevStep.disabled) { bd.dataset.year = +bd.dataset.year + +tevStep.dataset.tevStep; renderTev(bd); return; }
      if (tevJump && !tevJump.disabled) { const sec = $(`[data-tev-month="${tevJump.dataset.tevJump}"]`, bd), b = $('[data-tev-body]', bd); if (sec) b.scrollTo({ top: sec.offsetTop - b.offsetTop, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return; }
      const saTag = e.target.closest('[data-sa-tag]');
      if (saTag) { saTag.parentElement.querySelectorAll('[data-sa-tag]').forEach((c) => c.setAttribute('aria-pressed', String(c === saTag))); renderSa(bd); return; }
      const eaQ = e.target.closest('[data-ea-q]');
      if (eaQ) {
        eaQ.parentElement.querySelectorAll('[data-ea-q]').forEach((c) => c.setAttribute('aria-pressed', String(c === eaQ)));
        renderEa(bd);
        return;
      }
      const mwcTab = e.target.closest('[data-mwc-tab]');
      if (mwcTab) {
        mwcTab.parentElement.querySelectorAll('[data-mwc-tab]').forEach((c) => c.setAttribute('aria-pressed', String(c === mwcTab)));
        renderMwc(bd);
        return;
      }
      const ystep = e.target.closest('[data-year-step]');
      if (day || meal || htab) {
        const btn = day || meal || htab;
        btn.parentElement.querySelectorAll('button').forEach((c) => c.setAttribute('aria-pressed', String(c === btn)));
      }
      if (day || meal) renderWeeklyMenu(bd);
      if (htab) renderHolidayList(bd);
      if (ystep && !ystep.disabled) {
        const nav = $('.year-nav', bd);
        nav.dataset.year = +nav.dataset.year + +ystep.dataset.yearStep;
        renderHolidayList(bd);
      }
    });
    if (name === 'weekly-menu') renderWeeklyMenu(bd); else if (name === 'holiday-calendar') renderHolidayList(bd); else if (name === 'colleagues') renderMwc(bd); else if (name === 'erp') renderEa(bd); else if (name === 'stories' || name === 'newsletters') renderSa(bd); else if (name === 'gallery') { bd.classList.add('lb-backdrop'); renderLb(bd); } else if (name === 'calendar') { bd.classList.add('drawer-backdrop'); bd.dataset.y = today.getFullYear(); bd.dataset.m = today.getMonth(); bd.dataset.sel = isoOf(today0); renderCd(bd); } else if (name === 'te-ld' || name === 'te-fun') { bd.dataset.kind = name; bd.dataset.year = today.getFullYear(); renderTev(bd); } else if (name === 'story') {
      bd.dataset.srFrom = (opener && opener.dataset.from) || '';
      bd.dataset.srSet = (opener && opener.dataset.set) || 'stories';
      renderSr(bd, +((opener && opener.dataset.story) || 0));
      const sc = $('[data-sr]', bd), bar = $('[data-rd-bar]', bd);
      sc.addEventListener('scroll', () => { bar.style.transform = `scaleX(${sc.scrollTop / Math.max(1, sc.scrollHeight - sc.clientHeight)})`; }, { passive: true });
    }
    $('[data-close-modal]', bd).focus();
  }

  // Wish Your Colleagues pop-up: everyone in the chosen tab as one list, filtered by the search box.
  // All tabs are rendered into the same grid cell (only the chosen one visible), so the pop-up keeps the height of the
  // fullest tab and never resizes when switching tabs or searching (same technique as Today's Menu / Policies).
  function renderMwc(bd) {
    const active = $('[data-mwc-tab][aria-pressed="true"]', bd).dataset.mwcTab;
    const q = ($('[data-mwc-search]', bd).value || '').trim().toLowerCase();
    const match = (p) => !q || `${p.name} ${p.role} ${p.dept}`.toLowerCase().includes(q);
    const pane = (tab, filter) => {
      const ico = WC_ICON[tab] || 'celebration';
      const list = (HR.colleagues[tab] || []).filter(filter);
      return list.length
        ? `<ul class="bd-list">${list.map((p) => wcCard(p, ico)).join('')}</ul>`
        : empty(q ? 'No matching colleagues' : `No ${tab.toLowerCase()} to show`, q ? 'Try another name, role or department' : 'Check back soon', ico);
    };
    // visible pane = chosen tab with the search applied; hidden panes = every tab unfiltered (they only hold the height)
    $('[data-mwc]', bd).innerHTML = `<div class="ml-pane mwc-pane">${pane(active, match)}</div>`
      + Object.keys(HR.colleagues).map((t) => `<div class="ml-pane mwc-pane" aria-hidden="true" inert>${pane(t, () => true)}</div>`).join('');
  }

  // ERP archive pop-up: gold summary band (medal, quarter, count, winner photos) and the winners as two columns of
  // horizontal cards (gold-ringed photo, serif name, role, 3-line citation with Read more), filtered by the search box.
  // The window has a fixed size and scrolls inside, so switching quarters or searching never changes its size.
  function renderEa(bd) {
    const all = erpArchive();
    const active = $('[data-ea-q][aria-pressed="true"]', bd).dataset.eaQ;
    const term = ($('[data-ea-search]', bd).value || '').trim().toLowerCase();
    const people = all[active] || [];
    const list = people.filter((p) => !term || `${p.name} ${p.role}`.toLowerCase().includes(term));
    const n = people.length;
    const summary = `<div class="ea-summary">
        <span class="ea-sum-medal">${icon('verified')}</span>
        <div class="ea-sum-text"><small>Employee Recognition Program</small><h3>${esc(active)}</h3><span>${n ? `${n} winner${n === 1 ? '' : 's'} recognised` : 'Winners to be announced'}</span></div>
        ${n ? `<div class="ea-stack" aria-hidden="true">${people.slice(0, 5).map((p) => `<span>${erpPhoto(p)}</span>`).join('')}${n > 5 ? `<span class="ea-more">+${n - 5}</span>` : ''}</div>` : ''}
      </div>`;
    const card = (p) => `<article class="ea-card">
        <span class="ea-av">${erpPhoto(p)}</span>
        <div class="ea-info">
          <div class="ea-who"><b>${esc(p.name)}</b><span>${esc(p.role)}</span></div>
          <blockquote class="ea-quote">${esc(p.text)}</blockquote>
          <button type="button" class="ea-readmore" data-ea-more aria-expanded="false">Read more${icon('chevR')}</button>
        </div>
        <span class="ea-medal" aria-hidden="true">${icon('verified')}</span>
      </article>`;
    const content = list.length
      ? `<div class="ea-grid">${list.map(card).join('')}</div>`
      : `<div class="ew-empty ea-empty"><span class="ew-empty-ico">${icon('verified')}</span>${term
        ? '<b>No matching winners</b><span>Try another name or role</span>'
        : `<b>Winners for ${esc(active)} will appear here</b><span>No winners have been announced for this quarter yet.</span>`}</div>`;
    const body = $('[data-ea]', bd);
    body.innerHTML = summary + content;
    body.scrollTop = 0;
    // show "Read more" only where the citation is actually clamped
    body.querySelectorAll('.ea-card').forEach((c) => { const qEl = $('.ea-quote', c); $('[data-ea-more]', c).hidden = qEl.scrollHeight <= qEl.clientHeight + 2; });
  }

  // Only today's menu exists in this prototype's data; other days show an empty list.
  function renderWeeklyMenu(bd) {
    const day = $('[data-wm-day][aria-pressed="true"]', bd).dataset.wmDay;
    const meal = $('[data-wm-meal][aria-pressed="true"]', bd).dataset.wmMeal;
    const items = day === DAYS[new Date().getDay()] ? D.menu.items[meal] || [] : [];
    $('[data-wm-list]', bd).innerHTML = menuPanes(meal, items, `${meal} menu for ${day} has not been added.`);
  }

  function renderHolidayList(bd) {
    const nav = $('.year-nav', bd);
    const year = +nav.dataset.year;
    const data = D.holidayYears[year] || {};
    $('[data-year-label]', bd).textContent = year;
    nav.querySelectorAll('[data-year-step]').forEach((b) => { b.disabled = !D.holidayYears[year + +b.dataset.yearStep]; });
    const tab = $('[data-htab][aria-pressed="true"]', bd).dataset.htab;
    const tabs = Object.keys(data);
    const list = (t) => `<ul class="date-list hgrid">${(data[t] || []).map((row) => {
      const [date, title] = row.split('|');
      const [dd, mon] = date.split(' ');
      return `<li class="date-item${t !== tabs[0] ? ' later' : ''}"><div class="date-badge"><b>${dd}</b><small>${mon}</small></div><span class="title">${esc(title)}</span></li>`;
    }).join('')}</ul>`;
    // Every tab's list sits in the same grid cell (inactive ones hidden), so the pop-up keeps the height of the
    // longest list and doesn't jump when switching tabs.
    $('[data-hlist]', bd).innerHTML = tabs.map((t) => (t === tab
      ? `<div class="ml-pane">${list(t)}</div>`
      : `<div class="ml-pane" aria-hidden="true" inert>${list(t)}</div>`)).join('');
  }

  // Hash format: #page or #page/section (e.g. #corporate/videos, #hr-admin/jobPostings — same as the live site).
  function route() {
    const [id, section] = (location.hash || '#home').slice(1).split('/');
    const active = pages[id] ? id : 'home';
    closeModal();
    document.body.classList.remove('nav-open');
    renderSidebar(active);
    renderTopbar(active);
    const content = $('#content');
    content.innerHTML = `<div class="page">${pages[active]()}</div>`;
    content.querySelectorAll('[data-cal]').forEach(renderCal);
    renderMenu(D.menu.active);
    initCarousel();
    if (active === 'home') { initDash(); initReco(); if (section === 'everyday-hero') recoGo(1); }
    if (active === 'corporate') { renderCv(); initMedia(); }
    if (active === 'hr-admin') { renderWc(); renderErp(); }
    if (active === 'training-events') renderTg();
    const target = section && content.querySelector(`[data-anchor="${section}"]`);
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
    onScroll();
  }

  const currentPage = () => {
    const id = (location.hash || '#home').slice(1).split('/')[0];
    return pages[id] ? id : 'home';
  };
  // Sections that have sidebar sub-links (scroll-spy + smooth in-page scrolling).
  const pageSections = () => ({ home: D.home.sections, corporate: C.sections, 'hr-admin': HR.sections, 'i-connect': D.iconnect.sections, 'training-events': D.training.sections })[currentPage()] || [];

  function onScroll() {
    const y = window.scrollY;
    $('#topbar').classList.toggle('scrolled', y > 8);
    const qb = $('#quickbar');
    if (qb) qb.classList.toggle('show', y > 260);
    // Scroll-spy for the Home sub-links: the visible section whose top sits closest to the header line.
    // (Main column and side rail scroll together, so "last passed" would favour the rail.)
    const links = document.querySelectorAll('[data-sec-link]');
    if (links.length) {
      let cur = '';
      if (spyLock && Date.now() < spyLock.until) cur = spyLock.id;
      else {
        const line = $('#topbar').getBoundingClientRect().bottom + 20;
        let best = Infinity;
        pageSections().forEach((s) => {
          const el = $(`[data-anchor="${s.id}"]`);
          if (!el) return;
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.top - line);
          if (r.top <= line + 80 && r.bottom > line && dist < best) { best = dist; cur = s.id; }
        });
      }
      links.forEach((a) => a.classList.toggle('on', a.dataset.secLink === cur));
    }
  }
  let spyLock = null;

  // ---------- Events (UI state only) ----------
  // Top-bar pop-ups (messages): toggle from the button, close on outside click or Esc.
  function closePops(except) {
    document.querySelectorAll('[data-pop]').forEach((b) => {
      if (b === except) return;
      b.setAttribute('aria-expanded', 'false');
      const pop = document.getElementById(b.dataset.pop);
      if (pop) pop.hidden = true;
    });
  }
  document.addEventListener('click', (e) => {
    const popBtn = e.target.closest('[data-pop]');
    if (popBtn) {
      const pop = document.getElementById(popBtn.dataset.pop);
      const open = pop.hidden;
      closePops(popBtn);
      if (open && matchMedia('(max-width: 680px)').matches) {
        const r = popBtn.getBoundingClientRect();
        pop.style.setProperty('--pop-top', `${Math.round(r.bottom + 12)}px`);
        pop.style.setProperty('--caret-x', `${Math.round(innerWidth - 12 - (r.left + r.width / 2) - 7)}px`);
      }
      pop.hidden = !open;
      popBtn.setAttribute('aria-expanded', String(open));
      return;
    }
    if (!e.target.closest('.tb-pop')) closePops();
    if (e.target.closest('[data-theme-toggle]')) { setTheme(isDark() ? 'light' : 'dark'); return; }
    const opener = e.target.closest('[data-modal]');
    if (opener) { openModal(opener.dataset.modal, opener); return; }
    // Sidebar "Home" / "Corporate": on that page the link toggles its sub-link dropdown.
    // Arriving from another page: Home opens with its dropdown shown; Corporate opens with it hidden (second click shows it).
    const subLink = e.target.closest('.nav a[href="#home"], .nav a[href="#corporate"], .nav a[href="#hr-admin"], .nav a[href="#i-connect"], .nav a[href="#training-events"]');
    if (subLink) {
      const id = subLink.getAttribute('href').slice(1);
      if (currentPage() === id) {
        e.preventDefault();
        const open = !isSubOpen(id);
        if (id === 'home') homeSubOpen = open; else subOpen[id] = open;
        const wrap = $(`#${id}-subnav`);
        if (wrap) {
          wrap.classList.toggle('open', open);
          wrap.querySelectorAll('a').forEach((a) => (open ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')));
        }
        subLink.setAttribute('aria-expanded', String(open));
      } else if (id === 'home') homeSubOpen = true;
      else subOpen[id] = false;
      return;
    }
    // In-page dashboard links (sub-nav, shortcuts, quick bar): smooth-scroll instead of re-rendering Home.
    const page = currentPage();
    const inPage = e.target.closest(`a[href^="#${page}/"]`);
    if (inPage) {
      const id = inPage.getAttribute('href').split('/')[1];
      const t = $(`[data-anchor="${id}"]`);
      if (t) {
        e.preventDefault();
        document.body.classList.remove('nav-open');
        spyLock = pageSections().some((s) => s.id === id) ? { id, until: Date.now() + 1200 } : null;
        if (id === 'everyday-hero') recoGo(1); // the Everyday Hero shortcut opens the carousel on its first hero slide
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${page}/${id}`);
        onScroll();
        return;
      }
    }
    const wcBtn = e.target.closest('[data-wc-tab]');
    if (wcBtn) { wcTab = wcBtn.dataset.wcTab; renderWc(); return; }
    const erpBtn = e.target.closest('[data-erp-q]');
    if (erpBtn) { erpQ = erpBtn.dataset.erpQ; renderErp(); return; }
    const tgAl = e.target.closest('[data-tg-album]'), tgPh = e.target.closest('[data-tg-photo]'), tgSt = e.target.closest('[data-tg-step]');
    if (tgAl || tgPh || tgSt) {
      if (tgAl) { tgAlbum = +tgAl.dataset.tgAlbum; tgPhoto = 0; } else if (tgPh) tgPhoto = +tgPh.dataset.tgPhoto; else tgPhoto += +tgSt.dataset.tgStep;
      renderTg();
      if (tgSt) $(`[data-tg-step="${tgSt.dataset.tgStep}"]`)?.focus();
      return;
    }
    const evDay = e.target.closest('[data-ev-day]');
    if (evDay) {
      const hits = [...document.querySelectorAll(`[data-ev="${evDay.dataset.evDay}"]`)];
      hits.forEach((h) => { h.classList.remove('flash'); void h.offsetWidth; h.classList.add('flash'); });
      if (hits[0]) hits[0].scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      return;
    }
    const againBtn = e.target.closest('[data-hf-again]');
    if (againBtn) { hfReset(againBtn.closest('form')); return; }
    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      const done = () => { copyBtn.classList.add('copied'); copyBtn.title = 'Copied'; setTimeout(() => { copyBtn.classList.remove('copied'); copyBtn.title = 'Copy email'; }, 1500); };
      try { navigator.clipboard.writeText(copyBtn.dataset.copy).then(done, done); } catch (err) { done(); }
      return;
    }
    const polTab = e.target.closest('[data-pol-tab]');
    if (polTab) {
      polTab.parentElement.querySelectorAll('[data-pol-tab]').forEach((b) => b.setAttribute('aria-pressed', String(b === polTab)));
      filterPolicies();
      return;
    }
    const cvTab = e.target.closest('[data-cv-tab]');
    if (cvTab) { cvCat = cvTab.dataset.cvTab; cvIdx = 0; renderCv(); return; }
    const cvItem = e.target.closest('[data-cv-item]');
    if (cvItem) { cvIdx = +cvItem.dataset.cvItem; renderCv(); return; }
    const cvStep = e.target.closest('[data-cv-step]');
    if (cvStep && !cvStep.disabled) { cvIdx = Math.max(0, Math.min(cvList().length - 1, cvIdx + +cvStep.dataset.cvStep)); renderCv(); return; }
    const hs = e.target.closest('[data-hs]');
    if (hs) {
      const sc = hs.closest('.panel, .hero-band').querySelector('[data-scroller]');
      sc.scrollBy({ left: +hs.dataset.hs * Math.max(220, sc.clientWidth * 0.8), behavior: 'smooth' });
      return;
    }
    const dot = e.target.closest('[data-page]');
    if (dot) {
      const sc = dot.closest('.hero-band').querySelector('[data-scroller]');
      sc.scrollTo({ left: +dot.dataset.page * sc.clientWidth, behavior: 'smooth' });
      return;
    }
    const ms = e.target.closest('[data-mstep]');
    if (ms) {
      const mc = ms.closest('[data-mini-cal]');
      const dt = new Date(+mc.dataset.y, +mc.dataset.m + +ms.dataset.mstep, 1);
      mc.dataset.y = dt.getFullYear();
      mc.dataset.m = dt.getMonth();
      renderMiniCal(mc);
      return;
    }
    // Clicking a holiday date in the mini calendar highlights it in the list below.
    const day = e.target.closest('[data-mini-cal] .day.has');
    if (day) {
      document.querySelectorAll('.hol-w .date-item.hl').forEach((h) => h.classList.remove('hl'));
      const item = $(`.hol-w .date-item[data-date="${day.dataset.date}"]`);
      if (item) { item.classList.add('hl'); item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
      return;
    }
    const step = e.target.closest('[data-step]');
    if (step) {
      const cal = step.closest('[data-cal]');
      const dt = new Date(+cal.dataset.y, +cal.dataset.m + +step.dataset.step, 1);
      cal.dataset.y = dt.getFullYear();
      cal.dataset.m = dt.getMonth();
      renderCal(cal);
      return;
    }
    const vg = e.target.closest('[data-vg]');
    if (vg) {
      vg.closest('.vg-list').querySelectorAll('[data-vg]').forEach((b) => b.setAttribute('aria-pressed', String(b === vg)));
      $('[data-vg-feature]').innerHTML = vgFeature(H.videos[+vg.dataset.vg]);
      return;
    }
    const chip = e.target.closest('[data-meal]');
    if (chip) {
      chip.parentElement.querySelectorAll('[data-meal]').forEach((c) => c.setAttribute('aria-pressed', c === chip));
      renderMenu(chip.dataset.meal);
      return;
    }
    if (e.target.closest('[data-open-nav]')) document.body.classList.add('nav-open');
    if (e.target.closest('[data-close-nav]')) document.body.classList.remove('nav-open');
  });

  document.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (e.target.matches('[data-filter-jobs]')) {
      e.target.closest('section').querySelectorAll('.job').forEach((j) => { j.hidden = !$('h3', j).textContent.toLowerCase().includes(q); });
    }
    if (e.target.matches('[data-filter-policies]')) filterPolicies();
    if (e.target.matches('[data-filter-team]')) {
      let shown = 0;
      document.querySelectorAll('[data-team] .hr-person').forEach((li) => { li.hidden = !li.textContent.toLowerCase().includes(q); if (!li.hidden) shown += 1; });
      // hide a letter header when none of its people are shown
      document.querySelectorAll('[data-team] .hr-letter').forEach((h) => { h.hidden = !document.querySelector(`[data-team] .hr-person[data-letter-of="${h.dataset.letter}"]:not([hidden])`); });
      const none = $('[data-team-empty]');
      if (none) none.hidden = shown > 0;
    }
    if (e.target.matches('[data-mwc-search]')) renderMwc(e.target.closest('.modal-backdrop'));
    if (e.target.matches('[data-ea-search]')) renderEa(e.target.closest('.modal-backdrop'));
    if (e.target.matches('[data-sa-search]')) renderSa(e.target.closest('.modal-backdrop'));
    if (e.target.matches('[data-count]')) {
      const out = e.target.closest('form').querySelector('[data-count-out]');
      if (out) { out.textContent = `${e.target.value.length} / ${e.target.maxLength}`; out.classList.toggle('near', e.target.value.length >= e.target.maxLength - 50); }
    }
    if (e.target.matches('[data-filter-ic]')) {
      const root = e.target.closest('.panel');
      let shown = 0;
      root.querySelectorAll('[data-ic-item]').forEach((it) => { it.hidden = !it.textContent.toLowerCase().includes(q); if (!it.hidden) shown += 1; });
      root.querySelectorAll('[data-ic-extra]').forEach((x) => { x.hidden = !!q; });
      $('[data-ic-empty]', root).hidden = shown > 0;
      const nwl = $('.nw-layout', root);
      if (nwl) { nwl.classList.toggle('no-cover', $('.nw-cover', root).hidden); nwl.classList.toggle('no-index', !root.querySelector('.nw-list li:not([hidden])')); nwl.hidden = shown === 0; }
      const pjg = $('[data-pj-grid]', root);
      if (pjg) { pjg.classList.toggle('is-filtered', !!q); pjg.hidden = shown === 0; }
    }
    const hf = e.target.closest('[data-hf]');
    if (hf) hfMsg(hf);
  });

  // Make a Request / Send Suggestions: check, then swap to the "sent" layer in place (prototype: nothing is sent).
  function hfMsg(form, err = '') {
    const msg = $('[data-hf-msg]', form);
    form.classList.toggle('has-error', !!err);
    form.querySelectorAll('.hf-invalid').forEach((el) => el.classList.remove('hf-invalid'));
    msg.classList.toggle('is-error', !!err);
    msg.innerHTML = `${icon(err ? 'info' : msg.dataset.ico)}<span>${err || msg.dataset.note}</span>`;
  }
  function hfReset(form) {
    form.reset();
    form.classList.remove('is-sent');
    hfMsg(form);
    const out = $('[data-count-out]', form);
    if (out) { out.textContent = '0 / 500'; out.classList.remove('near'); }
    const done = $('.hf-done', form);
    done.setAttribute('aria-hidden', 'true'); done.inert = true;
    form.querySelectorAll('.hf-group, .hf-foot, .hf-main').forEach((el) => { el.inert = false; });
    $('input, textarea', form).focus();
  }
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-hf]');
    if (!form) return;
    e.preventDefault();
    const text = $('textarea', form);
    const needType = form.dataset.hf === 'request' && !form.querySelector('input[name="type"]:checked');
    const noText = !text.value.trim();
    if (needType || noText) {
      hfMsg(form, needType && noText ? 'Choose a request type and add the details.' : needType ? 'Choose a request type.' : form.dataset.hf === 'request' ? 'Add a few details about your request.' : 'Write your suggestion first.');
      if (needType) $('.hf-tiles', form).classList.add('hf-invalid');
      if (noText) text.closest('.hf-box').classList.add('hf-invalid');
      (needType ? $('input[name="type"]', form) : text).focus();
      return;
    }
    form.classList.add('is-sent');
    form.querySelectorAll('.hf-group, .hf-foot, .hf-main').forEach((el) => { el.inert = true; });
    const done = $('.hf-done', form);
    done.removeAttribute('aria-hidden'); done.inert = false;
    $('[data-hf-again]', done).focus();
  });


  document.addEventListener('keydown', (e) => {
    const srBd = $('.modal-story') && $('.modal-story').closest('.modal-backdrop');
    if (srBd && (e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !(e.target.matches && e.target.matches('input, textarea')) && $('.rd-thumb', srBd)) { renderSr(srBd, +srBd.dataset.srAt, +srBd.dataset.srPic + (e.key === 'ArrowRight' ? 1 : -1)); }
  });
  document.addEventListener('keydown', (e) => {
    const lb = $('.modal-gallery') && $('.modal-gallery').closest('.modal-backdrop');
    if (lb && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { tgPhoto += e.key === 'ArrowRight' ? 1 : -1; renderLb(lb); renderTg(); }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closePops(); document.body.classList.remove('nav-open'); } });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    document.querySelectorAll('[data-scroller]').forEach(updateScroller);
    if ($('[data-wc]')) {
      // re-measure at the new width from the fullest tab (Birthdays), then restore the current tab
      const keepWc = wcTab;
      wcMinH = 0; wcTab = Object.keys(HR.colleagues)[0]; renderWc();
      wcTab = keepWc; renderWc();
    }
    if ($('[data-cv]')) {
      // Re-measure at the new width from the tallest content (first film), then restore the current selection.
      const keep = [cvCat, cvIdx];
      cvMinH = 0; cvCat = C.videoCats[0]; cvIdx = 0; renderCv();
      [cvCat, cvIdx] = keep; renderCv();
    }
  });
  // Hovering a holiday highlights its date in the mini calendar.
  document.addEventListener('mouseover', (e) => {
    const h = e.target.closest('.hol-w .date-item');
    if (!h) return;
    const d = $(`[data-mini-cal] .day[data-date="${h.dataset.date}"]`);
    if (d) d.classList.add('hl');
  });
  document.addEventListener('mouseout', (e) => {
    const h = e.target.closest('.hol-w .date-item');
    if (h && !h.contains(e.relatedTarget)) document.querySelectorAll('[data-mini-cal] .day.hl').forEach((d) => d.classList.remove('hl'));
  });
  window.addEventListener('hashchange', route);
  route();
})();

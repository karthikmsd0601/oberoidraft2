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
    campaign: 'M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z',
    doc: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    article: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    celebration: 'M2 22l14-5-9-9-5 14zm10.35-5.82L6.65 18.3l2.06-5.68 3.64 3.56zM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06zM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.47.48 1.28 0 1.76z',
    mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    phone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    supervisor: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z',
    verified: 'M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z',
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${P[name]}"/></svg>`;

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
      cells += `<div class="day${marks.has(key) ? ' has' : ''}${isToday ? ' today' : ''}"><span>${d}</span></div>`;
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


  // ---------- Meal illustrations for the Home "Today's Menu" switch ----------
  // Colourful flat-3D drawings inside white circle buttons. Colours: brand browns/beige plus the live site's own
  // gold (#ffdf85, #fbf8e6) and veg green (#7dbd72); greys from the measured palette.
  const artSvg = (inner, defs = '') => `<svg class="meal-art" viewBox="0 0 40 40" aria-hidden="true">${defs ? `<defs>${defs}</defs>` : ''}${inner}</svg>`;
  const MEAL_ART = {
    // Breakfast: glass of masala chai + two idlis with chutney (menu: Idli Sambar, Masala Tea)
    Breakfast: artSvg(`
      <ellipse cx="24.5" cy="31.6" rx="12.5" ry="4.4" fill="#e3e3e3"/>
      <ellipse cx="24.5" cy="30.4" rx="12.5" ry="4.6" fill="#ffffff" stroke="#b7b6b5" stroke-width=".8"/>
      <path d="M22.4 29.6c0-3.9 2.7-6.2 5.8-6.2s5.8 2.3 5.8 6.2z" fill="url(#mb-idli)" stroke="#b7b6b5" stroke-width=".9"/>
      <path d="M15 30.2c0-3.9 2.7-6.2 5.8-6.2s5.8 2.3 5.8 6.2z" fill="url(#mb-idli)" stroke="#b7b6b5" stroke-width=".9"/>
      <path d="M17.6 27c.6-1 1.6-1.6 2.8-1.7" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="33.6" cy="31" rx="2.4" ry="1.1" fill="#7dbd72"/>
      <path d="M3.5 11.5h9.5l-1.5 16.2a1.7 1.7 0 0 1-1.7 1.5H6.7a1.7 1.7 0 0 1-1.7-1.5z" fill="url(#mb-chai)"/>
      <path d="M4.2 11.5h8.1" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity=".8"/>
      <path d="M6 4.2c-1.2 1.2 1.2 2.4 0 3.6M9.8 3.6c-1.2 1.2 1.2 2.4 0 3.6" fill="none" stroke="#b7b6b5" stroke-width="1.5" stroke-linecap="round"/>`,
      `<linearGradient id="mb-idli" y1="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#ffffff"/><stop offset="1" stop-color="#eae1d6"/></linearGradient><linearGradient id="mb-chai" y1="0" y2="1"><stop offset="0" stop-color="#eae1d6"/><stop offset=".2" stop-color="#eae1d6"/><stop offset=".21" stop-color="#9c6d41"/><stop offset="1" stop-color="#6d492a"/></linearGradient>`),
    // Lunch: thali — roti, golden rice, dal bowl, green garnish
    Lunch: artSvg(`
      <ellipse cx="20" cy="23.2" rx="16.5" ry="10.8" fill="#e3e3e3"/>
      <ellipse cx="20" cy="22" rx="16.5" ry="10.5" fill="#ffffff" stroke="#e1dfdd"/>
      <ellipse cx="20" cy="22" rx="11.5" ry="7" fill="#f5f5f5"/>
      <ellipse cx="15.5" cy="17.6" rx="6" ry="3.4" fill="#ffdf85" stroke="#9c6d41" stroke-width=".7"/>
      <circle cx="13.6" cy="17.2" r=".6" fill="#9c6d41"/><circle cx="16.8" cy="18.4" r=".6" fill="#9c6d41"/><circle cx="17.4" cy="16.6" r=".5" fill="#9c6d41"/>
      <path d="M10.5 28c0-3.4 2.6-5.3 5.6-5.3s5.6 1.9 5.6 5.3z" fill="url(#mb-rice)"/>
      <path d="M13.2 25.8h.8M15.8 24.4h.8M18.2 26h.8" stroke="#fbf8e6" stroke-width="1.4" stroke-linecap="round"/>
      <ellipse cx="26.8" cy="22.2" rx="5.2" ry="3.6" fill="#6d492a"/>
      <ellipse cx="26.8" cy="21.4" rx="4.2" ry="2.5" fill="#9c6d41"/>
      <ellipse cx="25.9" cy="20.9" rx="1.6" ry=".6" fill="#eae1d6" opacity=".7"/>
      <path d="M22.6 27.6c2-1.8 4.8-1.8 6.8 0-2 1.8-4.8 1.8-6.8 0z" fill="#7dbd72"/>`,
      `<linearGradient id="mb-rice" y1="0" y2="1"><stop offset="0" stop-color="#ffdf85"/><stop offset=".7" stop-color="#ffdf85"/><stop offset="1" stop-color="#9c6d41"/></linearGradient>`),
    // Snacks: golden samosa with green chutney (menu: Samosa)
    Snacks: artSvg(`
      <ellipse cx="21" cy="33.6" rx="15" ry="2.6" fill="#9c6d41" opacity=".18"/>
      <path d="M21.5 6.5c.9 0 1.6.5 2 1.2l9.6 17.6c.9 1.7-.1 3.7-2 3.9-6 .6-13.1.6-19.2 0-1.9-.2-2.9-2.2-2-3.9l9.6-17.6c.4-.7 1.1-1.2 2-1.2z" fill="url(#mb-samosa)"/>
      <path d="M12.5 27.4c1.2.6 2.4.6 3.6 0s2.4-.6 3.6 0 2.4.6 3.6 0 2.4-.6 3.6 0 2.4.6 3.6 0" fill="none" stroke="#6d492a" stroke-width="1.1" stroke-linecap="round" opacity=".7"/>
      <path d="M19.3 11.6 14.4 20.8" stroke="#fbf8e6" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>
      <circle cx="22.5" cy="19" r=".8" fill="#6d492a" opacity=".5"/><circle cx="25.2" cy="23.2" r=".8" fill="#6d492a" opacity=".5"/><circle cx="19.6" cy="24" r=".8" fill="#6d492a" opacity=".5"/>
      <ellipse cx="8" cy="31" rx="5.6" ry="2.8" fill="#9c6d41"/>
      <ellipse cx="8" cy="30.2" rx="4.4" ry="1.8" fill="#7dbd72"/>`,
      `<linearGradient id="mb-samosa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffdf85"/><stop offset=".6" stop-color="#ffdf85"/><stop offset="1" stop-color="#9c6d41"/></linearGradient>`),
  };

  // ---------- Banner carousel: infinite loop, slides travel left → right, advances every 5 s ----------
  // Layout: full-width banner artwork on top, control bar below (progress segments, the banner's own button, arrows).
  const BANNER_MS = 5000;
  const festiveSlide = () => `<div class="slide festive">${img(D.festive.img, D.festive.alt)}</div>`;
  const composedSlide = (b) =>
    `<div class="slide composed ${b.tone}">${img(b.bg, '', 'b-bg')}<div class="b-copy"><h3>${esc(b.title)}</h3></div>
      <div class="b-media">${img(b.img, '', 'b-img')}</div></div>`;
  // Track order, left → right: [clone of 1st, last, …, 2nd, 1st]. Shifting the track one slide to the right
  // brings the next banner in from the left; reaching the clone snaps back to the real 1st without animation.
  function bannerCarousel() {
    const s = [festiveSlide(), ...D.banners.map(composedSlide)];
    const ctas = [D.festive.cta, ...D.banners.map((b) => b.cta)];
    const cells = [s[0], ...s.slice(1).reverse(), s[0]];
    return `<section class="carousel" aria-roledescription="carousel" aria-label="Banners" data-count="${s.length}" data-ctas="${esc(JSON.stringify(ctas))}">
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
  const tileCount = {
    celebrations: () => H.birthdays.people.length,
    'todays-menu': () => (D.menu.items[D.menu.active] || []).length,
    'video-gallery': () => H.videos.length,
    'everyday-hero': () => H.heroes.length,
  };

  const dashShortcuts = () => `<div class="sc-row">${H.tiles.map((t) => {
    const count = t.target && tileCount[t.target] ? tileCount[t.target]() : null;
    const inner = `<span class="sc-thumb${t.fit === 'contain' ? ' contain' : ''}">${img(t.img, '', 'cover')}${t.play ? img(t.play, '', 'play') : ''}${count != null ? `<span class="sc-count">${count}</span>` : ''}</span>
      <span class="sc-body"><span class="sc-ico">${icon(t.icon)}</span><span class="sc-label">${esc(t.label)}</span><span class="sc-go">${icon('arrowR')}</span></span>`;
    return t.target ? `<a class="sc-card" href="#home/${t.target}">${inner}</a>` : `<button type="button" class="sc-card">${inner}</button>`;
  }).join('')}</div>`;

  const dashBirthdays = () => secPanel('celebrations', H.birthdays.title, `<p class="dash-sub">${esc(H.birthdays.sub)}</p>
    <ul class="bday-list">${H.birthdays.people.map((p) => `<li class="bday">
      <span class="bday-av">${avatar(p.name)}<span class="bday-cake">${icon('cake')}</span></span>
      <span class="bday-text"><b>${esc(p.name)}</b><small>${esc(p.role)}</small></span>
      <button type="button" class="btn btn-primary btn-xs">Wish Now!</button></li>`).join('')}</ul>`, { right: viewAll(), ico: 'cake' });

  const dashMenu = () => secPanel('todays-menu', "Today's Menu", `<div class="meal-row" role="group" aria-label="Meal">${D.menu.tabs.map((t) => `<button type="button" class="chip meal-btn" data-meal="${t}" aria-pressed="${t === D.menu.active}" title="${t}">${MEAL_ART[t] || ''}<span class="sr-only">${t}</span></button>`).join('')}</div>
    <div class="menu-list menu-grid3" data-menu></div>`, { right: viewAll('View all', 'modal:weekly-menu'), ico: 'restaurant' });

  const dashVideos = () => secPanel('video-gallery', 'Video Gallery', `<div class="h-scroll" data-scroller><div class="hs-track vid-track">${H.videos.map((v, i) => `<article class="vid-card">
      <div class="vid-thumb v${i % 3}"><span class="vid-ico">${icon(v.icon)}</span><span class="vid-play">${icon('play')}</span></div>
      <div class="vid-foot"><span title="${esc(v.label)}">${esc(v.label)}</span><button type="button" class="btn btn-secondary btn-xs">Open</button></div></article>`).join('')}</div></div>`,
    { right: `<div class="ph-actions">${hsNav()}${viewAll('View all', '#corporate/videos')}</div>`, ico: 'video' });

  const dashLearning = () => secPanel('learning-events', 'Learning Events', empty('No Events', '', 'event'), { right: viewAll('View all', '#training-events'), ico: 'article' });

  const dashErp = () => secPanel('erp-winners', 'Employee Recognition Program (ERP) Winners', `<div class="h-scroll" data-scroller><div class="hs-track erp-track">${D.erp.map((p) => `<article class="erp-mini">
      ${avatar(p.name)}<b>${esc(p.name)}</b><small>${esc(p.role)}</small><button type="button" class="btn btn-secondary btn-xs">Wish Now!</button></article>`).join('')}</div></div>`,
    { right: `<div class="ph-actions">${hsNav()}${viewAll('View Past Winners')}</div>`, ico: 'verified', sub: `For ${D.erpPeriod}` });

  const dashHero = () => `<section class="hero-band" data-anchor="everyday-hero">
      <div class="hero-head"><h2>${H.heroTitle[0]} <span>${H.heroTitle[1]}</span></h2>${hsNav(true)}</div>
      <div class="h-scroll" data-scroller><div class="hs-track hero-track">${H.heroes.map((h) => `<article class="hero-card">
        <div class="hero-av">${avatar(h.name)}<span class="hero-medal">${icon('group')}</span></div>
        <div class="hero-info"><h3>${esc(h.name)}</h3><p class="hero-dept">${esc(h.dept)}</p>
          <div class="hero-value"><span class="hv-ico">${icon('group')}</span><span><b>${esc(h.value)}</b><small>${esc(h.tagline)}</small></span></div>
          <p class="hero-meta">${icon('campaign')}<span>Nominated By : <b>${esc(h.nominatedBy)}</b></span></p>
          <p class="hero-meta">${icon('business')}<span>Department : <b>${esc(h.dept)}</b></span></p></div>
      </article>`).join('')}</div></div>
      <div class="hs-dots" data-dots></div>
    </section>`;

  const dashJobs = () => secPanel('job-postings', 'Job Postings', jobsCards(H.jobs), { right: searchBox('Search by title...', 'data-filter-jobs', 'sm'), foot: viewAll('View More', '#hr-admin/jobPostings'), ico: 'work', cls: 'jobs-w' });

  const dashHolidays = () => secPanel('holiday-calendar', 'Holiday Calendar', `<div class="mini-cal" data-mini-cal data-y="${today.getFullYear()}" data-m="${today.getMonth()}"></div>
    <ul class="hol-list">${D.holidays.map((h) => {
      const d = parse(h.date);
      return `<li class="hol" data-date="${h.date}"><span class="hol-badge${d.getMonth() !== today.getMonth() ? ' later' : ''}"><b>${String(d.getDate()).padStart(2, '0')}</b><small>${MON[d.getMonth()]}</small></span><span class="hol-title">${esc(h.title)}</span></li>`;
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

  // ---------- Pages ----------
  const pages = {
    // Home — interactive dashboard: shortcuts, main column + side rail, full-width Everyday Hero.
    home: () => `<div class="dash">
      ${dashShortcuts()}
      <div class="dash-cols">
        <div class="dash-main">
          ${bannerCarousel()}
          ${dashMenu()}
          ${dashVideos()}
          ${dashErp()}
          ${dashJobs()}
        </div>
        <aside class="dash-rail">
          ${dashBirthdays()}
          ${dashHolidays()}
          ${dashLearning()}
        </aside>
      </div>
      ${dashHero()}
    </div>`,

    corporate: () => `
      <div class="row">
        <div class="c-8">${panel('Media', empty('No media available', '', 'image'), { right: viewAll(), ico: 'image' })}</div>
        <div class="c-4">${panel('Policies', empty('No data', '', 'doc'), { right: viewAll(), ico: 'doc' })}</div>
      </div>
      ${panel('Video Gallery', empty('No videos available', '', 'video'), { ico: 'video', anchor: 'videos' })}`,

    'hr-admin': () => `
      <div class="section">
        ${sectionHead('Know Your Team', 'Find out more about your team members.', `<div class="tools">${searchBox('Search employees...', 'data-filter-team')}${filterBtn()}</div>`)}
        <div class="row">
          <div class="c-8">
            <section class="panel profile-card">
              <div class="cover">${img(D.profile.cover, '', 'cover-img')}<button type="button" class="edit-fab" aria-label="Edit cover">${icon('edit')}</button></div>
              <div class="id-row">${avatar(D.user.name, 'cover-avatar')}<div><h3>${esc(D.user.name)}</h3><p class="role">${esc(D.user.title)}</p></div></div>
              <div class="profile-grid">
                <ul class="kv">
                  <li>${icon('mail')}<span>Email: <b>${esc(D.user.email)}</b></span><button type="button" class="copy" aria-label="Copy email">${icon('copy')}</button></li>
                  <li>${icon('phone')}<span>Phone Number: <b>${D.profile.phone}</b></span></li>
                  <li>${icon('supervisor')}<span>Reporting Manager: <b>${D.profile.manager}</b></span></li>
                </ul>
                <div class="about"><h4>About Me</h4><p>${D.profile.about}</p><button type="button" class="edit-fab" aria-label="Edit about me">${icon('edit')}</button></div>
              </div>
            </section>
          </div>
          <div class="c-4">${panel('HRD &amp; Employee Services', `<ul class="dir" data-team>${D.team.map(([n, r]) => `<li>${avatar(n)}<div><div class="n">${esc(n)}</div><div class="r">${esc(r)}</div></div></li>`).join('')}</ul>`, { flush: true, cls: 'team-panel', ico: 'group' })}</div>
        </div>
        <p class="strip">${icon('celebration')}No current celebrations or new joiners.</p>
      </div>

      ${panel('Applications', `<div class="app-grid">${D.hrApps.map((a) => `<button type="button" class="app-tile">${img(a.img, 'Application')}</button>`).join('')}</div>`, { ico: 'apps' })}

      ${panel('Employee Recognition Program (ERP) Winners', `<div class="erp-grid">${D.erp.map((p) => `<article class="erp-card"><div class="head">${avatar(p.name)}<div><div class="name">${esc(p.name)}</div><div class="role">${esc(p.role)}</div></div></div><p>${esc(p.text)}</p></article>`).join('')}</div>`, { right: `<span class="period-chip">${D.erpPeriod}</span>`, ico: 'verified' })}

      ${jobsPanel(D.jobs, pager, '', 'table', 'jobPostings')}

      ${panel('Make a Request', `<form class="request" onsubmit="return false"><select class="field" aria-label="Select a request"><option>Select a request</option></select>
        <input class="field" placeholder="Type your request here" aria-label="Type your request here" />
        <button type="button" class="btn btn-primary">Submit</button></form>`, { ico: 'chat' })}
      ${panel('Send Suggestions', `<form onsubmit="return false"><textarea class="field" placeholder="Type your suggestions here" aria-label="Type your suggestions here"></textarea></form>`, { foot: '<button type="button" class="btn btn-primary">Submit</button>', ico: 'edit' })}`,

    'i-connect': () => `
      <div class="row">
        <div class="c-4">${panel('Our Values', `<div class="values">${D.values.map((v) => `<div class="value-tile">${img(v.img, v.alt)}</div>`).join('')}</div>`, { ico: 'verified' })}</div>
        <div class="c-8">${panel('People Stories', empty('No stories found', 'Check back later for new stories', 'article'), { cls: 'stories', ico: 'article', right: `<div class="tools">${searchBox('Search stories', '', 'sm')}${filterBtn('sm')}</div>` })}</div>
      </div>
      ${panel('Newsletter', empty('No stories found', 'Check back later for new stories', 'article'), { ico: 'article', right: `<div class="tools">${searchBox('Search newsletters', '', 'sm')}${filterBtn('sm')}</div>`, sub: 'Explore features, updates, and inspiring insights from across our organization', foot: viewAll('View Past Newsletters') })}`,

    'training-events': () => `
      <div class="section">
        ${sectionHead('Learning &amp; Development', 'Explore upcoming training sessions and boost your skills')}
        <div class="row">
          <div class="c-8">${panel('Events', empty('No Events', '', 'event'), { right: viewAll(), ico: 'event' })}</div>
          <div class="c-4">${calPanel('ld', [])}</div>
        </div>
      </div>

      <div class="section">
        ${sectionHead('Fun @ Work', 'Engage in exciting activities and make work more fun')}
        <div class="row">
          <div class="c-8">${panel('Events', dateList(D.funEvents), { right: viewAll(), flush: true, ico: 'event' })}</div>
          <div class="c-4">${calPanel('fun', D.funEvents)}</div>
        </div>
      </div>

      <div class="section">
        ${sectionHead('Photo Gallery', 'Relive memories from events and milestones')}
        <section class="panel"><div class="panel-body">
          <div class="gallery-stage">${empty('No photos available', 'There are no photos in this category yet', 'image')}</div>
          <div class="gallery-bar"><b>0</b><div class="cal-nav"><button type="button" aria-label="Previous">${icon('arrowL')}</button><button type="button" aria-label="Next">${icon('arrowR')}</button></div></div>
          <div class="album">${empty('No albums available', 'Try selecting a different category', 'image')}</div>
        </div></section>
      </div>`,

  };

  // ---------- Chrome ----------
  function renderSidebar(active) {
    $('#sidebar').innerHTML = `
      <div class="brand">${img(D.logo, 'People First — An Oberoi Realty initiative')}</div>
      <nav class="nav-wrap"><ul class="nav">${D.nav.map((n) => `<li><a href="#${n.id}" ${n.id === active ? 'aria-current="page"' : ''}>${icon(n.icon)}${n.label}</a>${n.id === 'home' && active === 'home'
        ? `<ul class="subnav">${D.home.sections.map((s) => `<li><a href="#home/${s.id}" data-sec-link="${s.id}">${s.label}</a></li>`).join('')}</ul>` : ''}</li>`).join('')}</ul></nav>
      <div class="profile"><div class="avatar-wrap">${avatar(D.user.name, 'avatar-md')}<button type="button" class="edit-fab" aria-label="Edit profile picture">${icon('edit')}</button></div>
        <div class="profile-text"><div class="profile-name">${esc(D.user.name)}</div><div class="profile-mail">${esc(D.user.email)}</div></div></div>`;
  }
  function renderTopbar(active) {
    const d = today;
    $('#topbar').innerHTML = `
      <div class="topbar-inner">
        <button type="button" class="menu-btn" aria-label="Open navigation" data-open-nav>${icon('menu')}</button>
        <div class="greet"><h1>Hello, <b>${esc(D.user.name)}!</b></h1><p>Today is ${DAYS[d.getDay()]} ${ord(d.getDate())} ${MONTHS[d.getMonth()]} ${d.getFullYear()}</p></div>
        <div class="top-actions">
          <label class="search">${icon('search')}<span class="sr-only">Search</span><input type="search" placeholder="Search here..." /></label>
          <button type="button" class="icon-btn" aria-label="Calendar">${icon('calendar')}<span class="badge zero">0</span></button>
          <button type="button" class="icon-btn" aria-label="Messages">${icon('chat')}<span class="badge${D.chatCount ? '' : ' zero'}">${D.chatCount || 0}</span></button>
          <button type="button" class="icon-btn" aria-label="Notifications">${icon('bell')}<span class="badge zero">0</span></button>
          <span class="divider"></span>
          ${avatar(D.user.name, 'avatar-sm')}
        </div>
      </div>
      ${active === 'home' ? `<div class="quickbar" id="quickbar"><ul>${D.quickBar.map((q) => `<li><a href="#home${q.target ? `/${q.target}` : ''}">${icon(q.icon)}${q.label}</a></li>`).join('')}</ul></div>` : ''}`;
  }

  function menuItem(i) {
    return `<div class="menu-item"><div class="body"><div class="name">${esc(i.name)}</div>
      <div class="meta">${i.type} <span class="dot${i.type === 'Non-Veg' ? ' nonveg' : ''}"></span> ${i.meal}</div></div><div class="qty">${i.qty}<br>${i.unit}</div></div>`;
  }
  function renderMenu(meal) {
    const box = $('[data-menu]');
    if (!box) return;
    box.innerHTML = (D.menu.items[meal] || []).map(menuItem).join('');
  }

  // ---------- "View all" pop-ups (mirroring the live site: Weekly Menu, Holiday Calendar) ----------
  const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let modalOpener = null;

  function closeModal() {
    const bd = $('.modal-backdrop');
    if (!bd) return;
    bd.remove();
    document.body.style.overflow = '';
    if (modalOpener) modalOpener.focus();
  }

  function openModal(name, opener) {
    closeModal();
    modalOpener = opener || null;
    const head = (title, extra = '') => `<div class="modal-head"><h2 id="modal-title">${title}</h2>${extra}<button type="button" class="link modal-close" data-close-modal>Close</button></div>`;
    let body = '';
    if (name === 'weekly-menu') {
      const today = DAYS[new Date().getDay()];
      body = `${head('Weekly Menu')}
        <div class="modal-body">
          <div class="seg days" role="group" aria-label="Day">${WEEK.map((d) => `<button type="button" class="chip" data-wm-day="${d}" aria-pressed="${d === today}">${d}</button>`).join('')}</div>
          <div class="seg meals" role="group" aria-label="Meal">${D.menu.tabs.map((t) => `<button type="button" class="chip" data-wm-meal="${t}" aria-pressed="${t === D.menu.active}">${t}</button>`).join('')}</div>
          <div class="menu-list wm-list" data-wm-list></div>
        </div>`;
    } else if (name === 'holiday-calendar') {
      const years = Object.keys(D.holidayYears).map(Number).sort();
      const year = years.includes(today.getFullYear()) ? today.getFullYear() : years[years.length - 1];
      const tabs = Object.keys(D.holidayYears[year]);
      body = `${head('Holiday Calendar', `<div class="year-nav" data-year="${year}"><button type="button" data-year-step="-1" aria-label="Previous year">${icon('chevL')}</button><b data-year-label>${year}</b><button type="button" data-year-step="1" aria-label="Next year">${icon('chevR')}</button></div>`)}
        <div class="modal-body holiday-rail">
          <div class="seg htabs" role="group" aria-label="Holiday type">${tabs.map((t, i) => `<button type="button" class="chip" data-htab="${t}" aria-pressed="${i === 0}">${t}</button>`).join('')}</div>
          <ul class="date-list hgrid" data-hlist></ul>
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
      const ystep = e.target.closest('[data-year-step]');
      if (day || meal || htab) {
        const btn = day || meal || htab;
        btn.parentElement.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === btn)));
      }
      if (day || meal) renderWeeklyMenu(bd);
      if (htab) renderHolidayList(bd);
      if (ystep && !ystep.disabled) {
        const nav = $('.year-nav', bd);
        nav.dataset.year = +nav.dataset.year + +ystep.dataset.yearStep;
        renderHolidayList(bd);
      }
    });
    if (name === 'weekly-menu') renderWeeklyMenu(bd); else renderHolidayList(bd);
    $('[data-close-modal]', bd).focus();
  }

  // Only today's menu exists in this prototype's data; other days show an empty list.
  function renderWeeklyMenu(bd) {
    const day = $('[data-wm-day][aria-pressed="true"]', bd).dataset.wmDay;
    const meal = $('[data-wm-meal][aria-pressed="true"]', bd).dataset.wmMeal;
    const items = day === DAYS[new Date().getDay()] ? D.menu.items[meal] || [] : [];
    $('[data-wm-list]', bd).innerHTML = items.map(menuItem).join('');
  }

  function renderHolidayList(bd) {
    const nav = $('.year-nav', bd);
    const year = +nav.dataset.year;
    const data = D.holidayYears[year] || {};
    $('[data-year-label]', bd).textContent = year;
    nav.querySelectorAll('[data-year-step]').forEach((b) => { b.disabled = !D.holidayYears[year + +b.dataset.yearStep]; });
    const tabBtn = $('[data-htab][aria-pressed="true"]', bd);
    const tab = tabBtn.dataset.htab;
    const optional = tab !== Object.keys(data)[0];
    $('[data-hlist]', bd).innerHTML = (data[tab] || []).map((row) => {
      const [date, title] = row.split('|');
      const [dd, mon] = date.split(' ');
      return `<li class="date-item${optional ? ' later' : ''}"><div class="date-badge"><b>${dd}</b><small>${mon}</small></div><span class="title">${esc(title)}</span></li>`;
    }).join('');
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
    if (active === 'home') initDash();
    const target = section && content.querySelector(`[data-anchor="${section}"]`);
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
    onScroll();
  }

  const currentPage = () => {
    const id = (location.hash || '#home').slice(1).split('/')[0];
    return pages[id] ? id : 'home';
  };

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
        D.home.sections.forEach((s) => {
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
  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-modal]');
    if (opener) { openModal(opener.dataset.modal, opener); return; }
    // In-page dashboard links (sub-nav, shortcuts, quick bar): smooth-scroll instead of re-rendering Home.
    const inPage = e.target.closest('a[href^="#home/"]');
    if (inPage && currentPage() === 'home') {
      const id = inPage.getAttribute('href').split('/')[1];
      const t = $(`[data-anchor="${id}"]`);
      if (t) {
        e.preventDefault();
        document.body.classList.remove('nav-open');
        spyLock = D.home.sections.some((s) => s.id === id) ? { id, until: Date.now() + 1200 } : null;
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#home/${id}`);
        return;
      }
    }
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
    const day = e.target.closest('[data-mini-cal] .day.has');
    if (day) {
      document.querySelectorAll('.hol.hl').forEach((h) => h.classList.remove('hl'));
      const item = $(`.hol[data-date="${day.dataset.date}"]`);
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
    const chip = e.target.closest('[data-meal]');
    if (chip) {
      chip.parentElement.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === chip));
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
    if (e.target.matches('[data-filter-team]')) {
      document.querySelectorAll('[data-team] li').forEach((li) => { li.hidden = !li.textContent.toLowerCase().includes(q); });
    }
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); document.body.classList.remove('nav-open'); } });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => document.querySelectorAll('[data-scroller]').forEach(updateScroller));
  // Hovering a holiday highlights its date in the mini calendar.
  document.addEventListener('mouseover', (e) => {
    const h = e.target.closest('.hol');
    if (!h) return;
    const d = $(`[data-mini-cal] .day[data-date="${h.dataset.date}"]`);
    if (d) d.classList.add('hl');
  });
  document.addEventListener('mouseout', (e) => {
    const h = e.target.closest('.hol');
    if (h && !h.contains(e.relatedTarget)) document.querySelectorAll('[data-mini-cal] .day.hl').forEach((d) => d.classList.remove('hl'));
  });
  window.addEventListener('hashchange', route);
  route();
})();

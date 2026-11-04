// People First — UI redesign prototype. Presentation only: no buttons submit, save, or send anything.
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
    apps: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    image: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
    video: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z',
    doc: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    article: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    celebration: 'M2 22l14-5-9-9-5 14zm10.35-5.82L6.65 18.3l2.06-5.68 3.64 3.56zM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06zM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.47.48 1.28 0 1.76z',
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

  // ---------- Shared building blocks ----------
  const viewAll = (label = 'View all') => `<button type="button" class="link">${label}${icon('chevR')}</button>`;
  const head = (title, right = '', sub = '', cls = '') =>
    `<div class="section-head ${cls}"><div><h2>${title}</h2>${sub ? `<p class="sub">${sub}</p>` : ''}</div>${right}</div>`;
  const empty = (title, sub = '', ico = 'image') =>
    `<div class="empty"><span class="em-ico">${icon(ico)}</span>${sub ? `<strong>${title}</strong><span>${sub}</span>` : `<strong>${title}</strong>`}</div>`;
  const groupHead = (title, sub) => `<div class="group-head"><div><h2>${title}</h2><p class="sub">${sub}</p></div></div>`;
  const searchBox = (ph, attr = '') => `<label class="field-search"><span class="sr-only">${ph}</span><input type="search" placeholder="${ph}" ${attr} />${icon('search')}</label>`;
  const filterBtn = `<button type="button" class="filter-btn" aria-label="Filter">${icon('filter')}</button>`;

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
    el.innerHTML = `<div class="cal-head"><h3>${MONTHS[m]} ${y}</h3><div class="cal-nav">
      <button type="button" data-step="-1" aria-label="Previous month">${icon('chevL')}</button>
      <button type="button" data-step="1" aria-label="Next month">${icon('chevR')}</button></div></div>
      <div class="cal" role="grid">${cells}</div>`;
  }

  const dateList = (items) =>
    `<ul class="date-list">${items.map((e) => {
      const d = parse(e.date);
      return `<li class="date-item${d.getMonth() !== today.getMonth() ? ' later' : ''}"><div class="date-badge"><b>${String(d.getDate()).padStart(2, '0')}</b><small>${MON[d.getMonth()]}</small></div><span class="title">${esc(e.title)}</span></li>`;
    }).join('')}</ul>`;

  const jobCard = (j) => `<article class="job">
      <span class="code">Job Code: ${j.code}</span>
      <h3>${esc(j.title)}</h3>
      <div class="meta">${icon('work')}${esc(j.dept)}</div>
      <div class="meta">${icon('place')}${esc(j.loc)}</div>
      <div class="foot"><button type="button" class="btn btn-primary btn-sm">Apply</button></div>
    </article>`;
  const jobsSection = (jobs, footer, cls = '', cols = 2) => `<section class="card ${cls}">
      <div class="jobs-tools">${head('Job Postings')}${searchBox('Search by title...', 'data-filter-jobs')}</div>
      <div class="jobs" style="--job-cols:${cols}" data-jobs>${jobs.map(jobCard).join('')}</div>${footer}</section>`;

  // ---------- Pages ----------
  const pages = {
    home: () => `
      <div class="tiles">${D.tiles.map((t) => `<button type="button" class="tile">${img(t.img, '', 'cover')}${t.play ? img(t.play, '', 'play') : ''}
        <span class="tile-label">${esc(t.label)}<span class="chev">${icon('chevR')}</span></span></button>`).join('')}</div>

      <section class="integrity span-8"><div><h2>${D.integrity.title}</h2><p>${D.integrity.subtitle}</p>
        <button type="button" class="btn btn-light">${D.integrity.cta}${icon('chevR')}</button></div>${img(D.integrity.logo, 'Integrity')}</section>

      <section class="card joy span-4">${head('Spread the Joy!')}${empty('No current celebrations or new joiners.', '', 'celebration')}</section>

      <section class="festive">${img(D.festive.img, D.festive.alt)}<button type="button" class="btn btn-sm">${D.festive.cta}</button></section>

      <section class="card span-7" id="menu">${head("Today's Menu", viewAll())}
        <div class="chips" role="group" aria-label="Meal">${D.menu.tabs.map((t) => `<button type="button" class="chip" data-meal="${t}" aria-pressed="${t === D.menu.active}">${t}</button>`).join('')}</div>
        <div class="menu-grid" data-menu></div></section>

      <section class="card span-5">${head('Video Gallery', viewAll())}</section>

      <section class="card erp">${head('Employee Recognition Program (ERP) Winners', viewAll('View Past Winners'))}
        <p class="period">For ${D.erpPeriod}</p>
        <div class="erp-row">${D.erp.map((p) => `<div class="erp-person"><div class="ring">${img(ASSETS + 'WinnerRing_b821a05dfa7ba8795d2e085756ecbfed.png', '', 'ring-img')}${avatar(p.name)}</div>
          <div class="name">${esc(p.name)}</div><button type="button" class="btn btn-primary btn-sm">Wish Now!</button></div>`).join('')}</div></section>

      ${jobsSection(D.jobs.slice(0, 4), `<div class="more">${viewAll('View More')}</div>`, '', 4)}

      <section class="card span-5">${calendar('home', D.holidays)}</section>
      <section class="card span-7">${head('Holiday Calendar', viewAll())}${dateList(D.holidays)}</section>`,

    corporate: () => `
      <section class="card span-8">${head('Media', viewAll())}${empty('No media available', '', 'image')}</section>
      <section class="card span-4">${head('Policies', viewAll())}${empty('No data', '', 'doc')}</section>
      <section class="card">${head('Video Gallery')}${empty('No videos available', '', 'video')}</section>`,

    'hr-admin': () => `
      <div class="group-head"><div><h2>Know Your Team</h2><p class="sub">Find out more about your team members.</p></div>
        <div class="tools">${searchBox('Search employees...', 'data-filter-team')}${filterBtn}</div></div>

      <section class="card profile-card span-7">
        <div class="cover">${img(D.profile.cover, '', 'cover-img')}<button type="button" class="edit-fab" aria-label="Edit cover">${icon('edit')}</button></div>
        <div class="id-row">${avatar(D.user.name, 'cover-avatar')}<div><h3>${esc(D.user.name)}</h3><p class="role">${esc(D.user.title)}</p></div></div>
        <div class="profile-body">
          <div class="facts">
            <p class="fact">Email: <b>${esc(D.user.email)}</b><button type="button" class="copy" aria-label="Copy email">${icon('copy')}</button></p>
            <p class="fact">Phone Number: ${D.profile.phone}</p>
            <p class="fact">Reporting Manager: ${D.profile.manager}</p>
          </div>
          <div class="about"><h4>About Me</h4><p>${D.profile.about}</p><button type="button" class="edit-fab" aria-label="Edit about me">${icon('edit')}</button></div>
        </div>
      </section>

      <section class="card team span-5">${head('HRD &amp; Employee Services')}
        <ul data-team>${D.team.map(([n, r]) => `<li>${avatar(n)}<div><div class="n">${esc(n)}</div><div class="r">${esc(r)}</div></div></li>`).join('')}</ul></section>

      <p class="note">No current celebrations or new joiners.</p>

      <section class="card">${head('Applications')}<div class="app-grid">${D.hrApps.map((a) => `<button type="button" class="app-tile">${img(a.img, 'Application')}</button>`).join('')}</div></section>

      <section class="card">${head('Employee Recognition Program (ERP) Winners', `<span class="chip-gold">${D.erpPeriod}</span>`)}
        <div class="erp-cards">${D.erp.map((p) => `<article class="erp-card"><div class="head">${avatar(p.name)}<div><div class="name">${esc(p.name)}</div><div class="role">${esc(p.role)}</div></div></div><p>${esc(p.text)}</p></article>`).join('')}</div></section>

      ${jobsSection(D.jobs, `<nav class="pager" aria-label="Job pages"><button type="button" disabled aria-label="Previous page">${icon('chevL')}</button><button type="button" aria-current="page">1</button><button type="button">2</button><button type="button" class="next" aria-label="Next page">${icon('chevR')}</button></nav>`, '', 3)}

      <section class="card span-6">${head('Make a Request')}
        <form class="form-stack" onsubmit="return false"><select class="field" aria-label="Select a request"><option>Select a request</option></select>
          <input class="field" placeholder="Type your request here" aria-label="Type your request here" />
          <div class="actions-end"><button type="button" class="btn btn-primary">Submit</button></div></form></section>

      <section class="card span-6">${head('Send Suggestions')}
        <form class="form-stack" onsubmit="return false"><textarea class="field" placeholder="Type your suggestions here" aria-label="Type your suggestions here"></textarea>
          <div class="actions-end"><button type="button" class="btn btn-primary">Submit</button></div></form></section>`,

    'i-connect': () => `
      <section class="card span-4">${head('Our Values')}<div class="values"><div class="value-tile">${icon('verified')}<span>QUALITY</span></div></div></section>

      <section class="card stories span-8">${head('People Stories', `<div class="tools">${searchBox('Search stories')}${filterBtn}</div>`, '', 'wrap')}
        ${empty('No stories found', 'Check back later for new stories', 'article')}</section>

      <section class="card">${head('Newsletter', `<div class="tools">${searchBox('Search newsletters')}${filterBtn}</div>`, 'Explore features, updates, and inspiring insights from across our organization', 'wrap')}
        ${empty('No stories found', 'Check back later for new stories', 'article')}
        <div class="more">${viewAll('View Past Newsletters')}</div></section>`,

    'training-events': () => `
      ${groupHead('Learning &amp; Development', 'Explore upcoming training sessions and boost your skills')}
      <section class="card span-7">${head('Events', viewAll())}${empty('No Events', '', 'event')}</section>
      <section class="card span-5">${calendar('ld', [])}</section>

      ${groupHead('Fun @ Work', 'Engage in exciting activities and make work more fun')}
      <section class="card span-5">${calendar('fun', D.funEvents)}</section>
      <section class="card span-7">${head('Events', viewAll())}${dateList(D.funEvents)}</section>

      ${groupHead('Photo Gallery', 'Relive memories from events and milestones')}
      <section class="card">
        <div class="gallery-stage">${empty('No photos available', 'There are no photos in this category yet', 'image')}</div>
        <div class="gallery-bar"><b>0</b><div class="cal-nav"><button type="button" aria-label="Previous">${icon('arrowL')}</button><button type="button" aria-label="Next">${icon('arrowR')}</button></div></div>
        <div class="album">${empty('No albums available', 'Try selecting a different category', 'image')}</div></section>`,
  };

  // ---------- Chrome ----------
  function renderSidebar(active) {
    $('#sidebar').innerHTML = `
      <div class="brand">${img(D.logo, 'People First — An Oberoi Realty initiative')}</div>
      <div class="profile"><div class="avatar-wrap">${avatar(D.user.name, 'avatar-md')}<button type="button" class="edit-fab" aria-label="Edit profile picture">${icon('edit')}</button></div>
        <div class="profile-text"><div class="profile-name">${esc(D.user.name)}</div><div class="profile-mail" title="${esc(D.user.email)}">${esc(D.user.email)}</div></div></div>
      <nav><ul class="nav">${D.nav.map((n) => `<li><a href="#${n.id}" ${n.id === active ? 'aria-current="page"' : ''}><span class="ico">${icon(n.icon)}</span>${n.label}</a></li>`).join('')}</ul></nav>`;
  }
  function renderTopbar(active) {
    const d = today;
    $('#topbar').innerHTML = `
      <div class="topbar-inner">
        <button type="button" class="menu-btn" aria-label="Open navigation" data-open-nav>${icon('menu')}</button>
        <div class="greet"><h1>Hello, <b>${esc(D.user.name)}!</b></h1><p>Today is ${DAYS[d.getDay()]} ${ord(d.getDate())} ${MONTHS[d.getMonth()]} ${d.getFullYear()}</p></div>
        <div class="top-actions">
          <label class="search"><span class="sr-only">Search</span><input type="search" placeholder="Search here..." />${icon('search')}</label>
          <button type="button" class="icon-btn" aria-label="Calendar">${icon('calendar')}<span class="badge zero">0</span></button>
          <button type="button" class="icon-btn" aria-label="Messages">${icon('chat')}<span class="badge zero">0</span></button>
          <button type="button" class="icon-btn" aria-label="Notifications">${icon('bell')}<span class="badge zero">0</span></button>
          <span class="divider"></span>
          ${avatar(D.user.name, 'avatar-sm')}
        </div>
      </div>
      ${active === 'home' ? `<div class="quickbar" id="quickbar"><ul>${D.quickBar.map((q) => `<li><a href="#home">${icon(q.icon)}${q.label}</a></li>`).join('')}</ul></div>` : ''}`;
  }

  function renderMenu(meal) {
    const box = $('[data-menu]');
    if (!box) return;
    box.innerHTML = (D.menu.items[meal] || []).map((i) => `<div class="menu-item"><div class="body"><div class="name">${esc(i.name)}</div>
      <div class="meta">${i.type} <span class="dot"></span> ${i.meal}</div></div><div class="qty"><b>${i.qty}</b>${i.unit}</div></div>`).join('');
  }

  function route() {
    const id = (location.hash || '#home').slice(1);
    const active = pages[id] ? id : 'home';
    document.body.classList.remove('nav-open');
    renderSidebar(active);
    renderTopbar(active);
    const content = $('#content');
    content.innerHTML = `<div class="page">${pages[active]()}</div>`;
    content.querySelectorAll('[data-cal]').forEach(renderCal);
    renderMenu(D.menu.active);
    window.scrollTo(0, 0);
    onScroll();
  }

  function onScroll() {
    const y = window.scrollY;
    $('#topbar').classList.toggle('scrolled', y > 8);
    const qb = $('#quickbar');
    if (qb) qb.classList.toggle('show', y > 260);
  }

  // ---------- Events (UI state only) ----------
  document.addEventListener('click', (e) => {
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

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') document.body.classList.remove('nav-open'); });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', route);
  route();
})();

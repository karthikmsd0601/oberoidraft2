# People First Intranet — UI Redesign (prototype)

A front-end-only redesign of the **People First – Oberoi Realty Intranet** (SharePoint UAT site).
It reproduces the five modules — **Home, Corporate, HR & Admin, I-Connect, Training & Events** — with a new
enterprise UI. Content and brand colours were captured read-only from the live site on 3 Nov 2026.

No build step and no dependencies: plain HTML, CSS and JavaScript, served by a ~40-line Node server.

## Run it

**Replit:** import this folder (or upload the zip) as a Node.js Repl and press **Run**.
`.replit` runs `npm start` and sets `HOST=0.0.0.0`; the server reads Replit's `PORT`.
On other hosts, set `HOST=0.0.0.0` (and `PORT` if required) — without `HOST` it only listens on `127.0.0.1`.

**Locally (Node 18+):**

```bash
npm start
```

Then open http://localhost:5180. A different port: `node server.js 3000`.

## Files

| File | Purpose |
|---|---|
| `index.html` | App shell (sidebar, top bar, content area) and font links |
| `styles.css` | The whole design system: colour tokens, panels, buttons, tables, layouts, responsive rules |
| `app.js` | Renders every page, the hash router (`#home`, `#corporate`, …), calendars, banner carousel, filters |
| `data.js` | All text/content shown in the UI, plus image URLs |
| `server.js` | Static file server (`PORT` / `HOST` aware; never serves itself or dotfiles) |
| `package.json`, `.replit` | Start script and Replit run configuration |

## Design system (summary)

- **Colours:** only colours measured from the live intranet. Main brand brown `#9C6D41`, hover `#6D492A`,
  beige `#EAE1D6`, neutral page background `#F7F7F7`, award gradient `#FFDF85 → #FBF8E6`, plus the site's greys.
  All tokens are at the top of `styles.css`.
- **Type:** Inter for UI; Playfair Display only in the ERP award section.
- **Components:** one panel style (64 px header with icon badge), 24 px grid gap, 12-column rows,
  primary/secondary/link buttons, data table that becomes cards on phones.
- **Responsive:** sidebar becomes a drawer below 1240 px; columns stack below 960 px; tested at 375 px.

## Behaviour notes

- **UI only.** Buttons such as Apply, Submit, Wish Now!, Take the Quiz do nothing — nothing is sent anywhere.
  Search boxes (jobs, employees), meal tabs, calendar arrows and the banner carousel work locally.
- **Home "View all" links** behave like the live site: Birthdays → *Birthdays* pop-up; Today's Menu → *Weekly Menu* pop-up; Holiday Calendar →
  *Holiday Calendar* pop-up (full 2026 public / Gurugram / Mumbai lists); Video Gallery → `#corporate/videos`;
  Job Postings "View More" → `#hr-admin/jobPostings` (all postings). Pop-ups close with Close, Esc or a backdrop click.
- **Light / dark mode:** the moon / sun button at the start of the top-bar icon group switches the whole app.
  The choice is remembered in the browser (`localStorage` key `pf-theme`). Dark colours are defined once in the
  `:root[data-theme="dark"]` block at the end of `styles.css`.
- **Banner carousel:** three Home banners, infinite loop, moves left → right, changes every 5 s
  (`BANNER_MS` in `app.js`).
- **Images are linked from SharePoint** (`orlmail.sharepoint.com`). They only appear in a browser that is
  signed in to that SharePoint tenant; elsewhere (e.g. a public Replit URL) image areas show a plain
  background. To make them work everywhere, download the images into an `assets/` folder and point the
  URLs in `data.js` at them.
- **Home shortcut-card photos** (Celebrations, Today's Menu, Videos, Applications, Everyday Hero), the
  Birthdays greeting background and the Video Gallery category thumbnails come from Unsplash
  (`images.unsplash.com`, free licence, no attribution required), so they load without a SharePoint sign-in.
- **Staff photos** are shown as the default grey avatar, except on the Birthdays cards (Home and its pop-up) and
  the recognition carousel (ERP winners, Everyday Heroes), which use Unsplash **stock portraits** as stand-ins —
  not the employees' real photos (`FACE(...)` in `data.js`).

## Data notice

`data.js` contains internal intranet content (employee names, job titles, an email address, job codes).
Keep the Repl **private** unless sharing that content is approved.

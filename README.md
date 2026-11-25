# vpilot-site v11 (modular)

    npm install
    npm run dev       # http://localhost:5173
    npm run build     # dist/ (also writes dist/404.html so deep links load on GitHub Pages)

## Where to edit

| To change | Edit |
|---|---|
| Home page layout and copy | `src/pages/HomePage.jsx`, `src/styles/home.css`, `src/data/home.js` |
| Home: the three service categories | `HOME_CATEGORIES` in `src/data/home.js` |
| Services page | `src/pages/ServicesPage.jsx`, `src/styles/services.css` |
| Any service page, including NativeTrust Endpoint and GRC as a Service | `src/data/services.js` (content), `src/pages/ServiceDetail.jsx` (layout), `src/styles/service-detail.css` |
| Managed Security Operations (the six cards) | `MSO_SLUGS` in `src/data/services.js`, `src/pages/MsoPage.jsx` |
| PUDICA Autonomy page | `src/pages/PudicaPage.jsx`, `src/styles/pudica.css`, `src/data/platform.js` |
| The six workstreams (Capabilities) | `WORKSTREAMS` in `src/data/platform.js` |
| Compare Operating Models, capability status, quote lines | `src/pages/ComparePage.jsx`, `src/data/compare.js`, `src/styles/compare.css` |
| Solutions | `src/pages/ProductsPage.jsx`, `src/data/solutions.js` |
| Company, Careers, Contact, Legal | `src/pages/CompanyPage.jsx` / `CareersPage.jsx` / `ContactPage.jsx` / `LegalPages.jsx`, each with its own stylesheet |
| Header menus (Autonomy, Solutions, Services, Resources, Company) | `MENUS` in `src/data/navigation.js`, `src/components/Header.jsx`, `src/styles/header.css` |
| Footer | `FOOTER_GROUPS` in `src/data/navigation.js`, `src/components/Footer.jsx` |
| Ask V Pilot chat | `ASK_FAQ` in `src/data/navigation.js`, `src/components/AskVPilot.jsx`, `src/styles/ask-vpilot.css` |
| Campaign ticker, header button, contact details, redirects | `src/lib/config.js` (`OFFER`, `HEADER_CTA`, `CONTACT_EMAIL`, `REDIRECTS`) |
| Colours, fonts, buttons, spacing | `src/styles/base.css` (`:root` tokens) |

Every page file starts with a comment naming its stylesheet and content file. A page only imports its own CSS, so changing `home.css` cannot affect other pages. Rules that several pages share live in `base.css`, `shared.css`, `cards.css` and `platform.css`.

## Routing
`src/App.jsx` holds the route table (`resolve`), page titles, meta descriptions and canonical tags. Moved URLs are in `REDIRECTS` (`src/lib/config.js`):
`/services/ciso-as-a-service` -> `/services/grc-as-a-service`, `/products/5pilot-cloud` -> `/products/compare`, the old Operating Model and NativeTrust paths, and more.
`public/_redirects` carries the same moves as real 301s for Netlify or Cloudflare Pages. GitHub Pages cannot do server redirects.

## Motion inventory
Hooks (`src/hooks/index.js`): scroll reveal, 3D pointer tilt, parallax, in-view and tab-visibility gating, auto-cycling step sequences. Every animation pauses off-screen, in a hidden tab, on hover/focus and under `prefers-reduced-motion`.
Components: 3D V Pilot and PUDICA emblems, ProdSecOps/ProdSecApps infinity-loop marks, animated step rails (finding flow, operating cycle, adoption, validation architecture), responsibility lanes with handoff arrows, evidence-record row reveals, comparison table row reveals, header ticker, Ask V Pilot shield (float, glow, flip on first hover).

## Before launch
Set `FORM_ENDPOINT` in `src/lib/config.js` so enquiries are submitted rather than drafted as email. Switch `HEADER_CTA` to the Free Trial values only when the trial is approved.
Confirm: what activates immediately, who acts under Virtual Support, and which endpoint and browser controls NativeTrust Endpoint includes.

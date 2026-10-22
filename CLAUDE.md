# YFF Coaching — CLAUDE.md

<!-- agentation:rules:begin -->
## Règles & équipe du projet — maintenu par Agentation
_Partagé via GitHub pour que **tout agent** (Claude Code, Codex, OpenCode, Antigravity, Cursor, Gemini…) travaille de la même façon. Bloc géré automatiquement — ne pas éditer à la main ; source complète : `docs/agentation/rules.md`._

### Équipe
_Personne renseigné pour l'instant._

### Comment ce projet fonctionne
# Règles du projet

_Comment ce projet fonctionne — vos agents s'y réfèrent pour travailler de la même façon._
<!-- agentation:rules:end -->

## Project purpose
Static coaching website for Yohan Plier — HYROX-certified coach based in Toulouse. Bilingual (FR/EN). Deployed to GitHub Pages at `connected-mate.github.io/yff-coaching/`.

## Stack
- **Pure HTML5 / CSS3 / Vanilla JS** — no framework, no build tool, no package manager.
- Font: Montserrat (Google Fonts, weights 300–900).
- i18n handled by `js/i18n.js` (key-based translation, `lang` URL param or `data-i18n` attributes).

## Key files
| File | Role |
|---|---|
| `index.html` | Single-page entry point (~63 KB). All sections inline. |
| `css/style.css` | All styles. CSS custom properties in `:root`. |
| `js/main.js` | Interactions: navbar scroll, animations, modal, forms. |
| `js/i18n.js` | Translation loader — FR default, EN on `?lang=en`. |
| `blog/hyrox-what-is-it.html` | First blog article. |
| `DESIGN.md` | Design tokens, colors, typography, do/don'ts. **Read before any UI edit.** |
| `assets/images/` | All images (logos, photos, icons). |

## Build & test commands
- **No build step** — open `index.html` directly in a browser or via `python3 -m http.server`.
- **No automated tests** — verify visually at mobile (375px) and desktop (1280px+).
- **Deploy**: push to `main` → GitHub Pages auto-deploys from root.

## Naming conventions
- CSS classes: kebab-case (`.nav-menu`, `.hero-title`).
- CSS variables: `--bg-*`, `--text-*`, `--accent*`, `--radius-*`, `--shadow-*`, `--transition`.
- JS: camelCase functions, `data-*` attributes for i18n keys and modal triggers.

## Forbidden paths / don'ts
- Do NOT introduce npm, a bundler, or a framework.
- Do NOT add inline styles — extend `css/style.css` instead.
- Do NOT use Inter font (see DESIGN.md § Don'ts).
- Do NOT edit image assets — reference `assets/images/` only.
- Do NOT commit large binaries (PDFs, raw JPEGs at root) — those are legacy.
- Always read DESIGN.md before editing any UI file.

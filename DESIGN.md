---
version: 1.0
name: YFF Coaching
description: Coach HYROX certifié Toulouse — Yohan Plier

colors:
  # Dark-first identity. bg-dark is the default surface.
  bg-dark: "#0a0a0a"
  bg-section: "#111111"
  bg-card: "#1a1a1a"
  bg-card-hover: "#222222"
  primary: "#e63019"          # YFF accent red-orange (action color)
  primary-light: "#ff4533"
  primary-dark: "#b82414"
  on-primary: "#ffffff"
  on-surface: "#f9f9f9"       # text-primary on dark backgrounds
  secondary: "#a0a0a0"        # text-secondary
  muted: "#666666"            # text-muted
  outline: "rgba(255,255,255,0.08)"
  outline-light: "rgba(255,255,255,0.12)"

typography:
  display-lg:
    fontFamily: "Montserrat"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: "1.05"
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Montserrat"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: "Montserrat"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.7"
    letterSpacing: "0"
  label-sm:
    fontFamily: "Montserrat"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "0.08em"

rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "28px"
  full: "9999px"

spacing:
  unit: "8px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"

components:
  # Replace with your values. Use token refs like {colors.primary} or {typography.label-md}.
  # rgba() is allowed here (e.g. backgroundColor overlays), NOT in colors.*.
  button-primary:
    backgroundColor: "{colors.primary}"
    color: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.sm}"
  button-primary-hover:
    backgroundColor: "rgba(0, 0, 0, 0.08)"
    color: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
  input-text:
    backgroundColor: "{colors.surface}"
    color: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    borderColor: "{colors.outline}"
    paddingX: "{spacing.md}"
    paddingY: "{spacing.sm}"
  card-surface:
    backgroundColor: "{colors.surface}"
    color: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.lg}"
---

## Overview

YFF Coaching is a dark, high-energy coaching brand targeting HYROX athletes and functional fitness enthusiasts in Toulouse (FR) and internationally (EN). The visual register is raw, ambitious, and athletic — built for someone who trains hard and expects the tools around them to match that intensity.

Design principles: **typographic authority first** (Montserrat Black at extreme weight carries the hero before any image loads), **controlled darkness** (three dark grays — not one — create depth without ornamentation), **single-color momentum** (the `#e63019` red-orange appears exclusively on CTAs and progress indicators; it never decorates).

The signature move: a full-viewport dark hero with Montserrat 900 weight at fluid scale, a single accent stripe on the CTA button, and zero visual noise. If the page feels like a fitness app loading screen, that's correct.

## Colors

- `bg-dark` (#0a0a0a) — page background; the canvas everything sits on.
- `bg-section` (#111111) — alternate section fills for visual rhythm.
- `bg-card` (#1a1a1a) — card and panel backgrounds.
- `primary` (#e63019) — THE action color. CTAs, active states, key icons. Nowhere else.
- `primary-light` / `primary-dark` — hover / press variants of the accent; do not use independently.
- `on-surface` (#f9f9f9) — all body and heading text on dark backgrounds.
- `secondary` (#a0a0a0) — secondary labels, descriptions, metadata.
- `muted` (#666666) — placeholder text, disabled states, footnotes.
- `outline` — dividers and borders; barely visible, structural only.

**Forbidden pairings:** `secondary` (#a0a0a0) on `primary` (#e63019) — fails WCAG AA. Always use `on-primary` (#fff) on the accent.

## Typography

Single typeface: **Montserrat** (Google Fonts, loaded weights 300–900). Do not introduce a second typeface.

- `display-lg` — hero headlines only. Fluid `clamp(2.5rem, 6vw, 4.5rem)`, weight 900, tight tracking (-0.02em). One per screen maximum.
- `headline-md` — section titles, card headings. Weight 700, slightly loose. Never apply 900 weight to secondary headings.
- `body-md` — all paragraph and descriptive text. Weight 400, line-height 1.7 for comfortable reading in dark mode.
- `label-sm` — button labels, tags, eyebrow text (uppercase + letter-spacing 0.08em), metadata.

Voice: assertive, imperative mood. "Réserve ta séance" not "Prendre rendez-vous". Copy is athletic, never corporate.

## Layout

Content max-width: **1200px** (navbar: 1280px). Container padding: 24px on all viewports. No CSS grid framework — raw flexbox and grid.

Breakpoints:
- **< 480px** (mobile-sm): single column, stacked CTAs, reduced hero padding.
- **480–768px** (mobile-lg): same, some 2-col grids permitted.
- **768–1024px** (tablet): 2-col layouts; navigation collapses to hamburger.
- **> 1024px** (desktop): full nav, 3-col feature grids, side-by-side pricing cards.

Section vertical rhythm: `80px` top/bottom padding on desktop, `48px` on mobile. Never reduce to less than `32px`.

## Elevation & Depth

Three-tier system (all shadows are dark-tinted, never brand-tinted except accent glow):
- **sm** — `0 2px 8px rgba(0,0,0,0.3)` — subtle lift for small cards.
- **md** — `0 8px 30px rgba(0,0,0,0.4)` — standard interactive cards.
- **lg** — `0 20px 60px rgba(0,0,0,0.5)` — modals, overlays, hero elements.
- **accent** — `0 8px 30px rgba(230, 48, 25, 0.25)` — CTA buttons on hover only. Not decorative.

z-index layers: base content 0 → cards 1 → sticky nav 1000 → modals 2000 → loader 10000.

## Shapes

The `rounded` scale in practice:
- `sm` (8px) — inputs, tags, small interactive elements.
- `md` (12px) — media thumbnails, image containers.
- `lg` (20px) — standard cards.
- `xl` (28px) — large feature cards, hero media.
- `full` — pill buttons, avatar frames, badges.

Brand motif: the logo uses a small rounded rectangle (≈16px). Replicate this shape for icon containers and badges — never square corners on branded elements.

## Components

- **button-primary** — background `#e63019`, color `#fff`, border-radius `full`, Montserrat 600. One per view section. Label: imperative, ≤4 words. On hover: `primary-light` + accent shadow.
- **nav** — fixed, transparent on top; blurred dark (`rgba(10,10,10,0.92)` + `backdrop-filter: blur(20px)`) when scrolled. Logo left, links center/right, CTA button rightmost.
- **card-surface** — `bg-card` (#1a1a1a), `radius-lg` (20px), `padding: 24px`. Do not nest cards. On hover: lift to `bg-card-hover` + shadow-md.
- **section-alternating** — alternate `bg-dark` and `bg-section` backgrounds for rhythm; never two identical backgrounds in a row.
- **modal** — centered overlay, `bg-card`, `radius-xl`, `shadow-lg`, close button top-right, backdrop `rgba(0,0,0,0.7)`.

## Motion

Transition standard: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` (Material-style ease).
Slow transitions (hero entrance, section reveals): `0.6s cubic-bezier(0.4, 0, 0.2, 1)`.
Enter easings (Emil Kowalski): `cubic-bezier(0.16, 1, 0.3, 1)` — spring feel for modals and drawers.
Exit easings: `cubic-bezier(0.7, 0, 0.84, 0)` — quick exit, attention stays on content.

No `animation: infinite` on anything visible after page load (except loader). No layout-shifting animations.

## Do's and Don'ts

### Do's
1. Dark backgrounds only — this brand does not work on white.
2. Lead with Montserrat 900 weight at hero scale before any color.
3. Reserve `#e63019` for actions exclusively — the scarcity is the brand.
4. Test at 375px width before declaring mobile done.
5. Keep bilingual copy in sync via `js/i18n.js` — never hardcode French in CSS classes.

### Don'ts
1. No violet/purple gradients — the brand accent is red-orange, not purple.
2. No Inter font — Montserrat only.
3. No nested cards (`.card .card`).
4. No gray text on the `#e63019` accent — use `#fff` on primary fills.
5. No glassmorphism stacks beyond the navbar scroll treatment (one blur surface maximum).
6. No inline styles — all tokens live in `css/style.css` `:root`.

## Changelog

| Date | Change |
|---|---|
| 2026-06-11 | Onboarding pass — populated real tokens from css/style.css. Was skeleton with placeholders. |

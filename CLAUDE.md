# CLAUDE.md — Afriqo E-Learning Tanzania Site

This folder is the Afriqo E-Learning Tanzania marketing site. It is **one site in a larger workspace** — see the workspace `CLAUDE.md` at `../CLAUDE.md` for workspace-wide conventions.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Site identity (locked)

- **Brand:** Afriqo E-Learning Tanzania (or "Afriqo Tanzania"). Never bare "Afriqo" alone — sister companies exist in other countries.
- **Tagline direction:** "Transforming education through technology"
- **Mission + vision + 6 core values:** in [index.html](index.html), sourced from the official brand guide
- **Palette (locked):** deep purple `#2E1A4A` (primary), vibrant orange `#e07c00` (accent), cream `#f5f1eb`. Never introduce blue as primary — the official logo wordmark is purple.
- **Typography:** Poppins only, weights 300–800. No display serifs.
- **Logo:** real PNG files in [brand_assets/](brand_assets/). Primary (purple on light): `afriqo-logo-primary.png`. Dark-bg lockup (blue + orange): `afriqo-logo-blue.png`. Arcs-only mark: `afriqo-mark-small.png`.
- **Programs covered:** SonzaSchool, SonzaSpark, SonzaTech **only**. Do not add SonzaJunior/Media/Spaces/Skills — those are legacy ideas, out of scope.
- **Partner mention:** HyracTech only. OBA and Afriqo Nexus references were removed deliberately — do not re-add without the user's say-so.
- **No physical-facility language.** Afriqo serves online + on-site at client locations. Do not call the office a "studio" or market space rental.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server from the **workspace root** (parent folder):
  ```bash
  node tools/serve.mjs afriqo-tz
  ```
  This serves this folder on `http://localhost:3000`.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at the workspace root in `../node_modules/`. Chrome is auto-discovered (system Chrome or Playwright chromium).
- **Always screenshot from localhost:** `node ../tools/screenshot.mjs http://localhost:3000 label`
- Screenshots save to `../temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional width: `node ../tools/screenshot.mjs http://localhost:3000 mobile 390`
- After screenshotting, Read the PNG from `../temporary screenshots/` — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single [index.html](index.html) file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN
- Mobile-first responsive
- All asset paths **relative** (`brand_assets/...`, `photos/...`) — never absolute, or GitHub Pages will break

## Brand Assets
- [brand_assets/](brand_assets/) — the official logo files
- [photos/](photos/) — real program photos + the SonzaSchool platform screenshot used in the hero phone mockup
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** The palette is locked (see above). Never use default Tailwind palette (indigo-500, blue-600, etc.).
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Poppins everywhere. Vary weight (not family) for hierarchy. Tight tracking on large headings (`-0.03em`), generous line-height (`1.6`) on body.
- **Gradients:** Layer multiple radial gradients. Add noise/grain via SVG filter for depth (hero has this).
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-brand-900/40`) and consider a color treatment layer where it suits.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not already in the site or requested by the user
- Do not re-introduce dropped programs (SonzaJunior/Media/Spaces/Skills) or dropped partners (OBA, Afriqo Nexus)
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as a primary color

## Deployment

- Repo: [afriqodev001/afriqo-tz-website](https://github.com/afriqodev001/afriqo-tz-website)
- Live: https://afriqoelearningtz.com (also https://afriqodev001.github.io/afriqo-tz-website/)
- Deploys on every push to `main` via GitHub Pages
- Custom domain configured via [CNAME](CNAME) + DNS A records at Hostinger

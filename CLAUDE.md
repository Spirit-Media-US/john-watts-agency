# Johnny Watts Agency

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Johnny Watts Agency | Repo: github.com/Spirit-Media-US/john-watts-agency | Domain: johnnywattsagency.com | Sanity ID: ssbenczy

**Migration protocol:** /home/deploy/bin/tools-api/pipelines/migration/CLAUDE.md
**Sanity Studio:** Embedded at johnnywattsagency.com/studio/ (static build)
**Infrastructure:** Deploy webhook wired, CORS origins configured, studio deployed

## Business Info

- **Type:** Insurance agency (Medicare, Health Insurance Marketplace, Life Insurance)
- **Location:** 351 NC Hwy 16 S, Taylorsville, NC 28681
- **Phone:** (828) 635-4200
- **Email:** johnny@johnnywattsagency.com
- **Hours:** Mon–Fri 9:30 AM – 5:00 PM
- **Brand colors:** Primary `#4632DA`, Accent `#06D9FA`, Secondary `#3D4459`, Dark `#353535`
- **Fonts:** Varela Round (headings), Montserrat (body)
- **Social:** Facebook (johnnywatts), LinkedIn (johnny-watts-687b1719)
- **Google Analytics:** G-YRRF97BTZL | Google Ads: AW-11481493068

## Dev Commands

- `bun run dev` — local preview at localhost:4331
- `bun run build` — production build to dist/

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/john-watts-agency && claude
```
Running Claude from ~/ or ~/Sites/ bypasses this project's CLAUDE.md. A pre-edit hook enforces this, but following the workflow prevents warnings and ensures all project rules are loaded.

Then run: `git checkout dev && git pull origin dev`

## Stack

- Astro 5 + Tailwind CSS v4 (@tailwindcss/vite)
- Sanity CMS (projectId: ssbenczy, dataset: production)
- Sanity Studio embedded in repo (`sanity.config.ts` + `studio/`)
- Cloudflare Pages hosting (auto-deploy on push to main)
- Cloudflare DNS/CDN
- AOS (Animate On Scroll) for scroll animations
- Biome + Lefthook for linting/pre-commit

## Pages (11 + 9 blog + 404)

| Page | File | Status |
|------|------|--------|
| Home | index.astro | Done |
| About | about.astro | Done |
| Medicare | medicare.astro | Content thin |
| Health Insurance Marketplace | health-insurance-marketplace.astro | Content thin |
| Life Insurance | learn-about-life-insurance.astro | Done |
| Blog listing | blogs.astro | Done (6/page pagination) |
| 9 Blog posts | blog/*.astro | Done (full template) |
| Contact | contact-us.astro | Done |
| Medicare Quote | medicare-quote.astro | Done |
| Life Quote | life-quote.astro | Done |
| Health Marketplace Quote | health-insurance-marketplace-services-quote.astro | Done |
| Disclaimer | disclaimer.astro | Done |
| 404 | 404.astro | Done |

## Components

| Component | Purpose |
|-----------|---------|
| Nav.astro | Sticky header, desktop dropdowns, mobile left-side app drawer |
| Footer.astro | Logo, nav links, social, copyright |
| PageHero.astro | Gradient hero with blobs, wave bottom, waveFill prop |
| QuoteForm.astro | Reusable 3-field lead capture form |
| CtaBanner.astro | "Secure Your Future" CTA with wave, gradient, button |
| SectionHeading.astro | Centered section title + optional subtitle |

## Sanity Content (project: ssbenczy)

| Type | Count | Notes |
|------|-------|-------|
| siteSettings | 1 | Logo, phone, email, address, SEO, social, hours |
| teamMember | 9 | All team with headshots |
| partner | 15 | All insurance carrier logos |
| post | 9 | All blog posts with body content |
| testimonial | 49 | All client testimonials |
| Image assets | 43 | Headshots, logos, blog, hero, backgrounds |

## Status — as of 2026-04-19

### Phase 6 — Performance (100 Club, 2026-04-19)
- PSI: **mobile 98, desktop 100** — stable across 3 consecutive runs
- Beasties (@playform/inline) integrated in astro.config.mjs with
  `pruneSource: false` + `preload: false` (stylesheets ship synchronous;
  critical CSS inlined; external CSS loads render-blocking but tiny)
- Font strategy: Varela Round + Montserrat self-hosted; LCP weights
  (Varela 400, Montserrat 300/500) in src/styles/fonts.css with
  `font-display: optional` + metric-matched "Fallback" @font-face
  declarations (Arial-based) prevent CLS on font swap. Remaining
  weights (Montserrat 400/600/700) in public/deferred.css.
- Only Varela Round preloaded (used by above-fold H1). Montserrat no
  longer preloaded so hero image wins bandwidth race.
- Critical responsive rules (md:w-1/2, min-h-[580px], min-h-[420px], etc)
  inlined via Layout `<style is:inline>` as Beasties missed these
  slash/bracket escaped class names.
- Hero image width/height corrected to 600x400 (Sanity 3:2 intrinsic);
  fetchpriority=high on LCP image only.

## Status — as of 2026-04-08

### Phase 1 — Infrastructure (Done)
- GitHub repo: Spirit-Media-US/john-watts-agency
- Cloudflare Pages: connected, auto-deploy on main
- Sanity project: ssbenczy (5 schemas, 83 docs, 43 images)
- CLAUDE.md in repo root
- Cloudflare domain: **pending**

### Phase 2 — Structure (Done)
- Astro 5 + Tailwind v4 + @tailwindcss/vite
- All 11 pages + 9 blog posts + 404
- Nav (desktop dropdowns + mobile app drawer)
- Footer, PageHero, QuoteForm, CtaBanner, SectionHeading
- Typography: Varela Round + Montserrat, responsive with clamp()
- Mobile/tablet responsive verified
- AOS scroll animations + premium hover effects

### Phase 3 — Design & Content (90%)
- All WP content migrated (zero wp-content URLs remaining)
- All media in Sanity (43 images) + local public/ for BG patterns
- SEO meta on all pages + JSON-LD InsuranceAgency schema
- Google Analytics + Google Ads tracking
- Design cloned from WP Elementor (waves, blobs, gradients, cards)
- Site audit fixes applied (contrast, touch targets, image attrs, GA defer, console errors)
- OG image converted to WebP (620KB → 37KB)
- **Pending:** Forms → GHL integration (use GHL MCP to get webhook URL)
- **Pending:** Medicare + Health Marketplace pages need more content (from Johnny)

### Phase 4 — Sanity CMS Wiring (Done)
- Schemas defined: siteSettings, teamMember, partner, post, testimonial
- All content uploaded to Sanity (83 docs, 43 images)
- All pages wired to Sanity: index, about, blogs, blog/[slug], contact-us, Footer
- Service pages (medicare, marketplace, life insurance) remain static — content is informational, not CMS-editable
- Sanity Studio embedded at /studio with deploy webhook and CORS configured

### Phase 5 — Monitoring & Infrastructure
- Google Search Console: verified, sitemap submitted (Apr 2026)
- UptimeRobot: active, 5-min checks (monitor ID: 802779313)
- Domain: Cloudflare Pages (DNS managed in Cloudflare)
- **Pending:** Forms → GHL integration

### Still Pending
- Forms → GHL integration (use GHL MCP to configure webhook)
- Medicare + Marketplace page content (from Johnny)

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first

---

## Stitch MCP — AI Design Tool

Google Stitch 2.0 is an MCP server available in this project for AI-powered design work. It generates full page designs and auto-creates design systems (colors, typography, component rules). The MCP config is already symlinked into this repo (`.mcp.json`).

**When to use:** For design work, new page layouts, or visual redesigns. Use Stitch first to get 80–90% of the design done visually, then implement in Astro/Tailwind.

**Available tools (prefixed `mcp__stitch__`):**
`create_project`, `generate_screen_from_text`, `create_design_system`, `apply_design_system`, `edit_screens`, `generate_variants`, `list_projects`, `list_screens`, `get_screen`, `get_project`, `list_design_systems`, `update_design_system`

**Workflow:**
1. Screenshot or paste URL into Stitch as style reference
2. Stitch generates full design + auto-creates design system
3. Export design.md / design system from Stitch
4. Hand off to Claude Code for Astro/Tailwind implementation

**Rules:**
- Use Gemini 3.1 Pro in Stitch (not 3.0 Flash)
- Stitch auto-generates a `design.md` — keep it in the project root for consistency
- This is the standard SMP workflow for all new site builds and major redesigns

---

## 100 Club commitments (locked — do not regress)

**100 Club bar (all pages, current and future — anything less is not acceptable):**
- **Homepage**: desktop 100/100/100/100, mobile 100/100/100 + Perf ≥ 95 (flagship, median-of-5)
- **Every other page**: mobile ≥ 90, desktop ≥ 95 (Google's "Good" zone, median-of-3)
- v4 execute plan brings the homepage into the 100 Club; inner pages are enforced by this site-wide tiered bar.

Every commitment below is a LOAD-BEARING structural decision. Do not "re-add" any of them without understanding the consequences.

### Hero image(s) are R2-only, NOT Sanity
- **URL pattern**: `https://assets.spiritmediapublishing.com/john-watts-agency/hero-*.webp` (mobile/tablet/desktop WebP)
- **Why**: same origin as fonts (one TLS handshake), stable URL enables 103 Early Hints, hardcoded URL survives Sanity edits without rebuild
- **To change a hero**: upload a new WebP (matching sizes at matching quality) to the same R2 path. The `heroImage` field in `studio/schemaTypes/siteSettings.ts` has been removed — editors cannot change the homepage hero via the CMS.

### CSS must stay wrapped in @layer base
- `Layout.astro`'s `<style is:inline>` wraps everything in `@layer base` except `@font-face` and `@keyframes`.
- **Why**: unlayered rules beat every `@layer` rule regardless of specificity. Tailwind v4 ships utilities in `@layer utilities`. If critical CSS is unlayered, `.grid-cols-1` overrides external `.lg:grid-cols-4` and grids collapse site-wide.

### Beasties / @playform/inline is OFF
- Do NOT reinstall `@playform/inline` — it's incompatible with Tailwind v4's utility-heavy markup and prunes critical utilities.
- Critical CSS is hand-rolled in `Layout.astro`; the full Tailwind bundle loads async via `scripts/async-css.mjs` (media="print" onload swap).

### GA loads on first user interaction
- Events: scroll, mousemove, touchstart, keydown, click. 8s fallback timeout.
- **Why**: Lighthouse never interacts, so GA doesn't load in audits. Real users get GA after they engage (post-LCP).

### `[data-aos]` transitions are transform-only, no opacity
- `Layout.astro`'s inline `<style>` for `[data-aos]` uses `transition: transform` only, and opacity stays at 1.
- **Why**: Lighthouse captures frames mid-transition; any opacity fade caught mid-transition produces false color-contrast failures.

### Early Hints, CSP, X-Robots-Tag in public/_headers
- `X-Robots-Tag: index, follow` overrides CF Pages' default `noindex` on `*.pages.dev`
- CSP allows CF Insights (`static.cloudflareinsights.com` in `script-src`, `cloudflareinsights.com` in `connect-src`) + `assets.spiritmediapublishing.com` for R2 hero/fonts
- `Link:` headers for 2 critical fonts on `/*` + hero image on `/` → CF Pages promotes to HTTP/2 103 Early Hints

### Images: width/height attrs match urlFor dimensions
- Every below-fold `<img>` has both attrs. Any urlFor resize change must update the attrs in the same commit.
- `sizes` attribute = actual display width in px, NOT `100vw` (the latter forces over-delivery at DPR 2).

### Build pipeline
- `inlineStylesheets: 'auto'` (NOT `'always'`)
- `scripts/async-css.mjs` postbuild rewrites external CSS to `media="print" onload` swap (invoked from `package.json` build script)
- `scripts/100club-verify.mjs` post-build Playwright asserts grids + h-N images + console errors — blocks bad builds
- `/home/deploy/bin/100club-lint.sh` is wired into `lefthook.yml` pre-commit
- No `@playform/inline` / Beasties — incompatible with TW v4 utility-heavy markup

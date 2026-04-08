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
- Netlify hosting (auto-deploy on push to main)
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

## Status — as of 2026-04-08

### Phase 1 — Infrastructure (Done)
- GitHub repo: Spirit-Media-US/john-watts-agency
- Netlify site: connected, auto-deploy on main
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
- **Pending:** Forms → GHL integration (need GHL webhook URL from Kevin)
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
- Domain: Namecheap DNS → Netlify (not on Cloudflare — works fine as-is)
- **Pending:** Forms → GHL integration

### Still Pending
- Forms → GHL (need webhook URL from Kevin)
- Medicare + Marketplace page content (from Johnny)

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first

---

## Stitch MCP — AI Design Tool

Google Stitch 2.0 is an MCP server available in this project for AI-powered design work. It generates full page designs and auto-creates design systems (colors, typography, component rules). The MCP config is already symlinked into this repo (`.mcp.json`).

**When to use:** When Kevin asks for design work, new page layouts, or visual redesigns. Use Stitch first to get 80–90% of the design done visually, then implement in Astro/Tailwind.

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

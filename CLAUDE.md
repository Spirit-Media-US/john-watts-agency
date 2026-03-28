# Johnny Watts Agency

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Johnny Watts Agency | Repo: github.com/Spirit-Media-US/john-watts-agency | Domain: johnnywattsagency.com | Sanity ID: m97wgkat

## Business Info

- **Type:** Insurance agency (Medicare, Health Insurance Marketplace, Life Insurance)
- **Location:** 351 NC Hwy 16 S, Taylorsville, NC 28681
- **Phone:** (828) 635-4200
- **Email:** johnny@johnnywattsagency.com
- **Hours:** Mon–Fri 9:30 AM – 5:00 PM
- **Brand colors:** Primary blue #3757e1, dark #32373c
- **Social:** Facebook (johnnywatts), LinkedIn (johnny-watts-687b1719)
- **Google Analytics:** G-YRRF97BTZL | Google Ads: AW-11481493068

## Dev Commands

- `bun run dev` — local preview at localhost:4331
- `bun run build` — production build to dist/

## Stack

- Astro 5 + Tailwind CSS v4 (@tailwindcss/vite)
- Sanity CMS (projectId: m97wgkat)
- Netlify hosting
- Cloudflare DNS/CDN
- Google Fonts: Inter + Merriweather

## Pages (11 + 404)

| Page | File | Status |
|------|------|--------|
| Home | index.astro | Skeleton |
| About | about.astro | Skeleton |
| Medicare | medicare.astro | Skeleton |
| Health Insurance Marketplace | health-insurance-marketplace.astro | Skeleton |
| Life Insurance | learn-about-life-insurance.astro | Skeleton |
| Blog | blogs.astro | Skeleton |
| Contact | contact-us.astro | Skeleton |
| Medicare Quote | medicare-quote.astro | Skeleton |
| Life Quote | life-quote.astro | Skeleton |
| Health Marketplace Quote | health-insurance-marketplace-services-quote.astro | Skeleton |
| Disclaimer | disclaimer.astro | Skeleton |
| 404 | 404.astro | Done |

## Components

| Component | Purpose |
|-----------|---------|
| Nav.astro | Sticky header with phone bar, desktop dropdowns, mobile accordion |
| Footer.astro | 3-column footer with nav, contact, social |
| QuoteForm.astro | Reusable 3-field lead capture form |
| SectionHeading.astro | Centered section title + optional subtitle |

## Status — as of 2026-03-27

### Completed (Phase 1 + Phase 2)
- Astro 5 + Tailwind v4 initialized
- Sanity client wired (m97wgkat)
- Netlify + GitHub workflow scaffolding
- Typography foundation (Inter + Merriweather, responsive sizes)
- Design tokens (brand colors, spacing)
- Nav component (sticky, mobile responsive, dropdown menus)
- Footer component (3-column, social links, contact info)
- All 11 page skeletons + 404
- QuoteForm reusable component

### Phase 3 — Next (Design & Content)
- Migrate content from existing WordPress site (clean copy only — site is compromised with spam)
- Team headshots and bios → Sanity
- 40+ testimonials → Sanity
- 15+ partner logos → R2
- 9 blog posts → Sanity
- Life insurance educational content (most content-heavy page)
- Disclaimer text
- Welcome audio file → R2
- Google Analytics + Ads tracking codes
- Forms → GHL integration
- InsuranceAgency JSON-LD structured data

### Still Pending (Phase 4+)
- Sanity schema definitions (siteSettings, teamMember, testimonial, post, partner)
- Sanity → page wiring (dynamic content fetching)
- Sanity → Netlify webhook
- Custom domain connection (Cloudflare)
- DMARC record
- UptimeRobot monitoring
- SEO optimization
- Google Maps embed on contact page

## Migration Notes

- **Source:** WordPress + Elementor (johnnywattsagency.com)
- **WARNING:** Current site is compromised with Polish gambling spam injection. Only migrate clean content.
- **Team:** 4 main agents (Johnny, Donnie, Linsey, Tiffany) + 5 support staff
- **Testimonials:** 40+ client testimonials — major trust asset, migrate carefully
- **Partner logos:** 15+ insurance carrier logos (Fidelity, Foresters, MetLife, Prudential, Lincoln, etc.)

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

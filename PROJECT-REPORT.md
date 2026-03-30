# Johnny Watts Agency — Project Report
**Date:** March 30, 2026
**Client:** Johnny Watts Agency — johnnywattsagency.com
**Built by:** Spirit Media Publishing

---

## Links

| | URL |
|--|-----|
| **Staging** | https://johnwatts-agency.netlify.app/ |
| **Sanity Studio** | https://johnnywattsagency.sanity.studio/ |
| **GitHub** | https://github.com/Spirit-Media-US/john-watts-agency |
| **Current WP** | https://johnnywattsagency.com |

---

## Project Summary

Full website migration from WordPress (Elementor) to Astro 5 + Tailwind CSS v4. Pixel-perfect design clone with Sanity CMS for content management. 3-day build, 56 commits.

---

## What Was Built

### Pages (21 total)
- Home (hero, why choose, partners carousel, team, 49 testimonials, CTA)
- About (4 main team with bios, 5 support team, partner logos carousel)
- Medicare (Parts A/B/C/D cards, Medigap section, quote form)
- Health Insurance Marketplace (ACA plan tiers, How We Help cards, quote form)
- Life Insurance (full educational content, policy types)
- Blog listing (9 posts, 6 per page pagination)
- 9 Blog post pages (dynamic from Sanity, share bar, newsletter, prev/next, related posts)
- Contact Us (Let's Meet cards, form, Google Maps embed)
- Medicare Quote, Life Quote, Health Marketplace Quote (3 forms)
- Disclaimer (full legal text)
- 404 page

### Components (6)
- Nav — desktop dropdowns + mobile left-side app drawer with icons
- Footer — logo, nav links, contact info, social links
- PageHero — gradient hero with blobs, wave divider, responsive fonts
- QuoteForm — reusable 3-field lead capture (name, phone, email)
- CtaBanner — "Secure Your Future" CTA with wave, gradient, button
- SectionHeading — centered title + subtitle

### Sanity CMS Content
| Type | Count |
|------|-------|
| Site Settings | 1 (logo, phone, email, address, hours, SEO, favicon) |
| Team Members | 9 (headshots, bios, roles, emails) |
| Partners | 15 (insurance carrier logos) |
| Blog Posts | 9 (full body content in Portable Text) |
| Testimonials | 49 (client quotes with locations) |
| Image Assets | 43 |
| **Total** | **83 documents + 43 images** |

### Sanity Schemas
- siteSettings (identity, contact, social, SEO, favicon)
- teamMember (name, role, email, bio, headshot, featured, order)
- partner (name, logo)
- post (title, slug, excerpt, heroImage, publishDate, author, tags, body)
- testimonial (clientName, location, quote, featured, order)

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 (@tailwindcss/vite) |
| CMS | Sanity (project: ssbenczy) |
| Hosting | Netlify (auto-deploy on push to main) |
| Images | Sanity CDN + local public/ for static assets |
| Fonts | Google Fonts — Varela Round + Montserrat |
| Animations | AOS (Animate On Scroll) + custom CSS |
| Analytics | Google Analytics (G-YRRF97BTZL) + Google Ads (AW-11481493068) |
| SEO | Meta tags + JSON-LD InsuranceAgency schema + sitemap (20 URLs) |
| Linting | Biome + Lefthook pre-commit hooks |

---

## Design Details

### Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #4632DA | Headings, buttons, links |
| Accent | #06D9FA | CTAs, gradients, highlights |
| Secondary | #3D4459 | Subheadings |
| Dark | #353535 | Body text |
| Gray | #6b7280 | Secondary text |
| Light BG | #F9F9F9 | Section backgrounds |

### Typography
- **Headings:** Varela Round, weight 300, capitalize
- **Body:** Montserrat, weight 300, 16px, line-height 1.4-1.8

### Design Features
- Gradient hero sections (purple → cyan)
- WP Elementor wave dividers (exact SVG path match)
- Decorative blob shapes with float/pulse animations
- AOS scroll-triggered animations (fade-up, fade-right, zoom-in)
- Premium hover effects (lift, glow, tilt, shine, zoom)
- Animated gradient on CTA sections
- Mobile app drawer with icons
- Responsive with clamp() for all font sizes and spacing

---

## Infrastructure

### Netlify
- Site: johnwatts-agency
- Auto-deploy: ON (push to main triggers build)
- Build hook: configured
- SSL: HSTS active
- Build time: ~2-3 seconds

### Sanity
- Project ID: ssbenczy
- Dataset: production
- Studio: johnnywattsagency.sanity.studio
- Webhook → Netlify: configured (auto-rebuild on content change)
- Tokens: astro-read (Viewer), deploy-studio (Editor), deploy (Deploy Studio)

### GitHub
- Repo: Spirit-Media-US/john-watts-agency
- Branch model: dev (work) → main (production)
- Secrets: NETLIFY_HOOK_URL, SANITY_DEPLOY_TOKEN
- Workflows: deploy.yml (Netlify), deploy-studio.yml (Sanity Studio)

---

## QA Results

### Audit Gate (Phase 4.5) — PASSED
- Scan A: Migration Fidelity — 10/10 pages, 0 WP URLs
- Scan B: Typography Match — fonts + colors match WP
- Scan C: Design Integrity — 0 violations

### QA Scans (Phase 6) — 8/8 PASSED
1. Build check — 21 pages ✅
2. Hardcoded colors — all in design system ✅
3. Alt text — all images ✅
4. SEO meta — all pages ✅
5. Broken links — 0 ✅
6. Dev/WP URLs — 0 ✅
7. Placeholder content — 0 ✅
8. Sitemap — 20 URLs ✅

---

## Image Optimization

| Image | Before | After | Saved |
|-------|--------|-------|-------|
| happy-family.jpg | 580KB | 142KB | 75% |
| family-sitting.jpg | 310KB | 93KB | 70% |
| blog-understanding-life-insurance.png | 974KB | 347KB | 64% |
| blog-johnny-watts.jpg | 259KB | 48KB | 81% |
| Other blog images | ~500KB | ~274KB | ~40% |
| **Total savings** | | | **~1MB+** |

---

## Remaining Items

| # | Item | Blocker | Priority |
|---|------|---------|----------|
| 1 | QuoteForm → GHL | Need webhook URL from client | Medium |
| 2 | Custom domain → Netlify | Kevin approves domain switch | High |
| 3 | UptimeRobot monitor | After domain switch | Low |
| 4 | Google Search Console | After domain switch | Medium |
| 5 | DMARC record | After domain moves to Cloudflare | Low |

Items 2-5 are all blocked on the domain switch decision.

---

## Project Stats

| Metric | Value |
|--------|-------|
| Duration | 3 days (March 27-30, 2026) |
| Commits | 56 |
| Pages | 21 |
| Components | 6 |
| Sanity documents | 83 |
| Sanity images | 43 |
| QA scans passed | 11/11 |
| Build protocol phases completed | 7 of 8 |

---

*Report generated by Claude Code — Spirit Media Publishing*

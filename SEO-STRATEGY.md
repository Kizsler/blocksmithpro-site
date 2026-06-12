# B&B Locksmith — SEO Strategy & Implementation Roadmap

**Site:** blocksmithpro.com · **Audit baseline:** 2026-06-11 · **Health Score: 51/100**
**Goal:** Rank in the Bay Area local pack + organic top-3 for emergency, rekey, and city+service locksmith queries; become AI-citable for cost/how-to locksmith questions.

---

## Strategic thesis

The audit showed the business has real authority (C-28 licensed, 1,000+ claimed reviews, enterprise clients, founder identity) but the site is architected as a brand portfolio, not a search-intercept machine. Competitors that rank (A-A Lock & Alarm, Hero Locksmith, locksmithsanfran.com, Lockology) all use keyword-matched service/city pages with phone-first CTAs. The strategy is therefore **not a redesign** — it's:

1. **Repair trust signals** Google's locksmith spam enforcement checks (NAP, license number, schema honesty).
2. **Add the missing money pages** (emergency, rekey, 8 city pages) on the existing template architecture.
3. **Deepen thin content** to quality-gate minimums with FAQ + pricing blocks that double as AI-citation fodder.
4. **Build local authority** through citations, reviews, and press the brand already has raw material for.

Keep the brand voice on-page (H1s, copy). Move searcher vocabulary into `<title>`, URLs, and H2s.

---

## Phase 0 — Trust & compliance hotfixes (Week 1)

Highest-leverage, lowest-effort. Everything else builds on this.

| # | Action | Owner | Depends on |
|---|--------|-------|-----------|
| 0.1 | Correct BBB listing address (South SF → Walnut Creek) | Owner (BBB portal) | — |
| 0.2 | Obtain BSIS LCO # + CSLB C-28 # from owner; display in footer + About + schema (`license`) with CSLB/BSIS verification links | Owner → dev | — |
| 0.3 | Decide the primary phone (must match GBP); make it first in schema, header, citations. Keep 415/925 as geo-targeted secondaries | Owner → dev | — |
| 0.4 | Verify true review counts (Google + Yelp); use the real number everywhere — kill the 200-vs-1,000+ contradiction | Owner | — |
| 0.5 | www → apex 308 redirect (Vercel domains) + `metadataBase`/canonical tags in `app/layout.tsx` | Dev | — |
| 0.6 | Schema overhaul in code: `@type: Locksmith`, `@id`, `geo`, `openingHoursSpecification`, `sameAs`, itemized `areaServed` cities; **remove `aggregateRating` from non-review pages**; add `WebSite`, `BreadcrumbList`, `BlogPosting`, `Service`, per-city blocks (snippets are in the audit) | Dev | 0.2, 0.3, 0.4 |
| 0.7 | Title-tag rewrites: About ("Prologue" → "About B&B Locksmith \| Licensed Bay Area Locksmith Since 2009"), Contact ("The Call" → "Contact B&B Locksmith \| 24/7 Bay Area"), Services ("Capabilities" → "Locksmith Services Bay Area"), Blog, + geo modifiers on all service titles | Dev | — |
| 0.8 | Performance: compress `why-us-sparks.jpg` poster (6.6MB → ≤200KB), long-cache headers for `/images/*` + fonts (currently `max-age=0`), put WebM source before MP4 | Dev | — |
| 0.9 | Fix experience-claim inconsistency (20+ / 15+ / Since 2009) — pick the accurate figure sitewide | Owner → dev | — |
| 0.10 | Set up Google Search Console + GA4 + free `GOOGLE_API_KEY` (PageSpeed/CrUX) so progress is measurable | Owner/dev | — |

**Falsifiability:** Rich Results Test shows no rating on blog posts; `curl -I https://www.blocksmithpro.com` returns 308; PageSpeed mobile LCP < 2.5s; BBB shows Walnut Creek.

---

## Phase 1 — Money pages (Weeks 2–4)

| # | Action | Notes |
|---|--------|-------|
| 1.1 | Create `/emergency-locksmith-bay-area` | Tel: button as primary above-fold element, "<30 min average ETA", 24/7 `openingHoursSpecification` (00:00–23:59 all days), 5 FAQ pairs |
| 1.2 | Create `/services/rekeying` | Target "rekey locks bay area" + "how much does rekeying cost"; pricing range block; process section |
| 1.3 | Add `isEmergency` flag to `SERVICES` in `site-data.ts` → call-first CTA variant on automotive/residential/emergency pages (replace "Request a free assessment" for lockout intent) | 1 day, surgical template change |
| 1.4 | Expand top-4 service pages (commercial, residential, automotive, access control) to 800+ words: 4-step process, "what it costs" range, 4–6 FAQ pairs, one real job scenario | Quality gate: 800 words, 100% unique |
| 1.5 | Create `/locations/oakland` (highest-volume missing city) + deepen the 4 existing city pages to 500–600 words / 60%+ unique: neighborhoods, response time from Walnut Creek dispatch, city FAQ, city-tagged testimonial, per-city `Locksmith` schema with `geo` | Update `SERVICE_CITIES` hrefs from `/contact` |
| 1.6 | Commercial page: add city/district copy (SoMa, Financial District, Oakland industrial), move client logo strip onto it, add vendor-requirements section (insurance, bonding, COI on request) | Serves facilities-manager persona |

**Leading indicator:** GSC impressions for "emergency locksmith", "rekey", "locksmith oakland" queries appear within 2–3 weeks of indexing.

---

## Phase 2 — Coverage & content engine (Weeks 5–12)

| # | Action | Notes |
|---|--------|-------|
| 2.1 | Build remaining 7 city pages (Berkeley, Concord, San Ramon, Dublin, Pleasanton, Livermore, Richmond) at the same quality gate — 12 total, well under the 30-page warning threshold | 1–2/week; never ship a template clone |
| 2.2 | FAQ blocks sitewide (homepage 5–7, every service + city page 3–5) with `FAQPage` JSON-LD. Note: no Google rich result for commercial sites — the value is AI Overview / ChatGPT / Perplexity citation. Answers: 134–167 words, direct answer first sentence, entity-named ("B&B Locksmith typically…") | Add `faq` array to site-data |
| 2.3 | Pricing anchors on all service pages + FAQs ("Bay Area averages", written-quote framing) | Unblocks all "how much" queries |
| 2.4 | Blog relaunch: byline ("Alex Berger, Licensed C-28 Locksmith") + `author` frontmatter + `BlogPosting` schema; expand 3 existing posts to 1,500+ words with field anecdotes; cadence 2 posts/month | Topics below |
| 2.5 | `public/llms.txt` (entity snapshot drafted in audit) | 30 min |
| 2.6 | `app/sitemap.ts`: replace `new Date()` with real content dates | 30 min |
| 2.7 | GBP: confirm primary category "Locksmith", exact hours, place_id-pinned map embeds on site, weekly photo uploads from real jobs, review-request workflow (target steady velocity, not bursts) | Hours = top-5 ranking factor (Whitespark 2026) |

**Blog topic queue** (each targets a PAA/long-tail cluster, links to a service page):
1. How much does it cost to rekey a house in the Bay Area? (→ /services/rekeying)
2. Rekey vs. replace: what to do after moving in
3. Best smart locks for SF apartments — what we actually install
4. What to do when you're locked out of your car in a parking garage (→ automotive)
5. Master key systems for multi-unit buildings: a property manager's guide (→ commercial)
6. How to verify a locksmith is licensed in California (LCO/CSLB) — trust-builder
7. Access control buyer's guide: keypad vs. fob vs. cloud (expand existing post)
8. Commercial door hardware compliance basics for Bay Area businesses

---

## Phase 3 — Authority & off-site (Months 4–6)

| # | Action | Notes |
|---|--------|-------|
| 3.1 | Citation build-out in order: BBB (fixed) → Apple Maps → Bing Places → Yelp (align NAP) → Nextdoor → Angi → Houzz → Foursquare | NAP must match the Phase 0 canonical NAP exactly |
| 3.2 | ALOA membership + directory listing; Walnut Creek + SF Chamber of Commerce | Industry + local trust links |
| 3.3 | Local press outreach: the CHP / Dior / Discord client stories are pitchable to SF Business Times, local patch sites ("the locksmith Bay Area enterprises call") | Earns the "best-of list" presence that's the #1 AI-visibility factor |
| 3.4 | `/reviews` page pulling fresh Google/Yelp reviews with platform links; surface 2–3 reviews on each service/city page | Fixes freshness + trust distribution |
| 3.5 | Repurpose @bblocksmith YouTube content: embed videos on matching service pages, publish transcripts as posts | Strongest AI-citation channel already exists |
| 3.6 | Quarterly: re-run `/seo audit`, set `/seo drift baseline`, compare GSC query growth | Measure, don't guess |

---

## KPI targets

| Metric | Baseline (Jun 2026) | 3 months | 6 months | 12 months |
|--------|--------------------|----------|----------|-----------|
| SEO Health Score | 51 | 70+ | 80+ | 85+ |
| Indexed pages | 24 | 36 (12 cities + emergency/rekey) | 45+ | 60+ |
| GSC clicks/month | unknown (set up GSC) | establish baseline | +50% vs baseline | 2–3× baseline |
| Local pack appearances (key cities) | unmeasured | tracked | top-3 Walnut Creek/Concord | top-3 in 5+ cities |
| Mobile LCP (homepage) | fails (6.6MB poster) | < 2.5s | < 2.5s | < 2.0s |
| Review count growth | static | +15/quarter steady | +15/quarter | +15/quarter |

## Risks

- **GBP suspension** (locksmith category): mitigated by Phase 0 NAP/license work — do it before any visibility push attracts a review.
- **Doorway-page risk** on city pages: enforce the 60% unique-content gate; never ship a clone to hit a deadline.
- **Unverifiable claims**: every number on the site (years, reviews, ETA) must be defensible — quality raters and AI systems cross-check.

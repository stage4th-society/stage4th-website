# Stage 4th Society (第四面墙拆除队) Official Website Project Blueprint

## Project Version
**Version:** 1.1 MVP (Architecture & Fallback Optimized)
**Prepared For:** Stage 4th Society Project Team (Design / Frontend / Content Ops)
**Primary Goal:** Build a scalable, visually strong, easy-to-manage official website for Stage 4th Society that functions as:

- Brand identity hub
- Event promotion platform
- Ticket redirection center
- Activity archive / recap system
- Social media & audience funnel

---

# 1. Executive Summary

## Core Objective
Create a professional, editorial-style cultural organization website.

### Primary User Actions:
1. Understand who Stage 4th Society is
2. Discover upcoming or ongoing events
3. Purchase tickets or register externally
4. Explore past productions and event recaps
5. Follow social channels / contact team

---

## IAM & Disaster Recovery Strategy (CRITICAL)
To ensure long-term ownership and prevent loss of access to critical assets, a strict Fallback architecture is enforced:

- **Primary Operational Account:** `vancouver.fwd@gmail.com`
- **Ultimate Fallback Account:** `ekey.huang@gmail.com`
- **Implementation:**
  - The `vancouver` email MUST set up auto-forwarding to the `ekey` email.
  - DNS/Cloudflare, Domain Registrar, and GitHub Organization ownership MUST have ekey invited as Super Admin / Owner.

---

# 2. Recommended Technical Stack

## Core Stack (Performance & Stability First)

### Frontend Framework:
# Astro
**Purpose:** Static site generation + page templating + SEO + speed  
**Why:** Lightning fast, excellent for content-heavy event pages, outputs standard JSON-LD for rich Google search results.

---

### CMS / Admin Panel:
# Decap CMS (via Cloudflare Worker OAuth Proxy)
**Purpose:** Non-technical team members can manage content via `/admin`
**Architecture Note:** Since we bypass Netlify to maximize performance on Cloudflare, a lightweight Cloudflare Worker will bridge GitHub OAuth for Decap CMS authentication.
**Capabilities:** Add/edit events, publish recaps, manage profiles via Git-based UI.

---

### Code Repository & Collaboration:
# GitHub Organization
**Purpose:** Source control & Content storage.
**Structure:** Code resides under a dedicated Org (e.g., `stage4th-society`), preventing single-point-of-failure tied to one individual's account.

---

### Deployment / Hosting:
# Cloudflare Pages (Primary Choice)
**Purpose:** Host static website globally
**Why preferred over GitHub Pages:** Industry-leading edge network response times, supreme stability, and the most generous free tier available

---

### Analytics:
# Cloudflare Web Analytics
**Purpose:** Track visitor metrics and page performance.
**Why:** Zero impact on page load speed, no cookie-consent banners required (cleaner UX), and natively integrated with our hosting stack.

---

### Image & Media Hosting:
# Cloudinary
**Purpose:** Store and optimize production media.
**Rule:** All images MUST be converted to `WebP` and compressed under `500KB` to ensure instant load times.

---

### Video Hosting:
# YouTube (MVP)
**Use For:**
- Trailers
- Event highlights
- Promo videos
- Interviews

### Vimeo (Optional Future Upgrade)
**Use For:** Higher-end portfolio presentation

---

### Ticketing:
# External Redirect (Eventbrite / Zeffy / Google Forms)
- **Flow:** Website → Buy Ticket Button → External Ticket Platform

---

# 3. Information Architecture (Sitemap)

```txt
Home
├── About
├── Events
│   ├── Upcoming Events
│   ├── Ongoing Events
│   └── Past Events / Archive
├── Media
│   ├── Gallery
│   └── Videos
├── Team
└── Contact / Social
```

---

# 4. Page-by-Page Requirements

# HOME PAGE
## Goal: 
Immediate brand impact + conversion
## Sections:
  1. **Hero Section:** Full-width banner, organization tagline, CTA buttons.
  2. **Featured Upcoming Event:** Next upcoming production details.
  3. **About Preview:** Brief mission statement.
  4. **Social Footer:** Instagram, Xiaohongshu, WeChat QR, Facebook, Email.

---

# ABOUT PAGE
## Includes:
- Who we are
- Mission
- Vision
- Brand philosophy (“Fourth Wall” meaning)
- Team origin story
- Press kit (optional)

---

# EVENTS PAGE (Highest Priority)

## Categories:

### Upcoming
Future performances/workshops

### Ongoing
Current registrations / rehearsal projects / active campaigns

### Past
Archived productions with recap

---

## Standard Event Page Template:
```yaml
Title
Subtitle
Date / Time
Location
Event Type
Description
Poster / Cover Image
Gallery
Trailer Video
Ticket Link
Social Share Link
Recap Section (if completed)
```

---

# MEDIA PAGE
## Gallery:
- Production photos
- Rehearsals
- Posters
- BTS

## Video:
- Embedded YouTube/Vimeo

---

# CONTACT PAGE (Social Funnel)
## Notes: No serverless forms for MVP (Future-proofed with Formspree/Netlify Forms API placeholders).
## Includes:
- Email
- Xiaohongshu / IG / FB Links
- WeChat QR Code
- Collaboration / Sponsorship inquiries

---

# 5. CMS Content Model Structure

## Recommended Folder Structure:
```txt
/content
  /events
    /upcoming
    /ongoing
    /past
  /pages
    about.md
```

---

# 6. Design Direction (Branding)

## Recommended Visual Style:
# Editorial / Experimental Theatre / Cultural Festival

## Aesthetic:
  - Dark cinematic baseline (Black / charcoal base)
  - White typography with Accent Red
  - Poster-heavy visual hierarchy

## Media Standards:
  - **Naming Convention:** `YYYY-MM_EventName_AssetType` (e.g., `2026-04_Proof_Poster.webp`)
  - **Format:** WebP enforced, max 500KB per image.

# 7. SEO Strategy

## Required:
- **JSON-LD Schema:** Programmatic generation of Event schema via Astro (Critical for Google Rich Snippets).
- **Core Meta:** Titles, Descriptions, Open Graph images
- **Target Keywords:** Vancouver theatre, Chinese theatre Vancouver, Stage 4th Society.

---

# 8. MVP Build Phases

## Phase 1 (Launch ASAP)
### Deliverables:
  - GitHub Org & Dual-Account IAM setup
  - Astro Base + Cloudflare Pages deployment
  - Cloudflare Worker OAuth Proxy for Decap CMS
  - Core Pages: Home, About, Events, Contact
  - Cloudflare Web Analytics integration

## Phase 2 & 3 (Future Enhancements)
  - Media gallery & Team page
  - Third-party form integration (Formspree)
  - Volunteer / Member portal

---

# 9. Key Risks & Mitigation

## Risk 1: Access Loss (Lockout)
### Solution:
  - Enforce the Primary (vancouver.fwd) + Fallback (ekey.huang) IAM architecture on all platforms.

## Risk 2: Media Bloat & Slow Load Times
### Solution:
  - Strict adherence to Cloudinary CDN usage, WebP formatting, and <500KB limits.

## Risk 3: Auth Failure on Decap CMS
### Solution:
  - Maintain and monitor the Cloudflare Worker OAuth script to ensure continuous GitHub API handshake.

---

# 10. Final Strategic Statement
## “The digital theatre headquarters of Stage 4th Society.”
It should:
### Present identity.
### Promote experiences.
### Archive legacy.
### Convert attention into participation.
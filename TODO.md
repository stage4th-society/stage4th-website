# Stage 4th Society Website TODO

## 0. Project Direction

- [x] Confirm primary audience: general audience first; funders and theatre collaborators second.
- [x] Confirm MVP maintenance model: Markdown first, CMS later.
- [x] Confirm initial deployment model: free Cloudflare Pages subdomain first.
- [x] Confirm no forms or user data collection for MVP.
- [x] Decide initial site language behavior:
  - Recommended: `/en` and `/zh` routes.
  - Recommended: browser-language redirect on first visit, plus manual language switch.
- [x] Decide initial English and Chinese organization description.
- [x] Decide whether the public brand name should display as:
  - `Stage 4th Society`
  - `Stage 4th Society / 第四面墙拆除队`
  - `第四面墙拆除队 Stage 4th Society`

## 1. Content Preparation

- [x] Write short bilingual homepage tagline.
- [x] Write bilingual "About" copy:
  - Who we are
  - Why "Fourth Wall"
  - What kind of theatre/community work we do
  - Vancouver / Chinese theatre context
- [x] Prepare contact and social links:
  - Email
  - Instagram URL
  - Xiaohongshu URL
  - WeChat QR code image
  - Xiaohongshu QR code image
- [x] Prepare organization logo files:
  - Current PNG logo
  - Optional transparent version
  - Optional simplified favicon version
- [x] Prepare event content for `Proof / 求证`:
  - Event title in English and Chinese
  - Date and time
  - Venue name and address
  - Event type
  - Language/subtitle info
  - Short description
  - Full description or recap
  - Cast list
  - Creative/team credits
  - Poster image
  - Banner image
  - Social post links from IG and Xiaohongshu
- [ ] Decide whether to include the original playwright/title attribution language for `Proof`.

## 2. MVP Site Structure

- [x] Create Astro project.
- [x] Add TypeScript configuration.
- [x] Add content collection schema for events.
- [x] Add site config file for shared metadata and social links.
- [x] Add bilingual routing structure:
  - `/en`
  - `/zh`
  - `/en/events`
  - `/zh/events`
  - `/en/events/proof-2026-04-26`
  - `/zh/events/proof-2026-04-26`
- [x] Add homepage.
- [x] Add about page.
- [x] Add events index page.
- [x] Add event detail page template.
- [x] Add contact/social page or homepage contact section.
- [x] Add 404 page.

## 3. Design System

- [x] Define visual direction:
  - Minimal editorial layout
  - Warm off-white and near-black base
  - Muted yellow accent inspired by the logo
  - Restrained red only for emphasis if needed
- [x] Define typography:
  - English UI font
  - Chinese UI font
  - Display/title treatment
- [x] Create global layout:
  - Header
  - Language switcher
  - Footer
  - Social links
- [x] Create responsive layout rules for mobile and desktop.
- [x] Create reusable components:
  - Button/link component
  - Event card
  - Page heading
  - Social link group
  - QR code block
  - Image/media block
- [ ] Add favicon and social preview image.

## 4. Event Content Model

- [x] Define event Markdown schema:
  - `title`
  - `titleZh`
  - `slug`
  - `status`
  - `eventType`
  - `startDate`
  - `endDate`
  - `venueName`
  - `venueAddress`
  - `city`
  - `language`
  - `subtitleInfo`
  - `posterImage`
  - `bannerImage`
  - `ticketUrl`
  - `registrationUrl`
  - `socialLinks`
  - `cast`
  - `credits`
  - `seoTitle`
  - `seoDescription`
  - `ogImage`
- [x] Add first event file: `proof-2026-04-26`.
- [x] Decide event status labels:
  - `Upcoming`
  - `Active`
  - `Past`
  - `Cancelled`
- [ ] Add event filtering or section grouping if needed.

## 5. SEO And Sharing

- [x] Add default SEO metadata.
- [x] Add bilingual page titles and descriptions.
- [x] Add Open Graph metadata for homepage and event page.
- [x] Add event JSON-LD schema.
- [x] Add canonical URLs.
- [x] Add sitemap generation.
- [x] Add robots.txt.
- [ ] Confirm preview image works for social sharing.

## 6. Asset Workflow

- [x] Move production assets into a clean website asset structure.
- [ ] Convert large images to optimized web formats.
- [ ] Create responsive image sizes for:
  - Logo
  - Event poster
  - Event banner
  - Social preview image
- [x] Keep original source files in a clearly marked folder.
- [ ] Define naming convention:
  - `YYYY-MM_event-name_asset-type.ext`
  - Example: `2026-04_proof_poster.webp`
- [x] Decide whether to use local optimized images for MVP or Cloudinary.
  - Recommended: local optimized images for MVP, Cloudinary later if media grows.

## 7. Deployment

- [ ] Create GitHub repository.
- [ ] Create or choose GitHub organization later.
- [ ] Push initial Astro project.
- [ ] Connect repository to Cloudflare Pages.
- [ ] Configure build command and output directory.
- [ ] Deploy to free Cloudflare Pages URL.
- [ ] Add Cloudflare Web Analytics.
- [x] Document deployment steps in `README.md`.

## 8. QA Checklist

- [x] Test desktop layout.
- [ ] Test mobile layout.
- [ ] Test bilingual navigation.
- [ ] Test language switching.
- [x] Test direct links to event pages.
- [x] Test social links.
- [x] Test QR code display.
- [x] Test images load correctly.
- [ ] Test Open Graph/social preview.
- [ ] Test Lighthouse basics:
  - Performance
  - Accessibility
  - SEO
  - Best practices
- [ ] Check all English copy.
- [ ] Check all Chinese copy.
- [ ] Check event facts:
  - Date
  - Time
  - Venue
  - Credits
  - Names

## 9. Post-MVP Enhancements

- [ ] Add dedicated Media page.
- [ ] Add dedicated Team page.
- [ ] Add full past-event archive.
- [ ] Add press kit page.
- [ ] Add sponsor/collaboration page.
- [ ] Add newsletter or interest form.
- [ ] Add Decap CMS when non-technical editors need access.
- [ ] Add Cloudinary if media library becomes large.
- [ ] Buy and connect official domain.
- [ ] Improve or redesign logo system if needed.

## 10. Immediate Next Steps

- [x] Draft homepage bilingual copy.
- [x] Draft `Proof / 求证` event content.
- [x] Scaffold Astro project.
- [x] Build global layout and visual direction.
- [x] Build homepage and event page with current logo/poster/banner assets.
- [x] Run local preview and review design in browser.

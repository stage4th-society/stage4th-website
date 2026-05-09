# Changelog

## 2026-05-09

- Refreshed the bilingual editorial design across the homepage, about, events, event detail, contact, header, footer, and event card components.
- Added structured bilingual content blocks in `src/data/site.ts` for ticker, hero, featured event, about preview, event archive, contact, and footer copy.
- Updated `site.brand[lang]` from a string to `{ primary, secondary }` and migrated page usage to the new structure.
- Preserved the root language redirect and 404 route after the redesign.
- Restored the shared event slug helper used by event cards and routes.
- Reinstated canonical, Open Graph, Twitter card, and language preference metadata in `BaseLayout.astro`.
- Fixed the visible event title spacing for `Proof 求证`.

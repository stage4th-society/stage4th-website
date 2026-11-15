# Stage 4th Society Website

Official website for Stage 4th Society / 第四面墙拆除队.

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deployment (Cloudflare Workers)

The site runs on Cloudflare Workers through the `@astrojs/cloudflare` adapter. Worker settings live in `wrangler.jsonc`.

- Production URL: https://stage4theatre.com
- The GitHub repository is connected to Cloudflare, so pushing to `main` deploys the site.
- Manual deploy: `npm run deploy` (builds, then runs `wrangler deploy`).
- Local preview of the Workers build: `npm run preview`.
- Environment: Node.js 22 or later (required by Wrangler).

## Content Updates

- Event content lives in `src/content/events`.
- Shared site copy and contact links live in `src/data/site.ts`.
- Static images and PDFs live in `public/assets`.

There is no CMS: content is edited in these files and published through git.

The site does collect some visitor data:

- The contact page form posts to Formspree (`src/pages/[lang]/contact.astro`).
- Google Analytics (GA4) loads on every page (`src/layouts/BaseLayout.astro`).

# AGENTS.md - theojs.cn

## Required Startup

Before making changes in this repository:

1. Enter `/root/workspace/theojs.cn`.
2. Check `git status` and the current branch to protect uncommitted work.
3. Run `git pull --ff-only` to sync the latest remote changes.
4. Read this file completely and inspect the relevant source files.

## Project Overview

This repository powers `https://theojs.cn`, Theo's static personal homepage.

The stack is intentionally small:

- Astro in static-output mode.
- Tailwind CSS through the official Vite plugin.
- TypeScript for site data and component logic.
- `@yeskunall/astro-umami` for optional analytics.
- Vercel for hosting.

Important locations:

- `src/pages/` contains the homepage and 404 page.
- `src/layouts/BaseLayout.astro` owns shared metadata, structured data, and the footer.
- `src/data/site.ts` is the single source of truth for visible site links and personal copy.
- `src/styles/global.css` contains Tailwind and the site design tokens.
- `astro.config.ts` owns the static site URL, Tailwind, and Umami integrations.
- `public/` contains static public assets including `robots.txt` and the single-page `sitemap.xml`.
- `vercel.json` contains Vercel cache and region settings.

## Commands

Use pnpm:

- Install: `pnpm install --frozen-lockfile`
- Dev server: `pnpm run dev`
- Type and Astro checks: `pnpm run check`
- Build: `pnpm run build`
- Format and apply safe fixes: `pnpm run format`
- Check formatting: `pnpm run format:check`
- Preview build: `pnpm run preview`

## Engineering Rules

- Keep the site statically rendered. Do not add SSR, API routes, a CMS, or a database without explicit approval.
- Do not add a client framework or UI component library without a concrete need.
- Keep visible content and external URLs in `src/data/site.ts`.
- Use semantic HTML, visible keyboard focus, responsive layouts, and `prefers-reduced-motion` fallbacks.
- Keep dark mode CSS-only and follow the system color scheme automatically.
- This repository uses Biome, not Prettier.
- Preserve both legal registration numbers and their official links in the footer.
- Do not restore the removed sponsor link or sponsor-specific link metadata.

## SEO and Analytics

- `BaseLayout.astro` owns canonical URLs, Open Graph, Twitter metadata, and JSON-LD.
- Keep the canonical origin at `https://theojs.cn` and language at `zh-Hans`.
- Keep `public/sitemap.xml` and `public/robots.txt` aligned.
- Umami is enabled only when all three variables are configured:
  - `ASTRO_UMAMI_WEBSITE_ID`
  - `ASTRO_UMAMI_ENDPOINT_URL`
  - `ASTRO_UMAMI_DOMAIN`
- Never commit or print analytics IDs.

## Deployment

Verify deploy-facing changes with:

```bash
pnpm install --frozen-lockfile
pnpm run format:check
pnpm run check
pnpm run build
git diff --check
```

The project uses Astro's static output and does not require a Vercel adapter. Keep immutable caching scoped to `/_astro/*`.

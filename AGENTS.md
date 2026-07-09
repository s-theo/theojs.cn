# AGENTS.md - theojs.cn

## Required Startup

Before making changes in this repository:

1. Enter the project root: `/root/workspace/theojs.cn`.
2. Run `git pull` to sync the latest remote changes.
3. Read this `AGENTS.md` completely.
4. Inspect the relevant source files before editing.

## Project Overview

This repository powers `https://theojs.cn`, Theo's personal VitePress homepage.

It is intentionally small:

- `index.md` is the homepage content and VitePress home frontmatter.
- `.vitepress/config.mts` is the main VitePress config.
- `.vitepress/configs/head.ts` defines shared static `<head>` entries.
- `.vitepress/configs/transformPageData.ts` injects canonical URLs, Open Graph metadata, Twitter metadata, and JSON-LD.
- `.vitepress/data/FooterData.ts` provides data for the Lumen footer.
- `.vitepress/theme/index.ts` extends the default VitePress theme with `@theojs/lumen` components and analytics.
- `public/` contains static public assets such as `robots.txt`.
- `vercel.json` contains Vercel deployment settings.

There are no separate `nav.ts` or `sidebar.ts` files in this repository. Navigation-like homepage links live in `index.md`.

## Commands

Use pnpm:

- Install: `pnpm install --frozen-lockfile`
- Dev server: `pnpm run dev`
- Build: `pnpm run build`
- Format and apply safe fixes: `pnpm run format`
- Check formatting: `pnpm run format:check`
- Preview build: `pnpm run preview`

## Formatting

This repository uses Biome, not Prettier.

- Do not add Prettier or Prettier plugins back.
- Keep `biome.json` as the source of formatting rules.
- Use `pnpm run format` before committing broad formatting-sensitive edits.
- Use `pnpm run format:check` during verification.
- `lint-staged` runs `biome check --write --no-errors-on-unmatched`.

## VitePress Notes

- Keep `cleanUrls: true` aligned with deployed URLs.
- Keep `srcExclude: ['AGENTS.md']` so workspace instructions are not published as a site page.
- Keep homepage links in `index.md` as absolute external URLs when they point to other Theo sites.
- `transformPageData.ts` owns SEO metadata. Be careful with fallback logic so generated titles and descriptions do not contain `undefined`.
- Use a stable fallback timestamp in `transformPageData.ts`; do not use the current build time for `article:modified_time`.
- The Vite Rollup warning filter suppresses the known `@vueuse/core` `INVALID_ANNOTATION` warning only. Keep other warnings visible.
- `@theojs/lumen` is used in `.vitepress/theme/index.ts`; preserve `Footer_Data` wiring unless replacing the footer intentionally.

## Deployment

The project is deployed as a VitePress static site. Verify deploy-facing changes with:

```bash
pnpm install --frozen-lockfile
pnpm run format:check
pnpm run build
git diff --check
```

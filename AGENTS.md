# AGENTS.md — theojs.cn

Scope: the entire repository. There are no nested instruction files; add one only when a
subtree has genuinely different commands or constraints.

## Start safely

1. Work from `/root/workspace/theojs.cn` and read this file plus the files relevant to the
   task.
2. Run `git status --short --branch`; inspect the branch, upstream, index, worktree,
   untracked files, and any merge/rebase/cherry-pick or other in-progress Git operation
   before editing.
3. Preserve existing work. Do not stash, reset, clean, or overwrite unrelated changes.
4. On a clean `main`, run `git pull --ff-only`. If the branch is dirty, diverged, or lacks the
   expected upstream, stop and report instead of forcing synchronization.
5. Commit, push, branch operations, PR changes, environment changes, and deployments require
   explicit authorization.

## Project and toolchain

- `https://theojs.cn` is a small static personal homepage with `/` and a static 404 page.
- Read exact dependency and tool versions from `package.json` (including `packageManager`),
  resolved versions and engine/peer constraints from the lockfile or installed package
  metadata, and install exceptions from workspace/config files. Use a Node runtime that
  satisfies the locked Astro package's `engines`; do not copy current version numbers here.
- The root is the only pnpm workspace package and is ESM.
- Stack: Astro static output, Tailwind CSS through `@tailwindcss/vite`, strict TypeScript,
  Biome, optional `@yeskunall/astro-umami`, and Vercel production hosting.
- Keep the site framework-free on the client and statically rendered. Do not add hydration,
  SSR, API routes, an adapter, CMS, database, or UI framework without an explicit need and
  approval.
- No CI workflow is committed in this repository. Vercel's Git integration deploys `main` to
  production, and `vercel.json` is the only checked-in platform configuration. Cloudflare
  fronts the public domain but is not this repository's Pages host; do not remove the Vercel
  configuration based only on Cloudflare response headers.

## Repository map

- `src/pages/index.astro`: homepage route; composes the shared layout and homepage component.
- `src/pages/404.astro`: static 404 route and its copy.
- `src/layouts/BaseLayout.astro`: global CSS import, titles, canonical URL, Open Graph,
  Twitter metadata, Person/WebSite JSON-LD, shared slot, and footer placement.
- `src/components/Welcome.astro`: homepage hero and full-card destination links.
- `src/components/SiteFooter.astro`: legal registration links, icons, dynamic build-year
  copyright, and GitHub link.
- `src/data/site.ts`: typed homepage identity and destination-card data only; it is not the
  source of SEO, footer, or 404 copy.
- `src/styles/global.css`: Tailwind entry, design tokens, card/footer/404 styles, system dark
  mode, and reduced-motion handling.
- `astro.config.ts`: canonical site origin, static output, Tailwind Vite plugin, and
  conditional Umami integration.
- `public/robots.txt` and `public/sitemap.xml`: manually maintained crawler files; the sitemap
  currently contains only the homepage.
- `pnpm-workspace.yaml`: peer, build-script, and release-age install policy. `vercel.json`:
  Astro preset, `dist` output, clean URLs, `hkg1`, and immutable caching for `/_astro/*`.
- `renovate.json`: inherits `github>s-theo/dotfiles`; inspect that shared preset before
  changing dependency automation policy.

## Commands

```bash
pnpm install --frozen-lockfile  # install exactly from pnpm-lock.yaml
pnpm run dev                    # Astro development server
pnpm run format:check           # Biome formatter, linter, and assist checks; no writes
pnpm run check                  # astro check && tsc --noEmit
pnpm run build                  # static production build to dist/
pnpm run preview                # preview the existing production build
pnpm run format                 # Biome write/fix; intentionally mutates files
```

There is no separate unit-test or lint script. Do not add Prettier; Biome owns formatting,
linting, and import organization. `pnpm-lock.yaml` is intentionally outside Biome's scope.
No Git hooks are managed here. Older checkouts may retain a generated
`.git/hooks/pre-commit` that invokes the removed `pnpm lint-staged`; delete only that stale
hook instead of restoring `simple-git-hooks` or `lint-staged`.

## Invariants and pitfalls

- Keep the canonical origin `https://theojs.cn` and language `zh-Hans`. A domain change must
  update `astro.config.ts`, BaseLayout JSON-LD, `public/robots.txt`, and
  `public/sitemap.xml`.
- New indexable routes require a manual sitemap update; do not add the 404 page.
- Umami is enabled only when all three variables are present:
  `ASTRO_UMAMI_WEBSITE_ID`, `ASTRO_UMAMI_ENDPOINT_URL`, and `ASTRO_UMAMI_DOMAIN`. Never print
  or commit their values.
- Keep the parent-scoped Astro peer allowance for `@yeskunall/astro-umami` while the plugin's
  published peer range excludes the installed Astro release. Read the exact allowance from
  `pnpm-workspace.yaml` and verify package peer metadata before changing it. Automatic peer
  installation is disabled, and only `esbuild` is approved to run a build script.
- Preserve the explicit `minimumReleaseAge` opt-out in `pnpm-workspace.yaml`; it intentionally
  disables the dependency release delay. Verify current field semantics against the
  `packageManager` release before changing it. Keep project pnpm settings in
  `pnpm-workspace.yaml`; introduce `.npmrc` only when registry or authentication
  configuration is genuinely needed, and never commit credentials.
- `SiteLink.key` and the `[data-site="..."]` light/dark logo-stage selectors in
  `global.css` are coupled; update the type, data, and both color modes together.
- Preserve CSS-only system dark mode, responsive layout, keyboard focus, fine-pointer hover,
  and `prefers-reduced-motion`. Do not add a theme toggle or persistence script.
- Preserve both current registration numbers and official links in `SiteFooter.astro`.
  Footer year is generated at build time. Do not restore the removed sponsor content or a
  `nofollow` data field.
- Destination logos, favicon, OG image, and registration icons are remote assets with no
  local fallback.
- Keep Vercel's output directory aligned with Astro's `dist/`; immutable caching belongs only
  on hashed `/_astro/*` assets.

## Validation and delivery

- AGENTS/documentation only: verify paths and commands manually, then run
  `git diff --check`.
- Astro, TypeScript, layout, component, or data changes: run `pnpm run format:check`,
  `pnpm run check`, and `git diff --check`.
- Anything affecting rendered output, CSS, SEO, `public/`, Astro/Vercel configuration, or
  dependencies: also run `pnpm run build`.
- Dependency or lockfile changes: run `pnpm install --frozen-lockfile` before the relevant
  checks and review both manifest and lockfile diffs.
- UI changes: preview and verify desktop/mobile, system light/dark modes, keyboard focus, and
  reduced motion.
- Before handoff, run `git status --short --branch` and confirm that only authorized files
  changed. Report skipped checks and the reason; never claim a deployment or remote check
  that was not performed.

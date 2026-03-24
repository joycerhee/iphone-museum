# Museum Site Foundation Sprint 0: Next.js Scaffold

## Status

Implemented

## Goal

Scaffold the repository into a working Next.js application with App Router,
TypeScript, Tailwind CSS, baseline scripts, and one automated smoke test.

## Governing Spec

- [site-foundation/spec.md](../spec.md)

## Scope

### In Scope

- create the initial Next.js application scaffold at the repository root
- add baseline scripts for development, linting, type checking, testing, formatting, and build verification
- add a minimal project-specific root layout and homepage shell
- add Vitest and Testing Library support for one homepage smoke test

### Out Of Scope

- advanced design system work
- content modeling beyond basic project-specific shell content
- browser automation setup
- deployment automation
- CMS, auth, analytics, search, or database integration

## Files Or Artifact Zones

- repository root application files
- `package.json`
- `tsconfig.json`
- `next.config.*`
- `app/`
- `components/`
- `lib/`
- `public/`
- `tests/`
- formatting and lint configuration files

## Tasks

1. Scaffold Next.js in the repository root with App Router, TypeScript, ESLint, Tailwind, and `@/*` alias support.
   If the scaffold path does not create `components/`, `lib/`, or `tests/`, create them explicitly so the foundation matches the governing spec.
2. Ensure baseline repository scripts include `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `format`, and `format:check`.
3. Add lightweight Vitest and Testing Library configuration for local and CI-friendly smoke testing.
4. Replace default starter content with a minimal museum117-specific layout and homepage shell.
   The root layout must also include project metadata and baseline document structure.
5. Add one automated homepage smoke test that checks stable project-specific text.

## Acceptance Mapping

- working Next.js scaffold exists -> satisfied by root-level Next.js application files and successful install
- TypeScript, ESLint, Prettier, and Tailwind are configured -> satisfied by configuration files and scripts
- non-interactive scripts exist -> satisfied by `package.json` script set
- homepage and layout are project-specific -> satisfied by updated `app/layout.tsx` and `app/page.tsx`
- one smoke test exists -> satisfied by `tests/app/homepage.test.tsx` or equivalent
- docs workflow remains intact -> satisfied by preserving existing `docs/` and `.github/` artifacts during scaffold

## Verification

- `npm install`
- inspect `tsconfig.json` and confirm `strict: true`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run format:check`
- inspect `app/layout.tsx` and confirm project-specific metadata and baseline document structure

## Completion Checklist

- [x] Next.js App Router scaffold exists at the repository root
- [x] Tailwind CSS is configured and working
- [x] TypeScript and ESLint are configured
- [x] Prettier configuration exists
- [x] Vitest and Testing Library execute successfully
- [x] Root metadata and homepage copy are project-specific
- [x] One homepage smoke test passes
- [x] The docs workflow and existing planning artifacts remain intact
- [x] `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, and `npm run format:check` all pass

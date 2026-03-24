# Museum Site Foundation Specification

## Status

Draft

## Problem Statement

The repository now has a process foundation, but it still has no application
code, no Next.js scaffold, no styling system, no testing baseline, and no
developer workflow for building the museum site itself.

That leaves three immediate gaps:

1. There is no production application shell for the museum project.
2. There is no agreed technical baseline for TypeScript, styling, testing,
   linting, formatting, or build verification.
3. There is no initial content-oriented architecture for a story-led,
   editorial museum experience.

Evidence from the current repository state:

- the repository currently contains workflow and planning documents only
- there is no `package.json`, `app/`, `public/`, `tests/`, or application code
- there is no configured local development, validation, or build workflow

The immediate need is not to build the full museum product. The immediate need
is to establish a clean Next.js foundation so later design, content, and route
work can proceed without revisiting setup decisions.

## Reference Review Summary

This spec is informed by the reference project at
`/Users/kwilliams/Projects/nextjs_ai_orchestration_spec_sprint_process`.

The most relevant patterns from that project are:

- Next.js App Router with strict TypeScript
- Tailwind CSS v4 as the styling baseline
- repository-owned configuration and scripts for non-interactive verification
- Vitest for local unit and smoke tests
- Playwright reserved for browser-level verification after the scaffold exists
- a content-first architecture where routes are orchestrators, not monoliths
- build and lint discipline treated as part of the foundation, not an afterthought

This spec reuses those ideas while keeping the museum117 foundation generic and
avoiding reference-project-specific content assumptions.

## Design Goals

1. **Professional Baseline First**
   The project should begin with the same technical discipline expected of a
   serious production site: typed code, linting, formatting, testing, and build
   verification.

2. **Editorial And Museum-Oriented Structure**
   The foundation should support a story-led museum site, which means the stack
   must be comfortable with structured content, route composition, images, and
   long-form reading surfaces.

3. **Low-Regret Setup Decisions**
   Early choices should favor common, well-supported tools and avoid adding
   infrastructure that does not yet earn its complexity.

4. **Accessible And Search-Friendly Defaults**
   The base layout, metadata, document structure, and future component model
   must be compatible with accessible public publishing.

5. **Future-Proof Verification**
   The initial scaffold should make later quality work easier by standardizing
   scripts and validation commands now.

## Architecture

### Application Platform

- framework: Next.js 16 with App Router
- language: TypeScript with strict checking enabled
- styling: Tailwind CSS v4
- linting: ESLint using Next.js rules
- formatting: Prettier
- unit and smoke testing: Vitest with Testing Library

### Initial Directory Conventions

The target structure for the foundation is:

```text
/
├── app/                # routes, layouts, metadata, global styles
├── components/         # reusable UI and content composition components
├── lib/                # helpers, config, content loaders, utilities
├── public/             # static assets
├── tests/              # unit and smoke tests
├── docs/               # workflow and planning artifacts
└── .github/            # repository-level automation and AI instructions
```

The scaffold does not need to populate every layer deeply, but it must create a
clear boundary for future work.

### Rendering Model

- the site should use the App Router from the start
- the root layout should establish metadata and document structure
- the first homepage can be minimal, but it must be project-specific rather
  than starter boilerplate
- future museum content should fit without changing the routing strategy

### Content Orientation

This feature does not require a full content platform yet, but the architecture
must leave space for repository-managed museum content and narrative surfaces.

The foundation should therefore prefer:

- root-level `app/`, `components/`, and `lib/` structure
- clear room for future route-level composition
- simple configuration and content helpers over premature CMS integration

### Quality Baseline

The site foundation must end with repository-standard non-interactive commands
for:

- development
- linting
- type checking
- testing
- formatting
- build verification

## Constraints And Invariants

- do not add CMS, database, auth, analytics, or search infrastructure in this feature
- do not optimize for the final museum design before the scaffold exists
- preserve the repository's docs-first workflow and current planning artifacts
- keep the setup understandable by students or collaborators reading the repo later
- prefer repository-owned configuration over opaque tool defaults where practical

## Security And Safety Requirements

1. Dependency scope must stay tight and justified.
2. The scaffold must not introduce environment-variable leakage patterns.
3. Public UI defaults should remain semantic and accessible.
4. The test stack must run locally without external services.

## Testing Strategy

### Required Categories

1. **Configuration verification**
   The application must lint, typecheck, and build successfully.

2. **Smoke coverage**
   The homepage shell must have at least one automated rendering test.

3. **Future browser testing readiness**
   This feature should not require Playwright yet, but the script model should
   leave room for later browser verification.

### Baseline Counts

- current baseline: `0` application tests
- expected after Sprint 0: `1` homepage smoke test

### Verification Baseline

The foundation outcome must support, at minimum:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run format:check
```

## Acceptance Criteria

- the repository contains a working Next.js App Router scaffold at the root
- the scaffold uses TypeScript with `strict: true`, ESLint, Prettier, and Tailwind CSS
- the repository exposes non-interactive `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `format`, and `format:check` scripts
- the repository contains the initial directory boundary of `app/`, `components/`, `lib/`, `public/`, and `tests/`
- the root layout and homepage are project-specific rather than default starter output
- the root layout establishes project metadata and baseline document structure suitable for a public museum site
- the repository contains one automated homepage smoke test
- the scaffold preserves the existing docs workflow and planning artifacts

## Sprint Plan

| Sprint   | Goal                                                                         |
| -------- | ---------------------------------------------------------------------------- |
| Sprint 0 | Scaffold Next.js, TypeScript, Tailwind, baseline scripts, and one smoke test |
| Sprint 1 | Establish initial design system and shared layout primitives                 |
| Sprint 2 | Add first content architecture and route conventions for museum narratives   |
| Sprint 3 | Build the first real homepage or exhibition shell                            |
| Sprint 4 | Add browser testing, CI workflow, and deployment-quality verification        |
| Sprint 5 | QA the foundation against the spec and resolve deviations                    |

## Risks And Open Questions

- the exact museum content model is not yet defined and should be handled in a later spec
- deployment target is not yet chosen, so static export versus server deployment remains open
- design-system depth should be deferred until the scaffold is stable

## Future Considerations

The following are out of scope for this foundation feature:

- advanced search
- CMS integration
- database-backed content
- authentication
- analytics
- complex visual storytelling systems
- image pipelines beyond baseline static asset support

This feature succeeds when museum117 moves from a planning-only repository to a
clean, working Next.js foundation that future museum work can build on safely.

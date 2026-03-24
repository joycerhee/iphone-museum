# QA Pass: Museum Site Foundation Sprint 0

## Artifact Under Review

- [sprint-0-nextjs-scaffold.md](sprint-0-nextjs-scaffold.md)

## Review Type

Sprint QA

## What Was Checked

- whether the sprint scope aligns with the governing spec
- whether the sprint is narrowly focused on scaffold work
- whether verification commands are concrete and non-interactive
- whether the task list preserves the repository's docs-first workflow while introducing application code

## Findings

### High Severity

- The sprint lists `components/`, `lib/`, and `tests/` as in-scope artifact zones, but none of the tasks explicitly require creating them if the scaffold generator omits them. Because a standard Next.js scaffold may not create those directories, the sprint can be implemented literally and still fail the governing spec's directory-boundary requirement.

### Medium Severity

- The sprint verifies `npm run typecheck`, but it never requires checking that TypeScript remains in strict mode. That leaves a governing-spec requirement unverified.
- The sprint requires a project-specific layout and homepage shell, but it does not explicitly require verification of root metadata or other document-structure defaults promised by the governing spec.

### Low Severity

- The sprint intentionally leaves browser automation and deployment work for later, which is appropriate for keeping Sprint 0 bounded.

## Verdict

Changes required.

## Required Follow-Ups

- add an explicit task or implementation note requiring creation of `components/`, `lib/`, and `tests/` if the generator does not create them
- add a verification step for strict TypeScript configuration
- add a verification step for root metadata and document-structure baseline

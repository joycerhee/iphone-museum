# Project Foundation Sprint 0: Workflow Foundation

## Status

Accepted

## Goal

Create the repository's initial spec, sprint, QA, and prompting foundation so
future work can follow a bounded and reusable process.

## Governing Spec

- [project-foundation/spec.md](../spec.md)

## Scope

### In Scope

- add repository-level workflow documentation
- add prompt and process reference material
- add starter templates for spec, sprint, and QA artifacts
- add repo-level Copilot instructions

### Out Of Scope

- application implementation
- feature design
- build or deployment tooling

## Files Or Artifact Zones

- `README.md`
- `docs/foundation/`
- `docs/_specs/`
- `docs/_archive/`
- `.github/copilot-instructions.md`

## Tasks

1. Create the repository entry layer and workflow links.
2. Add stable foundation docs for orchestration and prompting.
3. Add reusable templates for spec, sprint, and QA passes.
4. Create a concrete foundation spec, spec QA, sprint, and sprint QA artifact set.
5. Encode the working rules in repo-level Copilot instructions.

## Acceptance Mapping

- workflow document exists -> covered by `docs/foundation/orchestration-workflow.md`
- prompting document exists -> covered by `docs/foundation/prompting-playbook.md`
- templates exist -> covered by `docs/_specs/_templates/`
- concrete example artifacts exist -> covered by `docs/_specs/project-foundation/`
- AI instructions exist -> covered by `.github/copilot-instructions.md`

## Verification

- inspect the repository tree for all expected files
- confirm each artifact has explicit scope, acceptance, and verification language where appropriate
- confirm README points to the workflow and prompting references

## Completion Checklist

- [x] scope stayed bounded
- [x] required artifacts were updated
- [x] verification was performed
- [x] unresolved risks were recorded

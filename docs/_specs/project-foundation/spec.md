# Project Foundation Spec

## Status

Accepted

## Problem

The repository needs a durable workflow for AI-assisted work before feature
implementation begins.

Without that workflow, the project would rely on chat memory, vague requests,
and unstructured execution, which increases drift and makes later work harder
to audit.

## Outcome

The repository should have a clear, reusable operating model for:

- writing specs
- planning bounded sprints
- QAing artifacts before and after implementation
- reusing strong prompting patterns across sessions

## Scope

### In Scope

- repository documentation for the workflow
- starter templates for spec, sprint, and QA artifacts
- one foundation workstream proving the pattern exists
- repo-level Copilot instructions aligned with the workflow

### Out Of Scope

- application code or framework scaffolding
- feature-specific product implementation
- CI automation or build tooling

## Constraints And Invariants

- the workflow must be understandable from the repository alone
- the method must distinguish planning, implementation, and QA
- the project should prefer durable artifact memory over chat memory
- the templates must be simple enough to reuse without ceremony overload

## Artifact Model

- `README.md` as the repository entry layer
- `docs/foundation/` for stable process guidance
- `docs/_specs/` for active workstreams
- `docs/_archive/` for retired or completed workstreams
- `.github/copilot-instructions.md` for repo-level AI operating rules

## Acceptance Criteria

- the repository contains a written orchestration workflow document
- the repository contains a prompting playbook that captures reusable prompting techniques
- the repository contains reusable templates for spec, sprint, and QA artifacts
- the repository contains at least one concrete spec, spec QA, sprint, and sprint QA example
- the repository contains repo-level AI instructions aligned with the workflow

## Verification

- manually inspect the repository structure for the expected files
- review each created artifact for role clarity, bounded scope, and explicit verification language

## Risks And Open Questions

- the workflow may still need project-specific refinement once the first real feature is defined
- the team may later want additional templates for research memos or design reviews

## Follow-On Sprints

- first feature spec for the actual museum product
- visual and information architecture foundation
- content model and route strategy

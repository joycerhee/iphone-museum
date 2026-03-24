# Orchestration Workflow

## Purpose

This repository uses a durable artifact workflow for AI-assisted work.

The goal is to keep product decisions, scope boundaries, and verification steps
inside the repository so work can survive across sessions without relying on
chat memory.

## Why This Exists

AI is fast, but speed alone creates recurring problems:

1. Drift: the assistant starts changing adjacent concerns that were never requested.
2. Context loss: important decisions disappear when chat history changes.
3. Ambiguous completion: work looks done before it is verified.
4. Weak accountability: decisions are hard to audit when they only exist in conversation.

This workflow addresses those problems with repository artifacts.

## Core Operating Model

For substantial work, use this sequence:

1. Write a spec.
2. QA the spec.
3. Write one sprint document.
4. QA the sprint document.
5. Implement the sprint.
6. QA the implementation.

Each stage has a different job.

## Artifact Roles

### Spec

The spec is the contract for a feature or workstream.

It should define:

- the problem being solved
- the user or reader outcome
- scope and out-of-scope boundaries
- design or content constraints
- architecture or artifact model
- acceptance criteria
- verification expectations

### Spec QA

The spec QA pass is a critique document.

It should check:

- whether the spec is internally consistent
- whether scope is bounded tightly enough
- whether acceptance criteria are testable
- whether the repository can actually support the proposed work
- whether any assumptions need to be made explicit

### Sprint Doc

The sprint doc turns a spec into one bounded execution unit.

It should define:

- the sprint goal
- exact files or artifact zones in scope
- tasks for that sprint only
- known dependencies or prerequisites
- verification commands or manual QA steps
- completion checklist

### Sprint QA

The sprint QA pass checks whether the sprint is executable before implementation
and complete after implementation.

It should look for:

- scope creep
- unclear task boundaries
- missing verification steps
- incomplete acceptance mapping
- mismatch with the governing spec

## The Most Important Prompting Primitives

The repository should repeatedly name five things.

### Role

Tell the assistant what posture to use.

Examples:

- spec writer
- implementer
- reviewer
- QA auditor
- editor

### Scope

State what is in bounds and what is out of bounds.

Examples:

- update only one guide page
- create only the sprint document
- do not edit application code in this pass

### Invariants

State what must remain true.

Examples:

- preserve existing naming conventions
- do not introduce unrelated refactors
- do not claim completion without verification

### Acceptance Criteria

State what must be true for the work to count as done.

If it cannot be checked, it is too vague.

### Verification

State how success will be tested.

Examples:

- review against the spec
- run lint or typecheck
- validate links or structure
- confirm QA checklist items directly

## Artifact Memory

This project should treat the repository as memory.

That means:

- decisions belong in files
- active work belongs in specs and sprint docs
- QA findings belong in QA artifacts
- reusable prompting patterns belong in foundation docs

Do not rely on chat as the durable source of truth.

## Recommended Working Rhythm

For each meaningful feature:

1. Create a feature folder in `docs/_specs/feature-name/`.
2. Write `spec.md`.
3. Write `spec-qa.md`.
4. Add a sprint under `sprints/`.
5. Add a QA pass for that sprint.
6. Implement only after the sprint is credible.

## Completion Standard

A task is complete only when all three are true:

1. The artifact or implementation matches the intended scope.
2. The relevant QA pass has been performed.
3. The stated verification steps have been satisfied.

If one of those is missing, the work is not done yet.

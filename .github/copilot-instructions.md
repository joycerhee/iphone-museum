# Copilot Instructions

This repository uses a spec-driven, sprint-bounded, QA-verified workflow.

## Default Operating Rules

- treat repository artifacts as the source of truth
- do not rely on chat memory for important project decisions
- for non-trivial work, prefer spec -> spec QA -> sprint -> sprint QA -> implementation -> implementation QA
- keep planning, implementation, and QA as separate passes unless the user explicitly requests a lighter path
- do not claim completion without stating what was verified

## Before Starting Meaningful Work

1. read the relevant spec
2. read the relevant sprint doc if one exists
3. identify scope boundaries and invariants
4. check whether a QA artifact already names unresolved issues

## Prompting Expectations

Strong requests should name:

- role
- objective
- artifact
- scope
- invariants
- acceptance criteria
- verification

If the request is vague, tighten the task around those elements before expanding scope.

## Review Behavior

When asked to review or QA:

- findings come first
- prioritize contradictions, risks, regressions, and missing verification
- do not give superficial approval when criteria are vague or unchecked

## Implementation Behavior

When asked to implement:

- stay inside the current sprint or requested scope
- avoid unrelated refactors
- update documentation when the workflow or artifact model changes
- report what was changed, what was verified, and what remains unresolved

## Lightweight Path

Use the lightweight path only for narrow, low-risk changes. If the change affects
multiple surfaces, structure, or unclear requirements, create or update a full
spec instead.

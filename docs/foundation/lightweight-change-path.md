# Lightweight Change Path

Use this path for small, low-risk changes where a full spec and sprint cycle
would add more overhead than clarity.

## When It Fits

Use the lightweight path when the change is:

- narrow in scope
- low risk
- easy to verify
- unlikely to trigger adjacent design or architecture changes

Examples:

- fixing a typo in a document
- updating one broken link
- adjusting one small content block
- adding one narrowly scoped note to an existing page

## Minimum Artifact

Record the change in one short note that includes:

1. what changed
2. why it changed
3. what was in scope
4. how it was verified

## Template

```text
# Change Note

## Summary

[one-paragraph description]

## Scope

- [item]

## Verification

- [step]

## Risks Or Follow-Ups

- [item]
```

## Escalation Rule

If the change starts affecting structure, multiple routes, shared design systems,
or unclear acceptance criteria, stop using the lightweight path and create a
full spec.

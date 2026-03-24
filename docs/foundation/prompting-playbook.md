# Prompting Playbook

## Purpose

This document captures the strongest reusable ideas from the reference project:
how to prompt AI in a way that produces bounded, auditable, high-quality work.

It is meant to be the quick-reference playbook for future sessions.

## The Big Ideas To Keep

### 1. Use Artifact Memory

Do not treat chat as the system of record.

If a decision matters, store it in the repository.

Use:

- specs for contracts
- sprint docs for bounded execution
- QA docs for critique and closure
- foundation docs for stable process guidance

### 2. Bound The Task Before Asking For Output

Weak request:

"Improve this project."

Strong request:

"Act as a reviewer. QA the sprint doc in [docs/\_specs/feature-x/sprints/sprint-1.md](../_specs/_templates/sprint-template.md) against the governing spec. Identify contradictions, missing acceptance coverage, and verification gaps. Do not implement changes in this pass."

The stronger version names role, artifact, scope, and expected output.

### 3. Separate Planning, Implementation, And QA

Do not collapse all work into one request.

Preferred sequence:

1. write the spec
2. QA the spec
3. write the sprint
4. QA the sprint
5. implement
6. QA the implementation

That separation reduces drift and makes review easier.

### 4. Write Acceptance Criteria That Can Be Checked

Bad criterion:

- the page should feel better

Better criterion:

- the page contains a primary route section, a companion route section, and a return path to the chronology
- the updated page preserves existing navigation labels
- no unrelated routes are edited

### 5. Name Invariants Explicitly

The assistant should not infer the important rules.

Examples:

- preserve the existing information architecture
- keep the design story-led rather than product-marketing-driven
- do not change unrelated files
- do not mark work complete without verification

### 6. Ask For Critique Before Approval

When you want QA, ask for findings first.

Good review framing:

- identify risks
- find contradictions
- flag vague scope
- point out missing tests
- do not rewrite the artifact until findings are clear

### 7. Keep The Main Route Visible

A good content product has a spine.

For museum or teaching projects, keep asking:

- what is the main route?
- what are the companion routes?
- where does the reader return after branching?

This prevents content sprawl.

### 8. Give Every Surface A Job

Do not add sections because they seem useful in the abstract.

Every surface should answer a specific need.

Examples:

- chronology for sequence
- cast page for actors and institutions
- guide page for technical translation
- reading map for documentary proof

### 9. Use A Governing Metaphor

The strongest editorial sites feel coherent because they are guided by one
interpretive model.

Examples:

- exhibition
- archive
- atlas
- field guide
- dossier
- casebook

The metaphor should shape:

- layout rhythm
- language choices
- navigation model
- evidence surfaces
- image treatment

### 10. Prefer Reusable Prompt Frames

Instead of starting from scratch every time, use stable templates.

## Prompt Formula

Use this structure for serious work:

1. Role
2. Objective
3. Artifact
4. Scope
5. Invariants
6. Acceptance criteria
7. Verification
8. Output format

### Reusable Template

```text
Act as a [role].

Objective:
[what needs to be accomplished]

Artifact:
[file or artifact to create, update, or review]

Scope:
- [in-bounds item]
- [in-bounds item]

Out of scope:
- [out-of-bounds item]

Invariants:
- [rule that must stay true]
- [rule that must stay true]

Acceptance criteria:
- [checkable condition]
- [checkable condition]

Verification:
- [review command, test, or audit step]

Output:
[what the assistant should return]
```

## High-Value Prompt Patterns

### Spec Writing Prompt

```text
Act as a spec writer.

Create a feature spec in the repository's established style for [feature].

Scope:
- define the problem, user outcome, scope boundaries, constraints, acceptance criteria, and verification plan
- align the artifact to the current repository structure

Out of scope:
- implementation
- sprint planning beyond naming likely follow-on work

Invariants:
- keep the spec concrete and auditable
- do not invent repository capabilities that do not exist
```

### Spec QA Prompt

```text
Act as a QA auditor.

Review [spec path] against the live repository.

Find:
- contradictions
- vague or untestable acceptance criteria
- missing scope boundaries
- assumptions that should be made explicit

Do not approve the spec superficially. Findings first.
```

### Sprint Planning Prompt

```text
Act as a sprint planner.

Write one bounded sprint doc for [feature] based on [spec path].

Scope:
- define one executable unit only
- name exact files or artifact zones in scope
- include verification and completion checklist

Out of scope:
- later sprints
- implementation details outside this sprint
```

### Implementation Prompt

```text
Act as an implementer.

Implement [sprint path] and keep the work aligned with [spec path].

Invariants:
- do not change files outside sprint scope without explicit justification
- do not skip verification
- do not claim completion if acceptance criteria are unmet

Required output:
- the code or docs changes
- verification results
- any unresolved risks
```

### Implementation QA Prompt

```text
Act as a reviewer.

QA the implementation for [sprint path] against the governing spec and current repository state.

Find:
- regressions
- scope creep
- missing verification
- acceptance mismatches
- documentation drift

List findings first, ordered by severity.
```

## Editorial And Design Guidance Worth Reusing

For story-led sites, keep these design prompts in view:

- define the main route before designing supporting pages
- separate chronology from support material
- treat people, institutions, and documents as evidence surfaces
- use images as evidence, atmosphere, or explanation, not filler
- build return points so readers can re-enter the main thread easily
- reuse a stable section rhythm so the site feels curated rather than improvised

## When To Use The Lightweight Path

Use the lighter path when all of these are true:

- the change is narrow
- the risk of drift is low
- the acceptance criteria are obvious
- a full spec would add more overhead than clarity

If those are not all true, write the spec.

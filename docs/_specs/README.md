# Active Specs

This directory contains active specs, sprint docs, and QA artifacts.

## Standard Structure

```text
docs/_specs/
├── README.md
├── _templates/
│   ├── qa-template.md
│   ├── spec-template.md
│   └── sprint-template.md
└── feature-name/
    ├── spec.md
    ├── spec-qa.md
    └── sprints/
        ├── sprint-0-something.md
        └── sprint-0-something-qa.md
```

## Active Workstreams

- [project-foundation](project-foundation/spec.md)
- [site-foundation](site-foundation/spec.md)

## Rules

- one feature or workstream per folder
- one governing `spec.md` per workstream
- each sprint should be narrowly bounded
- each spec and sprint should have a QA companion artifact
- completed or retired work should move to `docs/_archive/`

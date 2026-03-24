# museum117

museum117 is a story-led museum site in progress, built as both a Next.js
application and a repository-managed example of disciplined AI-assisted product
development.

The project uses a spec-driven, sprint-bounded, QA-verified workflow. The core
rule is simple: important decisions belong in repository artifacts, not only in
chat history.

## What This Repository Is

This repository has two layers:

1. A working Next.js site foundation for a future museum-style editorial
   experience.
2. A durable process model for planning, implementing, and reviewing work with
   AI assistance.

The site is still early, but the workflow is already part of the product. The
goal is not only to build pages. The goal is to build them in a way that stays
auditable, teachable, and hard to derail.

## Current State

The repository currently includes:

- a Next.js 16 App Router scaffold
- strict TypeScript
- Tailwind CSS v4 baseline setup
- ESLint and Prettier
- Vitest plus Testing Library
- one project-specific homepage shell and smoke test
- workflow documentation for specs, sprints, QA, and prompting

The active foundation workstreams are:

- [docs/\_specs/project-foundation/spec.md](docs/_specs/project-foundation/spec.md)
- [docs/\_specs/site-foundation/spec.md](docs/_specs/site-foundation/spec.md)

The active workstream index is at
[docs/\_specs/README.md](docs/_specs/README.md).

## Start Here

If you are new to the repository, read these in order:

1. [docs/foundation/orchestration-workflow.md](docs/foundation/orchestration-workflow.md)
2. [docs/foundation/prompting-playbook.md](docs/foundation/prompting-playbook.md)
3. [docs/foundation/lightweight-change-path.md](docs/foundation/lightweight-change-path.md)
4. [docs/\_specs/README.md](docs/_specs/README.md)

Then read the governing spec for the feature or workstream you are about to
touch.

## The Process

For meaningful work, use the full lifecycle:

1. Write or update a feature spec.
2. QA the spec for contradictions, vague scope, and missing verification.
3. Write one sprint document.
4. QA the sprint document against the spec and current repo state.
5. Implement the sprint.
6. QA the implementation against the sprint, spec, and live repository.

This repository does not treat planning, implementation, and QA as the same
step. They are separate passes on purpose.

For narrow, low-risk work, use the lighter path in
[docs/foundation/lightweight-change-path.md](docs/foundation/lightweight-change-path.md).

## Why The Process Exists

The process is designed to control four recurring problems in AI-assisted work:

1. Drift: the assistant starts changing adjacent concerns that were never requested.
2. Context loss: important decisions vanish when they live only in chat.
3. Ambiguous completion: work looks done before it is actually verified.
4. Weak accountability: there is no durable record of why a decision was made.

The repository responds to those problems with artifact memory.

## Artifact Model

This repository uses a small set of durable artifact types.

### Spec

The spec is the contract for a feature or workstream.

It defines:

- the problem
- the intended outcome
- scope and out-of-scope boundaries
- constraints and invariants
- acceptance criteria
- verification expectations

### Spec QA

The spec QA pass critiques the spec before implementation.

It should identify:

- contradictions
- vague or untestable acceptance criteria
- missing scope boundaries
- unsupported assumptions

### Sprint Doc

The sprint doc is one bounded execution unit.

It defines:

- the sprint goal
- exact files or artifact zones in scope
- tasks for that sprint only
- verification commands
- completion checklist

### Sprint QA

The sprint QA pass checks whether the sprint is credible before implementation
and complete after implementation.

It should look for:

- missing tasks
- unclear boundaries
- weak verification
- mismatch with the governing spec

## How To Work With AI In This Repo

Strong prompts in this repository should name:

- role
- objective
- artifact
- scope
- invariants
- acceptance criteria
- verification

Examples of good roles:

- spec writer
- sprint planner
- implementer
- reviewer
- QA auditor

The full prompt guidance and reusable templates live in
[docs/foundation/prompting-playbook.md](docs/foundation/prompting-playbook.md).

## Repository Structure

```text
.
├── .github/                # repo-level Copilot instructions
├── app/                    # Next.js App Router routes and global styles
├── components/             # shared UI and content composition components
├── docs/
│   ├── foundation/         # durable process and prompting guidance
│   ├── _specs/             # active specs, sprints, and QA artifacts
│   └── _archive/           # retired or completed workstreams
├── lib/                    # shared site config and future helpers
├── public/                 # static assets
├── tests/                  # unit and smoke tests
├── package.json            # scripts and dependencies
└── vitest.config.ts        # test runner configuration
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Verification Commands

The current repository-standard commands are:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run format:check
```

For local formatting and watch-mode testing:

```bash
npm run format
npm run test:watch
```

## Deployment

This project is configured for GitHub Pages deployment from GitHub Actions.

- deployment target: `git@github.com:kaw393939/117Museum.git`
- Pages base path: `/117Museum`
- build output: static export in `out/`

The workflow file is at
[.github/workflows/deploy.yml](.github/workflows/deploy.yml).

On every push to `main`, the workflow will:

1. install dependencies
2. run lint
3. run typecheck
4. run tests
5. run a production build
6. upload `out/` and deploy it to GitHub Pages

## Current Workstreams

### Project Foundation

This workstream established the repository's process baseline:

- [docs/\_specs/project-foundation/spec.md](docs/_specs/project-foundation/spec.md)
- [docs/\_specs/project-foundation/spec-qa.md](docs/_specs/project-foundation/spec-qa.md)
- [docs/\_specs/project-foundation/sprints/sprint-0-workflow-foundation.md](docs/_specs/project-foundation/sprints/sprint-0-workflow-foundation.md)
- [docs/\_specs/project-foundation/sprints/sprint-0-workflow-foundation-qa.md](docs/_specs/project-foundation/sprints/sprint-0-workflow-foundation-qa.md)

### Site Foundation

This workstream established the Next.js application baseline:

- [docs/\_specs/site-foundation/spec.md](docs/_specs/site-foundation/spec.md)
- [docs/\_specs/site-foundation/spec-qa.md](docs/_specs/site-foundation/spec-qa.md)
- [docs/\_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md](docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md)
- [docs/\_specs/site-foundation/sprints/sprint-0-nextjs-scaffold-qa.md](docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold-qa.md)

## Completion Standard

Work is complete only when all three are true:

1. The artifact or implementation matches the intended scope.
2. The relevant QA pass has been performed.
3. The stated verification steps have been satisfied.

If one of those is missing, the work is not done yet.

## Practical Working Rule

If the change is substantial, do not jump straight to code. Start with the
artifact that should govern the change.

If the change is small and low-risk, record it with the lightweight path.

If the request is vague, tighten it around role, scope, invariants, acceptance,
and verification before expanding the work.

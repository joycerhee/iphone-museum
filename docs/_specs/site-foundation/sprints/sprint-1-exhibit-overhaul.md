# Museum Site Sprint 1: Exhibit Overhaul

## Status

In Progress

## Goal

Transform the basic museum skeleton from Sprint 0 into an immersive, cinematic exhibit experience with a cohesive dark chrome visual identity, complete page structure, image integration, and guided visitor navigation.

## Governing Spec

- [site-foundation/spec.md](../spec.md)

## Scope

### In Scope

- redesign homepage with cinematic hero, parallax effects, chrome gradient typography
- create Visionaries (People), Breakthroughs (Innovations), Cultural Impact, and Present Day pages
- build unified dark chrome navbar component
- add guided "Continue the Exhibit" navigation linking all pages sequentially
- integrate images for people, eras, and breakthrough sections
- unify all pages under dark theme with consistent styling via globals.css
- import scrolly timeline component from prior assignment

### Out Of Scope

- deployment automation
- testing updates
- README or process documentation updates
- mobile hamburger menu
- content management system integration

## Files Or Artifact Zones

- `app/page.tsx`
- `app/timeline/page.tsx`
- `app/people/page.tsx`
- `app/innovations/page.tsx`
- `app/impact/page.tsx`
- `app/present/page.tsx`
- `components/site/navbar.tsx`
- `app/globals.css`
- `public/people-images/`
- `public/eras-images/`
- `public/breakthrough-images/`
- `public/images/`

## Tasks

1. Redesign homepage with full-screen black hero, floating Apple logo, chrome gradient text, mouse-tracking parallax, scrolling marquee, and fade-up animations.
2. Add Steve Jobs featured section on homepage with image and link to Visionaries page.
3. Build four era cards on homepage linking to specific timeline positions via anchor IDs.
4. Import scrolly timeline component from prior assignment into `/timeline` route.
5. Create Visionaries page with four contributor cards, images, and contribution details.
6. Create Breakthroughs page with side-by-side image/text layout for nine key innovations.
7. Create Cultural Impact page with eight chronological impact moments.
8. Create Present Day page with current state, stats section, and future outlook.
9. Build unified navbar component with Apple logo, chrome gradient title, and route links.
10. Add "Continue the Exhibit" sequential navigation at the bottom of each page.
11. Add `text-chrome` class to `globals.css` for consistent heading treatment across all pages.
12. Unify all page backgrounds to dark theme (black/zinc-950 alternating sections).

## AI Tools Used

- GitHub Copilot: initial page generation, component scaffolding, layout implementation
- Claude: design direction, code architecture, content writing, debugging, theme unification
- Lovable: UI generation and visual design exploration

## Verification

- all six routes load without runtime errors
- navbar renders consistently across all pages
- all images load from public directories
- "Continue the Exhibit" links navigate correctly between pages
- era cards on homepage anchor to correct timeline positions
- dark chrome theme is visually consistent across all pages

## Completion Checklist

- [x] Homepage redesigned with cinematic hero and chrome effects
- [x] Steve Jobs section with image and Visionaries link
- [x] Four era cards with images linking to timeline
- [x] Scrolly timeline imported and functional
- [x] Visionaries page with four people and images
- [x] Breakthroughs page with nine innovations and images
- [x] Cultural Impact page with eight moments
- [x] Present Day page with stats and future outlook
- [x] Unified navbar across all pages
- [x] "Continue the Exhibit" navigation on all pages
- [x] Dark chrome theme applied globally
- [ ] All images loading correctly
- [ ] Mobile responsive verified
# Folder Migration Checklist

Use this list when moving the current codebase into the planned structure.

## Pre-Migration
- [ ] Create a feature branch dedicated to the restructure.
- [ ] Ensure `npm run lint` passes to have a clean baseline.
- [ ] Communicate the plan to all collaborators; pause conflicting PRs.
- [ ] Snapshot the current tree (e.g., `npx tree-cli src > docs/before-structure.txt`).

## Step-by-Step
1. **Create directories**
   - [ ] Scaffold `src/features`, `src/components/common`, `src/components/layout`, `src/providers`, and optional folders (`styles`, `content`, `test`).

2. **Move marketing sections**
   - [ ] Relocate `HeroSection`, `OurCoursesSection`, `TestimonialsSection`, `PartnersSection` into `src/features/home/components/`.
   - [ ] Export them via `src/features/home/index.ts` for easy imports.

3. **Route updates**
   - [ ] Update `app/page.tsx` and other route files to import from `@/features/...`.
   - [ ] Keep route components as thin wrappers that delegate to feature entry points.

4. **Providers**
   - [ ] Move `LanguageContext` into `src/providers/language-provider.tsx`.
   - [ ] Update `src/app/layout.tsx` to import from `@/providers/language-provider`.

5. **Shared components**
   - [ ] Move `Header` into `src/components/layout/Header.tsx`.
   - [ ] Extract reusable atoms (logo, section titles) into `src/components/common/` if needed.

6. **Update path aliases**
   - [ ] Adjust `tsconfig.json` paths to cover `@/features/*`, `@/components/*`, `@/providers/*`.
   - [ ] Mirror the same aliases in ESLint (`eslint.config.mjs`) if resolution changes.

7. **Static assets**
   - [ ] Optionally reorganize `public` into `public/images`, `public/icons`, `public/partners` and update import paths.

## Post-Migration
- [ ] Run `npm run lint` and address any missing import paths.
- [ ] Run `npm run build` to ensure Next.js resolves new aliases.
- [ ] Update README to reference `docs/project-structure.md`.
- [ ] Remove obsolete folders (e.g., empty `src/context`, `src/data`) once code is moved.
- [ ] Share the migration summary with the team and close the restructure ticket.

# Project Structure Plan

## Objectives
- Keep the Next.js App Router layout clear for page-level concerns while pushing reusable code into feature or shared layers.
- Group domain logic by feature (booking, contact, marketing) so copy, hooks, and helpers live together.
- Centralize primitives (shadcn UI, generic building blocks) to encourage reuse and consistent styling.
- Provide predictable homes for configuration, mock data, tests, and documentation.

## Root Layout
| Path | Purpose |
| --- | --- |
| `/src` | Application source organized by features, shared components, and providers. |
| `/public` | Static assets referenced by `next/image` or `<img>` (opt: subdivide into `images/`, `icons/`, `partners/`). |
| `/docs` | Project documentation (structure guide, migration checklist, ADRs). |
| `/scripts` *(optional)* | Automation, lint rules, data import scripts if/when they appear. |
| `/config` *(optional)* | JSON/YAML app configuration that is not meant for runtime import. |

## `src` Layout
```
src/
  app/
    (marketing)/              // Route group for marketing-facing pages.
      layout.tsx              // Optional layout specific to marketing pages.
      page.tsx                // Home page imports from features/home.
      booking/
        page.tsx              // Thin route, delegates to features/booking.
      contact/
        page.tsx              // Thin route, delegates to features/contact.
      courses/
        page.tsx
    api/                      // Future API routes (if needed).
    globals.css
    layout.tsx                // Root layout wiring providers.

  features/
    home/
      components/             // HeroSection, PartnersSection, etc.
      copy.ts                 // Locale strings or data.
      index.tsx               // Aggregate exports used in routes.
    booking/
      components/
      hooks/
      copy.ts
      types.ts
      index.ts
    contact/
      components/
      copy.ts
      index.ts
    shared/
      copy.ts                 // Shared localization resources.

  components/
    layout/                   // Header, future Footer, navigation.
    common/                   // Cross-feature atoms (e.g., Logo, SectionHeading).
    ui/                       // shadcn primitives (button, input, textarea, ...).

  providers/
    language-provider.tsx     // Former context/LanguageContext.tsx, colocated with other providers.
    theme-provider.tsx

  hooks/                      // Reusable hooks (not feature-specific).
  lib/
    utils.ts
    analytics.ts              // Example placeholder for future utilities.

  styles/                     // Optional: CSS modules, tokens, tailwind extensions.
  content/                    // Structured markdown/JSON data if marketing content grows.
  test/                       // Component or integration tests.
```

### Implementation Notes
- Keep feature folders SSR-ready; export client components via `"use client"` at the file top.
- Copy JSON should be typed and exported from each feature so translation toggles pull from a single source of truth.
- `providers/` becomes the single place to register context providers; `RootLayout` imports from there.
- Shared UI wrappers (Hero layout, Section shell) belong in `components/common`. The route pages inside `app/(marketing)` should remain slim wrappers that render feature entry points.

### Naming Conventions
- **Folders**: kebab-case (e.g., `section-heading`, `booking-form`).
- **Component files**: PascalCase that matches the exported React component (`SectionHeading.tsx`).
- **Utility files**: camelCase (`formatPhone.ts`).
- **Context/provider files**: suffix with `-provider` (`language-provider.tsx`).
- **Test/story files**: colocate under `__tests__` or `__stories__` inside the relevant feature folder.

## Documentation & Maintenance
- Place future architectural decision records (ADRs) under `docs/adr/`.
- Publish contributor-friendly docs like `docs/getting-started.md` and `docs/i18n.md` alongside this structure file.
- Update README to link to `docs/project-structure.md` so newcomers grasp the hierarchy quickly.

## Next Steps
1. Move existing `HeroSection`, `OurCoursesSection`, etc. into `src/features/home/components/` and expose them through an index file.
2. Migrate `LanguageContext` into `src/providers/language-provider.tsx` and adjust imports.
3. Create `components/layout/Header.tsx` and update references.
4. Introduce lint aliases (`@/features/*`, `@/components/*`) in `tsconfig.json` to match the new folder layout.
5. Add tests or Storybook stories under `src/test` as features mature.

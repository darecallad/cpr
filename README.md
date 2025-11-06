# Waymaker CPR Training Site

Marketing and booking site for Waymaker's CPR and first-aid training programs serving the San Jose, California area. Built with the Next.js App Router, bilingual support (English & Traditional Chinese), and shadcn-inspired UI components tailored to the brand palette.

## 📍 Contact Information
- **Email:** info@waymakerbiz.com
- **Location:** 2586 Seaboard Ave, San Jose, CA 95131
- **Service Area:** San Jose, California

## ✨ Features
- **Next.js 15 + React 19** with App Router, strict TypeScript, and Tailwind CSS v4.
- **Bilingual copy** powered by a lightweight `LanguageProvider` plus a locale toggle in the header.
- **shadcn UI primitives** (button, card, input, toggle, textarea, label) themed for Waymaker’s colors.
- **Booking and contact forms** with calendar selection, payment notes, and embedded Google Maps.
- **Modular sections** for the marketing homepage: hero, courses, testimonials, partners.

## 🧰 Tech Stack
- Next.js 15.3 (App Router)
- React 19 + TypeScript 5
- Tailwind CSS 4, tw-animate-css
- shadcn UI + Radix primitives
- ESLint (flat config) + Tailwind-friendly class merging

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ (or 20+) and npm.

### Install dependencies
```powershell
npm install
```

### Run the development server
```powershell
npm run dev
```
Open http://localhost:3000 to view the site.

### Additional scripts
- `npm run lint` – ESLint with Next.js rules.
- `npm run build` – Production build.
- `npm start` – Serve the production build locally.

## 🗂️ Project Structure
A feature-first layout keeps routes slim and reusable code centralized. See `docs/project-structure.md` for the full blueprint and naming conventions.

```
src/
  app/                # App Router pages & layouts
  components/
    layout/           # Global layout pieces (Header, future Footer)
    common/           # Shared atoms and section shells
    ui/               # shadcn primitives (button, card, input, ...)
  features/           # (planned) feature modules: home, booking, contact
  providers/          # Context providers (language, theme)
  lib/                # Helpers & utilities
```

## 🎨 UI Toolkit
- shadcn UI components live in `src/components/ui`.
- Current primitives: `button`, `card`, `input`, `textarea`, `label`, `toggle`, `toggle-group`.
- Add new pieces with `npx shadcn@latest add <component>` and align styling with existing utilities.

## 🌐 Localization
- Locale state is managed by `LanguageProvider` (`src/providers/language-provider.tsx`).
- Components consume localized copy objects; add both `en` and `zh` entries when introducing new content.

## 📚 Documentation

### Core Documentation
- **[Project Overview](docs/project-overview.md)** - Complete project background, goals, and roadmap
- **[Technical Architecture](docs/technical-architecture.md)** - System design, technology stack, and coding standards  
- **[Development Guide](docs/development-guide.md)** - Setup, workflow, deployment, and troubleshooting
- **[Content Management](docs/content-management.md)** - Managing bilingual content and internationalization

### Reference Documentation
- **[Brand Guidelines](docs/brand-guidelines.md)** - Visual identity, colors, typography, and usage guidelines
- **[Project Structure](docs/project-structure.md)** - Planned folder organization and migration strategy
- **[Migration Checklist](docs/migration-checklist.md)** - Step-by-step restructuring guide

### Quick Start
New to the project? Start with the [Project Overview](docs/project-overview.md) for context, then follow the [Development Guide](docs/development-guide.md) for setup instructions.

## 🚢 Deployment
Deploy on [Vercel](https://vercel.com/) or your preferred platform. Run `npm run build` to verify the app before pushing. See the [Development Guide](docs/development-guide.md) for detailed deployment instructions and environment configuration.


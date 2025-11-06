# Technical Architecture & Design Standards

_Last updated: November 6, 2025_

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Design System](#design-system)
- [Component Architecture](#component-architecture)
- [Data Flow & State Management](#data-flow--state-management)
- [Code Standards](#code-standards)
- [Performance Guidelines](#performance-guidelines)
- [Security Considerations](#security-considerations)

## Architecture Overview

### System Architecture
The Waymaker CPR platform follows a modern JAMstack architecture with a focus on static generation and client-side interactivity:

```
┌─────────────────────────────────────────────────────────────┐
│                     Presentation Layer                      │
├─────────────────────────────────────────────────────────────┤
│  Next.js App Router + React 19 + TypeScript                │
│  - Static Site Generation (SSG)                            │
│  - Client-side Hydration                                   │
│  - Progressive Enhancement                                  │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                     Component Layer                         │
├─────────────────────────────────────────────────────────────┤
│  shadcn/ui + Radix UI + Custom Components                  │
│  - Accessible UI primitives                                │
│  - Brand-themed components                                  │
│  - Reusable section templates                              │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                     Data Layer                              │
├─────────────────────────────────────────────────────────────┤
│  Static TypeScript Data + Context API                      │
│  - Typed content objects                                    │
│  - Internationalization (i18n)                             │
│  - Client-side state management                            │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                     Deployment Layer                        │
├─────────────────────────────────────────────────────────────┤
│  Vercel / CDN + Static Assets                              │
│  - Edge deployment                                          │
│  - Automatic optimization                                   │
│  - Global content delivery                                  │
└─────────────────────────────────────────────────────────────┘
```

### Design Principles
1. **Performance First:** Static generation with minimal client-side JavaScript
2. **Accessibility:** WCAG 2.1 AA compliance throughout
3. **Internationalization:** Built-in bilingual support
4. **Progressive Enhancement:** Works without JavaScript, enhanced with it
5. **Brand Consistency:** Strict adherence to Waymaker visual identity
6. **Mobile-First:** Responsive design starting from mobile breakpoints

## Technology Stack

### Core Framework
```typescript
// package.json dependencies
{
  "next": "15.3.4",           // App Router, React Server Components
  "react": "^19.0.0",         // Latest React with concurrent features
  "typescript": "^5",         // Strict type checking
}
```

### Styling & Design
```typescript
{
  "tailwindcss": "^4.1.10",         // Utility-first CSS
  "@tailwindcss/postcss": "^4.1.10", // PostCSS integration
  "class-variance-authority": "^0.7.1", // Component variants
  "tailwind-merge": "^3.3.1",       // Class merging utility
  "clsx": "^2.1.1",                 // Conditional classes
}
```

### UI Components
```typescript
{
  "@radix-ui/react-*": "latest",    // Headless UI primitives
  "lucide-react": "^0.522.0",       // Icon library
  "next-themes": "^0.4.6",          // Theme switching
}
```

### Development Tools
```typescript
{
  "eslint": "^9",                    // Linting with flat config
  "eslint-config-next": "15.3.4",   // Next.js specific rules
  "@types/*": "latest",              // TypeScript definitions
}
```

## Design System

### Color System
The design system uses a carefully curated palette that reflects Waymaker's brand identity:

```css
/* CSS Custom Properties (globals.css) */
:root {
  /* Primary Colors */
  --primary-teal: #0F6C8C;      /* Headlines, CTA text, icons */
  --accent-teal: #2F7FA3;       /* Subheadings, UI accents */
  --sky-teal: #73BBD1;          /* Gradients, buttons */
  --light-mint: #A8D5BA;        /* Section backgrounds, cards */
  --warm-orange: #FF8A5B;       /* Primary CTA backgrounds */
  
  /* Neutral Colors */
  --deep-navy: #0F3B4C;         /* Logo typography, emphasis */
  --slate: #2F4858;             /* Body copy */
  --neutral-bg: #F4FAF8;        /* Page background */
  
  /* Functional Colors */
  --border-light: #CDE6E0;      /* Card borders, dividers */
  --glass-white: rgba(255, 255, 255, 0.8); /* Glassmorphism */
}
```

### Typography Scale
```css
/* Font System */
.font-display {
  font-family: "Geist Sans", "Segoe UI", sans-serif;
  font-weight: 600-700;
  line-height: 1.2;
}

.font-body {
  font-family: "Geist Sans", "Segoe UI", sans-serif;
  font-weight: 400-500;
  line-height: 1.6;
}

/* Scale (Tailwind classes) */
.text-xs     { font-size: 0.75rem; }   /* 12px */
.text-sm     { font-size: 0.875rem; }  /* 14px */
.text-base   { font-size: 1rem; }      /* 16px */
.text-lg     { font-size: 1.125rem; }  /* 18px */
.text-xl     { font-size: 1.25rem; }   /* 20px */
.text-2xl    { font-size: 1.5rem; }    /* 24px */
.text-3xl    { font-size: 1.875rem; }  /* 30px */
.text-4xl    { font-size: 2.25rem; }   /* 36px */
.text-5xl    { font-size: 3rem; }      /* 48px */
```

### Spacing System
```css
/* Consistent spacing scale */
.space-1     { margin/padding: 0.25rem; }  /* 4px */
.space-2     { margin/padding: 0.5rem; }   /* 8px */
.space-3     { margin/padding: 0.75rem; }  /* 12px */
.space-4     { margin/padding: 1rem; }     /* 16px */
.space-6     { margin/padding: 1.5rem; }   /* 24px */
.space-8     { margin/padding: 2rem; }     /* 32px */
.space-12    { margin/padding: 3rem; }     /* 48px */
.space-16    { margin/padding: 4rem; }     /* 64px */
```

### Component Variants
Using `class-variance-authority` for consistent component variations:

```typescript
// Example: Button variants
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-[#FF8A5B] text-white hover:bg-[#F57643]",
        outline: "border border-[#0F3B4C] text-[#0F3B4C] hover:bg-[#0F3B4C]/10",
        ghost: "hover:bg-[#A8D5BA]/20 text-[#0F6C8C]",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## Component Architecture

### Component Hierarchy
```
src/components/
├── ui/                      # shadcn/ui primitives
│   ├── button.tsx          # Base button component
│   ├── card.tsx            # Card layouts
│   ├── input.tsx           # Form inputs
│   ├── label.tsx           # Form labels
│   ├── textarea.tsx        # Text areas
│   ├── toggle.tsx          # Toggle switches
│   └── toggle-group.tsx    # Toggle groups
├── layout/                 # Layout components
│   ├── Header.tsx          # Site navigation
│   └── Footer.tsx          # Site footer
├── sections/               # Page sections (planned)
│   ├── HeroSection.tsx     # Homepage hero
│   ├── ProcessSection.tsx  # Process explanation
│   └── [Other sections]    # Additional sections
└── common/                 # Shared components (planned)
    ├── LanguageToggle.tsx  # Language switcher
    └── [Shared atoms]      # Reusable elements
```

### Component Patterns

#### Section Component Template
```typescript
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}
```

#### Typed Content Components
```typescript
// Example: Hero section with typed content
import { heroCopy, type HeroLocale } from "@/data/home/hero";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { locale } = useLanguage();
  const content = heroCopy[locale];
  
  return (
    <Section className="bg-gradient-to-br from-[#A8D5BA] to-[#73BBD1]">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-[#0F6C8C] md:text-5xl">
          {content.title}
        </h1>
        <p className="text-lg text-[#2F4858]">
          {content.description}
        </p>
        <Button size="lg" asChild>
          <Link href="/booking">{content.cta}</Link>
        </Button>
      </div>
    </Section>
  );
}
```

## Data Flow & State Management

### Content Management
Static content is managed through TypeScript files with strong typing:

```typescript
// Type definitions
export type Locale = "en" | "zh";

export type HeroCopy = {
  title: string;
  description: string;
  cta: string;
};

// Content objects
export const heroCopy: Record<Locale, HeroCopy> = {
  en: {
    title: "Professional Training\nCaring Support",
    description: "Waymaker provides professional and compassionate CPR...",
    cta: "BOOK NOW",
  },
  zh: {
    title: "專業守護\n安心相伴",
    description: "Waymaker 致力於為幼兒園與托育機構提供...",
    cta: "立即預約",
  },
};
```

### State Management
Language selection uses React Context:

```typescript
// LanguageContext.tsx
type Locale = "en" | "zh";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>();

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  // Persist to localStorage
  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "en" || stored === "zh") setLocale(stored);
  }, []);

  const handleSet = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("locale", l);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSet }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### Form Handling
Client-side form validation with TypeScript:

```typescript
// Example: Booking form types
type FormValues = {
  name: string;
  email: string;
  category: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

// Validation logic
const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  
  if (!isValidEmail(values.email)) {
    errors.email = "Please provide a valid email address.";
  }
  
  return errors;
};
```

## Code Standards

### File Naming Conventions
```
Components:        PascalCase.tsx     (HeroSection.tsx)
Utilities:         camelCase.ts       (formatPhone.ts)
Data files:        kebab-case.ts      (brand-mission.ts)
Folders:           kebab-case         (src/data/home/)
Test files:        *.test.tsx         (Button.test.tsx)
```

### Import Organization
```typescript
// 1. React and Next.js imports
import React from "react";
import Link from "next/link";

// 2. Third-party libraries
import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";

// 3. Internal components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 4. Data and utilities
import { heroCopy } from "@/data/home/hero";
import { cn } from "@/lib/utils";

// 5. Types (if in separate files)
import type { HeroCopy } from "@/types/content";
```

### TypeScript Standards
```typescript
// Always use explicit return types for functions
export function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

// Use const assertions for immutable data
export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
] as const;

// Prefer interfaces for object shapes
interface UserPreferences {
  locale: Locale;
  theme: "light" | "dark";
  notifications: boolean;
}

// Use union types for constrained values
type ButtonSize = "sm" | "md" | "lg";
type FormStatus = "idle" | "loading" | "success" | "error";
```

### Component Standards
```typescript
// Always use explicit prop interfaces
interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

// Use forwardRef for components that might need refs
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
```

## Performance Guidelines

### Bundle Optimization
```typescript
// Use dynamic imports for large components
const BookingForm = dynamic(() => import("@/components/BookingForm"), {
  loading: () => <div>Loading...</div>,
});

// Optimize image loading
import Image from "next/image";

<Image
  src="/hero-image.jpg"
  alt="CPR training session"
  width={800}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### Code Splitting
```typescript
// Route-level code splitting (automatic with App Router)
// Component-level splitting for large features
const AdminPanel = lazy(() => import("@/components/AdminPanel"));

// Utility splitting for heavy libraries
const heavyUtils = async () => {
  const { complexCalculation } = await import("@/lib/heavy-utils");
  return complexCalculation;
};
```

### Caching Strategies
```typescript
// Static data with revalidation
export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "zh" },
  ];
}

// Component memoization for expensive renders
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering logic */}</div>;
});
```

## Security Considerations

### Input Validation
```typescript
// Client-side validation (not security, just UX)
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize user input before display
import DOMPurify from "isomorphic-dompurify";

const SafeHtml = ({ content }: { content: string }) => {
  const sanitized = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
```

### Environment Variables
```typescript
// Next.js environment variable handling
const config = {
  // Public variables (prefixed with NEXT_PUBLIC_)
  publicApiUrl: process.env.NEXT_PUBLIC_API_URL,
  
  // Server-only variables
  secretKey: process.env.SECRET_KEY, // Only accessible server-side
};
```

### Content Security Policy
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ];
  }
};
```

---

This technical architecture ensures the Waymaker CPR platform maintains high performance, accessibility, and maintainability while providing a consistent user experience across all devices and languages.
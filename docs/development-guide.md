# Development & Deployment Guide

_Last updated: November 6, 2025_

## Table of Contents
- [Development Environment Setup](#development-environment-setup)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Build & Testing](#build--testing)
- [Deployment](#deployment)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)
- [Maintenance](#maintenance)

## Development Environment Setup

### Prerequisites
Ensure you have the following installed on your development machine:

```bash
# Node.js (version 18.x or higher recommended)
node --version  # Should be >= 18.0.0
npm --version   # Should be >= 9.0.0

# Git (for version control)
git --version

# Optional but recommended:
# - VS Code with extensions:
#   - TypeScript and JavaScript Language Features
#   - Tailwind CSS IntelliSense
#   - ESLint
#   - Prettier
```

### System Requirements
- **OS:** Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Memory:** 4GB RAM minimum, 8GB recommended
- **Storage:** 500MB free space for dependencies
- **Network:** Stable internet connection for package downloads

## Getting Started

### 1. Clone the Repository
```bash
# Clone the project
git clone https://github.com/darecallad/cpr.git
cd cpr

# Or if using SSH
git clone git@github.com:darecallad/cpr.git
cd cpr
```

### 2. Install Dependencies
```bash
# Install all project dependencies
npm install

# Verify installation
npm list --depth=0
```

### 3. Start Development Server
```bash
# Start the development server
npm run dev

# The application will be available at:
# http://localhost:3000
```

### 4. Verify Setup
Once the development server starts, you should see:
- Homepage loads without errors
- Language toggle works (English ↔ 中文)
- Navigation between pages functions
- Forms display validation errors
- Responsive design adapts to different screen sizes

## Development Workflow

### Project Structure Overview
```
cpr/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── booking/         # Booking page
│   │   ├── contact/         # Contact page
│   │   ├── courses/         # Courses page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── [Sections]/     # Page sections
│   │   ├── Header.tsx      # Navigation
│   │   └── Footer.tsx      # Footer
│   ├── context/            # React Context
│   ├── data/               # Static content
│   └── lib/                # Utilities
├── public/                 # Static assets
├── docs/                   # Documentation
└── [config files]          # TypeScript, ESLint, etc.
```

### Adding New Content

#### 1. Updating Existing Content
```typescript
// Example: Updating hero section content
// File: src/data/home/hero.ts

export const heroCopy: Record<HeroLocale, HeroCopy> = {
  en: {
    title: "Your New English Title",
    description: "Your new English description...",
    cta: "New CTA Text",
  },
  zh: {
    title: "新的中文標題",
    description: "新的中文描述...",
    cta: "新的按鈕文字",
  },
};
```

#### 2. Adding New Components
```typescript
// Example: Creating a new section component
// File: src/components/NewSection.tsx

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

// Define content types
type NewSectionCopy = {
  title: string;
  description: string;
};

const newSectionCopy: Record<"en" | "zh", NewSectionCopy> = {
  en: {
    title: "New Section Title",
    description: "Section description...",
  },
  zh: {
    title: "新章節標題",
    description: "章節描述...",
  },
};

export function NewSection() {
  const { locale } = useLanguage();
  const content = newSectionCopy[locale];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-[#0F6C8C] mb-6">
          {content.title}
        </h2>
        <p className="text-base text-[#2F4858] mb-8">
          {content.description}
        </p>
      </div>
    </section>
  );
}
```

#### 3. Adding New Pages
```typescript
// Example: Creating a new page
// File: src/app/new-page/page.tsx

import { NewSection } from "@/components/NewSection";

export default function NewPage() {
  return (
    <main className="bg-[#F4FAF8]">
      <NewSection />
    </main>
  );
}
```

### Working with Forms
```typescript
// Example: Form validation pattern
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!data.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, process submission
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields with error handling */}
    </form>
  );
}
```

### Styling Guidelines
```css
/* Follow Waymaker brand colors */
.primary-teal    { color: #0F6C8C; }
.accent-teal     { color: #2F7FA3; }
.warm-orange     { color: #FF8A5B; }
.deep-navy       { color: #0F3B4C; }
.slate-text      { color: #2F4858; }

/* Use consistent spacing */
.section-padding { padding: 4rem 0; }     /* py-16 */
.content-spacing { margin-bottom: 2rem; } /* mb-8 */

/* Responsive breakpoints */
/* Mobile: default styles */
/* Tablet: md: (768px+) */
/* Desktop: lg: (1024px+) */
/* Wide: xl: (1280px+) */
```

## Build & Testing

### Development Commands
```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Build for production
npm run build

# Start production server (after build)
npm run start
```

### Quality Checks
```bash
# Before committing, run:
npm run lint          # Check for code issues
npm run build         # Ensure build succeeds
```

### Testing Checklist
Before submitting changes, verify:

- [ ] **Functionality:** All features work as expected
- [ ] **Responsive:** Design works on mobile, tablet, desktop
- [ ] **Bilingual:** Both English and Chinese content display correctly
- [ ] **Navigation:** All links and routing work properly
- [ ] **Forms:** Validation messages appear correctly
- [ ] **Performance:** No console errors or warnings
- [ ] **Accessibility:** Tab navigation and screen readers work

### Browser Testing
Test in the following browsers:
- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest, macOS/iOS)
- **Edge** (latest)

## Deployment

### Vercel Deployment (Recommended)

#### 1. Initial Setup
```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy from local machine
vercel

# Or deploy via GitHub integration (recommended)
# 1. Connect your GitHub repository to Vercel
# 2. Configure automatic deployments
```

#### 2. Environment Configuration
```bash
# Set environment variables in Vercel dashboard
# or use Vercel CLI:
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add CONTACT_EMAIL production
```

#### 3. Build Settings
In Vercel dashboard:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** (leave default)
- **Install Command:** `npm install`

### Alternative Deployment Options

#### Static Export (for other hosts)
```bash
# Configure next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

# Build static files
npm run build

# Files will be in 'out' directory
```

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Build completes successfully
- [ ] All pages load correctly
- [ ] Language toggle works
- [ ] Forms function properly
- [ ] Images load correctly
- [ ] Performance is acceptable (< 3s load time)

## Environment Configuration

### Environment Variables
```bash
# .env.local (for local development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=hello@waymakercpr.com

# .env.production (for production)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

### Configuration Files

#### next.config.ts
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode
  reactStrictMode: true,
  
  // Optimize images
  images: {
    domains: ['example.com'],
  },
  
  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# TypeScript errors
Error: Type 'string' is not assignable to type 'never'
# Solution: Check type definitions and ensure all content objects match their interfaces

# Missing dependencies
Error: Module not found: Can't resolve '@/components/ui/button'
# Solution: npm install or check import paths
```

#### Runtime Errors
```bash
# Hydration mismatch
Warning: Text content did not match
# Solution: Ensure server and client render the same content

# Environment variables not found
Error: process.env.NEXT_PUBLIC_* is undefined
# Solution: Check .env.local file and restart dev server
```

#### Performance Issues
```bash
# Large bundle size
# Solution: Use dynamic imports for large components
const HeavyComponent = dynamic(() => import('./HeavyComponent'));

# Slow page loads
# Solution: Optimize images, use Next.js Image component
import Image from 'next/image';
```

### Debug Mode
```bash
# Run with detailed logging
DEBUG=* npm run dev

# Check bundle analyzer
npm install @next/bundle-analyzer
# Add to next.config.ts and run: ANALYZE=true npm run build
```

### Getting Help
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [TypeScript documentation](https://www.typescriptlang.org/docs/)
3. Check project issues on GitHub
4. Review browser developer tools console
5. Search [Stack Overflow](https://stackoverflow.com) for specific errors

## Maintenance

### Regular Updates
```bash
# Update dependencies (monthly)
npm update

# Check for security vulnerabilities
npm audit
npm audit fix

# Update Next.js specifically
npm install next@latest
```

### Performance Monitoring
- Monitor Core Web Vitals in production
- Check Lighthouse scores regularly
- Monitor bundle size changes
- Track loading times across devices

### Content Updates
- Review and update course information quarterly
- Check contact information accuracy
- Update testimonials and partner logos
- Verify pricing information

### Security Maintenance
- Keep dependencies up to date
- Review and update environment variables
- Monitor for security advisories
- Regularly test form validation

---

This guide provides the foundation for successful development and deployment of the Waymaker CPR platform. For specific questions or issues not covered here, refer to the project documentation or reach out to the development team.
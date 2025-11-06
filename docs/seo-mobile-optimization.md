# SEO & Mobile Optimization Guide

## Overview
This document outlines the SEO and mobile responsiveness optimizations implemented for the Waymaker CPR Training website.

**Last Updated:** November 6, 2025

---

## SEO Optimizations Implemented

### 1. Root Layout Metadata (`src/app/layout.tsx`)

#### Comprehensive Metadata
- **Title Template**: `"%s | Waymaker CPR Training"` for consistent branding
- **Default Title**: "Waymaker CPR Training | EMSA Certified CPR & First Aid - San Jose, CA"
- **Description**: Professional EMSA-certified training with bilingual support
- **Keywords**: Bilingual array including:
  - English: "CPR training San Jose", "EMSA pediatric CPR", "First Aid certification"
  - Traditional Chinese: "中文 CPR 培訓", "兒童心肺復甦術", "急救證書"

#### Viewport Configuration
```typescript
width: "device-width"
initialScale: 1
maximumScale: 5
userScalable: true
```

#### Social Sharing (OpenGraph & Twitter)
- OpenGraph type: website
- Locales: en_US (default), zh_TW (alternate)
- Images: 1200x630px og-image.jpg
- Twitter card: summary_large_image

#### Robots Configuration
- Index: true
- Follow: true
- Google Bot specific settings for max video/image preview

### 2. Structured Data (Schema.org)

**File**: `src/lib/structured-data.ts`

Implemented JSON-LD structured data including:

#### LocalBusiness Schema
```json
{
  "@type": "LocalBusiness",
  "name": "Waymaker CPR Training",
  "alternateName": "Waymaker 心肺復甦術培訓",
  "email": "info@waymakerbiz.com",
  "address": {
    "streetAddress": "2586 Seaboard Ave",
    "addressLocality": "San Jose",
    "addressRegion": "CA",
    "postalCode": "95131"
  },
  "areaServed": "San Jose",
  "knowsLanguage": ["en-US", "zh-TW"]
}
```

#### Course Schemas
- EMSA Pediatric CPR & First Aid (PT8H duration)
- Adult CPR & First Aid Certification (PT6H duration)
- Both with EMSA credential recognition

### 3. Page-Specific SEO

**Data File**: `src/data/seo.ts`  
**Component**: `src/components/SEOHead.tsx`

#### SEO Data Structure
Following the project's pattern of centralizing content in `src/data/` TypeScript files, all page-specific SEO metadata is stored in `src/data/seo.ts`:

```typescript
export const seoData = {
  courses: {
    en: {
      title: "CPR Courses | EMSA Pediatric CPR & First Aid Training - Waymaker CPR",
      description: "EMSA-approved pediatric CPR and first aid courses...",
      keywords: ["EMSA pediatric CPR course", "childcare first aid training", ...]
    },
    zh: {
      title: "CPR 課程 | EMSA 認證兒童心肺復甦術與急救訓練 - Waymaker CPR",
      description: "聖荷西地區 EMSA 認證的兒童心肺復甦術與急救課程...",
      keywords: ["EMSA 兒童 CPR 課程", "托育急救訓練", ...]
    }
  },
  booking: { /* ... */ },
  contact: { /* ... */ }
} as const;
```

#### SEOHead Component
Client-side component that dynamically updates metadata based on:
- Current page (`page` prop: "courses" | "booking" | "contact")
- User's selected language (from `LanguageContext`)

The component:
- Updates `document.title`
- Injects/updates meta description tag
- Injects/updates meta keywords tag
- Sets HTML `lang` attribute (en/zh-TW)

#### Usage Pattern
```tsx
import { SEOHead } from "@/components/SEOHead";

export default function CoursesPage() {
  return (
    <>
      <SEOHead page="courses" />
      <main>{/* page content */}</main>
    </>
  );
}
```

This follows the same pattern as other data files:
- `src/data/contact.ts` → contact page copy
- `src/data/booking.ts` → booking page copy
- `src/data/courses.ts` → courses page copy
- `src/data/seo.ts` → SEO metadata for all pages

#### Courses Page (`/courses`)
- **EN Title**: "CPR Courses | EMSA Pediatric CPR & First Aid Training - Waymaker CPR"
- **ZH Title**: "CPR 課程 | EMSA 認證兒童心肺復甦術與急救訓練 - Waymaker CPR"
- **Keywords**: Course-specific terms (EMSA certification, childcare requirements, bilingual instruction)
- **Data Source**: `seoData.courses` in `src/data/seo.ts`

#### Booking Page (`/booking`)
- **EN Title**: "Book CPR Training | Schedule Your EMSA Certification - Waymaker CPR"
- **ZH Title**: "預約 CPR 訓練 | 預定 EMSA 認證課程 - Waymaker CPR"
- **Keywords**: Booking-related terms (schedule, appointment, on-site training)
- **Data Source**: `seoData.booking` in `src/data/seo.ts`

#### Contact Page (`/contact`)
- **EN Title**: "Contact Us | Waymaker CPR Training - San Jose, CA"
- **ZH Title**: "聯絡我們 | Waymaker CPR 訓練 - 加州聖荷西"
- **Keywords**: Contact-specific terms (location, email, support)
- **Data Source**: `seoData.contact` in `src/data/seo.ts`

### 4. Sitemap & Robots.txt

#### Sitemap (`src/app/sitemap.ts`)
- Homepage: Priority 1.0, Monthly updates
- Courses: Priority 0.9, Monthly updates
- Booking: Priority 0.8, Weekly updates
- Contact: Priority 0.7, Monthly updates

#### Robots.txt (`src/app/robots.ts`)
- Allow all user agents
- Disallow: `/api/`, `/_next/`
- Sitemap reference: `https://waymakercpr.com/sitemap.xml`

---

## Mobile Responsiveness Optimizations

### 1. Responsive Header (`src/components/Header.tsx`)

#### Mobile Menu Implementation
- **Hamburger Menu**: Visible on screens < 768px (md breakpoint)
- **Icons**: Menu/X from Lucide React
- **Sticky Header**: `sticky top-0 z-50` for persistent navigation
- **Touch Targets**: Minimum 44x44px for accessibility

#### Responsive Breakpoints
- Mobile logo: 180px width (56px height)
- Desktop logo: 240px width (72px height)
- Header height: 80px (mobile) → 100px (desktop)
- Navigation spacing: 6 (mobile) → 8 (desktop)

#### Mobile Menu Features
- Full-screen overlay with backdrop blur
- Centered vertical navigation
- Large touch-friendly text (2xl)
- Auto-close on link click
- Includes language toggle

### 2. Global Mobile Optimizations (`src/app/globals.css`)

#### Viewport & Touch Handling
```css
html {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
```

#### Touch Targets
```css
button, a {
  @apply min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0;
}
```

#### Prevent Horizontal Scroll
```css
body {
  overflow-x: hidden;
}
```

#### Smooth Scrolling
Enabled for users who don't prefer reduced motion

### 3. Responsive Layout (`src/app/layout.tsx`)

#### Viewport Meta Tag
```typescript
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4FAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0F3B4C" }
  ]
}
```

### 4. Component-Level Responsive Design

All existing components already implement Tailwind responsive utilities:

#### Typography Scale
- Mobile: `text-4xl` → Desktop: `md:text-5xl`
- Paragraph: Base size with `md:text-lg` bump

#### Grid Layouts
- Mobile: Single column (default)
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3` or custom

#### Padding/Spacing
- Mobile: `px-6` → Desktop: `md:px-16 lg:px-32`
- Consistent vertical rhythm with `space-y-*` utilities

#### Images
- Responsive sizing with Next.js Image
- Proper `sizes` attribute for optimal loading
- WebP with PNG/JPEG fallback

---

## Testing Recommendations

### Mobile Testing Checklist
- [ ] Test on real iOS devices (iPhone 12+, Safari)
- [ ] Test on real Android devices (Chrome, Samsung Internet)
- [ ] Test landscape orientation
- [ ] Verify touch targets (min 44x44px)
- [ ] Check text readability (min 16px body text)
- [ ] Test forms on mobile keyboards
- [ ] Verify menu animations/transitions
- [ ] Test language toggle on mobile

### SEO Testing Tools
- [ ] Google Search Console verification
- [ ] Google Rich Results Test (structured data)
- [ ] Lighthouse SEO audit (target: 90+)
- [ ] PageSpeed Insights (mobile/desktop)
- [ ] Schema.org validator
- [ ] OpenGraph preview (Facebook Sharing Debugger)
- [ ] Twitter Card validator

### Accessibility Testing
- [ ] Screen reader navigation (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Color contrast ratio (WCAG AA minimum)
- [ ] Focus indicators visible
- [ ] ARIA labels for interactive elements

---

## Performance Considerations

### Image Optimization
- Use Next.js Image component for automatic optimization
- Implement lazy loading for below-fold images
- Provide appropriate `sizes` attribute
- Use modern formats (WebP) with fallbacks

### Critical CSS
- Tailwind purges unused styles automatically
- Font loading optimized with `display: swap`

### JavaScript Bundle
- Client components only where needed
- React Server Components for static content
- Dynamic imports for heavy features

---

## Future Enhancements

### SEO
1. Add blog/resources section for content marketing
2. Implement hreflang tags for language targeting
3. Create FAQ schema markup
4. Add review/rating schema (when testimonials available)
5. Set up Google Analytics 4
6. Implement Google Search Console sitemap submission

### Mobile
1. Add PWA manifest for install capability
2. Implement offline support with service worker
3. Add haptic feedback for touch interactions
4. Optimize for foldable devices
5. Test on tablet-specific layouts

### Accessibility
1. Achieve WCAG AAA compliance (beyond AA)
2. Add skip navigation links
3. Implement reduced motion preferences
4. Add dark mode support (already themed)

---

## Monitoring & Maintenance

### Regular Checks (Monthly)
- [ ] Review Google Search Console for crawl errors
- [ ] Check Core Web Vitals scores
- [ ] Verify structured data validity
- [ ] Test on new device releases
- [ ] Review and update keywords based on search trends

### Updates (Quarterly)
- [ ] Review and refresh meta descriptions
- [ ] Update structured data with new courses/offerings
- [ ] Refresh og:image if branding changes
- [ ] Audit and fix broken links
- [ ] Review competitor SEO strategies

---

## Resources

### Documentation
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Google Search Central](https://developers.google.com/search)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Testing Tools
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Markup Validator](https://validator.schema.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Contact
For technical questions: Developer documentation in `docs/development-guide.md`
For content updates: See `docs/content-management.md`

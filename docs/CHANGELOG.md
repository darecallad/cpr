# Changelog

All notable changes to the Waymaker CPR Training Platform project will be documented in this file.

## [Unreleased] - 2025-11-06

### Added
#### SEO Optimization
- **Root Layout Metadata:** Comprehensive SEO meta tags in `src/app/layout.tsx`
  - Title template with brand consistency
  - Bilingual keywords (English + Traditional Chinese)
  - OpenGraph tags for social sharing
  - Twitter Card metadata
  - Viewport configuration optimized for mobile
  - Robots directives for search engines
- **Structured Data (JSON-LD):** `src/lib/structured-data.ts`
  - LocalBusiness schema with San Jose address
  - Course schemas for EMSA Pediatric and Adult CPR
  - WebSite schema with language support
- **Page-Specific SEO:** `src/components/SEOHead.tsx`
  - Dynamic client-side metadata updates
  - Bilingual title/description/keywords per page
  - Language attribute management
- **Sitemap:** `src/app/sitemap.ts` with priority and change frequency
- **Robots.txt:** `src/app/robots.ts` with proper crawling rules

#### Mobile Responsiveness
- **Responsive Header:** `src/components/Header.tsx`
  - Mobile hamburger menu with overlay
  - Sticky navigation bar
  - Touch-friendly navigation (44x44px minimum)
  - Responsive logo sizing
- **Global Mobile Styles:** `src/app/globals.css`
  - Webkit text size adjustment
  - Tap highlight removal
  - Touch target minimum sizes
  - Horizontal scroll prevention
  - Smooth scrolling for accessibility

#### Documentation
- **SEO & Mobile Guide:** `docs/seo-mobile-optimization.md`
  - Complete implementation details
  - Testing checklists
  - Performance considerations
  - Future enhancement roadmap

### Changed
#### Contact Information Update
- **Email:** Changed from `hello@waymakercpr.com` to `info@waymakerbiz.com`
- **Address:** Updated from `25386 Seaboard Ave` to `2586 Seaboard Ave, San Jose, CA 95131`
- **Service Area:** Changed from "Greater Los Angeles & Orange County" to "San Jose, CA"

#### Contact Methods Streamlined
- **Removed:** Phone contact option (was: +1 (424) 555-0198)
- **Removed:** LINE messaging support (was: @waymaker)
- **Removed:** Social media links (Facebook and Instagram)
- **Retained:** Email as the primary contact method

### Updated Files
#### Source Code - Contact Updates
- `src/data/contact.ts` - Updated contact details, removed phone/LINE/social fields
- `src/components/Footer.tsx` - Updated email and service area, removed phone
- `src/data/booking.ts` - Updated assistance text to email-only contact
- `src/app/contact/page.tsx` - Removed phone, LINE, and social media sections

#### Source Code - SEO & Mobile
- `src/app/layout.tsx` - Added comprehensive metadata and structured data import
- `src/app/courses/page.tsx` - Integrated SEOHead component with bilingual metadata
- `src/app/booking/page.tsx` - Integrated SEOHead component with booking-specific SEO
- `src/app/contact/page.tsx` - Integrated SEOHead component with contact-specific SEO
- `src/components/Header.tsx` - Added mobile menu, responsive sizing, sticky positioning
- `src/app/globals.css` - Added mobile optimization styles

#### Documentation
- `docs/project-overview.md` - Updated business context with new contact info
- `docs/development-guide.md` - Updated environment variable examples
- `README.md` - Added contact information section with current details
- `docs/seo-mobile-optimization.md` - **NEW** Complete SEO and mobile optimization guide

### Technical Changes
#### Contact Updates
- Removed `SocialId` type definition
- Removed `socialIcons` export from `contact.ts`
- Removed unused Lucide icon imports (`Phone`, `MessageCircle`, `Facebook`, `Instagram`)
- Cleaned up contact form validation to match new structure

#### SEO & Mobile Enhancements
- Added `generateStructuredData()` function for JSON-LD
- Created `SEOHead` client component for dynamic metadata
- **Created `src/data/seo.ts`** - Centralized SEO data following project pattern
  - All page-specific SEO metadata (courses, booking, contact)
  - Bilingual support (English + Traditional Chinese)
  - Type-safe with `as const` assertion
- Implemented Next.js Metadata API with MetadataRoute
- Added `Menu` and `X` icons from Lucide for mobile navigation
- Mobile menu state management with React useState
- **Created `public/site.webmanifest`** - Minimal PWA manifest (no icons)
- **Removed unused icon references** - Cleaned up non-existent image references

### Removed
- **OpenGraph images** - Removed references to non-existent `/og-image.jpg`
- **Apple touch icon** - Removed reference to non-existent `/apple-touch-icon.png`
- **PWA icons** - Removed references to non-existent icon files from manifest
- **Manifest reference** - Removed manifest link from layout (not needed without icons)

---

## Format Guidelines
This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) principles:

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

# Changelog

All notable changes to the Waymaker CPR Training Platform project will be documented in this file.

## [Unreleased] - 2025-11-10

### Added
#### Email Integration
- **Gmail SMTP Configuration:** 
  - Created `src/lib/email.ts` with nodemailer transporter
  - Environment variables setup (`.env.local`, `.env.example`)
  - Email verification function
- **API Routes:**
  - `/api/booking` - Handles course booking submissions with formatted HTML emails
  - `/api/contact` - Handles contact form submissions with formatted HTML emails
- **Form Integration:**
  - Updated `src/app/booking/page.tsx` to POST to `/api/booking`
  - Updated `src/app/contact/page.tsx` to POST to `/api/contact`
  - Added async form submission with error handling
  - User-friendly error messages (bilingual)
- **Email Templates:**
  - Professional HTML email templates with brand colors
  - Bilingual content (English + Traditional Chinese)
  - Plain text fallback versions
  - Reply-to functionality for direct customer responses
- **Documentation:**
  - Created `docs/email-setup-guide.md` with complete setup instructions
  - Gmail App Password generation guide
  - Testing procedures and troubleshooting tips
- **Testing Script:**
  - Created `scripts/test-email.js` for quick email configuration testing

#### Dependencies
- Added `nodemailer@^6.9.16` for email sending
- Added `@types/nodemailer@^6.4.17` for TypeScript support

## [Previous] - 2025-11-06

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

#### Payment Options
- **Cash App payment method** - Added Cash App as a payment option
  - English: "Fast and secure payments via Cash App for instant processing."
  - 中文: "透過 Cash App 快速安全付款，即時處理."
  - Icon: Wallet icon from Lucide React

### Changed
#### Contact Information Update
- **Email:** Changed from `hello@waymakercpr.com` to `info@waymakerbiz.com`
- **Address:** Updated from `25386 Seaboard Ave` to `2586 Seaboard Ave, San Jose, CA 95131`
- **Service Area:** Changed from "Greater Los Angeles & Orange County" to "San Jose, CA"
- **Contact form help text:** Updated to email-only contact (removed phone/LINE references)

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
- **Digital wallets payment option** - Removed Apple Pay and Google Pay from payment methods
- **District/group invoices payment option** - Removed purchase orders and ACH payments option
- **Payment method icons** - Removed unused Wallet and FileText icons from imports
- **Footer EIN and Privacy Policy** - Removed placeholder EIN (12-3456789) and Privacy Policy text from footer

### Fixed
- **Form autocomplete attributes** - Added proper `autocomplete` and `name` attributes to all form inputs
  - Booking form: name, phone, email, organization (autocomplete enabled)
  - Contact form: name, email (autocomplete enabled)
  - Custom date field: autocomplete disabled
  - Improves browser autofill functionality and accessibility

---

## Format Guidelines
This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) principles:

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

# Changelog

All notable changes to the Waymaker CPR Training Platform project will be documented in this file.

## [Unreleased] - 2025-11-06

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
#### Source Code
- `src/data/contact.ts` - Updated contact details, removed phone/LINE/social fields
- `src/components/Footer.tsx` - Updated email and service area, removed phone
- `src/data/booking.ts` - Updated assistance text to email-only contact
- `src/app/contact/page.tsx` - Removed phone, LINE, and social media sections

#### Documentation
- `docs/project-overview.md` - Updated business context with new contact info
- `docs/development-guide.md` - Updated environment variable examples
- `README.md` - Added contact information section with current details

### Technical Changes
- Removed `SocialId` type definition
- Removed `socialIcons` export from `contact.ts`
- Removed unused Lucide icon imports (`Phone`, `MessageCircle`, `Facebook`, `Instagram`)
- Cleaned up contact form validation to match new structure

---

## Format Guidelines
This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) principles:

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

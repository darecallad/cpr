# Waymaker CPR Training Platform - Project Overview

_Last updated: November 6, 2025_

## Table of Contents
- [Project Background](#project-background)
- [Business Context](#business-context)
- [Technical Overview](#technical-overview)
- [Features & Functionality](#features--functionality)
- [Architecture & Design](#architecture--design)
- [Development Status](#development-status)
- [Future Roadmap](#future-roadmap)

## Project Background

### Mission Statement
- **English:** Guiding the way to safety, safeguarding every life.
- **中文:** 引領安全之路，守護生命之旅。

### Business Goals
Waymaker CPR is a specialized training platform designed to serve childcare and educational institutions throughout California with professional CPR and First Aid certification programs. The platform serves as both a marketing presence and booking system for Waymaker's EMSA-accredited training services.

### Target Audience
- **Primary:** Preschool and daycare facility administrators and staff
- **Secondary:** Individual educators seeking certification
- **Geographic focus:** San Jose, California area
- **Languages:** Bilingual support for English and Traditional Chinese speakers

### Core Value Proposition
- Professional, warm, and encouraging training approach
- Bilingual instruction and support
- On-site and studio-based training options
- EMSA-compliant certification programs
- Specialized focus on pediatric emergency response

## Business Context

### Contact Information
- **Email:** info@waymakerbiz.com
- **Address:** 2586 Seaboard Ave, San Jose, CA 95131
- **Service Area:** San Jose, California

### Service Offerings
1. **EMSA Pediatric CPR & First Aid Training**
   - 8-hour certification workshop
   - Valid for 2 years
   - On-site or studio delivery
   
2. **Training Formats**
   - On-site workshops (6-24 participants)
   - Open enrollment classes at Torrance studio
   - Hybrid refresher courses for renewals

3. **Pricing Structure**
   - Standard: $90 per participant
   - Group discounts: 10% for 15+ participants
   - Bundle options with additional safety courses

### Compliance & Certification
- EMSA (Emergency Medical Services Authority) approved provider
- California Community Care Licensing accepted
- CDSS (California Department of Social Services) compliant
- Meets state requirements for childcare facilities

## Technical Overview

### Technology Stack
- **Framework:** Next.js 15.3 with App Router
- **Runtime:** React 19 + TypeScript 5
- **Styling:** Tailwind CSS 4 with custom Waymaker brand tokens
- **UI Components:** shadcn/ui + Radix primitives
- **Icons:** Lucide React
- **Theming:** next-themes for light/dark mode support
- **Development:** ESLint (flat config), TypeScript strict mode

### Key Dependencies
```json
{
  "next": "15.3.4",
  "react": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4.1.10",
  "lucide-react": "^0.522.0",
  "@radix-ui/react-*": "Latest stable"
}
```

### Deployment & Hosting
- **Recommended:** Vercel (optimized for Next.js)
- **Build command:** `npm run build`
- **Node version:** 18+ recommended
- **Environment:** Static export compatible

## Features & Functionality

### Core Pages
1. **Homepage (`/`)**
   - Hero section with brand messaging
   - Course overview and value propositions
   - Process explanation (booking to certification)
   - Testimonials and social proof
   - Partner organizations showcase
   - Call-to-action sections

2. **Courses Page (`/courses`)**
   - Detailed curriculum breakdown
   - Training schedule and format options
   - Pricing and certification information
   - FAQ section
   - Course booking integration

3. **Booking Page (`/booking`)**
   - Session selection (upcoming scheduled classes)
   - Custom date request functionality
   - Contact form with validation
   - Payment method information
   - Confirmation flow

4. **Contact Page (`/contact`)**
   - Multiple contact methods (phone, email, LINE)
   - Interactive contact form
   - Google Maps integration
   - Office location and hours
   - Social media links

### Internationalization (i18n)
- **Languages:** English (`en`) and Traditional Chinese (`zh`)
- **Implementation:** Context-based locale management
- **Storage:** Browser localStorage for user preference persistence
- **Coverage:** All user-facing content fully bilingual
- **Toggle:** Header-based language switcher

### UI/UX Features
- **Responsive Design:** Mobile-first approach with desktop optimization
- **Accessibility:** WCAG 2.1 AA compliant components
- **Brand Consistency:** Waymaker color palette and typography
- **Interactive Elements:** Forms with validation, hover states, transitions
- **Performance:** Optimized images, lazy loading, minimal bundle size

## Architecture & Design

### Project Structure
```
src/
├── app/                    // Next.js App Router pages
│   ├── booking/           // Booking page
│   ├── contact/           // Contact page  
│   ├── courses/           // Course details page
│   ├── globals.css        // Global styles & Tailwind
│   ├── layout.tsx         // Root layout with providers
│   └── page.tsx           // Homepage
├── components/            // React components
│   ├── ui/               // shadcn/ui primitives
│   ├── [Section].tsx     // Page sections (Hero, Process, etc.)
│   ├── Header.tsx        // Site navigation
│   └── Footer.tsx        // Site footer
├── context/              // React Context providers
│   └── LanguageContext.tsx // i18n state management
├── data/                 // Static content & copy
│   ├── booking.ts        // Booking form content
│   ├── contact.ts        // Contact page content
│   ├── courses.ts        // Course information
│   └── home/             // Homepage sections data
└── lib/                  // Utilities
    └── utils.ts          // Helper functions
```

### Design System
Based on shadcn/ui with Waymaker brand customizations:

#### Colors
- **Primary Teal:** `#0F6C8C` (headlines, CTAs)
- **Accent Teal:** `#2F7FA3` (subheadings, UI accents)
- **Sky Teal:** `#73BBD1` (gradients, buttons)
- **Light Mint:** `#A8D5BA` (backgrounds, cards)
- **Warm Orange:** `#FF8A5B` (primary CTAs)
- **Deep Navy:** `#0F3B4C` (text emphasis)
- **Slate:** `#2F4858` (body text)
- **Background:** `#F4FAF8` (page background)

#### Typography
- **Primary Font:** Geist Sans
- **Fallback:** "Segoe UI", sans-serif
- **Weights:** 400-700 depending on hierarchy
- **Line Height:** 1.6 for body text, tighter for headings

#### Components
- **Buttons:** Orange primary, teal secondary, consistent padding
- **Cards:** Soft shadows, rounded corners, mint borders
- **Forms:** Validation states, accessible labels, proper contrast
- **Navigation:** Sticky header, mobile hamburger menu

### Data Management
- **Content Strategy:** Static content in TypeScript files with strong typing
- **Form Handling:** Client-side validation with TypeScript interfaces
- **State Management:** React Context for global state (language preference)
- **API Integration:** Prepared for future backend integration

## Development Status

### Current Implementation
✅ **Completed Features:**
- Full responsive design across all breakpoints
- Complete bilingual content implementation
- All core pages with proper navigation
- Form validation and user feedback
- Brand-compliant styling and components
- SEO-optimized page structure
- Accessibility compliance

✅ **Technical Infrastructure:**
- Next.js 15 App Router implementation
- TypeScript strict mode configuration
- Tailwind CSS 4 with custom brand tokens
- ESLint flat config with Next.js rules
- shadcn/ui component library integration

### Known Limitations
- No backend integration (forms are client-side only)
- No payment processing implementation
- No user authentication system
- No content management system
- Limited SEO metadata customization

### Testing Status
- Component structure validated
- Cross-browser compatibility tested
- Mobile responsiveness verified
- Form validation tested
- TypeScript compilation verified

## Future Roadmap

### Phase 1: Backend Integration
- Form submission to email service or database
- Session management for bookings
- Contact form processing
- Analytics integration (Google Analytics, etc.)

### Phase 2: Enhanced Functionality
- Payment processing integration (Stripe, Square)
- User account system for returning customers
- Booking confirmation and reminder system
- Calendar integration for session scheduling

### Phase 3: Content Management
- Admin panel for content updates
- Dynamic session scheduling
- Testimonial management system
- Partner logo management
- Blog/news section

### Phase 4: Advanced Features
- Student portal with certification tracking
- Automated certificate generation
- Advanced reporting and analytics
- Multi-location support
- Integration with LMS platforms

### Technical Improvements
- **Performance:** Image optimization, lazy loading enhancements
- **SEO:** Dynamic metadata, sitemap generation, structured data
- **Testing:** Unit tests, integration tests, E2E testing
- **DevOps:** CI/CD pipeline, automated deployment, monitoring

### Scalability Considerations
- Database design for multi-tenant support
- CDN integration for global content delivery
- Caching strategies for improved performance
- API rate limiting and security measures

---

This project represents a professional, brand-focused platform designed to grow with Waymaker's expanding training services while maintaining the highest standards of user experience and technical excellence.
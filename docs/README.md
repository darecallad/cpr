# Waymaker CPR Training Platform - Documentation Index

_Last updated: November 10, 2025_

Welcome to the comprehensive documentation for the Waymaker CPR Training Platform. This index provides a roadmap for understanding, developing, and maintaining the platform.

## 📋 Documentation Overview

### For New Team Members
Start here to understand the project and get up to speed:

1. **[Project Overview](project-overview.md)** - Essential background and context
2. **[Development Guide](development-guide.md)** - Setup and getting started
3. **[Brand Guidelines](brand-guidelines.md)** - Visual identity and styling standards

### For Developers
Technical documentation for building and maintaining the platform:

1. **[Technical Architecture](technical-architecture.md)** - System design and code standards
2. **[Development Guide](development-guide.md)** - Workflow, testing, and deployment
3. **[Content Management](content-management.md)** - Managing bilingual content
4. **[Email Setup Guide](email-quick-setup.md)** - Gmail SMTP configuration (5 min)
5. **[SEO & Mobile Optimization](seo-mobile-optimization.md)** - Search engine and responsive design

### For Content Managers
Documentation for managing and updating site content:

1. **[Content Management](content-management.md)** - Complete content workflow guide
2. **[Brand Guidelines](brand-guidelines.md)** - Voice, tone, and visual standards

### For Stakeholders
High-level project information and strategic context:

1. **[Project Overview](project-overview.md)** - Business goals and technical overview
2. **[Brand Guidelines](brand-guidelines.md)** - Brand identity and market positioning
3. **[CHANGELOG](CHANGELOG.md)** - All project changes and updates

## 🎯 Quick Reference

### Project Essentials
- **Technology Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Languages:** English and Traditional Chinese (bilingual support)
- **Target Market:** Childcare providers in California
- **Deployment:** Vercel (recommended) or static hosting

### Key Features
- 📱 **Responsive Design** - Mobile-first approach
- 🌐 **Bilingual Support** - English and Traditional Chinese
- 📋 **Booking System** - Course registration and scheduling
- 📞 **Contact Management** - Multiple contact methods and forms
- 🎨 **Brand Consistency** - Waymaker visual identity throughout
- ♿ **Accessibility** - WCAG 2.1 AA compliant

### Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run code linting
npm run start        # Start production server
```

## 📖 Document Descriptions

### [Project Overview](project-overview.md)
Comprehensive project background covering business context, technical architecture, features, and future roadmap. Essential reading for understanding project goals and scope.

### [Technical Architecture](technical-architecture.md)
Detailed technical documentation including system design, technology stack, coding standards, and performance guidelines.

### [Development Guide](development-guide.md)
Complete developer workflow documentation from environment setup through deployment and maintenance.

### [Content Management](content-management.md)
Comprehensive guide for managing bilingual content, internationalization, and translation workflows.

### [Brand Guidelines](brand-guidelines.md)
Visual identity standards including colors, typography, logo usage, and implementation guidelines.

### [Email Setup Guide](email-quick-setup.md)
Quick 5-minute guide to configure Gmail SMTP for form submissions. Includes troubleshooting and Vercel deployment instructions.

### [Email Architecture](email-architecture.md)
Detailed technical documentation of the email system architecture, data flow, and API specifications.

### [SEO & Mobile Optimization](seo-mobile-optimization.md)
Complete guide to search engine optimization and mobile responsiveness implementation.

### [SEO Quick Reference](seo-quick-reference.md)
Quick reference for SEO best practices, metadata management, and optimization checklist.

### [CHANGELOG](CHANGELOG.md)
Chronological record of all project changes, features, fixes, and updates.

## 🔧 Common Tasks

### Adding New Content
1. Read [Content Management Guide](content-management.md)
2. Update TypeScript content files in `src/data/`  
3. Add both English and Chinese translations
4. Test both language versions
5. Follow brand guidelines for styling

### Setting Up Email Functionality
1. Follow [Email Quick Setup](email-quick-setup.md) (5 minutes)
2. Generate Gmail App Password
3. Update `.env.local` with credentials
4. Test with `node scripts/test-email.js`
5. Add environment variables to Vercel before deployment

### Adding New Pages
1. Create page in `src/app/[page-name]/page.tsx`
2. Add navigation links in Header component
3. Create content files in `src/data/`
4. Add SEO metadata
5. Implement responsive design
6. Test accessibility and performance

### Updating Styles
1. Reference [Brand Guidelines](brand-guidelines.md)
2. Use Waymaker color palette
3. Follow [Technical Architecture](technical-architecture.md) patterns
4. Test across all breakpoints
5. Verify accessibility compliance

### Deploying Changes
1. Follow [Development Guide](development-guide.md) deployment section
2. Run `npm run build` to verify build
3. Test in staging environment
4. Deploy to production
5. Monitor for issues

## 🚀 Getting Started Checklist

### For New Developers
- [ ] Read [Project Overview](project-overview.md)
- [ ] Follow [Development Guide](development-guide.md) setup
- [ ] Review [Technical Architecture](technical-architecture.md)
- [ ] Clone repository and run `npm install`
- [ ] Start development server with `npm run dev`
- [ ] Test language toggle functionality
- [ ] Review existing components and patterns

### For Content Contributors
- [ ] Read [Project Overview](project-overview.md) for context
- [ ] Study [Brand Guidelines](brand-guidelines.md)
- [ ] Review [Content Management](content-management.md)
- [ ] Understand bilingual content structure
- [ ] Practice updating existing content
- [ ] Learn translation workflow

### For Project Managers
- [ ] Review [Project Overview](project-overview.md) roadmap
- [ ] Understand [Brand Guidelines](brand-guidelines.md)
- [ ] Familiarize with [Development Guide](development-guide.md) workflow
- [ ] Set up project monitoring and analytics
- [ ] Plan content update schedule

## 📞 Support & Resources

### Getting Help
1. **Documentation:** Check relevant guide above
2. **Code Issues:** Review [Technical Architecture](technical-architecture.md)
3. **Content Questions:** See [Content Management](content-management.md)
4. **Brand Questions:** Reference [Brand Guidelines](brand-guidelines.md)
5. **GitHub Issues:** Create issue in project repository

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Project Links
- **Repository:** [darecallad/cpr](https://github.com/darecallad/cpr)
- **Live Site:** [Coming soon]
- **Staging:** [Coming soon]

---

This documentation is maintained as a living resource. When you make changes to the project, please update the relevant documentation to keep it current and helpful for the team.
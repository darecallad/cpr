# Waymaker CPR Training Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

**Professional CPR & First Aid Training Website** for Waymaker Business, serving the San Jose area with bilingual (English/中文) support.

[Live Demo](#) • [Documentation](docs/README.md) • [Report Issue](https://github.com/darecallad/cpr/issues)

</div>

---

## 📑 快速導航 (Quick Navigation)

<table>
<tr>
<td width="25%" align="center">

### 🎯 [核心功能](#-features)
**Core Features**

</td>
<td width="25%" align="center">

### 🚀 [快速開始](#-getting-started)
**Quick Start**

</td>
<td width="25%" align="center">

### 📚 [文檔](#-documentation)
**Documentation**

</td>
<td width="25%" align="center">

### 🛠️ [技術棧](#-tech-stack)
**Tech Stack**

</td>
</tr>
<tr>
<td width="25%" align="center">

### � [自定義內容](docs/content-management.md)
**Content Management**

</td>
<td width="25%" align="center">

### 📧 [Email 配置](docs/email-quick-setup.md)
**Email Setup**

</td>
<td width="25%" align="center">

### 🌐 [部署指南](docs/development-guide.md#deployment)
**Deployment**

</td>
<td width="25%" align="center">

### ⭐ [項目相關](#-about)
**About Project**

</td>
</tr>
</table>

---

## ✨ Features

### 🌐 Bilingual Support (中英雙語)
- **Complete English & Traditional Chinese** content throughout the entire website
- **Instant Language Toggle** with persistent user preference
- **Culturally Adapted** content for both audiences

### 📋 Smart Booking System
- **Language-Based Sessions**: Choose between English Session or 中文班
- **Flexible Scheduling**: Users specify their available dates and times
- **Multiple Payment Options**: PayPal, Venmo, and Check
- **Email Notifications**: Automatic confirmation emails to both admin and user

### 🎨 Modern UI/UX
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Accessible Components**: WCAG 2.1 AA compliant with keyboard navigation
- **shadcn/ui Integration**: Beautiful, customizable components
- **Waymaker Brand Colors**: Consistent brand identity throughout

### 📞 Contact Management
- **Multiple Contact Methods**: Phone, Email, and Contact Form
- **Google Maps Integration**: Embedded location map
- **Service Area Display**: Clear indication of San Jose service area
- **Real-time Form Validation**: User-friendly error messages

### 🏢 Partner & Certification Display
- **Custom Partner Logos**: Bilingual partner showcases (4 daycare centers)
  - Sunny Child Care (中英雙語幼兒園)
  - Sunny Garden Daycare (陽光花園幼兒園)
  - Sweet Butterfly Daycare (甜蜜蝴蝶幼兒園)
  - Apple Tree Daycare (蘋果樹幼兒園)
- **Government Certifications**: EMSA & CDSS official recognition

### 🎓 Course Information
- **Comprehensive Course Details**: AHA-certified Heartsaver® CPR + First Aid
- **Pricing Transparency**: Clear tuition information with group discounts (8+)
- **Delivery Options**: On-site training for San Jose area (8+ participants)
- **FAQ Section**: Answers to common questions in both languages

### 📱 SEO & Performance
- **Search Engine Optimized**: Comprehensive meta tags and structured data
- **Fast Loading**: Optimized images with WebP format
- **Sitemap & Robots.txt**: Complete search engine configuration
- **Mobile Performance**: Lighthouse score optimized

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Email Integration
- **Nodemailer** - Email sending library
- **Gmail SMTP** - Email service provider

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Next.js DevTools** - Development experience

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.18+ or 20+
- **npm** or **pnpm**
- **Gmail Account** (for email functionality)

### 1. Clone & Install

```powershell
# Clone repository
git clone https://github.com/darecallad/cpr.git
cd cpr

# Install dependencies
npm install
```

### 2. Environment Setup

Create `.env.local` file:

```env
# Gmail SMTP Configuration (Required for Forms)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@waymakerbiz.com

# Optional: Custom SMTP settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

**Quick Email Setup** (5 minutes):
👉 [Email Setup Guide](docs/email-quick-setup.md)

### 3. Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Test Email Functionality

```powershell
node scripts/test-email.js
```

### Additional Scripts

```powershell
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## � Project Structure

```
cpr/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── booking/           # Booking page
│   │   ├── contact/           # Contact page
│   │   └── courses/           # Courses page
│   ├── components/
│   │   ├── Header.tsx         # Main navigation
│   │   ├── Footer.tsx         # Footer component
│   │   ├── HeroSection.tsx    # Hero section
│   │   ├── PartnersSection.tsx    # Partner logos
│   │   ├── TestimonialsSection.tsx # Customer testimonials
│   │   └── ui/                # shadcn/ui components
│   ├── context/
│   │   └── LanguageContext.tsx    # i18n context
│   ├── data/                  # Content data files
│   │   ├── booking.ts         # Booking form content
│   │   ├── contact.ts         # Contact page content
│   │   ├── courses.ts         # Courses page content
│   │   └── home/              # Homepage sections
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   ├── partners/              # Partner logos (SVG)
│   ├── hero.webp             # Hero image
│   └── favicon.svg           # Site favicon
├── docs/                      # Documentation
└── .env.local                # Environment variables (create this)
```

**Detailed Structure**: See [Project Cleanup Summary](docs/project-cleanup-summary-nov16.md)

---

## 📚 Documentation

### For New Team Members
Start here to understand the project:

1. **[Project Overview](docs/project-overview.md)** - Project goals and context
2. **[Development Guide](docs/development-guide.md)** - Setup and workflow
3. **[Brand Guidelines](docs/brand-guidelines.md)** - Visual identity standards

### For Developers
Technical documentation:

1. **[Technical Architecture](docs/technical-architecture.md)** - System design
2. **[Email Setup Guide](docs/email-quick-setup.md)** - 5-minute email config
3. **[Content Management](docs/content-management.md)** - Manage bilingual content
4. **[SEO & Mobile Optimization](docs/seo-mobile-optimization.md)** - Performance

### For Content Managers
Content workflow:

1. **[Content Management Guide](docs/content-management.md)** - Update content
2. **[Brand Guidelines](docs/brand-guidelines.md)** - Brand standards

### Recent Updates
- **[Project Cleanup Summary (Nov 16)](docs/project-cleanup-summary-nov16.md)** - Latest changes and improvements

📖 **Full Documentation Index**: [docs/README.md](docs/README.md)

---

## 🌐 Deployment

### Vercel (Recommended - 1 Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/darecallad/cpr)

1. Click the button above
2. Add environment variables (EMAIL_USER, EMAIL_PASSWORD, EMAIL_TO)
3. Deploy!

### Manual Deployment

```powershell
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to your hosting platform
```

**Environment Variables Required**:
- `EMAIL_USER` - Gmail account
- `EMAIL_PASSWORD` - Gmail app password
- `EMAIL_TO` - Recipient email

**Deployment Guide**: [Development Guide - Deployment Section](docs/development-guide.md#deployment)

---

## 📞 Contact Information

### Waymaker Business
- **Email**: info@waymakerbiz.com
- **Phone**: Available on contact page
- **Address**: 2586 Seaboard Ave, San Jose, CA 95131
- **Service Area**: San Jose, California

### Course Information
- **Certification**: AHA Heartsaver® CPR + First Aid
- **Group Discounts**: 8+ participants
- **On-Site Training**: Available for San Jose area (8+ people)
- **Languages**: English and Traditional Chinese sessions

---

## ⭐ About

### Project Goals
Waymaker CPR Training Platform is designed to:
- Provide accessible CPR and first aid training information
- Serve both English and Chinese-speaking communities
- Simplify the booking and contact process
- Maintain professional brand identity
- Ensure mobile-friendly experience

### Why Open Source?
This project is open-sourced to:
- **Share Knowledge**: Help others build bilingual Next.js applications
- **Community Learning**: Demonstrate modern web development practices
- **Portfolio Showcase**: Display professional web development capabilities
- **Get Feedback**: Improve through community input

**Note**: All business-sensitive information (emails, credentials) are managed through environment variables and not included in the repository.

### License
This project is open source under the [MIT License](LICENSE).

You are free to:
- ✅ Use this code for learning
- ✅ Fork and modify for your own projects
- ✅ Use as reference for similar projects

Please:
- 📝 Provide attribution if you use significant portions
- 🔒 Never commit sensitive credentials to Git
- 🤝 Share improvements back to the community

---

## 🙏 Acknowledgments

### Technologies
- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Hosting platform

### Design Inspiration
- [TrendRadar](https://github.com/sansan0/TrendRadar) - README structure inspiration
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide Icons](https://lucide.dev/) - Icon library

---

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔝 回到頂部 (Back to Top)

**Built with ❤️ by Waymaker Business | Serving San Jose's childcare community**


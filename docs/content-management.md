# Content Management & Internationalization Guide

_Last updated: November 6, 2025_

## Table of Contents
- [Content Management Overview](#content-management-overview)
- [Internationalization System](#internationalization-system)
- [Adding New Content](#adding-new-content)
- [Managing Bilingual Content](#managing-bilingual-content)
- [Content Types & Structure](#content-types--structure)
- [Translation Workflow](#translation-workflow)
- [SEO & Metadata](#seo--metadata)
- [Best Practices](#best-practices)

## Content Management Overview

The Waymaker CPR platform uses a **static content management system** built with TypeScript for type safety and maintainability. All content is stored in structured TypeScript files that provide:

- **Type Safety:** Compile-time validation of content structure
- **Bilingual Support:** English and Traditional Chinese content
- **Developer Experience:** IntelliSense and autocomplete in IDEs
- **Version Control:** Content changes tracked in Git
- **Performance:** No runtime content fetching required

### Content Architecture
```
src/data/
├── home/                    # Homepage sections
│   ├── brand-mission.ts     # Brand values and mission
│   ├── hero.ts             # Hero section content
│   └── why-waymaker.ts     # Value proposition section
├── booking.ts              # Booking form and process
├── contact.ts              # Contact page content
└── courses.ts              # Course details and curriculum
```

## Internationalization System

### Language Support
The platform supports two locales:
- **English (`en`):** Primary language, US market focus
- **Traditional Chinese (`zh`):** Secondary language, Chinese-speaking community

### Implementation Details
```typescript
// Type definition for supported locales
type Locale = "en" | "zh";

// Content structure example
type ContentCopy = {
  title: string;
  description: string;
  // ... other fields
};

// Bilingual content object
const content: Record<Locale, ContentCopy> = {
  en: {
    title: "English Title",
    description: "English description...",
  },
  zh: {
    title: "中文標題",
    description: "中文描述...",
  },
};
```

### Language Context Provider
```typescript
// src/context/LanguageContext.tsx
export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState<Locale>("en");
  
  // Persists user choice to localStorage
  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored) setLocale(stored);
  }, []);

  // Components access via: const { locale } = useLanguage();
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### Using Content in Components
```typescript
import { useLanguage } from "@/context/LanguageContext";
import { heroCopy } from "@/data/home/hero";

export function HeroSection() {
  const { locale } = useLanguage();
  const content = heroCopy[locale]; // Type-safe content access
  
  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </section>
  );
}
```

## Adding New Content

### 1. Creating a New Content File
```typescript
// Example: src/data/new-section.ts

export type NewSectionLocale = "en" | "zh";

export type NewSectionCopy = {
  title: string;
  subtitle: string;
  items: Array<{
    label: string;
    description: string;
  }>;
  cta: string;
};

export const newSectionCopy: Record<NewSectionLocale, NewSectionCopy> = {
  en: {
    title: "New Section Title",
    subtitle: "Supporting subtitle text",
    items: [
      {
        label: "Item 1",
        description: "Description for first item",
      },
      {
        label: "Item 2", 
        description: "Description for second item",
      },
    ],
    cta: "Call to Action",
  },
  zh: {
    title: "新章節標題",
    subtitle: "支持性副標題文字",
    items: [
      {
        label: "項目一",
        description: "第一個項目的描述",
      },
      {
        label: "項目二",
        description: "第二個項目的描述",
      },
    ],
    cta: "行動呼籲",
  },
};
```

### 2. Creating the Component
```typescript
// src/components/NewSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { newSectionCopy } from "@/data/new-section";

export function NewSection() {
  const { locale } = useLanguage();
  const content = newSectionCopy[locale];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl">
            {content.title}
          </h2>
          <p className="text-lg text-[#2F4858] max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {content.items.map((item, index) => (
            <Card key={index} className="border-[#E0F0F5] bg-[#F8FCFB]">
              <CardHeader>
                <CardTitle className="text-lg text-[#0F3B4C]">
                  {item.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2F4858]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#FF8A5B] hover:bg-[#F57643]"
          >
            {content.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### 3. Adding to Pages
```typescript
// src/app/page.tsx (or relevant page)
import { NewSection } from "@/components/NewSection";

export default function HomePage() {
  return (
    <main>
      {/* Other sections */}
      <NewSection />
      {/* More sections */}
    </main>
  );
}
```

## Managing Bilingual Content

### Content Translation Guidelines

#### 1. Maintain Parallel Structure
Ensure both language versions have identical structure:
```typescript
// ✅ Good: Parallel structure
const content = {
  en: {
    title: "Professional Training",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    cta: "Get Started",
  },
  zh: {
    title: "專業培訓",
    features: ["特色一", "特色二", "特色三"],
    cta: "立即開始",
  },
};

// ❌ Bad: Mismatched structure
const content = {
  en: {
    title: "Professional Training",
    features: ["Feature 1", "Feature 2"],
  },
  zh: {
    title: "專業培訓",
    features: ["特色一", "特色二", "特色三"], // Different array length
    description: "額外的描述", // Extra field not in English
  },
};
```

#### 2. Cultural Adaptation
Adapt content for cultural context, not just translation:
```typescript
const pricing = {
  en: {
    currency: "$",
    amount: "90",
    period: "per person",
    note: "Group discounts available",
  },
  zh: {
    currency: "$",
    amount: "90",
    period: "每人",
    note: "團體報名享優惠價格",
  },
};
```

#### 3. Consistent Terminology
Maintain consistent translations for key terms:
```typescript
// Create a glossary for consistent translations
const terminology = {
  "CPR": "CPR", // Keep acronym
  "First Aid": "急救",
  "Certification": "認證",
  "Training": "培訓",
  "Workshop": "工作坊",
  "Book Now": "立即預約",
  "Contact Us": "聯絡我們",
};
```

### Form Content Management
```typescript
// Example: Booking form content
export const bookingCopy: Record<Locale, BookingCopy> = {
  en: {
    title: "Book Your Training",
    labels: {
      name: "Full Name",
      email: "Email Address", 
      phone: "Phone Number",
      organization: "Organization (optional)",
    },
    validation: {
      name: "Please enter your full name.",
      email: "Please provide a valid email address.",
      phone: "Please include your phone number.",
    },
    submit: "Submit Registration",
  },
  zh: {
    title: "預約課程",
    labels: {
      name: "姓名",
      email: "電子郵件",
      phone: "聯絡電話", 
      organization: "單位名稱（選填）",
    },
    validation: {
      name: "請輸入您的姓名。",
      email: "請提供有效的電子郵件地址。",
      phone: "請提供您的聯絡電話。",
    },
    submit: "提交報名",
  },
};
```

## Content Types & Structure

### Standard Content Objects

#### 1. Page Hero Sections
```typescript
type HeroCopy = {
  eyebrow?: string;        // Optional overline text
  title: string;           // Main headline
  subtitle?: string;       // Optional secondary headline
  description: string;     // Body text
  primaryCta: string;      // Main call-to-action
  secondaryCta?: string;   // Optional secondary CTA
};
```

#### 2. Feature/Service Lists
```typescript
type FeatureList = {
  heading: string;
  items: Array<{
    title: string;
    description: string;
    icon?: string;         // Icon identifier (Lucide icon name)
  }>;
};
```

#### 3. FAQ Sections
```typescript
type FaqSection = {
  title: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
};
```

#### 4. Contact Information
```typescript
type ContactInfo = {
  phone: {
    label: string;
    value: string;
    href: string;
  };
  email: {
    label: string;
    value: string;
    href: string;
  };
  address: {
    label: string;
    lines: string[];
    href?: string;        // Google Maps link
  };
};
```

### Complex Content Structures

#### Course Information
```typescript
type CourseCopy = {
  hero: HeroCopy;
  summary: Array<{
    label: string;
    value: string;
  }>;
  curriculum: {
    title: string;
    categories: Array<{
      name: string;
      bullets: string[];
    }>;
  };
  schedule: {
    title: string;
    blocks: Array<{
      time: string;
      topic: string;
    }>;
    note?: string;
  };
  // ... additional sections
};
```

## Translation Workflow

### 1. Content Creation Process
```
1. Create English content first (en)
2. Define TypeScript interfaces
3. Add placeholder Chinese content
4. Professional translation review
5. Cultural adaptation review
6. Technical implementation
7. Quality assurance testing
```

### 2. Translation Guidelines

#### Professional vs. Friendly Tone
```typescript
// Professional (for course descriptions)
const professional = {
  en: "Our EMSA-certified instructors provide comprehensive training...",
  zh: "我們的 EMSA 認證講師提供全面的培訓...",
};

// Friendly (for marketing copy)
const friendly = {
  en: "Ready to become a confident emergency responder?",
  zh: "準備好成為自信的急救應變者了嗎？",
};
```

#### Technical Terminology
```typescript
// Keep certifications and official terms
const technical = {
  en: "EMSA Pediatric CPR & First Aid Certification",
  zh: "EMSA 幼兒 CPR 與急救認證",
  // Note: EMSA stays as acronym, explain in parentheses if needed
};
```

#### Action-Oriented Language
```typescript
const cta = {
  en: "Book your training session today",
  zh: "立即預約您的培訓課程",
  // Note: Chinese CTAs often use "立即" (immediately) for urgency
};
```

### 3. Review Process
1. **Accuracy Review:** Ensure technical accuracy
2. **Cultural Review:** Verify cultural appropriateness  
3. **Consistency Review:** Check terminology consistency
4. **User Testing:** Test with native speakers
5. **Technical Review:** Verify implementation

## SEO & Metadata

### Page Metadata
```typescript
// src/app/[page]/page.tsx
export const metadata = {
  title: {
    en: "CPR Training for Childcare Providers | Waymaker",
    zh: "幼兒園 CPR 培訓課程 | Waymaker",
  },
  description: {
    en: "Professional CPR and first aid training for daycare and preschool staff. EMSA certified, bilingual instruction, on-site available.",
    zh: "專為幼兒園與托育機構提供的專業 CPR 與急救培訓。EMSA 認證，雙語教學，可到校服務。",
  },
};
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Waymaker CPR Training",
  "alternateName": "Waymaker CPR 培訓",
  "description": "Professional CPR and first aid training",
  "availableLanguage": ["en", "zh-TW"],
  "areaServed": {
    "@type": "State",
    "name": "California"
  }
}
```

## Best Practices

### 1. Content Organization
- **Group related content** in the same file
- **Use descriptive file names** (`hero.ts`, not `content1.ts`)
- **Maintain consistent naming** across languages
- **Document complex content structures** with comments

### 2. Type Safety
```typescript
// Always define types for content
export type SectionCopy = {
  title: string;
  items: string[];
};

// Use const assertions for immutable content
export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
] as const;

// Export types for reuse
export type NavigationItem = (typeof navigationItems)[number];
```

### 3. Performance Optimization
```typescript
// Use static imports for content (not dynamic)
import { heroCopy } from "@/data/home/hero"; // ✅ Good

// Avoid runtime content loading
const loadContent = async () => {
  const content = await fetch('/api/content'); // ❌ Avoid
};
```

### 4. Accessibility
```typescript
// Include alt text and ARIA labels in content
const imageContent = {
  en: {
    src: "/training-session.jpg",
    alt: "CPR instructor demonstrating chest compressions on infant manikin",
    caption: "Hands-on practice with pediatric manikins",
  },
  zh: {
    src: "/training-session.jpg", 
    alt: "CPR 講師示範嬰兒假人胸外按壓",
    caption: "使用幼兒假人進行實際操作練習",
  },
};
```

### 5. Content Validation
```typescript
// Add runtime validation for critical content
const validateContent = (content: any): content is ValidContent => {
  return (
    typeof content.title === 'string' &&
    Array.isArray(content.items) &&
    content.items.every(item => typeof item === 'string')
  );
};

// Use in components
export function ContentSection() {
  const content = sectionCopy[locale];
  
  if (!validateContent(content)) {
    console.error('Invalid content structure');
    return <div>Content unavailable</div>;
  }
  
  return <div>{/* Render content */}</div>;
}
```

### 6. Content Updates
```bash
# Before making content changes:
1. Create a feature branch
2. Update both languages simultaneously
3. Test both language versions
4. Review changes with stakeholders
5. Deploy to staging first
6. Monitor for issues after deployment
```

---

This content management system provides a robust foundation for maintaining bilingual content while ensuring type safety, performance, and maintainability. The structured approach makes it easy for developers and content managers to collaborate effectively while maintaining the highest quality standards for the Waymaker CPR platform.
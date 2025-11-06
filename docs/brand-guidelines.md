# Waymaker Brand Guidelines

_Last updated: 2025-11-02_

These guidelines keep product, marketing, and engineering output visually consistent with Waymaker’s identity. Add new references as the brand evolves.

## 1. Brand Story & Voice
- **Mission statement:** 引領安全之路，守護生命之旅。 / Guiding the way to safety, safeguarding every life.
- **Personality:** Professional, warm, encouraging. We are the calm guide beside childcare teams.
- **Tone:** Use inclusive language, second-person address when helpful, and reinforce empowerment ("you can respond with confidence"). Avoid clinical jargon without context.

## 2. Logo Usage
- **Primary logo:** `public/logo.svg`
  - Minimum width: 160 px on web, 45 mm in print.
  - Maintain at least the height of the orange heart icon as clear space on all sides.
- **Tagline:** The default lockup contains only the icon and "WAYMAKER" wordmark. If a descriptor (e.g., "CPR • First Aid") is needed for marketing materials, typeset it separately using Geist Sans caps.
- **Lockups:** For dark backgrounds, apply the logo at 100% with the background gradient or add a light outline around the typography.
- **Do not:**
  - Alter colors, stretch, skew, rotate, or apply drop shadows.
  - Remove the heart icon or substitute different lettering styles.
  - Place the logo on visually busy photography without a translucent overlay.
- **Favicon / mark:** Extract the turquoise "W" and heart icon; export as a 512×512 PNG or SVG and add to `public/favicon.svg` when ready.

## 3. Color Palette
| Role | Hex | Usage |
| --- | --- | --- |
| Primary teal | `#0F6C8C` | Headlines, CTA text, icons |
| Accent teal | `#2F7FA3` | Subheadings, UI accents |
| Sky teal | `#73BBD1` | Gradients, buttons, illustrative shapes |
| Light mint | `#A8D5BA` | Section backgrounds, cards |
| Warm orange | `#FF8A5B` | Primary CTA backgrounds, highlights |
| Deep navy | `#0F3B4C` | Logo typography, body emphasis |
| Slate | `#2F4858` | Body copy |
| Neutral background | `#F4FAF8` | Page background |

- Gradients: use a 45° blend from `#A8D5BA` → `#73BBD1` for hero or card backgrounds (`bgGradient` in `logo.svg`).
- Neutrals: leverage Tailwind’s `border-[#CDE6E0]` and `bg-white/80` combos for glassmorphism panels.

## 4. Typography
- **Primary font:** Geist Sans / fallback `"Segoe UI", sans-serif`.
- **Display:** Use weight 600–700 for headings.
- **Body:** Weight 400–500, 1.6 line height for paragraphs.
- **Numerals:** Use proportional lining numerals; for certificates use monospaced digits if needed.

## 5. Iconography & Illustration
- Use Lucide icons with rounded stroke ends (e.g., `ShieldCheck`, `HeartHandshake`, `Sparkles`). Keep stroke width at 1.5–2 px.
- Photo direction: bright, natural light imagery showing instructors guiding caregivers with CPR infant manikins. Favor candid smiles over staged hospital scenes.
- Apply a soft teal overlay (60–70% opacity) when text is placed over photography.

## 6. Layout Principles
- Generous spacing: 64px vertical rhythm between major sections on desktop; 32px on mobile.
- Cards and panels: 24px padding, 16px radius, subtle shadow (`shadow-sm`) with mint borders.
- Buttons: `bg-[#FF8A5B]` with hover `#F57643`, 12px horizontal padding minimum.
- Reusable section shell: heading, subheading, supporting copy, CTA repeated across pages for consistency.

## 7. Content Guidelines
- Always provide bilingual copy (English + Traditional Chinese). Keep translations parallel and avoid machine-translated tone.
- Highlight certification credibility (EMSA, CDSS) at least once per page.
- Reinforce calls to action—"立即預約" / "Book now"—after each major storytelling block.

## 8. Digital Implementation

### CSS Variables Implementation
```css
/* src/app/globals.css */
:root {
  --primary-teal: #0F6C8C;
  --accent-teal: #2F7FA3;
  --sky-teal: #73BBD1;
  --light-mint: #A8D5BA;
  --warm-orange: #FF8A5B;
  --deep-navy: #0F3B4C;
  --slate: #2F4858;
  --neutral-bg: #F4FAF8;
  --border-light: #CDE6E0;
}
```

### Component Styling Patterns
```typescript
// Consistent button styling
const primaryButton = "bg-[#FF8A5B] hover:bg-[#F57643] text-white";
const secondaryButton = "border-[#0F3B4C] text-[#0F3B4C] hover:bg-[#0F3B4C]/10";

// Card styling with brand colors
const brandCard = "border-[#E0F0F5] bg-[#F8FCFB] shadow-sm";

// Section backgrounds
const lightSection = "bg-white";
const mintSection = "bg-[#F4FAF8]";
const gradientSection = "bg-gradient-to-br from-[#A8D5BA] to-[#73BBD1]";
```

### Responsive Design Tokens
```css
/* Spacing scale aligned with brand principles */
.section-padding { padding: 4rem 1.5rem; }     /* py-16 px-6 */
.content-max-width { max-width: 72rem; }       /* max-w-6xl */
.card-padding { padding: 1.5rem; }             /* p-6 */
.content-gap { gap: 3rem; }                    /* gap-12 */

/* Typography hierarchy */
.display-xl { font-size: 3rem; line-height: 1.1; }      /* text-5xl */
.display-lg { font-size: 2.25rem; line-height: 1.2; }   /* text-4xl */
.display-md { font-size: 1.875rem; line-height: 1.3; }  /* text-3xl */
.body-lg { font-size: 1.125rem; line-height: 1.6; }     /* text-lg */
.body-base { font-size: 1rem; line-height: 1.6; }       /* text-base */
```

## 9. Asset Storage & Organization
- **Logos:** `public/logo.svg` (primary lockup), `public/favicon.svg` (mark only)
- **Brand Assets:** Future alternates in `public/brand/` with descriptive naming
  - `waymaker-logo-dark.svg` (dark background version)
  - `waymaker-mark-only.svg` (icon-only version)
  - `waymaker-horizontal.svg` (horizontal layout)
- **Photography:** `public/images/training/` for course photos, `public/images/team/` for staff photos
- **Partners:** `public/partners/` for partner organization logos
- **Documentation:** All brand docs in `docs/` with semantic versioning when updated

### File Naming Conventions
```
Images:     kebab-case-descriptive.jpg     (cpr-training-session.jpg)
Logos:      brand-name-variant.svg         (waymaker-logo-dark.svg)
Icons:      icon-name-size.svg             (heart-icon-24.svg)
Docs:       topic-date.md                  (brand-guidelines-2025.md)
```

## 10. Usage Examples

### Homepage Hero Implementation
```typescript
// Correct brand application
<section className="bg-gradient-to-br from-[#A8D5BA] to-[#73BBD1] py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-[#0F6C8C] mb-6">
      專業守護 安心相伴
    </h1>
    <p className="text-lg text-[#2F4858] max-w-3xl mb-8">
      Waymaker 致力於為幼兒園與托育機構提供專業且貼心的 CPR 與急救培訓
    </p>
    <Button className="bg-[#FF8A5B] hover:bg-[#F57643] px-8 py-3">
      立即預約
    </Button>
  </div>
</section>
```

### Card Component Styling
```typescript
// Brand-consistent card design
<Card className="border-[#E0F0F5] bg-[#F8FCFB] shadow-sm">
  <CardHeader className="pb-2">
    <CardTitle className="text-lg font-semibold text-[#0F3B4C]">
      課程特色
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-[#2F4858] leading-relaxed">
      專業認證講師，雙語教學環境
    </p>
  </CardContent>
</Card>
```

## 11. Quality Assurance

### Brand Compliance Checklist
- [ ] Colors match exact hex values from palette
- [ ] Typography uses Geist Sans with correct weights
- [ ] Spacing follows 8px grid system (Tailwind spacing scale)
- [ ] Buttons use orange (#FF8A5B) for primary actions
- [ ] Cards use mint borders (#E0F0F5) and backgrounds (#F8FCFB)
- [ ] Headlines use primary teal (#0F6C8C)
- [ ] Body text uses slate (#2F4858)

### Testing Procedures
1. **Visual QA:** Compare against brand guidelines
2. **Color Accuracy:** Use browser dev tools to verify hex values
3. **Responsive Testing:** Ensure brand consistency across breakpoints
4. **Accessibility:** Verify color contrast meets WCAG 2.1 AA standards
5. **Cross-browser:** Test in Chrome, Firefox, Safari, Edge

## 12. Implementation Checklist
- [ ] Reference brand colors in Tailwind theme tokens (`globals.css`)
- [ ] Use `BrandMissionSection` component to surface mission statement
- [ ] Apply consistent spacing using Tailwind utilities
- [ ] Implement proper typography hierarchy across all pages
- [ ] Update README when brand assets change
- [ ] Document any new brand applications in this guide
- [ ] Review brand compliance during code reviews

## 13. Maintenance & Updates

### Regular Review Schedule
- **Monthly:** Review new content for brand consistency
- **Quarterly:** Audit all pages for brand compliance
- **Annually:** Update brand guidelines with any changes
- **As needed:** Document new patterns and components

### Change Management
1. Propose changes via GitHub issue with visual examples
2. Review with stakeholders and design lead
3. Update this documentation before implementation
4. Test changes across all pages and components
5. Update component library and examples

---

Maintaining visual and messaging coherency ensures every touchpoint—from homepage to email signature—reinforces Waymaker's promise to guide and protect. This systematic approach to brand implementation creates trust and recognition in our community of childcare professionals.

For questions about brand application or to propose new patterns, reach out to the design lead or create an issue in the project repository.

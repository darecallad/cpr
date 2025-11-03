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

## 8. Asset Storage
- **Logos:** `public/logo.svg` (full lockup). Future alternates should live in `public/brand/` with clear naming (`waymaker-logo-dark.svg`, etc.).
- **Photography:** Store rights-cleared imagery under `public/images/`. Include a README in that directory noting source and usage rights.
- **Docs:** File updates to this guide and other brand docs in `docs/` with semantic names (e.g., `color-palette-2026.md`).

## 9. Implementation Checklist
- [ ] Reference these colors in Tailwind theme tokens (see `globals.css`).
- [ ] Use `BrandMissionSection` on the homepage to surface the mission statement.
- [ ] Update README when brand assets change (link back to this doc).

Maintaining coherency here ensures every new page, brochure, or slide echoes Waymaker’s promise to guide and protect. Reach out to the design lead before introducing new visual directions.

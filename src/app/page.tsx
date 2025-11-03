// app/page.tsx
"use client";

import { HeroSection } from "@/components/HeroSection";
import { BrandMissionSection } from "@/components/BrandMissionSection";
import { OurCoursesSection } from "@/components/OurCoursesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
export default function Page() {
  return (
    <main className="space-y-16">
      <HeroSection />
      <BrandMissionSection />
      <OurCoursesSection />
      <TestimonialsSection />
      <PartnersSection />
    </main>
  );
}

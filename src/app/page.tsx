// app/page.tsx
"use client";

import { HeroSection } from "@/components/HeroSection";
import { WhyWaymakerSection } from "@/components/WhyWaymakerSection";
import { BrandMissionSection } from "@/components/BrandMissionSection";
import { OurCoursesSection } from "@/components/OurCoursesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { SecondaryCTASection } from "@/components/SecondaryCTASection";
export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhyWaymakerSection />
      <BrandMissionSection />
      <OurCoursesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <SecondaryCTASection />
    </main>
  );
}

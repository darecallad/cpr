// app/page.tsx
"use client";

import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { WhyWaymakerSection } from "@/components/WhyWaymakerSection";
import { DaycareValuePropSection } from "@/components/DaycareValuePropSection";
import { DaycareOpportunitySection } from "@/components/DaycareOpportunitySection";
import { OurCoursesSection } from "@/components/OurCoursesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { SecondaryCTASection } from "@/components/SecondaryCTASection";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StatsStrip />
      <WhyWaymakerSection />
      <DaycareValuePropSection />
      <DaycareOpportunitySection />
      <OurCoursesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <SecondaryCTASection />
    </main>
  );
}

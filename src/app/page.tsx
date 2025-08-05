// app/page.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HeroSection } from "@/components/HeroSection";
export default function Page() {


  return (
    <main className="space-y-16">
 <HeroSection />
    </main>
  );
}

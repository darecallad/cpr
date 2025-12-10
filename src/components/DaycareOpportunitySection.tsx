"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, FileCheck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { daycareCopy } from "@/data/home/daycare-opportunity";
import { useLanguage } from "@/context/LanguageContext";

export function DaycareOpportunitySection() {
  const { locale } = useLanguage();
  const content = daycareCopy[locale];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        <FadeIn direction="right" className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl">
            {content.title}
          </h2>
          <p className="text-lg text-[#2F4858] leading-relaxed">
            {content.description}
          </p>
          <ul className="space-y-3">
            {content.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#2F4858]">
                <CheckCircle2 className="h-5 w-5 text-[#FF8A5B]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643]"
            asChild
          >
            <Link href="/contact">{content.cta}</Link>
          </Button>
        </FadeIn>
        
        {/* Visual Side - Roadmap */}
        <FadeIn direction="left" className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0F6C8C] to-[#FF8A5B] opacity-30" />

            <div className="space-y-8 relative">
              {/* Step 1 */}
              <div className="flex gap-6 items-start group">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                  <FileCheck className="h-8 w-8 text-[#0F6C8C]" />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#0F3B4C]">Licensing & Paperwork</h3>
                  <p className="text-sm text-[#2F4858] mt-1">We handle the complex documentation so you don't have to.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start group">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-[#2F7FA3]" />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#0F3B4C]">Site Setup</h3>
                  <p className="text-sm text-[#2F4858] mt-1">Optimizing your space for safety, learning, and compliance.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start group">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FF8A5B] shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#0F3B4C]">Grand Opening</h3>
                  <p className="text-sm text-[#2F4858] mt-1">Launch your business with confidence and a full roster.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

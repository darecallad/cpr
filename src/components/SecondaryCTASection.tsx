"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    title: "Ready to equip your team?",
    description:
      "Reserve a training date and we\'ll bring calm, kid-focused CPR and first aid instruction to your site.",
    primaryCta: "Book a session",
    secondaryCta: "Contact us",
  },
  zh: {
    title: "立即安排團隊訓練",
    description:
      "挑選合適時段，我們會將沈著專業的 CPR 與急救訓練帶到您的教室。",
    primaryCta: "預約課程",
    secondaryCta: "聯絡我們",
  },
} as const;

export function SecondaryCTASection() {
  const { locale } = useLanguage();
  const content = copy[locale];

  return (
    <section className="relative overflow-hidden bg-[#0F3B4C] py-20">
      <div className="absolute inset-0 opacity-20" style={{
        background:
          "radial-gradient(circle at top right, #FF8A5B, transparent 60%), radial-gradient(circle at bottom left, #2F7FA3, transparent 55%)",
      }} />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
        <p className="text-lg text-white/90 md:max-w-2xl">{content.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643]"
            asChild
          >
            <Link href="/booking">{content.primaryCta}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/70 bg-transparent px-8 font-semibold text-white hover:bg-white/10"
            asChild
          >
            <Link href="/contact">{content.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { TrendingUp, ShieldCheck, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/LanguageContext";
import { daycareValueCopy, type DaycareValueItem } from "@/data/home/daycare-value";

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Heart,
};

export function DaycareValuePropSection() {
  const { locale } = useLanguage();
  const content = daycareValueCopy[locale];

  return (
    <section className="bg-[#FFF8F6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-[#2F4858] leading-relaxed">
            {content.subtitle}
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {content.items.map((item: DaycareValueItem, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-orange-100/50">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF0EB] text-[#FF8A5B] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0F3B4C]">
                    {item.title}
                  </h3>
                  <p className="text-[#2F4858] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  brandMissionCopy,
  type BrandMissionIconId,
  type BrandMissionValue,
} from "@/data/home/brand-mission";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<BrandMissionIconId, typeof ShieldCheck> = {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
};

export function BrandMissionSection() {
  const { locale } = useLanguage();
  const content = brandMissionCopy[locale];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7FA3]">
              {content.heading}
            </p>
            <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl">
              {content.tagline}
            </h2>
            <p className="text-lg text-[#2F4858]">
              {content.intro}
            </p>
            <p className="text-[#2F4858]/80">
              {content.description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-[#CDE6E0] bg-[#F4FAF8] p-6 shadow-sm">
            <span className="text-sm font-medium text-[#2F7FA3] uppercase tracking-[0.2em]">
              Waymaker
            </span>
            <p className="text-xl font-semibold text-[#0F3B4C]">
              {content.ctaQuote}
            </p>
            <Button
              size="lg"
              className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643]"
              asChild
            >
              <a href={content.ctaHref}>{content.ctaLabel}</a>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#0F6C8C]">
            {content.valuesHeading}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {content.values.map((value: BrandMissionValue) => {
              const Icon = iconMap[value.icon];
              return (
                <Card
                  key={value.title}
                  className="border-none bg-white/80 backdrop-blur shadow-sm"
                >
                  <CardContent className="space-y-4 p-6">
                    <Icon className="h-10 w-10 text-[#2F7FA3]" />
                    <h4 className="text-lg font-semibold text-[#0F3B4C]">
                      {value.title}
                    </h4>
                    <p className="text-sm text-[#2F4858]">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

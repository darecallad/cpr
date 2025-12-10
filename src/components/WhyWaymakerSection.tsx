"use client";

import Link from "next/link";
import { Compass, HelpingHand, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  type WhyWaymakerHighlight,
  type WhyWaymakerIconId,
  whyWaymakerCopy,
} from "@/data/home/why-waymaker";
import { useLanguage } from "@/context/LanguageContext";

import { CountUp } from "@/components/ui/count-up";
import { FadeIn } from "@/components/ui/fade-in";

const iconMap: Record<WhyWaymakerIconId, typeof Compass> = {
  Compass,
  HelpingHand,
  ShieldPlus,
};

export function WhyWaymakerSection() {
  const { locale } = useLanguage();
  const content = whyWaymakerCopy[locale];

  return (
    <section className="bg-[#F8FCFB] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <FadeIn className="max-w-3xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7FA3]">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl">
            {content.title}
          </h2>
          <p className="text-lg text-[#2F4858]">{content.description}</p>
          <Button
            size="lg"
            className="bg-[#0F6C8C] px-8 font-semibold text-white hover:bg-[#0B4F67]"
            asChild
          >
            <Link href="/booking">{content.ctaLabel}</Link>
          </Button>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {content.highlights.map((highlight: WhyWaymakerHighlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <FadeIn key={highlight.title} delay={index * 100} className="h-full">
                <Card
                  className="border-none bg-white/80 backdrop-blur shadow-sm h-full"
                >
                  <CardContent className="space-y-4 p-6">
                    <Icon className="h-10 w-10 text-[#2F7FA3]" />
                    <h3 className="text-lg font-semibold text-[#0F3B4C]">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-[#2F4858]">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-8 grid grid-cols-2 gap-8 border-t border-[#E0F0F5] pt-12 md:grid-cols-4">
          <FadeIn delay={200} className="text-center">
            <div className="text-3xl font-bold text-[#FF8A5B]">
              <CountUp end={500} suffix="+" />
            </div>
            <div className="text-sm font-medium text-[#2F7FA3] uppercase tracking-wide mt-1">Students Certified</div>
          </FadeIn>
          <FadeIn delay={300} className="text-center">
            <div className="text-3xl font-bold text-[#FF8A5B]">
              <CountUp end={100} suffix="%" />
            </div>
            <div className="text-sm font-medium text-[#2F7FA3] uppercase tracking-wide mt-1">EMSA Compliant</div>
          </FadeIn>
          <FadeIn delay={400} className="text-center">
            <div className="text-3xl font-bold text-[#FF8A5B]">
              <CountUp end={50} suffix="+" />
            </div>
            <div className="text-sm font-medium text-[#2F7FA3] uppercase tracking-wide mt-1">Daycares Launched</div>
          </FadeIn>
          <FadeIn delay={500} className="text-center">
            <div className="text-3xl font-bold text-[#FF8A5B]">
              <CountUp end={2} />
            </div>
            <div className="text-sm font-medium text-[#2F7FA3] uppercase tracking-wide mt-1">Languages</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

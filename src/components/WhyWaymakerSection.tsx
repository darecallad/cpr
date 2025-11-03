"use client";

import Link from "next/link";
import { Compass, HelpingHand, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    eyebrow: "Why Waymaker",
    title: "Confidence for every classroom",
    description:
      "We guide childcare teams through CPR and first aid with calm, practical coaching so they can focus on caring for families.",
    highlights: [
      {
        title: "Certified guidance",
        description:
          "Accredited instructors translate state requirements into clear, memorable steps.",
        icon: Compass,
      },
      {
        title: "Built for childcare",
        description:
          "Hands-on practice centered on the realities of preschool and daycare environments.",
        icon: HelpingHand,
      },
      {
        title: "Support that lasts",
        description:
          "Action sheets and refreshers keep skills sharp long after class ends.",
        icon: ShieldPlus,
      },
    ],
    ctaLabel: "Schedule your training",
  },
  zh: {
    eyebrow: "Waymaker 優勢",
    title: "讓每一間教室都安心",
    description:
      "我們以沈著、實用的教學，陪伴托育團隊熟練 CPR 與急救流程，把心力留給孩子與家長。",
    highlights: [
      {
        title: "認證專業引導",
        description: "經驗豐富的講師將官方規範轉化成清楚好記的步驟。",
        icon: Compass,
      },
      {
        title: "幼教場域量身打造",
        description: "練習情境貼近幼兒園與托育中心的日常需求。",
        icon: HelpingHand,
      },
      {
        title: "課後持續支援",
        description: "提供操作重點與複習指引，課程結束後也能維持敏捷反應。",
        icon: ShieldPlus,
      },
    ],
    ctaLabel: "預約專屬課程",
  },
} as const;

export function WhyWaymakerSection() {
  const { locale } = useLanguage();
  const content = copy[locale];

  return (
    <section className="bg-[#F8FCFB] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl space-y-4">
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
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={highlight.title}
                className="border-none bg-white/80 backdrop-blur shadow-sm"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    heading: "Our Mission",
    tagline: "Guiding the way to safety, safeguarding every life.",
    intro:
      "Waymaker empowers childcare teams with calm, compassionate CPR and first aid training so every classroom has a confident guardian.",
    description:
      "We stand beside educators and caregivers as a trusted guide—turning complex emergency protocols into practical, memorable skills.",
    valuesHeading: "What Waymaker means",
    values: [
      {
        title: "Lead with expertise",
        description:
          "State-accredited instructors deliver evidence-based CPR and first aid practices tailored for childcare environments.",
        icon: ShieldCheck,
      },
      {
        title: "Care with empathy",
        description:
          "Our training culture stays warm and supportive so every participant feels safe to ask questions and practice hands-on skills.",
        icon: HeartHandshake,
      },
      {
        title: "Inspire confidence",
        description:
          "Interactive scenarios help staff respond decisively during the critical moments before emergency teams arrive.",
        icon: Sparkles,
      },
    ],
    ctaLabel: "Explore our courses",
    ctaHref: "/courses",
  },
  zh: {
    heading: "品牌使命",
    tagline: "引領安全之路，守護生命之旅。",
    intro:
      "Waymaker 陪伴幼教與托育團隊，以溫暖專業的 CPR 與急救訓練，讓教室裡的每一位老師都能安心守護孩子。",
    description:
      "我們作為值得信賴的引路人，把繁複的急救流程轉化成貼近日常、容易記住的實作技巧。",
    valuesHeading: "Waymaker 代表的價值",
    values: [
      {
        title: "專業領航",
        description:
          "具備官方認證的講師，以幼兒照護情境為核心，教授最新、最可靠的 CPR 與急救法。",
        icon: ShieldCheck,
      },
      {
        title: "同理陪伴",
        description:
          "課堂氛圍溫暖友善，鼓勵學員自在提問、親手演練，建立對急救的信心。",
        icon: HeartHandshake,
      },
      {
        title: "自信應變",
        description:
          "透過情境模擬練習，在救援人員抵達前，也能沉著做出正確判斷與行動。",
        icon: Sparkles,
      },
    ],
    ctaLabel: "了解課程內容",
    ctaHref: "/courses",
  },
} as const;

export function BrandMissionSection() {
  const { locale } = useLanguage();
  const content = copy[locale];

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
              {locale === "en"
                ? "Waymaker stands for compassionate guidance—helping every educator become a lifesaver."
                : "Waymaker 代表溫暖的引導與守護，讓每位教育者都能成為孩子的守護者。"}
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
            {content.values.map((value) => {
              const Icon = value.icon;
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

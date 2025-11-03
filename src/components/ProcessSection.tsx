"use client";

import { CheckCircle2, CalendarCheck2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    eyebrow: "How it works",
    title: "A guided path from booking to certification",
    steps: [
      {
        title: "Plan together",
        description:
          "Share your group size and schedule preferences—we tailor the agenda for your site.",
        icon: CalendarCheck2,
      },
      {
        title: "Train with confidence",
        description:
          "Interactive instruction blends demos, practice, and situational coaching for every participant.",
        icon: GraduationCap,
      },
      {
        title: "Leave certified",
        description:
          "Receive EMSA completion cards and compliance documentation right after class.",
        icon: CheckCircle2,
      },
    ],
  },
  zh: {
    eyebrow: "流程介紹",
    title: "從預約到取證的貼心指引",
    steps: [
      {
        title: "一起規劃",
        description:
          "告訴我們人數與時段需求，我們為場地量身安排課程節奏。",
        icon: CalendarCheck2,
      },
      {
        title: "安心實作",
        description:
          "示範、演練與情境討論並行，每位學員都能掌握關鍵技巧。",
        icon: GraduationCap,
      },
      {
        title: "立即取證",
        description:
          "課程結束立刻取得 EMSA 認證卡與合規文件，隨時備查。",
        icon: CheckCircle2,
      },
    ],
  },
} as const;

export function ProcessSection() {
  const { locale } = useLanguage();
  const content = copy[locale];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7FA3]">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl">
            {content.title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                className="border border-[#E0F0F5] bg-[#F8FCFB] shadow-sm"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F6C8C] text-lg font-semibold text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-8 w-8 text-[#2F7FA3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F3B4C]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#2F4858]">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

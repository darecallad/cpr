"use client";

import { CountUp } from "@/components/ui/count-up";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/LanguageContext";

export function StatsStrip() {
  const { locale } = useLanguage();

  const stats = [
    {
      value: 2000,
      suffix: "+",
      label: locale === "en" ? "Students Certified" : "學員順利考證",
    },
    {
      value: 50,
      suffix: "+",
      label: locale === "en" ? "Daycares Launched" : "協助園所開業",
    },
    {
      value: 100,
      suffix: "%",
      label: locale === "en" ? "Licensing Success" : "執照申請通過率",
    },
    {
      value: 5,
      suffix: "★",
      label: locale === "en" ? "Average Rating" : "學員五星好評",
    },
  ];

  return (
    <section className="bg-[#0F6C8C] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} className="text-center">
              <div className="text-4xl font-bold md:text-5xl mb-2">
                <CountUp end={stat.value} duration={2.5} />
                {stat.suffix}
              </div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wider">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

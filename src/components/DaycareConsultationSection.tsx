"use client";

import Link from "next/link";
import { Lightbulb, MessageCircleHeart, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/LanguageContext";
import { coursesCopy } from "@/data/courses";

const iconMap = {
  "1-on-1 Mentorship": MessageCircleHeart,
  "Educational Inspiration": Lightbulb,
  "Strategic Roadmap": Map,
  "1 對 1 深度交流": MessageCircleHeart,
  "教育理念啟發": Lightbulb,
  "實戰策略規劃": Map,
};

export function DaycareConsultationSection() {
  const { locale } = useLanguage();
  const content = coursesCopy[locale].daycareConsultation;

  return (
    <section className="bg-[#FFF8F6] py-20 border-t border-orange-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <FadeIn className="flex-1 space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF8A5B]">
              New Service
            </span>
            <h2 className="text-3xl font-bold text-[#0F3B4C] md:text-4xl">
              {content.title}
            </h2>
            <p className="text-lg text-[#2F4858] leading-relaxed">
              {content.description}
            </p>
            <Button
              size="lg"
              className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643]"
              asChild
            >
              <Link href="/contact">{content.cta}</Link>
            </Button>
          </FadeIn>
          
          <FadeIn delay={200} className="flex-1 relative">
             {/* Decorative Image Placeholder or Graphic */}
             <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#FF8A5B]/20 to-[#FF8A5B]/5 flex items-center justify-center border-2 border-dashed border-[#FF8A5B]/30">
                <div className="text-center p-8">
                    <MessageCircleHeart className="w-16 h-16 text-[#FF8A5B] mx-auto mb-4 opacity-80" />
                    <p className="text-[#0F3B4C] font-medium opacity-60">Personalized Guidance</p>
                </div>
             </div>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {content.features.map((feature, index) => {
            // Fallback icon logic if title doesn't match exactly (though it should)
            const Icon = iconMap[feature.title as keyof typeof iconMap] || MessageCircleHeart;
            
            return (
              <FadeIn key={index} delay={index * 100 + 300} className="h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100/50 h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#FFF0EB] rounded-xl flex items-center justify-center mb-6 text-[#FF8A5B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3B4C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#2F4858] leading-relaxed">
                    {feature.description}
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

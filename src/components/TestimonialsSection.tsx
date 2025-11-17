// src/components/TestimonialsSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export function TestimonialsSection() {
  const { locale } = useLanguage();

  const copy = {
    en: [
      {
        quote:
          "The course was very practical and informative. I feel much more confident in handling emergencies.",
        name: "Apple Tree Daycare Director",
      },
      {
        quote:
          "Great hands-on training! The instructor was knowledgeable and supportive throughout the day.",
        name: "Little Dreamer Daycare Director",
      },
      {
        quote:
          "The instructor was patient and engaging. Our staff left feeling empowered to respond to emergencies.",
        name: "Sweet Butterfly Daycare Director",
      },
    ],
    zh: [
      {
        quote:
          "課程內容非常實用，講師細心又有耐心。我現在處理幼兒突發狀況更有信心了！",
        name: "Apple Tree Daycare 負責人",
      },
      {
        quote:
          "生動有趣的教學讓我們在輕鬆氣氛中學到 CPR 和急救知識，非常值得！",
        name: "Little Dreamer Daycare 負責人",
      },
      {
        quote:
          "講師一步步帶著我們演練，我們的團隊現在更知道如何守護孩子安全。",
        name: "Sweet Butterfly Daycare 園長",
      },
    ],
  } as const;

  const testimonials = copy[locale];

  return (
    <section className="bg-[#F1FAF4] py-12 mt-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        {testimonials.map((item) => (
          <Card
            key={item.quote}
            className="bg-white/70 backdrop-blur-sm border-none shadow-sm h-full"
          >
            <CardContent className="flex h-full flex-col justify-between gap-6 p-6 text-center">
              <p className="text-base font-medium leading-relaxed text-[#2F4858] italic">
                “{item.quote}”
              </p>
              <p className="text-sm font-semibold text-[#0F6C8C]">
                {item.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

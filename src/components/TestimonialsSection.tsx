// src/components/TestimonialsSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn } from "@/components/ui/fade-in";
import { Quote } from "lucide-react";

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
    <section className="bg-[#F1FAF4] py-16 mt-0">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0F6C8C]">
            {locale === "en" ? "What Our Students Say" : "學員好評推薦"}
          </h2>
        </FadeIn>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <Card className="h-full border-none bg-white shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col justify-between p-8">
                  <div className="space-y-4">
                    <Quote className="h-8 w-8 text-[#FF8A5B] opacity-50" />
                    <p className="text-lg italic leading-relaxed text-[#2F4858]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <p className="font-semibold text-[#0F6C8C]">
                      {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

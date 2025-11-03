// src/components/OurCoursesSection.tsx
"use client";

import {
  BadgeCheck,
  Clock4,
  Baby,
  UsersRound,
} from "lucide-react"; // 這些是 SVG 圖示
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export function OurCoursesSection() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      title: "Our Courses",
      features: [
        {
          title: "EMSA Certification",
          description:
            "Our courses meet the standards of the California EMS Authority.",
        },
        {
          title: "8-Hour Comprehensive Training",
          description: "Complete CPR and first aid training in a single day.",
        },
        {
          title: "Designed for Childcare Providers",
          description: "Specialized instruction for daycare preschool staff.",
        },
        {
          title: "Hands-On Small Group Classes",
          description:
            "Interactive, practical training with personalized attention.",
        },
      ],
    },
    zh: {
      title: "課程特色",
      features: [
        {
          title: "EMSA 官方認證",
          description: "課程符合加州緊急醫療服務局 (EMSA) 標準，可取得認證。",
        },
        {
          title: "8 小時完整訓練",
          description: "一天完成 CPR 與急救技能，內容扎實完整。",
        },
        {
          title: "幼兒照護量身打造",
          description: "專為托育與幼教人員設計，解決實務情境需求。",
        },
        {
          title: "小班實作互動",
          description: "透過情境練習與講師指導，強化實際操作能力。",
        },
      ],
    },
  } as const;

  const content = copy[locale];
  const icons = [BadgeCheck, Clock4, Baby, UsersRound] as const;

  return (
    <section className="bg-[#E6F3F9] py-16 mb-0">
      <div className="max-w-6xl mx-auto px-6">
        {/* 標題 */}
        <h2 className="text-3xl font-bold mb-12 text-[#0F6C8C] text-center md:text-left">
          {content.title}
        </h2>

        {/* 四個卡片 */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {content.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={feature.title}
                className="bg-white/60 backdrop-blur shadow-sm border-none text-left h-full"
              >
                <CardHeader className="pb-0 text-left">
                  <div className="flex min-h-[176px] flex-col items-start gap-6">
                    <Icon className="h-12 w-12 text-[#2F7FA3]" />
                    <CardTitle className="text-lg font-semibold leading-snug text-[#1D3D4F] min-h-[60px]">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-4 text-left text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

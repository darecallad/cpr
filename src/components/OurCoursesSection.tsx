// src/components/OurCoursesSection.tsx
"use client";

import { GraduationCap, Clock, Baby, Users } from "lucide-react"; // 這些是 SVG 圖示
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
  const icons = [GraduationCap, Clock, Baby, Users] as const;

  return (
    <section className="bg-[#E6F3F9] py-16 mb-0">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 標題 */}
        <h2 className="text-3xl font-bold mb-12 text-[#0F6C8C]">{content.title}</h2>

        {/* 四個卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {content.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={feature.title}
                className="bg-white/60 backdrop-blur text-center shadow-sm border-none"
              >
                <CardHeader className="items-center pb-0">
                  <Icon className="w-12 h-12 text-[#2F7FA3]" />
                  <CardTitle className="text-lg font-semibold text-[#1D3D4F]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-gray-600 text-sm">
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

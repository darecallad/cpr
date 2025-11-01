"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CoursesPage() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      title: "Our Courses",
      intro:
        "We provide professional CPR and first aid training designed for daycare and childcare providers. All courses meet California EMS Authority standards and deliver engaging, small-group learning.",
      bullets: [
        "EMSA Certification",
        "8-Hour Comprehensive Training",
        "Specialized Training for Childcare Providers",
        "Small Group Hands-On Classes",
      ],
    },
    zh: {
      title: "課程介紹",
      intro:
        "Waymaker 提供專為幼兒園與托育人員設計的 CPR 與急救培訓。課程符合加州 EMSA 標準，透過小班互動方式帶來紮實又親切的學習體驗。",
      bullets: [
        "EMSA 官方認證",
        "8 小時完整訓練",
        "幼兒照護專屬課程",
        "小班制實作教學",
      ],
    },
  } as const;

  const content = copy[locale];

  return (
    <section className="px-8 py-16 max-w-5xl mx-auto">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-10">
        <h1 className="text-4xl font-bold mb-6 text-[#0F6C8C]">{content.title}</h1>
        <p className="text-lg leading-relaxed mb-8 text-[#2F4858]">{content.intro}</p>

        <ul className="space-y-2 text-[#2F4858]">
          {content.bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#73BBD1]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

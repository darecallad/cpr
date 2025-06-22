// app/page.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CourseSection } from "@/components/CourseSection";
import { courses } from "@/data/courses";

export default function Page() {
  const  {locale}  = useLanguage();

  return (
    <main className="px-8 py-12 space-y-16">
      {courses[locale].map((sec, idx) => {
      // 白色 : 米色
        const bgClass = idx % 2 === 0 ? "bg-yellow-50" : "bg-white";
        return (
          <CourseSection
            key={idx}
            {...sec}
            reverse={idx % 2 === 1}
            className={bgClass + " rounded-lg px-6 py-8"}
          />
        );
      })}
    </main>
  );
}

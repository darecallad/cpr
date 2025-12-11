"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export function DaycareHeader() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      back: "Back to Waymaker Home",
      title: "Partner Daycares",
    },
    zh: {
      back: "返回 Waymaker 首頁",
      title: "合作幼兒園",
    },
  };

  const t = copy[locale] ?? copy.en;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-gradient-to-r from-[#FFF8F0] via-[#FFF5E6] to-[#FFF0F5] h-[80px] md:h-[100px] shadow-sm">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-orange-800 hover:text-orange-600 transition-colors font-medium text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t.back}</span>
          </Link>
          
          <div className="h-8 w-[1px] bg-orange-200 hidden md:block"></div>

          <Link href="/daycare" className="flex items-center">
             <h1 className="text-xl md:text-2xl font-bold text-orange-900 tracking-tight">
                {t.title}
             </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
            <Link 
              href="/daycare/booking"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Book a Tour
            </Link>
            <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

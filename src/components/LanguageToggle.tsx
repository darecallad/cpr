"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative inline-flex h-10 items-center rounded-full bg-gray-100/50 p-1 backdrop-blur-sm border border-gray-200/50 shadow-inner">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out min-w-[60px]",
          locale === "en" 
            ? "text-white bg-[#0F6C8C] shadow-md transform scale-105" 
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out min-w-[60px]",
          locale === "zh" 
            ? "text-white bg-[#0F6C8C] shadow-md transform scale-105" 
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
        )}
      >
        中文
      </button>
    </div>
  );
}
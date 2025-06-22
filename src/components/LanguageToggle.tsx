"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <ToggleGroup
      type="single"
      value={locale}
      onValueChange={(val) => setLocale(val as "en" | "zh")}
      className="bg-gray-100 p-1 rounded"
    >
      <ToggleGroupItem
        value="en"
        className="px-3 py-1 rounded data-[state=on]:bg-blue-600 data-[state=on]:text-white"
      >
        EN
      </ToggleGroupItem>
      <ToggleGroupItem
        value="zh"
        className="px-3 py-1 rounded data-[state=on]:bg-blue-600 data-[state=on]:text-white"
      >
        中文
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
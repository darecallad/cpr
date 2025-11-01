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
      onValueChange={(val) => {
        if (val === "en" || val === "zh") {
          setLocale(val);
        }
      }}
      className="bg-white/70 backdrop-blur p-1 rounded border border-white/60"
    >
      <ToggleGroupItem
        value="en"
        className="px-3 py-1 rounded text-[#2F4858] data-[state=on]:bg-[#0F6C8C] data-[state=on]:text-white"
      >
        EN
      </ToggleGroupItem>
      <ToggleGroupItem
        value="zh"
        className="px-3 py-1 rounded text-[#2F4858] data-[state=on]:bg-[#0F6C8C] data-[state=on]:text-white"
      >
        中文
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
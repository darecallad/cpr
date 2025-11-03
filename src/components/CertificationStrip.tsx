"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    label: "Recognized credentials",
    description:
      "Our EMSA-approved pediatric first aid and CPR courses satisfy California Community Care Licensing and CDSS requirements.",
  },
  zh: {
    label: "權威認證保障",
    description:
      "Waymaker 的 EMSA 認證兒童急救與 CPR 課程，符合加州社福局與托育執照規範。",
  },
} as const;

export function CertificationStrip() {
  const { locale } = useLanguage();
  const content = copy[locale];

  return (
    <section className="bg-[#0F6C8C] py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-white md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9BD2E3]">
            {content.label}
          </p>
          <p className="text-base md:text-lg font-medium text-white/90">
            {content.description}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Image
            src="/partners/emsa.png"
            alt="EMSA logo"
            width={100}
            height={34}
            className="h-10 w-auto"
          />
          <Image
            src="/partners/cdss.png"
            alt="CDSS logo"
            width={110}
            height={34}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
}

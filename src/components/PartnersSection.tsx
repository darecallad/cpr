// components/PartnersSection.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function PartnersSection() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      title: "Trusted by childcare partners across California",
      description:
        "Many leading daycare centers choose Waymaker to safeguard their communities.",
    },
    zh: {
      title: "合作園所共同信賴",
      description: "眾多幼兒園與托育機構選擇 Waymaker，一起守護孩子安全。",
    },
  } as const;

  const content = copy[locale];

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">{content.title}</h2>
        <p className="text-gray-700 text-lg mb-8">{content.description}</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <Image src="/partners/kidspace.png" alt="Kidspace" width={120} height={40} />
          <Image src="/partners/sunnydaycare.png" alt="Sunny Day Care" width={140} height={40} />
          <Image src="/partners/littlesprouts.png" alt="Little Sprouts" width={140} height={40} />
          <Image src="/partners/abcchildcare.png" alt="ABC Childcare" width={140} height={40} />
          <Image src="/partners/emsa.png" alt="EMSA" width={120} height={40} />
          <Image src="/partners/cdss.png" alt="CDSS" width={120} height={40} />
        </div>
      </div>
    </section>
  );
}

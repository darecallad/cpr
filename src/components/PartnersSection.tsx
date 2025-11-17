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
  <h2 className="text-2xl font-semibold text-[#0F6C8C] mb-3">{content.title}</h2>
  <p className="text-[#2F4858] text-lg mb-8">{content.description}</p>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 items-center justify-items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { src: "/partners/sunnygarden.svg", alt: "Sunny Garden Daycare", width: 260, height: 84 },
            {
              src: "/partners/sunnychildcare-new.svg",
              alt: "Sunny Child Care",
              width: 260,
              height: 84,
            },
            {
              src: "/partners/sweetbutterfly.svg",
              alt: "Sweet Butterfly Daycare",
              width: 260,
              height: 84,
            },
            {
              src: "/partners/appletree.svg",
              alt: "Apple Tree Daycare",
              width: 260,
              height: 84,
            },
            { src: "/partners/emsa.png", alt: "EMSA", width: 240, height: 80 },
            { src: "/partners/cdss.png", alt: "CDSS", width: 240, height: 80 },
          ].map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-14 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              style={{ width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

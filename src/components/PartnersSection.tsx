// components/PartnersSection.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn } from "@/components/ui/fade-in";

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

  const partners = [
    { src: "/partners/sunnygarden.svg", alt: "Sunny Garden Daycare", width: 260, height: 84 },
    { src: "/partners/sunnychildcare-new.svg", alt: "Sunny Child Care", width: 260, height: 84 },
    { src: "/partners/sweetbutterfly.svg", alt: "Sweet Butterfly Daycare", width: 260, height: 84 },
    { src: "/partners/appletree.svg", alt: "Apple Tree Daycare", width: 260, height: 84 },
    { src: "/partners/emsa.png", alt: "EMSA", width: 240, height: 80 },
    { src: "/partners/cdss.png", alt: "CDSS", width: 240, height: 80 },
  ];

  // Duplicate partners for infinite scroll effect
  const allPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-[#0F6C8C] mb-3">{content.title}</h2>
          <p className="text-[#2F4858] text-lg">{content.description}</p>
        </FadeIn>
      </div>
      
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex w-max animate-scroll gap-16 items-center">
          {allPartners.map((partner, index) => (
            <div key={`${partner.alt}-${index}`} className="relative h-20 w-48 shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

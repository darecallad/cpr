"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      title: "Professional Training\nCaring Support",
      description:
        "Waymaker provides professional and compassionate CPR and first aid training for daycare and childcare facilities. Our engaging courses equip educators.",
      cta: "BOOK NOW",
    },
    zh: {
      title: "專業守護\n安心相伴",
      description:
        "Waymaker 致力於為幼兒園與托育機構提供專業且貼心的 CPR 與急救培訓，幫助每位教育者成為孩子的生命守護者。",
      cta: "立即預約",
    },
  } as const;

  const content = copy[locale];

  return (
    <section className="relative w-full h-[60vh] flex items-center m-0 p-0">
      {/* 背景圖 */}
      <Image
        src="/hero.png"
        alt="CPR Training Class"
        fill
        priority
        className="object-cover object-center"
      />

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 文字內容 */}
      <div className="relative z-10 flex justify-start w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-lg space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-normal tracking-tight whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-white leading-relaxed">
            {content.description}
          </p>
          <Link href="/booking">
            <Button
              size="hero"
              className="mt-6 bg-[#FF8A5B] hover:bg-[#F57643] text-white font-semibold text-base shadow-md"
            >
              {content.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

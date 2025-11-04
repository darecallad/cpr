"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroData from "@/data/home/hero.json";
import { useLanguage } from "@/context/LanguageContext";

type Locale = "en" | "zh";

interface HeroCopy {
  title: string;
  description: string;
  cta: string;
}

interface HeroData {
  copy: Record<Locale, HeroCopy>;
}

const heroCopy: HeroData = heroData;

export function HeroSection() {
  const { locale } = useLanguage();

  const content = heroCopy.copy[locale];

  return (
    <section className="relative m-0 flex h-[60vh] w-full items-center p-0">
      {/* 背景圖 */}
      <picture className="absolute inset-0">
        <source srcSet="/hero.webp" type="image/webp" />
        <img
          src="/hero.png"
          alt="CPR Training Class"
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 文字內容 */}
      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full max-w-6xl justify-start px-6">
          <div className="max-w-xl space-y-5">
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
      </div>
    </section>
  );
}

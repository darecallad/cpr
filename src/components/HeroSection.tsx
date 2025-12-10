"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroCopy } from "@/data/home/hero";
import { useLanguage } from "@/context/LanguageContext";

import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
  const { locale } = useLanguage();

  const content = heroCopy[locale];

  return (
    <section className="relative m-0 flex h-[60vh] w-full items-center p-0 overflow-hidden">
      {/* 背景圖 */}
      <picture className="absolute inset-0 animate-scale-slow">
        <source srcSet="/hero.webp" type="image/webp" />
        <img
          src="/hero.png"
          alt="CPR Training Class"
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      {/* 文字內容 */}
      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full max-w-6xl justify-start px-6">
          <FadeIn delay={200} className="max-w-xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-normal tracking-tight whitespace-pre-line drop-shadow-lg">
              {content.title}
            </h1>
            <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-md">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/booking">
                <Button
                  size="hero"
                  className="bg-[#FF8A5B] hover:bg-[#F57643] text-white font-semibold text-base shadow-md w-full sm:w-auto transition-transform hover:scale-105"
                >
                  {content.ctaCpr}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="hero"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white font-semibold text-base shadow-md w-full sm:w-auto backdrop-blur-sm transition-transform hover:scale-105"
                >
                  {content.ctaDaycare}
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

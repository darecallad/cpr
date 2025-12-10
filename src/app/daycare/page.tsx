"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, LayoutDashboard, Users, ExternalLink, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/LanguageContext";
import { daycarePageCopy } from "@/data/daycare";
import { SEOHead } from "@/components/SEOHead";

const iconMap = {
  Book: BookOpen,
  Layout: LayoutDashboard,
  Users: Users,
};

export default function DaycarePage() {
  const { locale } = useLanguage();
  const content = daycarePageCopy[locale];
  
  // Duplicate for infinite scroll
  const allStories = [...content.successStories.stories, ...content.successStories.stories];

  return (
    <>
      <SEOHead page="daycare" />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-[#FFF8F6] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="max-w-3xl space-y-6">
              <FadeIn>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF8A5B]">
                  {content.hero.eyebrow}
                </span>
                <h1 className="text-4xl font-bold text-[#0F3B4C] md:text-5xl mt-4 leading-tight">
                  {content.hero.title}
                </h1>
                <p className="text-xl font-medium text-[#2F7FA3] mt-4">
                  {content.hero.tagline}
                </p>
                <p className="text-lg text-[#2F4858] leading-relaxed mt-4 max-w-2xl">
                  {content.hero.description}
                </p>
                <div className="pt-8">
                  <Button
                    size="lg"
                    className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643] shadow-lg shadow-orange-200"
                    asChild
                  >
                    <Link href="/contact">{content.hero.primaryCta}</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#FFE4D6] rounded-full opacity-50 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[#E0F2F1] rounded-full opacity-50 blur-3xl -z-10" />
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-[#0F6C8C] mb-4">{content.features.title}</h2>
                <p className="text-lg text-[#2F4858]">{content.features.description}</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.features.items.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <FadeIn key={index} delay={index * 100} className="h-full">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full group">
                      <div className="w-14 h-14 bg-[#F0F9FF] rounded-xl flex items-center justify-center mb-6 text-[#0F6C8C] group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F3B4C] mb-3">{item.title}</h3>
                      <p className="text-[#2F4858] leading-relaxed">{item.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-[#F8FCFB]">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn className="mb-16">
              <h2 className="text-3xl font-bold text-[#0F6C8C]">{content.process.title}</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.process.steps.map((step, index) => (
                <FadeIn key={index} delay={index * 100} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-sm h-full border-t-4 border-[#FF8A5B]">
                    <span className="text-4xl font-bold text-[#E0E0E0] mb-4 block">{step.number}</span>
                    <h3 className="text-lg font-bold text-[#0F3B4C] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#2F4858] leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 mb-12">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0F6C8C] mb-4">{content.successStories.title}</h2>
              <p className="text-lg text-[#2F4858]">{content.successStories.description}</p>
            </FadeIn>
          </div>

          <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex w-max animate-scroll gap-8 items-stretch py-4">
              {allStories.map((story, index) => (
                <div 
                  key={index} 
                  className="w-[280px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
                >
                  <div className="relative w-full h-24 mb-4 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                    {story.image ? (
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-[#0F6C8C]/40 group-hover:text-[#0F6C8C] transition-colors">
                        <Store className="w-10 h-10 mb-1" />
                        <span className="text-xs font-medium uppercase tracking-wider">Partner</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3B4C] mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                    {story.name}
                  </h3>
                  {story.url ? (
                    <a 
                      href={story.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A5B] hover:text-[#F57643] transition-colors"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="mt-auto text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Waymaker Partner
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0F6C8C] text-white text-center">
          <div className="mx-auto max-w-4xl px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.cta.title}</h2>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                {content.cta.description}
              </p>
              <Button
                size="lg"
                className="bg-white text-[#0F6C8C] hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-xl"
                asChild
              >
                <Link href="/contact">{content.cta.button}</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}

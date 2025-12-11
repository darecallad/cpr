"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { consultingCopy } from "@/data/consulting";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

export default function ConsultingPage() {
  const { locale } = useLanguage();

  const content = consultingCopy[locale];

  return (
    <>
      <SEOHead page="consulting" />
      <main className="bg-[#F4FAF8]">
        {/* Hero Section */}
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
          <div className="relative overflow-hidden rounded-3xl bg-white/90 p-10 shadow-lg">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex-1 space-y-6 lg:space-y-8">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7FA3]">
                  {content.hero.eyebrow}
                </span>
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold text-[#0F6C8C] md:text-5xl">
                    {content.hero.title}
                  </h1>
                  <p className="text-xl font-semibold text-[#13495F]">
                    {content.hero.tagline}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-[#2F4858] md:text-lg">
                  {content.hero.description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643]"
                    asChild
                  >
                    <Link href="/booking">{content.hero.primaryCta}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#0F3B4C] px-8 font-semibold text-[#0F3B4C] hover:bg-[#0F3B4C]/10"
                    asChild
                  >
                    <Link href="#services">{content.hero.secondaryCta}</Link>
                  </Button>
                </div>
              </div>
              {/* Placeholder image - replace with actual consulting image later */}
              <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#E6F3F9] sm:h-[280px] lg:h-[320px] lg:w-[420px] lg:flex-none lg:mt-7">
                 <div className="absolute inset-0 flex items-center justify-center text-[#2F7FA3]/30">
                    <span className="text-6xl font-bold">?</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid gap-6 md:grid-cols-3">
            {content.summary.map((item) => (
              <Card key={item.label} className="border-none bg-white/85 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F7FA3]">
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#0F3B4C]">
                  <p className="text-2xl font-bold">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16" id="services">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#0F6C8C] leading-tight">
                {content.services.title}
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {content.services.items.map((service, index) => (
                <Card key={index} className="border border-[#CDE6E0] bg-[#F4FAF8] shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#0F6C8C]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[#2F4858]">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#2F4858]">
                          <Check className="h-4 w-4 text-[#FF8A5B] mt-1 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#F4FAF8] py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <h2 className="text-3xl font-bold text-[#0F6C8C] leading-tight text-center">
              {content.process.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.process.steps.map((step, index) => (
                <div key={index} className="relative flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F3F9] text-[#0F6C8C] font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F6C8C]">{step.title}</h3>
                  <p className="text-[#2F4858] text-sm leading-relaxed">{step.description}</p>
                  {index < content.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-11 -right-3 text-[#CDE6E0]">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
            <h2 className="text-3xl font-bold text-[#0F6C8C]">
              {locale === 'en' ? "Ready to Start Your Daycare?" : "準備好開始您的托育事業了嗎？"}
            </h2>
            <Button
              size="lg"
              className="bg-[#FF8A5B] px-12 py-6 text-lg font-semibold text-white hover:bg-[#F57643]"
              asChild
            >
              <Link href="/booking">{content.hero.primaryCta}</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import coursesData from "@/data/courses.json";
import { useLanguage } from "@/context/LanguageContext";

type Locale = "en" | "zh";

interface HeroCopy {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

interface SummaryItem {
  label: string;
  value: string;
}

interface ScheduleBlock {
  time: string;
  topic: string;
}

interface ScheduleCopy {
  title: string;
  blocks: ScheduleBlock[];
  note: string;
}

interface CurriculumCategory {
  name: string;
  bullets: string[];
}

interface CurriculumCopy {
  title: string;
  categories: CurriculumCategory[];
}

interface DeliveryOption {
  title: string;
  description: string;
  detail: string;
}

interface DeliveryCopy {
  title: string;
  options: DeliveryOption[];
}

interface PricingCopy {
  title: string;
  body: string;
  bullets: string[];
}

interface CertificationCopy {
  title: string;
  body: string;
}

interface MediaCopy {
  caption: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCopy {
  title: string;
  items: FAQItem[];
}

interface CTACopy {
  title: string;
  description: string;
  button: string;
}

interface CoursesLocaleCopy {
  hero: HeroCopy;
  summary: SummaryItem[];
  schedule: ScheduleCopy;
  curriculum: CurriculumCopy;
  delivery: DeliveryCopy;
  pricing: PricingCopy;
  certification: CertificationCopy;
  media: MediaCopy;
  faq: FAQCopy;
  cta: CTACopy;
}

interface CoursesCopy {
  copy: Record<Locale, CoursesLocaleCopy>;
}

const coursesCopy: CoursesCopy = coursesData;

export default function CoursesPage() {
  const { locale } = useLanguage();

  const content = coursesCopy.copy[locale];

  return (
    <main className="bg-[#F4FAF8]">
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
                  <Link href="#curriculum">{content.hero.secondaryCta}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#E6F3F9] sm:h-[280px] lg:h-[320px] lg:w-[420px] lg:flex-none lg:mt-7">
              <picture className="absolute inset-0 block h-full w-full">
                <source srcSet="/cpr2.webp" type="image/webp" />
                <img
                  src="/cpr2.png"
                  alt="Childcare educators working through hands-on pediatric CPR drills"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.summary.map((item) => (
            <Card key={item.label} className="border-none bg-white/85 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F7FA3]">
                  {item.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#0F3B4C]">
                <p className="text-base leading-relaxed">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="grid gap-8 lg:grid-cols-[repeat(2,minmax(0,1fr))] lg:items-start">
            <div className="space-y-6 lg:space-y-8" id="schedule">
              <div className="lg:flex lg:h-[7.5rem] lg:items-start">
                <h2 className="text-3xl font-bold text-[#0F6C8C] leading-tight">
                  {content.schedule.title}
                </h2>
              </div>
              <Card className="border border-[#CDE6E0] bg-[#F4FAF8] shadow-sm">
                <CardContent className="space-y-4 px-6 py-0">
                  {content.schedule.blocks.map((block) => (
                    <div key={block.time} className="grid gap-2 md:grid-cols-[140px_minmax(0,1fr)]">
                      <p className="font-semibold text-[#2F7FA3]">{block.time}</p>
                      <p className="text-[#2F4858]">{block.topic}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <p className="text-sm text-[#2F4858]/80">{content.schedule.note}</p>
            </div>
            <div className="space-y-6 lg:space-y-8" id="curriculum">
              <div className="lg:flex lg:h-[7.5rem] lg:items-start">
                <h2 className="text-3xl font-bold text-[#0F6C8C] leading-tight">
                  {content.curriculum.title}
                </h2>
              </div>
              <div className="space-y-6">
                {content.curriculum.categories.map((category) => (
                  <Card key={category.name} className="border-none bg-[#F8FCFB] shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-[#0F3B4C]">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm leading-relaxed text-[#2F4858]">
                        {category.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#73BBD1]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.delivery.options.map((option) => (
              <Card key={option.title} className="border border-[#CDE6E0]/70 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-[#0F3B4C]">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-[#2F4858]">
                  <p>{option.description}</p>
                  <p className="text-[#0F6C8C]">{option.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="book">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0F6C8C]">
                {content.pricing.title}
              </h2>
              <p className="text-base leading-relaxed text-[#2F4858]">
                {content.pricing.body}
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-[#2F4858]">
                {content.pricing.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#73BBD1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#CDE6E0] bg-white/80 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0F3B4C]">
                {content.certification.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2F4858]">
                {content.certification.body}
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="relative hidden h-[320px] w-full overflow-hidden rounded-3xl bg-[#DDEFF5] lg:block">
              <picture className="absolute inset-0 block h-full w-full">
                <source srcSet="/cpr1.webp" type="image/webp" />
                <img
                  src="/cpr1.png"
                  alt="Instructor coaching childcare staff during CPR training"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/85 p-8 shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#2F7FA3]">
                {locale === "en" ? "Hands-on practice" : "實作演練"}
              </h3>
              <p className="text-base leading-relaxed text-[#2F4858]">
                {content.media.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1FAF4] py-16" id="faq">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <h2 className="text-3xl font-bold text-[#0F6C8C] text-center">
            {content.faq.title}
          </h2>
          <div className="space-y-4">
            {content.faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[#CDE6E0] bg-white/80 p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-[#0F3B4C]">
                  <span>{item.question}</span>
                  <span className="text-[#2F7FA3] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#2F4858]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 rounded-3xl bg-[#0F3B4C] px-10 py-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold md:text-4xl">{content.cta.title}</h2>
          <p className="text-base leading-relaxed text-white/80 md:max-w-2xl">
            {content.cta.description}
          </p>
          <Button
            size="lg"
            className="bg-[#FF8A5B] px-10 font-semibold text-white hover:bg-[#F57643]"
            asChild
          >
            <Link href="/booking">{content.cta.button}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

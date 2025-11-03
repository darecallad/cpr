"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    brandHeading: "Waymaker CPR & First Aid",
    brandBody:
      "Guiding childcare teams with calm, credentialed CPR and first aid instruction tailored for California sites.",
    primaryCta: "Plan a training",
    sections: {
      contact: {
        title: "Contact",
        phoneLabel: "Phone",
        phoneValue: "+1 (424) 555-0198",
        emailLabel: "Email",
        emailValue: "hello@waymakercpr.com",
        serviceLabel: "Service area",
        serviceValue: "Greater Los Angeles & Orange County",
      },
      links: {
        title: "Quick links",
        items: [
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Booking", href: "/booking" },
          { label: "Contact", href: "/contact" },
        ],
      },
      compliance: null,
    },
    legal: "All rights reserved.",
  },
  zh: {
    brandHeading: "Waymaker CPR 急救培訓",
    brandBody:
      "以沈著專業的 CPR 與急救教學，為加州托育團隊量身打造守護安全的能力。",
    primaryCta: "安排課程",
    sections: {
      contact: {
        title: "聯絡方式",
        phoneLabel: "電話",
        phoneValue: "+1 (424) 555-0198",
        emailLabel: "電子郵件",
        emailValue: "hello@waymakercpr.com",
        serviceLabel: "服務範圍",
        serviceValue: "大洛杉磯與橙縣地區",
      },
      links: {
        title: "快速連結",
        items: [
          { label: "首頁", href: "/" },
          { label: "課程介紹", href: "/courses" },
          { label: "預約報名", href: "/booking" },
          { label: "聯絡我們", href: "/contact" },
        ],
      },
      compliance: null,
    },
    legal: "保留所有權利。",
  },
} as const;

export function Footer() {
  const { locale } = useLanguage();
  const content = copy[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F3B4C] text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,138,91,0.45), transparent 60%), radial-gradient(circle at bottom left, rgba(47,127,163,0.45), transparent 55%)",
          opacity: 0.2,
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9BD2E3]">
              {content.brandHeading}
            </p>
            <p className="max-w-lg text-base text-white/85">{content.brandBody}</p>
            <Button
              size="lg"
              className="bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643]"
              asChild
            >
              <Link href="/booking">{content.primaryCta}</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9BD2E3]">
              {content.sections.contact.title}
            </h3>
            <dl className="space-y-2 text-sm text-white/85">
              <div>
                <dt className="text-white/60">{content.sections.contact.phoneLabel}</dt>
                <dd>
                  <a href="tel:+14245550198" className="hover:text-white">
                    {content.sections.contact.phoneValue}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">{content.sections.contact.emailLabel}</dt>
                <dd>
                  <a href="mailto:hello@waymakercpr.com" className="hover:text-white">
                    {content.sections.contact.emailValue}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">{content.sections.contact.serviceLabel}</dt>
                <dd>{content.sections.contact.serviceValue}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9BD2E3]">
              {content.sections.links.title}
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              {content.sections.links.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/60 md:flex md:items-center md:justify-between">
          <p>
            © {year} Waymaker CPR. {content.legal}
          </p>
          <p className="mt-2 md:mt-0">
            EIN 12-3456789 · Privacy Policy available upon request
          </p>
        </div>
      </div>
    </footer>
  );
}

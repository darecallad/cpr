// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const pathname = usePathname(); 
  const { locale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const copy = {
    en: {
      home: "Home",
      services: "Services",
      cpr: "CPR Training",
      daycare: "Daycare Consulting",
      booking: "Booking",
      partners: "Partner Daycare",
      contact: "Contact",
    },
    zh: {
      home: "首頁",
      services: "服務項目",
      cpr: "CPR 課程",
      daycare: "托育創業諮詢",
      booking: "預約報名",
      partners: "合作幼兒園",
      contact: "聯絡我們",
    },
  } as const;


  const labels = copy[locale] ?? copy.en;

  const isActive = (path: string) =>
    pathname === path ? "text-[#0F6C8C] font-bold" : "text-[#2F4858]";

  const navItems = [
    { path: "/", label: labels.home },
    { 
      label: labels.services,
      children: [
        { path: "/courses", label: labels.cpr },
        { path: "/daycare", label: labels.daycare },
      ]
    },
    { path: "/booking", label: labels.booking },
    { path: "/daycare", label: labels.partners },
    { path: "/contact", label: labels.contact },
  ];

  return (
  <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-32 py-2 border-b border-[#CDE6E0] bg-gradient-to-r from-[#A8D5BA] via-[#D2EFE5] to-[#73BBD1] h-[80px] md:h-[100px]">
     
      <Link href="/" className="flex items-center z-50">
        <div className="relative h-[56px] w-[180px] md:h-[72px] md:w-[240px]">
          <Image
            src="/logo.svg"
            alt="Waymaker CPR"
            fill
            sizes="(max-width: 768px) 180px, 240px"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => {
          if (item.children) {
            return (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-[#2F4858] hover:text-[#0F6C8C] transition-colors text-sm lg:text-base font-medium">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 ${isActive(child.path)}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <Link
              key={item.path}
              href={item.path!}
              className={`${isActive(item.path!)} hover:text-[#0F6C8C] transition-colors text-sm lg:text-base`}
            >
              {item.label}
            </Link>
          );
        })}
        <LanguageToggle />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 p-2 rounded-lg hover:bg-white/20 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6 text-[#0F3B4C]" />
        ) : (
          <Menu className="h-6 w-6 text-[#0F3B4C]" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-white/95 backdrop-blur-sm z-40 overflow-y-auto">
          <nav className="flex flex-col items-center justify-start pt-12 pb-24 space-y-6 px-6">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="flex flex-col items-center w-full space-y-4">
                    <button 
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center gap-2 text-[#2F4858] text-2xl font-medium"
                    >
                      {item.label}
                      <ChevronDown className={`w-6 h-6 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="flex flex-col items-center space-y-4 bg-gray-50 w-full py-4 rounded-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`${isActive(child.path)} hover:text-[#0F6C8C] transition-colors text-xl`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  href={item.path!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${isActive(item.path!)} hover:text-[#0F6C8C] transition-colors text-2xl`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

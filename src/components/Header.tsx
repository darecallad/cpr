// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const pathname = usePathname(); 
  const { locale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copy = {
    en: {
      home: "Home",
      courses: "Courses",
      booking: "Booking",
      contact: "Contact",
    },
    zh: {
      home: "首頁",
      courses: "課程介紹",
      booking: "預約報名",
      contact: "聯絡我們",
    },
  } as const;


  const labels = copy[locale] ?? copy.en;

  const isActive = (path: string) =>
    pathname === path ? "text-[#0F6C8C] font-bold" : "text-[#2F4858]";

  const navItems = [
    { path: "/", label: labels.home },
    { path: "/courses", label: labels.courses },
    { path: "/booking", label: labels.booking },
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
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`${isActive(item.path)} hover:text-[#0F6C8C] transition-colors text-sm lg:text-base`}
          >
            {item.label}
          </Link>
        ))}
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
        <div className="md:hidden fixed inset-0 top-[80px] bg-white/95 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${isActive(item.path)} hover:text-[#0F6C8C] transition-colors text-2xl`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

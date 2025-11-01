// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const pathname = usePathname(); 
  const { locale } = useLanguage();

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


  const isActive = (path: string) =>
    pathname === path ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <header className="flex items-center justify-between px-8 md:px-16 lg:px-32 py-2 border-b bg-[#F0F9F7] h-[100px]">
     
      <Link href="/" className="flex items-center">
        <div className="relative h-[80px] w-auto">
          <Image
            src="/logo.png"
            alt="Waymaker Logo"
            width={300}
            height={80}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </Link>

      <nav className="flex items-center space-x-8">
        <Link href="/" className={`${isActive("/")} hover:text-blue-600 transition-colors`}>
          {copy[locale].home}
        </Link>
        <Link href="/courses" className={`${isActive("/courses")} hover:text-blue-600 transition-colors`}>
          {copy[locale].courses}
        </Link>
        <Link href="/booking" className={`${isActive("/booking")} hover:text-blue-600 transition-colors`}>
          {copy[locale].booking}
        </Link>
        <Link href="/contact" className={`${isActive("/contact")} hover:text-blue-600 transition-colors`}>
          {copy[locale].contact}
        </Link>

        <LanguageToggle />
      </nav>
    </header>
  );
}

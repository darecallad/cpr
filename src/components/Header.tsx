// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header() {
  const pathname = usePathname(); 


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
          Home
        </Link>
        <Link href="/courses" className={`${isActive("/courses")} hover:text-blue-600 transition-colors`}>
          Courses
        </Link>
        <Link href="/booking" className={`${isActive("/booking")} hover:text-blue-600 transition-colors`}>
          Booking
        </Link>
        <Link href="/contact" className={`${isActive("/contact")} hover:text-blue-600 transition-colors`}>
          Contact
        </Link>

        <LanguageToggle />
      </nav>
    </header>
  );
}

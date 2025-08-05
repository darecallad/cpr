// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-2 border-b bg-[#E4F4EC] h-[100px]">
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
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 transition-colors font-semibold"
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="text-gray-700 hover:text-blue-600 transition-colors font-semibold"
        >
          Courses
        </Link>
        <Link
          href="/booking"
          className="text-gray-700 hover:text-blue-600 transition-colors font-semibold"
        >
          Booking
        </Link>
        <Link
          href="/contact"
          className="text-gray-700 hover:text-blue-600 transition-colors font-semibold"
        >
          Contact
        </Link>

       
        <LanguageToggle />
      </nav>
    </header>
  );
}

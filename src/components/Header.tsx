// components/Header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b">
      <Link href="/" className="text-xl font-semibold">CPR 教練</Link>
      <nav className="flex items-center space-x-6">
        {/* ...其他連結... */}
        <Link href="/booking">
          <Button>立即預約</Button>
        </Link>
        <LanguageToggle />
      </nav>
    </header>
  );
}

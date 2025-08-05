"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center m-0 p-0">
    
      <Image
        src="/hero.png"
        alt="CPR Training Class"
        fill
        priority
        className="object-cover object-center"
      />


      <div className="absolute inset-0 bg-black/40" />


      <div className="relative z-10 max-w-3xl px-6 md:px-16 lg:px-32 space-y-5">
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug tracking-tight">
          Professional Training<br />Caring Support
        </h1>
        <p className="text-base md:text-lg text-white max-w-xl leading-snug">
          Waymaker provides professional and compassionate CPR and first aid training for daycare and childcare facilities. Our engaging courses equip educators.
        </p>
        <Link href="/booking">
<Button
  size="hero"
  className="bg-[#41d3a0] hover:bg-[#39be91] text-white font-semibold text-base shadow-sm"
>
  BOOK NOW
</Button>
        </Link>
      </div>
    </section>
  );
}

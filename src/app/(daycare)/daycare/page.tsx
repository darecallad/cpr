"use client";

import Link from "next/link";
import { MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { partners } from "@/data/partners";
import { DaycareLogo } from "@/components/DaycareLogo";

export default function DaycareLandingPage() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      title: "Our Partner Daycares",
      subtitle: "Trusted, licensed, and verified childcare providers in your community.",
      viewDetails: "View Details",
    },
    zh: {
      title: "合作幼兒園",
      subtitle: "值得信賴、擁有執照且經過驗證的社區托育服務。",
      viewDetails: "查看詳情",
    },
  };

  const t = copy[locale] ?? copy.en;

  return (
    <div className="container mx-auto px-6 py-12 md:py-16 lg:px-32">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-900 mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-lg text-orange-700/80 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <Link 
            key={partner.slug} 
            href={`/daycare/${partner.slug}`}
            className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100 overflow-hidden"
          >
            {/* Logo Area - Hero Style */}
            <div className="relative h-48 bg-gray-50 p-6 flex items-center justify-center border-b border-gray-100 group-hover:bg-orange-50/30 transition-colors">
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-bold px-3 py-1 bg-white/90 text-green-700 rounded-full shadow-sm border border-green-100 backdrop-blur-sm">
                  Licensed
                </span>
              </div>
              <DaycareLogo 
                name={partner.name} 
                logo={partner.logo} 
                className="w-full h-full !bg-transparent" 
              />
            </div>
            
            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-orange-600 transition-colors">
                {partner.name}
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6 text-center">
                <MapPin className="w-4 h-4 flex-shrink-0 text-orange-400" />
                <span className="line-clamp-2">{partner.address}</span>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">
                  {partner.license}
                </span>
                <span className="text-sm font-bold text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t.viewDetails} 
                  <span className="text-lg">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

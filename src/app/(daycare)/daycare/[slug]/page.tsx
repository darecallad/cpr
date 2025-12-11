"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ShieldCheck, User, Phone, Mail, ImageIcon, ArrowLeft } from "lucide-react";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";
import { DaycareLogo } from "@/components/DaycareLogo";

export default function PartnerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { locale } = useLanguage();
  const partner = partners.find((p) => p.slug === slug);

  if (!partner) {
    notFound();
  }

  const copy = {
    en: {
      license: "License #",
      owner: "Owner",
      contact: "Contact Information",
      address: "Address",
      bookTour: "Book a Tour",
      gallery: "Photo Gallery",
      location: "Location",
      about: "About Us",
      aboutText: "We provide a safe, nurturing environment for your child to learn and grow. Our facility is fully licensed and our staff is CPR/First Aid certified.",
      back: "Back to All Daycares",
    },
    zh: {
      license: "執照號碼 #",
      owner: "負責人",
      contact: "聯絡資訊",
      address: "地址",
      bookTour: "預約參觀",
      about: "關於我們",
      gallery: "照片集錦",
      location: "位置",
      aboutText: "我們提供一個安全、充滿愛心的環境，讓您的孩子學習和成長。我們的設施擁有完整執照，且工作人員皆具備 CPR/急救認證。",
      back: "返回所有幼兒園",
    },
  };

  const t = copy[locale] ?? copy.en;
  const description = partner.description || (locale === 'zh' ? copy.zh.aboutText : copy.en.aboutText);

  return (
    <div className="container mx-auto px-6 py-12 md:py-16 lg:px-32">
      <Link 
        href="/daycare" 
        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t.back}
      </Link>
      <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-orange-100 to-orange-50 h-48 md:h-64 relative">
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-white/80 to-transparent">
          </div>
        </div>

        <div className="px-6 md:px-12 -mt-24 relative z-10 flex flex-col items-center text-center">
          <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 mb-6">
             <DaycareLogo name={partner.name} logo={partner.logo} className="w-40 h-40 md:w-56 md:h-56 text-4xl" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {partner.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Licensed
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
              {t.license} {partner.license}
            </span>
          </div>
        </div>

        <div className="px-6 md:px-12 pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.about}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {description}
                </p>
              </section>

              {/* Gallery Placeholders */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.gallery}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                      <div className="text-center text-gray-400">
                        <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-50" />
                        <span className="text-sm">Photo Coming Soon</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-orange-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-orange-900 mb-6">{t.contact}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{t.owner}</p>
                      <p className="text-gray-600">{partner.owner}</p>
                    </div>
                  </div>
                  
                  {partner.phone && (
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{partner.phone}</p>
                      </div>
                    </div>
                  )}

                  {partner.email && (
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{partner.email}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{t.address}</p>
                      <p className="text-gray-600">{partner.address}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Google Maps Embed */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.location}</h2>
                <div className="w-full h-[300px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(partner.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>
                <div className="mt-2 text-right">
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(partner.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-orange-600 hover:underline flex items-center justify-end gap-1"
                    >
                        Open in Google Maps <MapPin className="w-3 h-3" />
                    </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.bookTour}
                </h3>
                <p className="text-gray-500 mb-6 text-sm">
                  Interested in this daycare? Contact us to schedule a visit.
                </p>
                <Link 
                  href="/daycare/booking"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

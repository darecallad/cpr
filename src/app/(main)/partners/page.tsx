"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import { partners } from "@/data/partners";

export default function PartnersPage() {
  const { locale } = useLanguage();
  const [expandedPartner, setExpandedPartner] = useState<string | null>(null);

  const togglePartner = (name: string) => {
    if (expandedPartner === name) {
      setExpandedPartner(null);
    } else {
      setExpandedPartner(name);
    }
  };

  const copy = {
    en: {
      title: "Contact us for a tour",
      hello: "Hello Parents!",
      intro: "Here are some things we would like parents to know prior scheduling the tour to visit the facilities.",
      scheduling: {
        title: "When scheduling tour...",
        content: "Please let us know your name, your child/children's age, preferred location(s), and expected enrolling time."
      },
      visiting: {
        title: "When visiting facilities...",
        items: [
          "Please be advised, the tour will be cancelled if parent(s) arrived more than 15 minutes late for their appointment.",
          "Please DO NOT take any photos or videos during the tour.",
          "Please DO NOT touch, hug or randomly give out food to our students.",
          "Please DO NOT open classroom drawers/closets and refrigerators.",
          "Please DO NOT walk into staff areas."
        ]
      },
      disclaimer: "WE BELIEVE EVERYONE RESERVE THE SAME RIGHTS, AND SHOULD BE TREATED EQUALLY, THEREFORE, PLEASE DO NOT ASK FOR STAFFS PERSONAL INFORMATION, SUCH AS MARITAL STATUS, AND RELIGION.",
      thankYou: "Thank you!",
      contact: {
        email: "Email:",
        phone: "Phone:",
        hours: "Business Hours:",
        hoursValue: "Monday through Friday 8:30am to 6:00pm",
        locations: "Locations:"
      },
      bookWithDaycare: "Book with Daycare"
    },
    zh: {
      title: "預約參觀",
      hello: "各位家長好！",
      intro: "在您預約參觀我們的設施之前，有一些事項希望您能先了解。",
      scheduling: {
        title: "預約參觀時...",
        content: "請告知您的姓名、孩子年齡、偏好的地點以及預計入學時間。"
      },
      visiting: {
        title: "參觀設施時...",
        items: [
          "請注意，如果您遲到超過 15 分鐘，參觀將會被取消。",
          "參觀期間請勿拍照或錄影。",
          "請勿觸摸、擁抱學生或隨意給予食物。",
          "請勿打開教室抽屜/衣櫃和冰箱。",
          "請勿進入員工區域。"
        ]
      },
      disclaimer: "我們相信每個人都享有相同的權利，並應受到平等對待，因此請勿詢問員工的個人資訊，例如婚姻狀況和宗教信仰。",
      thankYou: "謝謝您！",
      contact: {
        email: "電子郵件：",
        phone: "電話：",
        hours: "營業時間：",
        hoursValue: "週一至週五 上午 8:30 至 下午 6:00",
        locations: "據點："
      },
      bookWithDaycare: "預約參觀"
    }
  };

  const content = copy[locale];

  return (
    <main className="flex flex-col min-h-screen bg-[#F5F9F8]">
      <SEOHead page="partners" />
      <div className="container mx-auto px-6 py-12 md:py-16 lg:px-32">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F6C8C] mb-8">
          {content.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Information */}
          <div className="space-y-8 text-[#2F4858]">
            <section>
              <h2 className="text-xl font-semibold mb-4">{content.hello}</h2>
              <p className="leading-relaxed">
                {content.intro}
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">{content.scheduling.title}</h3>
              <p className="leading-relaxed">
                {content.scheduling.content}
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">{content.visiting.title}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {content.visiting.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-[#CDE6E0]">
              <p className="font-medium text-[#0F6C8C]">
                {content.disclaimer}
              </p>
            </section>

            <p className="font-semibold">{content.thankYou}</p>
          </div>

          {/* Right Column: Contact & Locations */}
          <div className="space-y-8 text-[#2F4858]">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#CDE6E0]">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#0F6C8C]" /> {content.contact.email}
                  </h3>
                  <a href="mailto:daycare@waymakerbiz.com" className="text-[#0F6C8C] hover:underline break-all">
                    daycare@waymakerbiz.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#0F6C8C]" /> {content.contact.phone}
                  </h3>
                  <a href="tel:4085903617" className="text-[#0F6C8C] hover:underline">
                    (408) 590-3617
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0F6C8C]" /> {content.contact.hours}
                  </h3>
                  <p>{content.contact.hoursValue}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#0F6C8C]" /> {content.contact.locations}
              </h3>
              <div className="space-y-6">
                {partners.map((partner, index) => (
                  <div key={index} className="border-b border-[#CDE6E0] pb-4 last:border-0">
                    <button 
                      onClick={() => togglePartner(partner.name)}
                      className="flex items-center justify-between w-full text-left font-semibold text-[#0F6C8C] hover:text-[#0A4A61] transition-colors"
                    >
                      <span>{partner.name}</span>
                      {expandedPartner === partner.name ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    
                    {expandedPartner === partner.name && (
                      <div className="mt-4 space-y-3 pl-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <p className="text-sm text-[#2F4858]"><span className="font-medium">Owner:</span> {partner.owner}</p>
                        <p className="text-sm text-[#2F4858]"><span className="font-medium">License:</span> {partner.license}</p>
                        <p className="text-sm text-[#2F4858]"><span className="font-medium">Address:</span> {partner.address}</p>
                        <div className="pt-2">
                           <Link 
                             href={`/booking?organization=${encodeURIComponent(partner.name)}`}
                             className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#FF8A5B] text-white hover:bg-[#F57643] h-10 px-4 py-2"
                           >
                             {content.bookWithDaycare}
                           </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

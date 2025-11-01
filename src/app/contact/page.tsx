// src/app/contact/page.tsx
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { locale } = useLanguage();

  const copy = {
    en: {
      title: "Contact Us",
      phone: "(123) 456-7990",
      email: "info@waymaker.com",
      line: "@waymaker",
      address: ["25386 Seaboard Ave", "San Jose, CA 95131"],
      formTitle: "Get In Touch",
      placeholders: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      button: "SEND MESSAGE",
    },
    zh: {
      title: "聯絡我們",
      phone: "(123) 456-7990",
      email: "info@waymaker.com",
      line: "@waymaker",
      address: ["25386 Seaboard Ave", "San Jose, CA 95131"],
      formTitle: "留下訊息",
      placeholders: {
        name: "姓名",
        email: "Email",
        subject: "主旨",
        message: "訊息內容",
      },
      button: "送出訊息",
    },
  } as const;

  const content = copy[locale];

  return (
  <section className="bg-[#e6f4f1] px-8 py-16 min-h-screen">
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-10 text-primary">{content.title}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div className="space-y-6 text-base text-gray-800">
          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1" />
            <a href="tel:1234567990" className="hover:underline">
              {content.phone}
            </a>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1" />
            <a href="mailto:info@waymaker.com" className="hover:underline">
              {content.email}
            </a>
          </div>

          <div className="flex items-start gap-4">
            {/* 模擬 LINE icon */}
            <Image src="/line-icon.png" alt="LINE" width={24} height={24} className="mt-1" />
            <span>{content.line}</span>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" />
            <span>
              {content.address[0]}<br />
              {content.address[1]}
            </span>
          </div>
        </div>

        {/* Right: Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=2586%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed"
            allowFullScreen
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-primary">{content.formTitle}</h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={content.placeholders.name}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <input
              type="email"
              placeholder={content.placeholders.email}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder={content.placeholders.subject}
            className="border border-gray-300 rounded-md p-3 w-full"
          />
          <textarea
            placeholder={content.placeholders.message}
            rows={5}
            className="border border-gray-300 rounded-md p-3 w-full"
          />

          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition"
          >
            {content.button}
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}

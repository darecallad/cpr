// src/app/contact/page.tsx
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    <section className="bg-[#F0FBF6] px-8 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-[#0F6C8C]">{content.title}</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white/85 backdrop-blur border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#0F6C8C]">
                {locale === "en" ? "Contact Details" : "聯絡資訊"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-base text-[#2F4858]">
              <div className="flex items-start gap-4">
                <Phone className="text-[#2F7FA3] mt-1" />
                <a
                  href="tel:1234567990"
                  className="transition-colors hover:text-[#0F6C8C]"
                >
                  {content.phone}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#2F7FA3] mt-1" />
                <a
                  href="mailto:info@waymaker.com"
                  className="transition-colors hover:text-[#0F6C8C]"
                >
                  {content.email}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/line-icon.png"
                  alt="LINE"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>{content.line}</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#2F7FA3] mt-1" />
                <span>
                  {content.address[0]}
                  <br />
                  {content.address[1]}
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-sm">
            <CardContent className="p-0">
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, minHeight: 300 }}
                src="https://www.google.com/maps?q=2586%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed"
                allowFullScreen
              />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/85 backdrop-blur border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#0F6C8C]">
              {content.formTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-[#2F4858]">
                    {content.placeholders.name}
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder={content.placeholders.name}
                    className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-[#2F4858]">
                    {content.placeholders.email}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={content.placeholders.email}
                    className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-[#2F4858]">
                  {content.placeholders.subject}
                </Label>
                <Input
                  id="contact-subject"
                  type="text"
                  placeholder={content.placeholders.subject}
                  className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-[#2F4858]">
                  {content.placeholders.message}
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder={content.placeholders.message}
                  className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-[#FF8A5B] text-white font-bold px-8 hover:bg-[#F57643]"
              >
                {content.button}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

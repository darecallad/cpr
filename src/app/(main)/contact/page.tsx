// src/app/contact/page.tsx
"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { Clock, Mail, MapPin, Phone, Send, Loader2, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/ui/fade-in";
import { contactCopy } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import { generateStructuredData } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  category: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  category: "",
  message: "",
};

export default function ContactPage() {
  const { locale } = useLanguage();
  const copy = contactCopy[locale];
  const structuredData = generateStructuredData();

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFieldChange = <T extends keyof FormValues>(
    field: T,
    value: FormValues[T],
  ) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    if (status === "success") {
      setStatus("idle");
    }
    
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleInputChange = <T extends keyof FormValues>(field: T) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      handleFieldChange(field, event.target.value as FormValues[T]);
    };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = copy.form.validation.name;
    }

    const email = values.email.trim();
    if (!email) {
      nextErrors.email = copy.form.validation.email;
    } else {
      const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
      if (!emailPattern.test(email)) {
        nextErrors.email = copy.form.validation.email;
      }
    }

    if (!values.category) {
      nextErrors.category = copy.form.validation.category;
    }

    if (!values.message.trim()) {
      nextErrors.message = copy.form.validation.message;
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setStatus("submitting");

    try {
      const contactData = {
        name: values.name,
        email: values.email,
        message: `[${values.category}]\n\n${values.message}`,
        locale,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setValues(initialValues);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError(
        locale === "en"
          ? "Failed to send message. Please try again or email us directly at info@waymakerbiz.com"
          : "訊息發送失敗，請重試或直接來信 info@waymakerbiz.com"
      );
      setStatus("idle");
    }
  };

  const detailItems = useMemo(
    () => [
      {
        icon: Mail,
        label: copy.details.email.label,
        value: copy.details.email.value,
        href: copy.details.email.href,
        items: copy.details.email.items,
        color: "text-blue-600",
        bg: "bg-blue-100",
      },
      {
        icon: Phone,
        label: copy.details.phone.label,
        value: copy.details.phone.value,
        href: copy.details.phone.href,
        color: "text-green-600",
        bg: "bg-green-100",
      },
      {
        icon: MapPin,
        label: copy.details.address.label,
        value: copy.details.address.lines.join("\n"),
        href: copy.details.address.href,
        isAddress: true,
        color: "text-red-600",
        bg: "bg-red-100",
      },
      {
        icon: Clock,
        label: copy.details.serviceHours.label,
        value: copy.details.serviceHours.value,
        href: undefined,
        color: "text-orange-600",
        bg: "bg-orange-100",
      },
    ],
    [copy.details.address, copy.details.email, copy.details.phone, copy.details.serviceHours],
  );

  return (
    <>
      <SEOHead page="contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-[#F4FAF8] pb-20">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-100">
          <FadeIn className="container mx-auto px-6 py-16 md:py-20 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F6C8C] mb-6 tracking-tight">
              {copy.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-[#2F4858] max-w-2xl mx-auto leading-relaxed">
              {copy.hero.description}
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            
            {/* Left Column: Contact Info & Map */}
            <FadeIn direction="right" delay={0.2} className="space-y-8">
              {/* Contact Details Card */}
              <Card className="border-none shadow-lg bg-white overflow-hidden">
                <CardHeader className="bg-[#E6F3F9] border-b border-[#CDE6E0] px-6 py-4">
                  <CardTitle className="text-lg font-semibold text-[#0F6C8C] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    {locale === "en" ? "Contact Information" : "聯絡資訊"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {detailItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4 group">
                        <div className={cn("p-3 rounded-xl shrink-0 transition-colors", item.bg)}>
                          <Icon className={cn("w-5 h-5", item.color)} />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            {item.label}
                          </p>
                          {item.items ? (
                            <div className="flex flex-col gap-1">
                              {item.items.map((subItem, idx) => (
                                <a 
                                  key={idx}
                                  href={subItem.href}
                                  className="block text-[#0F3B4C] font-medium hover:text-[#FF8A5B] transition-colors whitespace-pre-line text-base"
                                >
                                  {subItem.value}
                                </a>
                              ))}
                            </div>
                          ) : item.href ? (
                            <a 
                              href={item.href}
                              target={item.isAddress ? "_blank" : undefined}
                              rel={item.isAddress ? "noopener noreferrer" : undefined}
                              className="block text-[#0F3B4C] font-medium hover:text-[#FF8A5B] transition-colors whitespace-pre-line text-base"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-[#0F3B4C] font-medium whitespace-pre-line text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Map Card */}
              <Card className="border-none shadow-lg bg-white overflow-hidden h-[300px] md:h-[400px]">
                <iframe
                  src={copy.map.iframeSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={copy.map.title}
                  className="w-full h-full"
                />
              </Card>
            </FadeIn>

            {/* Right Column: Contact Form */}
            <FadeIn direction="left" delay={0.4} className="relative">
              {status === "success" ? (
                <Card className="border-green-100 bg-white shadow-xl animate-in fade-in zoom-in duration-500">
                  <CardContent className="pt-12 pb-12 text-center px-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in bounce-in duration-700 delay-200">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{copy.form.success.title}</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{copy.form.success.body}</p>
                    <Button 
                      onClick={() => setStatus("idle")}
                      className="bg-green-600 hover:bg-green-700 text-white w-full h-12 text-lg rounded-xl shadow-lg shadow-green-600/20 transition-all hover:scale-[1.02]"
                    >
                      {locale === "en" ? "Send Another Message" : "發送另一則訊息"}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-xl bg-white">
                  <CardHeader className="px-6 md:px-8 pt-8 pb-0">
                    <CardTitle className="text-2xl font-bold text-[#0F6C8C]">
                      {copy.form.title}
                    </CardTitle>
                    <CardDescription className="text-base text-[#2F4858] mt-2">
                      {copy.form.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          {copy.form.labels.name}
                        </Label>
                        <Input
                          id="name"
                          value={values.name}
                          onChange={handleInputChange("name")}
                          placeholder={copy.form.placeholders.name}
                          className={cn(
                            "h-12 bg-gray-50/50 focus:bg-white transition-colors",
                            errors.name && "border-red-500 focus:ring-red-500"
                          )}
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          {copy.form.labels.email}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={handleInputChange("email")}
                          placeholder={copy.form.placeholders.email}
                          className={cn(
                            "h-12 bg-gray-50/50 focus:bg-white transition-colors",
                            errors.email && "border-red-500 focus:ring-red-500"
                          )}
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-gray-700 font-medium">
                          {copy.form.labels.category}
                        </Label>
                        <div className="relative">
                          <select
                            id="category"
                            value={values.category}
                            onChange={handleInputChange("category")}
                            className={cn(
                              "flex h-12 w-full items-center justify-between rounded-md border border-input bg-gray-50/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none focus:bg-white transition-colors",
                              errors.category && "border-red-500 focus:ring-red-500"
                            )}
                          >
                            <option value="" disabled>
                              {locale === "en" ? "Select a topic..." : "選擇主題..."}
                            </option>
                            {copy.form.categories.map((cat) => (
                              <option key={cat.value} value={cat.value}>
                                {cat.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          {copy.form.labels.message}
                        </Label>
                        <Textarea
                          id="message"
                          value={values.message}
                          onChange={handleInputChange("message")}
                          placeholder={copy.form.placeholders.message}
                          className={cn(
                            "min-h-[150px] bg-gray-50/50 focus:bg-white transition-colors resize-none p-4",
                            errors.message && "border-red-500 focus:ring-red-500"
                          )}
                        />
                        {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 animate-in fade-in slide-in-from-top-2">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <p className="text-sm font-medium">{submitError}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full h-14 text-lg font-semibold bg-[#FF8A5B] hover:bg-[#F57643] text-white shadow-lg shadow-orange-500/20 rounded-xl transition-all hover:scale-[1.01]"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            {locale === "en" ? "Sending..." : "發送中..."}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            {copy.form.submit}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  );
}

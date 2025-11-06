// src/app/contact/page.tsx
"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactCopy } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

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

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 700);
  };

  const detailItems = useMemo(
    () => [
      {
        icon: Mail,
        label: copy.details.email.label,
        value: copy.details.email.value,
        href: copy.details.email.href,
      },
      {
        icon: MapPin,
        label: copy.details.address.label,
        value: copy.details.address.lines.join("\n"),
        href: copy.details.address.href,
        isAddress: true,
      },
    ],
    [copy.details.address, copy.details.email],
  );

  return (
    <>
      <SEOHead page="contact" />
    <section className="bg-[#F0FBF6] px-6 py-16 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0F6C8C] md:text-5xl">
            {copy.hero.title}
          </h1>
          <p className="text-base text-[#2F4858] md:text-lg">
            {copy.hero.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Card className="border-none bg-white/90 shadow-sm backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-[#0F3B4C]">
                {locale === "en" ? "Contact details" : "聯絡資訊"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-[#2F4858] md:text-base">
              <div className="space-y-5">
                {detailItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <span className="block whitespace-pre-line text-[#0F3B4C]">
                      {item.value}
                    </span>
                  );

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <Icon className="mt-1 h-5 w-5 flex-none text-[#2F7FA3]" />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7FAFC2]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="transition-colors hover:text-[#0F6C8C]"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-start gap-4 border-t border-[#E2F0EB] pt-5">
                <Clock className="mt-1 h-5 w-5 flex-none text-[#2F7FA3]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7FAFC2]">
                    {copy.details.serviceHours.label}
                  </p>
                  <p className="text-[#0F3B4C]">{copy.details.serviceHours.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-white/90 shadow-sm backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-[#0F3B4C]">
                {copy.map.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-2xl border border-[#CDE6E0]">
              <iframe
                title={copy.map.title}
                width="100%"
                height="320"
                frameBorder="0"
                style={{ border: 0 }}
                src={copy.map.iframeSrc}
                allowFullScreen
              />
            </CardContent>
          </Card>
        </div>

        <Card className="border-none bg-white/90 shadow-sm backdrop-blur">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold text-[#0F3B4C]">
              {copy.form.title}
            </CardTitle>
            <p className="text-sm text-[#2F4858] md:text-base">{copy.form.description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-[#CDE6E0] bg-[#EFF9F4] p-6 text-center text-[#0F3B4C] shadow-sm"
              >
                <h2 className="text-xl font-semibold">{copy.form.success.title}</h2>
                <p className="mt-2 text-sm md:text-base">{copy.form.success.body}</p>
              </div>
            )}

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
              aria-busy={status === "submitting"}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="flex items-center gap-2 text-[#2F4858]">
                    <span>{copy.form.labels.name}</span>
                    <span className="text-[#C65353]">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleInputChange("name")}
                    placeholder={copy.form.placeholders.name}
                    aria-invalid={Boolean(errors.name)}
                    className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                  />
                  {errors.name && <p className="text-sm text-[#C65353]">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="flex items-center gap-2 text-[#2F4858]">
                    <span>{copy.form.labels.email}</span>
                    <span className="text-[#C65353]">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleInputChange("email")}
                    placeholder={copy.form.placeholders.email}
                    aria-invalid={Boolean(errors.email)}
                    className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                  />
                  {errors.email && <p className="text-sm text-[#C65353]">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-category" className="flex items-center gap-2 text-[#2F4858]">
                  <span>{copy.form.labels.category}</span>
                  <span className="text-[#C65353]">*</span>
                </Label>
                <select
                  id="contact-category"
                  value={values.category}
                  onChange={handleInputChange("category")}
                  aria-invalid={Boolean(errors.category)}
                  className="h-10 w-full rounded-md border border-[#CCE6DE] bg-white px-3 text-sm text-[#2F4858] shadow-xs outline-none transition focus:border-[#73BBD1] focus:ring-2 focus:ring-[#73BBD1]/40"
                >
                  <option value="" disabled>
                    {copy.form.labels.category}
                  </option>
                  {copy.form.categories.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="text-sm text-[#C65353]">{errors.category}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="flex items-center gap-2 text-[#2F4858]">
                  <span>{copy.form.labels.message}</span>
                  <span className="text-[#C65353]">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  value={values.message}
                  onChange={handleInputChange("message")}
                  placeholder={copy.form.placeholders.message}
                  aria-invalid={Boolean(errors.message)}
                  className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                />
                {errors.message && <p className="text-sm text-[#C65353]">{errors.message}</p>}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full bg-[#FF8A5B] px-8 font-semibold text-white hover:bg-[#F57643] disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? `${copy.form.submit}...` : copy.form.submit}
                </Button>
                <p className="text-xs text-[#2F4858]/80">
                  {locale === "en"
                    ? "Having trouble? Call us or message on LINE for instant help."
                    : "需要協助？可直接來電或於 LINE 聯絡我們。"}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  );
}

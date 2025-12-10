"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, Check, Building2, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  bookingCopy,
  paymentMethodIcons,
  upcomingSessions,
} from "@/data/booking";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  organization: string;
  sessionId: string;
  preferLanguage: string;
  customDate: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  organization: "Waymaker CPR",
  sessionId: "",
  preferLanguage: "",
  customDate: "",
  notes: "",
};

function BookingForm() {
  const { locale } = useLanguage();
  const copy = bookingCopy[locale];
  const searchParams = useSearchParams();

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [calendarLink, setCalendarLink] = useState<string>("");

  useEffect(() => {
    const orgParam = searchParams.get("organization");
    if (orgParam) {
      setValues((prev) => ({ ...prev, organization: "Waymaker CPR" }));
    }
  }, [searchParams]);

  const selectedSession = useMemo(
    () => upcomingSessions.find((session) => session.id === values.sessionId),
    [values.sessionId],
  );

  const handleFieldChange = <T extends keyof FormValues>(
    field: T,
    nextValue: FormValues[T],
  ) => {
    setValues((prev) => {
      const next: FormValues = {
        ...prev,
        [field]: nextValue,
      };
      return next;
    });
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

  const handleSessionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleFieldChange("sessionId", event.target.value as FormValues["sessionId"]);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = copy.validation.name;
    }

    if (!values.phone.trim()) {
      nextErrors.phone = copy.validation.phone;
    }

    const email = values.email.trim();
    if (!email) {
      nextErrors.email = copy.validation.email;
    } else {
      const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
      if (!emailPattern.test(email)) {
        nextErrors.email = copy.validation.email;
      }
    }

    if (!values.organization.trim()) {
      nextErrors.organization = copy.validation.organization;
    }

    if (!values.sessionId) {
      nextErrors.sessionId = copy.validation.session;
    }

    if (!values.preferLanguage) {
      nextErrors.preferLanguage = "Please select a preferred language";
    }

    if (!values.customDate.trim()) {
      nextErrors.customDate = copy.validation.customDate;
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
    setStatus("submitting");

    try {
      const bookingData = {
        fullName: values.name,
        phone: values.phone,
        email: values.email,
        organization: values.organization,
        courseType: selectedSession?.label || "Custom Date",
        preferredDate: values.customDate,
        preferredLanguage: values.preferLanguage,
        numberOfStudents: undefined,
        paymentMethod: "To be confirmed",
        specialRequests: values.notes || undefined,
        locale,
      };

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking");
      }

      // Generate Google Calendar Link
      // Since we don't have a specific time from a text input, we might skip this or just use the date if parseable
      // For now, we'll skip calendar link generation for custom text dates to avoid errors
      setCalendarLink("");
      
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert(
        locale === "en"
          ? "Failed to submit booking. Please try again or contact us directly."
          : "提交失敗，請重試或直接聯絡我們。"
      );
      setStatus("idle");
    }
  };

  return (
    <>
      <SEOHead page="booking" />
      <section className="min-h-screen bg-gradient-to-b from-[#F6FBF9] to-white px-4 py-16 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0F6C8C] md:text-5xl">
              {copy.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#2F4858] whitespace-pre-line">
              {copy.intro.join("\n")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <Card className="border-none bg-white shadow-xl shadow-[#0F6C8C]/5 ring-1 ring-black/5">
              <CardContent className="p-6 md:p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EFF9F4] text-[#27AE60]">
                      <Check className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-[#0F3B4C]">
                        {copy.confirmation.title}
                      </h2>
                      <p className="max-w-md text-[#2F4858]">
                        {copy.confirmation.body}
                      </p>
                    </div>
                    {calendarLink && (
                      <Button asChild className="bg-[#4285F4] hover:bg-[#3367D6] text-white font-medium px-8 py-6 text-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                        <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                          Add to Google Calendar
                        </a>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setStatus("idle");
                        setValues(initialValues);
                      }}
                      className="mt-4"
                    >
                      Book Another Session
                    </Button>
                  </div>
                ) : (
                  <form
                    className="space-y-8"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-busy={status === "submitting"}
                  >
                    {/* Organization - Read Only Display */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-[#0F3B4C]">
                        {copy.labels.organization}
                      </Label>
                      <div className="flex items-center gap-4 rounded-xl border border-[#E3F0EC] bg-[#F6FBF9] p-4 transition-colors hover:border-[#CCE6DE]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#0F6C8C] shadow-sm">
                          <Building2 className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold text-[#0F3B4C]">Waymaker CPR</p>
                          <p className="text-sm text-[#2F4858]">Certified Training Center</p>
                        </div>
                        <div className="ml-auto">
                          <Check className="h-5 w-5 text-[#27AE60]" />
                        </div>
                      </div>
                    </div>

                    {/* Personal Info Group */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#2F4858]">
                          {copy.labels.name} <span className="text-[#C65353]">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2F4858]/50">
                            <User className="h-5 w-5" />
                          </div>
                          <Input
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange("name")}
                            aria-invalid={Boolean(errors.name)}
                            className="h-12 border-[#CCE6DE] bg-white pl-12 pr-4 text-base transition-all focus:border-[#0F6C8C] focus:ring-2 focus:ring-[#0F6C8C]/20"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-sm text-[#C65353]">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#2F4858]">
                          {copy.labels.phone} <span className="text-[#C65353]">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2F4858]/50">
                            <Phone className="h-5 w-5" />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleInputChange("phone")}
                            aria-invalid={Boolean(errors.phone)}
                            className="h-12 border-[#CCE6DE] bg-white pl-12 pr-4 text-base transition-all focus:border-[#0F6C8C] focus:ring-2 focus:ring-[#0F6C8C]/20"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-sm text-[#C65353]">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email" className="text-[#2F4858]">
                          {copy.labels.email} <span className="text-[#C65353]">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2F4858]/50">
                            <Mail className="h-5 w-5" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleInputChange("email")}
                            aria-invalid={Boolean(errors.email)}
                            className="h-12 border-[#CCE6DE] bg-white pl-12 pr-4 text-base transition-all focus:border-[#0F6C8C] focus:ring-2 focus:ring-[#0F6C8C]/20"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-sm text-[#C65353]">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Session Selection - Radio Cards */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-[#0F3B4C]">
                        {copy.labels.session} <span className="text-[#C65353]">*</span>
                      </Label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {upcomingSessions.map((session) => {
                          const isSelected = values.sessionId === session.id;
                          return (
                            <div
                              key={session.id}
                              onClick={() => handleFieldChange("sessionId", session.id)}
                              className={`cursor-pointer relative flex items-center gap-3 rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                                isSelected
                                  ? "border-[#0F6C8C] bg-[#F0F9FF]"
                                  : "border-[#E3F0EC] bg-white hover:border-[#0F6C8C]/50"
                              }`}
                            >
                              <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                isSelected ? "border-[#0F6C8C] bg-[#0F6C8C]" : "border-gray-300"
                              }`}>
                                {isSelected && <Check className="h-3 w-3 text-white" />}
                              </div>
                              <span className={`font-medium ${isSelected ? "text-[#0F6C8C]" : "text-[#2F4858]"}`}>
                                {session.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      {errors.sessionId && (
                        <p className="text-sm text-[#C65353]">{errors.sessionId}</p>
                      )}
                    </div>

                    {/* Language Selection - Radio Cards */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-[#0F3B4C]">
                        {copy.labels.preferLanguage} <span className="text-[#C65353]">*</span>
                      </Label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          { id: "en", label: "English" },
                          { id: "zh", label: "Chinese / 中文" }
                        ].map((lang) => {
                          const isSelected = values.preferLanguage === lang.id;
                          return (
                            <div
                              key={lang.id}
                              onClick={() => handleFieldChange("preferLanguage", lang.id)}
                              className={`cursor-pointer relative flex items-center gap-3 rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                                isSelected
                                  ? "border-[#FF8A5B] bg-[#FFF5F2]"
                                  : "border-[#E3F0EC] bg-white hover:border-[#FF8A5B]/50"
                              }`}
                            >
                              <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                isSelected ? "border-[#FF8A5B] bg-[#FF8A5B]" : "border-gray-300"
                              }`}>
                                {isSelected && <Check className="h-3 w-3 text-white" />}
                              </div>
                              <span className={`font-medium ${isSelected ? "text-[#C65353]" : "text-[#2F4858]"}`}>
                                {lang.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      {errors.preferLanguage && (
                        <p className="text-sm text-[#C65353]">{errors.preferLanguage}</p>
                      )}
                    </div>

                    {/* Time Selection */}
                    {values.sessionId && (
                      <div className="space-y-3 animate-fade-in-up">
                        <Label htmlFor="customDate" className="text-base font-semibold text-[#0F3B4C]">
                          {copy.labels.customDate} <span className="text-[#C65353]">*</span>
                        </Label>
                        <div className="relative">
                          <select
                            id="customDate"
                            name="customDate"
                            value={values.customDate}
                            onChange={handleInputChange("customDate")}
                            aria-invalid={Boolean(errors.customDate)}
                            required
                            className="h-14 w-full appearance-none rounded-xl border-2 border-[#CCE6DE] bg-white px-4 text-base text-[#2F4858] shadow-sm outline-none transition-all focus:border-[#0F6C8C] focus:ring-2 focus:ring-[#0F6C8C]/20"
                          >
                            <option value="" disabled>
                              {copy.labels.customDatePlaceholder}
                            </option>
                            <option value="wednesday-afternoon">
                              {values.preferLanguage === "zh" 
                                ? bookingCopy.zh.labels.timeSlotWednesdayAfternoon 
                                : values.preferLanguage === "en"
                                  ? bookingCopy.en.labels.timeSlotWednesdayAfternoon
                                  : copy.labels.timeSlotWednesdayAfternoon}
                            </option>
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2F4858]">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        {errors.customDate && (
                          <p className="text-sm text-[#C65353]">{errors.customDate}</p>
                        )}
                      </div>
                    )}

                    <div className="space-y-3">
                      <Label htmlFor="notes" className="text-[#2F4858]">
                        {copy.labels.notes}
                      </Label>
                      <Textarea
                        id="notes"
                        rows={4}
                        value={values.notes}
                        onChange={handleInputChange("notes")}
                        className="min-h-[100px] rounded-xl border-[#CCE6DE] bg-white p-4 text-base focus:border-[#0F6C8C] focus:ring-2 focus:ring-[#0F6C8C]/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className="h-14 w-full rounded-xl bg-[#FF8A5B] text-lg font-bold text-white shadow-lg shadow-[#FF8A5B]/20 transition-all hover:scale-[1.02] hover:bg-[#F57643] hover:shadow-xl disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {status === "submitting" ? (
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Processing...</span>
                        </div>
                      ) : (
                        copy.submit
                      )}
                    </Button>
                    
                    <p className="text-center text-sm text-[#2F4858]/60">
                      {copy.assistance}
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-[#0F3B4C] p-6 text-white shadow-xl shadow-[#0F3B4C]/20">
                  <h2 className="mb-4 text-xl font-bold">
                    {copy.payment.heading}
                  </h2>
                  <p className="mb-6 text-[#E3F0EC]/80">
                    {copy.payment.description}
                  </p>
                  <div className="space-y-3">
                    {copy.payment.methods.map((method) => {
                      const Icon = paymentMethodIcons[method.id];
                      return (
                        <div
                          key={method.id}
                          className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">
                              {method.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 flex items-center gap-2 rounded-lg bg-[#2F7FA3]/30 p-3 text-xs text-[#E3F0EC]">
                    <ShieldCheck className="h-4 w-4 flex-none" />
                    <p>{copy.payment.security}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}

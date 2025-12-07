"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck } from "lucide-react";
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
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  organization: string;
  sessionId: string;
  customDate: string;
  daycareDate: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  organization: "",
  sessionId: "",
  customDate: "",
  daycareDate: "",
  notes: "",
};

const getAvailableDates = (organizationName: string) => {
  const partner = partners.find((p) => p.name === organizationName);
  if (!partner) return [];

  const address = partner.address;
  const dates: { value: string; label: string }[] = [];
  const today = new Date();

  // Generate next 21 days (3 weeks)
  for (let i = 1; i <= 21; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayOfWeek = date.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    const isoDate = date.toISOString().split("T")[0];

    let time = "";

    // Rules based on address
    if (
      address.includes("555 Pine Ave") ||
      address.includes("395 Carroll St") ||
      address.includes("748 Borregas Ave")
    ) {
      // Mon, Tue, Wed, Fri @ 6pm (Thu closed)
      if (dayOfWeek !== 0 && dayOfWeek !== 6 && dayOfWeek !== 4) {
        time = "18:00";
      }
    } else if (address.includes("216 E Arbor Ave")) {
      // Sat @ 10am only
      if (dayOfWeek === 6) {
        time = "10:00";
      }
    } else if (
      address.includes("723 Old San Francisco Rd") ||
      address.includes("1634 Meadowlark Lane")
    ) {
      // Tue, Wed, Thu @ 6pm (Mon/Fri closed)
      if (dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4) {
        time = "18:00";
      }
    } else if (address.includes("354 E Arbor Ave")) {
      // Wed, Fri @ 6pm only
      if (dayOfWeek === 3 || dayOfWeek === 5) {
        time = "18:00";
      }
    } else if (address.includes("962 Mesa Oak Ct")) {
      // Mon-Fri @ 5:30pm
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        time = "17:30";
      }
    } else if (address.includes("2904 Fresno Street")) {
      // Fri @ 6pm only
      if (dayOfWeek === 5) {
        time = "18:00";
      }
    } else if (address.includes("551 maple Ave")) {
      // Mon-Fri @ 6pm
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        time = "18:00";
      }
    } else if (address.includes("1236 Manet Dr")) {
      // Skyland: Mon-Fri @ 6pm
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        time = "18:00";
      }
    } else {
      // Default for any other address: Mon-Fri @ 6pm
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        time = "18:00";
      }
    }

    if (time) {
      dates.push({
        value: `${isoDate}T${time}`,
        label: `${dateString} @ ${time}`,
      });
    }
  }
  return dates;
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
      setValues((prev) => ({ ...prev, organization: orgParam }));
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

      if (field === "sessionId" && nextValue !== "custom") {
        next.customDate = "";
      }

      if (field === "organization") {
        next.sessionId = "";
        next.customDate = "";
        next.daycareDate = "";
      }

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

    if (values.organization === "Waymaker CPR") {
      if (values.sessionId === "custom" && !values.customDate.trim()) {
        nextErrors.customDate = copy.validation.customDate;
      }
    } else if (values.organization) {
      // Daycare
      if (!values.daycareDate) {
        nextErrors.daycareDate = copy.validation.daycareDate;
      }
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
      // 準備發送數據
      let preferredDate = selectedSession?.isoDate;
      if (values.organization === "Waymaker CPR") {
        if (values.sessionId === "custom") {
          preferredDate = values.customDate;
        }
      } else {
        // Daycare
        preferredDate = values.daycareDate;
      }

      const bookingData = {
        fullName: values.name,
        phone: values.phone,
        email: values.email,
        organization: values.organization || undefined,
        courseType: selectedSession?.label || "Custom Date",
        preferredDate: preferredDate,
        numberOfStudents: undefined, // 可以之後從表單添加此欄位
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
      let link = "";
      // Only generate if we have a valid ISO date string (Daycare dates are ISO with time)
      if (preferredDate && preferredDate.includes("T")) {
        const partner = partners.find((p) => p.name === values.organization);
        const location = partner ? partner.address : "Waymaker CPR";
        const title = `CPR Course - ${values.organization}`;
        const details = `Course: ${selectedSession?.label || "Custom"}\nName: ${values.name}\nPhone: ${values.phone}`;

        try {
          const startDate = new Date(preferredDate);
          // Default duration: 2 hours
          const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
          
          const format = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
          const start = format(startDate);
          const end = format(endDate);

          link = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
        } catch (e) {
          console.error("Error generating calendar link", e);
        }
      }

      setCalendarLink(link);
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
    <section className="bg-[#F6FBF9] px-6 py-16 md:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-[#0F6C8C]">
            {copy.title}
          </h1>
          <p className="text-[#2F4858] whitespace-pre-line">
            {copy.intro.join("\n")}
          </p>
        </div>

        <Card className="border-none bg-white/90 shadow-sm backdrop-blur">
          <CardContent className="space-y-8 p-6 md:p-8">
            {status === "success" && (
              <div className="rounded-2xl border border-[#CDE6E0] bg-[#EFF9F4] p-6 text-center text-[#0F3B4C] shadow-sm">
                <h2 className="text-2xl font-semibold">
                  {copy.confirmation.title}
                </h2>
                <p className="mt-2 text-sm md:text-base">
                  {copy.confirmation.body}
                </p>
                {calendarLink && (
                  <div className="mt-6">
                    <Button asChild className="bg-[#4285F4] hover:bg-[#3367D6] text-white font-medium px-6">
                      <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                        Add to Google Calendar
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            )}

            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                noValidate
                aria-busy={status === "submitting"}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-[#2F4858]">
                      <span>{copy.labels.name}</span>
                      <span className="text-[#C65353]">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={handleInputChange("name")}
                      aria-invalid={Boolean(errors.name)}
                      required
                      className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                    />
                    {errors.name && (
                      <p className="text-sm text-[#C65353]">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-[#2F4858]">
                      <span>{copy.labels.phone}</span>
                      <span className="text-[#C65353]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleInputChange("phone")}
                      aria-invalid={Boolean(errors.phone)}
                      required
                      className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                    />
                    {errors.phone && (
                      <p className="text-sm text-[#C65353]">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-[#2F4858]">
                      <span>{copy.labels.email}</span>
                      <span className="text-[#C65353]">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleInputChange("email")}
                      aria-invalid={Boolean(errors.email)}
                      required
                      className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                    />
                    {errors.email && (
                      <p className="text-sm text-[#C65353]">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="flex items-center gap-2 text-[#2F4858]">
                      <span>{copy.labels.organization}</span>
                      <span className="text-[#C65353]">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="organization"
                        name="organization"
                        value={values.organization}
                        onChange={handleInputChange("organization")}
                        aria-invalid={Boolean(errors.organization)}
                        required
                        className="flex h-10 w-full rounded-md border border-[#CCE6DE] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">{copy.labels.organizationPlaceholder}</option>
                        <optgroup label="Waymaker">
                          <option value="Waymaker CPR">Waymaker CPR</option>
                        </optgroup>
                        <optgroup label="Daycare">
                          {partners.map((partner) => (
                            <option key={partner.name} value={partner.name}>
                              {partner.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                    {errors.organization && (
                      <p className="text-sm text-[#C65353]">{errors.organization}</p>
                    )}
                  </div>

                  {values.organization && (
                    <div className="space-y-2">
                      <Label htmlFor="session" className="flex items-center gap-2 text-[#2F4858]">
                        <span>{values.organization === "Waymaker CPR" ? copy.labels.session : copy.labels.preferLanguage}</span>
                        <span className="text-[#C65353]">*</span>
                      </Label>
                      <select
                        id="session"
                        value={values.sessionId}
                        onChange={handleSessionChange}
                        aria-invalid={Boolean(errors.sessionId)}
                        required
                        className="h-10 w-full rounded-md border border-[#CCE6DE] bg-white px-3 text-sm text-[#2F4858] shadow-xs outline-none transition focus:border-[#73BBD1] focus:ring-2 focus:ring-[#73BBD1]/40"
                      >
                        <option value="" disabled>
                          {values.organization === "Waymaker CPR" ? copy.labels.sessionPlaceholder : copy.labels.preferLanguagePlaceholder}
                        </option>
                        {values.organization === "Waymaker CPR" ? (
                          <>
                            {upcomingSessions.map((session) => (
                              <option key={session.id} value={session.id}>
                                {session.label}
                              </option>
                            ))}
                          </>
                        ) : (
                          <>
                            <option value="english-session">English</option>
                            <option value="chinese-session">Chinese / 中文</option>
                          </>
                        )}
                      </select>
                      {errors.sessionId && (
                        <p className="text-sm text-[#C65353]">{errors.sessionId}</p>
                      )}
                      {selectedSession?.note && (
                        <p className="text-xs text-[#0F3B4C] opacity-80">
                          {selectedSession.note}
                        </p>
                      )}
                    </div>
                  )}

                  {values.organization && values.organization !== "Waymaker CPR" && values.sessionId && (
                    <div className="space-y-2">
                      <Label htmlFor="daycareDate" className="flex items-center gap-2 text-[#2F4858]">
                        <span>{copy.labels.daycareDate}</span>
                        <span className="text-[#C65353]">*</span>
                      </Label>
                      <select
                        id="daycareDate"
                        value={values.daycareDate}
                        onChange={handleInputChange("daycareDate")}
                        aria-invalid={Boolean(errors.daycareDate)}
                        required
                        className="h-10 w-full rounded-md border border-[#CCE6DE] bg-white px-3 text-sm text-[#2F4858] shadow-xs outline-none transition focus:border-[#73BBD1] focus:ring-2 focus:ring-[#73BBD1]/40"
                      >
                        <option value="" disabled>
                          {copy.labels.daycareDatePlaceholder}
                        </option>
                        {getAvailableDates(values.organization).map((date) => (
                          <option key={date.value} value={date.value}>
                            {date.label}
                          </option>
                        ))}
                      </select>
                      {errors.daycareDate && (
                        <p className="text-sm text-[#C65353]">{errors.daycareDate}</p>
                      )}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-[#2F4858]">
                      {copy.labels.notes}
                    </Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      value={values.notes}
                      onChange={handleInputChange("notes")}
                      className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full bg-[#FF8A5B] px-10 font-semibold text-white hover:bg-[#F57643] disabled:opacity-70"
                  >
                    {status === "submitting" ? `${copy.submit}...` : copy.submit}
                  </Button>
                  <p className="text-xs text-[#2F4858]/80">
                    {copy.assistance}
                  </p>
                </div>
              </form>

              <aside className="space-y-5 rounded-2xl border border-[#CDE6E0] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#0F3B4C]">
                  {copy.payment.heading}
                </h2>
                <p className="text-sm text-[#2F4858]">
                  {copy.payment.description}
                </p>
                <div className="space-y-3">
                  {copy.payment.methods.map((method) => {
                    const Icon = paymentMethodIcons[method.id];
                    return (
                      <div
                        key={method.id}
                        className="flex items-start gap-3 rounded-xl border border-[#E3F0EC] bg-[#F6FBF9] p-4"
                      >
                        <Icon className="h-5 w-5 flex-none text-[#2F7FA3]" />
                        <div className="space-y-1 text-sm text-[#2F4858]">
                          <p className="font-semibold text-[#0F3B4C]">
                            {method.label}
                          </p>
                          <p>{method.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-[#0F3B4C]/5 p-4 text-sm text-[#0F3B4C]">
                  <ShieldCheck className="h-5 w-5 flex-none text-[#2F7FA3]" />
                  <p>{copy.payment.security}</p>
                </div>
              </aside>
            </div>
          </CardContent>
        </Card>
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

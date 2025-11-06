"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
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
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  organization: string;
  sessionId: string;
  customDate: string;
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
  notes: "",
};

export default function BookingPage() {
  const { locale } = useLanguage();
  const copy = bookingCopy[locale];

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

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
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    if (!values.sessionId) {
      nextErrors.sessionId = copy.validation.session;
    }

    if (values.sessionId === "custom" && !values.customDate.trim()) {
      nextErrors.customDate = copy.validation.customDate;
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
                      type="text"
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
                      type="tel"
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
                      type="email"
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
                    <Label htmlFor="organization" className="text-[#2F4858]">
                      {copy.labels.organization}
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      value={values.organization}
                      onChange={handleInputChange("organization")}
                      className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="session" className="flex items-center gap-2 text-[#2F4858]">
                      <span>{copy.labels.session}</span>
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
                        {copy.labels.sessionPlaceholder}
                      </option>
                      {upcomingSessions.map((session) => (
                        <option key={session.id} value={session.id}>
                          {session.label}
                        </option>
                      ))}
                      <option value="custom">{copy.labels.sessionCustomOption}</option>
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

                  {values.sessionId === "custom" && (
                    <div className="space-y-2">
                      <Label htmlFor="customDate" className="flex items-center gap-2 text-[#2F4858]">
                        <span>{copy.labels.customDate}</span>
                        <span className="text-[#C65353]">*</span>
                      </Label>
                      <Input
                        id="customDate"
                        type="text"
                        value={values.customDate}
                        onChange={handleInputChange("customDate")}
                        aria-invalid={Boolean(errors.customDate)}
                        required
                        placeholder={copy.labels.customDatePlaceholder}
                        className="border-[#CCE6DE] focus-visible:border-[#73BBD1] focus-visible:ring-[#73BBD1]/50"
                      />
                      {errors.customDate && (
                        <p className="text-sm text-[#C65353]">{errors.customDate}</p>
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
                <div className="flex gap-2">
                  {["VISA", "MC", "AMEX"].map((brand) => (
                    <span
                      key={brand}
                      className="flex h-10 w-16 items-center justify-center rounded-md border border-[#CCE6DE] bg-[#F8FCFB] text-xs font-semibold text-[#2F4858] shadow-xs"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
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

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import bookingData from "@/data/booking.json";
import { useLanguage } from "@/context/LanguageContext";

type Locale = "en" | "zh";

interface BookingFields {
  name: string;
  phone: string;
  email: string;
  organization: string;
  preferredDate: string;
  notes: string;
  attendees: string;
  attendeesPlaceholder: string;
  calendar: string;
}

interface BookingLocaleContent {
  title: string;
  intro: string[];
  fields: BookingFields;
  submit: string;
  paymentNote: string;
  paymentFooter: string;
}

interface BookingCopy {
  monthNames: Record<Locale, string[]>;
  weekDays: Record<Locale, string[]>;
  copy: Record<Locale, BookingLocaleContent>;
}

const bookingCopy: BookingCopy = bookingData;

export default function BookingPage() {
  const { locale } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 2)); // March 2024

  const weekDayLabels = bookingCopy.weekDays[locale];
  const monthLabel = locale === "en"
    ? `${bookingCopy.monthNames[locale][currentMonth.getMonth()]} ${currentMonth.getFullYear()}`
    : `${currentMonth.getFullYear()} 年 ${bookingCopy.monthNames[locale][currentMonth.getMonth()]}`;

  const content = bookingCopy.copy[locale];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Convert Sunday = 0 to Monday = 0
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const formattedDate = selectedDate
    ? locale === "en"
      ? `${currentMonth.getMonth() + 1}/${selectedDate}/${currentMonth.getFullYear()}`
      : `${currentMonth.getFullYear()} 年 ${currentMonth.getMonth() + 1} 月 ${selectedDate} 日`
    : "";

  return (
    <section className="bg-[#F6FBF9] px-8 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-[#0F6C8C] text-center">
          {content.title}
        </h1>
        <p className="text-center text-[#2F4858] whitespace-pre-line">
          {content.intro.join("\n")}
        </p>
        <Card className="bg-white/85 backdrop-blur shadow-sm border-none">
          <CardContent className="space-y-10">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="block text-[#2F4858]">
                      {content.fields.name}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="block text-[#2F4858]">
                      {content.fields.phone}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="block text-[#2F4858]">
                      {content.fields.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="block text-[#2F4858]">
                      {content.fields.organization}
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attendees" className="block text-[#2F4858]">
                      {content.fields.attendees}
                    </Label>
                    <Input
                      id="attendees"
                      type="number"
                      min={1}
                      placeholder={content.fields.attendeesPlaceholder}
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="block text-[#2F4858]">
                      {content.fields.preferredDate}
                    </Label>
                    <Input
                      id="preferredDate"
                      type="text"
                      value={formattedDate}
                      readOnly
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="block text-[#2F4858]">
                      {content.fields.notes}
                    </Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      className="border-[#CCE6DE] focus-visible:ring-[#73BBD1]/50 focus-visible:border-[#73BBD1]"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-medium text-[#2F4858]">
                    {content.fields.calendar}
                  </p>
                  <Card className="border-[#C5E1DB] bg-white shadow-sm">
                    <CardContent className="space-y-4 p-4">
                      <div className="flex items-center justify-between">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#2F4858] hover:bg-[#EEF7FA]"
                          onClick={() => navigateMonth('prev')}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <h3 className="font-medium text-[#2F4858]">
                          {monthLabel}
                        </h3>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#2F4858] hover:bg-[#EEF7FA]"
                          onClick={() => navigateMonth('next')}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-xs font-medium text-gray-500">
                        {weekDayLabels.map((day, index) => (
                          <div key={`${day}-${index}`} className="rounded p-2 text-center">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {getDaysInMonth(currentMonth).map((day, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => day && setSelectedDate(day)}
                            className={`p-2 text-sm rounded transition-colors ${
                              day === null
                                ? "invisible"
                                : selectedDate === day
                                  ? "bg-[#73BBD1] text-white hover:bg-[#5FA5BD]"
                                  : "text-[#2F4858] hover:bg-[#EEF7FA]"
                            }`}
                            disabled={day === null}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#FF8A5B] text-white font-bold px-10 hover:bg-[#F57643]"
                >
                  {content.submit}
                </Button>
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm text-[#2F4858]">{content.paymentNote}</p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-12 h-8 rounded border border-[#CCE6DE] bg-white flex items-center justify-center">
                    <span className="text-xs text-[#2F4858]">VISA</span>
                  </div>
                  <div className="w-12 h-8 rounded border border-[#CCE6DE] bg-white flex items-center justify-center">
                    <span className="text-xs text-[#2F4858]">MC</span>
                  </div>
                </div>
                <div className="text-sm text-[#2F4858]">
                  {content.paymentFooter} [Payment Icons Space]
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

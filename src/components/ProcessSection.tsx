"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { processCopy } from "@/data/home/process";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const { locale } = useLanguage();
  const content = processCopy[locale];
  const [activeTab, setActiveTab] = useState<"cpr" | "daycare">("cpr");

  const activeSteps = content[activeTab].steps;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F7FA3]">
              {content.eyebrow}
            </span>
            <h2 className="text-3xl font-bold text-[#0F6C8C] md:text-4xl">
              {content.title}
            </h2>
          </div>
          
          {/* Toggle / Tabs */}
          <div className="flex p-1 bg-[#F4FAF8] rounded-lg self-start md:self-end">
            <button
              onClick={() => setActiveTab("cpr")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "cpr"
                  ? "bg-white text-[#0F6C8C] shadow-sm"
                  : "text-[#2F7FA3] hover:text-[#0F6C8C]"
              )}
            >
              {content.cpr.label}
            </button>
            <button
              onClick={() => setActiveTab("daycare")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "daycare"
                  ? "bg-white text-[#0F6C8C] shadow-sm"
                  : "text-[#2F7FA3] hover:text-[#0F6C8C]"
              )}
            >
              {content.daycare.label}
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {activeSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                className="border border-[#E0F0F5] bg-[#F8FCFB] shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F6C8C] text-lg font-semibold text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-8 w-8 text-[#2F7FA3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F3B4C]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#2F4858]">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

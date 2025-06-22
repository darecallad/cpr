"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Locale = "en" | "zh";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  // 讀 localStorage，保持用戶選擇
  useEffect(() => {
    const stored = window.localStorage.getItem("locale") as Locale | null;
    if (stored === "en" || stored === "zh") setLocale(stored);
  }, []);

  const handleSet = (l: Locale) => {
    setLocale(l);
    window.localStorage.setItem("locale", l);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSet }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook 方便取值
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

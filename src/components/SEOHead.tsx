"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import { seoData, type SEOPage } from "@/data/seo";

interface SEOHeadProps {
  page: SEOPage;
}

export function SEOHead({ page }: SEOHeadProps) {
  const { locale } = useLanguage();
  
  const seo = seoData[page][locale];

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seo.description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", seo.keywords.join(", "));

    // Update lang attribute
    document.documentElement.lang = locale === "zh" ? "zh-TW" : "en";
  }, [seo, locale]);

  return null;
}

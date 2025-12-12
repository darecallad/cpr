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

    // Add JSON-LD for LocalBusiness
    const scriptId = "json-ld-local-business";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Waymaker CPR",
      "image": "https://cpr.waymakerbiz.com/logo.svg",
      "telephone": "(408) 590-3617",
      "email": "info@waymakerbiz.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2586 Seaboard Ave",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "postalCode": "95131",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.386051,
        "longitude": -121.883873
      },
      "url": "https://cpr.waymakerbiz.com",
      "priceRange": "$$"
    };

    script.textContent = JSON.stringify(jsonLd);

  }, [seo, locale]);

  return null;
}

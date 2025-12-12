export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://cpr.waymakerbiz.com/#organization",
        name: "Waymaker CPR Training",
        alternateName: "Waymaker 心肺復甦術培訓",
        description:
          "Professional EMSA-certified CPR and First Aid training in San Jose, CA. Bilingual instruction in English and Traditional Chinese.",
        url: "https://cpr.waymakerbiz.com",
        telephone: "",
        email: "info@waymakerbiz.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2586 Seaboard Ave",
          addressLocality: "San Jose",
          addressRegion: "CA",
          postalCode: "95131",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.3908,
          longitude: -121.9171,
        },
        areaServed: {
          "@type": "City",
          name: "San Jose",
          "@id": "https://www.wikidata.org/wiki/Q16553",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Emergency Medical Services Authority (EMSA)",
          },
        },
        knowsLanguage: ["en-US", "zh-TW"],
        priceRange: "$$",
        openingHours: "Mo-Su 08:00-18:00",
      },
      {
        "@type": "Course",
        "@id": "https://cpr.waymakerbiz.com/courses#pediatric-cpr",
        name: "EMSA Pediatric CPR & First Aid",
        description:
          "Comprehensive EMSA-approved pediatric CPR and first aid certification course. Required for childcare providers in California.",
        provider: {
          "@id": "https://cpr.waymakerbiz.com/#organization",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["onsite", "blended"],
          duration: "PT8H",
          inLanguage: ["en", "zh"],
        },
        educationalCredentialAwarded: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          competencyRequired: "Pediatric CPR and First Aid",
          recognizedBy: {
            "@type": "Organization",
            name: "Emergency Medical Services Authority (EMSA)",
          },
        },
      },
      {
        "@type": "Course",
        "@id": "https://cpr.waymakerbiz.com/courses#adult-cpr",
        name: "Adult CPR & First Aid Certification",
        description:
          "Professional adult CPR and first aid training for workplace safety and community preparedness.",
        provider: {
          "@id": "https://cpr.waymakerbiz.com/#organization",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["onsite", "blended"],
          duration: "PT6H",
          inLanguage: ["en", "zh"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://cpr.waymakerbiz.com/#website",
        url: "https://cpr.waymakerbiz.com",
        name: "Waymaker CPR Training",
        publisher: {
          "@id": "https://cpr.waymakerbiz.com/#organization",
        },
        inLanguage: ["en-US", "zh-TW"],
      },
      {
        "@type": "Service",
        "@id": "https://cpr.waymakerbiz.com/#daycare-consulting",
        name: "Daycare Setup Consulting",
        description: "Expert guidance on licensing, facility setup, and management for starting your own daycare.",
        provider: {
          "@id": "https://cpr.waymakerbiz.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "San Jose",
          "@id": "https://www.wikidata.org/wiki/Q16553",
        },
      },
    ],
  };
}

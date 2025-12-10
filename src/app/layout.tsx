// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider"; 
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { generateStructuredData } from "@/lib/structured-data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4FAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0F3B4C" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://waymakercpr.com"),
  title: {
    default: "Waymaker CPR Training | EMSA Certified CPR & First Aid - San Jose, CA",
    template: "%s | Waymaker CPR Training",
  },
  description:
    "Professional EMSA-certified CPR training and expert guidance on starting your own daycare in San Jose, CA. Bilingual instruction and business support. Book today!",
  keywords: [
    "CPR training San Jose",
    "First Aid certification California",
    "EMSA pediatric CPR",
    "childcare CPR training",
    "daycare first aid",
    "bilingual CPR classes",
    "中文 CPR 培訓",
    "幼兒園急救訓練",
    "San Jose CPR instructor",
    "California childcare certification",
    "San Jose Daycare",
    "Top Daycares San Jose",
    "Open a daycare",
    "Start a daycare",
    "Childcare business consulting",
    "開設托育中心",
    "托育創業",
    "Daycare licensing help",
  ],
  authors: [{ name: "Waymaker CPR Training" }],
  creator: "Waymaker CPR Training",
  publisher: "Waymaker CPR Training",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_TW"],
    url: "https://waymakercpr.com",
    siteName: "Waymaker CPR Training",
    title: "Waymaker CPR Training | EMSA Certified CPR & First Aid",
    description:
      "Professional EMSA-certified CPR and First Aid training for childcare providers in San Jose, CA. Bilingual instruction available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waymaker CPR Training | EMSA Certified CPR & First Aid",
    description:
      "Professional CPR & First Aid training for childcare providers in San Jose, CA. Bilingual classes available.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "HPJApzRqyvJbh2G3VxZmmnRoWnKuFXLkImvKxGK8z-c",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#F4FAF8]">
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>    
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

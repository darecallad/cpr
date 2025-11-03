// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; 
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "CPR Teacher Site",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#F4FAF8]">
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

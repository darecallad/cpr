// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; 
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";

export const metadata = { title: "CPR Teacher Site" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#e6f4f1] min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>    
            <Header />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

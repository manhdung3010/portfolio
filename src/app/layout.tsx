"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground transition-colors duration-500 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

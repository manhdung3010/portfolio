"use client";

import "./globals.css";
import Sidebar from "./components/Sidebar";
import TabContent from "./components/TabContent";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground transition-colors duration-500 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="flex-1 lg:ml-80 min-h-screen">
              <TabContent activeTab={activeTab} onTabChange={setActiveTab} />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

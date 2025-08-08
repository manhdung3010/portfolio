import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import { getMeta } from "./utils/seo";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nguyễn Mạnh Dũng | Portfolio",
  description: "Portfolio cá nhân chuyên nghiệp của Nguyễn Mạnh Dũng - Frontend Developer.",
  openGraph: {
    title: "Nguyễn Mạnh Dũng | Portfolio",
    description: "Portfolio cá nhân chuyên nghiệp của Nguyễn Mạnh Dũng - Frontend Developer.",
    url: "https://your-portfolio-url.com/",
    siteName: "Nguyễn Mạnh Dũng Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Nguyễn Mạnh Dũng Avatar",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const meta = getMeta();
  return (
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      <head>
        {meta.map((m, i) => (
          <meta key={i} {...m} />
        ))}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground transition-colors duration-500 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-[80vh] container mx-auto px-4 sm:px-8 pt-24 ">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

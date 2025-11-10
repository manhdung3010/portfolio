import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground transition-colors duration-500 ease-in-out">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

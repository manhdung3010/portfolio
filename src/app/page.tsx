import type { Metadata } from "next";
import { Suspense } from "react";
import FloatingParticles from "./components/FloatingParticles";
import AnimatedBackground from "./components/AnimatedBackground";
import HomePage from "@/modules/Home";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-url.com"),
  title: "Nguyễn Mạnh Dũng | Portfolio",
  description:
    "Professional personal portfolio of Nguyễn Mạnh Dũng - Fullstack Developer.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Nguyễn Mạnh Dũng | Portfolio",
    description:
      "Professional personal portfolio of Nguyễn Mạnh Dũng - Fullstack Developer.",
    images: [
      { url: "/images/avatar.jpg", width: 1200, height: 630, alt: "Avatar" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Mạnh Dũng | Portfolio",
    description:
      "Professional personal portfolio of Nguyễn Mạnh Dũng - Fullstack Developer.",
    images: ["/images/avatar.jpg"],
  },
};

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />
      <Suspense fallback={null}>
        <HomePage/>
      </Suspense>
    </div>
  );
}

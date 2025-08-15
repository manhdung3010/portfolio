'use client'

import FloatingParticles from "./components/FloatingParticles";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />
    </div>
  );
}

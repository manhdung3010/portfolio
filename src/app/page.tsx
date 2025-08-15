
import FloatingParticles from "./components/FloatingParticles";
import AnimatedBackground from "./components/AnimatedBackground";
import HomePage from "@/modules/Home";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />
      <HomePage/>
    </div>
  );
}

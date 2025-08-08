'use client'

import Section from "./components/Section";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import FloatingParticles from "./components/FloatingParticles";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section id="about" title="Giới thiệu bản thân">
          <About />
        </Section>
        
        <Section id="skills" title="Kỹ năng chuyên môn">
          <Skills />
        </Section>
        
        <Section id="experience" title="Kinh nghiệm làm việc">
          <Experience />
        </Section>
        
        <Section id="projects" title="Dự án cá nhân & nổi bật">
          <Projects />
        </Section>
        
        <Section id="education" title="Học vấn">
          <Education />
        </Section>
        
        <Section id="contact" title="Liên hệ & Kết nối">
          <Contact />
        </Section>
      </div>
    </div>
  );
}

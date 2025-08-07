import Section from "./components/Section";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Section id="about" title="Giới thiệu">
        <About />
      </Section>
      <Section id="skills" title="Kỹ năng">
        <Skills />
      </Section>
      <Section id="experience" title="Kinh nghiệm">
        <Experience />
      </Section>
      <Section id="projects" title="Dự án nổi bật">
        <Projects />
      </Section>
      <Section id="education" title="Học vấn">
        <Education />
      </Section>
      <Section id="contact" title="Liên hệ">
        <Contact />
      </Section>
    </>
  );
}

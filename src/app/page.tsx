import AboutSection from "@/components/About/about";
import ContactSection from "@/components/Contact/contact";
import Footer from "@/components/Main/footer";
import HeroSection from "@/components/Main/hero";
import Navbar from "@/components/Main/navbar";
import ProjectsSection from "@/components/Projects/project-section";
import CustomScrollArea from "@/components/scroll-bar";
import SkillsSection from "@/components/Skills/skills";
import ScrollToTop from "@/components/top";
import WorkSection from "@/components/Work/work";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] scroll-bar-none">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkSection />
        <ContactSection />
      </div>
      <ScrollToTop />
      <Footer />
    </main>

  );
}
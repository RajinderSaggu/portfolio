"use client";
import AboutSection from "@/components/About/about";
import ContactSection from "@/components/Contact/contact";
import Footer from "@/components/Main/footer";
import HeroSection from "@/components/Main/hero";
import Navbar from "@/components/Main/navbar";
import ProjectsSection from "@/components/Projects/project-section";
import SkillsSection from "@/components/Skills/skills";
import ScrollToTop from "@/components/top";
import WorkSection from "@/components/Work/work";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] scroll-bar-none">
  {/* Animated Starry Background */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/* Static Stars */}
  {[...Array(400)].map((_, index) => (
    <div
      key={index}
      className="absolute w-[3px] h-[3px] rounded-full bg-white opacity-50"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}

  {/* Shooting Stars */}
  {[...Array(60)].map((_, index) => (
    <motion.div
      key={index}
      className="absolute w-[4px] h-[4px] rounded-full bg-white opacity-75"
      style={{
        top: `${Math.random() * 50}%`, // Start from the top half
        left: `${Math.random() * 100}%`,
        boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
      }}
      animate={{
        y: ["0%", "150%"], // Downward motion
        x: ["0%", `${Math.random() * 10 - 5}%`], // Slight diagonal motion
        opacity: [1, 0], // Fade out
      }}
      transition={{
        duration: Math.random() * 2 + 1.5, // Faster shooting motion
        repeat: Infinity,
        delay: Math.random() * 2, // Random delays for staggered motion
      }}
    />
  ))}
</div>



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

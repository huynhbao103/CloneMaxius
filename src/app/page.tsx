"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentSection, setCurrentSection] = useState(0);

  const sections = useMemo(() => [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'features', name: 'Features' },
    { id: 'contact', name: 'Contact' },
    { id: 'footer', name: 'Footer' }
  ], []);

  useEffect(() => {
    // Get initial section from URL
    const sectionFromUrl = searchParams.get('section') || 'hero';
    const sectionIndex = sections.findIndex(s => s.id === sectionFromUrl);
    if (sectionIndex !== -1) {
      setCurrentSection(sectionIndex);
      // Scroll to the section
      const element = document.getElementById(sectionFromUrl);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      const currentIndex = Math.round(scrollTop / containerHeight);
      
      if (currentIndex !== currentSection && currentIndex >= 0 && currentIndex < sections.length) {
        setCurrentSection(currentIndex);
        
        // Update URL without page reload
        const newUrl = `?section=${sections[currentIndex].id}`;
        window.history.pushState({ section: sections[currentIndex].id }, '', newUrl);
      }
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="scroll-container">
        <HeroSection />
        <AboutSection  />
        <FeaturesSection />
        <ContactSection />
        <FooterSection />
      </div>
      
      {/* Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-2 h-2 flex flex-col  transition-all duration-300 ${
              currentSection === index 
                ? 'bg-[#ff9933] scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            title={section.name}
          />
        ))}
      </div>
    </div>
  );
}

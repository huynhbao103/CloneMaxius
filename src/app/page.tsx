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
      
      
      <div className="fixed right-25 top-1/2 transform -translate-y-1/2 z-50 space-y-1">
  {sections.map((section, index) => (
    <div className="flex flex-col items-end group relative" key={section.id}>
      <button
        onClick={() => scrollToSection(section.id)}
        className={`
          h-2 ransition-all duration-300 origin-right cursor-pointer
          ${currentSection === index 
            ? 'w-6 bg-[#ff9933] hover:w-8 shadow-lg' // Active: dài nhất, màu cam, có shadow
            : 'w-2 bg-white hover:w-8 hover:bg-white/80 hover:shadow-md' // Hover: dài ra, có shadow
          }
        `}
        title={section.name}
      />
    </div>
  ))}
</div>



    </div>
  );
}

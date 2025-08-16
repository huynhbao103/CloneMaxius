"use client";

import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourSection from "@/components/FourSection";
import FiveSection from "@/components/FiveSection";

export default function Home() {

  const [currentSection, setCurrentSection] = useState(0);

      const sections = useMemo(() => [
      { id: 'firstPage', name: 'firstPage' },
      { id: 'secondPage', name: 'secondPage' },
      { id: 'thirdPage', name: 'thirdPage' },
      { id: 'fourthPage', name: 'fourthPage' },
      { id: 'fifthPage', name: 'fifthPage' },

    ], []);

  useEffect(() => {
    // Get initial section from URL hash
    const hash = window.location.hash.slice(1) || 'firstPage';
    const sectionIndex = sections.findIndex(s => s.name === hash);
    if (sectionIndex !== -1) {
      setCurrentSection(sectionIndex);
      // Scroll to the section
      const element = document.getElementById(sections[sectionIndex].id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      const currentIndex = Math.round(scrollTop / containerHeight);
      
      if (currentIndex !== currentSection && currentIndex >= 0 && currentIndex < sections.length) {
        setCurrentSection(currentIndex);
        
        // Update URL hash without page reload
        const newUrl = `#${sections[currentIndex].name}`;
        window.history.pushState({ section: sections[currentIndex].name }, '', newUrl);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'firstPage';
      const sectionIndex = sections.findIndex(s => s.name === hash);
      if (sectionIndex !== -1 && sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
        // Scroll to the section
        const element = document.getElementById(sections[sectionIndex].id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      window.addEventListener('hashchange', handleHashChange);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, [currentSection, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to determine navigation dot color based on current section
  const getNavigationDotColor = () => {
    const sectionNames = ['hero', 'about', 'features', 'story', 'contact'];
    const currentSectionName = sectionNames[currentSection];
    
    // All dots same color: black for hero and story, white for others (including contact)
    if (currentSectionName === 'hero' || currentSectionName === 'story') {
      return 'bg-black hover:bg-black/80';
    } else {
      return 'bg-white hover:bg-white/80';
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="scroll-container">
        <FirstSection currentSection={currentSection} />
        <SecondSection currentSection={currentSection} />
        <ThirdSection currentSection={currentSection} />
        <FourSection currentSection={currentSection} />
        <FiveSection currentSection={currentSection} />
      
      </div>
      
      
      <div className="fixed right-25 top-1/2 transform -translate-y-1/2 z-50 space-y-1">
  {sections.map((section, index) => (
    <div className="flex flex-col items-end group relative" key={section.id}>
      <button
        onClick={() => scrollToSection(section.id)}
        className={`
          h-2 transition-all duration-300 origin-right cursor-pointer
          ${currentSection === index 
            ? 'w-6 bg-[#ff9933] hover:w-8 shadow-lg' // Active: dài nhất, màu cam, có shadow
            : `w-2 ${getNavigationDotColor()} hover:w-8 hover:shadow-md` // Hover: dài ra, có shadow
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

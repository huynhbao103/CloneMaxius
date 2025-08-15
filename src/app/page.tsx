"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  useEffect(() => {
    // Page-level effects can go here
  }, []);

  return (
    <div>
      <Header />
      <div className="scroll-container">
        <HeroSection />
        <AboutSection currentSection={1} />
        <FeaturesSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

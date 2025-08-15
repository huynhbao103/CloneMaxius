"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = [
    { id: 'hero', label: { EN: 'Home', KR: '홈' } },
    { id: 'about', label: { EN: 'About', KR: '소개' } },
    { id: 'features', label: { EN: 'Features', KR: '기능' } },
    { id: 'contact', label: { EN: 'Contact', KR: '연락처' } }
  ];

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Header chính - LUÔN ở trên top */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-black/30 backdrop-blur-md border-b border-white/20">
        <div className="p-4 flex justify-between items-center">
          {/* Logo Maxius bên trái */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Image 
                src="/globe.svg" 
                alt="Maxius Logo" 
                width={24} 
                height={24}
                className="text-white"
              />
            </div>
            <div className="text-2xl font-bold text-white">
              <a href="#hero" className="hover:text-blue-300 transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}>Maxius</a>
            </div>
          </div>

          {/* Burger bar bên phải trên */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex gap-2">
              <button 
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${language === 'EN' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}`}
                onClick={() => toggleLanguage()}
              >
                EN
              </button>
              <button 
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${language === 'KR' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}`}
                onClick={() => toggleLanguage()}
              >
                KR
              </button>
            </div>

            {/* Burger button */}
            <button 
              className="w-12 h-12 bg-black/50 rounded-lg flex flex-col justify-center items-center gap-1.5 hover:bg-black/70 transition-all duration-300 group border border-white/20"
              onClick={toggleNav}
            >
              <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-blue-400'}`}></span>
              <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? 'opacity-0' : 'group-hover:bg-blue-400'}`}></span>
              <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-blue-400'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation dots bên phải màn hình - LUÔN ở trên top */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[9999] flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="w-4 h-4 bg-white/80 rounded-full hover:bg-white hover:scale-125 transition-all cursor-pointer shadow-lg border border-white/20"
            title={item.label[language]}
          />
        ))}
      </div>

      {/* Full-screen navbar overlay - LUÔN ở trên top */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm"
              onClick={toggleNav}
            />
            
            {/* Navbar bên phải trượt từ phải sang trái */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] overflow-y-auto navbar-overlay navbar-scroll"
            >
              {/* Header của navbar */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/globe.svg" 
                        alt="Maxius Logo" 
                        width={24} 
                        height={24}
                        className="text-white"
                      />
                    </div>
                    <div className="text-xl font-bold">Maxius</div>
                  </div>
                  <button 
                    onClick={toggleNav}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <span className="text-white text-lg">×</span>
                  </button>
                </div>
              </div>

              {/* Navigation menu */}
              <div className="p-6">
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        toggleNav();
                      }}
                      className="w-full text-left text-lg text-gray-700 hover:text-blue-600 transition-all py-3 px-4 rounded-lg hover:bg-blue-50 border-l-4 border-transparent hover:border-blue-500"
                    >
                      {item.label[language]}
                    </button>
                  ))}
                </nav>

                {/* Additional info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    <p className="mb-2">© 2024 Maxius</p>
                    <p>Innovation & Technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


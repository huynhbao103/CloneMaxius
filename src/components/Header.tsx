'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const [currentSection, setCurrentSection] = useState('hero');

  // Listen to scroll events to detect current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      const currentIndex = Math.round(scrollTop / containerHeight);
      
      const sections = ['hero', 'about', 'features', 'story', 'contact'];
      if (currentIndex >= 0 && currentIndex < sections.length) {
        setCurrentSection(sections[currentIndex]);
      }
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const menuItems = [
    { 
      label: 'Home', 

      href: '#home' 
    },
    {
      label: 'Brochure',
      
      submenu: [
        { label: 'HJS 2224', labelKR: 'HJS 2224', href: 'http://maxius.io/static/media/HJS2224.0c5cf3f7e8107d58642e.pdf' },
        { label: 'TJS 2125G', labelKR: 'TJS 2125G', href: 'http://maxius.io/static/media/TJS%202125G.d68976120a89d298a526.pdf' },
        { label: 'HGS 4024', labelKR: 'HGS 4024', href: 'http://maxius.io/static/media/HGS%204024.a9810b83c228def30ec6.pdf' },
        { label: 'TJS 104S', labelKR: 'TJS 104S', href: 'http://maxius.io/static/media/TJS%20104S.9cd9749b5c199cc9cc94.pdf' },
        { label: 'TJS 212S+', labelKR: 'TJS 212S+', href: 'http://maxius.io/static/media/TJS%20212S+.d3e64f195de5488c4ab1.pdf' },
        { label: 'HSS 2224', labelKR: 'HSS 2224', href: 'http://maxius.io/static/media/HSS2224.52f995c6a8e725ef8131.pdf' },
      ],
    },
    {
      label: 'Proposal',
   
      submenu: [
        { 
          label: 'IPFS Data Center Development & Operation Consulting', 
          labelKR: 'IPFS Data Center Development & Operation Consulting',
          href: 'http://maxius.io/static/media/IPFS%20Data%20Center%20Development&Operation%20Consulting.19157e1a7d274a152169.pdf' 
        },
        { 
          label: 'IPFS Data Center Build Vision', 
          labelKR: 'IPFS Data Center Build Vision',
          href: 'http://maxius.io/static/media/IPFS%20Data%20Center%20Build%20Vison.68960a3a96b70ee008a6.pdf' 
        },
        { 
          label: 'Technology Application', 
          labelKR: 'Technology Application',
          href: 'http://maxius.io/static/media/Technology%20Application.9713a16d749b52a79634.pdf' 
        },
      ],
    },
    { 
      label: 'Contact', 
   
      href: '#contact' 
    },
  ];

  return (
    <>
      <header className="fixed w-full top-0 left-0 right-0 z-[10000] bg-transparent">
        <div className="w-full h-full flex justify-between items-center">
          <motion.div 
            className={`w-full h-full mx-4 sm:mx-8 md:mx-[100px] my-[25px] sm:my-[35px] md:my-[50px] font-bold text-base sm:text-lg md:text-[20px] flex justify-start items-center transition-colors duration-300 ${
              currentSection === 'hero' || currentSection === 'story' ? 'text-black' : 'text-white'
            }`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            MAXIUS
          </motion.div>
          <div className="w-full h-full mr-4 sm:mr-8 md:mr-[100px] flex justify-end items-center">
            <div className="flex flex-col items-center gap-1 sm:gap-2 text-base sm:text-lg md:text-[20px]">
              {/* Animated Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  {/* FiMenu Icon */}
                  <FiMenu 
                    className={`absolute inset-0 transition-all duration-300 ease-in-out stroke-1 ${
                      isOpen ? 'opacity-0 rotate-90 scale-75 text-white' : 'opacity-100 rotate-0 scale-100 transition-colors duration-300 ' + (currentSection === 'hero' || currentSection === 'story' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300')
                    }`}
                    size={48}
                    strokeWidth={1}
                  />
                  {/* FiX Icon */}
                  <FiX 
                    className={`absolute inset-0 transition-all duration-300 ease-in-out stroke-1 ${
                      isOpen ? 'opacity-100 rotate-0 scale-100 text-white' : 'opacity-0 rotate-90 scale-75 text-white'
                    }`}
                    size={48}
                    strokeWidth={1}
                  />
                </div>
              </motion.button>

              {/* Language Switcher */}
              <motion.div 
                className="flex items-center mt-[8px] sm:mt-[10px] text-4xl sm:text-5xl md:text-6xl space-x-1 sm:space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <button
                  onClick={() => setLanguage('EN')}
                  className={`text-lg sm:text-xl md:text-2xl transition-colors mr-[8px] sm:mr-[10px] navbar-text-ultra-thin-force ${
                    isOpen
                      ? language === 'EN' ? 'text-[#ff9933]' : 'text-gray-300 hover:text-[#ff9933]'
                      : language === 'EN' ? 'text-[#ff9933]' : (currentSection === 'hero' || currentSection === 'story' ? 'text-black hover:text-[#ff9933]' : 'text-white hover:text-[#ff9933]')
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('KR')}
                  className={`text-lg sm:text-xl md:text-2xl transition-colors navbar-text-thin ${
                    isOpen
                      ? language === 'KR' ? 'text-[#ff9933]' : 'text-gray-300 hover:text-[#ff9933]'
                      : language === 'KR' ? 'text-[#ff9933]' : (currentSection === 'hero' || currentSection === 'story' ? 'text-black hover:text-[#ff9933]' : 'text-white hover:text-[#ff9933]')
                  }`}
                >
                  KR
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay + Navbar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          <motion.aside
            className="fixed top-0 h-screen w-full sm:w-[400px] md:w-[530px] z-[9999] shadow-2xl overflow-hidden"
            style={{ 
              right: 0,
              backgroundImage: 'url(/Images/navbar.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            
            {/* Menu Items */}
            <div className="relative px-4 sm:px-6 md:px-10 z-20 pt-[100px] sm:pt-[120px] md:pt-[150px] pr-[20px] sm:pr-[30px] md:pr-[50px] pb-[30px] sm:pb-[40px] md:pb-[50px] pl-[16px] sm:pl-[24px] md:pl-[32px]">
              {menuItems.map((item, index) => (
                <div key={index} className="mb-4 sm:mb-5 md:mb-6">
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    className={`flex items-center justify-between w-full text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl transition-colors cursor-pointer navbar-text-thin ${
                      index === 0 ? 'text-[#f93]' : activeSubmenu === item.label ? 'text-[#f93]' : 'text-white'
                    }`}
                    style={{ 
                      background: 'none',
                      border: 'none',
                      padding: '0',
                      textAlign: 'left'
                    }}
                  >
                    <span>
                      {language === 'EN' ? item.label : item.label}
                    </span>
                  </button>
                  {activeSubmenu === item.label && (
                    <div className="mt-1 ml-2 sm:ml-3 md:ml-4">
                      {item.submenu?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-xs sm:text-sm md:text-base px-[8px] sm:px-[10px] pt-[6px] sm:pt-[8px] text-white transition-colors mb-1 cursor-pointer navbar-text-thin"
                        >
                          {language === 'EN' ? subItem.label : subItem.labelKR}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Contact Information */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-10">
              {/* Separator Line */}
              <div className="w-full h-px bg-white mb-6 sm:mb-7 md:mb-8"></div>
              
              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4 text-white/80">
                {/* Address */}
                <div className="text-xs sm:text-sm md:text-[13px] leading-relaxed">
                  <p>{language === 'EN' ? '5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea' : '경기도 안양시 동안구 시민대로327번길 12-30 5층'}</p>
                  <p>Tel 02. 851. 2662 / Fax 02. 851. 2655</p>
                </div>
                
                {/* Map Link */}
                <div className="text-xs sm:text-sm md:text-[13px]">
                  <Link 
                    href="/" 
                    className="text-white/80 hover:text-[#ff9933] transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    View Map
                  </Link>
                </div>
                
                {/* Company Email */}
                <div className="text-xs sm:text-sm md:text-[13px]">
                  <p className='flex flex-col'>
                    Company.{" "}
                    <a href="mailto:support@maxius.io" className="transition-colors">
                      support@maxius.io
                    </a>
                  </p>
                </div>
                
                {/* Technical Support Email */}
                <div className="text-xs sm:text-sm md:text-[13px]">
                  <p className='flex flex-col'>
                    Technical support.{" "}
                    <a href="mailto:support@maxius.io" className="transition-colors">
                      support@maxius.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </>
  );
}
"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionProps } from "../types";
import { useEffect } from "react";

export default function FirstSection({ currentSection }: SectionProps) {
  const { language } = useLanguage();
  const controls = useAnimationControls();

  useEffect(() => {
    if (currentSection === 0) { // Hero section
      controls.set("hidden");
      setTimeout(() => {
        controls.start("visible");
      }, 100);
    }
  }, [currentSection, controls]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section 
      id="section1" 
      className="section min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/Images/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
      
      <motion.div 
        className="relative z-10 container px-2 mt-24 md:mt-32 lg:mt-40 xl:mt-56 2xl:mt-72 text-left bg-opacity-50 rounded-lg max-w-screen-2xl"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-8xl xl:text-[95.5px] font-[900] leading-tight md:leading-[92px] -ml-[5px] min-w-[200px] md:min-w-[358px] pb-[14px] relative text-[#1a2a59]"
        >
          MAX I & US
        </motion.h1>
        
        <div className="flex flex-col max-w-[300px] md:max-w-[415px]">
          <motion.p 
            variants={textVariants}
            className="md:text-[20px] font-[100] leading-[1.41] mt-[10px] max-w-[300px] md:max-w-[415px] text-[#222222]"
          >
            {language === 'EN' ? 'Maxius is the only self-developed' : '맥시우스는 자체 개발한 시스템반도체를'}
          </motion.p>
          
          <motion.p 
            variants={textVariants}
            className="md:text-[20px] font-[100] leading-[1.41] mb-6 sm:mb-8 max-w-[250px] md:max-w-[415px] text-[#222222]"
          >
            {language === 'EN' ? 'semiconductor company that focuses on developing High-Performance Servers. We provide specialized solutions tailored towards different sectors of the IT industry and strive to break into the global market as a leader in server technology.' : 
            '적용하여 고성능 서버를 제조판매하는 회사로 IDC와 IPFS IDC 구축사업과 개발 및 운영 컨설팅 사업을진행하고 있습니다'}
          </motion.p>
        </div>
        
        <motion.p 
          variants={textVariants}
          className="md:text-[20px] font-[100] leading-[1.41] mt-8 md:mt-20 lg:mt-10 xl:mt-12 mb-6 sm:mb-8 max-w-[300px] md:max-w-[450px] text-[#222222]"
        >
          {language === 'EN' ? 'Together, we will be the best in value and speed.' : '우리는 기업가치와 속도에서 최고가 될 것입니다.'}
        </motion.p>
      </motion.div>
    </section>
  );
}
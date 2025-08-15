"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center backgroundImage">
      <div className="container px-4 text-left bg-black bg-opacity-50 rounded-lg max-w-[1912px] ml-[191px]">
        <motion.h1 
          className="text-[95.5px] font-[900] leading-[92px] -ml-[5px] min-w-[358px] pb-[14px] relative text-[#1a2a59]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          MAX I & US
        </motion.h1>
        <motion.p 
          className="text-[20px] font-[200] leading-[1.41] mt-[10px] mb-6 sm:mb-8 max-w-[415px] sm:max-w-2xl text-[#222222]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {language === 'EN' ? 'Maxius is the only self-developed' : '맥시우스는 자체 개발한 시스템반도체를'}
        </motion.p>
        <motion.p 
          className="text-[20px] font-[200] leading-[1.41] mb-6 sm:mb-8 max-w-[415px] sm:max-w-2xl text-[#222222]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {language === 'EN' ? 'semiconductor company that focuses on developing High-Performance Servers. We provide specialized solutions tailored towards different sectors of the IT industry and strive to break into the global market as a leader in server technology.' : '적용하여 고성능 서버를 제조판매하는 회사로 IDC와 IPFS IDC 구축사업과 개발 및 운영 컨설팅 사업을진행하고 있습니다'}
        </motion.p>
        <motion.p 
          className="text-[20px] font-[200] leading-[1.41] mt-[100px] mb-6 sm:mb-8 max-w-[415px] sm:max-w-2xl text-[#222222]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {language === 'EN' ? 'Together, we will be the best in value and speed.' : '우리는 기업가치와 속도에서 최고가 될 것입니다.'}
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container px-4 text-center max-w-6xl">
        <motion.h2 
          className="text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {language === 'EN' ? 'About Maxius' : '맥시우스 소개'}
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-200 mb-6">
              {language === 'EN' ? 'Our Mission' : '우리의 미션'}
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              {language === 'EN' 
                ? 'To revolutionize the semiconductor industry through innovative high-performance server solutions that drive technological advancement and global competitiveness.'
                : '혁신적인 고성능 서버 솔루션을 통해 기술 발전과 글로벌 경쟁력을 주도하여 반도체 산업을 혁신하는 것입니다.'
              }
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {language === 'EN'
                ? 'We are committed to excellence, innovation, and sustainable growth in the ever-evolving technology landscape.'
                : '우리는 끊임없이 진화하는 기술 환경에서 우수성, 혁신, 지속 가능한 성장에 전념하고 있습니다.'
              }
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-semibold text-white mb-6">
              {language === 'EN' ? 'Core Values' : '핵심 가치'}
            </h4>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-3 text-gray-200">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                {language === 'EN' ? 'Innovation & Excellence' : '혁신과 우수성'}
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                {language === 'EN' ? 'Quality & Reliability' : '품질과 신뢰성'}
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                {language === 'EN' ? 'Global Leadership' : '글로벌 리더십'}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function FooterSection() {
  const { language } = useLanguage();

  return (
    <section id="footer" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
      <div className="container px-4 text-center max-w-6xl">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-6xl font-bold text-white mb-8">
            {language === 'EN' ? 'Maxius' : '맥시우스'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {language === 'EN' 
              ? 'Leading the future of semiconductor technology with innovative solutions that power the digital world.'
              : '디지털 세계를 구동하는 혁신적인 솔루션으로 반도체 기술의 미래를 선도합니다.'
            }
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Company Info */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">
              {language === 'EN' ? 'Company' : '회사'}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>News</li>
              <li>Partners</li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-purple-300 mb-6">
              {language === 'EN' ? 'Solutions' : '솔루션'}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>High-Performance Servers</li>
              <li>Data Centers</li>
              <li>Cloud Infrastructure</li>
              <li>AI & Machine Learning</li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-green-300 mb-6">
              {language === 'EN' ? 'Support' : '지원'}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Documentation</li>
              <li>Technical Support</li>
              <li>Training</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Maxius. {language === 'EN' ? 'All rights reserved.' : '모든 권리 보유.'}
            </p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-900">
      <div className="container px-4 text-center max-w-4xl">
        <motion.h2 
          className="text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {language === 'EN' ? 'Contact Us' : '연락처'}
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Contact Information */}
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-blue-200 mb-6">
                {language === 'EN' ? 'Get In Touch' : '연락하기'}
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                {language === 'EN' 
                  ? 'Ready to revolutionize your infrastructure? Let\'s discuss how Maxius can help you achieve your goals.'
                  : '인프라를 혁신할 준비가 되셨나요? 맥시우스가 목표 달성에 어떻게 도움을 줄 수 있는지 논의해 보겠습니다.'
                }
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-200">
                <span className="text-2xl">📧</span>
                <span className="text-lg">info@maxius.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <span className="text-2xl">📱</span>
                <span className="text-lg">+82-2-1234-5678</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <span className="text-2xl">📍</span>
                <span className="text-lg">Seoul, South Korea</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-semibold text-white mb-6">
              {language === 'EN' ? 'Send Message' : '메시지 보내기'}
            </h4>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder={language === 'EN' ? 'Your Name' : '이름'}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="email" 
                placeholder={language === 'EN' ? 'Your Email' : '이메일'}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
              />
              <textarea 
                rows={4}
                placeholder={language === 'EN' ? 'Your Message' : '메시지'}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {language === 'EN' ? 'Send Message' : '메시지 보내기'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

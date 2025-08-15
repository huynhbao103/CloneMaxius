"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function FeaturesSection() {
  const { language } = useLanguage();

  const features = [
    {
      icon: "🚀",
      title: { EN: "High-Performance Servers", KR: "고성능 서버" },
      description: { 
        EN: "Cutting-edge semiconductor technology for maximum performance and efficiency",
        KR: "최고의 성능과 효율성을 위한 최첨단 반도체 기술"
      }
    },
    {
      icon: "🌐",
      title: { EN: "Global Solutions", KR: "글로벌 솔루션" },
      description: { 
        EN: "Worldwide deployment and support for enterprise-level infrastructure",
        KR: "기업 수준의 인프라를 위한 전 세계 배포 및 지원"
      }
    },
    {
      icon: "🔧",
      title: { EN: "Custom Development", KR: "맞춤형 개발" },
      description: { 
        EN: "Tailored solutions for specific industry requirements and challenges",
        KR: "특정 산업 요구사항과 과제에 맞춘 맞춤형 솔루션"
      }
    },
    {
      icon: "📊",
      title: { EN: "Advanced Analytics", KR: "고급 분석" },
      description: { 
        EN: "Real-time monitoring and predictive maintenance capabilities",
        KR: "실시간 모니터링 및 예측 유지보수 기능"
      }
    }
  ];

  return (
    <section id="features" className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="container px-4 text-center max-w-7xl">
        <motion.h2 
          className="text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {language === 'EN' ? 'Our Features' : '주요 기능'}
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title[language]}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description[language]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

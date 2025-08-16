'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Header from '@/components/Header';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="h-screen max-h-screen overflow-hidden">
      {/* Header */}
      <Header/>
      
      {/* Contact Us Title - Centered below header */}
      <div className="text-4xl font-bold text-center pt-32 lg:pt-16 pb-16">
        Contact Us
      </div>

      {/* Main Content - Full remaining screen height */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-150px)]">
        {/* Left Section - Map (Full height) */}
        <motion.div 
          className="w-full lg:w-1/2 h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3169.5988687754716!2d126.9678097!3d37.3993176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f4218184263%3A0x34b10899e72086!2z66el7Iuc7Jqw7Iqk!5e0!3m2!1sko!2s!4v1645603511540!5m2!1sko!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MAXIUS Location"
            className="w-full h-full"
          />
        </motion.div>

        {/* Right Section - Contact Information */}
        <motion.div 
          className="w-full lg:w-1/2 bg-nav text-white p-6 sm:p-8 md:p-12 lg:p-14 h-full overflow-y-auto relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 md:px-10">
            {/* Address - Keep as is */}
            <div className="space-y-2 p-14 max-w-1/2">
              <div className="space-y-1">
                <p className="text-sm sm:text-base md:text-[13px] leading-relaxed">
                  {language === 'EN' 
                    ? '5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea'
                    : '경기도 안양시 동안구 시민대로327번길 12-30 5층'
                  }
                </p>
                <p className="text-sm sm:text-base md:text-[13px]">
                  Tel 02. 851. 2662
                </p>
                <p className="text-sm sm:text-base md:text-[13px]">
                  Fax 02. 851. 2655
                </p>
              </div>
            </div>
          </div>

          {/* Company Email and Technical Support - Positioned at bottom right */}
          <div className="absolute bottom-0 right-0  sm:p-8 md:p-12 lg:p-32 max-w-full p-14">
            {/* Company Email */}
            <div className="space-y-0.1 mb-4">
              <div className="title text-sm sm:text-base text-gray-300 md:text-[12px] text-right">
                 Company
              </div>
              <a 
                href="mailto:support@maxius.io" 
                className="text-sm sm:text-base md:text-lg text-white cursor-pointer transition-colors duration-300"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  lineHeight: '1.18',
                  fontSize: '14px',
                  fontWeight: 300,
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  msUserSelect: 'none'
                }}
              >
                support@maxius.io
              </a>
            </div>

            {/* Technical Support Email */}
            <div className="space-y-0.1">
              <div className="title text-sm sm:text-base text-gray-300 text-right md:text-[12px]">
                Technical support
              </div>
              <a 
                href="mailto:support@maxius.io" 
                className="text-sm sm:text-base md:text-lg text-white cursor-pointer transition-colors duration-300"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  lineHeight: '1.18',
                  fontSize: '14px',
                  fontWeight: 300,
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  msUserSelect: 'none'
                }}
              >
                support@maxius.io
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
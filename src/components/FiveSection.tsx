"use client";

import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { SectionProps } from "../types";

const FiveSection = ({ currentSection }: SectionProps) => {
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (currentSection === 4) {
      controls.set("hidden");
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [currentSection, controls]);

  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariant = {
    hidden: {
      opacity: 0,
      y: 50,
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

  const contentVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section 
      id="section5" 
      className="min-h-screen bg-contact relative overflow-hidden"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/Images/contact-bg.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-end">
        <div className="w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 mb-16 sm:mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={parentVariants}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40"
          >
            {/* Text Content - Bottom Left */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
                             {/* Company Section */}
               <motion.div variants={titleVariant} className="space-y-2">
                 <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-bold text-white">
                   Company.
                 </h3>
                 <motion.div variants={contentVariant}>
                   <a 
                     href="mailto:support@maxius.io"
                     className="text-xs sm:text-sm md:text-[14px] text-white/80 hover:text-white transition-all duration-300 flex items-center px-2 justify-between group relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded hover:bg-gray-500"
                   >
                     <span style={{fontFamily: 'Montserrat-ExtraLight'}}>support@maxius.io</span>
                     <span className="text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">✉</span>
                   </a>
                 </motion.div>
               </motion.div>

                               {/* Warranty Section */}
                <motion.div variants={titleVariant} className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-bold text-white">
                    Warranty.
                  </h3>
                  <motion.div variants={contentVariant}>
                    <a 
                      href="#"
                      className="text-xs sm:text-sm md:text-[14px] text-white/80 hover:text-white transition-all duration-300 flex items-center justify-between group relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 rounded hover:bg-gray-500"
                    >
                      <span style={{fontFamily: 'Montserrat-ExtraLight'}}>Learn more &gt;</span>
                    </a>
                  </motion.div>
                </motion.div>

                {/* Technical Support Section */}
                <motion.div variants={titleVariant} className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-bold text-white">
                    Technical support.
                  </h3>
                  <motion.div variants={contentVariant}>
                    <a 
                      href="mailto:support@maxius.io"
                      className="text-xs sm:text-sm md:text-[14px] text-white/80 hover:text-white transition-all duration-300 flex items-center justify-between group relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 rounded hover:bg-gray-500"
                    >
                      <span style={{fontFamily: 'Montserrat-ExtraLight'}}>support@maxius.io</span>
                      <span className="text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">✉</span>
                    </a>
                  </motion.div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiveSection;

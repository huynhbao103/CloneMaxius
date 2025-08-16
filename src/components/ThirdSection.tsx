import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { SectionProps } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

const ThirdSection: React.FC<SectionProps> = ({ currentSection }) => {
  const { language } = useLanguage();
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (currentSection === 2) {
      // Reset animation về trạng thái ẩn
      controls.set("hidden");
      // Chạy animation sau 100ms
      setTimeout(() => {
        controls.start("visible");
      }, 100);
    }
  }, [currentSection, controls]);

  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
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


  return (
    <section id="section3" className="relative h-screen bg-features overflow-hidden">
      <div className="absolute inset-0 flex items-center lg:items-center ">
        <div className="flex flex-col lg:flex-row h-full w-full max-w-screen-2xl mx-auto overflow-y-auto lg:overflow-hidden">
          <motion.div
            animate={controls}
            variants={parentVariants}
            className="flex flex-col lg:flex-row h-full w-full"
          >
            {/* Product */}
            <div className="flex-1 h-auto lg:h-full px-8 relative transition-all duration-300 ease-in-out hover:flex-[2] group border-b lg:border-b-0 lg:border-r border-white/32">
              <div className="pt-[15vh] lg:pt-[30vh] pb-8 lg:pb-0">
                <motion.h3
                  variants={titleVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-[5vh] w-full break-keep"
                >
                  Product
                </motion.h3>
                  {language === 'EN' ? (
                    <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <span className="text-[#f93]">High-Performance Server</span>{" "}
                  with an extensive selection of serviceable capabilities
                  <br />
                  Building <span className="text-[#f93]">IDC</span>; incorporating
                  the latest <span className="text-[#f93]">Storage</span>{" "}
                  technology applicable to various I/O devices
                  <br />
                  Various{" "}
                  <span className="text-[#f93]">Blockchain Solutions</span>,
                  including IPFS.
                  <br />
                  <br />
                  Maxius will continue to develop as a company in the global
                  market by supplying a variety of products and solutions.
                </p>):(
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                    다양한 영역 에서 응용 가능한 <span className="text-[#f93]">High-Performance Server</span>{" "}
                    <br />
                    각종 I/O 장치에 적용 가능한 <span className="text-[#f93]">Storage</span>{" "}
                    <br />
                    최신 기술이 접목된 <span className="text-[#f93]">IDC 구축</span>
                    <br />
                    IPFS등 다양한 <span className="text-[#f93]">Blockchain Solution </span>
                    <br />
                    <br />
                    Maxius 는 다양한 제품 과 Solution 을 
                    <br />
                    공급 하여 세계 시장 속 에서 지속 성장 하는
                    <br />
                    기업 으로 발전해 나가겠습니다 .
                  </p>
                )}
              </div>
            </div>

            {/* Technology */}
            <div className="flex-1 h-auto lg:h-full px-8 relative border-b lg:border-b-0 lg:border-l border-white/32 transition-all duration-300 ease-in-out hover:flex-[2] group">
              <div className="pt-[15vh] lg:pt-[30vh] pb-8 lg:pb-0">
                <motion.h3
                  variants={titleVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-[5vh] w-full break-keep"
                >
                  Technology
                </motion.h3>
                {language === 'EN' ? (
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                   Based on more than 20 years of research know-how
                   <br />
                   and technology, we are the only company in Korea
                   <br />
                   that makes HPC servers{" "}
                   <span className="text-[#f93]">using self-developed system</span>
                   <br />
                   semiconductors and{" "}
                   <span className="text-[#f93]">
                     provides solutions specialized
                   </span>
                   <br />
                   in{" "}
                   <span className="text-[#f93]">
                     the intelligent data center
                   </span>{" "}
                   in the IT industry.
                   <br />
                   <br />
                   With our services, Maxius strives to supply
                   <br />
                   differentiated products and solutions.
                 </p>
                ):(
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                    <p >20년 이상의 연구 노하우와 기술력을 기반으로 
                      <br />
                      국내 유일의 <span className="text-[#f93]">자체개발 시스템반도체</span> 를 이용하여
                      <br />
                      HPC 서버를 만드는 회사로 <span className="text-[#f93]">
                        지능형 데이터 센터</span>와
                        <br />IT산업분야에
                         <span className="text-[#f93]">
                          특화된 솔루션</span>을 제공하고 있습니다.
                          <br />
                          <br />
                          Maxius는 20년 이상 축적된 높은 기술력으로
                          <br />
                          서비스로 차별된 제품과 Solution을 공급하기
                          <br />
                          위하여 노력하고 있습니다.</p>
                  </p>
                )}
              </div>
            </div>

            {/* Application */}
            <div className="flex-1 h-auto lg:h-full px-8 relative border-b lg:border-b-0 lg:border-l border-white/32 transition-all duration-300 ease-in-out hover:flex-[2] group">
              <div className="pt-[15vh] lg:pt-[30vh] pb-8 lg:pb-0">
                <motion.h3
                  variants={titleVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-[5vh] w-full break-keep"
                >
                  Application
                </motion.h3>
                {language === 'EN' ? (
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                   Maxius&apos; miscellaneous products are used for{" "}
                   <span className="text-[#f93]">AI/genetic analysis,</span>
                   <br />
                   <span className="text-[#f93]">
                     edge computing, IDC centers,
                   </span>{" "}
                   as well as various solutions
                   <br />
                   used for vast{" "}
                   <span className="text-[#f93]">data analysis,</span>{" "}
                   <span className="text-[#f93]">distributed</span>
                   <br />
                   <span className="text-[#f93]">
                     processing functions and IPFS IDC
                   </span>
                   , etc.
                   <br />
                   <br />
                   Maxius will supply serviceable products and solutions to
                   <br />
                   varying fields through R&D and communication.
                 </p>
                ):(
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                    <p>Maxius의 각종 제품은 <span className="text-[#f93]">인공지능/유전체분석,
                      <br />
                      엣지컴퓨팅, IDC센터</span> 등에 활용되고 있으며<br />
                    다양한 Solution은 방대한 <span className="text-[#f93]">데이터분석</span> 및 <br />
                    <span className="text-[#f93]">분산처리기능, IPFS IDC</span> 등에 활용되고 있습니다.<br />
                    <br />
                    Maxius는 연구개발과 Communication을 통하여 <br />
                    다양한 분야에 유용한 제품 및 Solution을 <br />
                    공급하도록 하겠습니다.</p>
                  </p>
                )}
              </div>
            </div>

            {/* Blockchain */}
            <div className="flex-1 h-auto lg:h-full px-8 relative border-b lg:border-b-0 lg:border-l border-white/32 transition-all duration-300 ease-in-out hover:flex-[2] group">
              <div className="pt-[15vh] lg:pt-[30vh] pb-8 lg:pb-0">
                <motion.h3
                  variants={titleVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-[#f93] mb-[5vh] w-full break-keep"
                >
                  Blockchain
                </motion.h3>
                {language === 'EN' ? (
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                   <span className="text-[#f93]">storage and service</span>{" "}
                   utilized in Metaverse
                   <br />
                   <span className="text-[#f93]">
                     IPFS Storage and Application Services
                   </span>{" "}
                   in Web3.0
                   <br />
                   <br />
                   Maxius provides both H/W and S/W, which are optimized for
                   decentralized storage to match customer needs and create the
                   best added value.
                 </p>
                ):(
                  <p className="text-sm md:text-base font-extralight leading-[27px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                    <p>메타버스에 활용되는 <span className="text-[#f93]">스토리지 및 서비스</span>
                      <br />
                      Web3.0의 <span className="text-[#f93]">IPFS 스토리지 및 응용서비스</span>
                      <br />
                      <br />
                      Maxius는 탈중앙화된 스토리지에 최적화된 <br />
                      H/W와 S/W를 통합 제공하여 고객의 니즈를 <br />
                      맞추고 최고의 고부가가치를 창출하겠습니다.
                  </p>
                  </p>
                )}
              </div>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;

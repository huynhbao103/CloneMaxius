"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { SectionProps } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

export default function FourSection({ currentSection }: SectionProps) {
  const { language } = useLanguage();
  const controls = useAnimationControls();

  useEffect(() => {
    if (currentSection === 3) {
      controls.set("hidden");
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [currentSection, controls]);

  const titleVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const contentVariant = {
    hidden: {
      opacity: 0,
      x: -200,
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
    <section id="section4" className="flex items-center justify-center min-h-screen bg-white pt-20 lg:pt-0">
      <div className="w-full flex flex-col">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={titleVariant}
          className="title text-4xl sm:text-6xl md:text-8xl lg:text-[98.5px] font-bold text-black text-center py-4 sm:py-6 md:py-8 shrink-0"
        >
          STORY
        </motion.h1>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariant}
          className="carousel-container flex-1 overflow-x-auto lg:overflow-y-auto px-4 pb-8 scrollbar-hide"
        >
          <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8 max-w-none lg:max-w-7xl mx-auto lg:mx-auto">
            {/* History Column */}
            <div className="w-[280px] sm:w-[320px] lg:w-[330px] flex-shrink-0 lg:mx-auto">
              <div className="item-history border-r border-gray-500 pr-4 lg:pr-8">
                <div className="year mb-3 lg:mb-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 ml-2 lg:ml-3">History</h3>
                </div>
                <div className="h-[280px] sm:h-[300px] lg:h-[320px] overflow-y-auto">
                  <div className="item-box space-y-4 lg:space-y-6">
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2021</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            맥시우스로 사명 변경
                            <br />
                            제1차 범정부 정보자원 통합구축 HW3
                          </>
                        ) : (
                          <>
                            Rebrand the Company name to Maxius
                            <br />
                            1st Pan-Governmental Information Resource Integration HW3
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2020</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            인공지능기반 적응형 보안시스템 2차 구축
                            <br />
                            SPC 인증: 스토리지 세계 TOP5 순위 기록
                          </>
                        ) : (
                          <>
                            2nd construction of AI-based adaptive security system
                            <br />
                            SPC Certification: TOP 5 Rank record in the world of storage
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2019</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            유전체 분석 시스템 반도체 개발 및 고성능
                            스토리지 개발
                          </>
                        ) : (
                          <>
                            Development of Genome Analysis System Semiconductor and HPC
                            Storage
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2018</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            고성능 시스템 반도체를 이용한 소형슈퍼컴퓨터 개발
                            <br />
                            국제공인 TPC 인증
                          </>
                        ) : (
                          <>
                            Development of small supercomputers using high performance
                            system semiconductors
                            <br />
                            Certified by International TPC
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2017</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            대기전력 저감 우수제품 확인(한국에너지공단)
                            <br />
                            기술혁신대상
                          </>
                        ) : (
                          <>
                            Confirmation of excellent product for reducing standby power
                            (Korea Energy Agency)
                            <br />
                            Technology Innovation Award
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2016</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            방송통신기자재등의 적합등록 필증 획득(국립전파연구원)
                            <br />
                            (주)KT ds MOU 체결
                          </>
                        ) : (
                          <>
                            Obtain Certificate of Conformity registered for broadcasting
                            and communication equipment (National Radio Research
                            Institute)
                            <br />
                            Sign MOU Agreement with KT ds
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2015</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            IT 융합기업인상 수상(산업통상자원부)
                            <br />
                            한국특허기술상 대상(세종대왕상) 수상
                          </>
                        ) : (
                          <>
                            Awarded IT Convergence Entrepreneur
                            <br />
                            Awarded Korean Patent Technology Award (Sejong the Great
                            Award)
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">2010</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            국내 최초 PCI Interface Type의 Storage Board SSD
                            제품 상용화 개발 성공
                          </>
                        ) : (
                          <>
                            Internationally develop the first PCI Interface Type storage
                            board SSD product
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">1996</h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? '회사 설립' : 'Company established'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners Column */}
            <div className="w-[280px] sm:w-[320px] lg:w-[330px] flex-shrink-0 lg:mx-auto">
              <div className="item-history border-r border-gray-500 pr-4 lg:pr-8">
                <div className="year mb-4 lg:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 ml-2 lg:ml-3">Partners</h3>
                </div>
                <div className="h-[280px] sm:h-[300px] lg:h-[320px] overflow-y-auto">
                  <div className="item-box space-y-4 lg:space-y-6">
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '1000여개 정부 관련 기업' : '1000 corporate Partners'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            청와대, 한국수력원자력, 대한민국 국방부, 군포시,
                            <br />
                            한국농수산식품유통공사, 전라남도, 영상물등급위원회
                            <br />
                            제주국제자유도시개발센터, 한국주택금융공사,
                            <br />
                            경기지방경찰청, 정부통합전산센터, KPIC, 대법원,
                            <br />
                            농림수산식품기술기획평가원, LH, 국립국악원,
                            <br />
                            근로복지공단 등
                          </>
                        ) : (
                          <>
                            Cheongwadae, KHNP, Ministry of National Defense,
                            <br />
                            Gunpo city, Korea Agro-Fisheries & Food Trade Corporation,
                            JeollaNamdo, KMRB, JDC,
                            <br />
                            Korea Housing Finance Corporation,
                            <br />
                            Gyeonggi Provincial Police Agency, NCIS, KPIC,
                            <br />
                            Supreme Court of Korea, IPET, LH, National Gugak Center,
                            <br />
                            Korea Workers Compensation & Welfare Service
                            <span className="font-semibold">
                              {" "}
                              More than 1,000 government-related companies, including
                              them
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '250여개 교육 관련 기업' : '250 Additional corporate Partners'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            카이스트한국과학기술원, 서울대학교, 동국대학교,
                            <br />
                            부산대학교, 인천대학교, 한국전자통신연구원,
                            <br />
                            서영대학교, 한국정보통신기술협회, 선문대학교,
                            <br />
                            남서울대학교, 충남대학교, 가천대학교,
                            <br />
                            명지대학교 등
                          </>
                        ) : (
                          <>
                            KAIST, Seoul National University, Dongguk University, Pusan
                            National University, Incheon National University, ETRI,
                            Seoyeong University,
                            <br />
                            Telecommunications Technology Association,
                            <br />
                            Sunmoon University, Namseoul University,
                            <br />
                            Chungnam National University, Gachon University,
                            <br />
                            Myongji University
                            <span className="font-semibold">
                              More than 250 companies related to education, including
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '120여개 제조 관련 기업' : '120 Manufacturing Partners'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            삼성토탈, 삼성SDS, LS산전, 한화시스템,
                            <br />
                            신테카바이오 등
                          </>
                        ) : (
                          <>
                            Samsung Total, Samsung SDS, LS Industrial Systems, Hanwha Systems,
                            <br />
                            Shintech Bio, etc.
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '350여개 방송 관련 기업' : '350 Broadcasting Partners'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            중앙일보씨앤씨, DBS동아방송, KCTV, 전자신문,
                            <br />
                            더디지털타임즈 등
                          </>
                        ) : (
                          <>
                            JoongAng Ilbo C&C, DBS Dong-A Broadcasting, KCTV, Electronic Times,
                            <br />
                            The Digital Times, etc.
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '50여개 금융, 통신 관련 기업' : '50 Financial & Telecom Partners'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            현대증권, 삼성화재, MG새마을금고, KDB산업은행,
                            <br />
                            SGI서울보증, 한국수출입은행, IBK기업은행,
                            <br />
                            미래에셋증권, 미래에셋생명, 미래에셋대우,
                            <br />
                            NH농협생명, KB증권, SK텔레콤, SK브로드밴드,
                            <br />
                            SK텔링크, KTds 등
                          </>
                        ) : (
                          <>
                            Hyundai Securities, Samsung Fire & Marine Insurance, MG Saemaul Geumgo, KDB Industrial Bank,
                            <br />
                            SGI Seoul Guarantee, Korea Export-Import Bank, IBK Industrial Bank,
                            <br />
                            Mirae Asset Securities, Mirae Asset Life Insurance, Mirae Asset Daewoo,
                            <br />
                            NH Nonghyup Life Insurance, KB Securities, SK Telecom, SK Broadband,
                            <br />
                            SK Telink, KT ds, etc.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patents Column */}
            <div className="w-[280px] sm:w-[320px] lg:w-[330px] flex-shrink-0 lg:mx-auto">
              <div className="item-history border-r border-gray-500 pr-4 lg:pr-8">
                <div className="year mb-4 lg:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 ml-2 lg:ml-3">Patents</h3>
                </div>
                <div className="h-[280px] sm:h-[300px] lg:h-[320px] overflow-y-auto">
                  <div className="item-box space-y-4 lg:space-y-6">
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '고속데이터 입출력 반도체 칩' : 'High-speed data I/O semiconductor Chip'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            FPGA/ CPLD/ ASIC 설계 제작 기술, TPU개발 능력 보유
                          </>
                        ) : (
                          <>
                            FPGA/CPLD/ASIC design and manufacturing technology, possess
                            TPU development capability
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '지능형 패턴분석 알고리즘' : 'Intelligent Pattern Analysis Algorithm'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            데이터 패턴 분석에 따른 Hybrid 캐시 알고리즘
                          </>
                        ) : (
                          <>
                            Hybrid Cache algorithm that follows data pattern analysis
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? 'OS 및 SSD 최적화' : 'OS and SSD optimization'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            OS에 따른 디바이스 드라이버 최적화 기술,
                            <br />
                            저장장치 자원 관리 기술
                          </>
                        ) : (
                          <>
                            Device Driver optimization technology differing for each OS,
                            storage resource management technology
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards Column */}
            <div className="w-[280px] sm:w-[320px] lg:w-[330px] flex-shrink-0 lg:mx-auto">
              <div className="item-history pr-4 lg:pr-8">
                <div className="year mb-4 lg:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 ml-2 lg:ml-3">Awards</h3>
                </div>
                <div className="h-[280px] sm:h-[300px] lg:h-[320px] overflow-y-auto">
                  <div className="item-box space-y-4 lg:space-y-6">
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '대한민국 특허 대상  세종대왕상 수상' : 'Awarded the Sejong Award at the KR Patent Awards'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            뛰어난 성능과 에너지 절약 기술로 국내 최고
                            <br />
                            특허 상 수상
                          </>
                        ) : (
                          <>
                            Received the highest domestic patent award for outstanding
                            performance and energy-saving technology
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '대한민국 우수제품지정증서 인증' : 'Certified by Korea Excellent Product Designation'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            고성능 시스템 품질을 인정 받은 국내 유일의
                            <br />
                            서버분야 우수조달 등록제품 인증
                          </>
                        ) : (
                          <>
                            Certification of the only excellent procurement registered
                            product in Korea in the server field that has been
                            recognized for its high-performance system quality
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '대한민국 녹색기술인증서 인증' : 'Korean Green Technology Certificate'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            최고 성능 및 최대 효율을 자랑하는 환경친화적
                            <br />
                            기술 보유
                          </>
                        ) : (
                          <>
                            Possessing eco-friendly technology that ensures the highest
                            performance and maximum efficiency
                          </>
                        )}
                      </p>
                    </div>
                    <div className="pl-2 lg:pl-4">
                      <h4 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-black mb-1 lg:mb-2">
                        {language === 'KR' ? '대한민국 TPC-C 인증' : 'Korea TPC-C Certification'}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-[13px] text-gray-700 leading-relaxed">
                        {language === 'KR' ? (
                          <>
                            국내 최초 국제 공인 TPC-C인증 받아 인메모리 DB를
                            <br />
                            탑재한 인공지능 고성능 컴퓨팅 기술과 성능을 인정
                          </>
                        ) : (
                          <>
                            Certified for AI high-performance computing technology and
                            performance equipped with an in-memory DB by receiving the
                            first internationally recognized TPC-C
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

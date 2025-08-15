import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface SectionProps {
    currentSection: number;
}

const AboutSection: React.FC<SectionProps> = ({ currentSection }) => {
    const controls = useAnimationControls();

    useEffect(() => {
        if (currentSection === 1) {
            controls.set("hidden");
            setTimeout(() => {
                controls.start("visible");
            }, 500);
        }
    }, [currentSection, controls]);

    const textVariants = {
        hidden: {
            opacity: 0,
            x: "-100vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/Images/about.png)',
            }}
        >
                         <div className="relative z-10 mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
                 <motion.div
                     className="text-start"
                     initial="hidden"
                     animate={controls}
                     variants={textVariants}
                 >
                        <p className=" text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-[50.5px] max-w-6xl font-bold text-white cursor-text transition-all  tracking-[0.02em] leading-[1.2]  whitespace-pre-wrap break-all  " >
                        1. <span className="text-[#ff9933] ">Self-produced</span> semiconductors{" "}
                        2. Production and Sales of <span className="text-[#ff9933] ">H</span>igh-
                        <span className="text-[#ff9933]">P</span>erformance{" "}
                        <span className="text-[#ff9933]">S</span>ervers with self-manufactured semiconductors{" "}
                        3. Construction of operative  <span className="text-[#ff9933]">Block</span>
                        <span className="text-[#ff9933]"> chain IDC</span> based on high-performance servers{" "}
                        4. Establish solution relating to Blockchain{" "}
                        <span className="text-[#ff9933]">(IPFS)</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
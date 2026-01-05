import React from "react";
import { motion } from "framer-motion";
import BgLightness from "../assets/background-blob-service-1.png";
import DivPng1 from "../assets/div.png";
import DivPng2 from "../assets/exchange-screens-new.png";
import DivLight from "../assets/divLight.png";
import DivGrid from "../assets/grid.png";
import LearnMoreBtn from "./LearnMoreBtn";
import DecorativeGradients from "./DecorativeGradients";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const Section3 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="Section3 relative flex flex-col items-center w-full mx-auto py-20 text-white z-10 lg:max-w-[1056px]"
    >
      {/* Background Blob (soft floating animation) */}
      <motion.img
        src={BgLightness}
        alt="Background Light"
        className="absolute z-1 w-[2768px] h-[2575px] -top-150 -left-60 md:-left-100 object-cover object-center blur-3xl"
        loading="lazy"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        variants={fadeUp}
        className="Main_Text flex flex-col items-center gap-10 px-6 sm:px-8 text-center sm:w-[620px] z-50"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[62px] md:leading-[78px]">
          Crypto Market Making
        </h1>
        <p className="text-[#E5E5E5] leading-8">
          We are a global crypto liquidity provider and algorithmic market maker.
          We trade digital assets listed on Centralized Exchanges in over 15
          countries worldwide.
        </p>
      </motion.div>

      {/* Subsection 1 */}
      <motion.div
        className="SubSection1 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-10 px-6 sm:px-10 pt-30 z-50"
        variants={fadeUp}
      >
        <motion.div
          variants={fadeLeft}
          className="left flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:w-100"
        >
          <h2 className="text-4xl py-3">
            Market Making for Crypto Projects
          </h2>
          <h4 className="text-xl font-bold leading-7">
            Accelerate your token’s journey by boosting its liquidity
          </h4>
          <p className="text-[#E5E5E5] text-xl font-normal leading-8">
            We invest in building long-term, sustainable relationships and
            support our projects in their growth journey with our services,
            industry expertise and network.
          </p>
          <LearnMoreBtn />
        </motion.div>

        <motion.img
          variants={fadeRight}
          src={DivPng1}
          alt="Crypto Project"
          className="Right mx-auto object-cover object-center"
          loading="lazy"
        />
      </motion.div>

      {/* Subsection 2 */}
      <motion.div
        className="SubSection2 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full gap-30 sm:gap-40 md:gap-50 px-6 sm:px-10 pt-30 z-50"
        variants={fadeUp}
      >
        {/* Right Image Stack */}
        <motion.div
          variants={fadeRight}
          className="Right relative flex justify-center items-center"
        >
          <div className="relative w-fit mx-auto z-20">
            <img
              src={DivGrid}
              alt="Grid Background"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full sm:w-[120%] opacity-80 z-10"
              loading="lazy"
            />
            <img
              src={DivLight}
              alt="Light Overlay"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[150%] opacity-80 z-10"
              loading="lazy"
            />
            <img
              src={DivPng2}
              alt="Main Dashboard"
              className="relative w-full max-w-[500px] object-cover object-center z-20"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Left Text */}
        <motion.div
          variants={fadeLeft}
          className="left flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:w-120"
        >
          <h2 className="text-4xl py-3">
            Market Making for Crypto Exchanges
          </h2>
          <h4 className="text-xl font-bold leading-7">
            Attract more traders and projects with deep order books & liquidity
          </h4>
          <p className="text-[#E5E5E5] text-xl font-normal leading-8">
            Our world-class market making services are proven to help local and
            emerging exchanges win traders and gain market-leading positions of
            up to 90% market dominance.
          </p>
          <LearnMoreBtn />
        </motion.div>
      </motion.div>
      <DecorativeGradients/>
    </motion.section>
  );
};

export default Section3;

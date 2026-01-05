import React from "react";
import { motion } from "framer-motion";
import DecorativeGradients from "./DecorativeGradients";
import TouchBtn from "./TouchBtn";

const HeroSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: "1.2" }}
      variants={container}
      className="Hero_Section flex flex-col items-center justify-center text-center font-[Inter] px-6"
    >
      {/* Heading */}
      <motion.div
        variants={container}
        className="Hero_Heading flex flex-col items-center justify-center gap-6 pt-20 pb-10 whitespace-nowrap leading-[5vw] text-[12vw] sm:text-6xl md:text-7xl"
      >
        <motion.h1 variants={fadeUp}>Balancing</motion.h1>
        <motion.h1 variants={fadeUp}>Crypto Markets</motion.h1>
      </motion.div>

      {/* Paragraph */}
      <motion.div
        variants={fadeUp}
        className="Hero_Para max-w-[500px] text-center"
      >
        <p className="text-[#E5E5E5] text-lg leading-8">
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        className="Button"
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 120, damping: 8 }}
      >
        <TouchBtn />
      </motion.div>

      {/* Spacer for large screens */}
      <div className="hidden 2xl:flex h-[15rem] w-full"></div>
      <DecorativeGradients />
    </motion.section>
  );
};

export default HeroSection;

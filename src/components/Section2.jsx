import React from "react";
import { motion } from "framer-motion";
import DecorativeGradients from "./DecorativeGradients";

const gradientBorder =
  "[border-image-source:linear-gradient(to_bottom_right,#665DCD,#5FA4E6,#D2AB67)] [border-image-slice:1]";

const statsTop = [
  {
    value: "~$100 billion",
    text: "cumulative trading \n volume to date",
    className: `sm:border-b-[2px] sm:border-r-[2px]`,
  },
  {
    value: "0.8%",
    text: "of the global crypto \n spot trading volume",
    gradient: true,
    className: `sm:border-b-[2px] lg:border-r-[2px]`,
  },
  {
    value: "~30",
    text: "Gravity Teammates \n (& growing)",
    className: `sm:border-b-[2px] sm:border-r-[2px]`,
  },
  {
    value: "25+",
    text: "leading global and \n local crypto exchanges",
    className: `sm:border-b-[2px]`,
  },
];

const statsBottom = [
  {
    value: "2017",
    text: "start, crypto-natives",
    className: `sm:border-r-[2px] sm:border-b-[2px] lg:border-b-0`,
  },
  {
    value: "1,200+",
    text: "crypto-asset pairs",
    className: `lg:border-r-[2px] sm:border-b-[2px] lg:border-b-0`,
  },
  {
    value: "24/7",
    text: "liquidity",
    className: `sm:border-r-[2px] sm:border-b-[2px] lg:border-b-0`,
  },
  {
    value: "5 billion+",
    text: "trades done to date",
    className: `sm:border-b-[2px] lg:border-b-0`,
  },
];

// Framer Motion Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

const Section2 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="text-white flex flex-col py-10 px-2 justify-center items-center"
    >
      {/* Title + Paragraph */}
      <motion.div
        variants={fadeUp}
        className="flex justify-center items-center flex-col py-[4rem] gap-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-center font-[500] leading-[4.8rem] text-[3.5rem]"
        >
          About Gravity Team
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="text-[#e5e5e5] text-[1.25rem] max-w-[38rem] leading-[1.875rem] text-center"
        >
          <p>
            At Gravity Team, we are on the mission to balance the supply and
            demand across crypto markets worldwide. We are a crypto native
            market maker founded by traders, developers, and innovators who are
            strong believers and supporters of the future of decentralization
            and digital assets.
          </p>
        </motion.div>
      </motion.div>

      {/* Top Stats Row */}
      <motion.div
        variants={container}
        className="w-full max-w-[1056px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white font-['Inter']"
      >
        {statsTop.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`flex flex-col items-center text-center border-transparent p-4 ${gradientBorder} ${item.className} 
              ${
                item.gradient
                  ? "justify-self-center sm:justify-self-stretch rounded-[3px] bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] w-fit sm:w-full"
                  : ""
              }`}
          >
            <h2 className="text-4xl font-medium leading-[68px] whitespace-pre-line">
              {item.value}
            </h2>
            <p className="text-neutral-200 text-lg leading-8 whitespace-pre-line">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats Row */}
      <motion.div
        variants={container}
        className="w-full max-w-[1056px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white font-['Inter']"
      >
        {statsBottom.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`flex flex-col items-center text-center border-transparent p-4 ${gradientBorder} ${item.className}`}
          >
            <h2 className="text-4xl font-medium leading-[68px] whitespace-pre-line">
              {item.value}
            </h2>
            <p className="text-neutral-200 text-lg leading-8 whitespace-pre-line">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <DecorativeGradients/>
    </motion.section>
  );
};

export default Section2;

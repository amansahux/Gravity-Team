import React from "react";
import { motion } from "framer-motion";
import TouchBtn from "./TouchBtn";
import DecorativeGradients from "./DecorativeGradients";
import PurpleBg from "../assets/PurpleBg.png";
import Bgblue from "../assets/Bluebg.png";
import BgRed from "../assets/Redbg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatAnim = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Section7 = () => {
  return (
    <section className="Section7 relative py-10 lg:py-20 xl:py-30">
      <div className="Content flex flex-col justify-center items-center gap-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-medium text-white text-5xl md:text-6xl text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#E5E5E5] leading-8 md:max-w-[600px] text-center px-5"
        >
          We are always open to discuss new value-adding partnerships. Do reach
          out if you are an exchange or a project looking for liquidity; an
          algorithmic trader or a software developer looking to improve the
          markets with us or just have a great idea you can’t wait to share with
          us!
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Button"
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 120, damping: 8 }}
        >
          <TouchBtn />
        </motion.div>
      </div>

      {/* Floating Background Images (NO OUTPUT CHANGE) */}
      <div className="Floatbg">
        <motion.img
          src={BgRed}
          alt=""
          initial="initial"
          animate="animate"
          variants={floatAnim}
          className="absolute w-[200px] md:w-auto -top-20 right-120"
        />

        <motion.img
          src={BgRed}
          alt=""
          initial="initial"
          animate="animate"
          variants={floatAnim}
          transition={{ duration: 7 }} // slight delay difference
          className="absolute w-[200px] md:w-auto top-20 right-50"
        />

        <motion.img
          src={Bgblue}
          alt=""
          initial="initial"
          animate="animate"
          variants={floatAnim}
          transition={{ duration: 5 }}
          className="absolute w-[200px] md:w-auto top-10 left-30 blur-2xl"
        />

        <motion.img
          src={PurpleBg}
          alt=""
          initial="initial"
          animate="animate"
          variants={floatAnim}
          transition={{ duration: 8 }}
          className="absolute w-[200px] md:w-auto -top-50 right-30 blur-3xl"
        />
      </div>

      <DecorativeGradients />
    </section>
  );
};

export default Section7;

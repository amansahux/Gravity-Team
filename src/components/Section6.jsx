import React from "react";
import { motion } from "framer-motion";
import LearnMoreBtn from "./LearnMoreBtn";
import Bgblue from "../assets/Bluebg.png";
import BgRed from "../assets/Redbg.png";
import DecorativeGradients from './DecorativeGradients'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section6 = () => {
  return (
    <section className="Section6 flex flex-col lg:flex-row items-center lg:items-start justify-center py-20 lg:py-30 xl:py-[200px] gap-16 lg:gap-30 mx-auto text-center lg:text-left px-3 relative z-50">

      {/* Left Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left flex items-center justify-center text-5xl leading-[59px] xl:leading-[78px] font-medium"
      >
        <h1>
          Join
          <br /> Gravity Team
        </h1>
      </motion.div>

      {/* Right Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="right max-w-[450px] gap-6 flex flex-col justify-center items-center lg:items-start text-[#e5e5e5]"
      >
        <p>
          Join our community of innovators, problem solvers and owners who apply
          scientific discovery techniques to make crypto markets a better place
          for everyone.
        </p>
        <p>
          As we emphasize it in our name – Gravity Team, we are a team. A team
          of bright, talented people, each masters of their specialty, curious
          about the world and eager to solve the new exciting cryptocurrency
          market problems, build cool stuff and have fun whilst doing so!
        </p>
        <LearnMoreBtn />
      </motion.div>

      {/* Background Floating Images */}
      <div className="floarimage">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={Bgblue}
          alt=""
          className="absolute top-0 xl:top-20 -left-0 z-10"
        />

        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={BgRed}
          alt=""
          className="absolute w-[50px] md:w-auto top-0 xl:top-20 left-[50px] z-10"

        />
      </div>
      <DecorativeGradients/>
    </section>
  );
};

export default Section6;

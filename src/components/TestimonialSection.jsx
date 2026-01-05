import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pagination from "../assets/pagination-default.svg";
import BitkubLogoLight from "../assets/bitkub-logo-light-trimmed.png";
import DecorativeGradients from "./DecorativeGradients";

const testimonials = [
  {
    quote:
      "Since 2019, Gravity Team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be a very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
    author: "Atthakrit Chimplapibul",
    role: "Co-founder & CEO of Bitkub",
    logo: BitkubLogoLight,
  },
  {
    quote:
      "Since 2019, Gravity Team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be a very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
    author: "Atthakrit Chimplapibul",
    role: "Co-founder & CEO of Bitkub",
    logo: BitkubLogoLight,
  },
  {
    quote:
      "Since 2019, Gravity Team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be a very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
    author: "Atthakrit Chimplapibul",
    role: "Co-founder & CEO of Bitkub",
    logo: BitkubLogoLight,
  },
];

// 🔥 Framer Motion Variants for Slide Direction
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -150 : 150,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
};

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 7000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center text-white pt-20 px-6 bg-neutral-900 font-[Inter] overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl px-3">
        <h2 className="text-4xl sm:text-5xl font-medium leading-snug mb-6">
          We are in a good company
        </h2>
        <p className="text-[#E5E5E5] text-lg sm:text-xl leading-7 max-w-2xl mx-auto">
          Our partnerships have delivered great value to our projects and we’re
          happy to share some of their feedback below.
        </p>
      </div>

      {/* Arrows */}
      <div className="Arrow flex justify-center items-center gap-10 py-5">
        <img
          src={pagination}
          alt="Previous"
          onClick={prevSlide}
          className="w-12 sm:w-16 cursor-pointer opacity-70 hover:opacity-100 transition"
        />
        <img
          src={pagination}
          alt="Next"
          onClick={nextSlide}
          className="w-12 sm:w-16 rotate-180 cursor-pointer opacity-70 hover:opacity-100 transition"
        />
      </div>

      {/* Sliding Testimonials */}
      <div className="relative w-full max-w-[900px] min-h-[400px] sm:min-h-[300px] flex justify-center items-center overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full text-center p-2 md:p-12"
          >
            <p className="text-[14px] sm:text-base md:text-lg lg:text-xl leading-8 text-[#f2f2f2] mb-8">
              “{testimonials[index].quote}”
            </p>
            <h3 className="text-lg font-bold">{testimonials[index].author}</h3>
            <div className="flex justify-center items-center gap-2 mt-2">
              <p className="text-sm text-[#E5E5E5]">{testimonials[index].role}</p>
              <div className="flex items-center justify-center gap-3">
                <span className="w-px h-6 bg-gray-500"></span>
                <img
                  src={testimonials[index].logo}
                  alt="Company Logo"
                  className="h-6 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index
                ? "bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 scale-110"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>

      <DecorativeGradients />
    </motion.section>
  );
};

export default TestimonialSection;

import React from "react";
import { motion } from "framer-motion";

// Assets
import middleLeft from "../assets/middle-left-2.png";
import bitfinex from "../assets/bitfinex@2x.png";
import bithumb from "../assets/bithumb@2x.png";
import bitbank from "../assets/bitbank@2x.png";
import bitstamp from "../assets/bitstamp@2x.png";
import binance from "../assets/binance@2x.png";
import coinbase from "../assets/coinbase@2x.png";
import near from "../assets/near.png";
import solana from "../assets/solana.png";
import mena from "../assets/mena.png";
import DecorativeGradients from "./DecorativeGradients";

// Partner data
const partners = [
  { name: "bithumb", img: bithumb },
  { name: "bitbank", img: bitbank },
  { name: "binance", img: binance },
  { name: "bitstamp", img: bitstamp },
  { name: "coinbase", img: coinbase },
  { name: "bitfinex", img: bitfinex },
];

// Partner Card
const PartnerCard = ({ name, img }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="relative flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 
               bg-gradient-to-b from-slate-600/20 to-zinc-900/10 
               rounded-xl outline outline-1 outline-slate-600/50 transition-all duration-300"
  >
    <img
      src={img}
      alt={name}
      loading="lazy"
      className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain rounded-[5px]"
    />
    <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wide font-inter">
      {name}
    </p>
  </motion.div>
);

const Section4 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden 2xl:max-w-[1500px] 2xl:mx-auto py-20 bg-neutral-900 text-white">
      {/* Decorative background blur */}
      <motion.img
        src={middleLeft}
        alt="Background Shape"
        className="absolute w-[600px] sm:w-[800px] opacity-20 blur-3xl -top-40 -left-60 rotate-[6deg] pointer-events-none"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />

      {/* Floating Near, Solana, Mena */}
      <motion.img
        src={near}
        alt="Near"
        className="absolute hidden xl:block w-[60px] sm:w-[60px] top-[100px] left-[150px] z-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={solana}
        alt="Solana"
        className="absolute hidden xl:block w-[80px] sm:w-[80px] top-[200px] left-[70px] z-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.img
        src={mena}
        alt="Mena"
        className="absolute hidden xl:block w-[70px] sm:w-[70px] top-[200px] left-[180px] z-20"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-semibold text-center mb-12 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Partners & Friends
      </motion.h2>

      {/* Partner Cards Container */}
      <motion.div
        className="relative flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl z-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.8 },
          },
        }}
        viewport={{ once: true }}
      >
        {partners.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <PartnerCard {...p} />
          </motion.div>
        ))}
      </motion.div>

      {/* Soft gradient fades (top & bottom) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-900 via-neutral-900/60 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

      <DecorativeGradients/>
    </section>
  );
};

export default Section4;

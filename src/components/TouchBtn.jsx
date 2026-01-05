import React from "react";
import { motion } from "framer-motion";

const TouchBtn = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <motion.button
      variants={fadeIn}
      className="
            bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]
            text-[1.1875rem] uppercase my-10 py-3 px-8 rounded-[5px]
            transition-all duration-300 ease-out
            hover:brightness-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            active:scale-95 active:brightness-95
          "
    >
      get in touch
    </motion.button>
  );
};

export default TouchBtn;

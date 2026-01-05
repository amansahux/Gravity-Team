import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo-light.png";
import { TextAlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  const linkClass =
    "font-normal uppercase leading-6 whitespace-nowrap transition duration-300 relative cursor-pointer \
     hover:bg-gradient-to-b from-indigo-500 via-blue-400 to-orange-300 hover:bg-clip-text hover:text-transparent \
     before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 \
     before:bg-gradient-to-r before:from-indigo-500 before:via-blue-400 before:to-orange-300 \
     before:transition-all before:duration-300 hover:before:w-full";

  // Animation variants
  const navContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const mobileMenuContainer = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, staggerChildren: 0.15 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const mobileLink = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navContainer}
      className="text-white flex justify-between items-center gap-5 max-w-[1500px] xl:mx-auto px-4 py-4"
    >
      {/* Logo */}
      <motion.div variants={navItem} className="Logo w-30 lg:w-44 min-w-20">
        <img src={Logo} alt="Logo" className="w-full" />
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        variants={navContainer}
        className="Icons gap-6 text-base hidden lg:flex"
      >
        {["About", "Our services", "Work with us", "Blog"].map((elem, idx) => (
          <motion.h3 key={idx} variants={navItem} className={linkClass}>
            {elem}
          </motion.h3>
        ))}
      </motion.div>

      {/* Buttons (Get in Touch + Hamburger) */}
      <div className="Buttons flex items-center gap-[5vw] cursor-pointer">
        {/* Get in Touch (Desktop Only) */}
        <motion.div
          variants={navItem}
          className="Touch hidden lg:flex items-center gap-4"
        >
          <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-lg" />
          <h3 className={linkClass}>Get in Touch</h3>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={navItem}
          onClick={() => setOpen(true)}
          className="Hamburger block lg:hidden"
        >
          <TextAlignJustify />
        </motion.button>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {Open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-end"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuContainer}
          >
            {/* Slide Drawer */}
            <motion.div className="w-[80%] sm:w-[60%] h-full  bg-gray-900 p-10 relative flex flex-col gap-10 justify-center">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={30} />
              </button>

              {/* Mobile Menu Links */}
              {["About", "Our services", "Work with us", "Blog"].map((elem, idx) => (
                <motion.h3
                  key={idx}
                  variants={mobileLink}
                  className="text-white text-2xl font-medium uppercase cursor-pointer hover:text-transparent hover:bg-gradient-to-b from-indigo-500 via-blue-400 to-orange-300 bg-clip-text"
                >
                  {elem}
                </motion.h3>
              ))}

              {/* Get in Touch for Mobile */}
              <motion.div
                variants={mobileLink}
                className="flex items-center gap-3 pt-6"
              >
                <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-lg" />
                <h3 className="text-white text-lg uppercase">Get in Touch</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

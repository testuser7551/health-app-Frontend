import React from "react";
import { motion } from "framer-motion";

const Slide1 = () => {
  return (
    <motion.div
      key="slide1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center relative "
    >
      {/* Top Visual */}
      <div className="relative w-full max-w-xs sm:max-w-md mx-auto mb-6">
        <motion.img
          src="/4youngevity12.png"
          alt="Visual"
          className="w-full h-auto "
          initial={{ scale: 0.8 }}
        />
      </div>

      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-gilmer font-bold text-secondary mb-4">
        Welcome to Your Best Self
      </h2>

      {/* Description */}
      <p className="text-black font-poppins leading-relaxed mb-6 text-base sm:text-lg md:text-xl">
        Imagine not just living longer… but living better.<br />
        More energy. More clarity. More strength. Starting today.
      </p>

      {/* Bottom Visual */}
      <div className="relative w-full max-w-sm sm:max-w-md mx-auto mb-6">
        <motion.img
          src="/slide1.png"
          alt="Visual"
          className="w-full h-90 object-cover rounded-lg shadow-md"
          initial={{ scale: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default Slide1;

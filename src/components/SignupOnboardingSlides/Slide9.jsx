import React, { useState } from "react";
import { motion } from "framer-motion";

const Slide9 = ({ nextSlide }) => {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(true);
  };

  return (
    <motion.div
      key="slide9"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center  flex flex-col items-center justify-center px-4"
    >
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-gilmer font-bold text-secondary mb-6">
        Welcome to wellness journey
      </h2>

      {/* Logo / Icon */}
      <div className="mb-6 w-24 h-24 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 flex items-center justify-center"
        >
          {connected ? (
            <img
              src="/tickimage.png"
              alt="Connected"
              className="w-28 h-28 object-contain"
            />
          ) : (
            <img
              src="/applehealth.png"
              alt="Apple Health"
              className="w-26 h-28 object-contain"
            />
          )}
        </motion.div>

      </div>
      <h2 className="text-2xl md:text-3xl font-bold font-gilmer text-secondary mb-6">
        Connect Apple Health
      </h2>
      {/* Description */}
      <p className="text-primary font-poppins mb-8  text-lg md:text-xl">
        Sync your health data for personalized insights and tracking
      </p>

      {/* Connect Apple Health Button */}
      <motion.button
        onClick={handleConnect}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 mb-4 bg-gradient-to-r  from-primary-accent to-secondary cursor-pointer text-white rounded-full font-poppins font-semibold shadow-lg transition"
      >
        Connect Apple Health
      </motion.button>

      {/* Skip / Continue Button */}
      <motion.button
        onClick={nextSlide} // ← navigate to next slide
        className="px-6 py-2 text-primary-accent font-poppins font-semibold underline cursor-pointer"
      >
        {connected ? "Continue" : "Skip for now"}
      </motion.button>

    </motion.div>
  );
};

export default Slide9;

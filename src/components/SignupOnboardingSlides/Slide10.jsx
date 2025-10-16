import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Slide10 = () => {
  const [connected, setConnected] = useState(false);
  const navigate = useNavigate();
  const handleConnect = () => {
    setConnected(true);
  };

  const points = [
    "Your health data is securely stored.",
    "Accessed only for personalized insights.",
    "Compliant with all privacy standards.",
    "Shared only with trusted health partners.",
  ];

  return (
    <motion.div
      key="slide10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center  flex flex-col items-center justify-center px-4"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold font-gilmer text-secondary mb-6">
        Welcome to Wellness Program
      </h2>

      {/* Augi Health Icon */}
      <div className="mb-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          {connected ? (
            <img
              src="/tickimage.png"
              alt="Connected"
              className="w-28 h-28 object-contain"
            />
          ) : (
            <img
              src="/augihealth.png"
              alt="Apple Health"
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
            />
          )}
        </motion.div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold font-gilmer text-primary mb-6">
        Connect to Augihealth
      </h2>

      {/* Description */}
      <p className="text-primary font-poppins mb-4 text-lg md:text-xl max-w-3xl">
        AugiHealth empowers you to take ownership of your medical history with seamless integration to Epic/MyChart, Cerner, and Athena Health Records — connecting you to tens of thousands of doctors nationwide.
      </p>

      {/* ===== OUR HEALTH PARTNERS ===== */}
      <div className="flex flex-col items-center text-center mb-12 mt-10">
        <h3 className="text-2xl font-bold font-gilmer text-primary mb-4">
          Our Health Partners
        </h3>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          <img
            src="/assets/Records/epic-logo-BKWoWS44.png"
            alt="Epic"
            className="h-20 object-contain grayscale transition-all duration-300"
          />
          <img
            src="/assets/Records/cerner-logo-C30xjmok.png"
            alt="Cerner"
            className="h-20 object-contain grayscale transition-all duration-300"
          />
          <img
            src="/assets/Records/athena-logo-Bdh0GwFK.png"
            alt="Athena Health"
            className="h-20 object-contain grayscale transition-all duration-300"
          />
        </div>
      </div>

      {/* ===== YOUR DATA SAFETY ===== */}
      <div className="flex flex-col items-start">
        {/* Heading aligned left */}
        <h3 className="text-2xl font-bold font-gilmer text-primary mb-4">
          Your Data Safety
        </h3>

        {/* Grid of points */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6 text-left">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <span className="text-secondary font-bold text-xl leading-none">•</span>
              <span className="text-primary font-poppins">{point}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center space-y-3">
        <motion.button
          onClick={handleConnect}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3  bg-gradient-to-r font-gilmer  from-primary-accent to-secondary cursor-pointer text-white rounded-full font-semibold shadow-lg transition"
        >
          Connect with Augi Health
        </motion.button>

        {/* Skip / Continue Button */}
        <motion.button
          onClick={() => navigate("/")} // ← navigate to home
          className="px-6 py-2 text-primary-accent font-semibold font-poppins underline cursor-pointer"
        >
          {connected ? "Continue to Dashboard" : "Skip and Complete"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Slide10;

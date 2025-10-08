import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  "Simple steps",
  "Personalized to your needs",
  "Tiny changes that create massive results",
];

const Slide6 = () => {
  return (
    <motion.div
      key="slide6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center relative px-4 sm:px-6 lg:px-8 "
    >
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold font-gilmer text-secondary mb-6">
        Step-by-Step, Just for You
      </h2>

      {/* Copy */}
      <p className="text-primary font-poppins mb-6 text-lg md:text-xl max-w-md mx-auto">
        Every day, the program guides you:
      </p>

      {/* Steps List */}
      <div className="flex flex-col items-start space-y-3 mb-8 max-w-md mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={step}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-3 bg-violet-50 rounded-xl shadow-md px-6 py-3 w-full cursor-pointer"
          >
            {/* Tick Icon */}
            <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-white via-primary-accent to-secondary text-white rounded-full">
              <Check size={16} />
            </div>

            {/* Step Text */}
            <span className="text-primary font-poppins  text-left">
              {step}
            </span>
          </motion.div>
        ))}
      </div>
      {/* Final Note */}
      <p className="text-primary  font-poppins font-bold mt-4 mb-8 text-sm md:text-base">
        You are never alone in this journey.
      </p>
    </motion.div>
  );
};

export default Slide6;

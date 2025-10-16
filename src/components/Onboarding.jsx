import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1 from "./SignupOnboardingSlides/Slide1";
import Slide2 from "./SignupOnboardingSlides/Slide2";
import Slide3 from "./SignupOnboardingSlides/Slide3";
import Slide4 from "./SignupOnboardingSlides/Slide4";
import Slide5 from "./SignupOnboardingSlides/Slide5";
import Slide6 from "./SignupOnboardingSlides/Slide6";
import Slide7 from "./SignupOnboardingSlides/Slide7";
import Slide8 from "./SignupOnboardingSlides/Slide8";
import Slide9 from "./SignupOnboardingSlides/Slide9";
import Slide10 from "./SignupOnboardingSlides/Slide10";

const slides = [
  { id: 1, component: <Slide1 />, cta: "Next →" },
  { id: 2, component: <Slide2 />, cta: "Show Me How" },
  { id: 3, component: <Slide3 />, cta: "Reveal Them" },
  { id: 4, component: <Slide4 />, cta: "Why These Matter" },
  { id: 5, component: <Slide5 />, cta: "I'm In" },
  { id: 6, component: <Slide6 />, cta: "Let’s Do This" },
  { id: 7, component: <Slide7 />, },
  { id: 8, component: <Slide8 />, },
  { id: 9, component: <Slide9 />, },
  { id: 10, component: <Slide10 />, },
];

const Onboarding = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-700">
      <div className="bg-white backdrop-blur-md rounded-3xl w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12 text-center shadow-xl">
        {/* Animate Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pass nextSlide as prop to each slide */}
            {React.cloneElement(slides[index].component, { nextSlide })}
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mb-6 mt-4">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`h-2 w-8 rounded-full ${i === index ? "bg-secondary" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {index > 0 ? (
            // <button
            //   onClick={prevSlide}
            //   className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition cursor-pointer"
            // >
            //   Back
            // </button>
            <button
              onClick={prevSlide}
              className=""
            >
            </button>
          ) : (
            <div />
          )}

          {slides[index].cta && (
            <button
              onClick={nextSlide}
              className="px-4 py-2 rounded-lg bg-primary-accent hover:bg-secondary text-white font-semibold transition cursor-pointer"
            >
              {index === slides.length - 1 ? "Finish" : slides[index].cta}
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Onboarding;

import React from "react";
import { motion } from "framer-motion";

const Slide7 = ({ nextSlide }) => {
    return (
        <motion.div
            key="slide7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center relative  flex flex-col items-center justify-center px-4"
        >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-gilmer font-bold text-secondary mb-6">
                This Is Your Moment
            </h2>

            {/* Copy */}
            <p className="text-gray-500 mb-2 font-poppins text-lg md:text-xl max-w-lg">
                This is not about guilt.
            </p>
            <p className="text-primary mb-2 font-poppins font-bold text-lg md:text-xl max-w-lg">
                It is about empowerment.
            </p>
            <p className="text-primary mb-2 font-poppins font-bold text-lg md:text-xl max-w-lg">
                It is about clarity.
            </p>
            <p className="text-secondary font-gilmer font-bold mb-2 text-lg md:text-xl max-w-lg">
                It is about living better, starting right now.
            </p>


            {/* CTA Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="px-8 py-4 bg-primary-accent font-gilmer cursor-pointer text-white text-sm md:text-lg rounded-full mt-5 font-bold shadow-lg transition"
            >
                Begin Your Journey →
            </motion.button>
            <p className="text-green-500 font-poppins  mb-6 mt-6 text-sm md:text-lg max-w-lg">
                I am Ready
            </p>
        </motion.div>
    );
};

export default Slide7;

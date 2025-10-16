import React from "react";
import { motion } from "framer-motion";

const Slide2 = () => {
    return (
        <motion.div
            key="slide2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center relative "
        >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-gilmer font-bold text-secondary mb-4">
                The Doctor Who Rewrote Aging
            </h2>


            {/* Visual Container */}
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl bg-gradient-to-tr from-primary to-primary-accent">
                {/* Doctor photo */}
                <img
                    src="./Roizen.jpg"
                    alt="Dr. Roizen"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
            </div>


            {/* Description as Left-Aligned Interactive List */}
            <div className="text-primary font-poppins leading-relaxed mb-8 text-lg md:text-xl">
                <p className="mb-3">Dr. Michael Roizen has guided millions worldwide to a younger RealAge.</p>

                <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-xl">
                    <li className="hover:text-primary-accent cursor-pointer transition">
                        Chief Wellness Officer Emeritus at the Cleveland Clinic
                    </li>
                    <li className="hover:text-primary-accent cursor-pointer transition">
                        #1 New York Times bestselling author
                    </li>
                    <li className="hover:text-primary-accent cursor-pointer transition">
                        25+ years of pioneering health breakthroughs
                    </li>
                </ul>

            </div>
            <p className="mt-3 mb-8 text-lg md:text-xl font-poppins font-bold">Now, his proven science is in your hands.</p>

        </motion.div>
    );
};

export default Slide2;

import React from "react";
import { motion } from "framer-motion";

const systems = [
    { name: "Cardiovascular" },
    { name: "Metabolic" },
    { name: "Neurological" },
    { name: "Immune" },
    { name: "Musculoskeletal" },
    { name: "Respiratory" },
    { name: "Sleep" },
    { name: "Emotional" },
];

const Slide5 = () => {
    return (
        <div className="text-center relative px-4 sm:px-6 lg:px-8 ">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-gilmer font-bold text-secondary mb-4">
                Science That Changes Everything
            </h2>

            {/* Description */}
            <p className="text-primary mb-6 font-gilmer text-lg md:text-xl max-w-xl mx-auto">
                Together, the 6+2 Normals control more than 80% of how you age and feel.
            </p>

            {/* Left-Aligned Gray Card */}
            <div className="bg-gray-100 p-6 font-poppins rounded-xl mb-8 text-left">
                <p className="text-gray-700 mb-4 text-lg md:text-xl ">
                    Get them into range and you:
                </p>

                {/* Bullet Points */}
                <ul className="list-none font-poppins space-y-2 text-gray-700 ">
                    <li>● Add daily energy</li>
                    <li>● Protect body and mind</li>
                    <li>● Feel the difference in days, not months</li>
                </ul>
            </div>

            {/* Systems Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
                {systems.map((system) => (
                    <motion.div
                        key={system.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center justify-center bg-violet-50 rounded-2xl shadow-md p-6 w-full max-w-xs cursor-pointer"
                    >
                        {/* System Name */}
                        <span className="text-secondary font-semibold font-gilmer text-lg text-center">
                            {system.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Slide5;

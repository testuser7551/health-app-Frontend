import React, { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { name: "Blood Pressure", progress: 75 },
  { name: "Heart Rate", progress: 60 },
  { name: "Glucose", progress: 50 },
  { name: "Healthy Weight", progress: 80 },
  { name: "Sugar Level", progress: 40 },
  { name: "Tobacco Free", progress: 100 },
];

function CircularProgress({ progress }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-20 h-20">
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C972FF" /> {/* primary-accent */}
          <stop offset="100%" stopColor="#6B15A1" /> {/* secondary */}
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle
        className="text-gray-200"
        strokeWidth="8"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="40"
        cy="40"
      />

      {/* Progress Circle with Gradient */}
      <circle
        strokeWidth="8"
        stroke="url(#gradientStroke)"
        fill="transparent"
        r={radius}
        cx="40"
        cy="40"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />

      {/* Progress Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-sm font-bold text-primary"
      >
        {progress}%
      </text>
    </svg>

  );
}

const Slide3 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <motion.div
      key="slide3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center relative "
    >
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold font-gilmer text-secondary mb-4">
        The 6 Normals +2
      </h2>

      {/* Description */}
      <p className="text-primary font-poppins leading-relaxed mt-8 text-lg md:text-xl">
        Eight measurable levers that control how fast you age.
      </p>
      <p className="text-primary font-poppins leading-relaxed text-lg md:text-xl">
        Bring them into balance, and you flip a switch inside your body.
      </p>


      {/* Stats Container */}
      <div className="">

        {/* Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-xl bg-violet-50 transition-transform ${hoveredCard === idx ? "scale-105 shadow-2xl" : ""
                }`}
            >
              <CircularProgress progress={stat.progress} />
              <h3 className="font-poppins  text-lg text-black mt-2">
                {stat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Slide3;

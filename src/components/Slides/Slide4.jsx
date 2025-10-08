import React from "react";
import { motion } from "framer-motion";
import { Heart, Moon, Utensils, Brain, Dumbbell, Smile, BatteryCharging, Activity } from "lucide-react";

const levers = [
  { name: "Blood Pressure", icon: Heart, gradient: "from-red-400 to-red-600" },
  { name: "Blood Sugar", icon: Activity, gradient: "from-yellow-400 to-yellow-600" },
  { name: "Blood Cholesterol", icon: BatteryCharging, gradient: "from-purple-400 to-purple-600" },
  { name: "Weight", icon: Dumbbell, gradient: "from-blue-400 to-blue-600" },
  { name: "Tobacco Status", icon: Smile, gradient: "from-green-400 to-green-600" },
  { name: "Stress Management", icon: Brain, gradient: "from-pink-400 to-pink-600" },
  { name: "Sleep Quality", icon: Moon, gradient: "from-indigo-400 to-indigo-600" },
  { name: "Emotional Strength", icon: Utensils, gradient: "from-orange-400 to-orange-600" },
];

const Slide4 = () => {
  return (
    <div className="text-center relative px-4 sm:px-6 lg:px-8 ">
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold font-gilmer text-secondary mb-8">
        Your Power Levers for Health
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
        {levers.map((lever) => {
          const Icon = lever.icon;
          return (
            <motion.div
              key={lever.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 bg-violet-50 rounded-xl shadow-md px-6 py-4 w-full max-w-xs cursor-pointer mb-5"
            >
              {/* Icon with gradient circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${lever.gradient} text-white shadow-md`}
              >
                <Icon size={20} />
              </div>

              {/* Lever Name */}
              <span className="text-primary font-poppins  text-left text-lg">
                {lever.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide4;

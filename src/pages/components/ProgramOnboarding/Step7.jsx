import React, { useState, useEffect } from "react";

export default function Step7({ data, onChange }) {
  const [selected, setSelected] = useState(data.familyHistory || []);

  const options = [
    "Heart Disease",
    "High Blood Pressure",
    "Diabetes",
    "Breast Cancer",
    "Osteoporosis",
    "Stroke",
    "Alzheimer's Disease",
    "Other Cancers",
  ];

  const handleSelect = (option) => {
    const updated = selected.includes(option)
      ? selected.filter((i) => i !== option)
      : [...selected, option];
    setSelected(updated);
  };

  useEffect(() => {
    onChange("familyHistory", selected);
  }, [selected]);

  return (
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-poppins">
        Family Health History
      </h2>
      <p className="text-gray-600 mb-4 font-poppins">
        Select any conditions that run in your family:
      </p>

      <div className="flex flex-col gap-3 mt-4">
        {options.map((option) => {
          const isChecked = selected.includes(option);
          return (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer group select-none"
              onClick={() => handleSelect(option)}
            >
              {/* Purple custom circle */}
              <div className={`radio-purple ${isChecked ? "checked" : ""}`}>
                {/* White tick icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <span className="text-sm md:text-base font-poppins text-gray-700 group-hover:text-gray-900 transition">
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

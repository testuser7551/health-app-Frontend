import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const Step11 = ({ data = {}, onChange }) => {
  const [goals, setGoals] = useState(() => ({
    primaryGoals: data.goals?.primaryGoals || [],
    goal6Months: data.goals?.goal6Months || "",
    goal1Year: data.goals?.goal1Year || "",
    goal3Years: data.goals?.goal3Years || "",
  }));

  const options = ["Lose weight", "Reduce waist measurement"];

  const handleSelect = (option) => {
    setGoals((prev) => {
      const updated = prev.primaryGoals.includes(option)
        ? prev.primaryGoals.filter((i) => i !== option)
        : [...prev.primaryGoals, option];
      return { ...prev, primaryGoals: updated };
    });
  };

  const handleChange = (field, value) => {
    setGoals((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    onChange("goals", goals);
  }, [goals]);

  return (
    <div className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-poppins">Your Goals</h2>
      <p className="text-gray-500 font-poppins">What are your wellness goals?</p>

      <div className="border-b border-gray-200 pb-4">
  <p className="font-semibold text-gray-800 mb-3">
    Primary goals (select all that apply):
  </p>

  {options.map((option) => {
    const isChecked = goals.primaryGoals.includes(option);
    return (
      <label
        key={option}
        className="flex items-center gap-3 cursor-pointer mb-2 select-none"
        onClick={() => handleSelect(option)}
      >
        {/* Pure custom purple radio circle */}
        <div className={`radio-purple ${isChecked ? "checked" : ""}`}>
          {/* White tick when active */}
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

        <span className="text-sm md:text-base text-gray-800">{option}</span>
      </label>
    );
  })}
</div>


      {/* Text Areas */}
      {[
        { label: "What do you hope to achieve in 6 months?", field: "goal6Months" },
        { label: "What do you hope to achieve in 1 year?", field: "goal1Year" },
        { label: "What do you hope to achieve in 3 years?", field: "goal3Years" },
      ].map(({ label, field }) => (
        <div key={field}>
          <p className="font-semibold text-gray-800 mb-2">{label}</p>
          <textarea
            value={goals[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            rows={3}
            placeholder="Describe your goal..."
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d175ff]"
          />
        </div>
      ))}
    </div>
  );
};

export default Step11;

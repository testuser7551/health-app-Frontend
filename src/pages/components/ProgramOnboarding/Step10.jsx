import React, { useState, useEffect } from "react";
import { Check } from "lucide-react"; // optional white tick icon

const Step10 = ({ data, onChange }) => {
  const [form, setForm] = useState(
    data.lifestyle || {
      tobaccoUse: "",
      alcoholUse: "",
      sleepHours: "",
      stressLevel: "",
    }
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    onChange("lifestyle", form);
  }, [form]);

  return (
    <div className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-poppins">Lifestyle Habits</h2>
      <p className="text-gray-500 font-poppins">Tell us about your daily habits:</p>

      {/* Tobacco Use */}
      <div className="border-b border-gray-200 pb-4">
        <p className="font-semibold text-gray-800 mb-3">Do you use tobacco products?</p>
        {["Never", "Former smoker", "Current smoker"].map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer mb-2">
            <div
              className={`radio-purple ${form.tobaccoUse === opt ? "checked" : ""}`}
              onClick={() => handleChange("tobaccoUse", opt)}
            >
              <input
                type="radio"
                name="tobaccoUse"
                value={opt}
                checked={form.tobaccoUse === opt}
                onChange={() => handleChange("tobaccoUse", opt)}
              />
              <Check className="w-3 h-3" />
            </div>
            <span className="text-sm md:text-base">{opt}</span>
          </label>
        ))}
      </div>

      {/* Alcohol Use */}
      <div className="border-b border-gray-200 pb-4">
        <p className="font-semibold text-gray-800 mb-3">
          How many alcoholic drinks do you have per week?
        </p>
        {["None", "1-3 drinks", "4-7 drinks", "8+ drinks"].map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer mb-2">
            <div
              className={`radio-purple ${form.alcoholUse === opt ? "checked" : ""}`}
              onClick={() => handleChange("alcoholUse", opt)}
            >
              <input
                type="radio"
                name="alcoholUse"
                value={opt}
                checked={form.alcoholUse === opt}
                onChange={() => handleChange("alcoholUse", opt)}
              />
              <Check className="w-3 h-3" />
            </div>
            <span className="text-sm md:text-base">{opt}</span>
          </label>
        ))}
      </div>

      {/* Sleep Hours */}
      <div className="border-b border-gray-200 pb-4">
        <p className="font-semibold text-gray-800 mb-3">
          How many hours of sleep do you get per night?
        </p>
        <input
          type="number"
          value={form.sleepHours}
          onChange={(e) => handleChange("sleepHours", e.target.value)}
          placeholder="7"
          min="0"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d175ff]"
        />
      </div>

      {/* Stress Level */}
      <div className="border-b border-gray-200 pb-4">
        <p className="font-semibold text-gray-800 mb-3">How would you rate your stress level?</p>
        {["Low", "Moderate", "High", "Very High"].map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer mb-2">
            <div
              className={`radio-purple ${form.stressLevel === opt ? "checked" : ""}`}
              onClick={() => handleChange("stressLevel", opt)}
            >
              <input
                type="radio"
                name="stressLevel"
                value={opt}
                checked={form.stressLevel === opt}
                onChange={() => handleChange("stressLevel", opt)}
              />
              <Check className="w-3 h-3" />
            </div>
            <span className="text-sm md:text-base">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step10;



import React, { useState } from "react";
import { User } from "lucide-react";

const HealthProfile = () => {
  const [formData, setFormData] = useState({
    healthGoals: "",
    healthConcerns: "",
    exerciseLevel: "",
    sleepQuality: "",
    nutritionHabits: "",
    stressSources: "",
    healthMotivation: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Health Profile saved successfully!");
      setErrors({});
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 shadow-md">
      <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-2 text-gray-900">
        <User size={20} className="text-black" /> Health Profile & Goals
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-6">
        Your onboarding answers - update anytime
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        {/* Health Goals */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Health Goals <span className="text-red-500">*</span>
          </label>
          <textarea
            name="healthGoals"
            value={formData.healthGoals}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.healthGoals ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base resize-none focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            rows={2}
            placeholder="Enter your health goals"
          ></textarea>
          {errors.healthGoals && (
            <p className="text-red-500 text-xs mt-1">{errors.healthGoals}</p>
          )}
        </div>

        {/* Primary Health Concerns */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Primary Health Concerns <span className="text-red-500">*</span>
          </label>
          <textarea
            name="healthConcerns"
            value={formData.healthConcerns}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.healthConcerns ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base resize-none focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            rows={2}
            placeholder="e.g., checking blood pressure"
          ></textarea>
          {errors.healthConcerns && (
            <p className="text-red-500 text-xs mt-1">{errors.healthConcerns}</p>
          )}
        </div>

        {/* Current Exercise Level */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Current Exercise Level <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="exerciseLevel"
            value={formData.exerciseLevel}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.exerciseLevel ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            placeholder="e.g., light"
          />
          {errors.exerciseLevel && (
            <p className="text-red-500 text-xs mt-1">{errors.exerciseLevel}</p>
          )}
        </div>

        {/* Sleep Quality */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Sleep Quality <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="sleepQuality"
            value={formData.sleepQuality}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.sleepQuality ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            placeholder="e.g., fair"
          />
          {errors.sleepQuality && (
            <p className="text-red-500 text-xs mt-1">{errors.sleepQuality}</p>
          )}
        </div>

        {/* Nutrition Habits */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Nutrition Habits <span className="text-red-500">*</span>
          </label>
          <textarea
            name="nutritionHabits"
            value={formData.nutritionHabits}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.nutritionHabits ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base resize-none focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            rows={2}
            placeholder="Describe your eating habits"
          ></textarea>
          {errors.nutritionHabits && (
            <p className="text-red-500 text-xs mt-1">{errors.nutritionHabits}</p>
          )}
        </div>

        {/* Sources of Stress */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Sources of Stress <span className="text-red-500">*</span>
          </label>
          <textarea
            name="stressSources"
            value={formData.stressSources}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.stressSources ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base resize-none focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            rows={2}
            placeholder="Describe your main sources of stress"
          ></textarea>
          {errors.stressSources && (
            <p className="text-red-500 text-xs mt-1">{errors.stressSources}</p>
          )}
        </div>

        {/* Health Motivation */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-700">
            Health Motivation <span className="text-red-500">*</span>
          </label>
          <textarea
            name="healthMotivation"
            value={formData.healthMotivation}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.healthMotivation ? "border-red-500" : "border-gray-300"
            } p-2 sm:p-3 text-sm sm:text-base resize-none focus:ring-2 focus:ring-[#c972ff] focus:outline-none`}
            rows={3}
            placeholder="What motivates you to improve your health?"
          ></textarea>
          {errors.healthMotivation && (
            <p className="text-red-500 text-xs mt-1">{errors.healthMotivation}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default HealthProfile;

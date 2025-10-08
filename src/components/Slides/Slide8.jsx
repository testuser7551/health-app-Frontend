import React, { useState } from "react";
import { motion } from "framer-motion";

const Slide8 = ({ nextSlide }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    location: "",
    heightFeet: "",
    heightInches: "",
    weight: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.age || formData.age <= 0) newErrors.age = "Enter a valid age.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.heightFeet || formData.heightFeet <= 0)
      newErrors.heightFeet = "Enter valid feet.";
    if (!formData.heightInches || formData.heightInches < 0)
      newErrors.heightInches = "Enter valid inches.";
    if (!formData.weight || formData.weight <= 0) newErrors.weight = "Enter valid weight.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed to next slide
      if (nextSlide) nextSlide();
    }
  };

  return (
    <motion.div
      key="slide8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-gilmer font-bold text-secondary mb-8 text-center">
        Tell Us About You
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-primary mb-1 font-poppins  text-left">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary-accent"
              }`}
            placeholder="John Doe"
          />
          {errors.fullname && <span className="text-red-500 text-sm mt-1">{errors.fullname}</span>}
        </div>

        {/* Age & Location */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 flex flex-col">
            <label className="text-primary mb-1 font-poppins  text-left">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.age ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary-accent"
                }`}
              placeholder="25"
            />
            {errors.age && <span className="text-red-500 text-sm mt-1">{errors.age}</span>}
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-primary mb-1 font-poppins  text-left">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.location
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-accent"
                }`}
              placeholder="City, Country"
            />
            {errors.location && <span className="text-red-500 text-sm mt-1">{errors.location}</span>}
          </div>
        </div>

        {/* Height & Weight */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* Height */}
          <div className="flex-1 flex flex-col">
            <label className="text-primary mb-1 font-poppins  text-left">Height</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="heightFeet"
                value={formData.heightFeet}
                onChange={handleChange}
                className={`w-24 md:w-35 flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.heightFeet
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary-accent"
                  }`}
                placeholder="Feet"
              />
              <input
                type="number"
                name="heightInches"
                value={formData.heightInches}
                onChange={handleChange}
                className={`w-24 md:w-35 flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.heightInches
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary-accent"
                  }`}
                placeholder="Inches"
              />
            </div>
            {(errors.heightFeet || errors.heightInches) && (
              <span className="text-red-500 text-sm mt-1">
                {errors.heightFeet || errors.heightInches}
              </span>
            )}
          </div>

          {/* Weight */}
          <div className="flex-1 flex flex-col">
            <label className="text-primary mb-1 font-poppins  text-left">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.weight
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-accent"
                }`}
              placeholder="70"
            />
            {errors.weight && <span className="text-red-500 text-sm mt-1">{errors.weight}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-secondary mb-5 cursor-pointer text-white rounded-full font-gilmer font-semibold shadow-lg hover:bg-primary-accent transition"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
};

export default Slide8;

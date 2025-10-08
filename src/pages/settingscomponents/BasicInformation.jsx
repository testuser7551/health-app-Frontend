// import React from "react";
// import { User } from "lucide-react";

// const BasicInformation = () => {
//   return (
//     <div className="bg-white rounded-xl p-4 sm:p-6 mb-6">
//       <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">
//         <User size={20} className="text-black" /> Basic Details
//       </h2>
//       <p className="text-sm text-gray-500 mb-4">Personal details from onboarding</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <input className="input" placeholder="Full Name" />
//         <input className="input" placeholder="Age" type="number" />
//         <div className="flex gap-2">
//           <input className="input w-1/2" placeholder="Height (ft)" type="number" />
//           <input className="input w-1/2" placeholder="Height (in)" type="number" />
//         </div>
//         <input className="input" placeholder="Weight (lbs)" type="number" />
//         <div className="sm:col-span-2">
//           <input className="input w-full" placeholder="Location" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicInformation;


import React, { useState } from "react";
import { User } from "lucide-react";

const BasicInformation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    heightFt: "",
    heightIn: "",
    weight: "",
    location: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    age: "",
    heightFt: "",
    heightIn: "",
    weight: "",
    location: ""
  });

  // Validation functions
  const validateText = (value) => /^[a-zA-Z\s.'-]*$/.test(value);

  const validateNumber = (value, allowDecimal = false) => {
    if (value === "") return true;
    const numberRegex = allowDecimal ? /^\d*\.?\d*$/ : /^\d*$/;
    return numberRegex.test(value);
  };

  const validateAge = (value) => {
    if (value === "") return true;
    const num = parseFloat(value);
    return num >= 0 && num <= 150;
  };

  const validateHeightFt = (value) => {
    if (value === "") return true;
    const num = parseFloat(value);
    return num >= 0 && num <= 8;
  };

  const validateHeightIn = (value) => {
    if (value === "") return true;
    const num = parseFloat(value);
    return num >= 0 && num < 12;
  };

  const validateWeight = (value) => {
    if (value === "") return true;
    const num = parseFloat(value);
    return num >= 0 && num <= 1000;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: ""
    }));
  };

  const handleBlur = (field, value) => {
    let error = "";

    switch (field) {
      case "fullName":
        if (value && !validateText(value)) {
          error =
            "Name can only contain letters, spaces, hyphens, and apostrophes";
        } else if (value && value.length < 2) {
          error = "Name must be at least 2 characters long";
        }
        break;

      case "age":
        if (value && !validateNumber(value)) {
          error = "Age must be a whole number";
        } else if (value && !validateAge(value)) {
          error = "Age must be between 0 and 150";
        }
        break;

      case "heightFt":
        if (value && !validateNumber(value)) {
          error = "Feet must be a whole number";
        } else if (value && !validateHeightFt(value)) {
          error = "Feet must be between 0 and 8";
        }
        break;

      case "heightIn":
        if (value && !validateNumber(value, true)) {
          error = "Inches must be a number";
        } else if (value && !validateHeightIn(value)) {
          error = "Inches must be between 0 and 11.9";
        }
        break;

      case "weight":
        if (value && !validateNumber(value, true)) {
          error = "Weight must be a number";
        } else if (value && !validateWeight(value)) {
          error = "Weight must be between 0 and 1000";
        }
        break;

      case "location":
        if (value && !validateText(value)) {
          error =
            "Location can only contain letters, spaces, hyphens, and apostrophes";
        } else if (value && value.length < 2) {
          error = "Location must be at least 2 characters long";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error
    }));
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 mb-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">
        <User size={20} className="text-black" /> Basic Details
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Personal details from onboarding
      </p>

      {/* Responsive grid layout */}
      <div
        className="
          grid 
          gap-4 
          sm:grid-cols-1     /* Small screens: 1 column */
          lg:grid-cols-2     /* Large screens: 2 columns */
          xl:grid-cols-3     /* Extra large screens: 3 columns */
        "
      >
        {/* 🧍 Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            className="input"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            onBlur={(e) => handleBlur("fullName", e.target.value)}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* 🎂 Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            className="input"
            placeholder="Age"
            type="text"
            inputMode="numeric"
            value={formData.age}
            onChange={(e) => {
              const value = e.target.value;
              if (validateNumber(value)) {
                handleInputChange("age", value);
              }
            }}
            onBlur={(e) => handleBlur("age", e.target.value)}
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">{errors.age}</p>
          )}
        </div>

        {/* 📏 Height (ft) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (ft)
          </label>
          <input
            className="input"
            placeholder="Height (ft)"
            type="text"
            inputMode="numeric"
            value={formData.heightFt}
            onChange={(e) => {
              const value = e.target.value;
              if (validateNumber(value)) {
                handleInputChange("heightFt", value);
              }
            }}
            onBlur={(e) => handleBlur("heightFt", e.target.value)}
          />
          {errors.heightFt && (
            <p className="text-red-500 text-xs mt-1">{errors.heightFt}</p>
          )}
        </div>

        {/* 📏 Height (in) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (in)
          </label>
          <input
            className="input"
            placeholder="Height (in)"
            type="text"
            inputMode="decimal"
            value={formData.heightIn}
            onChange={(e) => {
              const value = e.target.value;
              if (validateNumber(value, true)) {
                handleInputChange("heightIn", value);
              }
            }}
            onBlur={(e) => handleBlur("heightIn", e.target.value)}
          />
          {errors.heightIn && (
            <p className="text-red-500 text-xs mt-1">{errors.heightIn}</p>
          )}
        </div>

        {/* ⚖️ Weight (lbs) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight (lbs)
          </label>
          <input
            className="input"
            placeholder="Weight (lbs)"
            type="text"
            inputMode="decimal"
            value={formData.weight}
            onChange={(e) => {
              const value = e.target.value;
              if (validateNumber(value, true)) {
                handleInputChange("weight", value);
              }
            }}
            onBlur={(e) => handleBlur("weight", e.target.value)}
          />
          {errors.weight && (
            <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
          )}
        </div>

        {/* 📍 Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            className="input"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            onBlur={(e) => handleBlur("location", e.target.value)}
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;

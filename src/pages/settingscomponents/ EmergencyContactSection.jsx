import React, { useState } from "react";
import { Phone } from "lucide-react";

const EmergencyContactSection = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactPhone: "",
  });

  const [errors, setErrors] = useState({
    contactName: "",
    contactPhone: "",
  });

  // Validation helpers
  const validateText = (value) => /^[a-zA-Z\s.'-]*$/.test(value);
  const validatePhone = (value) => /^[0-9]{10}$/.test(value); // Exactly 10 digits

  const handleInputChange = (field, value) => {
    // Only allow numbers for phone field
    if (field === "contactPhone") {
      value = value.replace(/\D/g, ""); // Remove non-digit characters
      if (value.length > 10) return; // Prevent more than 10 digits
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear errors while typing
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleBlur = (field, value) => {
    let error = "";

    switch (field) {
      case "contactName":
        if (value && !validateText(value)) {
          error =
            "Name can only contain letters, spaces, hyphens, and apostrophes";
        } else if (value && value.length < 2) {
          error = "Name must be at least 2 characters long";
        }
        break;

      case "contactPhone":
        if (!validatePhone(value)) {
          error = "Phone number must be exactly 10 digits";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 mb-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">
        <Phone size={20} className="text-black" /> Emergency Contact
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Contact details for emergency situations
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
        {/* Contact Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Contact Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c972ff] transition"
            placeholder="Full Name"
            value={formData.contactName}
            onChange={(e) => handleInputChange("contactName", e.target.value)}
            onBlur={(e) => handleBlur("contactName", e.target.value)}
          />
          {errors.contactName && (
            <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>
          )}
        </div>

        {/* Contact Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Contact Phone
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c972ff] transition"
            placeholder="10-digit Phone Number"
            inputMode="numeric"
            value={formData.contactPhone}
            onChange={(e) => handleInputChange("contactPhone", e.target.value)}
            onBlur={(e) => handleBlur("contactPhone", e.target.value)}
            maxLength={10}
          />
          {errors.contactPhone && (
            <p className="text-red-500 text-xs mt-1">{errors.contactPhone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactSection;

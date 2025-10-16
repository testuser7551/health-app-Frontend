import { Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Step1({ data, onChange }) {
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let newErrors = { ...errors };

    if (field === 'fullName') {
      if (!value.trim()) newErrors.fullName = 'Full name is required';
      else delete newErrors.fullName;
    }

    if (field === 'dateOfBirth') {
      if (!value) newErrors.dateOfBirth = 'Date of birth is required';
      else if (new Date(value) > new Date()) newErrors.dateOfBirth = 'Future dates are not allowed';
      else delete newErrors.dateOfBirth;
    }

    setErrors(newErrors);
    onChange(field, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-3">
          Welcome & Verification
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
          Hi, this is Rachel from Dr. Roizen's Wellness and Longevity coaching team.
          To protect your privacy, please confirm your information:
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 font-poppins mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={data.fullName}
            onChange={(e) => validate('fullName', e.target.value)}
            className={`w-full px-4 py-2.5 sm:py-3 border ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition font-poppins text-sm sm:text-base`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1 font-poppins">{errors.fullName}</p>
          )}
        </div>

        {/* Date of Birth Field */}
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 font-poppins mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              id="dateOfBirth"
              max={new Date().toISOString().split('T')[0]}
              value={data.dateOfBirth}
              onChange={(e) => validate('dateOfBirth', e.target.value)}
              className={`w-full px-4 py-2.5 sm:py-3 border ${
                errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition font-poppins text-sm sm:text-base`}
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs mt-1 font-poppins">{errors.dateOfBirth}</p>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const RequestModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    roleType: 'Select a role',
    description: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const roleTypes = [
    'Select a role',
    'Employer',
    'Admin'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.roleType && formData.roleType !== 'Select a role') {
      onSubmit(formData);
      onClose();
    }
  };

  const handleDropdownFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownBlur = () => {
    setIsDropdownOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Header with Close Icon */}
        <div className="p-6 border-b border-gray-100 relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 pr-8">Request Role Access</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Request admin or employer access. Your request will be reviewed by an administrator.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Requested Role Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Requested Role
            </label>
            <div className="relative">
              <select
                value={formData.roleType}
                onChange={(e) => handleInputChange('roleType', e.target.value)}
                onFocus={handleDropdownFocus}
                onBlur={handleDropdownBlur}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c972ff] focus:border-transparent transition-all duration-200 appearance-none bg-white pr-10 cursor-pointer"
                required
              >
                {roleTypes.map((type) => (
                  <option 
                    key={type} 
                    value={type} 
                    disabled={type === 'Select a role'}
                  >
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                {isDropdownOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {/* Reason Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Reason (Optional)
            </label>
            <textarea
              placeholder="Why do you need this access?"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c972ff] focus:border-transparent transition resize-none placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#c972ff] text-white rounded-xl hover:bg-[#b85cf7] transition-all duration-200 font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.roleType || formData.roleType === 'Select a role'}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestModal;
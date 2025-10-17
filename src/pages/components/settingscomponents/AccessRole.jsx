import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import RequestModal from './RequestModal';

const AccessRole = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Account Access</h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        Request special access roles
      </p>

      {/* Request Role Access Option */}
      <div 
        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Shield className="w-5 h-5 text-black" />
        <span className="text-black font-medium">Request Role Access</span>
      </div>

      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AccessRole;
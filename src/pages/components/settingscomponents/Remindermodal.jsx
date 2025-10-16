import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';

const ReminderModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    reminderType: 'Log Health Metric',
    title: '',
    description: '',
    time: '13:18',
    hour: '13',
    minute: '18',
    days: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false
    }
  });

  const reminderTypes = [
    'Log Health Metric',
    'Exercise',
    'Take Medication',
    'Program Activity',
    'Custom Reminder'
  ];

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: !prev.days[day]
      }
    }));
  };

  const handleTimeChange = (type, value) => {
    const newHour = type === 'hour' ? value : formData.hour;
    const newMinute = type === 'minute' ? value : formData.minute;
    
    setFormData(prev => ({
      ...prev,
      hour: newHour,
      minute: newMinute,
      time: `${newHour}:${newMinute}`
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Create Reminder</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Reminder Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reminder Type *
            </label>
            <select
              value={formData.reminderType}
              onChange={(e) => handleInputChange('reminderType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c972ff] focus:border-transparent transition-all duration-200"
            >
              {reminderTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              placeholder="e.g., Log morning blood pressure"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="input"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              placeholder="Additional details..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c972ff] transition resize-none"
            />
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <div className="flex space-x-3">
              {/* Hour Dropdown */}
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">Hour</label>
                <div className="relative">
                  <select
                    value={formData.hour}
                    onChange={(e) => handleTimeChange('hour', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c972ff] focus:border-transparent appearance-none transition-all duration-200"
                  >
                    {hours.map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Clock size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Minute Dropdown */}
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">Minute</label>
                <div className="relative">
                  <select
                    value={formData.minute}
                    onChange={(e) => handleTimeChange('minute', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c972ff] focus:border-transparent appearance-none transition-all duration-200"
                  >
                    {minutes.map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Clock size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Days of Week */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Days of Week
            </label>
            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {[
                { key: 'sun', label: 'S' },
                { key: 'mon', label: 'M' },
                { key: 'tue', label: 'T' },
                { key: 'wed', label: 'W' },
                { key: 'thu', label: 'T' },
                { key: 'fri', label: 'F' },
                { key: 'sat', label: 'S' }
              ].map((day) => (
                <button
                  key={day.key}
                  type="button"
                  onClick={() => handleDayToggle(day.key)}
                  className={`aspect-square rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-sm font-medium ${
                    formData.days[day.key]
                      ? 'bg-[#c972ff] border-[#c972ff] text-white'
                      : 'border-gray-300 text-gray-600 hover:border-[#c972ff] hover:text-[#c972ff]'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-[#c972ff] text-white rounded-lg hover:bg-[#b85cf7] transition-all duration-200 font-medium shadow-sm"
            >
              Create Reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReminderModal;
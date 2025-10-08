// import React from "react";
// import { Trash2, ToggleLeft, ToggleRight,Bell } from "lucide-react";
// import { useState } from "react";
// import ReminderModal from './Remindermodal';

// const SmartReminders = () => {
//   const [enabled, setEnabled] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleCreateReminder = (reminderData) => {
//     console.log('Reminder created:', reminderData);
//     // Handle the reminder data here
//   };
//   return (
//     <div className="bg-white rounded-xl p-4 sm:p-6">
//       <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">
//         <Bell size={20} className="text-black" /> Smart Reminders
//       </h2>

//       <p className="text-sm text-gray-500 mb-4">
//         Set up automatic reminders for health tracking and activities
//       </p>

//       <div className="flex justify-end mb-4">
//         <button onClick={() => setIsModalOpen(true)} className="bg-[#c972ff] text-white px-4 py-2 rounded-lg hover:bg-[#b75cf5]">
//           + Add Reminder
//         </button>
//         <ReminderModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleCreateReminder}
//       />
//       </div>

//       <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h3 className="font-semibold">My custom reminder</h3>
//           <p className="text-sm text-gray-600">Testing the reminder system</p>
//           <p className="text-xs text-gray-500">09:00 AM | Sun–Sat</p>
//         </div>

//       <div className="flex items-center gap-4 mt-3 sm:mt-0">
//         <button onClick={() => setEnabled(!enabled)}>
//           {enabled ? (
//             <ToggleRight size={28} className="text-[#c972ff]" />
//           ) : (
//             <ToggleLeft size={28} className="text-gray-400" />
//           )}
//         </button>
//         <button className="text-red-500 hover:text-red-700">
//           <Trash2 size={20} />
//         </button>
//       </div>

//       </div>
//     </div>
//   );
// };

// export default SmartReminders;




import React from "react";
import { Trash2, ToggleLeft, ToggleRight, Bell } from "lucide-react";
import { useState } from "react";
import ReminderModal from './Remindermodal';

const SmartReminders = () => {
  const [enabled, setEnabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "My custom reminder",
      description: "Testing the reminder system",
      time: "09:00",
      days: { sun: true, mon: true, tue: true, wed: true, thu: true, fri: true, sat: true },
      enabled: true,
      reminderType: "Custom Reminder"
    }
  ]);

  const handleCreateReminder = (reminderData) => {
    const newReminder = {
      id: Date.now(), // Simple ID generation
      ...reminderData,
      enabled: true
    };
    setReminders(prev => [...prev, newReminder]);
  };

  const handleDeleteReminder = (id) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
  };

  const handleToggleReminder = (id) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, enabled: !reminder.enabled }
          : reminder
      )
    );
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const formatDays = (days) => {
    const dayMap = { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' };
    const selectedDays = Object.entries(days)
      .filter(([_, isSelected]) => isSelected)
      .map(([day]) => dayMap[day]);
    
    if (selectedDays.length === 7) return 'Every day';
    if (selectedDays.length === 2 && days.sat && days.sun) return 'Weekends';
    if (selectedDays.length === 5 && !days.sat && !days.sun) return 'Weekdays';
    
    return selectedDays.join(', ');
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">
        <Bell size={20} className="text-black" /> Smart Reminders
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Set up automatic reminders for health tracking and activities
      </p>

      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-[#c972ff] text-white px-4 py-2 rounded-lg hover:bg-[#b75cf5] transition-all duration-200"
        >
          + Add Reminder
        </button>
        <ReminderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateReminder}
        />
      </div>

      {/* Reminders List */}
      <div className="space-y-4">
        {reminders.map((reminder) => (
          <div 
            key={reminder.id} 
            className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-100"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{reminder.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {reminder.description || `${reminder.reminderType} reminder`}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {formatTime(reminder.time)} | {formatDays(reminder.days)}
              </p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-purple-100 text-[#c972ff] rounded-full">
                {reminder.reminderType}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-3 sm:mt-0">
              <button 
                onClick={() => handleToggleReminder(reminder.id)}
                className="transition-all duration-200 hover:scale-110"
              >
                {reminder.enabled ? (
                  <ToggleRight size={28} className="text-[#c972ff]" />
                ) : (
                  <ToggleLeft size={28} className="text-gray-400" />
                )}
              </button>
              <button 
                onClick={() => handleDeleteReminder(reminder.id)}
                className="text-red-500 hover:text-red-700 transition-all duration-200 hover:scale-110"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        {reminders.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Bell size={48} className="mx-auto mb-2 text-gray-300" />
            <p>No reminders yet. Click "Add Reminder" to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartReminders;

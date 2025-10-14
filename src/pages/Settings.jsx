import React, { useState } from "react";
import { User, Bell } from "lucide-react";
import BasicInformation from "./settingscomponents/BasicInformation";
import MedicalInformation from "./settingscomponents/MedicalInformation";
import EmergencyContactSection from "./settingscomponents/ EmergencyContactSection"
import SmartReminders from "./settingscomponents/SmartReminders";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
<div className="min-h-screen bg-gradient-to-r from-primary-accent to-secondary py-6 px-4">
<div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-white">Settings</h1>
        <p className="text-white mb-6">Manage your health information and preferences.</p>

        {/* Tabs */}
        <div className="flex items-center justify-center bg-white rounded-full p-1 mb-6">
          <button
            onClick={() => setActiveTab("personal")}
            className={`flex items-center gap-2 w-1/2 justify-center py-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-[#c972ff] text-white"
                : "text-gray-600 hover:bg-[#c972ff]/20"
            }`}
          >
            <User size={18} /> Personal Health
          </button>
          <button
            onClick={() => setActiveTab("reminders")}
            className={`flex items-center gap-2 w-1/2 justify-center py-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeTab === "reminders"
                ? "bg-[#c972ff] text-white"
                : "text-gray-600 hover:bg-[#c972ff]/20"
            }`}
          >
            <Bell size={18} /> Reminders
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "personal" ? (
          <>
            <BasicInformation />
            <MedicalInformation />
            <EmergencyContactSection />

            <div className="flex justify-end mt-6">
              <button className="bg-[#c972ff] text-white px-6 py-2 rounded-lg hover:bg-[#b75cf5] transition cursor-pointer" >
                Save Health Information
              </button>
            </div>
          </>
        ) : (
          <SmartReminders />
        )}
      </div>
    </div>
  );
};

export default Settings;

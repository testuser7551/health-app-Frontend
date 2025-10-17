import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { User, Bell, Heart } from "lucide-react";
import BasicInformation from "./components/settingscomponents/BasicInformation";
import MedicalInformation from "./components/settingscomponents/MedicalInformation";
import EmergencyContactSection from "./components/settingscomponents/ EmergencyContactSection"
import SmartReminders from "./components/settingscomponents/SmartReminders";
import HealthProfile from "./components/settingscomponents/HealthProfile";
import AccessRole from "./components/settingscomponents/AccessRole";

const Settings = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("personal");

  // 👇 check for ?tab=reminders or others when component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) setActiveTab(tab);
  }, [location.search]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-accent to-secondary py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-white">Settings</h1>
        <p className="text-white mb-6">Manage your health information and preferences.</p>

        {/* Tabs */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center bg-white rounded-lg md:rounded-full p-1 mb-6">
          <button
            onClick={() => setActiveTab("personal")}
            className={`w-full md:w-1/2 flex items-center gap-2 justify-center py-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-[#c972ff] text-white"
                : "text-gray-600 hover:bg-[#c972ff]/20"
            }`}
          >
            <Heart size={18} /> Personal Health
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-2 w-full md:w-1/2 justify-center py-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-[#c972ff] text-white"
                : "text-gray-600 hover:bg-[#c972ff]/20"
            }`}
          >
            <User size={18} /> Health Profile
          </button>

          <button
            onClick={() => setActiveTab("reminders")}
            className={`flex items-center gap-2 w-full md:w-1/2 justify-center py-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeTab === "reminders"
                ? "bg-[#c972ff] text-white"
                : "text-gray-600 hover:bg-[#c972ff]/20"
            }`}
          >
            <Bell size={18} /> Reminders
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "personal" && (
          <>
            <BasicInformation />
            <MedicalInformation />
            <EmergencyContactSection />
            <AccessRole/>
          </>
        )}

        {activeTab === "profile" && <HealthProfile />}
        {activeTab === "reminders" && <SmartReminders />}

        {(activeTab === "personal" || activeTab === "profile") && (
          <div className="flex justify-end mt-6 w-full">
            <button className="bg-[#c972ff] text-white px-6 py-2 rounded-lg hover:bg-[#b75cf5] transition cursor-pointer w-full sm:w-auto">
              {activeTab === "personal"
                ? "Save Personal Health Information"
                : "Save Health Profile"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;





import React, { useState } from "react";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import { medicationData, medicationTypes } from "./MedicationData";

export default function MedicationModal({ onClose }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedMeds, setSelectedMeds] = useState([]);
  const [customMed, setCustomMed] = useState("");

  const filteredData = medicationData.filter((med) => {
    const matchesType = filter === "All" || med.type === filter;
    const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Toggle select/deselect medication
  const handleSelect = (name) => {
    setSelectedMeds((prev) =>
      prev.includes(name)
        ? prev.filter((m) => m !== name)
        : [...prev, name]
    );
  };

  // Handle done button (send selected meds + custom to parent)
  const handleDone = () => {
    let finalList = [...selectedMeds];
    if (customMed.trim()) finalList.push(customMed.trim());
    onClose(finalList);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Add Medication</h2>
          <button onClick={() => onClose(null)}>
            <X size={24} className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="p-6 space-y-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search medications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c972ff] focus:border-transparent transition-all duration-200"
          />

          {/* Filter Buttons Grid (2x3 layout) */}
          <div className="grid grid-cols-3 gap-2">
            {medicationTypes.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-2 text-sm  border transition-all duration-200 ${
                  filter === t
                    ? "bg-[#c972ff] border-[#c972ff] text-white"
                    : "border-gray-300 text-gray-600 hover:border-[#c972ff] hover:text-[#c972ff]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Medication List */}

          <div className="border border-gray-200 rounded-lg h-72 overflow-y-auto mt-2">
            {filteredData.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-6">
                No medications found
              </p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {filteredData.map((med, idx) => {
                  const isSelected = selectedMeds.includes(med.name);
                  return (
                    <li
                      key={idx}
                      onClick={() => handleSelect(med.name)}
                      className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-all duration-200 ${
                        isSelected ? "bg-[#f3e8ff]" : "hover:bg-gray-50"
                      }`}
                    >
                      <div>
                        <p className="font-medium text-gray-800">{med.name}</p>
                        <p className="text-sm text-gray-500">{med.type}</p>
                      </div>

                      {isSelected && (
                        <Check size={20} className="text-green-500 flex-shrink-0" />
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>


        </div>

        {/* Custom Field + Buttons */}
        <div className="p-6 border-t border-gray-200 space-y-4">
          <input
            type="text"
            placeholder="Type custom medication name and dosage"
            value={customMed}
            onChange={(e) => setCustomMed(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c972ff] focus:border-transparent transition-all duration-200"
          />

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => onClose(null)}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDone}
              className="flex-1 px-4 py-3 bg-[#c972ff] text-white rounded-lg hover:bg-[#b85cf7] transition-all duration-200 font-medium shadow-sm"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

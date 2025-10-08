import React, { useState } from "react";
import { Stethoscope, Pill, CircleAlert, Droplet, Heart } from "lucide-react";


const MedicalInformation = () => {
  const [conditions, setConditions] = useState([]);
  const [medications, setMedications] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [input, setInput] = useState({ condition: "", medication: "", allergy: "" });

  const handleAdd = (field) => {
    if (input[field].trim() !== "") {
      const updater =
        field === "condition"
          ? setConditions
          : field === "medication"
          ? setMedications
          : setAllergies;
      updater((prev) => [...prev, input[field]]);
      setInput((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleRemove = (field, index) => {
    const updater =
      field === "condition"
        ? setConditions
        : field === "medication"
        ? setMedications
        : setAllergies;
    updater((prev) => prev.filter((_, i) => i !== index));
  };

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 mb-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <Heart size={20} className="text-black" /> Medical Infromation
      </h2>

      {/* Pre-existing Conditions */}
      <div className="mb-4">
      <label className="flex items-center gap-2 font-medium text-gray-700">
        <Stethoscope size={18} className="text-black" /> Pre-existing Conditions
      </label>

        <div className="flex gap-2 mt-2">
          <input
            value={input.condition}
            onChange={(e) => setInput({ ...input, condition: e.target.value })}
            placeholder="Add condition (e.g., Diabetes)"
            className="input flex-grow"
          />
          <button
            onClick={() => handleAdd("condition")}
            className="bg-[#c972ff] text-white px-4 rounded-lg hover:bg-[#b75cf5]"
          >
            Add
          </button>
        </div>
        <ul className="mt-2 space-y-1">
          {conditions.map((item, i) => (
            <li key={i} className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
              <span>{item}</span>
              <button
                onClick={() => handleRemove("condition", i)}
                className="text-red-500 text-sm font-semibold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Current Medications */}
      <div className="mb-4">
      <label className="flex items-center gap-2 font-medium text-gray-700">
        <Pill size={18} className="text-black" /> Current Medications
      </label>

        <div className="flex gap-2 mt-2">
          <input
            value={input.medication}
            onChange={(e) => setInput({ ...input, medication: e.target.value })}
            placeholder="Add medication (e.g., Metformin 500mg)"
            className="input flex-grow"
          />
          <button
            onClick={() => handleAdd("medication")}
            className="bg-[#c972ff] text-white px-4 rounded-lg hover:bg-[#b75cf5]"
          >
            Add
          </button>
        </div>
        <ul className="mt-2 space-y-1">
          {medications.map((item, i) => (
            <li key={i} className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
              <span>{item}</span>
              <button
                onClick={() => handleRemove("medication", i)}
                className="text-red-500 text-sm font-semibold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Allergies */}
      <div className="mb-4">
      <label className="flex items-center gap-2 font-medium text-gray-700">
        <CircleAlert size={18} className="text-black" /> Allergies
      </label>

        <div className="flex gap-2 mt-2">
          <input
            value={input.allergy}
            onChange={(e) => setInput({ ...input, allergy: e.target.value })}
            placeholder="Add allergy (e.g., Peanuts)"
            className="input flex-grow"
          />
          <button
            onClick={() => handleAdd("allergy")}
            className="bg-[#c972ff] text-white px-4 rounded-lg hover:bg-[#b75cf5]"
          >
            Add
          </button>
        </div>
        <ul className="mt-2 space-y-1">
          {allergies.map((item, i) => (
            <li key={i} className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
              <span>{item}</span>
              <button
                onClick={() => handleRemove("allergy", i)}
                className="text-red-500 text-sm font-semibold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Blood Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Blood Type Section */}
  <div>
    <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
      <Droplet size={18} className="text-black" /> Blood Type
    </label>
    <select className="input">
      <option>Select blood type</option>
      {bloodTypes.map((b) => (
        <option key={b}>{b}</option>
      ))}
    </select>
  </div>

  {/* Primary Care Physician Section */}
  <div>
    <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
       Primary Care Physician
    </label>
    <input 
      type="text"
      className="input"
      placeholder="Dr. Smith"
    />
  </div>
</div>
    </div>
  );
};

export default MedicalInformation;

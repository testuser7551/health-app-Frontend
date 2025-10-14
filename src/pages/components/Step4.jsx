export default function Step4({ data, onChange }) {
  // Validation helper inside component (optional)
  const isValid = data.physicianName.trim() !== '' && data.physicianLocation.trim() !== '';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-3">
          Primary Care Physician
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
          Please provide your primary care physician's information:
        </p>
      </div>

      <div className="space-y-4">
        {/* Physician Name */}
        <div>
          <label
            htmlFor="physicianName"
            className="block text-sm font-medium text-gray-700 font-poppins mb-2"
          >
            Physician Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="physicianName"
            value={data.physicianName}
            onChange={(e) => onChange('physicianName', e.target.value)}
            className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#d175ff] focus:border-transparent outline-none transition font-poppins text-sm sm:text-base ${
              !data.physicianName.trim() ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="Dr. John Smith"
            required
          />
        </div>

        {/* Location / Practice */}
        <div>
          <label
            htmlFor="physicianLocation"
            className="block text-sm font-medium text-gray-700 font-poppins mb-2"
          >
            Location / Practice <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="physicianLocation"
            value={data.physicianLocation}
            onChange={(e) => onChange('physicianLocation', e.target.value)}
            className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#d175ff] focus:border-transparent outline-none transition font-poppins text-sm sm:text-base ${
              !data.physicianLocation.trim() ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="Medical Center, City"
            required
          />
        </div>
      </div>
    </div>
  );
}

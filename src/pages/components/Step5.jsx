export default function Step5({ data, onChange }) {
  const isInvalid = (val) => val === '' || val === null || val === undefined;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-3">
          Health Measurements
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
          Let's record your current health measurements:
        </p>
      </div>

      <div className="space-y-4">
        {/* Height fields */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label
              htmlFor="heightFeet"
              className="block text-sm font-medium text-gray-700 font-poppins mb-2"
            >
              Height (feet) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="heightFeet"
              value={data.heightFeet}
              onChange={(e) => onChange('heightFeet', e.target.value)}
              className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg outline-none transition font-poppins text-sm sm:text-base 
                ${isInvalid(data.heightFeet) ? 'border-red-400' : 'border-gray-300 focus:ring-2 focus:ring-[#d175ff] focus:border-transparent'}`}
              placeholder="5"
              min="0"
              required
            />
          </div>

          <div>
            <label
              htmlFor="heightInches"
              className="block text-sm font-medium text-gray-700 font-poppins mb-2"
            >
              Height (inches) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="heightInches"
              value={data.heightInches}
              onChange={(e) => onChange('heightInches', e.target.value)}
              className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg outline-none transition font-poppins text-sm sm:text-base 
                ${isInvalid(data.heightInches) ? 'border-red-400' : 'border-gray-300 focus:ring-2 focus:ring-[#d175ff] focus:border-transparent'}`}
              placeholder="8"
              min="0"
              max="11"
              required
            />
          </div>
        </div>

        {/* Weight */}
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700 font-poppins mb-2"
          >
            Weight (lbs) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="weight"
            value={data.weight}
            onChange={(e) => onChange('weight', e.target.value)}
            className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg outline-none transition font-poppins text-sm sm:text-base 
              ${isInvalid(data.weight) ? 'border-red-400' : 'border-gray-300 focus:ring-2 focus:ring-[#d175ff] focus:border-transparent'}`}
            placeholder="150"
            min="0"
            required
          />
        </div>

        {/* Waist */}
        <div>
          <label
            htmlFor="waistMeasurement"
            className="block text-sm font-medium text-gray-700 font-poppins mb-2"
          >
            Waist Measurement (inches) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="waistMeasurement"
            value={data.waistMeasurement}
            onChange={(e) => onChange('waistMeasurement', e.target.value)}
            className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg outline-none transition font-poppins text-sm sm:text-base 
              ${isInvalid(data.waistMeasurement) ? 'border-red-400' : 'border-gray-300 focus:ring-2 focus:ring-[#d175ff] focus:border-transparent'}`}
            placeholder="32"
            min="0"
            required
          />
        </div>

        {/* Blood Pressure */}
<div>
  <label className="block text-sm font-medium text-gray-700 font-poppins mb-3">
    Do you have high blood pressure? <span className="text-red-500">*</span>
  </label>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    {["yes", "no"].map((val) => {
      const isChecked = data.highBloodPressure === val;
      return (
        <label
          key={val}
          className="flex items-center space-x-3 cursor-pointer group select-none"
        >
          <div
            className={`radio-purple ${isChecked ? "checked" : ""}`}
            onClick={() => onChange("highBloodPressure", val)}
          >
            <input
              type="radio"
              name="highBloodPressure"
              checked={isChecked}
              onChange={() => onChange("highBloodPressure", val)}
              required
            />
            {/* White tick icon inside purple fill */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <span className="text-sm sm:text-base text-gray-700 font-poppins group-hover:text-gray-900 transition">
            {val === "yes" ? "Yes" : "No"}
          </span>
        </label>
      );
    })}
  </div>

  {isInvalid(data.highBloodPressure) && (
    <p className="text-red-500 text-xs mt-1 font-poppins">
      Please select an option.
    </p>
  )}
</div>

      </div>
    </div>
  );
}

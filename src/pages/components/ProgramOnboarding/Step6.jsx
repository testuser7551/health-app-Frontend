export default function Step6({ data, onChange }) {
  const isInvalid = (val) => val === '' || val === null || val === undefined;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-3">
          Physical Activity
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
          Tell us about your current exercise routine:
        </p>
      </div>

      <div className="space-y-4">
        {/* Exercise radio */}
<div>
  <label className="block text-sm font-medium text-gray-700 font-poppins mb-3">
    Do you exercise regularly? <span className="text-red-500">*</span>
  </label>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    {["yes", "no"].map((val) => {
      const isChecked = data.exercisesRegularly === val;
      return (
        <label
          key={val}
          className="flex items-center space-x-3 cursor-pointer group select-none"
        >
          <div
            className={`radio-purple ${isChecked ? "checked" : ""}`}
            onClick={() => onChange("exercisesRegularly", val)}
          >
            <input
              type="radio"
              name="exercisesRegularly"
              checked={isChecked}
              onChange={() => onChange("exercisesRegularly", val)}
              required
            />
            {/* White tick icon inside the purple circle */}
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

  {isInvalid(data.exercisesRegularly) && (
    <p className="text-red-500 text-xs mt-1 font-poppins">
      Please select an option.
    </p>
  )}
</div>

      </div>
    </div>
  );
}

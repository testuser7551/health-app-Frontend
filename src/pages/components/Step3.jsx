export default function Step3({ data, onChange }) {
  const RadioOption = ({ field, checked, label }) => (
    <label className="flex items-start space-x-3 cursor-pointer group">
      <span className={`radio-purple ${checked ? 'checked' : ''}`}>
        <input
          type="radio"
          name={field}
          checked={checked}
          onChange={() => onChange(field, true)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span
        className={`text-sm sm:text-base font-poppins leading-relaxed transition ${
          checked ? 'text-black font-medium' : 'text-gray-700'
        }`}
      >
        {label}
      </span>
    </label>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-3">
          Program Agreement
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
          Please review and agree to the following terms:
        </p>
      </div>

      <div className="space-y-5 border-b border-gray-200 pb-4">
        <RadioOption
          field="agreement1"
          checked={data.agreement1}
          label="I understand this is a coaching program and not medical advice. I will consult my healthcare provider for medical decisions."
        />
        <RadioOption
          field="agreement2"
          checked={data.agreement2}
          label="I have a primary care physician and will share relevant information from this program with them."
        />
        <RadioOption
          field="agreement3"
          checked={data.agreement3}
          label="I agree to follow up with my healthcare provider as recommended during this program."
        />
      </div>
    </div>
  );
}

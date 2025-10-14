

// import React, { useState, useEffect } from "react";

// export default function Step9({ data, onChange }) {
//   const [responses, setResponses] = useState(data.wellbeing || {});

//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Feeling tired or having little energy",
//     "Feeling nervous, anxious, or on edge",
//     "Not being able to stop or control worrying",
//   ];

//   const options = [
//     "Not at all",
//     "Several days",
//     "More than half the days",
//     "Nearly every day",
//   ];

//   const handleChange = (question, value) => {
//     const updated = { ...responses, [question]: value };
//     setResponses(updated);
//     onChange("wellbeing", updated);
//   };

//   const canProceed = Object.keys(responses).length === questions.length;

//   return (
//     <div className="w-full space-y-6">
//       <h2 className="text-xl md:text-2xl font-bold font-poppins">
//         Wellbeing Assessment
//       </h2>
//       <p className="text-gray-500 font-poppins">
//         Over the past 2 weeks, how often have you experienced the following?
//       </p>

//       <div className="space-y-6">
//         {questions.map((q) => (
//           <div key={q} className="border-b border-gray-200 pb-4">
//             <p className="font-semibold text-gray-800 mb-3">{q}</p>

//             <div className="flex flex-col gap-2">
//               {options.map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <button
//                     type="button"
//                     role="radio"
//                     aria-checked={responses[q] === opt}
//                     onClick={() => handleChange(q, opt)}
//                     className={`aspect-square h-4 w-4 rounded-full border-2 border-[#d175ff] flex items-center justify-center transition ${
//                       responses[q] === opt ? "bg-[#d175ff]" : "bg-transparent"
//                     }`}
//                   >
//                     {responses[q] === opt && (
//                       <div className="w-2 h-2 rounded-full bg-white" />
//                     )}
//                   </button>
//                   <span className="text-sm sm:text-base font-poppins text-gray-800">
//                     {opt}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";

export default function Step9({ data, onChange }) {
  const [responses, setResponses] = useState(data.wellbeing || {});

  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Feeling tired or having little energy",
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
  ];

  const options = [
    "Not at all",
    "Several days",
    "More than half the days",
    "Nearly every day",
  ];

  const handleChange = (question, value) => {
    const updated = { ...responses, [question]: value };
    setResponses(updated);
    onChange("wellbeing", updated);
  };

  return (
    <div className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-poppins">
        Wellbeing Assessment
      </h2>
      <p className="text-gray-500 font-poppins">
        Over the past 2 weeks, how often have you experienced the following?
      </p>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q} className="pb-4 border-b border-gray-200">
            <p className="font-semibold text-gray-800 mb-3">{q}</p>

            <div className="flex flex-col gap-3">
              {options.map((opt) => {
                const isSelected = responses[q] === opt;
                return (
                  <label
                    key={opt}
                    className="flex items-center gap-3 cursor-pointer group select-none"
                    onClick={() => handleChange(q, opt)}
                  >
                    <div
                      className={`radio-purple ${isSelected ? "checked" : ""}`}
                    >
                      <input
                        type="radio"
                        name={q}
                        checked={isSelected}
                        onChange={() => handleChange(q, opt)}
                      />
                      {/* White Tick SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-poppins text-gray-800 group-hover:text-gray-900 transition">
                      {opt}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

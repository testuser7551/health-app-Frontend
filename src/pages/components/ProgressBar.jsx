export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm text-gray-600 font-poppins">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs sm:text-sm text-gray-600 font-poppins">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-[#6c15a2] rounded-full h-2 sm:h-2.5">
        <div
          className="bg-[#d175ff] h-4 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

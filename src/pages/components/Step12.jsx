import React from "react";

const Step12 = () => {
  return (
    <div className="w-full space-y-6 font-poppins text-gray-800">
      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Review & Complete
        </h2>
        <p className="text-gray-600">
          Thank you for completing the onboarding process! Let's review what
          happens next:
        </p>
      </div>

      {/* Your Program Journey */}
      <div className="bg-[#faf1ff] p-5 md:p-6 rounded-xl shadow-sm border border-rose-100">
        <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-900">
          Your Program Journey
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>180-day personalized wellness program</li>
          <li>Daily check-ins and progress tracking</li>
          <li>Educational content tailored to your needs</li>
          <li>Regular assessments and adjustments</li>
          <li>Support from our coaching team</li>
        </ul>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-900">
          Next Steps
        </h3>
        <p className="text-gray-700 leading-relaxed">
          After completing this onboarding, you’ll be taken to Day 1 of your
          program. Each day includes educational content and a daily check-in to
          track your progress.
        </p>
      </div>

      {/* Important Reminders */}
      <div className="bg-[#faf1ff] p-5 md:p-6 rounded-xl shadow-sm border border-rose-100">
        <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-900">
          Important Reminders
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            This program complements, but does not replace, medical care
          </li>
          <li>Share your progress with your healthcare provider</li>
          <li>Contact your doctor if you have any health concerns</li>
          <li>Your data is private and secure</li>
        </ul>
      </div>
    </div>
  );
};

export default Step12;

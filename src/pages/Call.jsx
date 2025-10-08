import React from "react";
import { PhoneCall } from "lucide-react";

export default function Call() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gray-100">
      {/* Page Title - Left Aligned */}
      <div className="w-full max-w-2xl mb-8">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-left"
          style={{
            fontFamily: "var(--font-gilmer)",
            color: "var(--color-primary)",
          }}
        >
          Call Dr. Roizen
        </h1>
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl text-center">
        {/* Header */}
        <div className="bg-white py-6 px-6 sm:px-8">
          <h2
            className="text-lg sm:text-xl font-semibold"
            style={{ fontFamily: "var(--font-gilmer)" }}
          >
            Speak with Dr. Michael Roizen
          </h2>
        </div>

        {/* Profile */}
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <div className="rounded-full border-4 border-[#F3D7FF] p-1">
              <img
                src="public/Roizen.jpg"
                alt="Dr. Michael Roizen"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover"
              />
            </div>
          </div>
          <h3
            className="mt-4 text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "var(--font-gilmer)" }}
          >
            Dr. Michael Roizen, MD
          </h3>
          <p
            className="mt-2 text-sm sm:text-base text-gray-600"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Chief Wellness Officer Emeritus at Cleveland Clinic and #1 New York
            Times bestselling author. Dr. Roizen has dedicated his career to
            helping people achieve optimal health and vitality through
            evidence-based wellness strategies.
          </p>

          {/* Start Call Button - Centered */}
          <div className="mt-6 flex justify-center">
            <a href="tel:+18001234567" className="hover:scale-105 transform-duration-all cursor-pointer flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary-accent text-white text-base sm:text-lg hover:bg-opacity-90 transition-colors">
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              Start Call
            </a>
          </div>

          {/* What He Can Help With - Gray Background, 2 Columns */}
          <div className="mt-8  rounded-xl p-4 sm:p-6 text-left">
            <h4
              className="text-base sm:text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--font-gilmer)" }}
            >
              What can Dr. Roizen help you with?
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm sm:text-base text-gray-700">
              <ul
                className="list-disc pl-5 space-y-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <li>Personalized health advice</li>
                <li>Questions about your metrics</li>
              </ul>
              <ul
                className="list-disc pl-5 space-y-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <li>Wellness program guidance</li>
                <li>Lifestyle optimization tips</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 bg-white max-w-2xl w-full text-sm text-gray-600 px-4 py-3 rounded-xl text-center shadow-md">
        <strong>Note:</strong> This AI-powered voice interface provides guidance
        based on Dr. Roizen’s protocols and expertise. For medical emergencies,
        please call 911 or consult your healthcare provider.
      </div>
    </div>
  );
}

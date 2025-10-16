import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { X } from 'lucide-react';
import ProgressBar from './ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';

export default function OnboardingModal({ isOpen, onClose, currentProgram  }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 12;
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    agreement1: false,
    agreement2: false,
    agreement3: false,
    physicianName: '',
    physicianLocation: '',
    hasPCP: '',
    heightFeet: '',
    heightInches: '',
    weight: '',
    waistMeasurement: '',
    highBloodPressure: '',
    exercisesRegularly: '',
    familyHistory: [],
    personalHistory: [],
    wellbeing: {},
    lifestyle: {},
    goals: {},
  });

  const updateFormData = (field, value) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log('Form completed:', formData);
      onClose();
      navigate(`/programs/${currentProgram._id}/day/1`);
    }
  };
  

  const handleBack = () => currentStep > 1 && setCurrentStep(prev => prev - 1);

  if (!isOpen) return null;

  // ✅ Centralized validation logic
  const validators = {
    1: () => {
      const { fullName, dateOfBirth } = formData;
      return fullName.trim() && dateOfBirth && new Date(dateOfBirth) <= new Date();
    },
    3: () => formData.agreement1 && formData.agreement2 && formData.agreement3,
    4: () => formData.physicianName.trim() && formData.physicianLocation.trim(),
    5: () =>
      formData.heightFeet && formData.heightInches && formData.weight &&
      formData.waistMeasurement && formData.highBloodPressure,
    6: () => formData.exercisesRegularly,
    7: () => formData.familyHistory.length > 0,
    8: () => formData.personalHistory.length > 0,
    9: () => Object.keys(formData.wellbeing).length === 5,
    10: () => {
      const { tobaccoUse, alcoholUse, sleepHours, stressLevel } = formData.lifestyle;
      return tobaccoUse && alcoholUse && sleepHours > 0 && stressLevel;
    },
    11: () => {
      const { primaryGoals, goal6Months, goal1Year, goal3Years } = formData.goals;
      return primaryGoals?.length && goal6Months && goal1Year && goal3Years;
    },
  };

  const isCurrentStepValid = validators[currentStep]?.() ?? true;

  const steps = [
    <Step1 data={formData} onChange={updateFormData} />,
    <Step2 />,
    <Step3 data={formData} onChange={updateFormData} />,
    <Step4 data={formData} onChange={updateFormData} />,
    <Step5 data={formData} onChange={updateFormData} />,
    <Step6 data={formData} onChange={updateFormData} />,
    <Step7 data={formData} onChange={updateFormData} />,
    <Step8 data={formData} onChange={updateFormData} />,
    <Step9 data={formData} onChange={updateFormData} />,
    <Step10 data={formData} onChange={updateFormData} />,
    <Step11 data={formData} onChange={updateFormData} />,
    <Step12 />,
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-poppins">
              Day 1: Program Onboarding
            </h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition rounded-full p-1 hover:bg-gray-100"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">{steps[currentStep - 1]}</div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex gap-3 sm:gap-4">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex-1 px-6 py-3 bg-white text-gray-700 rounded-2xl disabled:opacity-50 font-poppins"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isCurrentStepValid}
            className={`flex-1 px-6 py-3 font-medium rounded-2xl font-poppins transition ${
              isCurrentStepValid
                ? 'bg-[#d583ff] text-gray-900 hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentStep === totalSteps ? 'Complete Onboarding' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

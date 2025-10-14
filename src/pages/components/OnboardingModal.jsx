
// import { useState } from 'react';
// import { X } from 'lucide-react';
// import ProgressBar from './ProgressBar';
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Step4 from './Step4';
// import Step5 from './Step5';
// import Step6 from './Step6';
// import Step7 from './Step7';
// import Step8 from './Step8';
// import Step9 from './Step9';
// import Step10 from './Step10';
// import Step11 from './Step11';
// import Step12 from './Step12';

// export default function OnboardingModal({ isOpen, onClose }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   const totalSteps = 12;

//   const [formData, setFormData] = useState({
//     fullName: '',
//     dateOfBirth: '',
//     agreement1: false,
//     agreement2: false,
//     agreement3: false,
//     physicianName: '',
//     physicianLocation: '',
//     hasPCP: '',
//     heightFeet: '',
//     heightInches: '',
//     weight: '',
//     waistMeasurement: '',
//     highBloodPressure: '',
//     exercisesRegularly: '',
//     familyHistory: [],
//     personalHistory: [],
//     wellbeing: {},
//     lifestyle: {},
//     goals: {},
//   });

//   const updateFormData = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       console.log('Form completed:', formData);
//       onClose();
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   if (!isOpen) return null;

//   // ✅ Step 1 validation logic for disabling Next
// const isStep1Valid = () => {
//     const { fullName, dateOfBirth } = formData;
//     if (!fullName.trim() || !dateOfBirth) return false;
//     if (new Date(dateOfBirth) > new Date()) return false;
//     return true;
//   };

// const isStep3Valid = () => {
//     const { agreement1, agreement2, agreement3 } = formData;
//     return agreement1 === true && agreement2 === true && agreement3 === true;
//   };
// const isStep4Valid = () => formData.physicianName.trim() !== '' && formData.physicianLocation.trim() !== '';



// const isStep5Valid = () =>
//   formData.heightFeet.trim() !== '' &&
//   formData.heightInches.trim() !== '' &&
//   formData.weight.trim() !== '' &&
//   formData.waistMeasurement.trim() !== '' &&
//   formData.highBloodPressure !== '';

// const isStep6Valid = () => formData.exercisesRegularly !== '';



// const isStep7Valid = () =>
//   formData.familyHistory && formData.familyHistory.length > 0;

// // ✅ Step 8 validation
// const isStep8Valid = () =>
//   formData.personalHistory && formData.personalHistory.length > 0;

// // ✅ Step 9 validation
// const isStep9Valid = () => {
//   const wellbeing = formData.wellbeing || {};
//   // Must have all 5 responses filled in
//   return Object.keys(wellbeing).length === 5;
// };

// // Step 10 validation
// const isStep10Valid = () => {
//   const { lifestyle } = formData;
//   if (!lifestyle) return false;
//   const { tobaccoUse, alcoholUse, sleepHours, stressLevel } = lifestyle;
//   return (
//     tobaccoUse &&
//     alcoholUse &&
//     sleepHours &&
//     Number(sleepHours) > 0 &&
//     stressLevel
//   );
// };

// // Step 11 validation
// const isStep11Valid = () => {
//   const { goals } = formData;
//   if (!goals) return false;
//   const { primaryGoals, goal6Months, goal1Year, goal3Years } = goals;
//   return (
//     primaryGoals?.length > 0 &&
//     goal6Months.trim() !== "" &&
//     goal1Year.trim() !== "" &&
//     goal3Years.trim() !== ""
//   );
// };




//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <Step1
//             data={{ fullName: formData.fullName, dateOfBirth: formData.dateOfBirth }}
//             onChange={updateFormData}
//           />
//         );
//       case 2:
//         return <Step2 />;
//       case 3:
//         return (
//           <Step3
//             data={{
//               agreement1: formData.agreement1,
//               agreement2: formData.agreement2,
//               agreement3: formData.agreement3,
//             }}
//             onChange={updateFormData}
//           />
//         );
//       case 4:
//         return (
//           <Step4
//             data={{
//               physicianName: formData.physicianName,
//               physicianLocation: formData.physicianLocation,
//               hasPCP: formData.hasPCP,
//             }}
//             onChange={updateFormData}
//           />
//         );
//       case 5:
//         return (
//           <Step5
//             data={{
//               heightFeet: formData.heightFeet,
//               heightInches: formData.heightInches,
//               weight: formData.weight,
//               waistMeasurement: formData.waistMeasurement,
//               highBloodPressure: formData.highBloodPressure,
//             }}
//             onChange={updateFormData}
//           />
//         );
//       case 6:
//         return (
//           <Step6
//             data={{ exercisesRegularly: formData.exercisesRegularly }}
//             onChange={updateFormData}
//           />
//         );
//       case 7:
//         return <Step7 data={{ familyHistory: formData.familyHistory }} onChange={updateFormData} />;
//       case 8:
//         return <Step8 data={{ personalHistory: formData.personalHistory }} onChange={updateFormData} />;
//       case 9:
//         return <Step9 data={{ wellbeing: formData.wellbeing }} onChange={updateFormData} />;
//       case 10:
//         return <Step10 data={{ lifestyle: formData.lifestyle }} onChange={updateFormData} />;
//       case 11:
//         return <Step11 data={{ goals: formData.goals }} onChange={updateFormData} />;
//       case 12:
//         return <Step12 />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
//         {/* Header */}
//         <div className="p-4 sm:p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-poppins">
//               Day 1: Program Onboarding
//             </h1>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition rounded-full p-1 hover:bg-gray-100"
//               aria-label="Close modal"
//             >
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//           </div>
//           <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
//         </div>

//         {/* Step Content */}
//         <div className="flex-1 overflow-y-auto p-4 sm:p-6">{renderStep()}</div>

//         {/* Footer */}
//         <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
//           <div className="flex gap-3 sm:gap-4">
//             <button
//               onClick={handleBack}
//               disabled={currentStep === 1}
//               className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-700 font-medium rounded-2xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed font-poppins text-sm sm:text-base"
//             >
//               Back
//             </button>

//             <button
//               onClick={handleNext}
//               disabled={
//                 (currentStep === 1 && !isStep1Valid()) ||
//                 (currentStep === 3 && !isStep3Valid()) ||
//                 (currentStep === 4 && !isStep4Valid()) ||
//                 (currentStep === 5 && !isStep5Valid()) ||
//                 (currentStep === 6 && !isStep6Valid()) ||
//                 (currentStep === 7 && !isStep7Valid()) ||
//                 (currentStep === 8 && !isStep8Valid()) ||
//                 (currentStep === 9 && !isStep9Valid()) ||
//                 (currentStep === 10 && !isStep10Valid()) ||
//                 (currentStep === 11 && !isStep11Valid())

//               }
              
//               className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 font-medium rounded-2xl transition font-poppins text-sm sm:text-base
//                 ${
//                   currentStep === 1 && !isStep1Valid() ||
//                   (currentStep === 3 && !isStep3Valid()) ||
//                    (currentStep === 4 && !isStep4Valid()) ||
//                 (currentStep === 5 && !isStep5Valid()) ||
//                 (currentStep === 6 && !isStep6Valid()) ||
//                 (currentStep === 7 && !isStep7Valid()) ||
//                 (currentStep === 8 && !isStep8Valid()) ||
//                 (currentStep === 9 && !isStep9Valid()) ||
//                 (currentStep === 10 && !isStep10Valid()) ||
//                 (currentStep === 11 && !isStep11Valid())

//                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     : 'bg-[#d583ff] text-gray-900 hover:opacity-90'
//                 }`}
//             >
//               {currentStep === totalSteps ? 'Complete Onboarding' : 'Next'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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

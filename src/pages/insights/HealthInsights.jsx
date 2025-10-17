import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, Activity, Calendar, Target } from 'lucide-react';

const HealthInsights = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen  bg-gradient-to-r from-primary-accent to-secondary p-4 sm:p-6 md:p-8">
      {/* First Section */}
      <div className="flex items-center gap-3 mb-8">
        <ArrowLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" onClick={() => navigate('/')} />
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
          Health Insights
        </h1>
      </div>

      {/* Second Section - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Logged Metrics Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600 text-sm sm:text-base">Total Logged Metrics</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">9</p>
          <div className="flex items-center gap-1 text-green-500 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>+12% from last month</span>
          </div>
        </div>

        {/* Average Stress Level Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600 text-sm sm:text-base">Average Stress Level</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">5.2/10</p>
          <div className="flex items-center gap-1 text-green-500 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Improved 20% since Day 10</span>
          </div>
        </div>

        {/* Consistency Score Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600 text-sm sm:text-base">Consistency Score</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">87%</p>
          <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
          <Activity className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Logging regularly</span>
          </div>
        </div>

        {/* Days Tracked Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600 text-sm sm:text-base">Days Tracked</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">42</p>
          <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
          <Calendar className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Since program start</span>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-[#d175ff] w-5 h-5 sm:w-6 sm:h-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">What Makes You Succeed</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Morning Routine */}
          <div className="bg-[#e7f8f2] rounded-lg p-4 sm:p-6">
            <h3 className="text-[#047857] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Morning Routine Consistency
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              You log your metrics most consistently in the morning between 7–9 AM. Your health markers show better trends when you maintain this pattern.
            </p>
          </div>

          {/* Stress Management */}
          <div className="bg-[#e7f8f2] rounded-lg p-4 sm:p-6">
            <h3 className="text-[#047857] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Stress Management Impact
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Starting meditation on Day 10 correlated with a 20% improvement in your reported stress levels and better sleep quality scores.
            </p>
          </div>

          {/* Weekend Tracking */}
          <div className="bg-[#e7f8f2] rounded-lg p-4 sm:p-6">
            <h3 className="text-[#047857] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Weekend Tracking
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Your weekends show consistent tracking behavior. This discipline helps maintain momentum and prevents program dropout.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg mt-10">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-[#f59e0b] w-5 h-5 sm:w-6 sm:h-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Opportunities for Growth</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Morning Routine */}
          <div className="bg-[#fef5e6] rounded-lg p-4 sm:p-6">
            <h3 className="text-[#b45309] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
            Blood Pressure Monitoring
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
            You've logged blood pressure only 3 times this month. More frequent monitoring (at least weekly) will help identify patterns and ensure stability.
            </p>
          </div>

          {/* Stress Management */}
          <div className="bg-[#fef5e6] rounded-lg p-4 sm:p-6">
            <h3 className="text-[#b45309] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
            Evening Routine Gap
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
            Data shows a 15% drop in adherence to evening wellness activities. Consider setting a reminder to complete evening check-ins.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg mt-10">
      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Trends</h2>

      <div className="space-y-4">
        {/* Blood Pressure Card */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800">Blood Pressure</h3>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Stable
            </span>
          </div>
          <p className="text-gray-600 text-sm">Stable over last 30 days</p>
        </div>

        {/* Weight Card */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800">Weight</h3>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Improving
            </span>
          </div>
          <p className="text-gray-600 text-sm">Down 2.3 lbs this month</p>
        </div>

        {/* Stress Level Card */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800">Stress Level</h3>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Great Progress
            </span>
          </div>
          <p className="text-gray-600 text-sm">Decreased 20% since Day 10</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HealthInsights;
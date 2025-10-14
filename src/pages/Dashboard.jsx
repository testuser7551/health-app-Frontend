import { useState } from "react";
import { MessageCircle, Activity, Flame, Trophy, Star, Goal } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import MetricModal from "./components/MetricModal";


const initialStats = [
  { name: "Blood Pressure", progress: 75 },
  { name: "Heart Rate", progress: 60 },
  { name: "Glucose", progress: 50 },
  { name: "Healthy Weight", progress: 80 },
  { name: "Sugar Level", progress: 40 },
  { name: "Tobacco Free", progress: 100 },
];

function CircularProgress({ progress }) {

  const circumference = 2 * Math.PI * 36; // 36 is radius
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-20 h-20">
      <circle
        className="text-gray-200"
        strokeWidth="8"
        stroke="currentColor"
        fill="transparent"
        r="36"
        cx="40"
        cy="40"
      />
      <circle
        className="text-primary-accent"
        strokeWidth="8"
        stroke="currentColor"
        fill="transparent"
        r="36"
        cx="40"
        cy="40"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-sm font-bold text-primary"
      >
        {progress}%
      </text>
    </svg>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [hoveredCard, setHoveredCard] = useState(null);
  const [openMetric, setOpenMetric] = useState(null);
  const [stats, setStats] = useState(initialStats);

  const handleSaveMetric = (metricName) => {
    console.log("metricName",metricName);
    // Slightly increase/decrease the progress randomly
    setStats((prev) =>
      prev.map((stat) =>
        stat.name === metricName
          ? { ...stat, progress: Math.min(100, stat.progress + Math.floor(Math.random() * 5 + 1)) } // add 1-5%
          : stat
      )
    );
    setOpenMetric(null); // Close modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-accent to-secondary py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="w-full flex lg:flex-nowrap lg:justify-between flex-wrap justify-center gap-2">
          {/* Page heading */}
          <h2 className="font-gilmer font-extrabold text-5xl text-white text-center">Your Health Dashboard</h2>

          {/* Two Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <button className="items-center h-fit cursor-pointer py-3 px-6 bg-gradient-to-r from-white to-primary-accent hover:bg-gradient-to-l text-secondary font-semibold rounded-lg shadow hover:scale-105 transition-transform duration-200 flex gap-2"
              onClick={() => navigate('/chat')}>
              <MessageCircle size={20} />Ask Racheal
            </button>
            <button className="items-center h-fit py-3 px-6 bg-gradient-to-r from-white to-primary-accent hover:bg-gradient-to-l text-secondary font-semibold rounded-lg shadow hover:scale-105 transition-transform duration-200 flex gap-2" onClick={() => navigate('/programs')}>
              <Activity size={20} />Continue Program
            </button>
          </div>
        </div>
        {/* Achievements Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 ">
          <h2 className="font-gilmer font-bold text-xl mb-4 text-primary r">Your Achievements</h2>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col items-center px-3 py-2 bg-gray-200 rounded-2xl shadow hover:scale-105 transition-transform duration-200 cursor-pointer border border-primary-accent">
              <span className="text-sm text-black text-center flex items-center gap-1"> <Flame size={15} className="text-primary-accent " />7-day Streak</span>
            </div>
            <div className="flex flex-col items-center px-3 py-2 bg-gray-200 rounded-2xl shadow hover:scale-105 transition-transform duration-200 cursor-pointer border border-primary-accent">
              <span className="text-sm text-black text-center flex items-center gap-1"><Goal size={15} className="text-primary-accent " />First Metric Goal</span>
            </div>
            <div className="flex flex-col items-center px-3 py-2 bg-gray-200 rounded-2xl shadow hover:scale-105 transition-transform duration-200 cursor-pointer border border-primary-accent">
              <span className="text-sm text-black text-center flex items-center gap-1"><Star size={15} className="text-primary-accent " />25 Days Complete</span>
            </div>
            <div className="flex flex-col items-center px-3 py-2 bg-gray-200 rounded-2xl shadow hover:scale-105 transition-transform duration-200 cursor-pointer border border-primary-accent ">
              <span className="text-sm text-black text-center flex items-center gap-1"><Trophy size={15} className="text-primary-accent " />Program Complete</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-2xl">
          <div className="px-10 py-5 text-2xl font-gilmer font-extrabold text-primary-accent">
            6 Normals
          </div>
          <div className="px-10 py-2">
            These aren't this year's health fad - they're firm goals backed by Science to help you live longer, better. Click any metric to log your current values and track your progress.
          </div>
          {/* 6 Progress Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setOpenMetric(stat.name)}
                className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-xl bg-white transition-transform ${hoveredCard === idx ? "scale-105" : ""
                  }`}
              >
                <CircularProgress progress={stat.progress} />
                <p className="font-poppins text-sm mt-4 text-gray-600">You are Doing Great</p>
                <h3 className="font-gilmer text-xl  text-primary">{stat.name}</h3>
              </div>
            ))}
          </div>
          <MetricModal
            metric={openMetric}
            open={!!openMetric}
            onClose={() => setOpenMetric(null)}
            onSave={() => handleSaveMetric(openMetric)}
          />
        </div>
      </div>
    </div>
  );
}

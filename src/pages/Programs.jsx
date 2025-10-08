import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, Moon, Utensils, Brain, Dumbbell, Smile, BatteryCharging, Activity, BookOpen, Globe, Target, Thermometer } from "lucide-react";
import { getPrograms } from "../api/programs/programs"


// export const wellnessData = [
//     {
//         id: 1,
//         title: "Sleep",
//         days: 100,
//         description: "Improve your sleep quality with guided bedtime routines.",
//         icon: <Moon className="w-8 h-8 text-white" />,
//         gradient: "bg-gradient-to-r from-blue-900  to-blue-300",
//     },
//     {
//         id: 2,
//         title: "Food",
//         days: 100,
//         description: "Personalized nutrition tips and healthy meal plans.",
//         icon: <Utensils className="w-8 h-8 text-green-500" />,
//         gradient: "bg-gradient-to-r from-green-100 via-green-200 to-green-300",
//     },
//     {
//         id: 3,
//         title: "Stress",
//         days: 100,
//         description: "Calm your mind with stress management techniques.",
//         icon: <Brain className="w-8 h-8 text-purple-500" />,
//         gradient: "bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300",
//     },
//     {
//         id: 4,
//         title: "Menopause",
//         days: 180,
//         description: "Stay active with easy-to-follow workout programs.",
//         icon: <Dumbbell className="w-8 h-8 text-red-500" />,
//         gradient: "bg-gradient-to-r from-red-100 via-red-200 to-red-300",
//     },
//     {
//         id: 5,
//         title: "Cardiometabolic",
//         days: 100,
//         description: "Boost your mood through positive psychology practices.",
//         icon: <Smile className="w-8 h-8 text-yellow-500" />,
//         gradient: "bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300",
//     },
//     {
//         id: 6,
//         title: "Resilience & Mood",
//         days: 100,
//         description: "Keep your heart strong with daily wellness goals.",
//         icon: <Heart className="w-8 h-8 text-pink-500" />,
//         gradient: "bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300",
//     },
//     {
//         id: 7,
//         title: "Substance Use",
//         days: 100,
//         description: "Support and resources to manage substance use effectively.",
//         icon: <BatteryCharging className="w-8 h-8 text-indigo-500" />,
//         gradient: "bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300",
//     },
//     {
//         id: 8,
//         title: "Pain & Inflammation",
//         days: 100,
//         description: "Guidance on managing chronic pain and inflammation.",
//         icon: <Activity className="w-8 h-8 text-red-400" />,
//         gradient: "bg-gradient-to-r from-red-200 via-red-300 to-red-400",
//     },
//     {
//         id: 9,
//         title: "Sexual Wellness",
//         days: 100,
//         description: "Promote healthy sexual function and intimacy.",
//         icon: <Heart className="w-8 h-8 text-pink-600" />,
//         gradient: "bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400",
//     },
//     {
//         id: 10,
//         title: "Spiritual Health",
//         days: 100,
//         description: "Practices to strengthen your spiritual well-being.",
//         icon: <BookOpen className="w-8 h-8 text-purple-400" />,
//         gradient: "bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400",
//     },
//     {
//         id: 11,
//         title: "Cognitive Health",
//         days: 100,
//         description: "Activities and strategies to boost brain function.",
//         icon: <Brain className="w-8 h-8 text-blue-400" />,
//         gradient: "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400",
//     },
//     {
//         id: 12,
//         title: "Environmental Health",
//         days: 100,
//         description: "Improve wellness by optimizing your surroundings.",
//         icon: <Globe className="w-8 h-8 text-green-600" />,
//         gradient: "bg-gradient-to-r from-green-200 via-green-300 to-green-400",
//     },
//     {
//         id: 13,
//         title: "Motivation & Readiness",
//         days: 100,
//         description: "Tools to enhance motivation and prepare for lifestyle change.",
//         icon: <Target className="w-8 h-8 text-orange-500" />,
//         gradient: "bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400",
//     },
//     {
//         id: 14,
//         title: "Blood Pressure",
//         days: 100,
//         description: "Monitor and improve your blood pressure for heart health.",
//         icon: <Thermometer className="w-8 h-8 text-red-600" />,
//         gradient: "bg-gradient-to-r from-red-300 via-red-400 to-red-500",
//     },
// ];


const iconMap = {
    Moon: Moon,
    Utensils: Utensils,
    Brain: Brain,
    Dumbbell: Dumbbell,
    Smile: Smile,
    Heart: Heart,
    BatteryCharging: BatteryCharging,
    Activity: Activity,
    BookOpen: BookOpen,
    Globe: Globe,
    Target: Target,
    Thermometer: Thermometer,
};

const Programs = () => {

    const [wellnessData, setWellnessData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const data = await getPrograms();

                // Convert icon string to React component
                const formattedData = data.map((item) => {
                    // Example string: "<Moon className='w-8 h-8 text-white' />"
                    const match = item.icon.match(/<(\w+)\s+className='([^']+)'/);
                    if (match) {
                        const IconComponent = iconMap[match[1]];
                        return {
                            ...item,
                            icon: <IconComponent className={match[2]} />,
                        };
                    }
                    return item;
                });
                setWellnessData(formattedData);
            } catch (err) {
                console.error("Error fetching programs:", err);
                setError("Failed to load programs.");
            } finally {
                setLoading(false);
            }
        };
        fetchPrograms();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
                Loading wellness programs...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
                {error}
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-100 ">
            <div className="sticky top-0 bg-white shadow-xl p-5 flex items-center justify-between">
                <div className="">
                    <h1 className="md:text-4xl text-3xl font-gilmer font-bold text-secondary">
                        Wellness Programs
                    </h1>
                </div>

            </div>
            <div className="max-w-7xl mx-auto space-y-6 py-6 px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wellnessData.map((item, index) => (
                        <motion.div
                            key={item._id}
                            className={`rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer bg-white`}
                            onClick={() => navigate(`/programs/${item._id}`)}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className={`p-3 ${item?.gradient} rounded-xl shadow-sm`}>{item?.icon}</div>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700 py-2">{item?.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item?.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;

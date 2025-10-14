import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Flame, Trophy, Star, Goal, TrendingUp, Calendar, Heart, Moon, Utensils, Brain, Dumbbell, Smile, BatteryCharging, BookOpen, Globe, Target, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProgramsById, enrollPrograms } from "../api/programs/programs"
import Modal from "../components/Modal";

import OnboardingModal from "./components/OnboardingModal";


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
const iconAchievement = [
    { icon: <Flame size={15} className="text-primary-accent" /> },
    { icon: <Goal size={15} className="text-yellow-500" /> },
    { icon: <Star size={15} className="text-orange-500" /> },
    { icon: <Trophy size={15} className="text-blue-500" /> },
];

const ProgramDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [programDetails, setProgramData] = useState(null);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("🧩 Modal open state changed:", open);
    }, [open]);


    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const data = await getProgramsById(id);

                // Parse icon string like "<Moon className='w-8 h-8 text-white' />"
                const match = data?.currentProgram?.icon?.match(
                    /<(\w+)\s+className='([^']+)'/
                );
                let iconComponent = null;
                if (match) {
                    const IconComponent = iconMap[match[1]];
                    iconComponent = <IconComponent className={match[2]} />;
                }

                setProgramData({
                    ...data,
                    currentProgram: {
                        ...data.currentProgram,
                        icon: iconComponent,
                    },
                });
            } catch (err) {
                console.error("Error fetching program:", err);
                setError("Failed to load program details.");
            } finally {
                setLoading(false);
            }
        };

        fetchProgram();
    }, [id, isSuccessOpen]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700">
                <p>Loading program details...</p>
            </div>
        );
    }


    const { currentProgram, enrolled, totalDays, completedDays, streak, currentDayToComplete, message } = programDetails;

    const handleDayClick = (dayNumber) => {
                // console.log()
        if (enrolled &&(dayNumber == currentDayToComplete)) {
            if (dayNumber === 1) {
                setShowModal(true);
                setModalStep(1);
            } else { navigate(`/programs/${currentProgram._id}/day/${dayNumber}`); }
        } else {
            return;
        }

        // if (dayNumber === 1) {
        //     console.log("✅ Opening onboarding modal for Day 1");
        //     setOpen(true);
        // } else {
        //     console.log("➡️ Navigating to Day:", dayNumber);
        //     navigate(`/programs/${currentProgram?._id}/day/${dayNumber}`);
        // }
    };

    const handleEnrollClick = async () => {
        try {
            const data = await enrollPrograms({ programId: currentProgram?._id });
            // console.log(data);
            if (data.message == "User successfully enrolled in program") {
                setIsSuccessOpen(true)
            } else {
                setError("Failed to Enroll Program.");
                setIsSuccessOpen(true)
            }
        } catch (err) {
            console.error("Error Enrolling program:", err);
            setError("Failed to Enroll Program.");
            setIsSuccessOpen(true)
        } finally {
            setLoading(false);
        }
    };
    const handleNext = () => {
        if (modalStep < 3) {
            setModalStep(modalStep + 1);
        } else {
            setShowModal(false);
            navigate(`/programs/${currentProgram._id}/day/1`);
        }
    };
    const percentage = totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary-accent to-secondary">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white shadow-xl p-5 flex items-center justify-between">
                <div className="">
                    <h1 className="md:text-4xl text-3xl font-gilmer font-bold text-secondary">
                        Wellness Programs
                    </h1>
                </div>
                <div className="">
                    <Link
                        to="/programs"
                        className="py-2 px-4 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-300 transition cursor-pointer"
                    >
                        {"<"} Back to All Programs
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto space-y-6 p-6">
                <div className="bg-white p-5 rounded-2xl shadow">
                    {/* Program Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className={`p-4 ${currentProgram?.gradient} rounded-xl`}>
                            {currentProgram?.icon}
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {currentProgram?.title}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {currentProgram?.description}
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5">
                        {enrolled ? (
                            <motion.div className="bg-gray-100 rounded-2xl p-6 shadow ">
                                <h3 className="text-black font-extrabold text-md mb-1 flex gap-2 items-center "><Calendar size="18" className="text-primary-accent" />Current Day</h3>
                                <p className="text-2xl font-bold text-gray-800">{currentDayToComplete}<br /><span className="text-sm text-gray-500 font-medium">of {totalDays} days</span></p>
                            </motion.div>
                        ) : (
                            <motion.div className="bg-gray-100 rounded-2xl p-6 shadow ">
                                <h3 className="text-black font-extrabold text-md mb-1 flex gap-2 items-center"><Calendar size="18" className="text-primary-accent" />Total Days</h3>
                                <p className="text-2xl font-bold text-gray-800 mt-4">{totalDays}</p>
                            </motion.div>
                        )}
                        <motion.div
                            className="bg-gray-100 rounded-2xl p-6 shadow "
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <h3 className="text-black font-extrabold text-md mb-1 flex gap-2 items-center"><TrendingUp size="18" className="text-primary-accent" />Completion</h3>
                            <p className="text-2xl font-bold text-gray-800 ">{percentage}%</p>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-300 rounded-full h-2">
                                <motion.div
                                    className="bg-primary-accent h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 1.0 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                        <motion.div className="bg-gray-100 rounded-2xl p-6 shadow ">
                            <h3 className="text-black font-extrabold text-md mb-1 flex gap-2 items-center"><Flame ssize="18" className="text-primary-accent" />Streak</h3>
                            <p className="text-2xl font-bold text-gray-800 mt-4 ">{streak}</p>
                        </motion.div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-gray-50 rounded-2xl shadow mb-5 p-5 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Program Achievements
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {["7-day Streak", "First Metric Goal", "25 Days Complete", "Program Completed"].map(
                                (achievement, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col items-center px-3 py-2 rounded-2xl shadow hover:scale-105 transition-transform duration-200 cursor-pointer border border-gray-300 text-black ${achievement == "7-day Streak" && streak === 7 ? "bg-secondary-alt text-white" : ""} ${achievement == "25 Days Complete" && completedDays >= 25 ? "bg-secondary-alt text-white" : ""} ${achievement == "Program Complete" && completedDays === totalDays ? "bg-secondary-alt text-white" : ""}`}
                                    >
                                        <span className="text-sm text-center flex gap-1">{iconAchievement[idx].icon}{achievement}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Continue Your Journey */}
                    {enrolled ? (
                        <div className=" text-black rounded-2xl p-6 sm:flex-row justify-items-center gap-4 bg-gray-50 mb-4 shadow">
                            <div>
                                <h3 className="text-lg font-gilmer mb-3">Continue Your Journey</h3>
                            </div>
                            <div> <p className="text-3xl text-secondary font-poppins font-bold mb-3"> Day {currentDayToComplete}</p>
                            </div>
                            <div>
                                <button className="py-3 px-6 mb-3 bg-gradient-to-r to-secondary from-primary-accent text-white font-gilmer font-bold rounded-lg shadow hover:scale-105 transition cursor-pointer"
                                    onClick={() => handleDayClick(currentDayToComplete)}> Start Day {currentDayToComplete} {">"} </button>
                            </div>
                        </div>
                    ) : (<div className=" text-black p-6 sm:flex-row justify-items-center gap-4 mb-4 ">
                        <div>
                            <h3 className="text-lg font-gilmer mb-3">To Start This Program First Enroll</h3>
                        </div>
                        <div>
                            <button className="py-3 px-6 mb-3 bg-gradient-to-r to-secondary from-primary-accent hover:bg-gradient-to-l text-white font-gilmer font-bold rounded-lg shadow hover:scale-105 transition cursor-pointer"
                                onClick={() => handleEnrollClick()}> Enroll </button>
                        </div>
                    </div>)}

                    {/* Calendar */}
                    <div className="bg-gray-50 rounded-2xl shadow sm:p-6 space-y-4">
                        <h2 className="text-2xl font-bold text-black text-center">
                            Program Calendar ({totalDays} Days)
                        </h2>
                        <div className="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-6 grid-cols-5 sm:gap-3">
                            {Array.from({ length: totalDays }).map((_, idx) => {
                                let bgClass = "bg-[#f1dbff] hover:bg-gray-300 text-gray-800";

                                if (idx < completedDays) {
                                    // Already completed days
                                    bgClass = "bg-primary-accent outline outline-secondary text-white";
                                } else if (idx + 1 === currentDayToComplete) {
                                    // Current day to complete
                                    bgClass = "bg-green-400 text-white";
                                }
                                const isCompleted = idx < completedDays;
                                const isCurrent = idx + 1 === currentDayToComplete;

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => handleDayClick(idx + 1)}
                                        className={`hover:scale-105 transition-transform duration-200 w-full h-10 sm:h-20 rounded-md flex items-center justify-center text-md font-semibold cursor-pointer border-2 border-white ${bgClass}`}
                                    >
                                        {isCompleted || isCurrent ? (
                                            // ✅ Show number for completed and current day
                                            idx + 1
                                        ) : (
                                            // 🔒 Show lock icon for future days
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="15"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-lock"
                                            >
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </svg>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            

            {console.log("🧱 Rendering OnboardingModal:", open)}
            {open && <OnboardingModal isOpen={open} onClose={() => setOpen(false)}
            currentProgram={currentProgram} 
            />}


            {(isSuccessOpen && !error) && (
                <Modal
                    isOpen={isSuccessOpen}
                    onClose={() => setIsSuccessOpen(false)}
                    title="Success!"
                    message="Program Enrolled successfully."
                    type="success"
                />
            )}
            {((error || !programDetails) && isSuccessOpen) && (
                <Modal
                    isOpen={isSuccessOpen}
                    onClose={() => setIsSuccessOpen(false)}
                    title="Failed!"
                    message={error}
                    type="error"
                />
            )}
        </div>
    );
};

export default ProgramDetails;

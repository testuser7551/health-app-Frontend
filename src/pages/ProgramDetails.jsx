import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Flame, Trophy, Star, Goal, TrendingUp, Calendar, Heart, Moon, Utensils, Brain, Dumbbell, Smile, BatteryCharging, BookOpen, Globe, Target, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProgramsById, enrollPrograms } from "../api/programs/programs"
import Modal from "../components/Modal";

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
        if (enroll &&(dayNumber == currentDayToComplete)) {
            if (dayNumber === 1) {
                setShowModal(true);
                setModalStep(1);
            } else { navigate(`/programs/${currentProgram._id}/day/${dayNumber}`); }
        } else {
            return;
        }
        // if (dayNumber === 1) {
        //     setShowModal(true);
        //     setModalStep(1);
        // } else {
        //     navigate(`/programs/${currentProgram?._id}/day/${dayNumber}`);
        // }
    }
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
        <div className="min-h-screen bg-gray-100">
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
                    <div className="bg-gray-50 rounded-2xl shadow p-6 space-y-4">
                        <h2 className="text-2xl font-bold text-black text-center">
                            Program Calendar ({totalDays} Days)
                        </h2>
                        <div className="grid xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-2">
                            {Array.from({ length: totalDays }).map((_, idx) => {
                                let bgClass = "bg-gray-200 hover:bg-gray-300 text-gray-800";

                                if (idx < completedDays) {
                                    // Already completed days
                                    bgClass = "bg-primary-accent outline outline-secondary text-white";
                                } else if (idx + 1 === currentDayToComplete) {
                                    // Current day to complete
                                    bgClass = "bg-green-400 text-white";
                                }

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => handleDayClick(idx + 1)}
                                        className={`hover:scale-105 transition-transform duration-200 w-full h-20 rounded-md flex items-center justify-center text-md font-semibold cursor-pointer border-2 border-white ${bgClass}`}
                                    >
                                        {idx + 1}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl text-gray-800"
                        >
                            {modalStep === 1 && (
                                <>
                                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">
                                        {currentProgram.title} WELLNESS PROGRAM
                                    </h2>
                                    <h3 className="font-semibold mb-2">
                                        Key Program Elements: The Five Food Felons (to avoid)
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                        <li>Red meat and processed red meat</li>
                                        <li>Fried foods</li>
                                        <li>Added sugar</li>
                                        <li>Syrups</li>
                                        <li>Simple carbs</li>
                                    </ul>
                                </>
                            )}

                            {modalStep === 2 && (
                                <>
                                    <h3 className="text-xl font-semibold mb-3 text-center">
                                        Daily Requirements
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                        <li>Daily step tracking and reporting</li>
                                        <li>Daily food logging</li>
                                        <li>Daily mood check-ins</li>
                                        <li>Weekly measurements (weight and waist)</li>
                                        <li>Supplement tracking (calcium, vitamin D, magnesium, vitamin K2)</li>
                                        <li>Strength training reporting</li>
                                    </ul>
                                </>
                            )}

                            {modalStep === 3 && (
                                <>
                                    <h3 className="text-xl font-semibold mb-3 text-center">
                                        Step Goal Adjustments
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                        <li>Under 4,000 steps → Goal 5,000–7,000 steps</li>
                                        <li>4,000–6,000 steps → Goal 6,000–8,000 steps</li>
                                        <li>6,000–8,000 steps → Goal 8,000–10,000 steps</li>
                                        <li>8,000–10,000 steps → Goal 10,000–16,000 steps</li>
                                        <li>10,000+ steps → Maintain 10,000+ (max 24,000)</li>
                                    </ul>
                                </>
                            )}

                            <div className="flex justify-end mt-8">
                                <button
                                    onClick={handleNext}
                                    className="px-6 py-2 bg-gradient-to-r from-primary-accent to-secondary text-white font-semibold rounded-lg shadow hover:scale-105 transition-transform"
                                >
                                    {modalStep < 3 ? "Next" : "Start Day 1 →"}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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

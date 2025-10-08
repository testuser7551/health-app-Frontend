import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import confetti from "canvas-confetti";

const Modal = ({
    isOpen = true,
    onClose,
    title = "",
    message = "",
    type = "success",    // "success" | "error"
    autoClose = true, // optional: allow turning off auto close
    duration = 2000,
}) => {
    useEffect(() => {
        if (isOpen && type === "success") {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    }, [isOpen, type]);
    useEffect(() => {
        if (isOpen && autoClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, autoClose, duration, onClose]);
    // Close modal on pressing ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Icon and color based on type
    const icon =
        type === "success" ? (
            <CheckCircle className="text-green-500 w-12 h-12" />
        ) : (
            <XCircle className="text-red-500 w-12 h-12" />
        );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={onClose} // Close on outside click
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Prevent closing when clicking inside modal */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.4 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        >
                            <X size={22} />
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center mb-3">{icon}</div>

                        {/* Title */}
                        {title && (
                            <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
                                {title}
                            </h2>
                        )}

                        {/* Message */}
                        {message && (
                            <p className="text-center text-gray-600">{message}</p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;

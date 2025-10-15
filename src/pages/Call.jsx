import React, { useState, useEffect, useRef } from "react";
import { PhoneCall, PhoneOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
//import VoiceChat from "./VoiceChat";
import VoiceChat from "./VoiceChat";
// import VoiceAnalyzer from "./VoiceAnalyzer";

export default function Call() {
  const [isCalling, setIsCalling] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  // const messageText =
  //   "Hello! I'm your wellness coach. I'm glad to be part of your wellness journey. How are you feeling right now?";

  const messageText =
    "Hello";
  const handleCallToggle = () => {
    if (isCalling) {
      // End call
      setIsCalling(false);
      setIsListening(false);
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      // Clear chat when call ends
      setChatMessages([]);
    } else {
      // Start call
      setIsCalling(true);

      // Add bot's initial message to chat
      const botMessage = {
        from: "bot",
        text: messageText,
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages([botMessage]);

      // Speak the message
      if (!isSpeaking) {
        const utterance = new SpeechSynthesisUtterance(messageText);
        utterance.rate = 1;
        utterance.pitch = 1;

        utterance.onstart = () => {
          console.log("Audio playing…");
          setIsSpeaking(true);
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          setIsListening(true); // Start listening after speaking
        };

        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Function to handle messages from VoiceChat component
  const handleSendMessage = (messageToSend) => {
    if (!messageToSend.trim()) return;

    // Add user message to chat
    const userMessage = {
      from: "user",
      text: messageToSend,
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setIsListening(false);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = {
        from: "bot",
        text: "Thank you for sharing that. I'm here to help you with your wellness journey. What specific aspect would you like to discuss?",
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, botResponse]);

      // Speak the bot response
      const utterance = new SpeechSynthesisUtterance(botResponse.text);
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsListening(true);
      };

      window.speechSynthesis.speak(utterance);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-primary-accent to-secondary">
      {/* <div className="min-h-screen bg-gradient-to-r from-primary-accent to-secondary py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6"> */}
      {/* Page Title - Left Aligned */}
      <div className="w-full max-w-4xl mb-8">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center"
          style={{
            fontFamily: "var(--font-gilmer)",
            color: "white",
          }}
        >
          Call Dr. Roizen
        </h1>
      </div>
      <div className="flex justify-center flex-wrap xl:flex-nowrap w-full gap-4 transition-all duration-500 ease-in-out">
        {/* Left Side - Dr. Roizen Section */}
        <motion.div
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`${isCalling ? "w-full xl:w-[55%]" : "xl:w-full 2xl:w-[70%]"} 
                space-y-6 bg-white py-6 px-4 rounded-2xl shadow-lg transition-all duration-700`}
        >

          <h2
            className="text-lg sm:text-xl font-semibold text-center transition-all duration-500"
            style={{ fontFamily: "var(--font-gilmer)" }}
          >
            Speak with Dr. Michael Roizen
          </h2>

          {/* Profile */}
          <div className="p-6 sm:p-8">
            <div className="flex justify-center">
              <motion.div
                animate={{ scale: isCalling ? 0.9 : 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full border-4 border-[#F3D7FF] p-1"
              >
                <img
                  src="/Roizen.jpg"
                  alt="Dr. Michael Roizen"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover"
                />
              </motion.div>
            </div>

            <h3
              className="mt-4 text-xl sm:text-2xl font-bold text-center"
              style={{ fontFamily: "var(--font-gilmer)" }}
            >
              Dr. Michael Roizen, MD
            </h3>

            <p
              className="mt-2 text-sm sm:text-base text-gray-600 text-center"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Chief Wellness Officer Emeritus at Cleveland Clinic and #1 New York
              Times bestselling author. Dr. Roizen has dedicated his career to
              helping people achieve optimal health and vitality through
              evidence-based wellness strategies.
            </p>

            {/* Call Toggle Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleCallToggle}
                className={`rounded-full hover:scale-105 transform duration-300 cursor-pointer flex items-center justify-center gap-2 px-8 py-3 sm:py-4 text-white text-base sm:text-lg transition-colors ${isCalling
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-primary-accent hover:bg-opacity-90"
                  }`}
              >
                {isCalling ? (
                  <>
                    <PhoneOff className="w-5 h-5 sm:w-6 sm:h-6" />
                    End Call
                  </>
                ) : (
                  <>
                    <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                    Start Call
                  </>
                )}
              </button>
            </div>

            {/* Status Indicators */}
            {isCalling && (
              <div className="mt-6 space-y-4">
                <div className="flex flex-col items-center text-center">
                  <p
                    className="text-base font-semibold text-gray-700 mb-2 animate-pulse"
                    style={{ fontFamily: "var(--font-gilmer)" }}
                  >
                    {isSpeaking
                      ? "Coach is speaking..."
                      : isListening
                        ? "Listening..."
                        : "Call connected"}
                  </p>

                 
                </div>
              </div>
            )}

            {/* What He Can Help With */}
            <div className=" rounded-xl p-4 sm:p-6 text-center">
              <h4
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-gilmer)" }}
              >
                What can Dr. Roizen help you with?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm sm:text-base text-gray-700">
                <ul
                  className="space-y-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <li>Personalized health advice</li>
                  <li>Questions about your metrics</li>
                </ul>
                <ul
                  className="space-y-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <li>Wellness program guidance</li>
                  <li>Lifestyle optimization tips</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Voice Chat (Animated) */}
        <AnimatePresence>
          {isCalling && (
            <motion.div
              key="voicechat"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="xl:w-[40%] w-full"
            >
              <VoiceChat
                chatMessages={chatMessages}
                isListening={isListening}
                isSpeaking={isSpeaking}
                onSendMessage={handleSendMessage}
              />
              {/* <VoiceAnalyzer/> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Disclaimer */}

      {/* <div className="mt-6 bg-white max-w-4xl w-full text-sm text-gray-600 px-4 py-3 rounded-xl text-center shadow-md">
        <strong>Note:</strong> This AI-powered voice interface provides guidance
        based on Dr. Roizen's protocols and expertise. For medical emergencies,
        please call 911 or consult your healthcare provider.
      </div> */}
    </div>
  );
}
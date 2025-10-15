import React, { useState, useRef, useEffect } from "react";
import { Bot, Mic, MicOff, Send, Volume2, VolumeX } from "lucide-react";
import { generateGemini } from "../api/Chat/chat"; // Your existing API
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export default function VoiceChat() {
  const [userInput, setUserInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm your voice assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const speechSynthesisRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    const lastMessage = chatMessages[chatMessages.length - 1];
    if (lastMessage?.from === "bot") {
      speakText(lastMessage.text);
    }
  }, [chatMessages]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check speech recognition support
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();

      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        setIsListening(false);

        // Auto-send the voice input
        if (transcript && transcript.trim()) {
          handleSendMessage(transcript.trim());
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      console.warn("Speech recognition not supported in this browser");
    }

    // Initialize speech synthesis
    speechSynthesisRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
    };
  }, []);

  // Check microphone permission
  const requestPermission = async () => {
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Microphone API not available");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Stop the stream immediately since we just need permission
      stream.getTracks().forEach(track => track.stop());
      setPermissionGranted(true);
      return true;
    } catch (err) {
      console.error("Microphone permission denied:", err);
      setPermissionGranted(false);
      return false;
    }
  };

  const startListening = async () => {
    if (!permissionGranted) {
      const granted = await requestPermission();
      if (!granted) return;
    }

    if (recognitionRef.current && !isListening) {
      try {
        setUserInput("");
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error("Error starting speech recognition:", error);
        setIsListening(false);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Text-to-Speech function
  const speakText = (text) => {
    if (!isSpeechEnabled || !speechSynthesisRef.current) return;

    // Cancel any ongoing speech
    speechSynthesisRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Configure voice settings
    utterance.rate = 0.9;
    utterance.pitch = 0.3;
    utterance.volume = 0.9;

    // Get available voices and try to use a natural-sounding one
    const voices = speechSynthesisRef.current.getVoices();
    const preferredVoice = voices.find(voice =>
      voice.name.includes('Google') || voice.name.includes('Natural') || voice.name.includes('Samantha')
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      console.log("Speech finished");
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      console.error("Speech synthesis error:", event);
    };

    speechSynthesisRef.current.speak(utterance);
  };

  // Stop speech synthesis
  const stopSpeech = () => {
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSendMessage = async (text = null) => {
    // Fix: Ensure we have a string and handle the input properly
    let messageToSend;

    if (text) {
      messageToSend = text.toString().trim();
    } else {
      messageToSend = userInput.toString().trim();
    }

    if (!messageToSend) return;

    setLoading(true);

    // Add user message to chat
    const userMessage = {
      from: "user",
      text: messageToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput("");

    if (isListening) stopListening();

    try {
      // Call your backend API
      const response = await generateGemini({
        messages: [
          ...chatMessages.map(msg => ({
            role: msg.from === "user" ? "user" : "model",
            text: msg.text
          })),
          { role: "user", text: messageToSend }
        ]
      });

      const botResponse = response.output || "I'm sorry, I couldn't process that request.";

      // Add bot message to chat
      const botMessage = {
        from: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, botMessage]);

      // Convert bot response to speech if enabled
      if (isSpeechEnabled) {
        speakText(botResponse);
      }

    } catch (error) {
      console.error("API Error:", error);

      const errorMessage = {
        from: "bot",
        text: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const toggleSpeech = () => {
    if (isSpeechEnabled) {
      stopSpeech();
    }
    setIsSpeechEnabled(!isSpeechEnabled);
  };

  return (
    <div className="bg-white w-full rounded-2xl overflow-hidden shadow-xl">
      {/* Chat Header */}
      <div className="bg-primary-accent py-4 px-6 flex justify-between items-center">
        <h3
          className="text-lg font-semibold text-white text-center flex-1"
          style={{ fontFamily: "var(--font-gilmer)" }}
        >
          Voice Chat
        </h3>
        {/* TTS Toggle Button */}
        <button
          onClick={toggleSpeech}
          className={`p-2 rounded-full transition-colors duration-200 ${isSpeechEnabled
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-600 hover:bg-gray-400"
            }`}
          title={isSpeechEnabled ? "Disable text-to-speech" : "Enable text-to-speech"}
        >
          {isSpeechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Messages Area */}
      <div className="h-96 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "bot" && (
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-accent text-white mr-2 flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${msg.from === "user"
                  ? "bg-primary-accent text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
                } ${isSpeaking && msg.from === "bot" && index === chatMessages.length - 1 ? 'ring-2 ring-blue-500' : ''}`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <div className="text-sm">                    <div className="prose prose-sm sm:prose-base max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              </div></div>
              <div
                className={`text-xs mt-1 ${msg.from === "user" ? "text-blue-100" : "text-gray-500"
                  }`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-accent text-white mr-2 flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-gray-200 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center gap-2">
          {/* Voice Input Button */}
          <button
            onClick={toggleListening}
            disabled={loading}
            className={`p-3 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0 ${isListening
                ? "bg-red-500 text-white animate-pulse"
                : loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            title={isListening ? "Stop listening" : "Start voice input"}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isListening ? "Listening... Speak now" :
                  loading ? "Processing..." :
                    "Type your message or use voice..."
              }
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
              rows="1"
              style={{ fontFamily: "var(--font-poppins)" }}
              disabled={isListening || loading}
            />

            {/* Send Button */}
            {userInput && userInput.toString().trim() && !isListening && !loading && (
              <button
                onClick={() => handleSendMessage()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-primary-accent text-white rounded-full hover:bg-primary-accent-dark transition-colors duration-200"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Listening Status */}
        {isListening && (
          <div className="mt-2 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Listening... Speak now
            </div>
          </div>
        )}

        {/* Speech Status */}
        {isSpeechEnabled && (
          <div className="mt-2 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              <Volume2 className="w-3 h-3" />
              Text-to-speech enabled
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
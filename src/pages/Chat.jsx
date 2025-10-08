import { useState, useRef, useEffect } from "react";
import { Link2, Send, Bot } from "lucide-react";
import { generateGemini, summarizeGemini } from "../api/Chat/chat"; // ✅ import both APIs
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MAX_HISTORY = 4;

export default function Chat() {
  const [allMessages, setAllMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm Rachel, your personal wellness assistant. I understand your complete medical history and Dr. Roizen's longevity protocols. How can I help you today?"
    }
  ]);

  const [tempMessages, setTempMessages] = useState([]); // ✅ Temporary memory for 5 messages
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // ✅ Scroll to bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [allMessages]);

  // ✅ Summarize old messages using separate API
  const summarizeOldMessages = async (messagesToSummarize) => {
    try {
      const res = await summarizeGemini({
        messages: messagesToSummarize.map((m) => ({
          role: m.from === "user" ? "user" : "model",
          text: m.text
        }))
      });
      return res.output || "Summary not available.";
    } catch (err) {
      console.error("Summarization error:", err);
      return "Summary not available.";
    }
  };

  // ✅ Add this state
  const [conversationSummary, setConversationSummary] = useState("");

  // ✅ Inside sendMessage:
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const updatedAllMessages = [...allMessages, userMsg];
    const updatedTempMessages = [...tempMessages, userMsg];
    setInput("");

    setAllMessages(updatedAllMessages);
    setTempMessages(updatedTempMessages);

    try {
      // ✅ Build payload (prepend summary as system context if available)
      const payloadMessages = [
        ...(conversationSummary
          ? [{ role: "model", text: conversationSummary }]
          : []),
        ...updatedTempMessages.map((m) => ({
          role: m.from === "user" ? "user" : "model",
          text: m.text
        }))
      ];

      const res = await generateGemini({ messages: payloadMessages });
      const botReply = res.output || "Sorry, I couldn’t generate a response.";

      const finalAllMessages = [...updatedAllMessages, { from: "bot", text: botReply }];
      const finalTempMessages = [...updatedTempMessages, { from: "bot", text: botReply }];

      setAllMessages(finalAllMessages);
      setTempMessages(finalTempMessages);

      // ✅ Summarize only internally (don’t add to UI)
      if (finalTempMessages.length >= MAX_HISTORY) {
        const summary = await summarizeOldMessages(finalTempMessages);
        setConversationSummary(summary); // store it silently
        setTempMessages([]); // reset temp memory
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setAllMessages((prev) => [
        ...prev,
        { from: "bot", text: "Oops! Something went wrong. Please try again." }
      ]);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-6 text-left">
          <h1
            className="text-2xl sm:text-3xl font-extrabold"
            style={{
              fontFamily: "var(--font-gilmer)",
              color: "var(--color-secondary)"
            }}
          >
            Chat with Rachel
          </h1>
          <p
            className="sm:text-gray-200"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "var(--color-primary)"
            }}
          >
            Your AI wellness assistant powered by Dr. Roizen's protocols
          </p>
        </div>

        {/* Chat UI */}
        <div className="flex justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            {/* Messages */}
            <div className="bg-white p-4 sm:p-6 md:p-8 h-[400px] sm:h-[500px] overflow-y-auto flex flex-col gap-4 sm:gap-6">
              {allMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {msg.from === "bot" && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary-accent text-white mr-2">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  )}
                  <div
                    className={`max-w-[90%] sm:max-w-2xl px-4 sm:px-6 py-3 sm:py-4 rounded-xl ${msg.from === "user"
                      ? "bg-primary-accent text-white"
                      : "bg-gray-100 text-gray-800"
                      }`}
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1rem"
                    }}
                  >
                    <div className="prose prose-sm sm:prose-base max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center p-4 sm:p-6 bg-white border-t border-gray-200 gap-3 sm:gap-4">
              {/* <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary-accent text-white">
                <Link2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </button> */}
              <input
                type="text"
                className="w-full flex-1 px-4 sm:px-6 py-3 sm:py-4 border rounded-full outline-none"
                placeholder="Ask Rachel about your health..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary-accent text-white cursor-pointer hover:bg-secondary"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

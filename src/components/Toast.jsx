import React, { useEffect } from "react";

const Toast = ({ type = "success", message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 w-80 max-w-full px-4 py-3 rounded-lg shadow-lg text-white font-medium animate-slideIn break-words`}
      style={{
        backgroundColor: type === "success" ? "violet" : "red", // primary green or red
      }}
    >
      {message}
    </div>
  );
};

export default Toast;

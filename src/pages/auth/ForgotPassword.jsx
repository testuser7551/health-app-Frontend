import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-primary-accent px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-gilmer text-primary-accent mb-6 text-center">
          Forgot Password
        </h1>

        {step === 1 && (
          <form className="space-y-4">
            <div>
              <label className="block font-poppins mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-primary-accent hover:bg-secondary text-white py-2 rounded-lg font-poppins transition-colors"
            >
              Send Verification Code
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="space-y-4">
            <div>
              <label className="block font-poppins mb-1">Verification Code</label>
              <input
                type="text"
                placeholder="Enter code sent to email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
            </div>
            <div>
              <label className="block font-poppins mb-1">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
            </div>
            <div>
              <label className="block font-poppins mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-accent hover:bg-secondary text-white py-2 rounded-lg font-poppins transition-colors"
            >
              Reset Password
            </button>
          </form>
        )}

           {/* Navigate to Login */}
        <p className="text-center text-sm mt-4 font-poppins">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-primary-accent hover:text-secondary"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../api/auth/auth"; // your API function
import { setUser, setLoading, setError } from "../../redux/authSlice";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔹 Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 🔹 Local validation errors
  const [formErrors, setFormErrors] = useState({});

  // 🔹 Validate inputs
  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return; // stop if errors

    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const data = await register({ name, email, password });

      dispatch(setUser({ user: data.user, token: data.token }));

      localStorage.setItem("token", data.token);

      navigate("/onboarding");
    } catch (err) {
      const message = err?.response?.data?.message || err.message || "Registration failed";
      dispatch(setError(message));
      setFormErrors({ general: message });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center bg-gray-100 px-4 md:gap-15 gap-1 flex-wrap h-[1024px]">
        {/* Top Center Logo */}
        <div className="">
          <img
            src="/4youngevity12.png"
            alt="Logo"
            className="h-32 w-auto object-contain"
          />
        </div>
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-gilmer text-primary-accent mb-6 text-center font-extrabold">
            Create Account
          </h1>

          {/* Show general error */}
          {formErrors.general && (
            <p className="text-red-500 text-center mb-3 font-poppins">
              {formErrors.general}
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block font-poppins mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1 font-poppins">
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-poppins mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1 font-poppins">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-poppins mb-1">Set Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1 font-poppins">
                  {formErrors.password}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary-accent hover:bg-secondary text-white py-2 rounded-lg font-poppins transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          {/* Navigate to Login */}
          <p className="text-center text-sm mt-4 font-poppins">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary-accent hover:text-secondary cursor-pointer hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

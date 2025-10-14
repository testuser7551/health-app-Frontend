import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { login } from "../../api/auth/auth";
import { useDispatch } from "react-redux";
import { setUser, setLoading, setError } from "../../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lerror, setlError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const data = await login({ email, password }); 
      dispatch(setUser(data)); 
      // console.log(data);
      localStorage.setItem("token", data?.token); 
      navigate("/");
    } catch (err) {
      const message = err.message || "Login failed";
      dispatch(setError(message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary-accent to-secondary px-4 py-10">

      {/* Top Center Logo */}
     

      {/* Login Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <div className="mb-10 flex justify-center">
        <img
          src="/4youngevity12.png"
          alt="Logo"
          className="h-32 w-auto object-contain"
        />
      </div>
        <h1 className="text-3xl font-gilmer text-black mb-6 text-center font-extrabold ">
        LOGIN
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block font-poppins mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-poppins mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-2.5"
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Error message */}
          {lerror && <p className="text-red-500 text-sm">{lerror}</p>}

          {/* Forgot Password */}
          {/* <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/forgotpassword")}
              className="text-secondary hover:text-secondary-light text-sm"
            >
              Forgot Password?
            </button>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-primary-accent hover:bg-secondary text-white py-3 rounded-xl font-poppins transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Create Account */}
        <p className="text-center text-sm mt-5 font-poppins">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-primary-accent hover:text-secondary font-medium cursor-pointer hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}


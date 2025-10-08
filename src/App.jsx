import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import Chat from "./pages/Chat";
import Records from "./pages/Records";
import DayQuestions from "./pages/DayQuestions";
import ProtectedRoute from "./ProtectedRoutes";
import Call from "./pages/Call";
import Careteam from "./pages/careteam"
import { getCurrentUser } from "./api/auth/auth"
import { useDispatch } from "react-redux";
import { setUser, logout } from "./redux/authSlice";
import Settings from "./pages/Settings"
import Onboarding from "./components/Onboarding";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const data = await getCurrentUser();
        dispatch(setUser({ user: data, token }));
      } catch (err) {
        console.error("Token invalid, logging out:", err);
        dispatch(logout());
        localStorage.removeItem("token");
      }
    };
    initializeAuth();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Dashboard layout wrapper */}
        <Route path="/" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<ProgramDetails />} />
          <Route path="programs/:id/day/:dayNumber" element={<DayQuestions />} />
          <Route path="chat" element={<Chat />} />
          <Route path="records" element={<Records />} />
          <Route path="call" element={<Call />} />
          <Route path="careteam" element={<Careteam />} />
          <Route path="settings" element ={<Settings/>}/>
          
        </Route>

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

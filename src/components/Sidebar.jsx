import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  MessageSquare,
  PhoneCall,
  Users,
  FileText,
  Settings,
  X,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../redux/authSlice";

const menuItems = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/" },
  { name: "Programs", icon: <Calendar size={20} />, path: "/programs" },
  { name: "Chat with Rachel", icon: <MessageSquare size={20} />, path: "/chat" },
  { name: "Call Mike", icon: <PhoneCall size={20} />, path: "/call" },
  { name: "Care Team", icon: <Users size={20} />, path: "/careteam" },
  { name: "Records", icon: <FileText size={20} />, path: "/records" },
  { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
];

export default function Sidebar({ open, setOpen }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
     dispatch(logout());
    navigate("/login"); 
  };
  // Detect mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`fixed z-40 md:relative md:translate-x-0 bg-white text-black w-72 h-full flex flex-col transform transition-transform duration-300  ${open ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ boxShadow: "4px 0 6px rgba(0,0,0,0.2)" }}
      >
        <div className="flex items-center justify-end md:hidden p-4 border-b-2 border-gray-200  ">
          <button onClick={() => setOpen(false)} className=" cursor-pointer ">
            <X size={24} />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center border-b border-secondary px-5">
          <img
            src="/4youngevity12.png"
            alt="Logo"
            className="h-32 w-auto object-contain"
          />
        </div>

        <nav className="flex-1 overflow-y-auto p-5">
          {menuItems.map((item, idx) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/" // Only exact match for Dashboard
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={idx}
                to={item.path}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 px-6 py-3 mb-2 rounded-lg transition text-black
                  ${isActive
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-200 hover:text-black"
                  }`}
              >
                {item.icon}
                <span className="font-poppins">{item.name}</span>
              </Link>
            );
          })}
        </nav>

       <div
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-3 mb-2 rounded-lg transition cursor-pointer text-center py-4 text-lg text-red-500 border-t border-gray-200 hover:bg-red-100 rounded transition font-poppins"
        >
          <LogOut size={20} />
          Logout
        </div>
      </div>
    </>
  );
}

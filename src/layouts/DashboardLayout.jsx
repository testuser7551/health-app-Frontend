import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bgcolor text-text font-poppins">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Navbar */}
        <div className="p-4 flex items-center justify-between bg-white text-primary md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="cursor-pointer">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="font-gilmer text-lg">
              <img
            src="/4youngevity12.png"
            alt="Logo"
            className="h-12 w-auto object-contain" // increased size
          />
          </h1>
        </div>

       {/* Main content area */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

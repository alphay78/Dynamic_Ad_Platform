import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Image, Settings, LogOut } from "lucide-react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-[#E9F3EC] border-r border-gray-200 flex flex-col p-6">
      <h1
        className="text-xl font-semibold mb-10 text-emerald-700 tracking-wide cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        Gospel Ad
      </h1>

      <nav className="space-y-2 flex-1">
        <button
          className="flex items-center w-full gap-3 px-3 py-2 rounded-md hover:bg-emerald-100 transition"
          onClick={() => navigate("/dashboard")}
        >
          <LayoutDashboard size={18} className="text-emerald-700" /> Dashboard
        </button>

        <button
          className="flex items-center w-full gap-3 px-3 py-2 rounded-md hover:bg-emerald-100 transition"
          onClick={() => navigate("/creatives")}
        >
          <Image size={18} className="text-emerald-700" /> Creatives
        </button>

        <button
          className="flex items-center w-full gap-3 px-3 py-2 rounded-md hover:bg-emerald-100 transition"
          onClick={() => navigate("/settings")}
        >
          <Settings size={18} className="text-emerald-700" /> Settings
        </button>
      </nav>

      <div className="pt-6 border-t border-gray-200">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-700 transition"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

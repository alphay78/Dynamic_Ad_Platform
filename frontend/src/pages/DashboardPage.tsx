import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  LogOut,
  User,
  LayoutDashboard,
  Image,
  Settings,
  PlayCircle,
} from "lucide-react";
import projectThumb from "../assets/CreativeImage.png"; 

const StudioDashboard: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Faith Campaign Reel",
      date: "Oct 31, 2025",
      type: "Video Template",
      status: "Draft",
    },
    {
      id: 2,
      title: "Hope Ad Series",
      date: "Oct 29, 2025",
      type: "Design Set",
      status: "Published",
    },
    {
      id: 3,
      title: "Gospel Shorts Pack",
      date: "Oct 20, 2025",
      type: "Video Set",
      status: "Published",
    },
    {
      id: 4,
      title: "Light in the City",
      date: "Oct 15, 2025",
      type: "Ad Campaign",
      status: "Draft",
    },
    {
      id: 5,
      title: "Grace Story Ads",
      date: "Oct 10, 2025",
      type: "Video Template",
      status: "Published",
    },
    {
      id: 6,
      title: "Youth Hope Clips",
      date: "Oct 8, 2025",
      type: "Video Set",
      status: "Draft",
    },
    {
      id: 7,
      title: "Gospel Design Pack",
      date: "Oct 6, 2025",
      type: "Design Set",
      status: "Published",
    },
    {
      id: 8,
      title: "Mission Focus Reel",
      date: "Oct 4, 2025",
      type: "Ad Campaign",
      status: "Published",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAF9] text-gray-800 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-emerald-600 to-emerald-400 flex flex-col p-6 text-white">
        <h1 className="text-xl font-bold mb-10 tracking-wide">
          Gospel Ad
        </h1>

        <nav className="space-y-3 flex-1">
          <button
            className="flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => navigate("/dashboard")}
          >
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button
            className="flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => navigate("/creatives")}
          >
            <Image size={18} /> Export History
          </button>
          <button
            className="flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => navigate("/settings")}
          >
            <Settings size={18} /> Settings
          </button>
        </nav>

        <div className="pt-6 border-t border-white/20">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Welcome back, Bikila  ✨
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/select-preset")}
              className="bg-emerald-600 hover:bg-emerald-500 transition text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm"
            >
              <Plus size={18} /> New Project
            </button>
            <button className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-200 transition">
              <User size={20} />
            </button>
          </div>
        </header>

        {/* Get Started Section */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Get Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Start from Template",
              "Create Brand Template",
              "Invite Team",
              "Explore Library",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white hover:bg-emerald-50 border border-gray-200 rounded-xl p-6 text-center cursor-pointer shadow-sm transition"
                onClick={() =>
                  item === "Start from Template"
                    ? navigate("/select-preset")
                    : null
                }
              >
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Cards Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
                onClick={() => navigate(`/project/${proj.id}`)}
              >
                {/* Image at the top */}
                <div className="relative">
                  <img
                    src={projectThumb}
                    alt={proj.title}
                    className="w-full h-32 object-cover"
                  />
                  <span
                    className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs ${
                      proj.status === "Published"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{proj.type}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{proj.date}</span>
                    <PlayCircle size={16} className="text-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudioDashboard;

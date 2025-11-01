import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  LogOut,
  User,
  LayoutDashboard,
  Image,
  Settings,
} from "lucide-react";

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
  ];

  return (
    <div className="min-h-screen bg-[#F9FAF9] text-gray-800 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-emerald-600 to-emerald-400 flex flex-col p-6 text-white">
        <h1 className="text-xl font-bold mb-10 tracking-wide">
          FaithFlow Studio
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
            <Image size={18} /> Creatives
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
            onClick={() => navigate("/")}
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
            <p className="text-gray-500 mt-1">Welcome back, Creator ✨</p>
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

        {/* Projects Table */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Recent Projects
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Last Modified</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj) => (
                  <tr
                    key={proj.id}
                    className="hover:bg-emerald-50 transition border-t border-gray-100"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {proj.title}
                    </td>
                    <td className="py-3 px-4 text-gray-500">{proj.type}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-md text-xs ${
                          proj.status === "Published"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {proj.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{proj.date}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => navigate(`/project/${proj.id}`)}
                        className="text-emerald-600 hover:underline"
                      >
                        Open
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudioDashboard;

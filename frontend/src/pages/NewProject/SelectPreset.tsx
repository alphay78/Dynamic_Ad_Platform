import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Settings,
  LogOut,
  Monitor,
  Smartphone,
  Youtube,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const SelectPreset: React.FC = () => {
  const navigate = useNavigate();

  const presets = [
    {
      title: "Social Media",
      description: "Templates for Facebook, Instagram, LinkedIn & more.",
      icon: <Monitor size={30} className="text-emerald-600" />,
      color: "from-emerald-50 to-emerald-100",
      route: "/new-project/social-media",
    },
    {
      title: "Website Ads",
      description: "Create dynamic ad banners and web visuals easily.",
      icon: <Globe size={30} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100",
      route: "/new-project/website-ads",
    },
    {
      title: "YouTube Video",
      description: "Edit or create short and engaging video content.",
      icon: <Youtube size={30} className="text-red-500" />,
      color: "from-red-50 to-red-100",
      route: "/new-project/youtube-video",
    },
    {
      title: "Mobile Apps",
      description: "Design creative assets for mobile app interfaces.",
      icon: <Smartphone size={30} className="text-purple-600" />,
      color: "from-purple-50 to-purple-100",
      route: "/new-project/mobile-apps",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-100 flex font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-emerald-600 to-emerald-400 flex flex-col p-6 text-white shadow-lg">
        <h1
          className="text-xl font-bold mb-10 tracking-wide cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
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

      {/* Main Content */}
      <main className="flex-1 p-12 relative">
        {/* Floating Glow Decoration */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>

        {/* Header */}
        <header className="flex justify-between items-center mb-12 relative z-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-1">
              Select a Preset
            </h1>
            <p className="text-gray-600 text-sm">
              Choose how you’d like to start your new creative project.
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm text-emerald-700 font-medium hover:underline"
          >
            ← Back to Dashboard
          </button>
        </header>

        {/* Preset Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {presets.map((preset, i) => (
            <motion.div
              key={preset.title}
              onClick={() => navigate(preset.route)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`cursor-pointer bg-gradient-to-br ${preset.color} rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl border border-white/60 transition-all`}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-inner mb-4">
                {preset.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {preset.title}
              </h3>
              <p className="text-sm text-gray-600">{preset.description}</p>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default SelectPreset;

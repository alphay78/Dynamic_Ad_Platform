import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Settings,
  LogOut,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import CreativeImg from "../../assets/CreativeImage.png";

declare global {
  interface Window {
    TEMPLATES_DB: any;
  }
}

const SocialMediaPreset: React.FC = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templates, setTemplates] = useState<any[]>([]);

  // ✅ Load templates dynamically from window.TEMPLATES_DB
  useEffect(() => {
    if (window.TEMPLATES_DB && window.TEMPLATES_DB["square"]) {
      const dbTemplates = window.TEMPLATES_DB["square"].templates.map(
        (tpl: any) => ({
          id: tpl.id,
          title: tpl.name,
          thumbnail: tpl.thumbnail,
          date: "Recently added",
        })
      );
      setTemplates(dbTemplates);
    }
  }, []);

  // ✅ Navigate to Template Studio with data
  const handleNext = () => {
    if (projectName && selectedTemplate) {
      const selectedData = templates.find((tpl) => tpl.id === selectedTemplate);
      navigate("/new-project/template-studio", {
        state: {
          projectName,
          templateId: selectedTemplate,
          templateData: selectedData,
        },
      });
    } else {
      alert("Please enter a project name and select a template.");
    }
  };

  return (
    <div className="h-screen flex font-sans text-gray-800 overflow-hidden">
      {/* Sidebar (Fixed) */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-emerald-600 to-emerald-400 flex flex-col p-6 text-white shadow-xl">
        <h1
          className="text-xl font-bold mb-10 tracking-wide cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
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

      {/* Main Content */}
      <main className="flex-1 ml-64 overflow-y-auto p-12 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 relative">
        {/* Background Blur Effect */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>

        {/* Header */}
        <header className="flex justify-between items-center mb-10 relative z-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-1">
              Social Media Templates
            </h1>
            <p className="text-gray-600 text-sm">
              Select a beautiful post template to begin your project.
            </p>
          </div>
          <button
            onClick={() => navigate("/select-preset")}
            className="text-sm text-emerald-700 font-medium hover:underline"
          >
            ← Back
          </button>
        </header>

        {/* Project Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-lg bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-emerald-100"
        >
          <label
            htmlFor="projectName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Project Name
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter your project name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/70"
          />
        </motion.div>

        {/* Template Grid */}
        <h2 className="text-xl font-semibold mb-6 text-gray-700 relative z-10">
          Select Template
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 pb-20">
          {templates.map((template, i) => (
            <motion.div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 border ${
                selectedTemplate === template.id
                  ? "border-emerald-500 ring-2 ring-emerald-300"
                  : "border-transparent hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden relative group">
                <img
                  src={template.thumbnail || CreativeImg}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 bg-emerald-600/50 flex items-center justify-center text-white">
                    <CheckCircle size={28} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
                  {template.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{template.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <div className="text-right mt-12 relative z-10 pb-10">
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 transition text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 ml-auto shadow-lg"
          >
            Generate <ArrowRight size={18} />
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default SocialMediaPreset;

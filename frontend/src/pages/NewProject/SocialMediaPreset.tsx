import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Settings,
  LogOut,
  ArrowRight,
  CheckCircle,
  PlusCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// --- 1. Define Types for the Nested DB Structure ---

interface TemplateVariant {
  id: string;
  name: string;
  dimensions: string;
  thumbnail: string;
  data: any; 
}

interface TemplateGroup {
  id: string;
  name: string;
  thumbnail: string;
  variants: { [key: string]: TemplateVariant };
}

export interface TemplateDB {
  [groupId: string]: TemplateGroup;
}

declare global {
  interface Window {
    TEMPLATES_DB: TemplateDB;
  }
}

// --- 2. Define a single, flat structure for the component state ---
interface FlatTemplateData {
  id: string;
  title: string; 
  name: string; 
  thumbnail: string;
  dimensions?: string; 
  data: any; 
  // Add required property for the render loop
  date: string; 
}

const SocialMediaPreset: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templates, setTemplates] = useState<FlatTemplateData[]>([]);

// In SocialMediaPreset component:

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/templates.js";

    script.onload = () => {
      const db: TemplateDB = window.TEMPLATES_DB || {};

      const flatTemplates: FlatTemplateData[] = Object.entries(db).flatMap(
        ([groupId, group]) => {
          return Object.values(group.variants).map(
            (variant: TemplateVariant) => ({
              // 🏆 CRITICAL FIX: Create a globally unique ID
              id: `${groupId}-${variant.id}`, 
              groupId: groupId, 
              variantId: variant.id,
              title: variant.name, 
              name: variant.name, 
              thumbnail: variant.thumbnail,
              dimensions: variant.dimensions,
              data: variant.data,
              date: "Recently added", 
            })
          );
        }
      );

      setTemplates(flatTemplates);
    };

    script.onerror = () => console.error("❌ Failed to load templates.js");
    document.body.appendChild(script);
    
    return () => {
        const scriptElement = document.querySelector(`script[src="/templates.js"]`);
        if (scriptElement && document.body.contains(scriptElement)) {
            document.body.removeChild(scriptElement);
        }
    }
  }, []);

  const handleNext = () => {
    if (!selectedTemplate) {
      alert("Please select a template to continue.");
      return;
    }

    if (selectedTemplate === "blank") {
      navigate("/new-project/template-studio", {
        state: { projectName: "Untitled Canvas", templateId: "blank" },
      });
    } else {
      // FIX: Find the selected template data
      const selectedData = templates.find((tpl) => tpl.id === selectedTemplate);
      
      // FIX: Check if data was successfully found
      if (!selectedData) {
          alert("Error: Template data not found.");
          return;
      }

      navigate("/new-project/template-studio", {
        state: {
          // Use the correct property: selectedData.name or selectedData.title
          projectName: selectedData.name || "Untitled Project", 
          templateId: selectedTemplate,
          templateData: selectedData.data, 
        },
      });
    }
  };

  return (
    <div className="h-screen flex font-sans text-gray-800 overflow-hidden relative">
      {/* Sidebar (Omitted for brevity) */}
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
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Background Motion Blobs (Omitted for brevity) */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-200/50 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-120px] left-[200px] w-[300px] h-[300px] bg-emerald-100/60 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Main Content */}
      <main className="flex-1 ml-64 overflow-y-auto p-12 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-1">
              Social Media Templates
            </h1>
            <p className="text-gray-600 text-sm">
              Select a design or start with a blank, Spirit-led creation ✨
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/select-preset")}
            className="text-sm text-emerald-700 font-medium hover:underline"
          >
            ← Back
          </motion.button>
        </header>

        {/* Create Blank Canvas (left-aligned, plus icon) */}
        <motion.div
          onClick={() => setSelectedTemplate("blank")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`cursor-pointer relative mb-16 max-w-xs h-56 flex flex-col items-center justify-center rounded-2xl bg-white/70 backdrop-blur-lg border border-emerald-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
            selectedTemplate === "blank"
              ? "ring-2 ring-emerald-400 border-emerald-400"
              : ""
          }`}
        >
          {/* Plus Icon instead of image */}
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <PlusCircle
              size={50}
              className="text-emerald-500 mb-3 opacity-90"
            />
          </motion.div>

          <h3 className="text-lg font-semibold text-gray-800">
            Create Blank Canvas
          </h3>
          <p className="text-xs text-gray-500 mt-1 italic">
            “Start from light, shape your message.”
          </p>
          {selectedTemplate === "blank" && (
            <div className="absolute inset-0 bg-emerald-600/40 flex items-center justify-center text-white rounded-2xl">
              <CheckCircle size={28} />
            </div>
          )}
        </motion.div>

        {/* Template Grid */}
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold mb-6 text-gray-700"
        >
          Choose a Template
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
          {templates.map((template, i) => (
            <motion.div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 border ${
                selectedTemplate === template.id
                  ? "border-emerald-500 ring-2 ring-emerald-300"
                  : "border-transparent hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <div className="h-40 w-full overflow-hidden relative group">
                <motion.img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 bg-emerald-600/50 flex items-center justify-center text-white">
                    <CheckCircle size={28} />
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {template.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {/* Display the dimensions property */}
                  {template.dimensions}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <div className="text-right mt-12 pb-10">
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white px-10 py-3 rounded-full font-semibold flex items-center gap-2 ml-auto shadow-lg"
          >
            Generate <ArrowRight size={18} />
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default SocialMediaPreset;
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Image,
  Settings,
  LogOut,
  Download,
  Square,
  ArrowRight,
  Smartphone,
  RectangleHorizontal,
  RectangleVertical,
} from "lucide-react";

type RatioKey = "square" | "portrait" | "landscape" | "story";

const RATIO_META: Record<
  RatioKey,
  {
    title: string;
    dims: string;
    w: number;
    h: number;
    platforms: string[];
    icon: React.ReactNode;
  }
> = {
  square: {
    title: "Square",
    dims: "1080 × 1080",
    w: 1080,
    h: 1080,
    platforms: ["Instagram", "Facebook", "X", "LinkedIn", "TikTok"],
    icon: <Square size={24} />,
  },
  portrait: {
    title: "Portrait",
    dims: "1080 × 1350",
    w: 1080,
    h: 1350,
    platforms: ["Instagram", "Facebook"],
    icon: <RectangleVertical size={24} />,
  },
  landscape: {
    title: "Landscape",
    dims: "1200 × 628",
    w: 1200,
    h: 628,
    platforms: ["Facebook", "LinkedIn"],
    icon: <RectangleHorizontal size={24} />,
  },
  story: {
    title: "Story / Reel",
    dims: "1080 × 1920",
    w: 1080,
    h: 1920,
    platforms: ["Instagram", "Facebook", "TikTok"],
    icon: <Smartphone size={24} />,
  },
};

const TemplateStudio: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const incoming = (location.state as any) || {};
  const incomingProject = incoming.projectName || "";
  const incomingTemplateId = incoming.template || null;

  const [projectName, setProjectName] = useState<string>(incomingProject);
  const [selectedRatio, setSelectedRatio] = useState<RatioKey>("square");

  const previewTemplates = useMemo(
    () => [
      { id: "main1", name: "Main Square", ratio: "square" as RatioKey },
      { id: "main2", name: "Vertical", ratio: "portrait" as RatioKey },
      { id: "main3", name: "Horizontal", ratio: "landscape" as RatioKey },
      { id: "main4", name: "Story", ratio: "story" as RatioKey },
    ],
    []
  );

  const canvasPreviewStyles = (ratio: RatioKey) => {
    const meta = RATIO_META[ratio];
    const MAX_W = 640;
    const MAX_H = 420;
    const scale = Math.min(MAX_W / meta.w, MAX_H / meta.h, 1);
    const width = Math.round(meta.w * scale);
    const height = Math.round(meta.h * scale);
    return { width, height };
  };

  const { width: canvasW, height: canvasH } =
    canvasPreviewStyles(selectedRatio);

  return (
    <div className="h-screen w-screen flex bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-emerald-700 to-emerald-500 text-white p-6 z-30 shadow-xl">
        <div
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer mb-8 font-bold text-xl"
        >
          FaithFlow Studio
        </div>

        <nav className="flex-1 space-y-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button
            onClick={() => navigate("/creatives")}
            className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            <Image size={18} /> Creatives
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            <Settings size={18} /> Settings
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:flex flex-col fixed right-0 top-0 h-full w-72 bg-white border-l z-30 p-4">
        <div className="text-lg font-semibold mb-4">Tools</div>
        <div className="space-y-4 overflow-auto">
          <div className="border rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-2">Selected Size</div>
            <div className="font-medium">{RATIO_META[selectedRatio].title}</div>
            <div className="text-xs text-gray-400">
              {RATIO_META[selectedRatio].dims}
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-md flex items-center justify-center gap-2">
            <Download size={16} /> Export Current
          </button>
        </div>
      </aside>

      {/* MAIN CENTER */}
      <main className="flex-1 ml-0 lg:ml-64 mr-0 xl:mr-72 flex flex-col overflow-hidden">
        {/* Top Toolbar */}
        <div className="h-20 bg-white border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500"
              onClick={() => navigate("/new-project/select-size")}
            >
              ← Back
            </button>

            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project name"
              className="px-3 py-2 border rounded-md w-72 bg-white"
            />
          </div>

          <button className="px-4 py-2 rounded-md bg-emerald-600 text-white flex items-center gap-2 hover:bg-emerald-500">
            <Download size={16} /> Export All
          </button>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 overflow-auto p-8 flex flex-col items-center">
          <div className="text-sm text-gray-600 mb-3">
            Canvas preview — {RATIO_META[selectedRatio].title} •{" "}
            {RATIO_META[selectedRatio].dims}
          </div>

          <div
            className="rounded-lg bg-white border border-gray-200 shadow-inner flex items-center justify-center"
            style={{ width: canvasW, height: canvasH }}
          >
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800">
                Your Design Canvas
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Select a size below to switch
              </div>
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {(Object.keys(RATIO_META) as RatioKey[]).map((key) => {
              const meta = RATIO_META[key];
              const active = selectedRatio === key;
              return (
                <motion.div
                  key={key}
                  onClick={() => setSelectedRatio(key)}
                  whileHover={{ scale: 1.03 }}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                    active
                      ? "ring-2 ring-emerald-400 border-emerald-300"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-50 p-2 rounded">
                        {meta.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {meta.title}
                        </div>
                        <div className="text-xs text-gray-500">{meta.dims}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {active ? "Selected" : "Choose"}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {meta.platforms.map((p) => (
                      <div
                        key={p}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                      >
                        {p}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/new-project/editor", {
                          state: { ratio: key },
                        });
                      }}
                      className="text-xs px-3 py-1 rounded bg-emerald-600 text-white flex items-center gap-1"
                    >
                      Open <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplateStudio;

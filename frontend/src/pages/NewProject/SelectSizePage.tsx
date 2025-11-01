import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const sizeOptions = [
  {
    id: "square",
    name: "Square",
    dimensions: "1080 × 1080",
    platforms: [
      <Instagram key="inst" />,
      <Facebook key="fb" />,
      <Twitter key="tw" />,
      <Linkedin key="ln" />,
    ],
  },
  {
    id: "portrait",
    name: "Portrait",
    dimensions: "1080 × 1350",
    platforms: [<Instagram key="inst" />, <Facebook key="fb" />],
  },
  {
    id: "landscape",
    name: "Landscape",
    dimensions: "1200 × 628",
    platforms: [<Facebook key="fb" />, <Linkedin key="ln" />],
  },
  {
    id: "story",
    name: "Story / Reel",
    dimensions: "1080 × 1920",
    platforms: [
      <Instagram key="inst" />,
      <Facebook key="fb" />,
      <Youtube key="yt" />,
    ],
  },
];

const SelectSizePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (sizeId: string) => {
    navigate(`/studio`, { state: { selectedSize: sizeId } });
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-emerald-50 to-emerald-100 text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-20 bg-white shadow-xl flex flex-col items-center justify-between py-6 border-r border-gray-100">
        <div className="space-y-8">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
        </div>
        <button className="w-10 h-10 bg-gray-100 rounded-xl hover:bg-emerald-500 hover:text-white transition">
          ⚙️
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 flex flex-col items-center overflow-y-auto">
        <h1 className="text-3xl font-bold mb-10 text-gray-800">
          Select Canvas Size
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
          {sizeOptions.map((size, i) => (
            <motion.div
              key={size.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleSelect(size.id)}
              className="cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-emerald-400"
            >
              <div className="flex flex-col items-center space-y-3">
                <div
                  className={`rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold ${
                    size.id === "square"
                      ? "w-32 h-32"
                      : size.id === "portrait"
                      ? "w-28 h-36"
                      : size.id === "landscape"
                      ? "w-40 h-24"
                      : "w-28 h-48"
                  }`}
                >
                  {size.name}
                </div>

                <h2 className="font-semibold text-gray-700">
                  {size.dimensions}
                </h2>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                  {size.platforms.map((icon, idx) => (
                    <div key={idx} className="w-6 h-6 text-emerald-600">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-20 bg-white shadow-xl flex flex-col items-center justify-center border-l border-gray-100">
        <div className="text-xs text-gray-500 rotate-90">Canvas Studio</div>
      </aside>
    </div>
  );
};

export default SelectSizePage;

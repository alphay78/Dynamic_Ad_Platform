import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import type { TemplateDB } from "./SocialMediaPreset";

declare global {
  interface Window {
    TEMPLATES_DB: TemplateDB;
  }
}

interface TemplateVariant {
  group: string;
  variantId: string;
  name: string;
  dimensions: string;
  thumbnail: string;
}

const TemplateStudio: React.FC = () => {
  const navigate = useNavigate();
  const [templateVariations, setTemplateVariations] = useState<
    TemplateVariant[]
  >([]);
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateVariant | null>(null);

  // --- Load templates.js dynamically from /public ---
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/templates.js"; // ✅ served from public
    script.onload = () => {
      const db = window.TEMPLATES_DB || {};
      const variants: TemplateVariant[] = [];

      Object.entries(db).forEach(([groupKey, groupData]: any) => {
        const groupName = groupData.name;
        Object.entries(groupData.variants).forEach(
          ([variantId, variant]: any) => {
            variants.push({
              group: groupName,
              variantId,
              name: variant.name,
              dimensions: variant.dimensions,
              thumbnail: variant.thumbnail,
            });
          }
        );
      });

      setTemplateVariations(variants);
      if (variants.length > 0) setSelectedTemplate(variants[0]);
    };
    script.onerror = () => console.error("❌ Failed to load templates.js");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="h-screen w-screen grid grid-cols-4 bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* --- MAIN CENTER (Editor) --- */}
      <div className="col-span-3 h-full">
        <iframe
          src={`/editor.html?templateId=${selectedTemplate?.variantId || ""}`}
          title="Ad Editor"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
        />
      </div>

      {/* --- RIGHT SIDEBAR --- */}
      <aside className="col-span-1 h-full flex flex-col bg-white border-l p-4 overflow-y-auto">
        <div className="text-lg font-semibold mb-4">Template Variations</div>

        {templateVariations.length === 0 ? (
          <div className="text-xs text-gray-400 italic">
            Loading templates...
          </div>
        ) : (
          <div className="flex flex-col gap-3 mb-4">
            {templateVariations.map((tpl) => (
              <motion.div
                key={tpl.variantId}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedTemplate(tpl)}
                className={`flex items-center gap-3 p-2 border rounded-lg cursor-pointer transition ${
                  selectedTemplate?.variantId === tpl.variantId
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <img
                  src={tpl.thumbnail}
                  alt={tpl.name}
                  className="w-14 h-14 rounded-md object-cover bg-gray-200"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    {tpl.name}
                  </div>
                  <div className="text-xs text-gray-500">{tpl.dimensions}</div>
                  <div className="text-[10px] text-gray-400">{tpl.group}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

                {selectedTemplate && (
          <div className="mt-auto">
            <div className="border rounded-lg p-3 mb-4">
              <div className="text-xs text-gray-500 mb-1">
                Selected Template
              </div>
              <div className="font-medium">{selectedTemplate.name}</div>
              <div className="text-xs text-gray-400">
                {selectedTemplate.dimensions}
              </div>
            </div>

            <button
              onClick={() =>
                navigate("/new-project/editor", {
                  state: { template: selectedTemplate },
                })
              }
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-md flex items-center justify-center gap-2"
            >
              <ArrowRight size={16} /> Open in Editor
            </button>

            <button className="w-full mt-3 bg-emerald-700 hover:bg-emerald-600 text-white py-2 rounded-md flex items-center justify-center gap-2">
              <Download size={16} /> Export
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default TemplateStudio;
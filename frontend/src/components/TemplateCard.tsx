import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function TemplateSelectPage() {
  const navigate = useNavigate();
  const templates = [
    "Clean Minimal",
    "Bold Impact",
    "Soft Gradient",
    "Retro Style",
  ];

  function handleSelect(template: string) {
    localStorage.setItem("selectedTemplate", template);
    navigate("/new-project/editor");
  }

  return (
    <div className="flex min-h-screen bg-[#f6fdf8]">
      <Sidebar />
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Select Template
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {templates.map((t) => (
            <div
              key={t}
              onClick={() => handleSelect(t)}
              className="border rounded-xl p-6 text-center cursor-pointer hover:shadow-lg hover:border-emerald-500 transition"
            >
              <p className="font-medium text-gray-700">{t}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

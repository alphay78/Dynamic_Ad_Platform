// src/pages/NewProject/SelectTemplate.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CreativeImg from "../../assets/CreativeImage.png";

interface Template {
  id: string;
  title: string;
  date: string;
}

const SelectTemplate: React.FC = () => {
  const navigate = useNavigate();

  const templates: Template[] = [
    { id: "template1", title: "Product Promotion", date: "2 months ago" },
    { id: "template2", title: "Event Announcement", date: "3 months ago" },
    { id: "template3", title: "Brand Awareness", date: "1 month ago" },
    { id: "template4", title: "Testimonial Post", date: "4 months ago" },
    { id: "template5", title: "New Collection", date: "2 months ago" },
    { id: "template6", title: "Giveaway Post", date: "1 month ago" },
    { id: "template7", title: "Customer Review", date: "5 months ago" },
    { id: "template8", title: "Launch Countdown", date: "2 months ago" },
  ];

  const handleSelect = (templateId: string) => {
    // Smooth navigation to the template editor or canvas page
    navigate(`/new-project/editor`, { state: { templateId } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-100 p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Select a Template
      </h1>
      <p className="text-gray-600 mb-10 text-sm">
        Choose from stunning social media post templates to start your project.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((template, i) => (
          <motion.div
            key={template.id}
            onClick={() => handleSelect(template.id)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: "0 8px 25px rgba(16, 185, 129, 0.25)",
            }}
            className="relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-transparent hover:border-emerald-300 group"
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src={CreativeImg}
                alt={template.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Info section */}
            <div className="p-5">
              <h3 className="text-md font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                {template.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{template.date}</p>
            </div>

            {/* Arrow icon on hover */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 right-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SelectTemplate;

import React from "react";
import { useNavigate } from "react-router-dom";
import { PenTool, Layout, Share2 } from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        {/* Brand */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-emerald-600 cursor-pointer"
        >
          FaithFlow Studio
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:block">
          <a href="#features" className="hover:text-emerald-600 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-emerald-600 transition">
            How it Works
          </a>
          <a href="#contact" className="hover:text-emerald-600 transition">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg shadow-sm transition"
          >
            Dashboard
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Create. Collaborate. Launch <br /> Effortlessly.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Simplify your creative workflow with FaithFlow Studio — your
          AI-powered workspace for design, collaboration, and project
          management.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-emerald-600 hover:bg-emerald-500 transition text-white px-8 py-3 rounded-lg text-lg shadow-md"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What You Can Do
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: <PenTool size={32} className="text-emerald-600" />,
              title: "Smart Template Editor",
              desc: "Design faster with adaptive templates that reflect your brand style instantly.",
            },
            {
              icon: <Layout size={32} className="text-emerald-600" />,
              title: "Organized Dashboard",
              desc: "Manage projects, media, and assets seamlessly in one creative hub.",
            },
            {
              icon: <Share2 size={32} className="text-emerald-600" />,
              title: "Instant Export & Share",
              desc: "Generate ready-to-post designs or export them in any format you need.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 border border-gray-200 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-400 py-20 text-center text-white">
        <h3 className="text-4xl font-bold mb-6">Start Your Creative Journey</h3>
        <p className="text-white/90 mb-8">
          Join creators who trust FaithFlow Studio to power their digital
          storytelling.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-emerald-700 hover:bg-gray-100 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-md"
        >
          Get Started for Free
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} FaithFlow Studio. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

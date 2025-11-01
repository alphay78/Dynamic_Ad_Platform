import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PenTool, Video, Share2 } from "lucide-react";

// --- 🌍 Rotating Gospel Globe --- //
function SpreadingLightGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) globeRef.current.rotation.y += 0.002;
    if (ringRef.current) {
      const scale = 1 + (Math.sin(t * 1.5) + 1) * 0.2;
      ringRef.current.scale.set(scale, scale, scale);
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.3 + 0.2 * Math.sin(t * 1.5);
    }
  });

  return (
    <group>
      <Sphere ref={globeRef} args={[1.3, 64, 64]}>
        <meshStandardMaterial
          color="#22c55e"
          transparent
          opacity={0.2}
          wireframe
        />
      </Sphere>

      <mesh ref={ringRef}>
        <ringGeometry args={[1.35, 1.55, 64]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.4} />
      </mesh>

      <pointLight position={[0, 0, 0]} intensity={3} color="#16a34a" />
    </group>
  );
}

// --- 🦶 Custom Foot Cursor --- //
const FootCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 text-emerald-500 pointer-events-none z-[9999]"
      animate={{ x: pos.x - 20, y: pos.y - 20 }}
      transition={{ type: "tween", ease: "linear", duration: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-10 h-10 opacity-90 drop-shadow-[0_0_10px_#34d399]"
        fill="currentColor"
      >
        <path d="M8.5 2a1.5 1.5 0 1 0 0 3h.5V2h-.5zm2.5.5a1.5 1.5 0 1 0 0 3h.5V2.5h-.5zM13.5 3a1.5 1.5 0 1 0 0 3h.5V3h-.5zM16.5 4a1.5 1.5 0 1 0 0 3h.5V4h-.5zM9 8c-2 0-4 2-4 5 0 3 2 5 4 7 2 2 6 3 8 0 1-2 0-3-1-4-1-1-2-3-2-4 0-1 0-4-5-4z" />
      </svg>
    </motion.div>
  );
};

// --- ✨ Main Landing Page --- //
const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative overflow-hidden">
      <FootCursor />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-emerald-600 cursor-pointer"
        >
          FaithFlow Studio
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#features" className="hover:text-emerald-600 transition">
            Features
          </a>
          <a href="#mission" className="hover:text-emerald-600 transition">
            Mission
          </a>
          <a href="#contact" className="hover:text-emerald-600 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg shadow-sm transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-24 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-xl text-center md:text-left z-10">
          {/* 🔥 Animated Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            <motion.span
              animate={{ color: ["#064e3b", "#059669", "#064e3b"] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Design.
            </motion.span>{" "}
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Launch & Share.
            </motion.span>{" "}
            Faith-Driven Ads.
          </motion.h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            GospelReach Studio empowers believers, churches, and ministries to
            create and distribute mission-driven ad campaigns — sharing the
            message of Christ across every digital platform.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-emerald-600 hover:bg-emerald-500 transition text-white px-8 py-3 rounded-lg text-lg shadow-md"
          >
            Start Creating
          </button>
        </div>

        <div className="h-[400px] w-full md:w-1/2 relative z-0">
          <Canvas camera={{ position: [0, 0, 3.2] }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[3, 2, 2]} intensity={1} />
            <SpreadingLightGlobe />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-20 bg-gradient-to-r from-emerald-100 to-white text-center px-6"
      >
        <h3 className="text-4xl font-bold text-emerald-700 mb-4">
          Our Mission
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          To inspire the digital generation to proclaim the Gospel creatively.
          Every ad, every message, every design — a light pointing hearts to
          Jesus.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Faith Meets Creativity
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: <PenTool size={36} className="text-emerald-600" />,
              title: "Design Gospel Ads",
              desc: "Create beautiful, faith-inspired visuals ready for every social platform.",
            },
            {
              icon: <Video size={36} className="text-emerald-600" />,
              title: "Craft Video Messages",
              desc: "Transform testimonies into engaging video ads that reach hearts online.",
            },
            {
              icon: <Share2 size={36} className="text-emerald-600" />,
              title: "Launch & Share",
              desc: "Publish directly to Facebook, YouTube, or Instagram to spread light fast.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 border border-gray-200 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-400 py-20 text-center text-white">
        <h3 className="text-4xl font-bold mb-6">
          Create. Launch. Spread the Gospel.
        </h3>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join believers worldwide using creativity and technology to proclaim
          the Good News of Jesus Christ.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-emerald-700 hover:bg-gray-100 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-md"
        >
          Start Your Mission
        </button>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} GospelReach Studio — Spreading the Light
        Digitally.
      </footer>
    </div>
  );
};

export default LandingPage;

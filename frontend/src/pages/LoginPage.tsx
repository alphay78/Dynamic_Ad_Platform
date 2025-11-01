import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SparkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg
    animate={{ rotate: [0, 5, -5, 0] }}
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121m0-9.9 2.121 2.122m6.486 6.486 2.121 2.121"
    />
  </motion.svg>
);

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9f6] font-sans overflow-hidden">
      {/* Wrapper */}
      <div className="flex w-[90%] max-w-6xl shadow-2xl rounded-3xl overflow-hidden bg-white">
        {/* LEFT SECTION */}
        <div className="relative flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-emerald-600 to-teal-500 text-white p-12 overflow-hidden">
          {/* Soft Glow */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/20 blur-3xl rounded-full" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="bg-white/20 p-4 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <SparkIcon className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            {/* Welcome Text */}
            <motion.h2
              className="text-2xl font-semibold text-white/90 mb-2 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Welcome Back
            </motion.h2>

            {/* Main Title */}
            <motion.h1
              className="text-5xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Creative <br /> Messenger
            </motion.h1>

            <p className="text-lg text-white/90 max-w-md mx-auto leading-relaxed">
              Empower your calling through creativity. Bring light into every
              digital space.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center p-10 bg-[#fafcfb]"
        >
          <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-sm text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-600 p-3 rounded-full">
                <SparkIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-emerald-700 mb-1">
              FaithFlow Studio
            </h2>
            <p className="text-sm text-emerald-500 mb-6">
              Craft media that moves hearts.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Sign In
            </h3>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
              className="space-y-4 text-left"
            >
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showPwd ? (
                      // Eye off
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18M10.58 10.58A3 3 0 0113.42 13.42M2.53 12.91C3.93 8.86 7.7 6 12 6c2.2 0 4.22.7 5.85 1.88M21.47 11.09C20.07 15.14 16.3 18 12 18c-2.2 0-4.22-.7-5.85-1.88"
                        />
                      </svg>
                    ) : (
                      // Eye on
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Sign In
              </motion.button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
              Don’t have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-emerald-600 font-semibold hover:underline"
              >
                Join the Mission
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;

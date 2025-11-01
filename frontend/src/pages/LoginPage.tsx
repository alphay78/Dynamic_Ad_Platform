import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SparkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
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
  </svg>
);

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9f6] font-sans">
      {/* Container */}
      <div className="flex w-[90%] max-w-6xl shadow-2xl rounded-3xl overflow-hidden bg-white">
        {/* LEFT SIDE */}
        <div className="relative flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-teal-700 to-emerald-500 text-white p-12 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-10 left-16 w-56 h-56 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-44 h-44 bg-white opacity-10 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-md text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <SparkIcon className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Welcome Back,
              <br />
              <span className="block text-5xl font-extrabold">
                Creative Messenger
              </span>
            </h1>

            <p className="text-lg text-white text-opacity-90 mb-8 leading-relaxed">
              Empower your calling through creativity. Generate dynamic content
              and video messages that share hope, faith, and inspiration with
              the world.
            </p>

            <ul className="space-y-3 text-white text-opacity-95 font-medium text-base text-left">
              <li>✨ Create impactful evangelism ads</li>
              <li>✨ Design visuals powered by purpose</li>
              <li>✨ Share truth through modern media</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center items-center p-10 bg-[#fafcfb]">
          <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-sm text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-teal-700 p-3 rounded-full">
                <SparkIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[#0f766e]">
              FaithFlow Studio
            </h2>
            <p className="text-sm text-[#10b981] mb-6">
              Create. Inspire. Evangelize.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Sign In to Continue
            </h3>

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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showPwd ? (
                      // eye-off
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
                      // eye
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

              {/* Sign in Button */}
              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
              >
                Sign In
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
              Don’t have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-teal-700 font-semibold hover:underline"
              >
                Join the Mission
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

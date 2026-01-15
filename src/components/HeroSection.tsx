import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-8 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Fixing Funnels,</span>
                  <br />
                  <span className="text-gray-900">Fast.</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  We guarantee 15–30% lead-to-conversion improvement in 90 days
                  or we don’t charge our full fee.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Get a Free Audit
                </Link>
                <a
                  href="#process"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  How It Works
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    300+ businesses transformed
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  ⭐ 4.9/5 client satisfaction
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div
              className={`relative ${
                isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                {/* Main dashboard mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-2">
                      EaseMySaaS Analytics
                    </span>
                  </div>

                  {/* Dashboard Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold text-gray-800">
                        Revenue Dashboard
                      </h3>
                      <span className="text-xs text-green-600 font-semibold">
                        ↗ +47%
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      ₹2.4M
                    </div>
                    <div className="text-xs text-gray-500">This Month</div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">342</div>
                      <div className="text-xs text-blue-500">Leads</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600">
                        87%
                      </div>
                      <div className="text-xs text-green-500">Conv. Rate</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">
                        156
                      </div>
                      <div className="text-xs text-purple-500">Deals</div>
                    </div>
                  </div>

                  {/* Growth Chart */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-700">
                        Revenue Growth
                      </span>
                      <span className="text-xs text-green-600">
                        +23% vs last month
                      </span>
                    </div>
                    <div className="flex items-end space-x-1 h-16">
                      <div className="bg-blue-400 rounded-t flex-1 h-6"></div>
                      <div className="bg-blue-500 rounded-t flex-1 h-10"></div>
                      <div className="bg-purple-400 rounded-t flex-1 h-8"></div>
                      <div className="bg-purple-500 rounded-t flex-1 h-14"></div>
                      <div className="bg-indigo-500 rounded-t flex-1 h-16"></div>
                      <div className="bg-blue-600 rounded-t flex-1 h-12"></div>
                      <div className="bg-purple-600 rounded-t flex-1 h-14"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Jan</span>
                      <span>Jul</span>
                    </div>
                  </div>

                  {/* Pipeline Status */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">
                        Active Pipeline
                      </span>
                      <span className="text-xs font-semibold text-gray-800">
                        ₹8.2M
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        style={{ width: "73%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Floating success indicators */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-xl shadow-lg transform rotate-12 animate-float flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">+47%</div>
                    <div className="text-xs text-green-100">Growth</div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-500 rounded-full shadow-lg animate-float flex items-center justify-center"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">98%</div>
                    <div className="text-xs text-blue-100">Happy</div>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -left-6 w-12 h-12 bg-purple-500 rounded-lg shadow-lg animate-float flex items-center justify-center"
                  style={{ animationDelay: "2s" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

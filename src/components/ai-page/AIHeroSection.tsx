import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaBolt, FaRocket } from 'react-icons/fa';
import { useInView } from '../../hooks/useIntersectionObserver';

const AIHeroSection: React.FC = React.memo(() => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Memoize stats data to prevent recreation
  const statsData = React.useMemo(() => [
    { value: "50%", label: "Cost Reduction" },
    { value: "3x", label: "Faster Decisions" },
    { value: "85%", label: "Task Automation" },
    { value: "24/7", label: "AI Operations" }
  ], []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      {/* Background decorative elements - optimized with transform3d */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ willChange: 'transform' }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" 
          style={{ animationDelay: '2s', willChange: 'transform' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" 
          style={{ animationDelay: '4s', willChange: 'transform' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-purple-700 font-medium">AI-Powered Business Solutions</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Transform Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Business with AI</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Unlock efficiency, boost ROI, and future-proof your operations with 
                  <span className="font-semibold text-purple-700"> EaseMySaaS AI Consulting.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/ai-packages"
                  className="btn-primary bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Get Started with AI
                </Link>
                <a
                  href="#ai-transformation"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300 text-center"
                >
                  See How AI Works
                </a>
              </div>

              {/* AI Highlights - optimized grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {statsData.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-2xl font-bold ${
                      index === 0 ? 'text-indigo-600' :
                      index === 1 ? 'text-purple-600' :
                      index === 2 ? 'text-pink-600' : 'text-indigo-600'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Visual Elements - optimized with transform3d */}
            <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* AI Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500" style={{ willChange: 'transform' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-2">EaseMySaaS AI Dashboard</span>
                  </div>
                  
                  {/* AI Insights */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold text-gray-800">AI Insights</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Predictions */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-700">Revenue Prediction</span>
                        <span className="text-xs text-green-600">+34% ↗</span>
                      </div>
                      <div className="text-lg font-bold text-indigo-600">₹4.2M</div>
                      <div className="text-xs text-gray-500">Next Quarter</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-purple-50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-purple-600">🤖</div>
                        <div className="text-xs text-purple-500">AI Tasks</div>
                        <div className="text-sm font-bold text-purple-600">247</div>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-pink-600">⚡</div>
                        <div className="text-xs text-pink-500">Automated</div>
                        <div className="text-sm font-bold text-pink-600">89%</div>
                      </div>
                    </div>

                    {/* AI Progress Bars */}
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Lead Scoring</span>
                          <span className="text-indigo-600">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Process Automation</span>
                          <span className="text-purple-600">87%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating AI Elements - optimized with transform3d */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg transform rotate-12 animate-float flex items-center justify-center" style={{ willChange: 'transform' }}>
                  <div className="text-center">
                    <FaBrain className="text-lg text-white" />
                    <div className="text-xs text-white font-bold">AI</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: '1s', willChange: 'transform' }}>
                  <div className="text-center">
                    <FaBolt className="text-lg text-white" />
                  </div>
                </div>

                <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: '2s', willChange: 'transform' }}>
                  <div className="text-lg">
                    <FaRocket className='text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});

AIHeroSection.displayName = 'AIHeroSection';

export default AIHeroSection; 
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaBolt, FaMagic, FaBullseye, FaChartLine, FaSadTear, FaRocket } from 'react-icons/fa';

const AITransformationSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const transformations = [
    {
      icon: <FaBolt />,
      title: "Automate repetitive tasks and save time",
      description: "Eliminate manual work with intelligent automation that handles routine tasks 24/7",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: <FaMagic />,
      title: "Get predictive insights for better decisions",
      description: "Use AI-powered analytics to forecast trends and make data-driven strategic decisions",
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: <FaBullseye />,
      title: "Enhance customer experience with personalization",
      description: "Deliver tailored experiences that increase satisfaction and drive customer loyalty",
      gradient: "from-pink-400 to-red-500",
      bgGradient: "from-pink-50 to-red-50"
    },
    {
      icon: <FaChartLine />,
      title: "Increase marketing and sales performance",
      description: "Optimize campaigns with AI targeting, lead scoring, and performance predictions",
      gradient: "from-green-400 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  return (
    <section id="ai-transformation" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How AI Can <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Transform</span> Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the power of artificial intelligence to revolutionize your operations, 
              improve efficiency, and unlock new growth opportunities.
            </p>
          </div>

          {/* Transformation Journey Visual */}
          <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Before */}
                <div className="flex-1 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSadTear className="text-3xl text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Before AI</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Manual processes</li>
                    <li>• Reactive decisions</li>
                    <li>• Generic experiences</li>
                    <li>• Limited insights</li>
                  </ul>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div className="flex-1 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">With AI</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automated workflows</li>
                    <li>• Predictive intelligence</li>
                    <li>• Personalized interactions</li>
                    <li>• Real-time analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${transformation.bgGradient} opacity-50`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full hover:bg-white/90 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${transformation.gradient} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {transformation.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {transformation.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {transformation.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="pt-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${transformation.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-500">AI-Powered Solution</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">AI Transformation Results</h3>
                <p className="text-indigo-100">Real impact from our AI implementations</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">70%</div>
                  <div className="text-sm text-indigo-100">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">45%</div>
                  <div className="text-sm text-indigo-100">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3.2x</div>
                  <div className="text-sm text-indigo-100">ROI Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">90%</div>
                  <div className="text-sm text-indigo-100">Accuracy Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationSection; 
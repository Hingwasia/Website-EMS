"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaShoppingBag, FaStethoscope, FaChartBar } from 'react-icons/fa';

const AISuccessStoriesSection: React.FC = () => {
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

  const successStories = [
    {
      industry: "Retail",
      title: "Improved Conversions",
      client: "Fashion E-commerce Platform",
      challenge: "Low conversion rates and poor personalization",
      solution: "AI-powered recommendation engine and dynamic pricing",
      results: [
        { metric: "Conversion Rate", improvement: "+47%" },
        { metric: "Average Order Value", improvement: "+23%" },
        { metric: "Customer Retention", improvement: "+34%" }
      ],
      icon: <FaShoppingBag />,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      description: "Implemented AI-driven product recommendations and dynamic pricing strategies that significantly boosted sales performance."
    },
    {
      industry: "Service Business",
      title: "Streamlined Operations",
      client: "Healthcare Service Provider",
      challenge: "Manual scheduling and inefficient resource allocation",
      solution: "AI-powered scheduling and predictive resource management",
      results: [
        { metric: "Operational Efficiency", improvement: "+60%" },
        { metric: "Resource Utilization", improvement: "+45%" },
        { metric: "Patient Satisfaction", improvement: "+38%" }
      ],
      icon: <FaStethoscope />,
      gradient: "from-blue-500 to-teal-500",
      bgGradient: "from-blue-50 to-teal-50",
      description: "Automated scheduling and resource allocation using AI algorithms, dramatically improving service delivery and patient experience."
    },
    {
      industry: "Marketing",
      title: "Better Targeting & ROAS",
      client: "Digital Marketing Agency",
      challenge: "Poor ad targeting and low return on ad spend",
      solution: "AI-driven audience segmentation and campaign optimization",
      results: [
        { metric: "ROAS", improvement: "+180%" },
        { metric: "Lead Quality", improvement: "+65%" },
        { metric: "Campaign Performance", improvement: "+120%" }
      ],
      icon: <FaChartBar />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      description: "Leveraged machine learning for precise audience targeting and real-time campaign optimization, delivering exceptional ROI."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real businesses achieving remarkable results with our AI solutions. 
              See how artificial intelligence transformed their operations and boosted performance.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.bgGradient} opacity-60`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl h-full hover:bg-white/95 transition-all duration-300">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${story.gradient} rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {story.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{story.industry}</h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}>
                          {story.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{story.client}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Challenge:</h4>
                        <p className="text-sm text-gray-600">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">AI Solution:</h4>
                        <p className="text-sm text-gray-600">{story.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Results:</h4>
                      <div className="space-y-3">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{result.metric}</span>
                            <div className="flex items-center space-x-2">
                              <div className={`px-3 py-1 bg-gradient-to-r ${story.gradient} text-white text-xs font-bold rounded-full`}>
                                {result.improvement}
                              </div>
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">
                        {story.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="px-6 pb-6">
                    <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${story.gradient} px-4 py-2 rounded-full text-white text-xs font-semibold`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>AI Success Story</span>
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
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Proven AI Results Across Industries</h3>
                <p className="text-gray-300">Our AI implementations deliver measurable business impact</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-300">AI Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">120%</div>
                  <div className="text-sm text-gray-300">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">85%</div>
                  <div className="text-sm text-gray-300">Process Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Write Your AI Success Story?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Join these businesses and transform your operations with AI.
              </p>
              <Link
                href="/ai-packages"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span>Explore AI Packages</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuccessStoriesSection; 
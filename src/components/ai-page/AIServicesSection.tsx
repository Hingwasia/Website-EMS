import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const AIServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "AI Readiness Audit",
      subtitle: "Evaluate your current systems",
      description: "Comprehensive assessment of your existing infrastructure, data quality, and AI readiness score with actionable recommendations.",
      features: [
        "Current system analysis",
        "Data quality assessment", 
        "AI readiness scoring",
        "Gap identification",
        "ROI potential mapping"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Strategy & Tool Selection",
      subtitle: "Select the right AI tools",
      description: "Custom AI strategy development with tool recommendations tailored to your business goals, budget, and technical requirements.",
      features: [
        "AI strategy roadmap",
        "Tool comparison & selection",
        "Budget optimization",
        "Implementation timeline",
        "Risk assessment"
      ],
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Implementation Support",
      subtitle: "Integration with your stack",
      description: "End-to-end implementation with seamless integration into your existing systems, data migration, and workflow optimization.",
      features: [
        "System integration",
        "Data migration & cleaning",
        "Workflow automation setup",
        "API configurations",
        "Performance optimization"
      ],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Training & Monitoring",
      subtitle: "Upskill teams and track ROI",
      description: "Comprehensive team training programs with ongoing monitoring, optimization, and ROI tracking to ensure maximum value.",
      features: [
        "Team training programs",
        "User adoption support",
        "Performance monitoring",
        "ROI measurement",
        "Continuous optimization"
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">EaseMySaaS AI</span> Helps You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI implementation methodology ensures successful adoption 
              and measurable results for your business transformation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full hover:bg-white/95 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process Step */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Step {index + 1} of 4</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i <= index ? `bg-gradient-to-r ${service.gradient}` : 'bg-gray-300'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your AI Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Let's assess your AI readiness and create a custom implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/ai-packages"
                  className="btn-primary bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View AI Packages
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                >
                  Book AI Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection; 
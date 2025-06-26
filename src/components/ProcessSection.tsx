import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTools, FaCog, FaRocket } from 'react-icons/fa';

const ProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We audit your current sales process, tech stack, and identify gaps affecting your revenue.",
      icon: <FaSearch />,
      details: [
        "Current state analysis",
        "Tech stack audit",
        "Process gap identification",
        "ROI opportunity mapping"
      ]
    },
    {
      number: "02",
      title: "Tool Recommendation",
      description: "Based on your needs, we recommend the perfect CRM and tools that fit your budget and scale.",
      icon: <FaTools />,
      details: [
        "Custom tool selection",
        "Budget optimization",
        "Scalability planning",
        "Integration roadmap"
      ]
    },
    {
      number: "03",
      title: "Setup & Training",
      description: "We implement everything and train your team to use the new system effectively.",
      icon: <FaCog />,
      details: [
        "System implementation",
        "Data migration",
        "Team training sessions",
        "Best practices setup"
      ]
    },
    {
      number: "04",
      title: "Go Live",
      description: "Launch your optimized sales process with ongoing support to ensure success.",
      icon: <FaRocket />,
      details: [
        "Smooth launch",
        "Performance monitoring",
        "Ongoing optimization",
        "Success metrics tracking"
      ]
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step methodology that transforms your sales infrastructure 
              from scattered tools to a cohesive revenue engine.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <div className="text-2xl">{step.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${((activeStep + 1) / 4) * 100}%` : '0%' }}
                ></div>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Step Number */}
                    <div className="flex justify-center mb-8">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                          index <= activeStep 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-110' 
                            : 'bg-gray-400'
                        }`}
                      >
                        {index <= activeStep ? step.icon : step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div 
                      className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 ${
                        index === activeStep 
                          ? 'border-blue-600 shadow-xl scale-105' 
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        
                        {/* Details */}
                        <div className={`transition-all duration-500 overflow-hidden ${
                          index === activeStep ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <ul className="space-y-2 text-left">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <span className="text-sm text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Controls */}
          <div className="hidden md:flex justify-center space-x-2 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Sales Process?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Let's start with a free audit to identify opportunities in your current setup.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Book Discovery Call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 
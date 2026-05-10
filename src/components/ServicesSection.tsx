"use client";

import React, { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';
import Link from 'next/link';
import { FaTools, FaLink, FaChartBar } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: "💼 SMBs",
      subtitle: "Small & Medium Businesses",
      description: "Take control of your business chaos with smart CRM + AI solutions.",
      icon: <FaTools />,
      challenges: [
        "Disconnected lead sources",
        "Poor follow-up systems",
        "Inaccurate reporting",
        "Low sales team efficiency"
      ],
      features: [
        "Unified Lead Management System",
        "Smart Sales Funnels with AI-powered nudges",
        "Conversion & Attribution Tracking",
        "Plug-and-Play Reporting Dashboards",
        "AI Chatbots & Workflow Automation"
      ],
      gradient: "from-green-400 to-blue-500",
      bgGradient: "from-green-50 to-blue-50"
    },
    {
      title: "🏢 Mid-Market",
      subtitle: "Mid-Market Companies",
      description: "Simplify your tech stack and drive growth with integrated systems and AI insights.",
      icon: <FaLink />,
      challenges: [
        "Multiple siloed tools (ERP, CRM, WhatsApp, etc.)",
        "Sales/Marketing/Ops misalignment",
        "Poor post-sales visibility",
        "Manual service workflows"
      ],
      features: [
        "Integrated CRM with ERP, Accounts, Scheduling, WhatsApp",
        "AI-driven sales & marketing intelligence",
        "Centralized Service Management System",
        "Custom Dashboards for every department",
        "Automation for internal tasks & customer follow-ups"
      ],
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "🏛️ Enterprises",
      subtitle: "Enterprise Organizations",
      description: "Empower every team with AI-driven decisions and true visibility across operations.",
      icon: <FaChartBar />,
      challenges: [
        "Complex ecosystems with no single source of truth",
        "Delayed decision-making due to lack of real-time reports",
        "User-level performance tracking issues",
        "ROI measurement gaps"
      ],
      features: [
        "Enterprise-grade AI-powered CRM strategy",
        "BI-integrated KPI dashboards",
        "Multi-source data ingestion & automation flows",
        "OKR dashboards to track team effectiveness",
        "AI models for ROI prediction & budgeting"
      ],
      gradient: "from-blue-400 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We <span className="gradient-text">Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for businesses at every stage. From startups to enterprises, 
              we have the expertise to optimize your sales infrastructure.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full hover:bg-white/90 transition-all duration-300 z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
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

                    {/* Challenges */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-red-600 mb-2">Challenges We Solve:</h4>
                      <ul className="space-y-1">
                        {service.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-2">How We Help:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                            <span className="text-xs text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button 
                        type='button'
                        onClick={() => {
                          console.log('Learn More clicked!');
                          setIsModalOpen(true);
                        }}
                        className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none z-0"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <p className="text-lg text-gray-600 mb-6">
              Not sure which solution fits your business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get a Free Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default ServicesSection; 
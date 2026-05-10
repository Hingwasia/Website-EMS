"use client";

import React, { useEffect, useRef, useState } from 'react';
import { 
  FaDatabase, 
  FaBullseye, 
  FaHandshake, 
  FaArchive, 
  FaShieldAlt, 
  FaBalanceScale, 
  FaTools, 
  FaSyncAlt 
} from 'react-icons/fa';

const PrivacyPolicyContentSection: React.FC = () => {
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

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: FaDatabase,
      content: [
        {
          subtitle: "Personal Information:",
          description: "Name, email, phone number, company name, job title, location, etc."
        },
        {
          subtitle: "Business Data:",
          description: "CRM-related data shared for consultation or implementation."
        },
        {
          subtitle: "Technical Data:",
          description: "IP address, browser type, pages visited, referring websites, and cookies."
        },
        {
          subtitle: "Communication Records:",
          description: "Emails, meeting notes, and service records."
        }
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: FaBullseye,
      content: [
        {
          description: "Provide CRM consulting, integration, and automation services."
        },
        {
          description: "Communicate with you regarding your project or inquiry."
        },
        {
          description: "Improve our website, services, and client experience."
        },
        {
          description: "Send service-related or marketing emails (you may opt out at any time)."
        },
        {
          description: "Ensure data security and compliance."
        }
      ]
    },
    {
      id: 3,
      title: "Sharing and Disclosure",
      icon: FaHandshake,
      content: [
        {
          description: "We do not sell or rent your data. We may share your information:"
        },
        {
          description: "With our employees, contractors, and trusted partners under NDA."
        },
        {
          description: "With CRM or third-party tool vendors only with your prior consent."
        },
        {
          description: "If required by law or to protect rights and security."
        }
      ]
    },
    {
      id: 4,
      title: "Data Retention",
      icon: FaArchive,
      content: [
        {
          description: "We retain your data only as long as necessary to fulfill the purposes outlined or comply with legal requirements."
        }
      ]
    },
    {
      id: 5,
      title: "Data Security",
      icon: FaShieldAlt,
      content: [
        {
          description: "We use best practices (encryption, access control, secure servers) to protect your data. However, no digital transmission is 100% secure."
        }
      ]
    },
    {
      id: 6,
      title: "Your Rights",
      icon: FaBalanceScale,
      content: [
        {
          description: "You may:"
        },
        {
          description: "Request access, correction, or deletion of your data."
        },
        {
          description: "Opt-out of marketing communications."
        },
        {
          description: "Raise a concern or complaint by emailing: support@easemysaas.com"
        }
      ]
    },
    {
      id: 7,
      title: "Third-party Tools",
      icon: FaTools,
      content: [
        {
          description: "We may use third-party tools like Google Analytics, Meta, CRM platforms (e.g., LeadSquared, Salesforce, Zoho) which may collect data in accordance with their policies."
        }
      ]
    },
    {
      id: 8,
      title: "Updates to this Policy",
      icon: FaSyncAlt,
      content: [
        {
          description: "We may update this policy from time to time. The updated version will be posted on this page."
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} mb-16`}>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                <a href="https://easemysaas.com" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  https://easemysaas.com
                </a>{' '}
                or engage with our services.
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Section Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <section.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {section.id}. {section.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8">
                    <div className="space-y-4">
                      {section.content.map((item: any, itemIndex: any) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <div className="text-gray-700 leading-relaxed">
                            {item.subtitle && (
                              <span className="font-semibold text-gray-900">{item.subtitle} </span>
                            )}
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} mt-16`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-green-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a 
                href="mailto:support@easemysaas.com"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@easemysaas.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContentSection; 
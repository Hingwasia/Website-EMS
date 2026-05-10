"use client";

import React, { useEffect, useRef, useState } from 'react';
import { 
  FaCheckCircle, 
  FaCogs, 
  FaCreditCard, 
  FaUsers, 
  FaLightbulb, 
  FaUserShield, 
  FaExclamationTriangle, 
  FaTimes, 
  FaGavel, 
  FaEnvelope,
  FaFileContract 
} from 'react-icons/fa';

const TermsOfServiceContentSection: React.FC = () => {
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
      title: "Acceptance of Terms",
      icon: FaCheckCircle,
      content: [
        {
          description: "By accessing our site or using our services, you agree to these Terms. If you disagree, please do not use our services."
        }
      ]
    },
    {
      id: 2,
      title: "Services Provided",
      icon: FaCogs,
      content: [
        {
          description: "We offer:"
        },
        {
          description: "CRM consulting & implementation"
        },
        {
          description: "Process automation"
        },
        {
          description: "Sales & marketing consulting"
        },
        {
          description: "AI integrations"
        },
        {
          description: "Lead conversion optimization"
        },
        {
          description: "Details of services are outlined in project-specific proposals, SOWs, or contracts."
        }
      ]
    },
    {
      id: 3,
      title: "Payment Terms",
      icon: FaCreditCard,
      content: [
        {
          description: "50% advance, 50% post-UAT Go-Live (unless otherwise agreed in writing)."
        },
        {
          description: "All payments are non-refundable unless otherwise stated."
        },
        {
          description: "Delays in payment may result in service suspension."
        }
      ]
    },
    {
      id: 4,
      title: "Client Responsibilities",
      icon: FaUsers,
      content: [
        {
          description: "You agree to:"
        },
        {
          description: "Provide accurate, timely, and complete information."
        },
        {
          description: "Cooperate with our team during implementation or consultation."
        },
        {
          description: "Ensure any third-party tools (e.g., CRM licenses) are active and compliant."
        }
      ]
    },
    {
      id: 5,
      title: "Intellectual Property",
      icon: FaLightbulb,
      content: [
        {
          description: "All content, workflows, automations, and tools created by EaseMySaaS remain our property unless explicitly transferred in writing. Client data remains the property of the client."
        }
      ]
    },
    {
      id: 6,
      title: "Confidentiality",
      icon: FaUserShield,
      content: [
        {
          description: "Both parties agree to keep confidential all non-public business and technical information shared during engagement."
        }
      ]
    },
    {
      id: 7,
      title: "Limitation of Liability",
      icon: FaExclamationTriangle,
      content: [
        {
          description: "EaseMySaaS will not be liable for indirect, incidental, or consequential damages arising out of use or inability to use our services, including data loss or integration delays."
        }
      ]
    },
    {
      id: 8,
      title: "Termination",
      icon: FaTimes,
      content: [
        {
          description: "We may terminate services if:"
        },
        {
          description: "You breach the Terms"
        },
        {
          description: "Non-payment persists after reminders"
        },
        {
          description: "Engagement is no longer feasible due to external factors"
        }
      ]
    },
    {
      id: 9,
      title: "Governing Law",
      icon: FaGavel,
      content: [
        {
          description: "These Terms are governed by the laws of India, and disputes shall be subject to jurisdiction of courts in Delhi, India."
        }
      ]
    },
    {
      id: 10,
      title: "Contact Us",
      icon: FaEnvelope,
      content: [
        {
          description: "For any questions regarding these Terms or our services, contact:"
        },
        {
          description: "📩 Email: support@easemysaas.com"
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
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
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <div className="text-gray-700 leading-relaxed">
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
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} mt-16`} style={{ animationDelay: '1.0s' }}>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-green-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-6">
                <FaFileContract className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <a 
                href="mailto:support@easemysaas.com"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                support@easemysaas.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceContentSection; 
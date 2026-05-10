"use client";

import React, { useEffect, useRef, useState } from 'react';
import { sendEmail } from '../utils/emailjs';

const DiscoverySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    Full_Name: '',
    Email_Address: '',
    Company_Name: '',
    Current_Stack: '',
    Biggest_Challenge: '',
    Phone_Number: '',
    Service_Interest: 'discovery-call',
    Project_Budget: '',
    Project_Details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        Full_Name: formData.Full_Name,
        Email_Address: formData.Email_Address,
        Company_Name: formData.Company_Name,
        Current_Stack: formData.Current_Stack,
        Biggest_Challenge: formData.Biggest_Challenge,
        Phone_Number: formData.Phone_Number || 'Not provided',
        Service_Interest: formData.Service_Interest,
        Project_Budget: formData.Project_Budget || 'Not specified',
        Project_Details: formData.Project_Details || 'Discovery call request',
      };

      await sendEmail(templateParams);

      setSubmitStatus('success');
      setFormData({
        Full_Name: '',
        Email_Address: '',
        Company_Name: '',
        Current_Stack: '',
        Biggest_Challenge: '',
        Phone_Number: '',
        Service_Interest: 'discovery-call',
        Project_Budget: '',
        Project_Details: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const checklist = [
    {
      category: "Company Size",
      items: [
        "Growing team (5+ employees)",
        "Multiple sales channels",
        "Need for process standardization",
        "Revenue tracking challenges"
      ]
    },
    {
      category: "Current Pain Points",
      items: [
        "Lead leakage in sales funnel",
        "Disconnected tools and systems",
        "Manual reporting processes",
        "Team adoption issues"
      ]
    },
    {
      category: "Ready for Change",
      items: [
        "Budget allocated for improvement",
        "Leadership buy-in secured",
        "Team ready for new processes",
        "Timeline for implementation"
      ]
    }
  ];

  return (
    <section id="discovery" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Book Your <span className="gradient-text">Discovery Call</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's identify the specific opportunities to optimize your sales infrastructure. 
              Schedule a free consultation to get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Discovery Form */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Your Free Audit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="Full_Name"
                        required
                        value={formData.Full_Name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="Email_Address"
                        required
                        value={formData.Email_Address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="Company_Name"
                        required
                        value={formData.Company_Name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="Project_Budget"
                        value={formData.Project_Budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5l">Under ₹5 Lakhs</option>
                        <option value="5l-15l">₹5 - 15 Lakhs</option>
                        <option value="15l-50l">₹15 - 50 Lakhs</option>
                        <option value="above-50l">Above ₹50 Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Tech Stack
                      </label>
                      <input
                        type="text"
                        name="Current_Stack"
                        value={formData.Current_Stack}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., HubSpot, Salesforce, Pipedrive..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="Phone_Number"
                        value={formData.Phone_Number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biggest Challenges *
                    </label>
                    <textarea
                      name="Biggest_Challenge"
                      required
                      rows={4}
                      value={formData.Biggest_Challenge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Describe your main sales process challenges..."
                    />
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-green-700 font-medium">Thank you! We'll be in touch within 24 hours.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="text-red-700 font-medium">Failed to send. Please try again or email us directly.</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Scheduling...
                      </div>
                    ) : (
                      'Schedule Free Discovery Call'
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Or email us directly at{' '}
                    <a href="mailto:Info@easemysaas.com" className="text-blue-600 hover:underline">
                      Info@easemysaas.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Persona Checklist */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Are You a Good Fit?
                </h3>
                <p className="text-gray-600 mb-6">
                  Check if our consulting services align with your business needs:
                </p>

                <div className="space-y-6">
                  {checklist.map((section, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {section.category}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Box */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What You'll Get in Your Discovery Call:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Free audit of your current sales process",
                    "Identification of revenue leaks",
                    "Custom tool recommendations",
                    "Implementation roadmap",
                    "ROI projections"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                View Our Sample SOW
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                See exactly what we deliver and how we structure our engagements.
              </p>
              <a 
                href="https://www.notion.so/Statement-of-Work-SOW-12d67a2084d780739fa6ca3553653bfc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
              >
                View Our Sample SOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection; 
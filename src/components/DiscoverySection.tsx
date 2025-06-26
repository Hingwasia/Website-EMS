import React, { useEffect, useRef, useState } from 'react';

const DiscoverySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    techStack: '',
    challenges: '',
    revenue: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
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
                        name="name"
                        required
                        value={formData.name}
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
                        name="email"
                        required
                        value={formData.email}
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
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Revenue
                      </label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select range</option>
                        <option value="under-100k">Under $100K</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-plus">$5M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Tech Stack
                    </label>
                    <input
                      type="text"
                      name="techStack"
                      value={formData.techStack}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., HubSpot, Salesforce, Pipedrive..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biggest Challenges *
                    </label>
                    <textarea
                      name="challenges"
                      required
                      rows={4}
                      value={formData.challenges}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Describe your main sales process challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Schedule Free Discovery Call
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
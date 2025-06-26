import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaBolt, FaBullseye } from 'react-icons/fa';

const AIPackagesSection: React.FC = () => {
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

  const packages = [
    {
      name: "Starter",
      title: "AI Foundation",
      subtitle: "Perfect for small businesses",
      price: "₹2,50,000",
      duration: "3-4 weeks",
      description: "Get started with AI fundamentals and basic automation to streamline your core processes.",
      features: [
        "AI Readiness Assessment",
        "Basic Process Automation",
        "Simple Chatbot Implementation",
        "Data Analytics Setup",
        "Team Training (5 hours)",
        "3 Months Support"
      ],
      highlights: [
        "Save 20+ hours/week",
        "Reduce manual errors by 60%",
        "Improve response time by 50%"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      popular: false,
      icon: <FaRocket />
    },
    {
      name: "Professional",
      title: "AI Acceleration",
      subtitle: "Ideal for growing businesses",
      price: "₹6,50,000",
      duration: "6-8 weeks",
      description: "Comprehensive AI implementation with advanced features and predictive analytics capabilities.",
      features: [
        "Everything in Starter",
        "Advanced AI Workflows",
        "Predictive Analytics",
        "CRM AI Integration",
        "Marketing Automation",
        "Custom AI Models",
        "Team Training (15 hours)",
        "6 Months Priority Support"
      ],
      highlights: [
        "Increase revenue by 35%",
        "Automate 70% of processes",
        "Predict trends with 85% accuracy"
      ],
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      popular: true,
      icon: <FaBolt />
    },
    {
      name: "Enterprise",
      title: "AI Transformation",
      subtitle: "For large organizations",
      price: "₹15,00,000+",
      duration: "10-12 weeks",
      description: "Complete AI transformation with custom solutions, advanced integrations, and dedicated support.",
      features: [
        "Everything in Professional",
        "Custom AI Solutions",
        "Multi-department Integration",
        "Advanced Machine Learning",
        "Real-time Decision Engine",
        "API Development",
        "White-label Solutions",
        "Team Training (40 hours)",
        "12 Months Dedicated Support"
      ],
      highlights: [
        "Transform entire organization",
        "Scale AI across departments",
        "Dedicated AI consultant"
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      popular: false,
      icon: <FaBullseye />
    }
  ];

  return (
    <section id="ai-packages" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Implementation</span> Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect AI package for your business. From basic automation to complete transformation, 
              we have the right solution for your needs and budget.
            </p>
            
            {/* Package Comparison CTA */}
            <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200">
              <div className="text-sm text-gray-600">
                Need help choosing? 
              </div>
              <Link
                to="/contact"
                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm underline"
              >
                Compare All Packages
              </Link>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? 'lg:scale-105 lg:shadow-2xl' : ''
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-50`}></div>
                
                {/* Card Content */}
                <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${
                  pkg.popular ? 'border-purple-300' : 'border-gray-200'
                } rounded-2xl h-full hover:bg-white/95 transition-all duration-300`}>
                  
                  {/* Header */}
                  <div className="p-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${pkg.gradient} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {pkg.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                          {pkg.title}
                        </p>
                        <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                        <span className="text-sm text-gray-600">starting from</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Timeline: {pkg.duration}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${pkg.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className={`bg-gradient-to-r ${pkg.bgGradient} rounded-lg p-4`}>
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Expected Results:</h4>
                      <ul className="space-y-2">
                        {pkg.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="p-8 pt-0 space-y-4">
                    <Link
                      to="/contact"
                      className={`w-full text-center py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-xl'
                          : `bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-xl`
                      } block`}
                    >
                      Download SOW
                    </Link>
                    
                    <Link
                      to="/contact"
                      className="w-full text-center py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 block"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className={`mt-16 space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            {/* Additional Services */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Something Custom?
                </h3>
                <p className="text-lg text-gray-600">
                  We also offer specialized AI services and custom solutions tailored to your unique requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                    🔬
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Research & Development</h4>
                  <p className="text-sm text-gray-600">Custom AI models and experimental implementations</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                    🎓
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Training Programs</h4>
                  <p className="text-sm text-gray-600">Comprehensive AI education for your team</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                    🤝
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Partnership</h4>
                  <p className="text-sm text-gray-600">Long-term AI strategy and implementation partnership</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="text-lg text-indigo-100 mb-6">
                  Get a free AI readiness assessment and custom implementation proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Free AI Assessment
                  </Link>
                  <a
                    href="tel:+919582024696"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  >
                    Call +91-9582024696
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPackagesSection; 
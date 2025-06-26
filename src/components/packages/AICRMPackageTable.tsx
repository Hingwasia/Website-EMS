import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const AICRMPackageTable: React.FC = () => {
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

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI + CRM <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Consulting</span> Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combine the power of AI with robust CRM systems for comprehensive business transformation.
            </p>
          </div>

          {/* Package Table */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="grid grid-cols-4 gap-4 p-6">
                  <div className="font-semibold text-lg">Feature</div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Starter AI</div>
                    <div className="text-sm opacity-90">₹50,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Pro AI</div>
                    <div className="text-sm opacity-90">₹1,00,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Enterprise AI</div>
                    <div className="text-sm opacity-90">Custom Quote</div>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Business Process Audit */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">Business Process Audit</div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* AI Tool Recommendation */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">AI Tool Recommendation</div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* Implementation Support */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">Implementation Support</div>
                  <div className="flex justify-center"><CrossIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* AI Sales/Marketing Use-Cases */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">AI Sales/Marketing Use-Cases</div>
                  <div className="flex justify-center"><CrossIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* ROI Tracking Dashboard */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">ROI Tracking Dashboard</div>
                  <div className="flex justify-center"><CrossIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Custom</span>
                  </div>
                </div>

                {/* Team Training */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">Team Training</div>
                  <div className="flex justify-center"><CrossIcon /></div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Basic</span>
                  </div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Full</span>
                  </div>
                </div>

                {/* Support */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-purple-50 transition-colors">
                  <div className="font-medium text-gray-900">Support</div>
                  <div className="text-center font-medium text-gray-700">7 Days</div>
                  <div className="text-center font-medium text-gray-700">30 Days</div>
                  <div className="text-center font-medium text-gray-700">Ongoing</div>
                </div>
              </div>

              {/* Table Footer */}
              <div className="bg-purple-50 p-6">
                <div className="grid grid-cols-4 gap-4">
                  <div></div>
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block"
                    >
                      Choose Pro
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team can create a tailored AI + CRM package that fits your specific business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Talk to a Consultant
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICRMPackageTable; 
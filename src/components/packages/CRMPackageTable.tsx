"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const CRMPackageTable: React.FC = () => {
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
    <section id='aiPackages' ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              CRM & Lead Generation <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible packages tailored to your business needs—whether you're just starting or scaling your business.
            </p>
          </div>

          {/* Package Table */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="grid grid-cols-4 gap-4 p-6">
                  <div className="font-semibold text-lg">Feature</div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Starter</div>
                    <div className="text-sm opacity-90">₹75,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Growth</div>
                    <div className="text-sm opacity-90">₹1,25,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Enterprise</div>
                    <div className="text-sm opacity-90">Custom Quote</div>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Lead Capture Setup */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-blue-50 transition-colors">
                  <div className="font-medium text-gray-900">Lead Capture Setup</div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* Sales Funnel Design */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-blue-50 transition-colors">
                  <div className="font-medium text-gray-900">Sales Funnel Design</div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* WhatsApp & Email Integration */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-blue-50 transition-colors">
                  <div className="font-medium text-gray-900">WhatsApp & Email Integration</div>
                  <div className="flex justify-center"><CrossIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                  <div className="flex justify-center"><CheckIcon /></div>
                </div>

                {/* Reporting & Dashboard */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-blue-50 transition-colors">
                  <div className="font-medium text-gray-900">Reporting & Dashboard</div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Basic</span>
                  </div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Advanced</span>
                  </div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Custom</span>
                  </div>
                </div>

                {/* Onboarding Time */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-blue-50 transition-colors">
                  <div className="font-medium text-gray-900">Onboarding Time</div>
                  <div className="text-center font-medium text-gray-700">10 Days</div>
                  <div className="text-center font-medium text-gray-700">20 Days</div>
                  <div className="text-center font-medium text-gray-700">30+ Days</div>
                </div>

                {/* Support */}
                <div className="grid grid-cols-4 gap-4 p-6 hover:bg-blue-50 transition-colors">
                  <div className="font-medium text-gray-900">Support</div>
                  <div className="text-center font-medium text-gray-700">7 Days</div>
                  <div className="text-center font-medium text-gray-700">15 Days</div>
                  <div className="text-center font-medium text-gray-700">30 Days</div>
                </div>
              </div>

              {/* Table Footer */}
              <div className="bg-blue-50 p-6">
                <div className="grid grid-cols-4 gap-4">
                  <div></div>
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block"
                    >
                      Choose Growth
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMPackageTable; 